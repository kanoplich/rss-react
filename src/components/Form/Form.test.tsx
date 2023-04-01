import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

const testData = {
  name: 'Andrei',
  birthday: '2000-01-01',
  country: 'POLAND',
  gender: 'male',
  image: '',
  terms: true,
};

describe('Form', () => {
  it('Form renders', () => {
    render(<Form getData={() => {}} />);
    const headElem = screen.getByRole('heading', { level: 2 });
    expect(headElem).toBeInTheDocument();
    expect(headElem).toHaveTextContent(/form/i);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('Form validate works without data', async () => {
    render(<Form getData={() => {}} />);
    await userEvent.click(screen.getByRole('button'));
    expect(
      screen.getAllByText('Field is required').map((item) => expect(item).toBeInTheDocument())
    );
  });
});
