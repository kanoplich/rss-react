import React from 'react';
import { it, describe } from 'vitest';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputDate from './InputDate';

const inputRef: React.RefObject<HTMLInputElement> = React.createRef();

describe('InputDate', () => {
  it('InputDate renders', () => {
    render(<InputDate error="error message" inputRef={inputRef} />);
    expect(screen.getByLabelText(/birthday/i)).toBeInTheDocument();
    expect(screen.getByText(/error message/i)).toBeInTheDocument();
  });
  it('typing in InputDate works', async () => {
    render(<InputDate error="" inputRef={inputRef} />);
    expect(screen.queryByDisplayValue(/2000-01-01/)).toBeNull();
    await userEvent.type(screen.getByTestId('date-birthday'), '2000-01-01');
    expect(screen.getByDisplayValue(/2000-01-01/i)).toBeInTheDocument();
  });
});
