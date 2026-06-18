'use client';
import { useEffect, useState } from 'react';
import MultiStepLoaderDemo from './multi-step-loader-demo';

export default function ClientLoader() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => setIsLoading(false), 8000);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => {
                window.removeEventListener('load', handleLoad);
            };
        }
    }, []);
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isLoading])
    if (!isLoading) return null;

    return (
        <MultiStepLoaderDemo isLoading={isLoading} />
    );
}