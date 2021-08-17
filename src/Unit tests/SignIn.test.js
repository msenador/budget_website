import React from 'react';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import SignIn from '../components/SignIn';

describe('sign up page', () => {
  beforeEach(() => {
    render(<SignIn />);
  });

  afterEach(() => {
    cleanup();
  })

  test('displays inputs and header on Sign Up page', () => {
    const { getByText, queryByTestId } = screen;

    getByText('YOUR MONEY UNDER YOUR CONTROL.')
    getByText(`Have an account?`);
    getByText('Sign In')
    expect(queryByTestId('signup-header').textContent).toEqual('SIGN UP');
    expect(queryByTestId('email-input')).toBeTruthy();
    expect(queryByTestId('password-input')).toBeTruthy();
  });

  // test('displays invalid email warning if email is invalid', async () => {
  //   const { getByTestId, getByText } = screen;
  //   const email = getByTestId('email-input');
  //   const password = getByTestId('password-input');

  //   expect(email.value).toBe('');
  //   fireEvent.change(email, {target: {value: 'morian'}});
  //   expect(email.value).toBe('morian');
  //   expect(password.value).toBe('');
  //   fireEvent.change(password, {target: {value: '1234'}});
  //   expect(password.value).toBe('1234');
  //   fireEvent.click(getByTestId('signup-button'));

  //   await waitFor(() => getByText('*Invalid email'));

    // const error = await getByTestId('email-error').textContent;

    // expect(error).toEqual('here')
  // })

  // test('Does not call handleSignUp function if one or more inputs are invalid', () => {
  //   const { getByTestId } = screen;
  //   const email = getByTestId('email-input');
  //   const password = getByTestId('password-input');

  //   expect(email.value).toBe('');
  //   fireEvent.change(email, {target: {value: 'morian'}});
  //   expect(email.value).toBe('morian');
  //   expect(password.value).toBe('');
  //   fireEvent.change(password, {target: {value: '1234'}});
  //   expect(password.value).toBe('1234');
  //   fireEvent.click(getByTestId('signup-button'));

  //   expect(handleSignUp).toHaveBeenCalledTimes(0);
  // })
})

