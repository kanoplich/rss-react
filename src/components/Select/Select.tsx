import React, { Component } from 'react';

type SelectProps = {
  selectRef: React.RefObject<HTMLSelectElement>;
  label: string;
  error: string;
  options: string[];
};
class Select extends Component<SelectProps> {
  render() {
    const { label, error, options, selectRef } = this.props;
    return (
      <>
        <div className="form_control">
          <label htmlFor="country">{label}:</label>
          <select id="country" ref={selectRef}>
            {options.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="form_error">{error}</div>
      </>
    );
  }
}

export default Select;
