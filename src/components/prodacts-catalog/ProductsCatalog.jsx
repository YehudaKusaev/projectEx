import React from "react";

import ECommerceCard from "./ECommerceCard";
import { useLocation } from "react-router-dom";
import Delimiter from "../../usedComponents/delimiters/Delimiter";


function ProductsCatalog({
  products,
  searchResults,
  searchButtonClicked,
  addToCart,
}) {
  const location = useLocation();
  const filteredSearchResults = location.state
    ? location.state.searchResults
    : [];

  const productsToDisplay = searchButtonClicked
    ? searchResults
    : products || filteredSearchResults;

    const delimitAt = 'Каталог'
  console.log(searchResults);
  return (
    <div className="allContentCatalog">
      <Delimiter delimitAt={delimitAt}/>
    <div className="flex flex-col flex-wrap content-end w-11/12 item-center">
      <div>
        <h2>ProductsCatalog</h2>
      </div>
      <ECommerceCard addToCart={addToCart} products={productsToDisplay} />
    </div>
    </div>
  );
}

export default ProductsCatalog;
