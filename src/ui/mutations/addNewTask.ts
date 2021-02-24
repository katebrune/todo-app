import { gql } from '@apollo/client';

export const ADD_NEW_TASK = gql`
  mutation AddTask($name: String!, $description: String!) {
    addTask(name: $name, description: $description) {
      name
      description
      status
    }
  }
`;
