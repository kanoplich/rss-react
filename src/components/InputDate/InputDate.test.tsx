import React from 'react';
import { it, describe } from 'vitest';
import { screen, render, renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputDate from './InputDate';
import { useForm } from 'react-hook-form';
import { CardFormType } from 'types';

describe('InputDate', () => {
  const { result } = renderHook(() => useForm<CardFormType>());
  it('InputDate renders', () => {
    render(
      <InputDate register={result.current.register} error={result.current.formState.errors} />
    );
    expect(screen.getByLabelText(/birthday/i)).toBeInTheDocument();
  });
  it('typing in InputDate works', async () => {
    render(
      <InputDate register={result.current.register} error={result.current.formState.errors} />
    );
    expect(screen.queryByDisplayValue(/2000-01-01/)).toBeNull();
    await userEvent.type(screen.getByTestId('date-birthday'), '2000-01-01');
    expect(screen.getByDisplayValue(/2000-01-01/i)).toBeInTheDocument();
  });
});
