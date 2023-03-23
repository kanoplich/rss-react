import React, { Component } from 'react';

class InputCheckbox extends Component {
  render() {
    return (
      <>
        <div className="form_control">
          <fieldset className="form_fieldset">
            <legend>Hobby:</legend>
            <label htmlFor="football">
              <input id="football" type="checkbox" />
              Football
            </label>
            <label htmlFor="hockey">
              <input id="hockey" type="checkbox" />
              Hockey
            </label>
            <label htmlFor="basketball">
              <input id="basketball" type="checkbox" />
              Basketball
            </label>
            <label htmlFor="volleyball">
              <input id="volleyball" type="checkbox" />
              Volleyball
            </label>
          </fieldset>
        </div>
        <div className="form_error"></div>
      </>
    );
  }
}

export default InputCheckbox;
