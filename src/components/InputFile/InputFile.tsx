import React, { Component } from 'react';

class InputFile extends Component {
  render() {
    return (
      <>
        <div className="form_control">
          <label htmlFor="photo">Image:</label>
          <input id="image" type="file" />
        </div>
        <div className="form_error"></div>
      </>
    );
  }
}

export default InputFile;
