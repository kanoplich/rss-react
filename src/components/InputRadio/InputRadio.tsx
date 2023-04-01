import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { CardFormType } from 'types';

type InputRadioProps = {
  register: UseFormRegister<CardFormType>;
  error: FieldErrors<CardFormType>;
};

const InputRadio = ({ register, error }: InputRadioProps) => {
  return (
    <>
      <div className="form_control">
        <label>
          Gender:
          <label htmlFor="male" className="form_label">
            <input
              type="radio"
              id="male"
              defaultValue="MALE"
              {...register('gender', { required: 'Field is required' })}
            />
            Male
          </label>
          <label htmlFor="female" className="form_label">
            <input
              type="radio"
              id="female"
              defaultValue="FEMALE"
              {...register('gender', { required: 'Field is required' })}
            />
            Female
          </label>
        </label>
      </div>
      {error.gender ? (
        <div className="form_error">{error.gender.message}</div>
      ) : (
        <div className="form_error"></div>
      )}
    </>
  );
};

export default InputRadio;
