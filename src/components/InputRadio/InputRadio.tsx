import React, { Component } from 'react';

type InputRadioProps = {
  inputRefMale: React.RefObject<HTMLInputElement>;
  inputRefFemale: React.RefObject<HTMLInputElement>;
  error: string;
};

class InputRadio extends Component<InputRadioProps> {
  render() {
    const { error, inputRefMale, inputRefFemale } = this.props;
    return (
      <>
        <div className="form_control">
          <label>
            Gender:
            <label htmlFor="male" className="form_label">
              <input type="radio" name="gender" id="male" value="MALE" ref={inputRefMale} />
              Male
            </label>
            <label htmlFor="female" className="form_label">
              <input type="radio" name="gender" id="female" value="FEMALE" ref={inputRefFemale} />
              Female
            </label>
          </label>
        </div>
        <div className="form_error">{error}</div>
      </>
    );
  }
}

export default InputRadio;
