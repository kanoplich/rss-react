import React, { Component } from 'react';

type InputDateProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  label: string;
  error: string;
};
class InputDate extends Component<InputDateProps> {
  render() {
    const { label, error, inputRef } = this.props;
    return (
      <>
        <div className="form_control">
          <label htmlFor="birthday">{label}:</label>
          <input type="date" id="birthday" ref={inputRef} />
        </div>
        <div className="form_error">{error}</div>
      </>
    );
  }
}

export default InputDate;
