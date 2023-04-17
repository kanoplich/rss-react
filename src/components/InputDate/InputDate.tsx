import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { CardFormType } from 'types';

type InputDateProps = {
  register: UseFormRegister<CardFormType>;
  error: FieldErrors<CardFormType>;
};

const InputDate = ({ register, error }: InputDateProps) => {
  const validateBirthday = (input: string) => {
    const birthday = Date.parse(input);
    const today = new Date().getTime();
    return birthday < today;
  };

  return (
    <>
      <div className="form_control">
        <label htmlFor="birthday">Birthday:</label>
        <input
          data-testid="date-birthday"
          type="date"
          id="birthday"
          {...register('birthday', {
            required: 'Field is required',
            validate: (input) => validateBirthday(input),
          })}
        />
      </div>
      {error.birthday ? (
        <div className="form_error">{error.birthday.message || 'Invalid date given'}</div>
      ) : (
        <div className="form_error"></div>
      )}
    </>
  );
};

export default InputDate;
