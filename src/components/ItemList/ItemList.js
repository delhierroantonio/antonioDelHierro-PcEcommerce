import React from 'react'
import Item from '../Item/Item';
import '../ItemList/ItemList.css'

const ItemList = ({items}) => {
  return (
    <div className='itemList'>
      {items.map(product => {
      return <Item key={product.id} product={product} /> 
        })}
    </div>
  )
}

export default ItemList