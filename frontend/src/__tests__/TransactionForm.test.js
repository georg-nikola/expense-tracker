import { render, screen } from '@testing-library/react';
import TransactionForm from '../components/TransactionForm';

test('renders Add Transaction form', () => {
  render(<TransactionForm />);
  const formTitle = screen.getByText(/Add Transaction/i);
  expect(formTitle).toBeInTheDocument();
});
