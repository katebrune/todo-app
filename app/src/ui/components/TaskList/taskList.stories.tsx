import React from 'react';
import { TaskList } from './taskList';
import { mockTaskListData } from './taskList.data.example';

export default { title: 'Components/TaskList' };

export const normal = () => <TaskList data={mockTaskListData} />;
