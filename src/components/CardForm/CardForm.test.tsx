import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardForm from './CardForm';

const testData = {
  name: 'Test name',
  birthday: '1970-01-01',
  country: 'Test country',
  gender: 'Test gender',
  image: 'Test image',
};

describe('CardForm', () => {
  it('CardForm renders', () => {
    render(<CardForm data={testData} />);
    expect(screen.getByText(/1970-01-01/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/test name/i);
  });
});
