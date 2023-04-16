import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form', () => {
  it('Form renders', () => {
    render(<Form />);
    const headElem = screen.getByRole('heading', { level: 2 });
    expect(headElem).toBeInTheDocument();
    expect(headElem).toHaveTextContent(/form/i);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('Form validate works without data', async () => {
    render(<Form />);
    await userEvent.click(screen.getByRole('button'));
    expect(
      screen.getAllByText('Field is required').map((item) => expect(item).toBeInTheDocument())
    );
  });
});
