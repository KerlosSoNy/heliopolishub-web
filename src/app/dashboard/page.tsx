"use client";

import { useEffect, useState } from "react";
import { BarChart3, Package, ShoppingCart, Users, TrendingUp } from "lucide-react";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { useToast } from "@/context/ToastContext";

interface DashboardStats {
    totalProducts: number;
    totalOrders: number;
    totalRevenue: number;
    totalUsers: number;
    recentOrders: Array<{
        id: string;
        order_number: string;
        total_amount: number;
        status: string;
        created_at: string;
    }>;
    topProducts: Array<{
        id: string;
        name: string;
        sales: number;
    }>;
}

export default function DashboardHome() {
    const [stats, setStats] = useState<DashboardStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { showToast } = useToast();

    useEffect(() => {
        fetchDashboardStats();
    }, []);

    async function fetchDashboardStats() {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch("/api/dashboard/stats", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch dashboard stats");
            }

            const data = await response.json();
            setStats(data);
        } catch (err) {
            const message = err instanceof Error ? err.message : "An error occurred";
            setError(message);
            showToast(message, "error");
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <p className="text-red-800">{error}</p>
                <button
                    onClick={fetchDashboardStats}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <button
                    onClick={fetchDashboardStats}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Refresh
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Products"
                    value={stats?.totalProducts ?? 0}
                    icon={Package}
                    color="blue"
                />
                <StatCard
                    title="Total Orders"
                    value={stats?.totalOrders ?? 0}
                    icon={ShoppingCart}
                    color="green"
                />
                <StatCard
                    title="Total Revenue"
                    value={`$${(stats?.totalRevenue ?? 0).toLocaleString()}`}
                    icon={TrendingUp}
                    color="purple"
                />
                <StatCard
                    title="Total Users"
                    value={stats?.totalUsers ?? 0}
                    icon={Users}
                    color="orange"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Orders */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
                        <BarChart3 className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="space-y-3">
                        {stats?.recentOrders && stats.recentOrders.length > 0 ? (
                            stats.recentOrders.slice(0, 5).map((order) => (
                                <div
                                    key={order.id}
                                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                                >
                                    <div>
                                        <p className="font-medium text-gray-900">
                                            Order #{order.order_number}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {new Date(order.created_at).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium text-gray-900">
                                            ${order.total_amount.toFixed(2)}
                                        </p>
                                        <span
                                            className={`inline-block px-2 py-1 rounded text-xs font-medium ${order.status === "completed"
                                                    ? "bg-green-100 text-green-800"
                                                    : order.status === "pending"
                                                        ? "bg-yellow-100 text-yellow-800"
                                                        : "bg-red-100 text-red-800"
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center py-4">No orders yet</p>
                        )}
                    </div>
                </div>

                {/* Top Products */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">Top Products</h2>
                        <Package className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="space-y-3">
                        {stats?.topProducts && stats.topProducts.length > 0 ? (
                            stats.topProducts.slice(0, 5).map((product, index) => (
                                <div
                                    key={product.id}
                                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold">
                                            {index + 1}
                                        </span>
                                        <p className="font-medium text-gray-900">{product.name}</p>
                                    </div>
                                    <p className="text-right text-gray-900 font-medium">
                                        {product.sales} sales
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center py-4">No products yet</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

interface StatCardProps {
    title: string;
    value: string | number;
    icon: any;
    color: "blue" | "green" | "purple" | "orange";
}

function StatCard({ title, value, icon: Icon, color }: StatCardProps) {
    const bgColor = {
        blue: "bg-blue-50",
        green: "bg-green-50",
        purple: "bg-purple-50",
        orange: "bg-orange-50",
    }[color];

    const iconColor = {
        blue: "text-blue-600",
        green: "text-green-600",
        purple: "text-purple-600",
        orange: "text-orange-600",
    }[color];

    return (
        <div className={`${bgColor} rounded-lg p-6`}>
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
                </div>
                <Icon className={`w-8 h-8 ${iconColor} opacity-20`} />
            </div>
        </div>
    );
}