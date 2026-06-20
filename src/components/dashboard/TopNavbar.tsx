"use client";

import { useAuth } from "@/context/AuthContext";
import { Bell, Settings, User } from "lucide-react";
import { useState } from "react";

export function TopNavbar() {
    const { user } = useAuth();
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    return (
        <div className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
            {/* Left side */}
            <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold text-gray-800">Welcome back!</h2>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
                {/* Notifications */}
                <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Settings */}
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Settings className="w-5 h-5" />
                </button>

                {/* Profile */}
                <div className="relative">
                    <button
                        onClick={() => setShowProfileMenu(!showProfileMenu)}
                        className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                            <User className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium hidden sm:inline">
                            {user?.email || "Admin"}
                        </span>
                    </button>

                    {/* Profile Dropdown */}
                    {showProfileMenu && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                            <div className="p-3 border-b border-gray-200">
                                <p className="text-sm font-medium text-gray-900">
                                    {user?.email}
                                </p>
                            </div>
                            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                Profile Settings
                            </button>
                            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                Change Password
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}