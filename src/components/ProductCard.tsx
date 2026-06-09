'use client';
import Image from 'next/image';

interface ProductCardProps {
    id: number;
    name: string;
    price: string;
    image: string;
    description: string;
}

export default function ProductCard({
    id,
    name,
    price,
    image,
    description,
}: ProductCardProps) {
    return (
        <div className="group bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-cyan-500">
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold text-white truncate">{name}</h3>
                <p className="text-slate-400 text-sm line-clamp-2">{description}</p>
                <div className="flex justify-between items-center pt-2 border-t border-slate-700">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {price}
                    </span>
                    <span className="text-slate-500 text-xs">Stock: 12</span>
                </div>
            </div>
        </div>
    );
}