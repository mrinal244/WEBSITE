import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over two decades, we have been weaving stories of elegance and grace through our designs. 
              Our journey began with a simple belief that every woman deserves to feel beautiful, confident, 
              and authentically herself.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From traditional silhouettes to contemporary interpretations, each piece in our collection 
              reflects our commitment to exceptional craftsmanship, sustainable practices, and the 
              celebration of feminine strength.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-amber-900 mb-2">25+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-amber-900 mb-2">100+</div>
                <div className="text-gray-600">Global Stores</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Designer Story"
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-100 rounded-lg opacity-80"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-amber-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;