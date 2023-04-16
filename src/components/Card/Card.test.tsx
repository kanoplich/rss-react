import { it, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

const mockSelector = vi.fn();
const mockDispatch = vi.fn();

vi.mock('react-redux', () => ({
  ...vi.importActual('react-redux'),
  useSelector: () => mockSelector,
  useDispatch: () => mockDispatch,
}));

describe('Card', () => {
  it('Card renders', () => {
    render(<Card data={data} />);
    expect(screen.getByText(/morty smith/i)).toBeInTheDocument();
  });
  it('dispatch actions', async () => {
    render(<Card data={data} />);
    await userEvent.click(screen.getByRole('button'));
    expect(mockDispatch).toHaveBeenCalledTimes(3);
  });
});
