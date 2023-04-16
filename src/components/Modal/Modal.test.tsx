import { it, describe } from 'vitest';
import { screen, render } from '@testing-library/react';
import Modal from './Modal';
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

describe('Modal', () => {
  it('Modal renders', () => {
    render(<Modal data={data} loading={false} fetching={false} />);
    expect(screen.getByText(/morty smith/i)).toBeInTheDocument();
  });
  it('Modal not renders', () => {
    render(<Modal data={data} loading={true} fetching={false} />);
    expect(screen.queryByText(/morty smith/i)).not.toBeNull();
  });
});
