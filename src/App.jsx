import React from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";

import "./index.css";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Recommended />
      <Products />
    </div>
  );
};

export default App;
