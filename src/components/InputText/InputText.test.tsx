import React from 'react';
import { it, describe } from 'vitest';
import { screen, render, renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputText from './InputText';
import { useForm } from 'react-hook-form';
import { CardFormType } from 'types';

describe('InputText', () => {
  const { result } = renderHook(() => useForm<CardFormType>());
  it('InputText renders', () => {
    render(
      <InputText register={result.current.register} error={result.current.formState.errors} />
    );
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('typing in InputText works', async () => {
    render(
      <InputText register={result.current.register} error={result.current.formState.errors} />
    );
    expect(screen.queryByDisplayValue(/test/)).toBeNull();
    await userEvent.type(screen.getByRole('textbox'), 'test');
    expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();
  });
});
