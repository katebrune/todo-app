import styled from 'styled-components';

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 1.8em;
  height: 1.8em;
  background-color: #0a1944;
  border-radius: 50%;
  vertical-align: middle;
  border: 3px solid #ffd949;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: #97b4ff;
    border: 3px solid #97b4ff;
  }

  &:active {
    transform: translateY(2px);
  }
`;
