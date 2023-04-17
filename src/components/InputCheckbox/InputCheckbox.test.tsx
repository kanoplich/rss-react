import React from 'react';
import { it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputCheckbox from './InputCheckbox';
import { useForm } from 'react-hook-form';
import { CardFormType } from 'types';
import { renderHook } from '@testing-library/react';

describe('InputCheckbox', () => {
  const { result } = renderHook(() => useForm<CardFormType>());
  it('InputCheckbox renders', () => {
    render(
      <InputCheckbox register={result.current.register} error={result.current.formState.errors} />
    );
    expect(screen.getByText(/i agree to the terms of service/i)).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
  it('choice in InputCheckbox works', async () => {
    render(
      <InputCheckbox register={result.current.register} error={result.current.formState.errors} />
    );
    const checkbox = screen.getByRole<HTMLInputElement>('checkbox');
    expect(checkbox.checked).toEqual(false);
    await userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
});
