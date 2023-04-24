import { describe, it } from 'vitest';
import modalReducer, { modalSlice } from './ModalSlice';

const initialState = {
  id: 1,
  query: '',
  isModal: false,
  isSkip: false,
};

describe('modalSlice', () => {
  it('return default state when passed an empty action', () => {
    const result = modalReducer(undefined, { type: '' });
    expect(result).toEqual(initialState);
  });
  it('"identification" action', () => {
    const action = { type: modalSlice.actions.identification.type, payload: 7 };
    const result = modalReducer(initialState, action);
    expect(result.id).toBe(7);
  });
  it('"query" action', () => {
    const action = { type: modalSlice.actions.query.type, payload: 'test' };
    const result = modalReducer(initialState, action);
    expect(result.query).toBe('test');
  });
  it('"isModal" action', () => {
    const action = { type: modalSlice.actions.isModal.type, payload: true };
    const result = modalReducer(initialState, action);
    expect(result.isModal).toBe(true);
  });
  it('"isSkip" action', () => {
    const action = { type: modalSlice.actions.isSkip.type, payload: false };
    const result = modalReducer(initialState, action);
    expect(result.isSkip).toBe(false);
  });
});
