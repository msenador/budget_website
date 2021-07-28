import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Dashboard from '../reusable components/Dashboard';

const RegisterContainer = styled.div`
  min-width: 400px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegisterHeader = styled.h1`
  padding-top: 100px;
`;

const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [finalPassword, setFinalPassword] = useState('');

  const checkPassword = () => {
    if (password === confirmPassword) {
      setFinalPassword(password);
      return finalPassword;
    }
    alert('PASSWORDS DO NOT MATCH');
    return 0;
  };

  const handleClick = () => {
    setEmail(email);
    checkPassword();
    console.log(
      `email: ${email} -- password: ${password} -- confirm: ${confirmPassword} -- final: ${finalPassword}`,
    );
  };

  useEffect(() => {
    setFinalPassword(password);
  }, [password]);

  return (
    <>
      <Dashboard />
      <RegisterContainer>
        <div style={{ marginTop: '60px', fontSize: '15px' }}>
          *No Need to link your bank accounts*
        </div>
        <div style={{ fontWeight: 'bolder', marginTop: '60px', fontSize: '30px' }}>
          you are in control
        </div>
        <div>
          just register and begin!
        </div>
        <RegisterHeader>Track your budget</RegisterHeader>
        <RegisterForm>
          <div data-testid="label-email">Email:</div>
          <input data-testid="input-email" type="email" placeholder="Email address" value={email} onChange={(e) => { setEmail(e.target.value); }} />
          <div data-testid="label-password">Password:</div>
          <input data-testid="input-password" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
          <div data-testid="label-confirm-password">Confirm Password:</div>
          <input data-testid="input-confirm-password" type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value); }} />
          <button type="button" style={{ marginTop: '25px', width: '85px', alignSelf: 'center' }} onClick={handleClick}>Register</button>
        </RegisterForm>
      </RegisterContainer>
    </>
  );
}

export default Register;
