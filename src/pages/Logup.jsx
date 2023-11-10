import { WrapperRoot } from 'components/App.styled';
import { LogupForm } from 'components/LogupForm/LogupForm';

export const Logup = () => {
  return (
    <WrapperRoot>
      <h1>NEW USER REGISTRATION</h1>
      <LogupForm />
    </WrapperRoot>
  );
};
