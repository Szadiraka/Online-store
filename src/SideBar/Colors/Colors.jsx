import React from "react";
import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Color</h2>

      <Input handleChange={handleChange} txt="All" name="test3" value="" />
      <Input
        handleChange={handleChange}
        txt="Black"
        name="test3"
        value="black"
        color="black"
      />
      <Input
        handleChange={handleChange}
        txt="Blue"
        name="test3"
        value="blue"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        txt="Red"
        name="test3"
        value="red"
        color="red"
      />
      <Input
        handleChange={handleChange}
        txt="Green"
        name="test3"
        value="green"
        color="green"
      />
      <Input
        handleChange={handleChange}
        txt="White"
        name="test3"
        value="white"
        color="lightgrey"
      />
    </div>
  );
};

export default Colors;
