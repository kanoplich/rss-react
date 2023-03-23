import React, { Component } from 'react';

type InputCheckboxProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  error: string;
};

class InputCheckbox extends Component<InputCheckboxProps> {
  render() {
    const { error, inputRef } = this.props;
    return (
      <>
        <div className="form_control">
          <label className="form_label">
            <input type="checkbox" ref={inputRef} />I agree to the terms of service
          </label>
        </div>
        <div className="form_error">{error}</div>
      </>
    );
  }
}

export default InputCheckbox;
