import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('Footer renders', () => {
    render(<Footer />);
    expect(screen.getByText(/2023/)).toBeInTheDocument();
    const links = screen.getAllByRole('link');
    links.map((link) => {
      expect(link).toBeInTheDocument();
    });
  });
});
