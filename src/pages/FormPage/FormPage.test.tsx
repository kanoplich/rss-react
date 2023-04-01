import { it, describe } from 'vitest';
import { screen, render } from '@testing-library/react';
import FormPage from './FormPage';

describe('FormPage', () => {
  it('FormPage renders', () => {
    render(<FormPage />);
    expect(screen.getByText(/no card/i)).toBeInTheDocument();
  });
});
