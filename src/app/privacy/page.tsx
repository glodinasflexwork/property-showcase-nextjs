'use client'

import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <img src="/glodinas_logo.png" alt="Glodinas Makelaardij" className="h-10 w-auto" />
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
            <h1 className="text-4xl font-bold text-white mb-8">Privacy Statement</h1>
            
            <div className="space-y-6 text-white/80">
              <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
              <p className="leading-relaxed">
                At Glodinas Makelaardij, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Statement explains how we collect, use, and safeguard your data when you visit our website or use our services. By accessing our website, you consent to the practices described in this statement.
              </p>
              
              <h2 className="text-2xl font-semibold text-white">2. Information We Collect</h2>
              <p className="leading-relaxed">
                We may collect personal information such as your name, email address, phone number, and property preferences when you contact us through our website, sign up for property alerts, or request information about our services. Additionally, we automatically collect certain information about your device, including your IP address, browser type, and operating system when you visit our website.
              </p>
              
              <h2 className="text-2xl font-semibold text-white">3. How We Use Your Information</h2>
              <p className="leading-relaxed">
                We use the information we collect to provide and improve our services, respond to your inquiries, send you property updates and newsletters (if you've opted in), and communicate with you about our services. We may also use your information to personalize your experience on our website and to analyze how our website is being used to make improvements.
              </p>
              
              <h2 className="text-2xl font-semibold text-white">4. Information Sharing</h2>
              <p className="leading-relaxed">
                We respect your privacy and do not sell, rent, or lease your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business. These service providers are bound by confidentiality agreements and are only permitted to use your information for the specific services they provide to us.
              </p>
              
              <h2 className="text-2xl font-semibold text-white">5. Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookies through your browser settings, but disabling cookies may limit your ability to use certain features of our website.
              </p>
              
              <h2 className="text-2xl font-semibold text-white">6. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h2 className="text-2xl font-semibold text-white">7. Your Rights</h2>
              <p className="leading-relaxed">
                You have the right to access, correct, or delete your personal information that we hold. You may also object to or restrict the processing of your data. To exercise these rights, please contact us using the information provided below. We will respond to your request within a reasonable timeframe.
              </p>
              
              <h2 className="text-2xl font-semibold text-white">8. Changes to This Privacy Statement</h2>
              <p className="leading-relaxed">
                We may update this Privacy Statement from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this statement periodically to stay informed about how we are protecting your information.
              </p>
              
              <h2 className="text-2xl font-semibold text-white">9. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions or concerns about our Privacy Statement or our data practices, please contact us at cihatkaya@glodinas.nl or call (6) 81 34 85 51.
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
                <img src="/glodinas_logo.png" alt="Glodinas Makelaardij" className="h-8 w-auto" />
              </Link>
              <p className="text-white/60 mt-2 text-sm">
                Premium real estate services in Den Haag
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-white hover:text-white transition-colors">
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
