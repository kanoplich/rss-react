import React from 'react';
import { it, describe } from 'vitest';
import { screen, render, renderHook } from '@testing-library/react';
import InputFile from './InputFile';
import { useForm } from 'react-hook-form';
import { CardFormType } from 'types';

describe('InputFile', () => {
  const { result } = renderHook(() => useForm<CardFormType>());
  it('InputFile renders', () => {
    render(
      <InputFile register={result.current.register} error={result.current.formState.errors} />
    );
    expect(screen.getByLabelText(/image/i)).toBeInTheDocument();
  });
});
