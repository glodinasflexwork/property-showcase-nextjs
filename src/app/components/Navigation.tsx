'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface NavigationProps {
  currentPage?: 'home' | 'about' | 'contact' | 'terms' | 'privacy'
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image 
                src="/glodinas_logo_redesigned_transparent.png" 
                alt="Glodinas Makelaardij" 
                width={180} 
                height={60} 
                className="h-12 w-auto object-contain" 
                priority 
              />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link 
                href="/" 
                className={`text-white ${currentPage === 'home' ? 'text-purple-300 font-semibold' : 'hover:text-purple-300'} transition-colors`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`text-white ${currentPage === 'about' ? 'text-purple-300 font-semibold' : 'hover:text-purple-300'} transition-colors`}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`text-white ${currentPage === 'contact' ? 'text-purple-300 font-semibold' : 'hover:text-purple-300'} transition-colors`}
              >
                Contact
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(true)} 
                className="text-white bg-purple-600/40 hover:bg-purple-600/60 p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-purple-900/95 via-purple-800/95 to-pink-600/95 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center h-full">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white bg-purple-600/40 hover:bg-purple-600/60 p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mb-12">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image 
                  src="/glodinas_logo_redesigned_transparent.png" 
                  alt="Glodinas Makelaardij" 
                  width={180} 
                  height={60} 
                  className="h-16 w-auto object-contain" 
                  priority 
                />
              </Link>
            </div>
            <nav className="flex flex-col items-center space-y-6">
              <Link 
                href="/" 
                className={`text-2xl text-white ${currentPage === 'home' ? 'text-purple-300 font-semibold' : 'hover:text-purple-300'} transition-colors px-6 py-2 rounded-lg hover:bg-white/10 w-full text-center`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`text-2xl text-white ${currentPage === 'about' ? 'text-purple-300 font-semibold' : 'hover:text-purple-300'} transition-colors px-6 py-2 rounded-lg hover:bg-white/10 w-full text-center`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`text-2xl text-white ${currentPage === 'contact' ? 'text-purple-300 font-semibold' : 'hover:text-purple-300'} transition-colors px-6 py-2 rounded-lg hover:bg-white/10 w-full text-center`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-8 border-t border-white/20 w-64 flex flex-col items-center space-y-4 mt-6">
                <Link 
                  href="/terms" 
                  className={`text-lg text-white/80 ${currentPage === 'terms' ? 'text-white font-semibold' : 'hover:text-white'} transition-colors px-4 py-2 rounded-lg hover:bg-white/10 w-full text-center`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Terms & Conditions
                </Link>
                <Link 
                  href="/privacy" 
                  className={`text-lg text-white/80 ${currentPage === 'privacy' ? 'text-white font-semibold' : 'hover:text-white'} transition-colors px-4 py-2 rounded-lg hover:bg-white/10 w-full text-center`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Privacy Statement
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
