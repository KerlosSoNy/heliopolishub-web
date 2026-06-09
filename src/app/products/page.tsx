import { Suspense } from 'react';
import ProductCard from '@/components/ProductCard';
import LoadingFallback from '@/components/LoadingFallback';
import { fetchProducts } from '@/lib/api';

async function ProductsGrid() {
    const products = await fetchProducts();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Our Products
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                        Discover our curated selection of premium tech products
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>

                {/* Pagination Info */}
                <div className="text-center py-8 border-t border-slate-700">
                    <p className="text-slate-400">
                        Showing <span className="text-cyan-400 font-bold">{products.length}</span> products
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function ProductsPage() {
    return (
        <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-900 to-slate-800">
            <Suspense fallback={<LoadingFallback />}>
                <ProductsGrid />
            </Suspense>
        </main>
    );
}