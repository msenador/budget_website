import React from 'react';

const SignIn = (props) => {
  const {email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError} = props

  return(
    <section className="login">
    <div className="loginContainer">
    <label>Email</label>
    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
    <p>{emailError}</p>
    <label>Password</label>
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
    <p>{passwordError}</p>
    <div>
      {hasAccount ? (
        <>
        <button onClick={handleLogin}>Sign In</button>
        <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
        </>
      ) : (
        <>
        <button onClick={handleSignUp}>Sign Up</button>
        <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
        </>
      )}
    </div>
    </div>
    </section>
  )
}

export default SignIn;

// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

// const MenuBarPosition = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   padding-top: 20px;
//   padding-left: 40px;
//   padding-right: 60px;
//   min-width: 330px;
//   text-transform: uppercase;
// `;

// const SignInContainer = styled.div`
//   min-width: 400px;
//   text-transform: uppercase;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// function SignIn({user, updateUser}) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleClick = () => {
//     setEmail(email);
//     setPassword(password);
//     updateUser(email);
//   };

//   const registerUrl = window.location.href.indexOf("register") > 0;

//   return (
//     <>
//           <MenuBarPosition>
//       <Link to={user ? `/userid-${user}` : '/register'}><MonetizationOnOutlinedIcon data-testid="dashboard-icon" style={{ fontSize: '50px' }} /></Link>
//       {registerUrl ? (
//         <Link data-testid="dashboard-signin" to="/sign-in">Sign In</Link>
//       ) : (
//         <Link data-testid="dashboard-register" to="/register">Register</Link>
//       )}
      
//     </MenuBarPosition>
//       <SignInContainer>
//       <h1>Sign In!</h1>
//       <div>
//         <div data-testid="label-email">Email:</div>
//         <input data-testid="input-email" type="email" placeholder="Email address" value={email} onChange={(e) => { setEmail(e.target.value); }} />
//         <div data-testid="label-password">Password:</div>
//         <input data-testid="input-password" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
//         <button type="button" onClick={handleClick}>Sign In</button>
//       </div>
//       </SignInContainer>
//     </>
//   );
// }

// export default SignIn;
