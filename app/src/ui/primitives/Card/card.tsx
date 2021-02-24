import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0 0 32px;
  margin: 15px;
  margin-left: 100px;
  width: 300px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  background-color: #0a1944;
`;

const BaseContent = styled.div`
  padding: 10px;
  color: #97b4ff;
`;

const BaseTitle = styled.div`
  padding: 10px;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.5em;
  border-bottom: 2px solid #8916ff;
  margin: 5px;
`;

const CompleteTitle = styled(BaseTitle)`
  color: #97b4ff;
  border-bottom: 2px solid #97b4ff;
`;

interface CardProps {
  complete?: boolean;
  title?: any;
  content?: any;
}

export const Card: FunctionComponent<CardProps> = ({
  complete,
  title,
  content,
}) => {
  return (
    <BaseCard>
      {title &&
        (complete ? (
          <BaseTitle>{title}</BaseTitle>
        ) : (
          <CompleteTitle>{title}</CompleteTitle>
        ))}
      {content && <BaseContent>{content}</BaseContent>}
    </BaseCard>
  );
};
