import { render, screen } from '@testing-library/react';
import SignupForm from '../components/SignupForm';

test('renders Sign Up button', () => {
  render(<SignupForm />);
  const signUpButton = screen.getByText(/Sign Up/i);
  expect(signUpButton).toBeInTheDocument();
});
