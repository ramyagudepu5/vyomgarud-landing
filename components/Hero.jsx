'use client'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,123,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,123,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Drone silhouette accent */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-orange opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange opacity-5 blur-3xl rounded-full"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-white">Vyom</span>
          <span className="text-orange">Garud</span>
        </h1>
        
        <div className="h-1 w-32 bg-orange mx-auto mb-8"></div>
        
        <p className="text-xl md:text-3xl text-gray-300 mb-4 font-light">
          Precision in Every Flight.
        </p>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Advanced UAV Systems for Modern Defense
        </p>
        
        <button 
          onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative px-8 py-4 bg-orange text-white font-semibold text-lg rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,123,0,0.5)] cursor-pointer"
        >
          <span className="relative z-10">Explore Capabilities</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
