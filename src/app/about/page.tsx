'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('experience')

  const stats = [
    { number: '150+', label: 'Properties Sold', icon: '🏠' },
    { number: '5+', label: 'Years Experience', icon: '⭐' },
    { number: '98%', label: 'Client Satisfaction', icon: '😊' },
    { number: '€50M+', label: 'Total Sales Volume', icon: '💰' }
  ]

  const services = [
    {
      title: 'Property Valuation',
      description: 'Accurate market analysis and property valuations based on current market trends and comparable sales.',
      icon: '📊'
    },
    {
      title: 'Buyer Representation',
      description: 'Comprehensive support for buyers, from property search to negotiation and closing.',
      icon: '🔍'
    },
    {
      title: 'Seller Services',
      description: 'Strategic marketing and pricing to maximize your property value and minimize time on market.',
      icon: '📈'
    },
    {
      title: 'Investment Consulting',
      description: 'Expert guidance on real estate investments and portfolio development strategies.',
      icon: '💼'
    },
    {
      title: 'Market Analysis',
      description: 'In-depth market research and trend analysis to inform your real estate decisions.',
      icon: '📋'
    },
    {
      title: 'Negotiation Expertise',
      description: 'Skilled negotiation to secure the best possible terms for both buyers and sellers.',
      icon: '🤝'
    }
  ]

  const testimonials = [
    {
      name: 'Maria van der Berg',
      role: 'Property Buyer',
      content: 'Cihat helped us find our dream home in Den Haag. His knowledge of the local market and attention to detail made the entire process smooth and stress-free.',
      rating: 5
    },
    {
      name: 'Jan Pietersen',
      role: 'Property Seller',
      content: 'Outstanding service! Cihat sold our property above asking price within just 2 weeks. His marketing strategy and negotiation skills are exceptional.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Investment Client',
      content: 'As an international investor, I needed someone who understood both the local market and investment strategies. Cihat exceeded all expectations.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-white font-bold text-xl">
              Cihat Kaya Real Estate
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-white hover:text-pink-300 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-pink-300 font-semibold">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-pink-300 transition-colors">
                Contact
              </Link>
            </div>
            <div className="md:hidden">
              <button className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Meet
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Cihat Kaya
                </span>
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Your trusted real estate expert in Den Haag, dedicated to helping you find the perfect property 
                or achieve the best value for your investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:(6) 81 34 85 51"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Call (6) 81 34 85 51
                </a>
                <Link
                  href="/contact"
                  className="bg-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="w-48 h-48 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-6xl">👨‍💼</span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Cihat Kaya</h3>
                  <p className="text-purple-200 mb-4">Licensed Real Estate Agent</p>
                  <p className="text-white/70">
                    Specializing in Den Haag properties with a focus on exceptional client service and market expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'services'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'testimonials'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              Testimonials
            </button>
          </div>

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Experience</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Market Expertise</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    With over 5 years of experience in the Den Haag real estate market, I have developed deep 
                    insights into local neighborhoods, pricing trends, and investment opportunities. My expertise 
                    spans from historic city center properties to modern developments in emerging areas.
                  </p>
                  <h3 className="text-xl font-semibold text-white mb-4">Professional Background</h3>
                  <p className="text-white/80 leading-relaxed">
                    Licensed real estate professional with a proven track record of successful transactions. 
                    I hold certifications in property valuation, negotiation, and investment analysis, ensuring 
                    my clients receive the highest level of professional service.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Specializations</h3>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Residential Properties in Den Haag
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Investment Property Analysis
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      First-Time Buyer Assistance
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Property Valuation & Market Analysis
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      International Client Services
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-white/80 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Testimonials Tab */}
          {activeTab === 'testimonials' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/80 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-purple-200 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-white/70 mb-12">
            Whether you&apos;re buying, selling, or investing, I&apos;m here to guide you through every step of your real estate journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(6) 81 34 85 51"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Call (6) 81 34 85 51
            </a>
            <a
              href="mailto:cihatkaya@glodinas.nl"
              className="bg-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              Email Me
            </a>
            <Link
              href="/contact"
              className="bg-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

