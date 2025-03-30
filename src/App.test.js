// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });












import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Mock child components to avoid dependency issues
jest.mock('./Header', () => () => <div data-testid="header">Header Component</div>);
jest.mock('./Body', () => () => <div data-testid="body">Body Component</div>);
jest.mock('./Home', () => () => <div data-testid="home">Home Component</div>);
jest.mock('./LostFound', () => () => <div data-testid="lostfound">Lost & Found Component</div>);
jest.mock('./Ride', () => () => <div data-testid="ride">Ride Component</div>);
jest.mock('./Login', () => () => <div data-testid="login">Login Component</div>);
jest.mock('./Fotter', () => () => <div data-testid="footer">Footer Component</div>);

describe('App Component', () => {
  test('renders header, footer, and home component by default', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Check if Header is rendered
    expect(screen.getByTestId('header')).toBeInTheDocument();
    
    // Check if Footer is rendered
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    
    // Check if Home component is rendered (default route)
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
