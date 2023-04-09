import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';
import { CardData } from 'types';

const data: CardData[] = [
  {
    id: 1,
    name: 'Morty Smith',
    image: '',
    url: '',
    gender: 'male',
    location: {
      name: 'Citadel of Ricks',
    },
    origin: {
      name: 'unknown',
    },
    type: '',
    species: 'human',
    status: 'Alive',
    created: '04/11/2017',
  },
];

describe('Search component', () => {
  it('Search renders', () => {
    render(
      <Search getFetchData={() => data} setData={() => undefined} setIsPending={() => false} />
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('Search renders without placeholder', () => {
    render(
      <Search getFetchData={() => data} setData={() => undefined} setIsPending={() => false} />
    );
    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
  });
  it('custom placeholder works', () => {
    render(<input placeholder="find" />);
    expect(screen.getByPlaceholderText(/find/i)).toBeInTheDocument();
  });
  it('typing in Search works', async () => {
    render(
      <Search getFetchData={() => data} setData={() => undefined} setIsPending={() => false} />
    );
    expect(screen.queryByDisplayValue(/test/)).toBeNull();
    await userEvent.type(screen.getByRole('textbox'), 'test');
    expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();
  });
});
