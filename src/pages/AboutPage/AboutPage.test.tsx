import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('About component', () => {
  it('About renders', () => {
    render(<AboutPage />);
    const linkElement = screen.getByText(/about us page/i);
    expect(linkElement).toBeInTheDocument();
  });
});
