import React from "react";
import PropTypes from "prop-types";

const RadioField = ({ options, name, onChange, value, label }) => {
  return (
    <div className="mb-4">
      <label htmlFor="validationCustom04" className="form-label">
        {label}
      </label>
      {options.map((option) => (
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id="inlineRadio1"
            value="option1"
          />
          <label classNAme="form-check-label" for="inlineRadio1">
            1
          </label>
        </div>
      ))}
    </div>
  );
};
RadioField.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
export default RadioField;
{
  options, name, onChange, value;
}
