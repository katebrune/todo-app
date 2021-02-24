import { TaskListDataFragment } from '../../typedDocumentNodes';
import { mockTaskCardData } from '../TaskCard/taskList.data.example';

export const mockTaskListData: TaskListDataFragment = {
  viewTasks: [{ ...mockTaskCardData }, { ...mockTaskCardData }],
};
