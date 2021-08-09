import React from 'react';
import { fireEvent, getByText, queryByTestId, render, screen } from '@testing-library/react';
import SignIn from '../components/SignIn';

beforeEach(() => {
  render(<SignIn/>);
});

test('renders inputs on Sign In page', () => {
  const { getByText, queryByTestId } = screen;
  getByText('Sign Up');

  expect(queryByTestId('email-input')).toBeTruthy();
  expect(queryByTestId('password-input')).toBeTruthy();
});
