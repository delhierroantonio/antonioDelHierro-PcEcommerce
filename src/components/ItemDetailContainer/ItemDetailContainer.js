import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import '../ItemDetailContainer/ItemDetailContainer.css';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const {productId} = useParams();
  const [productDetail, setProductDetail] = useState({});
  // gestionar la obtencion de la data del detalle
  useEffect( ()=> {
  const getProducts = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const datos = await res.json();
      setProductDetail(datos);
    } catch (error) {
      console.log(error);        
    }
  }
  getProducts();
  }, [productId])
  console.log(productDetail);
  return (
    <div className='itemDetail-container'>
      <ItemDetail producto={productDetail} />
    </div>
    )
}

export default ItemDetailContainer