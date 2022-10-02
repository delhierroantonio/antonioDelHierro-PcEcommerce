import React, { useContext, useState } from 'react'
import { createContext } from "react";

// declarar el context
export const Cart = createContext([]);
// hook para usar mi context
export const useCart = () => useContext(Cart);


const CartContext = ({children}) => {
  // estado del carrito
  const [cart, setCart] = useState([]);

  // funcion agregar al carrito
  const agregarProducto = (item) => {
    const productoDuplicado = isInCart(item.id);
    console.log(productoDuplicado);
    if (productoDuplicado) {
      const cartModificado = cart.map(product => {
        if (product.id === item.id) {
          product.quantity += item.quantity;
          return product;
        }
        return product;
      })
      setCart(cartModificado);
      console.log(cartModificado);
    }else {
      const carritoActualizado = [...cart, item];
      setCart(carritoActualizado);
    }
  }
  // revisar si el producto esta agregado
  const isInCart = (id) => {
    return cart.some(producto => producto.id === id)
  }
  // eliminar item del carrito
  const removeItem = (itemToRemove) => {
    const filteredItems = cart.filter(item => item !== itemToRemove);
    setCart(filteredItems);
    console.log(itemToRemove);
  }
  // eliminar lo que esta en el carrito
  const clearCart = () => setCart([]);
  // mostrar precio total
  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  }

  return (
    <Cart.Provider value={{cart, agregarProducto, removeItem, clearCart, totalPrice}}>
      {children}
    </Cart.Provider>
    )
}

export default CartContext