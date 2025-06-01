'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image src="/glodinas_logo_vector.png" alt="Glodinas Makelaardij" width={150} height={50} className="h-10 w-auto" priority />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-white hover:text-pink-300 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-pink-300 transition-colors">
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

      {/* Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions</h1>
            
            <div className="space-y-6 text-white/80">
              <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to Glodinas Makelaardij. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of these terms, please refrain from using our services.
              </p>
              
              <h2 className="text-2xl font-semibold text-white">2. Services</h2>
              <p className="leading-relaxed">
                Glodinas Makelaardij provides real estate services in Den Haag and surrounding areas. Our services include property listings, valuation, buyer representation, seller services, and real estate consultation. All information provided on our website is for general informational purposes only and should not be construed as professional advice.
              </p>
              
              <h2 className="text-2xl font-semibold text-white">3. Property Information</h2>
              <p className="leading-relaxed">
                While we strive to provide accurate and up-to-date information about properties, we cannot guarantee the complete accuracy of all details. Property availability, pricing, and features are subject to change without notice. We recommend verifying all information directly before making any decisions based on the content provided on our website.
              </p>
              
              <h2 className="text-2xl font-semibold text-white">4. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of Glodinas Makelaardij and is protected by intellectual property laws. You may not reproduce, distribute, or use our content without our explicit permission.
              </p>
              
              <h2 className="text-2xl font-semibold text-white">5. Limitation of Liability</h2>
              <p className="leading-relaxed">
                Glodinas Makelaardij shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our website or services. We do not guarantee that our website will be error-free or uninterrupted, or that any defects will be corrected.
              </p>
              
              <h2 className="text-2xl font-semibold text-white">6. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of these websites and assume no responsibility for any loss or damage that may arise from your use of them.
              </p>
              
              <h2 className="text-2xl font-semibold text-white">7. Modifications</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our website after any changes indicates your acceptance of the modified Terms.
              </p>
              
              <h2 className="text-2xl font-semibold text-white">8. Contact Information</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at cihatkaya@glodinas.nl or call (6) 81 34 85 51.
              </p>
              
              <p className="text-sm text-white/60 mt-8">
                Last updated: June 1, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <Image src="/glodinas_logo_vector.png" alt="Glodinas Makelaardij" width={120} height={40} className="h-8 w-auto" />
              </Link>
              <p className="text-white/60 mt-2 text-sm">
                Premium real estate services in Den Haag
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link href="/terms" className="text-white hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
                Privacy Statement
              </Link>
              <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
            © {new Date().getFullYear()} Glodinas Makelaardij. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
