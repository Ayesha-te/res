import React from 'react';
import { Home, Building2, Factory, MapPin, TreePine, Store } from 'lucide-react';

const PropertyTypes = () => {
  const propertyTypes = [
    {
      icon: Home,
      title: "Residential Houses",
      count: "25,000+",
      description: "Single family homes, villas, and independent houses",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Building2,
      title: "Apartments",
      count: "18,000+",
      description: "Modern apartments, flats, and residential complexes",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: MapPin,
      title: "Plots & Land",
      count: "12,000+",
      description: "Residential and commercial plots in prime locations",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Store,
      title: "Commercial Properties",
      count: "8,500+",
      description: "Offices, shops, warehouses, and commercial spaces",
      image: "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Factory,
      title: "Industrial Properties",
      count: "3,200+",
      description: "Manufacturing units, factories, and industrial plots",
      image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: TreePine,
      title: "Farmhouses",
      count: "1,800+",
      description: "Agricultural land, farmhouses, and rural properties",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Property Types</h2>
          <p className="text-gray-400 text-lg">Explore different types of properties available across Pakistan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div key={index} className="bg-slate-800 rounded-none border-2 border-blue-500 hover:border-blue-400 transition-colors group cursor-pointer">
                <div className="relative">
                  <img src={type.image} alt={type.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <Icon className="h-10 w-10 text-blue-400" />
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-blue-500 text-white px-3 py-1 text-sm font-bold rounded-none">
                      {type.count}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {type.description}
                  </p>
                  <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                    Browse {type.title.toLowerCase()} →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800 p-8 rounded-none border-2 border-blue-500">
            <h3 className="text-2xl font-bold text-white mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-gray-400 mb-6">
              Let our experts help you find the perfect property that matches your specific requirements.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-none border-2 border-blue-400">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyTypes;