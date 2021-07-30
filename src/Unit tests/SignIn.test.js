import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SignIn from '../components/SignIn';

beforeEach(() => {
  render(<SignIn/>);
});

test('renders inputs on Sign In and Sign Up page', () => {
  const emailInput = screen.queryByTestId('input-email');
  const passwordInput = screen.queryByTestId('input-password');

  expect(emailInput).toBeTruthy();
  expect(passwordInput).toBeTruthy();
});
