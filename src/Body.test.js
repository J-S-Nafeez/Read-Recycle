import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Body from './Body';  // Adjust the path if needed
import axios from 'axios';

jest.mock('axios'); // Mock axios

describe('Body Component', () => {
  test('renders search input field', () => {
    render(<Body />);
    expect(screen.getByPlaceholderText('Search for a book...')).toBeInTheDocument();
  });

  test('filters book list based on search query', () => {
    render(<Body />);
    const searchInput = screen.getByPlaceholderText('Search for a book...');
    
    // Simulate typing in the search box
    fireEvent.change(searchInput, { target: { value: 'PEA' } });
    
    // Expect books containing "PEA" to be rendered
    expect(screen.getByText('PEA306')).toBeInTheDocument();
    expect(screen.getByText('PEA305')).toBeInTheDocument();
    expect(screen.getByText('PEA307')).toBeInTheDocument();
  });

  test('opens the form when BUY button is clicked', () => {
    render(<Body />);
    const buyButton = screen.getAllByText('BUY')[0];
    
    fireEvent.click(buyButton);

    expect(screen.getByText('BUY Details for')).toBeInTheDocument();
  });

  test('submits user details and stores transaction data', async () => {
    axios.post.mockResolvedValue({ data: { success: true } });

    render(<Body />);
    fireEvent.click(screen.getAllByText('BUY')[0]); // Click BUY button

    // Fill user input fields
    fireEvent.change(screen.getByPlaceholderText('Enter your name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your registration number'), { target: { value: '12345' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your year'), { target: { value: '3' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your phone number'), { target: { value: '9876543210' } });

    fireEvent.click(screen.getByText('Confirm')); // Click Confirm button

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
    expect(screen.getByText('Your data has been successfully stored!')).toBeInTheDocument();
  });

  test('shows error message when API call fails', async () => {
    axios.post.mockRejectedValue(new Error('Network Error'));

    render(<Body />);
    fireEvent.click(screen.getAllByText('BUY')[0]); // Click BUY button

    // Fill user input fields
    fireEvent.change(screen.getByPlaceholderText('Enter your name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your registration number'), { target: { value: '12345' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your year'), { target: { value: '3' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your phone number'), { target: { value: '9876543210' } });

    fireEvent.click(screen.getByText('Confirm')); // Click Confirm button

    await waitFor(() => expect(screen.getByText('There was an error storing your data. Please try again.')).toBeInTheDocument());
  });
});
