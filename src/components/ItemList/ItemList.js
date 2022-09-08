import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items = []}) => {
  return (
    // <div className='itemList-container'></div>
    items.map(producto => <Item key={producto.id} info={producto} />)
  );
}

export default ItemList