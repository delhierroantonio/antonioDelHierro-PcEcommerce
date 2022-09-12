import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import '../ItemDetailContainer/ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  // gestionar la obtencion de la data del detalle
  useEffect( ()=> {
  const getProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products/1');
      const datos = await res.json();
      setProductDetail(datos);
    } catch (error) {
      console.log(error);        
    }
  }
  getProducts();
  }, [])
  console.log(productDetail);
  return (
    <div className='itemDetail-container'>
      <ItemDetail producto={productDetail} />
    </div>
    )
}

export default ItemDetailContainer