import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-amber-400 mb-4">PRAMUGDHA</h3>
            <p className="text-gray-300 mb-6">
              Celebrating the beauty of Indian craftsmanship through contemporary design and timeless elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <div className="w-6 h-6 bg-current rounded-sm"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-current rounded-sm"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
                <span className="sr-only">Pinterest</span>
                <div className="w-6 h-6 bg-current rounded-sm"></div>
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Collections</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Ready to Wear</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Bridal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Festive</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Contemporary</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Traditional</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Care Instructions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Track Order</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 Amer Road, Jaipur</p>
              <p>📞 +91 88548 22276</p>
              <p>✉️ mrinalkhandelwal007@gmail.com</p>
            </div>
            <div className="mt-4">
              <h5 className="font-medium mb-2">Store Hours</h5>
              <p className="text-gray-400 text-sm">Mon - Sat: 10:00 AM - 8:00 PM</p>
              <p className="text-gray-400 text-sm">Sunday: 11:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Pramugdha. All rights reserved. Crafted with love in India.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">Terms & Conditions</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;