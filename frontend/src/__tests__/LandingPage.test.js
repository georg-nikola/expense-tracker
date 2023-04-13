import { render, screen } from '@testing-library/react';
import LandingPage from '../components/LandingPage';

test('renders welcome message', () => {
  render(<LandingPage />);
  const welcomeMessage = screen.getByText(/Welcome to Expense Tracker/i);
  expect(welcomeMessage).toBeInTheDocument();
});
