import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';


const ProductShowcase = () => {
  const navigate = useNavigate();

  return (
    <section id="ready-to-wear" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">Latest Arrivals</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our newest pieces that blend traditional aesthetics with contemporary design sensibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-amber-900 px-2 py-1 text-xs font-medium rounded">
                    {product.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-amber-900 px-6 py-2 font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    QUICK VIEW
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-medium text-gray-900 mb-2 group-hover:text-amber-900 transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-lg font-semibold text-amber-900">₹{product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-900 text-white px-8 py-3 font-medium hover:bg-amber-800 transition-colors duration-300 transform hover:scale-105">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;