import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemDetail/ItemDetail.css';

const ItemDetail = ({producto}) => {
  return (
      <div className='item-container'>
        <div className='item-img'>
          <img src={producto.image} alt='lala' />
        </div>
        <div className='item-content'>
          <h1>{producto.title}</h1>
          <p>{producto.description}</p>
          <p><strong>$ {producto.price}</strong></p>
          <ItemCount />
          <a href='/'>Buy-Now</a>
        </div>
      </div>
  )
}

export default ItemDetail