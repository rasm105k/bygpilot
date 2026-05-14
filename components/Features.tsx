import React from 'react';

const features = [
  {
    title: 'Fast Integration',
    description: 'Get up and running in minutes with our simple API and intuitive dashboard.',
    icon: '⚡',
  },
  {
    title: 'Real-time Analytics',
    description: 'Track your conversions and lead quality with deep-dive real-time insights.',
    icon: '📈',
  },
  {
    title: 'Secure by Design',
    description: 'Enterprise-grade security ensuring your customer data is always protected.',
    icon: '🛡️',
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide the tools you need to turn visitors into lifelong customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
