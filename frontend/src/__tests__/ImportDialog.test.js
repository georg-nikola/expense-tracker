import { render, screen } from '@testing-library/react';
import ImportDialog from '../components/ImportDialog';

test('renders Import Transactions button', () => {
  render(<ImportDialog isLoggedIn={true} />);
  const importButton = screen.getByText(/Import Transactions/i);
  expect(importButton).toBeInTheDocument();
});
