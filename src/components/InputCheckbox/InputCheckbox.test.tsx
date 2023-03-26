import React from 'react';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputCheckbox from './InputCheckbox';

const inputRef: React.RefObject<HTMLInputElement> = React.createRef();

describe('InputCheckbox', () => {
  it('InputCheckbox renders', () => {
    render(<InputCheckbox error="error message" inputRef={inputRef} />);
    expect(screen.getByText(/i agree to the terms of service/i)).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText(/error message/i)).toBeInTheDocument();
  });
  it('choice in InputCheckbox works', async () => {
    render(<InputCheckbox error="" inputRef={inputRef} />);
    const checkbox = screen.getByRole<HTMLInputElement>('checkbox');
    expect(checkbox.checked).toEqual(false);
    await userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
});
