import React, { FunctionComponent } from 'react';
import { filter } from 'graphql-anywhere';
import {
  TaskCardDataFragment,
  TaskCardDataFragmentDoc,
  TaskListDataFragment,
} from '../../typedDocumentNodes';
import { TaskCard } from '../TaskCard/taskCard';

interface TaskListProps {
  data: TaskListDataFragment;
}

export const TaskList: FunctionComponent<TaskListProps> = ({ data }) => {
  const sortedData = data.viewTasks.sort(
    (a: TaskCardDataFragment, b: TaskCardDataFragment) =>
      a.id > b.id ? 1 : -1,
  );
  return (
    <>
      {sortedData.map((task, index) => (
        <TaskCard key={index} data={filter(TaskCardDataFragmentDoc, task)} />
      ))}
    </>
  );
};
