import React from "react";

import "./Recommended.css";
import Buttons from "../components/Buttons";

const Recommended = ({ handleClick }) => {
  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Buttons onClickHandler={handleClick} title="All Products" value="" />
        <Buttons onClickHandler={handleClick} title="Nike" value="Nike" />
        <Buttons onClickHandler={handleClick} title="Adidas" value="Adidas" />
        <Buttons onClickHandler={handleClick} title="Puma" value="Puma" />
        <Buttons onClickHandler={handleClick} title="Vans" value="Vans" />
      </div>
    </div>
  );
};

export default Recommended;
