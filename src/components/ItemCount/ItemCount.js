import React, { useState } from 'react';
import '../ItemCount/ItemCount.css';

function ItemCount({stock, initial = 1, onAdd}) {  

    const [numClicks, setNumClicks] = useState(initial);

    const incrementar = () => {
            setNumClicks(numClicks + 1);
    };

    const decrementar = () => {
            setNumClicks(numClicks - 1);    
    };

    return(
        <div className='item-count-container'>
            <h1>producto 1</h1>
            <div className='counter-screen'>  
                <button className='counterButton' disabled={numClicks <= 1} onClick={decrementar}>-</button>
                <span className='screen'>{numClicks}</span>
                <button className='counterButton' disabled={numClicks >= stock} onClick={incrementar}>+</button>
            </div>
            <div className='counterButton-add'>
                <button onClick={() => onAdd(numClicks)} disabled={stock <= 0}>agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;