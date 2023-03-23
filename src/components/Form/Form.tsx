import InputText from '../InputText/InputText';
import React, { Component, createRef } from 'react';
import InputDate from '../InputDate/InputDate';
import Select from '../Select/Select';
import InputRadio from '../InputRadio/InputRadio';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import InputFile from '../InputFile/InputFile';

const COUNTRY = ['', 'BELARUS', 'RUSSIA', 'UKRAINE', 'other country'];
const GENDER = ['male', 'female'];
class Form extends Component {
  inputText: React.RefObject<HTMLInputElement> = createRef();
  inputDate: React.RefObject<HTMLInputElement> = createRef();
  select: React.RefObject<HTMLSelectElement> = createRef();
  inputRadioMale: React.RefObject<HTMLInputElement> = createRef();
  inputRadioFemale: React.RefObject<HTMLInputElement> = createRef();
  inputFile: React.RefObject<HTMLInputElement> = createRef();
  inputCheckbox: React.RefObject<HTMLInputElement> = createRef();

  validateName = () => {
    const regName = /^[А-ЯA-Z]/;
    const ERROR = 'Invalid name given';
    if (this.inputText.current) {
      const { value } = this.inputText.current;
      return regName.test(value) ? value : ERROR;
    }
    return ERROR;
  };

  validateBirthday = () => {
    const ERROR = 'Invalid date given';
    if (this.inputDate.current) {
      const { value } = this.inputDate.current;
      return value.length ? value : ERROR;
    }
    return ERROR;
  };

  validateCountry = () => {
    const ERROR = 'No country selected';
    if (this.select.current) {
      const { value } = this.select.current;
      return value.length ? value : ERROR;
    }
    return ERROR;
  };

  validateGender = () => {
    const ERROR = 'Gender not selected';
    if (this.inputRadioMale.current?.checked) {
      const { value } = this.inputRadioMale.current;
      return value;
    } else if (this.inputRadioFemale.current?.checked) {
      const { value } = this.inputRadioFemale.current;
      return value;
    }
    return ERROR;
  };

  validateImage = () => {
    const ERROR = 'no image selected';
    if (this.inputFile.current) {
      const { value } = this.inputFile.current;
      const index = value.lastIndexOf('.') + 1;
      const extFile = value.slice(index, value.length).toLowerCase();
      if (extFile === 'jpeg' || extFile === 'jpg' || extFile === 'png') {
        return value.length ? value : ERROR;
      }
    }
    return ERROR;
  };

  validateTerms = () => {
    const ERROR = 'field not selected';
    if (this.inputCheckbox.current?.checked) {
      const { value } = this.inputCheckbox.current;
      return value;
    }
    return ERROR;
  };

  render() {
    const inputRadio = [this.inputRadioMale, this.inputRadioFemale];
    return (
      <form className="form" id="form">
        <h2 className="form_title">Form</h2>
        <InputText label="name" error="" inputRef={this.inputText} />
        <InputDate label="birthday" error="" inputRef={this.inputDate} />
        <Select label="country" error="" options={COUNTRY} selectRef={this.select} />
        <InputRadio label="gender" error="" gender={GENDER} inputRef={inputRadio} />
        <InputFile label="image" error="" inputRef={this.inputFile} />
        <InputCheckbox error="" inputRef={this.inputCheckbox} />
        <button className="form_button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
