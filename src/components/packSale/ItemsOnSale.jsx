import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart";
import "./ItemOnSale.css";

function ItemsOnSale({ cartOpen }) {
  const { cartItems, removeFromCart } = useCart(); // Получите товары из контекста корзины

  const result = cartItems.reduce(
    (previousValue, currentItem) =>
      previousValue + currentItem.count * currentItem.price,
    0
  );

  return (
    <div
      className={`absolute  z-10  h-96 border-t-2 border-red-600 border-solid rounded-sm cartItemDrop w-5/12 bg-slate-100 top-14 right-80 ${
        cartOpen ? "" : "hidden"
      }`}
    >
      <table className="price-table">
        <thead>
          <tr>
            <th>Фото</th>
            <th>Название</th>
            <th>Цена за шт</th>
            <th>Количество</th>
            <th>Общая цена</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems &&
            cartItems.map((item) => (
              <tr key={item.id}>
                <td className="bg-yellow-50">
                  <img
                    className="object-cover transition duration-500 cursor-pointer foto-on-sale w-14 h-14 hover:scale-110"
                    src={item.imgSrc}
                    alt={item.id}
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                {/* <td>
                <button onClick={() => decreaseCount(item.id, item.count)}>
                  -
                </button>
                <button onClick={() => increaseCount(item.id)}>+</button>
              </td> */}
                <td>
                  {" "}
                  <span className="count">{item.count}</span>
                </td>
                <td>{item.price * item.count}</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>
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
        <tfoot>
          <tr>
            <td>
              <span>Всего к оплате:{!!cartItems.length ? result : ""}</span>
            </td>
          </tr>
          <tr>
            <td>
              <button>К оплате</button>
              <Link to={'/salepack'}>
               <button className="bg-yellow-400">В корзину</button>
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ItemsOnSale;
