import React from 'react';
import {Link} from "react-router-dom";
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';


function Register({ user }){
    return(
        <>
            <h1>Register!</h1>
            <div>
                <Link to={user ? `/userid-${user}` : '/register'}><MonetizationOnOutlinedIcon/></Link>
                <Link to={'/sign-in'}>Sign In</Link>
            </div>
        </>
    );
}

export default Register;