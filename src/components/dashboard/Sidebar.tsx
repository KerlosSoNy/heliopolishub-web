"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,
    Home,
    LogOut,
    Layers,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const navigation = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Products",
        href: "/dashboard/products",
        icon: Package,
    },
    {
        name: "Brands",
        href: "/dashboard/brands",
        icon: Layers,
    },
    {
        name: "Orders",
        href: "/dashboard/orders",
        icon: ShoppingCart,
    },
    {
        name: "Users",
        href: "/dashboard/users",
        icon: Users,
    },
    {
        name: "Home Page",
        href: "/dashboard/home-page",
        icon: Home,
    },
    {
        name: "Footer",
        href: "/dashboard/footer",
        icon: Home,
    },
];

export function Sidebar() {
    const pathname = usePathname();
    const { logout } = useAuth();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleLogout = async () => {
        setIsLoggingOut(true);
        try {
            await logout();
        } finally {
            setIsLoggingOut(false);
        }
    };

    return (
        <div className="w-64 bg-gray-900 text-white flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-gray-800">
                <h1 className="text-2xl font-bold">DiecastHub</h1>
                <p className="text-gray-400 text-sm">Admin Dashboard</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                {navigation.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                ? "bg-blue-600 text-white"
                                : "text-gray-300 hover:bg-gray-800"
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Logout Button */}
            <div className="p-4 border-t border-gray-800">
                <button
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors disabled:opacity-50"
                >
                    <LogOut className="w-5 h-5" />
                    <span>{isLoggingOut ? "Logging out..." : "Logout"}</span>
                </button>
            </div>
        </div>
    );
}