'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20construction%20workers%20applying%20smooth%20plaster%20to%20concrete%20block%20wall%20in%20modern%20residential%20building%20site%2C%20clean%20minimalist%20background%20with%20blue%20and%20gray%20tones%2C%20high%20quality%20architectural%20photography%20showing%20skilled%20craftsmanship%20and%20attention%20to%20detail%20in%20plastering%20work&width=1920&height=1080&seq=hero1&orientation=landscape')`
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Professional <span className="text-cyan-400">Plastering</span> & <span className="text-blue-400">Painting</span> Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              Specializing in solid plastering, concrete work, and interior/exterior painting across Auckland. We deliver high-standard jobs with competitive quotes and meet every deadline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 text-center whitespace-nowrap cursor-pointer">
                Get Free Quote
              </Link>
              <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 text-center whitespace-nowrap cursor-pointer">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From solid plastering to concrete work, we provide comprehensive construction services with professional expertise and commitment to quality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-hammer-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Concrete Services</h3>
              <p className="text-gray-600 mb-4">
                Professional concrete work including footpaths, driveways, and structural elements with precision and durability.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Footpath construction</li>
                <li>• Driveway installation</li>
                <li>• Concrete repairs</li>
                <li>• Structural concrete work</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-paint-brush-line text-cyan-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Plastering</h3>
              <p className="text-gray-600 mb-4">
                Expert plastering services for concrete block and brick walls with smooth, professional finishes.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Solid plastering</li>
                <li>• Jib plastering</li>
                <li>• Wall preparation</li>
                <li>• Smooth finish application</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-grid-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Floor & Wall Tiling</h3>
              <p className="text-gray-600 mb-4">
                Professional tiling services for floors and walls with attention to detail and quality materials.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Floor tiling</li>
                <li>• Wall tiling</li>
                <li>• Tile repairs</li>
                <li>• Waterproofing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Cuizon Construction?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We are very professional and work hard to meet deadlines for project completion. Our commitment to quality and customer satisfaction sets us apart.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Competitive Quotes</h3>
                    <p className="text-gray-600">We provide transparent, competitive pricing for all our services.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">High Standard Work</h3>
                    <p className="text-gray-600">Quality craftsmanship and attention to detail in every project.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Deadline Commitment</h3>
                    <p className="text-gray-600">We work hard to meet all project deadlines and deliver on time.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20construction%20worker%20smoothly%20applying%20plaster%20to%20concrete%20block%20wall%20with%20precision%20tools%2C%20clean%20construction%20site%20background%20with%20blue%20and%20gray%20tones%2C%20showcasing%20skilled%20craftsmanship%20and%20quality%20workmanship%20in%20residential%20building%20project&width=600&height=400&seq=why-choose&orientation=landscape"
                alt="Professional plastering work"
                className="rounded-xl shadow-lg w-full h-96 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Areas We Serve</h2>
            <p className="text-xl text-gray-600">
              Providing professional construction services across Auckland and surrounding areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {['Auckland', 'Franklin', 'Hauraki Islands', 'Manukau', 'North Shore', 'Papakura', 'Rodney', 'Waitakere', 'Waiheke Island'].map((area) => (
              <div key={area} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-map-pin-line text-blue-600 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-800">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a competitive quote today and experience our professional, high-standard construction services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer">
              Get Free Quote
            </Link>
            <Link href="/testimonials" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer">
              Read Reviews
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}