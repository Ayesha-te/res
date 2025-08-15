import React from 'react';
import { Shield, Award, Users, Clock, TrendingUp, MapPin, Calculator, MessageSquare } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Listings",
      description: "All properties are thoroughly verified and authenticated before listing"
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Professional real estate experts guide you through every step"
    },
    {
      icon: Users,
      title: "Trusted Network",
      description: "Connect with verified agents and trusted property developers"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Fast response times and efficient property matching services"
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Access to real-time market trends and property analytics"
    },
    {
      icon: MapPin,
      title: "Comprehensive Coverage",
      description: "Properties available across all major cities in Pakistan"
    },
    {
      icon: Calculator,
      title: "Financial Tools",
      description: "Built-in calculators for loans, construction costs, and more"
    },
    {
      icon: MessageSquare,
      title: "Community Support",
      description: "Active community forums for advice and experience sharing"
    }
  ];

  return (
    <section className="bg-slate-800 py-16 border-t-2 border-blue-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose We Sell?</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We're committed to making your property buying, selling, and investment journey smooth and successful
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-slate-900 p-6 rounded-none border-2 border-blue-500 hover:border-blue-400 transition-colors group">
                <div className="mb-4">
                  <Icon className="h-12 w-12 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-slate-900 p-8 rounded-none border-2 border-blue-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-400 text-lg mb-6">
                Join thousands of satisfied customers who have found their dream properties through We Sell.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-none border-2 border-blue-400">
                  Start Searching
                </button>
                <button className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-none">
                  List Your Property
                </button>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Happy Family" 
                className="w-full h-64 object-cover rounded-none border-2 border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;