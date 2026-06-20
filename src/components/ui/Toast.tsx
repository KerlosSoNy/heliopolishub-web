"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { ToastType } from "@/context/ToastContext";

interface ToastProps {
    message: string;
    type: ToastType;
    onClose: () => void;
}

export function Toast({ message, type, onClose }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const bgColor = {
        success: "bg-green-50 border-green-200",
        error: "bg-red-50 border-red-200",
        warning: "bg-yellow-50 border-yellow-200",
        info: "bg-blue-50 border-blue-200",
    }[type];

    const textColor = {
        success: "text-green-800",
        error: "text-red-800",
        warning: "text-yellow-800",
        info: "text-blue-800",
    }[type];

    const iconColor = {
        success: "text-green-600",
        error: "text-red-600",
        warning: "text-yellow-600",
        info: "text-blue-600",
    }[type];

    return (
        <div className={`${bgColor} border rounded-lg p-4 flex items-start gap-3 shadow-lg min-w-sm max-w-md`}>
            <div
                className={`w-5 h-5 rounded-full shrink-0 mt-0.5 ${iconColor}`}
                style={{
                    backgroundColor: "currentColor",
                    opacity: 0.2,
                }}
            />
            <p className={`${textColor} text-sm font-medium flex-1`}>{message}</p>
            <button
                onClick={onClose}
                className={`${textColor} shrink-0 hover:opacity-75 transition-opacity`}
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}