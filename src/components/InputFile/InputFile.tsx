import React, { Component } from 'react';

type InputFileProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  error: string;
};

class InputFile extends Component<InputFileProps> {
  render() {
    const { error, inputRef } = this.props;
    return (
      <>
        <div className="form_control">
          <label htmlFor="image">Image:</label>
          <input id="image" type="file" accept=".png, .jpg, .jpeg" ref={inputRef} />
        </div>
        <div className="form_error">{error}</div>
      </>
    );
  }
}

export default InputFile;
