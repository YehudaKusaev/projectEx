import React from 'react'
import { useCart } from '../../context/useCart';

function CountOnSale(zero) {

    const { cartItems } = useCart();
// const [counterZero, setCounterZero] = useState('')
const counter = cartItems.length; // Получаем количество элементов в корзине

    
console.log(cartItems)
console.log(counter)
  return (
    <div className={`z-10 justify-center  cart-shop ${counter > 0 ? '' : 'hidden'}`}>{counter}</div>
  )
}

export default CountOnSale