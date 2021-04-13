import { gql } from '@apollo/client';

export const START_SESSION = gql`
  mutation StartSession {
    startSession
  }
`;
