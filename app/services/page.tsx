'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20construction%20tools%20and%20equipment%20for%20plastering%20and%20painting%20work%2C%20trowels%20brushes%20rollers%20on%20clean%20construction%20site%2C%20blue%20and%20gray%20color%20scheme%2C%20showcasing%20various%20construction%20services%20and%20quality%20craftsmanship%20tools&width=1920&height=600&seq=services-hero&orientation=landscape')`
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive construction, plastering, and painting services with professional expertise and quality results
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-paint-brush-line text-blue-600 text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Solid Plastering</h2>
              </div>
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20plasterer%20applying%20smooth%20solid%20plaster%20to%20concrete%20block%20wall%20using%20trowel%2C%20skilled%20craftsman%20working%20on%20residential%20building%20interior%2C%20clean%20construction%20site%20with%20blue%20and%20gray%20tones%2C%20high%20quality%20workmanship%20detail&width=600&height=300&seq=plastering&orientation=landscape"
                alt="Solid plastering service"
                className="rounded-lg mb-6 w-full h-48 object-cover object-top"
              />
              <p className="text-gray-600 mb-4">
                Expert solid plastering services for concrete block and brick walls. Our skilled craftsmen ensure smooth, durable finishes that provide the perfect base for painting or decorative treatments.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Concrete block wall plastering</li>
                <li>• Brick wall plastering</li>
                <li>• Interior wall finishing</li>
                <li>• Smooth surface preparation</li>
                <li>• Durable and long-lasting results</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-brush-line text-cyan-600 text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Interior & Exterior Painting</h2>
              </div>
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20painter%20applying%20high%20quality%20paint%20to%20interior%20wall%20with%20brush%20and%20roller%2C%20clean%20modern%20home%20interior%20with%20blue%20and%20gray%20color%20scheme%2C%20skilled%20workmanship%20showing%20attention%20to%20detail%20and%20quality%20finishing&width=600&height=300&seq=painting&orientation=landscape"
                alt="Interior and exterior painting service"
                className="rounded-lg mb-6 w-full h-48 object-cover object-top"
              />
              <p className="text-gray-600 mb-4">
                Complete interior and exterior painting services using quality paints and professional techniques. We transform your space with beautiful, long-lasting finishes.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Interior wall painting</li>
                <li>• Exterior house painting</li>
                <li>• Surface preparation</li>
                <li>• Premium paint application</li>
                <li>• Color consultation</li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-hammer-line text-green-600 text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Concrete Work</h2>
              </div>
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20concrete%20worker%20pouring%20and%20smoothing%20concrete%20for%20driveway%20and%20footpath%20construction%2C%20modern%20residential%20setting%20with%20blue%20and%20gray%20tones%2C%20showcasing%20quality%20concrete%20work%20and%20skilled%20craftsmanship%20in%20construction%20project&width=600&height=300&seq=concrete&orientation=landscape"
                alt="Concrete work service"
                className="rounded-lg mb-6 w-full h-48 object-cover object-top"
              />
              <p className="text-gray-600 mb-4">
                Professional concrete services including footpaths, driveways, and structural work. We deliver durable, well-finished concrete solutions for residential and commercial projects.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Footpath construction</li>
                <li>• Driveway installation</li>
                <li>• Concrete repairs</li>
                <li>• Structural concrete work</li>
                <li>• Quality finishing</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-tools-line text-purple-600 text-2xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Jib Plastering</h2>
              </div>
              <img 
                src="https://readdy.ai/api/search-image?query=Skilled%20plasterer%20performing%20jib%20plastering%20technique%20on%20interior%20wall%2C%20specialized%20plastering%20method%20creating%20smooth%20finish%2C%20professional%20construction%20worker%20with%20tools%2C%20clean%20modern%20building%20interior%20with%20blue%20and%20gray%20tones&width=600&height=300&seq=jib-plastering&orientation=landscape"
                alt="Jib plastering service"
                className="rounded-lg mb-6 w-full h-48 object-cover object-top"
              />
              <p className="text-gray-600 mb-4">
                Specialized jib plastering services for achieving perfectly smooth wall finishes. Our experienced team uses proven techniques to create flawless surfaces.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Specialized plastering technique</li>
                <li>• Smooth wall finishes</li>
                <li>• Professional application</li>
                <li>• Quality surface preparation</li>
                <li>• Expert craftsmanship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction solutions to meet all your project needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-grid-line text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Floor & Wall Tiling</h3>
              <p className="text-gray-600 mb-4">
                Professional tiling services for floors and walls with precision installation and quality materials.
              </p>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Floor tiling installation</li>
                <li>• Wall tiling services</li>
                <li>• Tile repairs and replacement</li>
                <li>• Waterproofing</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-building-line text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Wall Preparation</h3>
              <p className="text-gray-600 mb-4">
                Thorough wall preparation services ensuring the perfect foundation for plastering and painting.
              </p>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Surface cleaning and preparation</li>
                <li>• Crack repair and filling</li>
                <li>• Priming and sealing</li>
                <li>• Surface leveling</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-indigo-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Maintenance & Repairs</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive maintenance and repair services to keep your property in excellent condition.
              </p>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Plaster repairs</li>
                <li>• Paint touch-ups</li>
                <li>• Concrete maintenance</li>
                <li>• Preventive care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure quality results and customer satisfaction on every project
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Consultation</h3>
              <p className="text-gray-600">
                We discuss your project requirements and provide a detailed assessment of the work needed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quote</h3>
              <p className="text-gray-600">
                We provide a competitive, transparent quote with no hidden costs or surprises.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Execution</h3>
              <p className="text-gray-600">
                Our skilled team carries out the work with professional expertise and attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Completion</h3>
              <p className="text-gray-600">
                We ensure quality completion on time and conduct a final inspection with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and competitive quote on your construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer">
              Get Free Quote
            </Link>
            <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}