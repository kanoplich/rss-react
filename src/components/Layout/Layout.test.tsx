import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Layout from './Layout';
import { BrowserRouter } from 'react-router-dom';

describe('Layout', () => {
  it('Layout renders', () => {
    render(<Layout />, { wrapper: BrowserRouter });
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });
  it('click event', async () => {
    render(<Layout />, { wrapper: BrowserRouter });
    const user = userEvent.setup();
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    await user.click(screen.getByText(/about/i));
    expect(screen.getByText(/about page/i)).toBeInTheDocument();
    await user.click(screen.getByText(/home/i));
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });
});
