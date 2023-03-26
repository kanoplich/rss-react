import React from 'react';
import { it, describe } from 'vitest';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputText from './InputText';

const inputRef: React.RefObject<HTMLInputElement> = React.createRef();

describe('InputText', () => {
  it('InputText renders', () => {
    render(<InputText error="test message" inputRef={inputRef} />);
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText(/test message/i)).toBeInTheDocument();
  });
  it('typing in InputText works', async () => {
    render(<InputText error="" inputRef={inputRef} />);
    expect(screen.queryByDisplayValue(/test/)).toBeNull();
    await userEvent.type(screen.getByRole('textbox'), 'test');
    expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();
  });
});
