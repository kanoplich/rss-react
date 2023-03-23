import React, { Component } from 'react';

class InputDate extends Component {
  render() {
    return (
      <>
        <div className="form_control">
          <label htmlFor="birthday">Birthday:</label>
          <input type="date" id="birthday" />
        </div>
        <div className="form_error"></div>
      </>
    );
  }
}

export default InputDate;
