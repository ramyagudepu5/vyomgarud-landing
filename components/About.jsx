export default function About() {
  return (
    <section className="py-32 px-6 bg-black my-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-orange">VyomGarud</span>
        </h2>
        
        <div className="h-1 w-24 bg-orange mx-auto mb-12"></div>
        
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          VyomGarud develops advanced UAV systems engineered for defense, surveillance, 
          and high-precision industrial operations. Our focus is reliability, autonomy, 
          and aerospace-grade performance for mission-critical applications.
        </p>
        
        <p className="text-lg text-gray-400 mt-8 leading-relaxed">
          Built with cutting-edge technology and military-grade standards, our systems 
          deliver unmatched precision and operational excellence in the most demanding environments.
        </p>
      </div>
    </section>
  )
}
