import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return ( 
    <div className='App'>
      {/* <BrowserRouter> */}
        <NavBar />
        <ItemDetailContainer />
        <ItemListContainer />
        {/* <Routes> */}
          {/* <Route path='../Containers/ItemListCotainer' element={<ItemListContainer/>} /> */}
          {/* <Route path='/category/:categoryId' element={<ItemListContainer />} */}
          {/* <Route path='/detail/:productId' element={<ItemDetailContainer />} */}
          {/* <Route path='*' element={<NotFound />} */}
        {/* </Routes>
      </BrowserRouter> */}
      {/* <ItemListContainer/> */}
    </div>
  );
}

export default App;
