import React from 'react';
import { fireEvent, getByText, queryByTestId, queryByText, render, screen } from '@testing-library/react';
import SignIn from '../components/SignIn';

beforeEach(() => {
  render(<SignIn/>);
});

test('displays inputs on Sign In page', () => {
  const { getByText, queryByTestId } = screen;

  getByText(`Have an account?`)
  expect(queryByTestId('signup-header').textContent).toEqual('SIGN UP');
  expect(queryByTestId('email-input')).toBeTruthy();
  expect(queryByTestId('password-input')).toBeTruthy();
});
