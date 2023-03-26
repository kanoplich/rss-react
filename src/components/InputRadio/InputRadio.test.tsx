import React from 'react';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputRadio from './InputRadio';

const inputRef: React.RefObject<HTMLInputElement> = React.createRef();

describe('InputRadio', () => {
  it('InputRadio renders', () => {
    render(<InputRadio error="error message" inputRefMale={inputRef} inputRefFemale={inputRef} />);
    expect(screen.getByText(/error message/i)).toBeInTheDocument();
    expect(screen.getByText(/gender/i)).toBeInTheDocument();
  });
});
