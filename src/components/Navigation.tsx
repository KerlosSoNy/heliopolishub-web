'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky w-full top-0 z-50  bg-transparent backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">✦</span>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            TechHub
                        </span>
                    </Link>

                    {/* Menu Items */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-slate-300 hover:text-cyan-400 transition-colors">
                            Home
                        </Link>
                        <Link href="/products" className="text-slate-300 hover:text-cyan-400 transition-colors">
                            Products
                        </Link>
                        <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
                            About
                        </a>
                        <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
                            Contact
                        </a>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                            Sign In
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        title="Toggle Menu"
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-slate-300 hover:text-cyan-400"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 space-y-2 border-t border-slate-700 pt-4">
                        <Link href="/" className="block text-slate-300 hover:text-cyan-400 py-2">
                            Home
                        </Link>
                        <Link href="/products" className="block text-slate-300 hover:text-cyan-400 py-2">
                            Products
                        </Link>
                        <a href="#" className="block text-slate-300 hover:text-cyan-400 py-2">
                            About
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}