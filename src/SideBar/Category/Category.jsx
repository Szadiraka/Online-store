import React from "react";
import "./Category.css";
import Input from "../../components/Input";

const Category = ({ handleChange }) => {
  return (
    <div className="sidebar-items">
      <h2 className="sidebar-title">Category</h2>

      <div>
        <Input handleChange={handleChange} txt="All" name="test" value="" />
        <Input
          handleChange={handleChange}
          txt="Sneakers"
          name="test"
          value="sneakers"
        />
        <Input
          handleChange={handleChange}
          txt="Flats"
          name="test"
          value="flats"
        />
        <Input
          handleChange={handleChange}
          txt="Sandals"
          name="test"
          value="sandals"
        />
        <Input
          handleChange={handleChange}
          txt="Heels"
          name="test"
          value="heels"
        />
      </div>
    </div>
  );
};

export default Category;
