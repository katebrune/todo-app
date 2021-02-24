import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { TaskCardDataFragment } from '../../typedDocumentNodes';
import { useMutation } from '@apollo/client';
import { Flex, Checkbox, Text, Card } from '../../primitives';
import { UPDATE_TASK_STATUS } from '../../mutations/updateTaskStatus';
export interface TaskCardProps {
  data: TaskCardDataFragment;
}

const TitleRow = styled(Flex.Row)`
  justify-content: space-between;
  align-items: center;
`;

export const TaskCard: FunctionComponent<TaskCardProps> = ({ data }) => {
  const { id, name, description, status } = data;
  const router = useRouter();
  const [updateTaskStatus] = useMutation(UPDATE_TASK_STATUS);

  function refreshData() {
    router.replace(router.asPath);
  }
  async function updateStatus() {
    const udpatedStatus = status === 'COMPLETE' ? 'TODO' : 'COMPLETE';

    await updateTaskStatus({
      variables: {
        id: id,
        status: udpatedStatus,
      },
    });
    refreshData();
  }
  return (
    <Card
      complete={status === 'COMPLETE'}
      title={
        <TitleRow>
          <Text.Subtitle>{name}</Text.Subtitle>
          <Checkbox checked={status === 'COMPLETE'} onChange={updateStatus} />
        </TitleRow>
      }
      content={<Text.Text>{description}</Text.Text>}
    />
  );
};
