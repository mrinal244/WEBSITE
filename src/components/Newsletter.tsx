import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-amber-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Stay in Style</h2>
        <p className="text-lg text-amber-100 mb-8 max-w-2xl mx-auto">
          Be the first to know about our latest collections, exclusive offers, and behind-the-scenes moments from our design studio.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-300"
              required
            />
            <button
              type="submit"
              className="bg-white text-amber-900 px-6 py-3 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              SUBSCRIBE
            </button>
          </div>
        </form>

        <div className="mt-12 flex justify-center space-x-6">
          <a href="#" className="text-amber-100 hover:text-white transition-colors duration-200">
            Instagram
          </a>
          <a href="#" className="text-amber-100 hover:text-white transition-colors duration-200">
            Facebook
          </a>
          <a href="#" className="text-amber-100 hover:text-white transition-colors duration-200">
            Pinterest
          </a>
          <a href="#" className="text-amber-100 hover:text-white transition-colors duration-200">
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;