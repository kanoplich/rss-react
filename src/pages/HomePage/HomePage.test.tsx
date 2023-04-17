import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Home component', () => {
  it('Home renders', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    const cards = screen.getAllByRole('button');
    cards.forEach((card) => {
      expect(card).toBeInTheDocument();
    });
  });
});
