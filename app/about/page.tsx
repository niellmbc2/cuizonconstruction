'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20construction%20team%20working%20together%20on%20plastering%20project%2C%20skilled%20craftsmen%20with%20tools%20and%20equipment%2C%20clean%20modern%20construction%20site%20with%20blue%20and%20gray%20color%20scheme%2C%20teamwork%20and%20expertise%20in%20building%20industry&width=1920&height=600&seq=about-hero&orientation=landscape')`
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Cuizon Construction</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Your trusted partner for professional plastering, painting, and construction services across Auckland
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Cuizon Construction Plastering and Painting Services Ltd has been serving the Auckland region with dedication and expertise. We specialize in solid plastering, concrete work, and both interior and exterior painting services.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our commitment to professionalism and hard work has made us a trusted name in the construction industry. We understand that every project is unique, and we work closely with our clients to deliver exceptional results that exceed expectations.
              </p>
              <p className="text-lg text-gray-600">
                We pride ourselves on providing competitive quotes while maintaining the highest standards of workmanship. Our team is dedicated to meeting project deadlines and ensuring customer satisfaction on every job.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20construction%20workers%20team%20portrait%20in%20front%20of%20completed%20plastering%20project%2C%20skilled%20craftsmen%20with%20hard%20hats%20and%20tools%2C%20clean%20modern%20building%20background%20with%20blue%20and%20gray%20tones%2C%20representing%20quality%20workmanship%20and%20reliability&width=600&height=400&seq=our-story&orientation=landscape"
                alt="Our professional team"
                className="rounded-xl shadow-lg w-full h-96 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and ensure we deliver the best possible service to our clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in all our work, using quality materials and proven techniques to deliver exceptional results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-line text-cyan-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Timely Delivery</h3>
              <p className="text-gray-600">
                We work hard to meet all project deadlines and complete every job on time, respecting your schedule and budget.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We listen to your needs and work closely with you throughout the entire project.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Reliability</h3>
              <p className="text-gray-600">
                Count on us to deliver consistent, professional service with transparent communication and dependable results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-money-dollar-circle-line text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Fair Pricing</h3>
              <p className="text-gray-600">
                We provide competitive quotes with transparent pricing, ensuring you get the best value for your investment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-user-star-line text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Professionalism</h3>
              <p className="text-gray-600">
                Our skilled team brings years of experience and professional expertise to every project, big or small.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Years of experience and specialized knowledge in construction, plastering, and painting services
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Specialized Services</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Solid Plastering</h4>
                    <p className="text-gray-600">Expert application on concrete block and brick walls</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Interior & Exterior Painting</h4>
                    <p className="text-gray-600">Complete painting solutions for residential and commercial properties</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Jib Plastering</h4>
                    <p className="text-gray-600">Specialized plastering techniques for smooth finishes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Concrete Work</h4>
                    <p className="text-gray-600">Footpaths, driveways, and structural concrete projects</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Floor & Wall Tiling</h4>
                    <p className="text-gray-600">Professional tiling services with precision installation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Close-up%20view%20of%20skilled%20craftsman%20hands%20applying%20smooth%20plaster%20to%20wall%20with%20professional%20trowel%2C%20detailed%20workmanship%20showing%20precision%20and%20expertise%2C%20clean%20construction%20background%20with%20blue%20and%20gray%20tones%2C%20demonstrating%20quality%20craftsmanship&width=600&height=400&seq=expertise&orientation=landscape"
                alt="Expert craftsmanship"
                className="rounded-xl shadow-lg w-full h-96 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Where We Work</h2>
            <p className="text-xl text-gray-600">
              Serving Auckland and surrounding areas with professional construction services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
            {['Auckland', 'Franklin', 'Hauraki Islands', 'Manukau', 'North Shore', 'Papakura', 'Rodney', 'Waitakere', 'Waiheke Island'].map((area) => (
              <div key={area} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-map-pin-line text-blue-600 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-800">{area}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              Don't see your area listed? Contact us to discuss your project - we may be able to help!
            </p>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}