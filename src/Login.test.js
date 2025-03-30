import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Login from '../Login';

const mock = new MockAdapter(axios);

describe('Login Component', () => {
  beforeEach(() => {
    mock.reset();
  });

  test('renders login and register buttons', () => {
    render(<Login />);
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByText(/Register/i)).toBeInTheDocument();
  });

  test('switches to registration form when "Register" is clicked', () => {
    render(<Login />);
    fireEvent.click(screen.getByText(/Register/i));
    expect(screen.getByText(/User Registration/i)).toBeInTheDocument();
  });

  test('allows user to input values and submit login form', async () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText(/Registration No/i), { target: { value: '12345' } });
    fireEvent.change(screen.getByPlaceholderText(/Phone/i), { target: { value: '9876543210' } });

    mock.onPost('http://localhost:5000/login').reply(200, { message: 'Login Successful' });

    fireEvent.click(screen.getByText(/Login/i));

    await waitFor(() => expect(screen.getByText(/Login Successful/i)).toBeInTheDocument());
  });

  test('handles login error', async () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText(/Registration No/i), { target: { value: '12345' } });
    fireEvent.change(screen.getByPlaceholderText(/Phone/i), { target: { value: '9876543210' } });

    mock.onPost('http://localhost:5000/login').reply(400, { error: 'Invalid credentials' });

    fireEvent.click(screen.getByText(/Login/i));

    await waitFor(() => expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument());
  });

  test('allows user to register', async () => {
    render(<Login />);
    
    fireEvent.click(screen.getByText(/Register/i));

    fireEvent.change(screen.getByPlaceholderText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/Registration No/i), { target: { value: '12345' } });
    fireEvent.change(screen.getByPlaceholderText(/Phone/i), { target: { value: '9876543210' } });
    fireEvent.change(screen.getByLabelText(/Select Year/i), { target: { value: '3rd Year' } });

    mock.onPost('http://localhost:5000/register').reply(200, { message: 'Registration Successful' });

    fireEvent.click(screen.getByText(/Register/i));

    await waitFor(() => expect(screen.getByText(/Registration Successful/i)).toBeInTheDocument());
  });
});
