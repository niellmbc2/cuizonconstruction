'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Auckland CBD",
      service: "Interior Plastering & Painting",
      rating: 5,
      text: "Cuizon Construction did an outstanding job on our home renovation. The plastering work was flawless and the painting finish was perfect. They completed everything on time and within budget. Highly recommended!",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20satisfied%20female%20homeowner%20in%20modern%20renovated%20interior%20space%2C%20smiling%20woman%20in%20her%2040s%20with%20clean%20contemporary%20home%20background%2C%20blue%20and%20gray%20color%20scheme&width=150&height=150&seq=testimonial1&orientation=squarish"
    },
    {
      name: "Michael Chen",
      location: "North Shore",
      service: "Concrete Driveway",
      rating: 5,
      text: "Excellent concrete work! The team was professional, punctual, and delivered exactly what was promised. Our new driveway looks fantastic and the quality is top-notch. Great communication throughout the project.",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20satisfied%20male%20homeowner%20standing%20in%20front%20of%20modern%20house%20with%20concrete%20driveway%2C%20middle-aged%20Asian%20man%20smiling%2C%20clean%20residential%20background%20with%20blue%20and%20gray%20tones&width=150&height=150&seq=testimonial2&orientation=squarish"
    },
    {
      name: "Emma Thompson",
      location: "Manukau",
      service: "Exterior Painting",
      rating: 5,
      text: "The exterior painting of our house was completed to perfection. The team was courteous, clean, and efficient. They transformed our home's appearance completely. Competitive pricing and excellent results!",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20happy%20female%20homeowner%20in%20front%20of%20freshly%20painted%20house%20exterior%2C%20satisfied%20woman%20in%20her%2030s%20with%20modern%20home%20background%2C%20blue%20and%20gray%20color%20scheme&width=150&height=150&seq=testimonial3&orientation=squarish"
    },
    {
      name: "David Miller",
      location: "Waitakere",
      service: "Floor Tiling",
      rating: 5,
      text: "Amazing floor tiling work! The attention to detail was impressive and the finish is beautiful. The team was professional and kept the work area clean. Definitely worth every penny. Will use them again!",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20satisfied%20male%20homeowner%20in%20modern%20interior%20with%20beautiful%20tiled%20floor%2C%20middle-aged%20man%20smiling%20in%20contemporary%20home%20setting%2C%20blue%20and%20gray%20color%20scheme&width=150&height=150&seq=testimonial4&orientation=squarish"
    },
    {
      name: "Lisa Rodriguez",
      location: "Papakura",
      service: "Jib Plastering",
      rating: 5,
      text: "Superb jib plastering work! The walls are incredibly smooth and ready for painting. The team's expertise really showed in the quality of the finish. Professional service from start to finish.",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20satisfied%20female%20homeowner%20in%20modern%20interior%20with%20smooth%20plastered%20walls%2C%20happy%20woman%20in%20her%2040s%20with%20clean%20contemporary%20home%20background%2C%20blue%20and%20gray%20tones&width=150&height=150&seq=testimonial5&orientation=squarish"
    },
    {
      name: "Robert Wilson",
      location: "Franklin",
      service: "Complete Renovation",
      rating: 5,
      text: "Cuizon Construction handled our complete home renovation including plastering, painting, and concrete work. Every aspect was done to perfection. They met all deadlines and the quality exceeded our expectations.",
      image: "https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20satisfied%20male%20homeowner%20in%20beautifully%20renovated%20modern%20home%20interior%2C%20middle-aged%20man%20smiling%20with%20contemporary%20home%20background%2C%20blue%20and%20gray%20color%20scheme&width=150&height=150&seq=testimonial6&orientation=squarish"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Happy%20satisfied%20homeowners%20standing%20in%20front%20of%20beautifully%20finished%20construction%20project%2C%20multiple%20people%20smiling%20with%20modern%20house%20background%2C%20blue%20and%20gray%20color%20scheme%2C%20representing%20customer%20satisfaction%20and%20quality%20work&width=1920&height=600&seq=testimonials-hero&orientation=landscape')`
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">What Our Clients Say</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Read testimonials from satisfied customers who experienced our professional construction services
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <p className="text-gray-600 text-lg">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-600 mb-2">100%</div>
              <p className="text-gray-600 text-lg">Customer Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
              <p className="text-gray-600 text-lg">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <p className="text-gray-600 text-lg">5-Star Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our satisfied customers have to say about our professional construction services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover object-top mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.service}
                  </span>
                </div>
                
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Platform Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Us Online</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check out our reviews on popular platforms and see why customers choose Cuizon Construction
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-google-fill text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Google Reviews</h3>
              <div className="flex items-center justify-center mb-4">
                <div className="text-3xl font-bold text-red-600 mr-2">4.9</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">Based on 25+ reviews</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer">
                Read Reviews
              </button>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-facebook-fill text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Facebook Reviews</h3>
              <div className="flex items-center justify-center mb-4">
                <div className="text-3xl font-bold text-blue-600 mr-2">5.0</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">Based on 15+ reviews</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer">
                Read Reviews
              </button>
            </div>

            <div className="bg-green-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-star-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Local Reviews</h3>
              <div className="flex items-center justify-center mb-4">
                <div className="text-3xl font-bold text-green-600 mr-2">4.8</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">Based on 10+ reviews</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer">
                Read Reviews
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-12 rounded-xl shadow-lg text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Had a Great Experience?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We'd love to hear about your experience with Cuizon Construction. Your feedback helps us improve and helps other customers make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer">
                Leave a Review
              </button>
              <Link href="/contact" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer">
                Share Your Experience
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Join Our Happy Customers?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the same quality service and professionalism that our customers rave about. Get your free quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer">
              Get Free Quote
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}