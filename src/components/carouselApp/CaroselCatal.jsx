import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCatal from "./ProductCatal";
import { productBaseData, responsive } from "./dataCatal";

function CaroselCatal() {


const ProductOnCatal = productBaseData.map(item => (

    <ProductCatal 
    key={item}
    name={item.name} 
    url={item.imageUrl} 
    price={item.price} 
    description={item.description} />
))
  return (
    <div className="max-w-5xl m-4 catalogCarousel">
      <h1>CaroselCatal</h1>
      <Carousel responsive={responsive}>

        {ProductOnCatal}

      </Carousel>
      
    </div>
  );
}

export default CaroselCatal;
