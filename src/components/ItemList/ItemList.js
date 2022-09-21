import React from 'react'
import Item from '../Item/Item';
import '../ItemList/ItemList.css'

const ItemList = ({items}) => {
  return (
    <div className='itemList'>
      {items.length ? items.map(product => {
      return <Item key={product.id} product={product} /> 
        })
        :
        <h2>Loading...</h2>
        }
    </div>
  )
}

export default ItemList