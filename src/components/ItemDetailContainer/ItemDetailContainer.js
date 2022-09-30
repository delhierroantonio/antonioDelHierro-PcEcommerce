import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import '../ItemDetailContainer/ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const {productId} = useParams();  
  const [productDetail, setProductDetail] = useState({});
  // gestionar la obtencion de la data del detalle
  useEffect( ()=> {
  const getProducts = async () => {
    try {
      // genera referencia al documento
        const docRef = doc(db, "products", productId);
        // realizamos la peticion a FB
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProductDetail({id: docSnap.id, ...docSnap.data()});
          console.log("Document data:", docSnap.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      // const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      // const datos = await res.json();
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