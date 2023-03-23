import React, { Component } from 'react';

class Select extends Component {
  render() {
    return (
      <>
        <div className="form_control">
          <label htmlFor="country">Country:</label>
          <select id="country">
            <option value="" hidden></option>
            <option value="BY">BELARUS</option>
            <option value="RU">RUSSIAN FEDERATION</option>
            <option value="UA">UKRAINE</option>
            <option value="other">other country</option>
          </select>
        </div>
        <div className="form_error"></div>
      </>
    );
  }
}

export default Select;
