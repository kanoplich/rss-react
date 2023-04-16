import { it, describe, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import FormPage from './FormPage';

const mockSelector = vi.fn();
const mockDispatch = vi.fn();

vi.mock('react-redux', () => ({
  ...vi.importActual('react-redux'),
  useSelector: () => mockSelector,
  useDispatch: () => mockDispatch,
}));

describe('FormPage', () => {
  it('FormPage renders', () => {
    render(<FormPage />);
    expect(screen.getByText(/no card/i)).toBeInTheDocument();
  });
});
