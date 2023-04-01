import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('Home component', () => {
  it('Home renders', () => {
    render(<HomePage />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    const cards = screen.getAllByRole('img');
    cards.forEach((card) => {
      expect(card).toBeInTheDocument();
    });
  });
});
