import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Background Effect */}
        <div className="absolute inset-0 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Welcome to TechHub
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto">
              Experience premium tech products with blazing-fast loading times
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/products"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              Explore Products
            </Link>
            <button className="px-8 py-4 rounded-lg border-2 border-cyan-500 text-cyan-400 font-bold text-lg hover:bg-cyan-500/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 z-100 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Loading times optimized for the best experience'
              },
              {
                icon: '🛡️',
                title: 'Secure',
                description: 'Your data is protected with enterprise-grade security'
              },
              {
                icon: '🎯',
                title: 'Reliable',
                description: '99.9% uptime guarantee with 24/7 support'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}