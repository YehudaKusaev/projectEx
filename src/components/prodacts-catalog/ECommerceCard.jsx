"use client";

import { Card } from "flowbite-react";
import { FaShekelSign } from "react-icons/fa";
import RatingWithText from "../../usedComponents/RatingWithText";
import "./ECommerceCard.css";
// import { itemCatalog } from "../NowProductUse/catalog";
import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart";

export default function ECommerceCard({ products}) {

  const { addToCart } = useCart();


  console.log(addToCart)
  return (
    <div className="grid grid-cols-4 gap-3">
      {products.map((product, index) => (
        <Card
          key={index}
          imgAlt={product.name}
          imgSrc={product.imgSrc[0]}
          className="w-64 align-middle bg-cover zoom-card hover:scale-100"
        >
          <Link to={`/product/${product.id}`}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              <p>{product.title}</p>
            </h5>
          </Link>
          <div className="mb-5 mt-2.5 flex items-center max-w-7xl">
            {product.description}
          </div>
          <RatingWithText />
          <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            <p>{product.rating}</p>
          </span>
          <div className="flex items-center justify-between">
            <span className="flex content-between text-3xl font-bold text-gray-900 dark:text-white">
              <span className="text-base">{product.price}</span>{" "}
              <span>
                <FaShekelSign className="w-2.5 m-1 relative bottom-1.5" />
              </span>
              <i className="text-base line-through">{product.price * 1.25}</i>{" "}
              <FaShekelSign className="w-2.5 m-1 relative bottom-1.5" />
            </span>
          </div>
          <div className="flex add-to-cart">
            <Link
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              // to="!#"
              

            >
              <p onClick={() => addToCart(product)}>В корзину</p>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}


  // Пример фильтрации продуктов в компоненте SlideAsAnything
// const filteredProducts = products.filter((product) => {
//   console.log(product)
//   // const includesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//   // const matchesCategory = selectedCategory ? product.categorate === selectedCategory : true;
//   // return includesSearchTerm && matchesCategory;
// });

 
  // console.log(filteredProducts)