'use client';
import { COLLECTIONS, DATABASE_ID, databases } from '@/lib/appwrite';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const loadProducts = async () => {
            try {
                const res = await databases.listDocuments(
                    DATABASE_ID,
                    COLLECTIONS.WEBSITE_PRODUCTS
                );

                console.log(res.documents);
            } catch (err) {
                console.error(err);
            }
        };

        loadProducts();
    }, []);

    return <div>Check Console</div>;
}

export default App;