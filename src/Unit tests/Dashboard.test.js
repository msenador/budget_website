import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from '../reusable components/Dashboard';

beforeEach(() => {
  render(<BrowserRouter><Dashboard /></BrowserRouter>);
});

test('renders dashboard icon', () => {
  const icon = screen.queryByTestId('dashboard-icon');

  expect(icon).toBeTruthy();
});

test('renders dashboard Sign In', () => {
  const signIn = screen.queryByTestId('dashboard-signin');
  const signInText = screen.queryByTestId('dashboard-signin').textContent;

  expect(signIn).toBeTruthy();
  expect(signInText).toEqual('Sign In');
});
