import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import { Link } from 'react-router-dom';

const MenuBarPosition = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 60px;
  text-transform: uppercase;
`;

const RegisterContainer = styled.div`
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

function Register({ user }) {
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

  const registerUrl = window.location.href.indexOf('register') > 0;

  return (
    <>
      <MenuBarPosition>
        <Link to={user ? `/userid-${user}` : '/register'}><MonetizationOnOutlinedIcon data-testid="dashboard-icon" style={{ fontSize: '50px' }} /></Link>
        {registerUrl ? (
          <Link data-testid="dashboard-signin" to="/sign-in">Sign In</Link>
        ) : (
          <Link data-testid="dashboard-register" to="/register">Register</Link>
        )}

      </MenuBarPosition>
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
          <button type="button" style={{ marginTop: '25px', alignSelf: 'center' }} onClick={handleClick}>Register</button>
        </RegisterForm>
      </RegisterContainer>
    </>
  );
}

export default Register;