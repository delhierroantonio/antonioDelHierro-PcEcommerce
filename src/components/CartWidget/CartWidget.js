import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import '../CartWidget/CartWidget.css';

function CartWidget() {
    return(
      <div>
        <AiOutlineShoppingCart className='cartwidget' />
      </div>
    )
}

export default CartWidget;