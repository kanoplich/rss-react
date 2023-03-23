import React, { Component } from 'react';

class InputText extends Component {
  render() {
    return (
      <>
        <div className="form_control">
          <label htmlFor="username">Name:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form_error"></div>
      </>
    );
  }
}

export default InputText;
