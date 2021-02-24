import React from 'react';
import { Text } from './text';

export default { title: 'Primitives/Text' };

export const text = () => (
  <>
    <Text.Text>Normal Text</Text.Text>
    <Text.Subtitle>Subtitle Text</Text.Subtitle>
    <Text.Title>Title Text</Text.Title>
  </>
);
