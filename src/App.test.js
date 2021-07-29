import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sign up page if user not logged in', () => {
  render(<App />);
  
});
