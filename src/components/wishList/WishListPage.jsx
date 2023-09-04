import React, { useState } from "react";

function WishListPage() {
  const [wishlist, setWishlist] = useState([]);
  const [newItem, setNewItem] = useState("");

  // Функция для добавления продукта в список желаемых
  const addToWishlist = () => {
    if (newItem.trim() === "") return;
    setWishlist([...wishlist, newItem]);
    setNewItem("");
  };

  // Функция для удаления продукта из списка желаемых
  const removeFromWishlist = (index) => {
    const updatedWishlist = [...wishlist];
    updatedWishlist.splice(index, 1);
    setWishlist(updatedWishlist);
  };

  return (
    <div className="container p-8 mx-auto">
      <h1 className="mb-4 text-3xl font-semibold">Список желаемых продуктов</h1>

      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border"
          placeholder="Введите продукт"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          className="px-4 py-2 mt-2 text-white bg-blue-500"
          onClick={addToWishlist}
        >
          Добавить в список
        </button>
      </div>

      <ul>
        {wishlist.map((item, index) => (
          <li key={index} className="flex items-center justify-between mb-2">
            <span>{item}</span>
            <button
              className="text-red-500"
              onClick={() => removeFromWishlist(index)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WishListPage;
