'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './components/Navigation'
interface Property {
  id: number
  title: string
  price: string
  originalPrice?: string
  location: string
  size: string
  bedrooms: string
  energyLabel: string
  features: string[]
  rating: number
  images: string[]
}
export default function HomePage() {
  const [loading, setLoading] = useState(true)
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const properties: Property[] = [
    {
      id: 1,
      title: "Jacob Schorerlaan 201",
      location: "Den Haag, Groente- en Fruitmarkt",
      price: "€465,000",
      originalPrice: "€625,736",
      size: "107 m²",
      bedrooms: "4 bedrooms",
      energyLabel: "A",
      features: ["Garden", "Conservatory", "Modern Kitchen", "Parking"],
      rating: 5,
      images: [
        "/property_images/jacob_schorerlaan_201/01_living_room_conservatory.jpeg",
        "/property_images/jacob_schorerlaan_201/02_exterior_street_view.jpeg",
        "/property_images/jacob_schorerlaan_201/03_kitchen.jpeg",
        "/property_images/jacob_schorerlaan_201/04_bathroom.jpeg",
        "/property_images/jacob_schorerlaan_201/05_kitchen_detail.jpeg",
        "/property_images/jacob_schorerlaan_201/06_bathroom_detail.jpeg",
        "/property_images/jacob_schorerlaan_201/07_exterior_street.jpeg",
        "/property_images/jacob_schorerlaan_201/08_front_entrance.jpeg",
        "/property_images/jacob_schorerlaan_201/09_hallway.jpeg",
        "/property_images/jacob_schorerlaan_201/10_living_room_alt_view.jpeg",
        "/property_images/jacob_schorerlaan_201/11_bedroom.jpeg",
        "/property_images/jacob_schorerlaan_201/12_dining_room.jpeg",
        "/property_images/jacob_schorerlaan_201/13_staircase.jpeg",
        "/property_images/jacob_schorerlaan_201/14_conservatory_garden_view.jpeg",
        "/property_images/jacob_schorerlaan_201/15_garden_from_conservatory.jpeg"
      ]
    },
    {
      id: 2,
      title: "Harderwijkstraat 181",
      location: "Den Haag, Laakkwartier",
      price: "€275,000",
      originalPrice: "€415,208",
      size: "71 m²",
      bedrooms: "2 bedrooms",
      energyLabel: "C",
      features: ["Balcony", "Renovated 2019", "Central Location", "Public Transport"],
      rating: 4,
      images: [
        "/property_images/harderwijkstraat_181/01_exterior_main_view.jpeg",
        "/property_images/harderwijkstraat_181/02_street_view.jpeg",
        "/property_images/harderwijkstraat_181/03_neighborhood_view.jpeg",
        "/property_images/harderwijkstraat_181/04_entrance_stairs.jpeg",
        "/property_images/harderwijkstraat_181/05_entrance_door.jpeg",
        "/property_images/harderwijkstraat_181/06_hallway.jpeg",
        "/property_images/harderwijkstraat_181/07_living_room_1.jpeg",
        "/property_images/harderwijkstraat_181/08_living_room_2.jpeg",
        "/property_images/harderwijkstraat_181/09_living_room_3.jpeg"
      ]
    },
    {
      id: 3,
      title: "Loosdrechtsestraat 36",
      location: "Den Haag, Bezuidenhout",
      price: "€250,000",
      originalPrice: "€333,336",
      size: "65 m²",
      bedrooms: "3 bedrooms",
      energyLabel: "D",
      features: ["Historic Building", "High Ceilings", "City Center", "Investment Opportunity"],
      rating: 4,
      images: [
        "/property_images/loosdrechtstraat_36/01_exterior_main_view.jpeg",
        "/property_images/loosdrechtstraat_36/02_street_view.jpeg",
        "/property_images/loosdrechtstraat_36/03_living_room.jpeg",
        "/property_images/loosdrechtstraat_36/04_hallway.jpeg"
      ]
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const openGallery = (property: Property) => {
    setSelectedProperty(property)
    setCurrentImageIndex(0)
  }

  const closeGallery = () => {
    setSelectedProperty(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) => 
        prev === selectedProperty.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProperty.images.length - 1 : prev - 1
      )
    }
  }

  const scrollToProperties = () => {
    const element = document.getElementById('properties')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-8"></div>
          <h1 className="text-4xl font-bold text-white mb-4">Loading Premium Properties...</h1>
          <p className="text-white/70 text-lg">Preparing your exclusive collection</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800">
      <Navigation currentPage="home" />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-64 h-auto mx-auto mb-8 flex items-center justify-center">
              <Image 
                src="/glodinas_logo_redesigned_transparent.png" 
                alt="Glodinas Makelaardij" 
                width={256} 
                height={180} 
                className="w-full h-auto object-contain" 
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Premium
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Properties
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 font-light">
            Discover exceptional homes in the heart of Den Haag
          </p>
          <button
            onClick={scrollToProperties}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Explore Collection
          </button>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Properties</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Handpicked selection of premium homes in Den Haag&apos;s most desirable neighborhoods
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border border-white/20"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={property.images[0]}
                    alt={property.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Energy {property.energyLabel}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex">
                    {[...Array(property.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{property.title}</h3>
                  <p className="text-purple-200 mb-4">{property.location}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-white">{property.price}</div>
                      {property.originalPrice && (
                        <div className="text-sm text-red-300 line-through">{property.originalPrice}</div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">{property.size}</div>
                      <div className="text-purple-200 text-sm">{property.bedrooms}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {property.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-purple-500/30 text-purple-100 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => openGallery(property)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                  >
                    View Gallery ({property.images.length} photos)
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-white/70 mb-12">
            Contact me today for personalized service and expert guidance in Den Haag&apos;s real estate market.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Direct</h3>
              <a href="tel:(6) 81 34 85 51" className="text-purple-300 hover:text-white transition-colors">
                (6) 81 34 85 51
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Me</h3>
              <a href="mailto:cihatkaya@glodinas.nl" className="text-purple-300 hover:text-white transition-colors">
                cihatkaya@glodinas.nl
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-3xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-white mb-2">Schedule</h3>
              <Link href="/contact" className="text-purple-300 hover:text-white transition-colors">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white text-4xl hover:text-purple-300 transition-colors z-10"
            >
              ×
            </button>
            
            <div className="relative">
              <img
                src={selectedProperty.images[currentImageIndex]}
                alt={`${selectedProperty.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-purple-300 transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
              >
                ‹
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-purple-300 transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
              >
                ›
              </button>
            </div>
            
            <div className="text-center mt-4">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedProperty.title}</h3>
              <p className="text-white/70 mb-4">
                Image {currentImageIndex + 1} of {selectedProperty.images.length}
              </p>
              
              <div className="flex justify-center space-x-2 overflow-x-auto pb-4">
                {selectedProperty.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex ? 'border-purple-400' : 'border-white/30'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

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
