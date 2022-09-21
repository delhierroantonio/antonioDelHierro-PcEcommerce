import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';

function ItemListContainer() {
    const {categoryId} = useParams();
    // console.log(categoryId);
    const [productos, setProductos] = useState([]);
    useEffect( () => {
        (async () => {
            try{
                if (categoryId) {
                    const response = await fetch("https://fakestoreapi.com/products/category/" + categoryId );
                    const productosApi = await response.json();
                    setProductos(productosApi);
                }
                else{
                    const response = await fetch("https://fakestoreapi.com/products");
                    const productosApi = await response.json();
                    setProductos(productosApi);
                }
            } catch(error) {
                console.log(error);
            }
        })()
    }, [categoryId])
    return(
        <div className='itemList-container'>
            <div>
                <ItemList items={productos} /> 
            </div>
        </div>
    )
}

export default ItemListContainer;