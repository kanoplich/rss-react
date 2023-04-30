import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { CardFormType } from 'types';

type InputCheckboxProps = {
  register: UseFormRegister<CardFormType>;
  error: FieldErrors<CardFormType>;
};

const InputCheckbox = ({ register, error }: InputCheckboxProps) => {
  return (
    <>
      <div className="form_control">
        <label className="form_label">
          <input type="checkbox" {...register('terms', { required: 'Field is required' })} />I agree
          to the terms of service
        </label>
      </div>
      {error.terms ? (
        <div className="form_error">{error.terms.message}</div>
      ) : (
        <div className="form_error"></div>
      )}
    </>
  );
};

export default InputCheckbox;
