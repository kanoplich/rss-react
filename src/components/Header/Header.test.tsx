import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('Header', () => {
  it('Header renders', async () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
  it('click event', async () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    await userEvent.click(screen.getByText(/about/i));
    expect(screen.getByText(/about page/i)).toBeInTheDocument();
    await userEvent.click(screen.getByText(/home/i));
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    await userEvent.click(screen.getByText(/form/i));
    expect(screen.getByText(/form page/i)).toBeInTheDocument();
  });
});
