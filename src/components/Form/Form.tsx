import InputText from '../InputText/InputText';
import React, { Component, createRef } from 'react';
import InputDate from '../InputDate/InputDate';
import Select from '../Select/Select';
import InputRadio from '../InputRadio/InputRadio';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import InputFile from '../InputFile/InputFile';
import { CardFormType } from 'types';

type FormProps = {
  getData: (data: CardFormType) => void;
};
type FormState = {
  name_error: string;
  birthday_error: string;
  country_error: string;
  gender_error: string;
  image_error: string;
  terms_error: string;
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
class Form extends Component<FormProps> {
  state: FormState = {
    name_error: '',
    birthday_error: '',
    country_error: '',
    gender_error: '',
    image_error: '',
    terms_error: '',
  };

  inputText: React.RefObject<HTMLInputElement> = createRef();
  inputDate: React.RefObject<HTMLInputElement> = createRef();
  select: React.RefObject<HTMLSelectElement> = createRef();
  inputRadioMale: React.RefObject<HTMLInputElement> = createRef();
  inputRadioFemale: React.RefObject<HTMLInputElement> = createRef();
  inputFile: React.RefObject<HTMLInputElement> = createRef();
  inputCheckbox: React.RefObject<HTMLInputElement> = createRef();
  inputForm: React.RefObject<HTMLFormElement> = createRef();

  validateName = () => {
    const regName = /^[А-ЯA-Z]/;
    const error = 'Invalid name given';
    if (this.inputText.current) {
      const { value } = this.inputText.current;
      return regName.test(value) && value.length > 1 ? '' : error;
    }
    return error;
  };

  validateBirthday = () => {
    const error = 'Invalid date given';
    if (this.inputDate.current) {
      const { value } = this.inputDate.current;
      const birthday = Date.parse(value);
      const today = new Date().getTime();
      return birthday < today && value.length ? '' : error;
    }
    return error;
  };

  validateCountry = () => {
    const error = 'No country selected';
    if (this.select.current) {
      const { value } = this.select.current;
      return value.length ? '' : error;
    }
    return error;
  };

  validateGender = () => {
    const error = 'Gender not selected';
    if (this.inputRadioMale.current?.checked) {
      return '';
    } else if (this.inputRadioFemale.current?.checked) {
      return '';
    }
    return error;
  };

  validateImage = () => {
    const error = 'No image selected';
    if (this.inputFile.current) {
      const { value } = this.inputFile.current;
      const index = value.lastIndexOf('.') + 1;
      const extFile = value.slice(index, value.length).toLowerCase();
      if (extFile === 'jpeg' || extFile === 'jpg' || extFile === 'png') {
        return '';
      }
    }
    return error;
  };

  validateTerms = () => {
    const error = 'Field not selected';
    if (this.inputCheckbox.current?.checked) {
      return '';
    }
    return error;
  };

  validateForm = () => {
    return {
      name: this.validateName(),
      birthday: this.validateBirthday(),
      country: this.validateCountry(),
      gender: this.validateGender(),
      image: this.validateImage(),
      terms: this.validateTerms(),
    };
  };

  getFormData = () => {
    let gender = '';
    let image = '';
    if (this.inputRadioMale.current?.checked) {
      gender = this.inputRadioMale.current.value;
    } else if (this.inputRadioFemale.current?.checked) {
      gender = this.inputRadioFemale.current.value;
    }
    if (this.inputFile.current?.value && this.inputFile.current?.files) {
      image = URL.createObjectURL(this.inputFile.current.files[0]);
    }
    return {
      name: this.inputText.current?.value || '',
      birthday: this.inputDate.current?.value || '',
      country: this.select.current?.value || '',
      gender,
      image,
    };
  };

  submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error_data = this.validateForm();
    const data = this.getFormData();
    let key: keyof typeof error_data;
    for (key in error_data) {
      if (error_data[key].length > 0) {
        this.setState({
          name_error: error_data.name,
          birthday_error: error_data.birthday,
          country_error: error_data.country,
          gender_error: error_data.gender,
          image_error: error_data.image,
          terms_error: error_data.terms,
        });
        return;
      }
    }
    this.props.getData(data);
    this.inputForm.current?.reset();
    this.setState({
      name_error: '',
      birthday_error: '',
      country_error: '',
      gender_error: '',
      image_error: '',
      terms_error: '',
    });
  };

  render() {
    const { name_error, birthday_error, country_error, gender_error, image_error, terms_error } =
      this.state;
    return (
      <form
        className="form"
        id="form"
        onSubmit={this.submitForm}
        ref={this.inputForm}
        autoComplete="off"
        noValidate
      >
        <h2 className="form_title">Form</h2>
        <InputText error={name_error} inputRef={this.inputText} />
        <InputDate error={birthday_error} inputRef={this.inputDate} />
        <Select error={country_error} options={COUNTRY} selectRef={this.select} />
        <InputRadio
          error={gender_error}
          inputRefMale={this.inputRadioMale}
          inputRefFemale={this.inputRadioFemale}
        />
        <InputFile error={image_error} inputRef={this.inputFile} />
        <InputCheckbox error={terms_error} inputRef={this.inputCheckbox} />
        <button className="form_button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
