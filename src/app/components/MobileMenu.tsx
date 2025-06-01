'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest('.mobile-menu-container')) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])
  
  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-white focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      
      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md mobile-menu-container">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="mb-12">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <img src="/glodinas_logo.png" alt="Glodinas Makelaardij" className="h-16 w-auto" />
              </Link>
            </div>
            <nav className="flex flex-col items-center space-y-8">
              <Link 
                href="/" 
                className="text-2xl text-white hover:text-purple-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-2xl text-white hover:text-purple-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-2xl text-white hover:text-purple-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-8 border-t border-white/20 w-48 flex flex-col items-center space-y-6">
                <Link 
                  href="/terms" 
                  className="text-lg text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Terms & Conditions
                </Link>
                <Link 
                  href="/privacy" 
                  className="text-lg text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Privacy Statement
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
