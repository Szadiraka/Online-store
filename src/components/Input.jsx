import React from "react";

const Input = ({ handleChange, value, txt, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} value={value} type="radio" name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {txt}
    </label>
  );
};

export default Input;
