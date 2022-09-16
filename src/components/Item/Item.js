import React from 'react';  
import '../Item/Item.css';
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/detail/${product.id}`);
  }
  return (
      <div className='item'  onClick={handleNavigate}>
        <img src={product.image} alt='custom pc' />
        <div className='item-content'>
          <h2>{product.title}</h2>
          <p>{product.category}</p>
          <p>${product.price}</p>
          <a href='/'>Ver detalles</a>
        </div>
      </div>
  )
}

export default Item