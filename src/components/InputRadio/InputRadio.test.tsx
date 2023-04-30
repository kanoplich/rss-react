import React from 'react';
import { it, describe } from 'vitest';
import { render, renderHook, screen } from '@testing-library/react';
import InputRadio from './InputRadio';
import { useForm } from 'react-hook-form';
import { CardFormType } from 'types';

describe('InputRadio', () => {
  const { result } = renderHook(() => useForm<CardFormType>());
  it('InputRadio renders', () => {
    render(
      <InputRadio register={result.current.register} error={result.current.formState.errors} />
    );
    expect(screen.getByLabelText(/gender/i)).toBeInTheDocument();
  });
});
