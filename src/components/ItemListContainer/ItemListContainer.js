import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import SpinerLoader from '../SpinerLoader/SpinerLoader';

function ItemListContainer() {
    const {categoryId} = useParams();
    const [loading, productos, error] = useFirebase(categoryId);
    return(
        loading ? (
          <SpinerLoader />
        ): (
          <>
            <ItemList items={productos} /> 
            {error && <h2>{error}</h2>}
          </>
        )
    )
} 

export default ItemListContainer;