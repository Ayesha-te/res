import React from 'react';
import { MapPin, Bed, Bath, Square, Heart, Share } from 'lucide-react';

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Villa in DHA Lahore",
      price: "2.5 Crore",
      location: "DHA Phase 5, Lahore",
      beds: 5,
      baths: 4,
      area: "1 Kanal",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      type: "House"
    },
    {
      id: 2,
      title: "Modern Apartment in Clifton",
      price: "1.8 Crore",
      location: "Clifton Block 2, Karachi",
      beds: 3,
      baths: 3,
      area: "1800 Sq Ft",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      type: "Apartment"
    },
    {
      id: 3,
      title: "Commercial Plot in Blue Area",
      price: "5 Crore",
      location: "Blue Area, Islamabad",
      beds: null,
      baths: null,
      area: "2 Kanal",
      image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      type: "Plot"
    },
    {
      id: 4,
      title: "Beautiful House in Model Town",
      price: "1.2 Crore",
      location: "Model Town, Lahore",
      beds: 4,
      baths: 3,
      area: "10 Marla",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      type: "House"
    },
    {
      id: 5,
      title: "Office Space in Gulberg",
      price: "3 Crore",
      location: "Gulberg III, Lahore",
      beds: null,
      baths: 2,
      area: "3000 Sq Ft",
      image: "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      type: "Commercial"
    },
    {
      id: 6,
      title: "Residential Plot in Bahria Town",
      price: "80 Lakh",
      location: "Bahria Town, Rawalpindi",
      beds: null,
      baths: null,
      area: "5 Marla",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      type: "Plot"
    }
  ];

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Properties</h2>
          <p className="text-gray-400 text-lg">Discover our handpicked premium properties across Pakistan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-slate-800 rounded-none border-2 border-blue-500 hover:border-blue-400 transition-colors group">
              <div className="relative">
                <img src={property.image} alt={property.title} className="w-full h-64 object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 text-sm font-semibold rounded-none">
                    {property.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-slate-800/80 p-2 rounded-none border border-blue-400">
                    <Heart className="h-4 w-4 text-white" />
                  </button>
                  <button className="bg-slate-800/80 p-2 rounded-none border border-blue-400">
                    <Share className="h-4 w-4 text-white" />
                  </button>
                </div>
                {property.featured && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-yellow-500 text-black px-3 py-1 text-sm font-semibold rounded-none">
                      FEATURED
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-400 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-blue-400">
                    PKR {property.price}
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  {property.beds && (
                    <div className="flex items-center space-x-1">
                      <Bed className="h-4 w-4" />
                      <span>{property.beds} Beds</span>
                    </div>
                  )}
                  {property.baths && (
                    <div className="flex items-center space-x-1">
                      <Bath className="h-4 w-4" />
                      <span>{property.baths} Baths</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1">
                    <Square className="h-4 w-4" />
                    <span>{property.area}</span>
                  </div>
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-none border-2 border-blue-400 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-none transition-colors">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;