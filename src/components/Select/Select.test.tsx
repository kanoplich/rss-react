import React from 'react';
import { it, describe } from 'vitest';
import { render, renderHook, screen } from '@testing-library/react';
import Select from './Select';
import { useForm } from 'react-hook-form';
import { CardFormType } from 'types';

describe('Select', () => {
  const { result } = renderHook(() => useForm<CardFormType>());
  it('Select renders', () => {
    render(<Select register={result.current.register} error={result.current.formState.errors} />);
    expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
  });
});
