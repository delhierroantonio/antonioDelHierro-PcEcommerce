//  borrar inicio
import React,{useEffect, useState} from 'react';


const Basura = () => {
  const [numClicks,setNumClicks] =useState();
  
  useEffect( () => {
    alert('temporal');
  },[]);
  
  useEffect( () => {
    alert('temporal');
  },[numClicks]);
  
  (async () => {
    const obtenerProductos = new Promise((accept, reject) => {
        const random= Math.random();
        if (random > 0.5) {
            accept('Lista de Productos');
        }
        reject('NO hay nada de que?');
    })
    try {
        const response = await obtenerProductos;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
  })();
  // borrar fin
  return (
    <div>Basura</div>
  )
}

export default Basura

