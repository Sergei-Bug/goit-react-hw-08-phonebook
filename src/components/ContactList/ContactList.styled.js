import styled from 'styled-components';

export const Title = styled.h2``;

export const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 32px;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  border: transparent;
  background-color: #ffbfbf;
  transition: background-color 150ms linear 0s, transform 150ms linear 0s;

  &:hover {
    background-color: #ff7a7a;
    transform: translateY(2px);
  }
`;
