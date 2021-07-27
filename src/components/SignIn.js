import React, {useState} from 'react';
import {Link} from "react-router-dom";
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';


function SignIn({ user }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        setEmail(email);
        setPassword(password);
        console.log(`Email: ${email} - Password: ${password}`);
    }

    return(
        <>
            <div>
                <Link to={user ? `/userid-${user}` : '/register'}><MonetizationOnOutlinedIcon/></Link>
                <Link to={'/register'}>Register</Link>
            </div>
            <h1>Sign In!</h1>
            <div>
                <div data-testid={'label-email'}>Email:</div>
                <input data-testid={'input-email'} type={'email'} placeholder={'Email address'} value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <div data-testid={'label-password'}>Password:</div>
                <input data-testid={'input-password'} type={'password'} placeholder={'Password'} value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                <button onClick={handleClick}>Sign In</button>
            </div>
        </>
    );
}

export default SignIn;