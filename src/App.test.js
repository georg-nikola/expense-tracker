import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Expense Tracker title', () => {
  render(<App />);
  const titleElements = screen.getAllByText(/Expense Tracker/i);
  expect(titleElements.length).toBeGreaterThan(0);
});
