import React from 'react'
import '../Item/Item.css'

const Item = ({product}) => {
  return (
      <div className='item'>
        <img src={product.image} alt={`pc model${product.title}`} />
        <div className='item-content'>
          <h2>{product.title}</h2>
          {/* <p>{product.description}</p> */}
          <p>{product.category}</p>
          <p>${product.price}</p>
          <a href='/'>Ver detalles</a>
        </div>
      </div>
  )
}

export default Item