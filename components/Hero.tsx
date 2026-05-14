import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-blue-600 py-20 px-4 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Accelerate Your Business Growth
        </h1>
        <p className="text-xl mb-10 opacity-90">
          The all-in-one platform to generate leads, manage your pipeline, and scale faster than ever.
        </p>
        <a 
          href="#contact" 
          className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
}
