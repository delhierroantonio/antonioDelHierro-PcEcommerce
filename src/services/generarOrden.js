// generar la orden de compra
const generarOrden = (nombre, email, cart, totalPrice ) => {
  return {
    buyer: {
      nombre: nombre,
      email: email
    },
    items: cart,
    total: totalPrice,
    ordenCreada: new Date().toLocaleString()
  }
}

export default generarOrden