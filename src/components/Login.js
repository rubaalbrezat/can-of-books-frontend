import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../Footer.css'

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <button className='login' onClick={loginWithRedirect}>Log in</button>
  );
}

export default LoginButton;