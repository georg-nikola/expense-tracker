import { render, screen } from '@testing-library/react';
import TransactionList from '../components/TransactionList';

test('renders Transactions title', () => {
  render(<TransactionList />);
  const listTitle = screen.getByText(/Transactions/i);
  expect(listTitle).toBeInTheDocument();
});
