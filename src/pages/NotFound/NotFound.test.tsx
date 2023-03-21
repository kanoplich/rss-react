import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound component', () => {
  it('NotFound renders', () => {
    render(<NotFound />);
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/sorry/i)).toBeInTheDocument();
  });
});
