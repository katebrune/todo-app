import styled from 'styled-components';

const BaseInput = styled.input`
  color: #97b4ff;
  font-size: 1em;
  font-family: sans-serif;
  border: 2px solid #97b4ff;
  border-radius: 8px;
  padding: 10px;
  background-color: #142250;
  outline: none;
`;

const BaseTextArea = styled.textarea`
  color: #97b4ff;
  font-size: 1em;
  font-family: sans-serif;
  border: 2px solid #97b4ff;
  border-radius: 8px;
  padding: 10px;
  background-color: #142250;
  outline: none;
`;

export const TextInput = {
  Input: BaseInput,
  Area: BaseTextArea,
};
