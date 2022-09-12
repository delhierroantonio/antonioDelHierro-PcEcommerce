import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

function ItemListContainer(props) {
    // const onAdd = (cantidad) => {
    //     console.log(`se han comprado ${cantidad} unidades!`);
    // }

    
    const [productos, setProductos] = useState([]);
    useEffect( () => {
        (async () => {
            try{
                const response = await fetch("https://fakestoreapi.com/products");
                const productosApi = await response.json();
                setProductos(productosApi)
            } catch(error) {
                console.log(error);
            }
        })()
    }, [])
    return(
        <div className='itemList-container'>
            <div>
                {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
                <ItemList items={productos} /> 
            </div>
        </div>
    )
}

export default ItemListContainer;