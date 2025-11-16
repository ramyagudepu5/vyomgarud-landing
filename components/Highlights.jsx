const highlights = [
  {
    title: 'High Reliability',
    description: 'Built for mission-critical defense use with 99.9% operational uptime.',
    icon: '⚡'
  },
  {
    title: 'Advanced Autonomy',
    description: 'Intelligent flight controls with AI-driven decision making.',
    icon: '🤖'
  },
  {
    title: 'Precision Engineering',
    description: 'Aerospace-grade machining and materials for unmatched performance.',
    icon: '⚙️'
  }
]

export default function Highlights() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-orange">VyomGarud</span>
          </h2>
          <div className="h-1 w-24 bg-orange mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl mb-6">{highlight.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-orange">
                {highlight.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
