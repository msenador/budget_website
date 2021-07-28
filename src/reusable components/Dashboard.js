/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import styled from 'styled-components';

const MenuBarPosition = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 60px;
  min-width: 330px;
`;

function Dashboard({ user }) {
  return (
    <MenuBarPosition>
      <Link to={user ? `/userid-${user}` : '/register'}><MonetizationOnOutlinedIcon data-testid="dashboard-icon" style={{ fontSize: '50px' }} /></Link>
      <Link data-testid="dashboard-signin" to="/sign-in">Sign In</Link>
    </MenuBarPosition>
  );
}

export default Dashboard;
