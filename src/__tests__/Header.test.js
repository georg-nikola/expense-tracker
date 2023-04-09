import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders Expense Tracker title', () => {
  render(<Header />);
  const title = screen.getByText(/Expense Tracker/i);
  expect(title).toBeInTheDocument();
});
