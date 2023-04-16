import { it, describe, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import FormPage from './FormPage';
import * as reduxHook from 'react-redux';

const mockSelector = vi.fn();
const mockDispatch = vi.fn();

vi.mock('react-redux', () => ({
  ...vi.importActual('react-redux'),
  useSelector: () => mockSelector,
  useDispatch: () => mockDispatch,
}));

describe('FormPage', () => {
  it('FormPage renders', () => {
    vi.spyOn(reduxHook, 'useSelector').mockReturnValue([]);
    render(<FormPage />);
    expect(screen.getByText(/no card/i)).toBeInTheDocument();
  });
});
