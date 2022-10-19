import React, { useContext } from 'react';
import { Cart } from "../../context/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import '../CartWidget/CartWidget.css';

function CartWidget() {
  const { totalProducts } = useContext(Cart);
    return(
      <div className='cartWidget-container'>
        <AiOutlineShoppingCart className='cartwidget' />
        { totalProducts() || '' }
      </div>
    )
}

export default CartWidget;