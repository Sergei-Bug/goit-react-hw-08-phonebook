import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Name = styled.p`
  font-weight: bold;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  border-color: lightgray;
  transition: background-color 150ms linear 0s, transform 150ms linear 0s;

  &:hover {
    // background-color: rgb(57, 176, 255);
    transform: translateY(2px);
  }
`;
