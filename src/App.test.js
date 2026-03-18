import { render, screen } from '@testing-library/react';
import App from './App';

test('renders e-commerce store heading', () => {
  render(<App />);
  expect(screen.getByText(/e-commerce store/i)).toBeInTheDocument();
});
