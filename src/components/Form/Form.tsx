import InputText from '../InputText/InputText';
import React, { Component } from 'react';
import InputDate from '../InputDate/InputDate';
import Select from '../Select/Select';
import InputRadio from '../InputRadio/InputRadio';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import InputFile from '../InputFile/InputFile';

class Form extends Component {
  render() {
    return (
      <form className="form" id="form">
        <h2 className="form_title">Form</h2>
        <InputText />
        <InputDate />
        <Select />
        <InputRadio />
        <InputCheckbox />
        <InputFile />
        <button className="form_button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
