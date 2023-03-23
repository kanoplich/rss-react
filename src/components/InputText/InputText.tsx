import React, { Component } from 'react';

type InputTextProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  label: string;
  error: string;
};

class InputText extends Component<InputTextProps> {
  render() {
    const { inputRef, label, error } = this.props;
    return (
      <>
        <div className="form_control">
          <label htmlFor="username">{label}:</label>
          <input type="text" id="username" name="username" ref={inputRef} />
        </div>
        <div className="form_error">{error}</div>
      </>
    );
  }
}

export default InputText;
