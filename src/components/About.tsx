import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 15 years, we have been redefining fashion from the vibrant city of Jaipur, blending royal heritage with modern elegance. What began as a passion for design has grown into a trusted name in personalized, stylish, and designer wear that speaks to the individuality of every woman.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Each creation is a celebration of craftsmanship — from timeless traditional silhouettes to bold contemporary styles — all thoughtfully curated to reflect grace, strength, and your unique story.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether it's custom tailoring, statement ensembles, or sustainable luxury, our pieces are designed to make you feel confident, radiant, and unapologetically yourself.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-amber-900 mb-2">15+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-amber-900 mb-2">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://www.anitadongre.com/on/demandware.static/-/Sites-AD-INDIA-Library/default/dwbbc9085b/images/Home%20page/Apr2024/NewHomepage/Book_An_appointment_New%20Home%20page%20AD26april2024.jpg"
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