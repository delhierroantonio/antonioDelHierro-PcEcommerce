import React, { useContext, useState } from 'react'
import { createContext } from "react";
export const Cart = createContext([]);
export const useCart = () => useContext(Cart);


const CartContext = ({children}) => {
  const [cart, setCart] = useState([]);
  // funcion agregar al carrito
  const agregarProducto = (item) => {
    const productoDuplicado = isInCart(item.id);
    if (productoDuplicado) {
      const cartModificado = cart.map(product => {
        if (product.id === item.id) {
          product.quantity += item.quantity;
          return product;
        }
        return product;
      })
      setCart(cartModificado);
    } else {
      const carritoActualizado = [...cart, item];
      setCart(carritoActualizado);
    }
  }
  const isInCart = (id) => {
    return cart.some(producto => producto.id === id)
  }
  const removeItem = (itemToRemove) => {
    const filteredItems = cart.filter(item => item !== itemToRemove);
    setCart(filteredItems);
  }
  const clearCart = () => setCart([]);
  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  }
  const totalProducts = () => {
    return cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
  }

  return (
    <Cart.Provider value={{cart, agregarProducto, removeItem, clearCart, totalPrice, totalProducts}}>
      {children}
    </Cart.Provider>
    )
}

export default CartContext