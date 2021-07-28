import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignIn from '../components/SignIn';

beforeEach(() => {
  render(<BrowserRouter><SignIn /></BrowserRouter>);
});

test('renders inputs and labels on Sign In page', () => {
  const emailLabel = screen.getByTestId('label-email').textContent;
  const passwordLabel = screen.getByTestId('label-password').textContent;
  const emailInput = screen.queryByTestId('input-email');
  const passwordInput = screen.queryByTestId('input-password');

  expect(emailLabel).toEqual('Email:');
  expect(passwordLabel).toEqual('Password:');
  expect(emailInput).toBeTruthy();
  expect(passwordInput).toBeTruthy();
});
