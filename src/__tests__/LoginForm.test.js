import { render, screen } from '@testing-library/react';
import LoginForm from '../components/LoginForm';

test('renders Log In button', () => {
  render(<LoginForm />);
  const loginButton = screen.getByText(/Log In/i);
  expect(loginButton).toBeInTheDocument();
});
