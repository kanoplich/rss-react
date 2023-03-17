import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About component', () => {
  it('About renders', () => {
    render(<About />);
    const linkElement = screen.getByText(/about us page/i);
    expect(linkElement).toBeInTheDocument();
  });
});
