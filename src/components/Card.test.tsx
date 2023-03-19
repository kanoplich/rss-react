import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import data from '../Data/CardData';

describe('Card', () => {
  it('Card renders', () => {
    render(<Card data={data[0]} key={data[0].id} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
