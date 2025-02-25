import React, { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import SideBar from "./SideBar/SideBar";
import Card from "./components/Card";
import "./index.css";

//database
import products from "./db/data";

const App = () => {
  const [selectedCateggory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  //----------inputFilter-----------
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filtredItems = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  // ---------Radio Filter--------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ----------Buttons Filter--------

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    console.log("work filtered data");
    let filtredProduct = products;
    // Filtering input items
    if (query) {
      filtredProduct = filtredItems;
    }

    //Selected Filter
    if (selected) {
      filtredProduct = filtredProduct.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filtredProduct.map(
      ({ img, title, star, reviews, prevPrice, newPrice }, index) => (
        <Card
          key={index}
          img={img}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          title={title}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCateggory, query);

  return (
    <>
      <SideBar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;
