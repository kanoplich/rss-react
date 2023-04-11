import { it, describe, vi, Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { CardData } from 'types';
import { fetchDataId } from './Card.service';

const data: CardData = {
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
};

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ ...data }),
  })
) as Mock;

describe('Card', () => {
  it('Card renders', () => {
    render(
      <Card setActive={() => true} data={data} setDataId={() => undefined} getData={() => data} />
    );
    expect(screen.getByText(/morty smith/i)).toBeInTheDocument();
  });
  it('makes a GET request to fetch card and returns the result', async () => {
    const cardData = await fetchDataId(data.id);
    expect(fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character/1');
    expect(cardData).toStrictEqual(data);
  });
});
