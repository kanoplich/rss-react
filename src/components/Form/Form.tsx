import React from 'react';
import InputText from '../InputText/InputText';
import InputDate from '../InputDate/InputDate';
import Select from '../Select/Select';
import InputRadio from '../InputRadio/InputRadio';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import InputFile from '../InputFile/InputFile';
import { CardFormType, CardFormTypeSubmit } from 'types';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormProps = {
  getData: (data: CardFormTypeSubmit) => void;
};

const Form = ({ getData }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CardFormType>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<CardFormType> = (data) => {
    const image = URL.createObjectURL(data.image[0]);
    getData({ ...data, image });
    reset();
  };

  return (
    <form
      className="form"
      id="form"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      noValidate
    >
      <h2 className="form_title">Form</h2>
      <InputText register={register} error={errors} />
      <InputDate register={register} error={errors} />
      <Select register={register} error={errors} />
      <InputRadio register={register} error={errors} />
      <InputFile register={register} error={errors} />
      <InputCheckbox register={register} error={errors} />
      <button className="form_button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
