import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Login = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </HelmetProvider>
    </div>
  );
};

export default Login;
