import React from 'react';
import { it, describe } from 'vitest';
import { screen, render } from '@testing-library/react';
import InputFile from './InputFile';

const inputRef: React.RefObject<HTMLInputElement> = React.createRef();

describe('InputFile', () => {
  it('InputFile renders', () => {
    render(<InputFile error="error message" inputRef={inputRef} />);
    expect(screen.getByText(/error message/i)).toBeInTheDocument();
    expect(screen.getByText(/image/i)).toBeInTheDocument();
  });
});
