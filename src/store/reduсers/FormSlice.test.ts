import { describe, it } from 'vitest';
import formReducer, { formSlice } from './FormSlice';

const initialState = {
  cards: [],
  isCard: false,
};

const data = [
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

describe('formSlice', () => {
  it('return default state when passed an empty action', () => {
    const result = formReducer(undefined, { type: '' });
    expect(result).toEqual(initialState);
  });
  it('"addFormCard" action', () => {
    const action = { type: formSlice.actions.addFormCard.type, payload: data };
    const result = formReducer(initialState, action);
    expect(result.cards[0]).toBe(data);
  });
  it('"isCard" action', () => {
    const action = { type: formSlice.actions.isCard.type, payload: true };
    const result = formReducer(initialState, action);
    expect(result.isCard).toBe(true);
  });
});
