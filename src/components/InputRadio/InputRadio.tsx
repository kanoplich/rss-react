import React, { Component } from 'react';

class InputRadio extends Component {
  render() {
    return (
      <>
        <div className="form_control">
          <label>
            Gender:
            <input type="radio" name="gender" id="choice1" value="male" />
            <label htmlFor="choice1">Male</label>
            <input type="radio" name="gender" id="choice2" value="female" />
            <label htmlFor="choice2">Female</label>
          </label>
        </div>
        <div className="form_error"></div>
      </>
    );
  }
}

export default InputRadio;
