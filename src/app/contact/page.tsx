'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    propertyType: '',
    budget: '',
    timeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        propertyType: '',
        budget: '',
        timeline: ''
      })
    }, 2000)
  }

  const contactMethods = [
    {
      title: 'Phone',
      value: '(6) 81 34 85 51',
      href: 'tel:(6) 81 34 85 51',
      icon: '📞',
      description: 'Call for immediate assistance'
    },
    {
      title: 'Email',
      value: 'cihatkaya@glodinas.nl',
      href: 'mailto:cihatkaya@glodinas.nl',
      icon: '✉️',
      description: 'Send detailed inquiries'
    },
    {
      title: 'Office Hours',
      value: 'Mon-Fri: 9AM-6PM',
      href: '#',
      icon: '🕒',
      description: 'Available for consultations'
    },
    {
      title: 'Location',
      value: 'Den Haag, Netherlands',
      href: '#',
      icon: '📍',
      description: 'Serving the greater Den Haag area'
    }
  ]

  const faqs = [
    {
      question: 'How long does it typically take to buy a property?',
      answer: 'The buying process usually takes 6-12 weeks from offer acceptance to completion, depending on various factors such as mortgage approval and property surveys.'
    },
    {
      question: 'What are the costs involved in buying a property?',
      answer: 'Besides the property price, expect costs for transfer tax (2%), notary fees (€1,500-€2,500), mortgage advisor fees, and property survey costs.'
    },
    {
      question: 'Do you work with international buyers?',
      answer: 'Yes, I have extensive experience helping international buyers navigate the Dutch property market, including mortgage options and legal requirements.'
    },
    {
      question: 'How do you determine property values?',
      answer: 'I use comprehensive market analysis including recent comparable sales, current market trends, property condition, and location factors to provide accurate valuations.'
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
              <Link href="/about" className="text-white hover:text-pink-300 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-pink-300 font-semibold">
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
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Ready to start your real estate journey? I&apos;m here to help you every step of the way. 
            Contact me today for personalized service and expert guidance.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-white font-semibold mb-2">{method.title}</h3>
                <p className="text-purple-200 text-sm mb-3">{method.description}</p>
                {method.href.startsWith('#') ? (
                  <span className="text-white font-medium">{method.value}</span>
                ) : (
                  <a
                    href={method.href}
                    className="text-white font-medium hover:text-pink-300 transition-colors"
                  >
                    {method.value}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Send Me a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 mb-8 text-center">
                <p className="text-green-300 font-semibold">Thank you! Your message has been sent successfully.</p>
                <p className="text-green-200 text-sm mt-1">I&apos;ll get back to you within 24 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="buying">I want to buy a property</option>
                    <option value="selling">I want to sell my property</option>
                    <option value="valuation">Property valuation request</option>
                    <option value="investment">Investment consultation</option>
                    <option value="general">General inquiry</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="propertyType" className="block text-white font-medium mb-2">
                    Property Type
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  >
                    <option value="">Select property type</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="studio">Studio</option>
                    <option value="commercial">Commercial</option>
                    <option value="investment">Investment Property</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-white font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-200k">Under €200,000</option>
                    <option value="200k-400k">€200,000 - €400,000</option>
                    <option value="400k-600k">€400,000 - €600,000</option>
                    <option value="600k-800k">€600,000 - €800,000</option>
                    <option value="over-800k">Over €800,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-white font-medium mb-2">
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                >
                  <option value="">When are you looking to move?</option>
                  <option value="asap">As soon as possible</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6-12months">6-12 months</option>
                  <option value="over-year">Over a year</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
                  placeholder="Tell me more about your real estate needs..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{faq.question}</h3>
                <p className="text-white/80 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-3xl p-8 border border-purple-400/30 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need Immediate Assistance?</h2>
            <p className="text-white/80 mb-6">
              For urgent real estate matters or time-sensitive opportunities, call me directly.
            </p>
            <a
              href="tel:(6) 81 34 85 51"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (6) 81 34 85 51
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

