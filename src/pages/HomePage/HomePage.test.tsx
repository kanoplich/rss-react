import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

const mockSelector = vi.fn();
const mockDispatch = vi.fn();

vi.mock('react-redux', () => ({
  ...vi.importActual('react-redux'),
  useSelector: () => mockSelector,
  useDispatch: () => mockDispatch,
}));

describe('Home component', () => {
  it('Home renders', () => {
    render(<HomePage />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    const cards = screen.getAllByRole('button');
    cards.forEach((card) => {
      expect(card).toBeInTheDocument();
    });
  });
});
