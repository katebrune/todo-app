import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { filter } from 'graphql-anywhere';
import moment from 'moment';
import styled from 'styled-components';
import cookies from 'next-cookies';
import Modal, { ModalProvider } from 'styled-react-modal';
import { TaskList } from '../components/TaskList/taskList';
import {
  HomePageDocument,
  HomePageQuery,
  TaskListDataFragmentDoc,
} from '../typedDocumentNodes';
import { Flex, Text, Button } from '../primitives';
import {
  NewTaskForm,
  NewTaskFormValues,
} from '../components/NewTaskForm/newTaskForm';
import { ADD_NEW_TASK } from '../mutations/addNewTask';
import { getApolloClient } from '../auth/ApolloClientProvider';

interface HomePageProps {
  data: HomePageQuery;
}

const HeaderRow = styled(Flex.Row)`
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Home: NextPage<HomePageProps> = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const [addNewTask] = useMutation(ADD_NEW_TASK);

  function refreshData() {
    router.replace(router.asPath);
  }

  function getCurrentDate(): string {
    const date = moment();
    return `${date.format('dddd')} ${date.format(
      'MMMM',
    )} ${date.date()}, ${date.year()}`;
  }

  async function submitNewTask(values: NewTaskFormValues) {
    setOpen(false);
    await addNewTask({
      variables: {
        name: values.name,
        description: values.description,
      },
    });
    refreshData();
  }

  function toggleModal() {
    setOpen(!open);
  }

  return (
    <ModalProvider>
      <Flex.Col>
        <HeaderRow>
          <Text.Subtitle>{getCurrentDate()}</Text.Subtitle>
          <Button onClick={() => setOpen(true)}>Add Task</Button>
        </HeaderRow>
        <TaskList data={filter(TaskListDataFragmentDoc, data)} />
      </Flex.Col>
      <Modal isOpen={open} onBackgroundClick={toggleModal}>
        <NewTaskForm onSubmit={submitNewTask} />
      </Modal>
    </ModalProvider>
  );
};

export const getServerSideProps = async (ctx) => {
  const { accessToken } = cookies(ctx);
  const redirectOnError = () =>
    ctx.res.writeHead(302, { Location: '/login' }).end();
  if (!accessToken) return redirectOnError();
  const client = getApolloClient(accessToken);
  const res = await client.query<HomePageQuery>({
    query: HomePageDocument,
  });

  return { props: res };
};

export default Home;
