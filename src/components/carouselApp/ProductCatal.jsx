import React from "react";
import"./productCatal.css"
import RatingWithText from "../../usedComponents/RatingWithText";
import { Link } from "react-router-dom";

function ProductCatal(props) {
  return (
    <div className=" card">
        <div className="imgCard w-30 ">
         <img
        className="object-cover product--image"
        src={props.url}
        alt="product name"
      />   
        </div>
      <div className="headerOne ">
         <h1 className="truncate">{props.name} </h1>
      </div>
     
      <p className="text-right price">{props.price} </p>
      <p className="p-2">{props.description} </p>
      <span ><RatingWithText/></span>
      <Link to={'/salepack'}>
      <div className="buton">
        <button>В корзину </button>
      </div></Link>
      <Link to={'/paying'}>
      <div className="m-1 buton">
        <button>Оплатить </button>
      </div></Link>
    </div>
  );
}

export default ProductCatal;
