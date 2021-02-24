import { gql } from '@apollo/client';
import { TaskCardDataFragmentDoc } from '../../typedDocumentNodes';

export default gql`
  fragment TaskListData on Query {
    viewTasks {
      ...TaskCardData
    }
  }
  ${TaskCardDataFragmentDoc}
`;
