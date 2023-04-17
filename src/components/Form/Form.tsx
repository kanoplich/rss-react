import React from 'react';
import InputText from '../InputText/InputText';
import InputDate from '../InputDate/InputDate';
import Select from '../Select/Select';
import InputRadio from '../InputRadio/InputRadio';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import InputFile from '../InputFile/InputFile';
import { CardFormType } from 'types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { formSlice } from '../../store/reduсers/FormSlice';
import { useAppDispatch } from '../../hook/redux';

const Form = () => {
  const dispatch = useAppDispatch();
  const { addFormCard, isCard } = formSlice.actions;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CardFormType>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<CardFormType> = (data) => {
    const image = URL.createObjectURL(data.image[0]);
    dispatch(addFormCard({ ...data, image }));
    dispatch(isCard(true));
    setTimeout(() => {
      dispatch(isCard(false));
    }, 3000);
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
