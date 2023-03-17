import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  it('Home renders', () => {
    render(<Home />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getAllByRole('table')).toBeInTheDocument();
  });
});
