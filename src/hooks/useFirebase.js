import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

const useFirebase = (categoryId) => {
    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                // se genera la query
                const q = categoryId
                    ? query(
                        collection(db, 'products'),
                        where('category', '==', categoryId)
                    )
                    : query(collection(db, 'products'));
                // se hace el llamado a firebase
                const querySnapshot = await getDocs(q);
                const productsFirebase = [];
                // se obtine el "snapShot" con el raw data
                querySnapshot.forEach((doc) => {
                    productsFirebase.push({ id: doc.id, ...doc.data() });
                });
                setProductos(productsFirebase);
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        })();
    }, [categoryId]);
    return [loading, productos, error];
};

export default useFirebase;
