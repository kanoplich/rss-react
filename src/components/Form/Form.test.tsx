import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form', () => {
  it('Form renders', () => {
    render(<Form getData={() => {}} />);
    const headElem = screen.getByRole('heading', { level: 2 });
    expect(headElem).toBeInTheDocument();
    expect(headElem).toHaveTextContent(/form/i);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('inputText validate works with correct data', async () => {
    render(<Form getData={() => {}} />);
    expect(screen.queryByText('Test')).not.toBeInTheDocument();
    expect(screen.queryByText('Invalid name given')).not.toBeInTheDocument();
    await userEvent.type(screen.getByRole('textbox'), 'Test');
    expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button'));
    expect(screen.queryByText('Invalid name given')).not.toBeInTheDocument();
  });
  it('inputText validate works with not correct data', async () => {
    render(<Form getData={() => {}} />);
    expect(screen.queryByText('test')).not.toBeInTheDocument();
    expect(screen.queryByText('Invalid name given')).not.toBeInTheDocument();
    await userEvent.type(screen.getByRole('textbox'), 'test');
    expect(screen.getByDisplayValue(/test/)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Invalid name given')).toBeInTheDocument();
  });
  it('InputDate validate works with correct data', async () => {
    render(<Form getData={() => {}} />);
    expect(screen.queryByText('2000-01-01')).not.toBeInTheDocument();
    expect(screen.queryByText('Invalid date given')).not.toBeInTheDocument();
    await userEvent.type(screen.getByTestId('date-birthday'), '2000-01-01');
    expect(screen.getByDisplayValue(/2000-01-01/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button'));
    expect(screen.queryByText('Invalid date given')).not.toBeInTheDocument();
  });
  it('InputDate validate works with not correct data', async () => {
    render(<Form getData={() => {}} />);
    expect(screen.queryByText('2000')).not.toBeInTheDocument();
    expect(screen.queryByText('Invalid date given')).not.toBeInTheDocument();
    await userEvent.type(screen.getByTestId('date-birthday'), '2000');
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Invalid date given')).toBeInTheDocument();
  });
});
