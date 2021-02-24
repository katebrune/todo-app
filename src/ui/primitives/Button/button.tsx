import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 25px;
  padding: 10px;
  background-color: #142250;
  color: #25dfff;
  border: 3px solid #25dfff;
  height: 50px;
  cursor: pointer;
  width: 100px;
  outline: none;
  font-size: 1em;
  font-weight: normal;

  &:hover {
    transition: 0.1s;
    border: 4px solid #25dfff;
    font-weight: bold;
  }

  &:active {
    transform: translateY(4px);
  }
`;
