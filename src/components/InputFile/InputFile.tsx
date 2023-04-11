import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { CardFormType } from 'types';

type InputFileProps = {
  register: UseFormRegister<CardFormType>;
  error: FieldErrors<CardFormType>;
};

const InputFile = ({ register, error }: InputFileProps) => {
  const validateImage = (input: FileList) => {
    return !!input[0].type.includes('image');
  };
  return (
    <>
      <div className="form_control">
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          {...register('image', {
            required: 'Field is required',
            validate: (input) => validateImage(input),
          })}
        />
      </div>
      {error.image ? (
        <div className="form_error">{error.image.message || 'Picture only'}</div>
      ) : (
        <div className="form_error"></div>
      )}
    </>
  );
};

export default InputFile;
