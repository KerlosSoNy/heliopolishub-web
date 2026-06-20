"use client"
import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { TopNavbar } from "@/components/dashboard/TopNavbar";
import { AuthProvider } from "@/context/AuthContext";
import { ToastProvider } from "@/context/ToastContext";

const AUTH_ROUTES = ["/dashboard/login", "/dashboard/register", "/dashboard/forgot-password"];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isAuthPage = AUTH_ROUTES.some((route) => pathname?.startsWith(route));

    return (
        <AuthProvider>
            <ToastProvider>
                {isAuthPage ? (
                    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
                        {children}
                    </div>
                ) : (
                    <div className="flex h-screen bg-gray-100">
                        <Sidebar />
                        <div className="flex-1 flex flex-col overflow-hidden">
                            <TopNavbar />
                            <main className="flex-1 overflow-auto p-6">
                                {children}
                            </main>
                        </div>
                    </div>
                )}
            </ToastProvider>
        </AuthProvider>
    );
}