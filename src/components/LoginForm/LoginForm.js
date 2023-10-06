import { useDispatch } from 'react-redux';
import { ButtonStyled, Form, Label } from './LoginForm.styled';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const res = await dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );

      if (!res.error) {
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <ButtonStyled type="submit">Log In</ButtonStyled>
    </Form>
  );
};

export default LoginForm;
