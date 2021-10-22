import React from "react";
import PropTypes from "prop-types";

const CheckBoxField = ({ name, value, onChange, children }) => {
  const handleChange = () => {
    onChange({ name: name, value: !value });
  };
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id={name}
        onChange={handleChange}
        checked={value}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {children}
      </label>
    </div>
  );
};

CheckBoxField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.bool,
  name: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
  // label: PropTypes.string
};

export default CheckBoxField;
