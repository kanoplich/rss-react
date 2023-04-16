import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { CardData } from 'types';

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

describe('Card', () => {
  it('Card renders', () => {
    render(<Card data={data} />);
    expect(screen.getByText(/morty smith/i)).toBeInTheDocument();
  });
});
