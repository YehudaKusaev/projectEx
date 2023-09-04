import React from 'react'
// import {itemCatalog} from '../NowProductUse/catalog'
// import { useState } from 'react'
import ItemTable from './ItemTable'
import { useCart } from '../../context/useCart';
function SalePack() {

    const { cartItems,removeFromCart, increaseItemCount, decreaseItemCount } = useCart();
    console.log(cartItems)

const result = cartItems.reduce(
    (previousValue, currentItem) => 
    previousValue + currentItem.count * currentItem.price,
    0
)
const FooterCard = (
<div className='result-panel'>
    <span>
        Общая стоимость: <span className='value'>{result}</span>
    </span>
    <button type="button">Оформить</button>
</div>

);

const EmptyTemplate = (
    <div className="empty-text">Нет товаров в корзине</div>
)

const handleRemoveItem = (id) => {
    // setItem((prevItems) => prevItems.filter(item => item.id !== id));
    removeFromCart(id);
}

const handleIncreaseCount = (id) => {
    // Реализуйте этот метод в вашем CartProvider
    increaseItemCount(id);
};

const handleDecreaseCount = (id, count) => {
    if (count < 2) {
        handleRemoveItem(id);
    } else {
        // Реализуйте этот метод в вашем CartProvider
        decreaseItemCount(id);
    }
};

  return (
    <div className='flex flex-col items-center w-11/12 px-4 py-1 m-auto'>SalePack
    <div className='w-full'>
        <div className="headOver">
            <h2>Список товаров в корзине</h2>
            {
                !!cartItems.length ? <div>
                <ItemTable cartItems={cartItems} 
                removeItem={handleRemoveItem}
                increaseCount={handleIncreaseCount}
                decreaseCount={handleDecreaseCount}
               
                />
            </div> : EmptyTemplate
            }
            
            {!!cartItems.length && FooterCard}
        </div>
    </div>
    
    </div>
  )
}

export default SalePack


// const handleDecreaseCount = (id, count) => {
//     if(count < 2){
//         handleRemoveItem(id)   ;
//     }else {
//     setItem(cartItems.map(item => {
//         if(item.id === id) {
//             item.count--;
//         }
//         return item;
//     }))
// }
// }

// const handleIncreaseCount = (id) => {
//     setItem(cartItems.map(item => {
//         if(item.id === id) {
//             item.count++;
//         }
//         return item;
//     }))
// }
