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
  const [isCompleted, setIsCompleted] = useState(false);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, apellido, email, telefono].includes('') || !Number(telefono)) {
        setMensaje('Asegurate que todos los campos estan correctos!');
    } else {
        setMensaje('');
        setIsCompleted(true);
        handleBuy();
    }
  };
  const handleBuy = async () => {
    if (isCompleted === true) {
      setLoading(true);
      const montoTotal = totalPrice();
      const orden = generarOrden(
        'antonio',
        'delhierroantonio@icloud.com',
        cart,
        montoTotal
      );
      const docRef = await addDoc(collection(db, 'orders'), orden);
      cart.forEach(async (productoEnCart) => {
        const productRef = doc(db, 'products', productoEnCart.id);
        const productSnap = await getDoc(productRef);
        await updateDoc(productRef, {
          stock: productSnap.data().stock - productoEnCart.quantity,
        });
      });
      setLoading(false);
      clearCart();
      swal('Gracias por su compra! se genero la orden de compra con ID: ' + docRef.id + ', se han enviado los detalles a su email: ' + email);
    } 
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
                <td className='btn' onClick={() => removeItem(product)}>
                  Eliminar produto
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <p>total: $ {totalPrice()}</p>
      <button className='btn' onClick={() => clearCart(cart)}>Vaciar Carrito</button>
      <form onSubmit={handleSubmit}>
            {mensaje.length ? (
                <p
                    style={{
                        padding: '1rem 3rem',
                        color: 'white',
                        backgroundColor: 'crimson',
                        textAlign: 'center',
                    }}
                >
                    {mensaje}
                </p>
            ) : null}
            <div className="mb-4">
                <label className="text-gray-800" htmlFor="nombre">
                    Nombre:
                </label>
                <input
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre"
                    name="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="text-gray-800" htmlFor="apellido">
                    Apellido:
                </label>
                <input
                    id="apellido"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Apellido"
                    name="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="text-gray-800" htmlFor="email">
                    E-mail:
                </label>
                <input
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="text-gray-800" htmlFor="telefono">
                    Teléfono:
                </label>
                <input
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Telefono"
                    name="telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />
            </div>
            <button className="btn-buy" type="submit">
                Continuar con el pago
            </button>
        </form>
    </div>
  );
};

export default CartContainer;
