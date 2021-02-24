import styled from 'styled-components';

const BaseFlex = styled.div`
  display: flex;
`;

const FlexRow = styled(BaseFlex)`
  flex-direction: row;
`;

const FlexCol = styled(BaseFlex)`
  flex-direction: column;
`;

export const Flex = {
  Row: FlexRow,
  Col: FlexCol,
};
