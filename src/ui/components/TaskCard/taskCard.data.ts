import { gql } from '@apollo/client';

export default gql`
  fragment TaskCardData on Task {
    id
    name
    description
    status
  }
`;
