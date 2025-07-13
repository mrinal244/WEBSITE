import React, { useState } from 'react';
import { Search, Menu, X, ShoppingBag, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state } = useCart();

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-amber-900">PRAMUGDHA</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#collections" className="text-gray-700 hover:text-amber-900 transition-colors duration-200 font-medium">Collections</a>
            <a href="#ready-to-wear" className="text-gray-700 hover:text-amber-900 transition-colors duration-200 font-medium">Ready to Wear</a>
            <a href="#bridal" className="text-gray-700 hover:text-amber-900 transition-colors duration-200 font-medium">Bridal</a>
            <a href="#about" className="text-gray-700 hover:text-amber-900 transition-colors duration-200 font-medium">About</a>
            <a href="#stores" className="text-gray-700 hover:text-amber-900 transition-colors duration-200 font-medium">Stores</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-amber-900 transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-amber-900 transition-colors duration-200">
              <User className="h-5 w-5" />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="text-gray-700 hover:text-amber-900 transition-colors duration-200 relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {state.itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.itemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-900 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#collections" className="text-gray-700 hover:text-amber-900 transition-colors duration-200 font-medium">Collections</a>
              <a href="#ready-to-wear" className="text-gray-700 hover:text-amber-900 transition-colors duration-200 font-medium">Ready to Wear</a>
              <a href="#bridal" className="text-gray-700 hover:text-amber-900 transition-colors duration-200 font-medium">Bridal</a>
              <a href="#about" className="text-gray-700 hover:text-amber-900 transition-colors duration-200 font-medium">About</a>
              <a href="#stores" className="text-gray-700 hover:text-amber-900 transition-colors duration-200 font-medium">Stores</a>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <button className="text-gray-700 hover:text-amber-900 transition-colors duration-200">
                  <Search className="h-5 w-5" />
                </button>
                <button className="text-gray-700 hover:text-amber-900 transition-colors duration-200">
                  <User className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="text-gray-700 hover:text-amber-900 transition-colors duration-200 relative"
                >
                  <ShoppingBag className="h-5 w-5" />
                  {state.itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-amber-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {state.itemCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      </header>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;