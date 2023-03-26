import React, { Component } from 'react';

type InputTextProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  error: string;
};

class InputText extends Component<InputTextProps> {
  render() {
    const { inputRef, error } = this.props;
    return (
      <>
        <div className="form_control">
          <label htmlFor="username">Name:</label>
          <input type="text" id="username" name="username" ref={inputRef} />
        </div>
        <div className="form_error">{error}</div>
      </>
    );
  }
}

export default InputText;
