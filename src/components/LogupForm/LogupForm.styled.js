import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Wrapper = styled(Form)`
  margin: 0 auto;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border: 1px solid darkgray;
  border-radius: 5px;
  box-shadow: 0px 2px 10px -3px;
  background-color: #ffffff;
  padding: 20px;
  gap: 10px;
  width: 300px;
`;

export const Text = styled.p`
  margin: 0;
`;

export const ErrorText = styled.p`
  margin: 0;
  color: red;
`;

export const Input = styled(Field)``;

export const Button = styled.button`
  cursor: pointer;
  color: white;
  background-color: rgb(52, 152, 219);
  padding: 8px;
  border-radius: 6px;
  border-color: transparent;
  transition: background-color 150ms linear 0s, transform 150ms linear 0s;

  &:hover {
    background-color: rgb(57, 176, 255);
    transform: translateY(2px);
  }
`;