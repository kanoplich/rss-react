import React from 'react';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Select from './Select';

const options = ['test'];
const selectRef: React.RefObject<HTMLSelectElement> = React.createRef();

describe('Select', () => {
  it('Select renders', () => {
    render(<Select error="error message" options={options} selectRef={selectRef} />);
    expect(screen.getByText(/error message/i)).toBeInTheDocument();
    expect(screen.getByText(/country/i)).toBeInTheDocument();
  });
});
