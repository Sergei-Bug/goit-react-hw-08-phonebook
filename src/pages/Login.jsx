import { WrapperRoot } from 'components/App.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';

export const Login = () => {
  return (
    <WrapperRoot>
      <h1>LOG IN TO APPLICATION</h1>
      <LoginForm />
    </WrapperRoot>
  );
};
