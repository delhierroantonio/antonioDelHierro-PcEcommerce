import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const algoritmoGuardadoAutomatico = async () => {
  try {
    // obtenemos los productos a guardar
    const response =  await fetch('/mocks/data.json');
    const productosAGuardar = await response.json();
    console.log(productosAGuardar);

    // 
    productosAGuardar.forEach(async (producto) => {
      const docRef = await addDoc(collection(db, 'products'), {
        title: producto.title,
        price: producto.price,
        description: producto.description,
        category: producto.category,
        image: producto.image,
        stock: 20,
      });
      console.log('document written with ID: ', docRef.id);
    })
  } catch (error) {
    
  }
}
export default algoritmoGuardadoAutomatico;

// Add a new document with a generated id.
// const docRef = await addDoc(collection(db, "products"), {
//   title: producto.title,
//   price: producto.price,
//   description: producto.description,
// });
// console.log("Document written with ID: ", docRef.id);
