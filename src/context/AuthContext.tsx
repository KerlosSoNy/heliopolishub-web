"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

interface User {
    id: string;
    email?: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();


    async function checkUser() {
        try {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (session?.user) {
                setUser({
                    id: session.user.id,
                    email: session.user.email,
                });
            } else {
                setUser(null);
                router.push("/dashboard/login");
            }
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        checkUser();

        // Subscribe to auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            if (session?.user) {
                setUser({
                    id: session.user.id,
                    email: session.user.email,
                });
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => subscription?.unsubscribe();
    }, []);



    async function login(email: string, password: string) {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) throw error;
        router.push("/dashboard");
    }

    async function logout() {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        router.push("/login");
    }

    async function register(email: string, password: string) {
        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) throw error;
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}