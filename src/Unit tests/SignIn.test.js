import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import SignIn from '../components/SignIn';

describe('Sign In component', () => {
  beforeEach(() => {
    render(<SignIn/>);
  });
  
  afterEach(() => {
    cleanup();
  })

  test('displays inputs and header on Sign In page', () => {
    const { getByText, queryByTestId } = screen;
  
    getByText('YOUR MONEY UNDER YOUR CONTROL.')
    getByText(`Have an account?`);
    getByText('Sign In')
    expect(queryByTestId('signup-header').textContent).toEqual('SIGN UP');
    expect(queryByTestId('email-input')).toBeTruthy();
    expect(queryByTestId('password-input')).toBeTruthy();
  });
})

