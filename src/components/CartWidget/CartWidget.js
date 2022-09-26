import React, { useContext } from 'react';
import { Cart } from "../../context/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import '../CartWidget/CartWidget.css';

function CartWidget() {
  const { cart } = useContext(Cart);

    return(
      <div className='cartWidget-container'>
        <AiOutlineShoppingCart className='cartwidget' />
        {cart.length > 0 ? cart.length : null}
      </div>
    )
}

export default CartWidget;