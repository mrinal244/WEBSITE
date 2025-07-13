import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';


const FeaturedCollections = () => {
  const navigate = useNavigate();
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);

  return (
    <section id="collections" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">Featured Collections</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each piece tells a story of craftsmanship, heritage, and the celebration of feminine grace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="group cursor-pointer overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium bg-amber-600 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-amber-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description.substring(0, 100)}...</p>
                <button className="text-amber-900 font-medium hover:text-amber-700 transition-colors duration-200 group">
                  VIEW DETAILS
                  <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;