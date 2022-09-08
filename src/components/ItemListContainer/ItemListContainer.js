import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
// import ItemCount from '../ItemCount/ItemCount';
import '../ItemListContainer/ItemListContainer.css';

// fake products
const productosArray = [
    {id:1, title:'pc one', description:'generic pc 1', price:2000, pictureUrl:'https://img.freepik.com/free-vector/organic-flat-gamer-room-illustration_23-2148925414.jpg?w=2000'},
    {id:2, title:'pc two', description:'generic pc 2', price:2400, pictureUrl:'https://img.freepik.com/free-vector/organic-flat-gamer-room-illustration_23-2148920342.jpg?w=2000'},
    {id:3, title:'pc three', description:'generic pc 3', price:3200, pictureUrl:'https://img.freepik.com/free-vector/cartoon-gamer-room-illustration_23-2148953776.jpg?w=2000'},
    {id:4, title:'pc four', description:'generic pc 4', price:1950, pictureUrl:'https://media.istockphoto.com/vectors/gaming-station-gamers-desktop-workspace-flat-lay-pc-video-game-desk-vector-id1307351157?k=20&m=1307351157&s=612x612&w=0&h=lV7qeyJDIGp9AIQOG5p8bjryyzzGbjFoiFTGy5319OM='},
]

function ItemListContainer(props) {
    // const onAdd = (cantidad) => {
    //     console.log(`se han comprado ${cantidad} unidades!`);
    // }

    const [datos, setDatos] = useState([]);

    useEffect( () => {
        const traerData = new Promise( (resolve) => {
            setTimeout(() => {
                resolve(productosArray);
            }, 2000);
        });
        traerData.then(res => setDatos(res));
    },[])

    return(
        <div className='itemList-container'>
            {/* <h2>{props.greeting}</h2> */}
            <div>
                {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
                <ItemList items={datos} />
            </div>
        </div>
    )
}

export default ItemListContainer;