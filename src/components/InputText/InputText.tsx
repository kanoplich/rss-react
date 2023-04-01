import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { CardFormType } from 'types';

type InputTextProps = {
  register: UseFormRegister<CardFormType>;
  error: FieldErrors<CardFormType>;
};

const InputText = ({ register, error }: InputTextProps) => {
  return (
    <>
      <div className="form_control">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          {...register('name', {
            required: 'Field is required',
            minLength: {
              value: 2,
              message: 'Name must be longer than one character',
            },
            pattern: {
              value: /^[А-ЯA-Z]/,
              message: 'Name must start with a capital letter',
            },
          })}
        />
      </div>
      {error.name ? (
        <div className="form_error">{error.name.message}</div>
      ) : (
        <div className="form_error"></div>
      )}
    </>
  );
};

export default InputText;
