import React from 'react';

const TestimonialCard = ({ name, review, rating }) => (
  <div className="p-4 bg-white shadow rounded">
    <div className="flex items-center space-x-4">
      <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
      <div>
        <h3 className="font-semibold">{name}</h3>
        <div className="text-yellow-500">{rating}</div>
      </div>
    </div>
    <p className="text-gray-600 mt-4">{review}</p>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="p-8 bg-sky-100 h-96 " >
      <h2 className="text-center text-2xl font-semibold mt-20 mb-10 ">Trusted by over 8M Sellers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <TestimonialCard 
          name="Robert A. Voltiare" 
          rating="⭐⭐⭐⭐⭐" 
          review="Amazing platform for building custom products!" 
        />
        <TestimonialCard 
          name="Quinton Barney" 
          rating="⭐⭐⭐⭐" 
          review="Easy to use and great for scaling." 
        />
        <TestimonialCard 
          name="Nikki Johnson" 
          rating="⭐⭐⭐⭐⭐" 
          review="A great variety of products and solid support." 
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
