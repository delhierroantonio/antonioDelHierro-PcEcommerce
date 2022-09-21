import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import CartContainer from './components/CartContainer/CartContainer';
import CartContext from './context/CartContext';

function App() {
  return ( 
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
