import React, { Component } from 'react';

type InputFileProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  label: string;
  error: string;
};

class InputFile extends Component<InputFileProps> {
  render() {
    const { label, error, inputRef } = this.props;
    return (
      <>
        <div className="form_control">
          <label htmlFor="image">{label}:</label>
          <input id="image" type="file" accept=".png, .jpg, .jpeg" ref={inputRef} />
        </div>
        <div className="form_error">{error}</div>
      </>
    );
  }
}

export default InputFile;
