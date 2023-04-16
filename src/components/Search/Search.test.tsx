import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

const mockSelector = vi.fn();
const mockDispatch = vi.fn();

vi.mock('react-redux', () => ({
  ...vi.importActual('react-redux'),
  useSelector: () => mockSelector,
  useDispatch: () => mockDispatch,
}));

describe('Search component', () => {
  it('Search renders', () => {
    render(<Search />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('Search renders without placeholder', () => {
    render(<Search />);
    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
  });
  it('custom placeholder works', () => {
    render(<input placeholder="find" />);
    expect(screen.getByPlaceholderText(/find/i)).toBeInTheDocument();
  });
  it('typing in Search works', async () => {
    render(<Search />);
    expect(screen.queryByDisplayValue(/test/)).toBeNull();
    await userEvent.type(screen.getByRole('textbox'), 'test');
    expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();
  });
});
