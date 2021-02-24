import gql from 'graphql-tag';
import { TaskListDataFragmentDoc } from '../typedDocumentNodes';

export default gql`
  query HomePage {
    ...TaskListData
  }
  ${TaskListDataFragmentDoc}
`;
