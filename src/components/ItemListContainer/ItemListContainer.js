import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";

function ItemListContainer() {
    const {categoryId} = useParams();
    // console.log(db);
    // console.log(categoryId);
    const [productos, setProductos] = useState([]);
    useEffect( () => {
        (async () => {
            try{
                // se genera la query
                const q = categoryId 
                ? query
                    (
                        collection(db, "products"), 
                        where("category", "==", categoryId)
                    )
                : query(collection(db, "products"));
                    // se hace el llamado a firebase
                const querySnapshot = await getDocs(q);
                const productsFirebase = [];
                // se obtine el "snapShot" con el raw data
                querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());
                    productsFirebase.push({id: doc.id, ...doc.data()})
                });
                // console.log(productsFirebase);
                setProductos(productsFirebase);
                //     const response = await fetch("https://fakestoreapi.com/products/category/" + categoryId );
                //     const productosApi = await response.json();
                //     setProductos(productosApi);
                //     const response = await fetch("https://fakestoreapi.com/products");
                //     const productosApi = await response.json();
                //     setProductos(productosApi);
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