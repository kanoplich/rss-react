import React, { Component } from 'react';

type InputDateProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  error: string;
};
class InputDate extends Component<InputDateProps> {
  render() {
    const { error, inputRef } = this.props;
    return (
      <>
        <div className="form_control">
          <label htmlFor="birthday">Birthday:</label>
          <input data-testid="date-birthday" type="date" id="birthday" ref={inputRef} />
        </div>
        <div className="form_error">{error}</div>
      </>
    );
  }
}

export default InputDate;
