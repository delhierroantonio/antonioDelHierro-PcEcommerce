import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cart } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail.css';

const ItemDetail = ({producto}) => {
  const [qty, setQty] = useState(0);
  const navigate = useNavigate();
  // contexto 
  const {agregarProducto} = useContext(Cart); 
  // agregar items al carrito
  const addCart = (quantity) => {
    setQty(quantity);
  }
  // finalizar compra
  const buy = () => { 
    const productToBuy = {...producto, quantity: qty}
    agregarProducto(productToBuy)
    navigate('/cart'); 
  }
  // console.log(qty);

  return (
      <div className='item-container'>
        <div className='item-img'>
          <img src={producto.image} alt='imagen de pc' />
        </div>
        <div className='item-content'>
          <h1>{producto.title}</h1>
          <p><strong>Descripcion:</strong> {producto.description}</p>
          <p><strong>Precio: ${producto.price}</strong></p>
          { !qty ? (
            <ItemCount stock={producto.stock} initial={1} onAdd={addCart} />
            ):
            <button style={{borderStyle:'none',color:'white',fontSize: '2rem', backgroundColor: 'blue', padding: '1rem 2rem', cursor: 'pointer'}} onClick={buy}>Finalizar Compra!</button> }
        </div>
      </div>
  )
}

export default ItemDetail