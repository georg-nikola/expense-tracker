import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Expense Tracker title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Expense Tracker/i);
  expect(titleElement).toBeInTheDocument();
});
