import React from 'react';
import CartContext from '../../context/CartContext';

const CartContainer = ({producto}) => {
  const { removeProduct } = CartContext();
  return (
    <div>
      <img src={producto.image} alt='producto'/>
      <div>
        <p>Nombre: {producto.title}</p>
        <p>Cantidad: {producto.quantity}</p>
        <p>Precio unitario:{producto.price}</p>
        <p>Subtotal:${producto.quantity * producto.price}</p>
        <button onClick={() => removeProduct(producto.id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default CartContainer;