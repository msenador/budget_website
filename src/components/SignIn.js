import React, { useEffect, useState } from 'react';
import Dashboard from '../reusable components/Dashboard';
import styled from 'styled-components';

const SignInContainer = styled.div`
  min-width: 400px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function SignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    setEmail(email);
    setPassword(password);
    props.updateUser(email);
  };

  return (
    <>
      <Dashboard />
      <SignInContainer>
      <h1>Sign In!</h1>
      <div>
        <div data-testid="label-email">Email:</div>
        <input data-testid="input-email" type="email" placeholder="Email address" value={email} onChange={(e) => { setEmail(e.target.value); }} />
        <div data-testid="label-password">Password:</div>
        <input data-testid="input-password" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
        <button type="button" onClick={handleClick}>Sign In</button>
      </div>
      </SignInContainer>
    </>
  );
}

export default SignIn;
