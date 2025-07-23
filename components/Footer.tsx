'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <i className="ri-hammer-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">Cuizon Construction</h3>
                <p className="text-sm text-gray-400">Plastering & Painting Services Ltd</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional construction services specializing in solid plastering, concrete work, and interior/exterior painting. We pride ourselves on delivering high-standard jobs with competitive quotes.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <i className="ri-facebook-fill text-white"></i>
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                <i className="ri-twitter-fill text-white"></i>
              </div>
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors">
                <i className="ri-linkedin-fill text-white"></i>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">Services</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors cursor-pointer">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors cursor-pointer">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors cursor-pointer">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">Solid Plastering</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">Concrete Work</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">Interior Painting</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">Exterior Painting</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">Jib Plastering</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors cursor-pointer">Floor & Wall Tiling</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Areas Served</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Auckland</li>
              <li>Franklin</li>
              <li>Hauraki Islands</li>
              <li>Manukau</li>
              <li>North Shore</li>
              <li>Papakura</li>
              <li>Rodney</li>
              <li>Waitakere</li>
              <li>Waiheke Island</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            2024 Cuizon Construction Plastering and Painting Services Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
