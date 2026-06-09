'use client';

export default function LoadingFallback() {
    return (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
            <div className="text-center space-y-8">
                {/* Animated Circle */}
                <div className="relative w-20 h-20 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-spin-fast opacity-75"></div>
                    <div className="absolute inset-2 bg-slate-900 rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                </div>

                {/* Heading */}
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold text-white">Loading</h1>
                    <p className="text-slate-400 text-lg">Preparing your experience...</p>
                </div>

                {/* Progress Bar */}
                <div className="w-80 space-y-3">
                    <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full animate-pulse"
                            style={{
                                width: '100%',
                                backgroundSize: '200% 100%',
                                animation: 'shimmer 3s infinite'
                            }}>
                        </div>
                    </div>
                    <p className="text-slate-500 text-sm">Loading resources...</p>
                </div>

                {/* Loading Dots */}
                <div className="flex justify-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>

            <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
        </div>
    );
}