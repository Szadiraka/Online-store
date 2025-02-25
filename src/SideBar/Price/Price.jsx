import React from "react";
import "./Price.css";
import Input from "../../components/Input";

const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <Input handleChange={handleChange} txt="All" name="test2" value="" />
      <Input
        handleChange={handleChange}
        txt="$0 -$50"
        name="test2"
        value={50}
      />
      <Input
        handleChange={handleChange}
        txt="$50 -$100"
        name="test2"
        value={100}
      />
      <Input
        handleChange={handleChange}
        txt="$100 -$150"
        name="test2"
        value={150}
      />
      <Input
        handleChange={handleChange}
        txt="Over 150$"
        name="test2"
        value="200"
      />
    </div>
  );
};

export default Price;
