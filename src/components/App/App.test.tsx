import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('App', () => {
  it('full app rendering/navigating', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const user = userEvent.setup();
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
    await user.click(screen.getByText(/about/i));
    expect(screen.getByText(/about us page/i)).toBeInTheDocument();
    await user.click(screen.getByText(/form/i));
    expect(screen.getByText(/form page/i)).toBeInTheDocument();
  });
  it('landing on a bad page', () => {
    const badRoute = '/some/bad/route';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});
