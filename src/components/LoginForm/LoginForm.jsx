import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Button, ErrorText, Input, Text, Wrapper } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialValues = {
  email: '',
  password: '',
};

let userSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = (values, actions) => {
    const item = {
      email: values.email,
      password: values.password,
    };
    dispatch(logIn(item))
      .then(unwrapResult)
      .catch(rejectedValueOrSerializedError => {
        toast.error(rejectedValueOrSerializedError);
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={handleOnSubmit}
    >
      <Wrapper>
        <Text>Email</Text>
        <Input type="email" name="email" title="email" />
        <ErrorMessage name="name">
          {() => <ErrorText>Wrong email</ErrorText>}
        </ErrorMessage>
        <Text>Password</Text>
        <Input
          type="password"
          name="password"
          title="password"
          autoComplete="on"
        />
        <ErrorMessage name="password">
          {() => <ErrorText>Wrong password</ErrorText>}
        </ErrorMessage>
        <Button type="Submit">Log in</Button>
      </Wrapper>
    </Formik>
  );
};
