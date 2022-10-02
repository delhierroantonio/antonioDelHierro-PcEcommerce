import '../CartContainer/CartContainer.css';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../../context/CartContext';
import swal from 'sweetalert';
import SpinerLoader from '../SpinerLoader/SpinerLoader.js';
import generarOrden from '../../services/generarOrden';
import { collection, addDoc, getDoc } from 'firebase/firestore';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const CartContainer = () => {
  const { cart, removeItem, clearCart, totalPrice } = useContext(Cart);
  const [loading, setLoading] = useState(false);
  // generar orden de compra
  const handleBuy = async () => {
    setLoading(true);
    const montoTotal = totalPrice();
    const orden = generarOrden(
      'antonio',
      'delhierroantonio@icloud.com',
      cart,
      montoTotal
    );
    console.log(orden);
    // add new document with a generated id.
    const docRef = await addDoc(collection(db, 'orders'), orden);
    // actualizamos el stock
    cart.forEach(async (productoEnCart) => {
      // accedemos a la referencia del producto
      const productRef = doc(db, 'products', productoEnCart.id);
      // llamamos al snapshot, llamadno a firebase
      const productSnap = await getDoc(productRef);
      // snapshot nos regresa la info del documento
      await updateDoc(productRef, {
        stock: productSnap.data().stock - productoEnCart.quantity,
      });
    });
    setLoading(false);
    clearCart();
    swal('Gracias por su compra! se genero la orden de compra con ID: ' + docRef.id);
  };
  if (cart.length === 0) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h3>El carrito esta vacio empieza agregando articulos</h3>
        <Link to="/">Hacer Compras</Link>
      </div>
    );
  }
  return (
    <div className="cart-table">
      {loading ? <SpinerLoader /> : null}
      <table>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Titulo</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        {cart.map((product) => {
          return (
            <tbody
              key={product.id}
              style={{ backgroundColor: 'lightgray', margin: '4rem' }}
            >
              <tr style={{ textAlign: 'center' }}>
                <td>
                  <img className="cart-img" src={product.image} alt="product" />
                </td>
                <td>{product.title}</td>
                <td>qty: {product.quantity}</td>
                <td>p/u: ${product.price}</td>
                <td>Subtotal: ${product.price * product.quantity}</td>
                <button onClick={() => removeItem(product)}>
                  Eliminar produto
                </button>
              </tr>
            </tbody>
          );
        })}
      </table>
      <p>total: $ {totalPrice()}</p>
      <button onClick={() => clearCart(cart)}>Vaciar Carrito</button>
      <button onClick={handleBuy}>Confirmar Compra</button>
    </div>
  );
};

export default CartContainer;
