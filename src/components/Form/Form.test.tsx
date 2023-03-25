import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it('Form renders', () => {
    render(<Form getData={() => {}} />);
    const headElem = screen.getByRole('heading', { level: 2 });
    expect(headElem).toBeInTheDocument();
    expect(headElem).toHaveTextContent(/form/i);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
