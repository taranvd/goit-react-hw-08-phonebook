import { register } from 'redux/auth/operations';
import { ButtonStyled, Form, Label } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      const res = await dispatch(
        register({
          name: form.elements.name.value,
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
        Username
        <input type="text" name="name" />
      </Label>
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <ButtonStyled type="submit">Register</ButtonStyled>
    </Form>
  );
};

export default RegisterForm;
