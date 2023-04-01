import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { CardFormType } from 'types';

type SelectProps = {
  register: UseFormRegister<CardFormType>;
  error: FieldErrors<CardFormType>;
};

const COUNTRY = [
  '',
  'ARMENIA',
  'AZERBAIJAN',
  'BELARUS',
  'GEORGIA',
  'KAZAKHSTAN',
  'LATVIA',
  'LITHUANIA',
  'POLAND',
  'RUSSIA',
  'UKRAINE',
  'other country',
];

const Select = ({ register, error }: SelectProps) => {
  return (
    <>
      <div className="form_control">
        <label htmlFor="country">Country:</label>
        <select id="country" {...register('country', { required: 'Field is required' })}>
          {COUNTRY.map((item, index) => (
            <option key={index} defaultValue={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {error.country ? (
        <div className="form_error">{error.country.message}</div>
      ) : (
        <div className="form_error"></div>
      )}
    </>
  );
};

export default Select;
