import { it, describe, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

const mockSelector = vi.fn();
const mockDispatch = vi.fn();

vi.mock('react-redux', () => ({
  ...vi.importActual('react-redux'),
  useSelector: () => mockSelector,
  useDispatch: () => mockDispatch,
}));

describe('Modal', () => {
  it('Modal renders', () => {
    render(<Modal data={data} loading={false} />);
    expect(screen.getByText(/morty smith/i)).toBeInTheDocument();
  });
  it('Modal not renders', () => {
    render(<Modal data={data} loading={true} />);
    expect(screen.queryByText(/morty smith/i)).not.toBeNull();
  });
  it('dispatch actions', async () => {
    render(<Modal data={data} loading={true} />);
    await userEvent.click(screen.getByTestId('modal_button'));
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
