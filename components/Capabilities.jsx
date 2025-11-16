'use client'

const capabilities = [
  {
    title: 'Autonomous Navigation System',
    description: 'AI-powered autonomous flight with advanced obstacle detection and real-time path optimization.',
    icon: '🎯'
  },
  {
    title: 'Military-Grade UAV Platform',
    description: 'Aerospace materials engineered for extreme conditions and mission-critical reliability.',
    icon: '🛡️'
  },
  {
    title: 'Long-Range Communication Module',
    description: 'Secure, encrypted multi-kilometer connectivity with zero-latency command transmission.',
    icon: '📡'
  },
  {
    title: 'Precision Imaging Suite',
    description: 'Thermal and optical sensors for accurate real-time data capture and analysis.',
    icon: '📷'
  }
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Core <span className="text-orange">Capabilities</span>
          </h2>
          <div className="h-1 w-24 bg-orange mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="group relative bg-black border border-zinc-800 p-8 rounded-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange hover:shadow-[0_0_30px_rgba(255,123,0,0.2)]"
            >
              <div className="text-5xl mb-6 filter grayscale group-hover:grayscale-0 transition-all">
                {capability.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-orange transition-colors">
                {capability.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {capability.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
