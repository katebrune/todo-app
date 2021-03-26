import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../auth/authContext';
import { Button, Text, Flex } from '../../primitives';

const LandingButton = styled(Button)`
  width: 200px;
`;
export const LandingContent: React.FunctionComponent = () => {
  const { startSession } = useAuth();

  return (
    <>
      <Flex.Col>
        <Flex.Item>
          <Text.Title>Hello, World!</Text.Title>
        </Flex.Item>
        <Flex.Item>
          <Text.Text>
            This is a lil app to keep track of what you need to do today
          </Text.Text>
        </Flex.Item>
        <Flex.Item>
          <LandingButton onClick={startSession}>Get Started</LandingButton>
        </Flex.Item>
      </Flex.Col>
    </>
  );
};
