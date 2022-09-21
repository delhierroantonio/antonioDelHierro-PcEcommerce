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

    const addCart = () => {
        onAdd(numClicks);
        setNumClicks(initial);  
    }

    return(
        <div className='item-count-container'>
            <h1>unidades a comprar</h1>
            <div className='counter-screen'>  
                <button className='counterButton' disabled={numClicks <= 1} onClick={decrementar}>-</button>
                <span className='screen'>{numClicks}</span>
                <button className='counterButton' disabled={numClicks >= stock} onClick={incrementar}>+</button>
            </div>
            <div className='counterButton-add'>
                {/* <button onClick={() => onAdd(numClicks)} disabled={stock <= 0}>agregar al carrito</button> */}
                <button onClick={addCart} disabled={stock <= 0}>agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;