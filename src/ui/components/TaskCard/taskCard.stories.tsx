import React from 'react';
import { TaskCard } from './taskCard';
import { mockTaskCardData } from './taskList.data.example';

export default { title: 'Components/TaskCard' };

export const todo = () => <TaskCard data={mockTaskCardData} />;

export const complete = () => (
  <TaskCard data={{ ...mockTaskCardData, status: 'COMPLETE' }} />
);
