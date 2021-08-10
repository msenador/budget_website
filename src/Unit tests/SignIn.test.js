import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import SignIn from '../components/SignIn';

describe('Sign In compoenent', () => {
  beforeEach(() => {
    render(<SignIn/>);
  });
  
  afterEach(() => {
    cleanup();
  })

  test('displays inputs on Sign In page', () => {
    const { getByText, queryByTestId } = screen;
  
    getByText(`Have an account?`);
    getByText('Sign In')
    expect(queryByTestId('signup-header').textContent).toEqual('SIGN UP');
    expect(queryByTestId('email-input')).toBeTruthy();
    expect(queryByTestId('password-input')).toBeTruthy();
  });

  test('displays inputs on Sign Up page after toggle button is clicked', () => {
    const { getByText, getByTestId, queryByTestId } = screen;
  
    fireEvent.click(getByTestId('signin-toggle'));
    getByText(`Don't have an account?`);
    expect(queryByTestId('signup-header').textContent).toEqual('SIGN UP');
    expect(queryByTestId('email-input')).toBeTruthy();
    expect(queryByTestId('password-input')).toBeTruthy();
  });
})

