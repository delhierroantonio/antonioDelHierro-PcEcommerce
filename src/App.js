import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting='Aqui iran los items de mi ecommerce' />
    </div>
  );
}

export default App;
