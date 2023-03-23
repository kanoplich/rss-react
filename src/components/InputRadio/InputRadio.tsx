import React, { Component } from 'react';

type InputRadioProps = {
  inputRef: React.RefObject<HTMLInputElement>[];
  label: string;
  error: string;
  gender: string[];
};

class InputRadio extends Component<InputRadioProps> {
  render() {
    const { label, error, gender, inputRef } = this.props;
    return (
      <>
        <div className="form_control">
          <label>
            {label}:
            {gender.map((item, index) => (
              <label htmlFor={item} key={item} className="form_label">
                <input type="radio" name={label} id={item} value={item} ref={inputRef[index]} />
                {item}
              </label>
            ))}
          </label>
        </div>
        <div className="form_error">{error}</div>
      </>
    );
  }
}

export default InputRadio;
