import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import LostFound from '../LostFound';

const mock = new MockAdapter(axios);

describe('LostFound Component', () => {
  beforeEach(() => {
    mock.reset();
  });

  test('renders form and buttons correctly', () => {
    render(<LostFound />);
    expect(screen.getByText(/Lost & Found/i)).toBeInTheDocument();
    expect(screen.getByText(/Lost Items/i)).toBeInTheDocument();
    expect(screen.getByText(/Found Items/i)).toBeInTheDocument();
  });

  test('allows user to input values and submit form', async () => {
    render(<LostFound />);
    
    // Fill in the form
    fireEvent.change(screen.getByLabelText(/Item Name/i), { target: { value: 'Laptop' } });
    fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Black Dell Laptop' } });
    fireEvent.change(screen.getByLabelText(/Location/i), { target: { value: 'Library' } });
    fireEvent.change(screen.getByLabelText(/Contact Information/i), { target: { value: '9876543210' } });

    // Mock POST request
    mock.onPost('http://localhost:5000/api/lostitems').reply(200, {
      id: 1,
      type: 'lost',
      itemName: 'Laptop',
      description: 'Black Dell Laptop',
      location: 'Library',
      contact: '9876543210',
    });

    // Click submit button
    fireEvent.click(screen.getByText(/Post/i));

    // Wait for API response
    await waitFor(() => {
      expect(screen.getByText(/Laptop/i)).toBeInTheDocument();
    });
  });

  test('filters lost items', async () => {
    render(<LostFound />);

    // Mock GET request
    mock.onGet('http://localhost:5000/api/lostitems').reply(200, [
      { id: 1, type: 'lost', itemName: 'Phone', description: 'iPhone', location: 'Cafeteria', contact: '1234567890' },
      { id: 2, type: 'found', itemName: 'Watch', description: 'Rolex', location: 'Library', contact: '9876543210' },
    ]);

    // Click filter button
    fireEvent.click(screen.getByText(/Lost Items/i));

    // Wait for filtering
    await waitFor(() => {
      expect(screen.getByText(/Phone/i)).toBeInTheDocument();
      expect(screen.queryByText(/Watch/i)).not.toBeInTheDocument();
    });
  });
});
