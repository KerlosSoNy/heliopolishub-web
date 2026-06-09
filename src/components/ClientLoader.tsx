'use client';
import { useEffect, useState } from 'react';

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
            setTimeout(() => setIsLoading(false), 600);
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

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
            <div className="text-center space-y-8 max-w-md px-4">
                {/* Circular Progress */}
                <div className="relative w-24 h-24 mx-auto">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        {/* Background circle */}
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#1e293b"
                            strokeWidth="4"
                        />
                        {/* Progress circle */}
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="4"
                            strokeDasharray={`${progress * 2.827} 282.7`}
                            strokeLinecap="round"
                            className="transition-all duration-500"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#06b6d4" />
                            </linearGradient>
                        </defs>
                    </svg>
                    {/* Center percentage */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {Math.round(progress)}%
                        </span>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-white">Almost Ready</h2>
                    <p className="text-cyan-400 h-6">{loadingText}</p>
                </div>

                {/* Linear Progress Bar */}
                <div className="space-y-2">
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50"
                            style={{ width: `${progress}%`, transition: 'width 0.5s ease-out' }}
                        ></div>
                    </div>
                    <p className="text-slate-400 text-xs">Loading {Math.round(progress)}% complete</p>
                </div>

                {/* Status Indicators */}
                <div className="grid grid-cols-3 gap-4 text-xs">
                    <div className={`p-2 rounded border ${progress >= 20 ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400' : 'border-slate-600 text-slate-400'}`}>
                        CSS
                    </div>
                    <div className={`p-2 rounded border ${progress >= 40 ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400' : 'border-slate-600 text-slate-400'}`}>
                        JS
                    </div>
                    <div className={`p-2 rounded border ${progress >= 60 ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400' : 'border-slate-600 text-slate-400'}`}>
                        Images
                    </div>
                </div>
            </div>
        </div>
    );
}