'use client';
import { useEffect, useState } from 'react';
import MultiStepLoaderDemo from './multi-step-loader-demo';

export default function ClientLoader() {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [loadingText, setLoadingText] = useState('Loading resources...');

    useEffect(() => {
        // Simulate client-side resource loading
        const stages = [
            { percent: 0, text: 'Initializing...' },
            { percent: 20, text: 'Loading CSS...' },
            { percent: 40, text: 'Loading JavaScript...' },
            { percent: 60, text: 'Loading images...' },
            { percent: 80, text: 'Rendering components...' },
            { percent: 95, text: 'Finalizing...' },
        ];

        let currentStage = 0;

        const interval = setInterval(() => {
            if (currentStage < stages.length) {
                setProgress(stages[currentStage].percent);
                setLoadingText(stages[currentStage].text);
                currentStage++;
            } else {
                setProgress((prev) => {
                    if (prev >= 95) {
                        clearInterval(interval);
                        return 95;
                    }
                    return prev + Math.random() * 5;
                });
            }
        }, 400);

        const handleLoad = () => {
            setProgress(100);
            setLoadingText('Complete!');
            setTimeout(() => setIsLoading(false), 11000);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => {
                window.removeEventListener('load', handleLoad);
                clearInterval(interval);
            };
        }

        return () => clearInterval(interval);
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