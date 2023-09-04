import React from "react";
import Carosel from "./carouselApp/Carosel";
import OutlineWithIcons from "../usedComponents/OutlineWithIcons";
import { itemCatalog } from "./NowProductUse/catalog";
import { useParams } from "react-router-dom";
import { FaShekelSign } from "react-icons/fa";
import RatingWithText from "../usedComponents/RatingWithText";

function CardProduct() {
  const { productId } = useParams();
  const product = itemCatalog.find((item) => item.id.toString() === productId);
  return (
    <>
      <div className="p-4 px-4 m-8 container-p">
        <div className="twoRaws">
          <div className="grid grid-flow-col grid-cols-2 gap-2 twoColumn">
            <Carosel imageSlide={product.imgSrc} />

            <div className="flex flex-col flex-wrap items-center content-end justify-between allTitle justify-items-end ">
              <div className="border border-solid nameTitle">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-500">
                  <span className="font-medium">
                    Бранд продукта: {product.brand}
                  </span>
                  <span className="ml-2"><RatingWithText/></span>
                </p>
                <hr className="h-0.5 w-full bg-gray-200 mt-2" />
              </div>

              <div className="flex w-11/12 border border-solid price">
                <div className=" pricing">
                  <span>{product.price}</span> <span><FaShekelSign/></span> <span >{product.price * 1.35}</span> <span><FaShekelSign/></span>
                </div>
                <div className="inorder">
                  <h3>Товар сейчас : {product.availability}</h3>
                </div>
              </div>

              <div className="w-full border border-solid transAndSelect h-28">
                <div className="flex w-11/12 m-auto border border-solid selectingAll h-28 justify-evenly">
                  <div className="w-20 h-14 quantity">
                    <div className="quantity-btns">
                      <div className="quantity-header">
                        <h3>Выберите количество</h3>
                      </div>
                      <button type="button">-</button>
                      <input className="w-3/5" type="number" defaultValue={"1"} />
                      <button type="button">+</button>
                    </div>
                  </div>

                  <div className="w-10 selecting-color h-14">
                    <h3>Выберите цвет</h3>
                    <div className="w-8 h-3 bg-red-600 push-color "></div>
                  </div>
                </div>
              </div>

              <div className="border border-solid transfer">
                <h3>доставка</h3>
              </div>

              <div className="border border-solid butonsAndWishL">
                <div className="wishLike">Общая сумма к оплате</div>
                <div className="payPack">
                  <OutlineWithIcons />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row description">
            <div className="inDescrip basis-3/4">
              <h2>
                <b>Описание:</b> <br />
                Хорошие качественные стаканы Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Reprehenderit odit velit explicabo
                culpa similique, provident fugiat odio blanditiis incidunt aut
                in ex illo. Veniam quae, recusandae, nostrum exercitationem
                nesciunt fugiat magnam voluptates officiis, necessitatibus nam
                voluptatum est aperiam adipisci ut.
              </h2>
            </div>
            <div className="nearDescrip basis-1/4">
              <img src="" alt="catalog" sizes="12" srcSet="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProduct;
