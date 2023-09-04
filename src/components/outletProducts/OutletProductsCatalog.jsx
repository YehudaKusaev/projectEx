import React from "react";
import {  useLocation } from "react-router-dom";
import ProductsCatalog from "../prodacts-catalog/ProductsCatalog";
import { itemCatalog } from "../NowProductUse/catalog";


function OutletProductsCatalog() {
  const location = useLocation();
  const searchResults = location.state ? location.state.searchResults : [];
  const searchButtonClicked  = location.state ? location.state.searchButtonClicked : false;

//   const filteredProducts = itemCatalog.filter((product) => {
//     console.log(itemCatalog)
//     const includesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory ? product.categorate === selectedCategory : true;
//     return includesSearchTerm && matchesCategory;
//   });

  return <ProductsCatalog searchResults={searchResults} products={searchButtonClicked ? searchResults : itemCatalog} searchButtonClicked={searchButtonClicked} />;
}

export default OutletProductsCatalog;
