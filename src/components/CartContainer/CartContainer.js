import '../CartContainer/CartContainer.css';
import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { Cart } from "../../context/CartContext";

const CartContainer = () => {
  const {cart, removeItem, clearCart, totalPrice} = useContext(Cart);
  console.log(cart);
  if (cart.length === 0) {
      return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
          <h3>El carrito esta vacio empieza agregando articulos</h3>
          <Link to='/'>Hacer Compras</Link>
        </div>
  )
}
return(
  <div className='cart-table'>
    <table>
      <thead>
        <tr>
            <th>Imagen</th>
            <th>Titulo</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
        </tr>
      </thead>
  {cart.map(product => {
    return(   
      <tbody key={product.id} style={{backgroundColor: 'lightgray', margin: '4rem'}}>
          <tr style={{textAlign: 'center'}}>
              <td>
                <img className='cart-img' src={product.image} alt='product'/>
              </td>
              <td>{product.title}</td>
              <td>qty: {product.quantity}</td>
              <td>p/u: ${product.price}</td>
              <td>Subtotal: ${product.price * product.quantity}</td>
              <button onClick={ () => removeItem(product) }>Eliminar produto</button>
          </tr>
      </tbody>
    )
  })}
    </table>
    <p>total: $ {totalPrice()}</p>
    <button onClick={ () => clearCart(cart) }>Vaciar Carrito</button>
  </div>
  )
}

export default CartContainer;