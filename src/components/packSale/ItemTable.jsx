import React from "react";
import "./ItemTable.css";
// import { useCart } from "../../context/useCart";

function ItemTable({ cartItems, removeItem, increaseCount, decreaseCount }) {

   

  return (
    <div>
      <table className="price-table">
        <thead>
          <tr>
            <th>Фото</th>
            <th>Наименование товара</th>
            <th>Цена за шт</th>
            <th>Количество</th>
            <th>цена</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems && cartItems.map((item) => (
            <tr key={item.id}>
              <td className="bg-yellow-50">
                <img
                  className="object-cover transition duration-500 cursor-pointer foto-product hover:scale-110"
                  src={item.imgSrc}
                  alt={item.id}
                />
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => decreaseCount(item.id, item.count)}>
                  -
                </button>
                <span className="count">{item.count}</span>
                <button onClick={() => increaseCount(item.id)}>+</button>
              </td>
              <td>{item.price * item.count}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>
                  <img
                    src="../icons/free-icon-font-broom-3917049.svg"
                    alt="delete"
                    srcSet=""
                    className="w-4 h-4"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemTable;
