import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';

test('renders invalid email error if email is not provided', () => {
  render(<App />);
  fireEvent.click(screen.getByText('login'));
  expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
});

test('renders invalid password error if password is not provided', () => {
  render(<App />);
  fireEvent.click(screen.getByText('login'));
  expect(screen.getByText(/Invalid password/i)).toBeInTheDocument();
});

test('renders invalid email error if email is missing @', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'testtest.com' } })
  fireEvent.click(screen.getByText('login'));
  expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
});

test('renders invalid email error if email is missing .domain', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@test' } })
  fireEvent.click(screen.getByText('login'));
  expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
});

test('renders invalid email error if email has multiple @', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@@test.com' } })
  fireEvent.click(screen.getByText('login'));
  expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
});

test('renders invalid email error if there are multiple emails', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@test.com test2@test.com' } })
  fireEvent.click(screen.getByText('login'));
  expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
});

test('renders invalid password error if password is shorter than 6 letters', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'pass' } })
  fireEvent.click(screen.getByText('login'));
  expect(screen.getByText(/Invalid password/i)).toBeInTheDocument();
});

test('renders invalid password error if password doesn\'t have at list one number', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'Password' } })
  fireEvent.click(screen.getByText('login'));
  expect(screen.getByText(/Invalid password/i)).toBeInTheDocument();
});

test('renders invalid password error if password doesn\'t have at list one capitol letter', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'passwor1' } })
  fireEvent.click(screen.getByText('login'));
  expect(screen.getByText(/Invalid password/i)).toBeInTheDocument();
});

test('renders invalid password error if password doesn\'t have at list one small letter', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'PASSWORD1' } })
  fireEvent.click(screen.getByText('login'));
  expect(screen.getByText(/Invalid password/i)).toBeInTheDocument();
});
