import React from 'react';

const HomePage = ({ handleLogout }) => {

    return(
        <>
        <h1>Welcome!</h1>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default HomePage;