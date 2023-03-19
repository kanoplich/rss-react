import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

describe('Search component', () => {
  it('Search renders', () => {
    render(<Search />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('Search renders without placeholder', () => {
    render(<Search />);
    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
  });
  it('custom placeholder works', () => {
    render(<input placeholder="find" />);
    expect(screen.getByPlaceholderText(/find/i)).toBeInTheDocument();
  });
  it('typing in Search works', async () => {
    render(<Search />);
    const user = userEvent.setup();
    expect(screen.queryByDisplayValue(/test/)).toBeNull();
    await user.type(screen.getByRole('textbox'), 'test');
    expect(screen.queryByDisplayValue(/test/i)).toBeInTheDocument();
  });
});
