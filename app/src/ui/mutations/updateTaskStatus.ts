import { gql } from '@apollo/client';

export const UPDATE_TASK_STATUS = gql`
  mutation updateTaskStatus($id: Int!, $status: String!) {
    updateTask(id: $id, status: $status) {
      name
      description
      status
    }
  }
`;
