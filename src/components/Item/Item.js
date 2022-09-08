import React from 'react'
import '../Item/Item.css'

const Item = ({info}) => {
  return (
      <div className='item-container'>
        <img src={info.pictureUrl} alt={`imagen de la pc ${info.title}`} />
        <div className='item-content'>
          <h2>{info.title}</h2>
          <p>{info.description}</p>
          <p>${info.price}</p>
          <a href='/'>Ver detalle del producto</a>
        </div>
      </div>
  )
}

export default Item