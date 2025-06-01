'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image src="/glodinas_logo.png" alt="Glodinas Makelaardij" width={120} height={40} className="h-8 w-auto" />
            </Link>
            <p className="text-white/60 mt-2 text-sm">
              Premium real estate services in Den Haag
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
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
  )
}
