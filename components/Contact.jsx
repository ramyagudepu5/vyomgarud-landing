'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted! (Demo only)')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-orange">Touch</span>
          </h2>
          <div className="h-1 w-24 bg-orange mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Ready to elevate your operations? Contact us today.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-black border border-zinc-800 text-white rounded-sm focus:outline-none focus:border-orange transition-colors"
            />
          </div>
          
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-black border border-zinc-800 text-white rounded-sm focus:outline-none focus:border-orange transition-colors"
            />
          </div>
          
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-6 py-4 bg-black border border-zinc-800 text-white rounded-sm focus:outline-none focus:border-orange transition-colors resize-none"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full px-8 py-4 bg-orange text-white font-semibold text-lg rounded-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,123,0,0.5)]"
          >
            Send Message
          </button>
        </form>
      </div>
      
      {/* Footer */}
      <footer className="mt-32 pt-12 border-t border-zinc-800 text-center">
        <p className="text-gray-500">
          © 2024 VyomGarud | All Rights Reserved
        </p>
        <p className="text-gray-600 text-sm mt-2">
          Advanced UAV Systems • Defense • Surveillance
        </p>
      </footer>
    </section>
  )
}
