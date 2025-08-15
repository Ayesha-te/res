import React from 'react';
import { TrendingUp, MapPin, DollarSign, BarChart3 } from 'lucide-react';

const TrendingAreas = () => {
  const trendingAreas = [
    {
      name: "DHA Lahore",
      city: "Lahore",
      priceRange: "50L - 5Cr",
      growth: "+12%",
      properties: "2,500+",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
      trending: true
    },
    {
      name: "Clifton",
      city: "Karachi",
      priceRange: "80L - 8Cr",
      growth: "+15%",
      properties: "1,800+",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
      trending: true
    },
    {
      name: "Blue Area",
      city: "Islamabad",
      priceRange: "1Cr - 10Cr",
      growth: "+18%",
      properties: "900+",
      image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=600",
      trending: true
    },
    {
      name: "Bahria Town",
      city: "Rawalpindi",
      priceRange: "30L - 3Cr",
      growth: "+10%",
      properties: "3,200+",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
      trending: false
    },
    {
      name: "Gulberg",
      city: "Lahore",
      priceRange: "60L - 6Cr",
      growth: "+14%",
      properties: "2,100+",
      image: "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600",
      trending: false
    },
    {
      name: "F-7",
      city: "Islamabad",
      priceRange: "1.5Cr - 15Cr",
      growth: "+20%",
      properties: "600+",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
      trending: true
    }
  ];

  return (
    <section className="bg-slate-800 py-16 border-y-2 border-blue-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Trending Areas</h2>
          <p className="text-gray-400 text-lg">Discover the most sought-after locations with highest growth potential</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingAreas.map((area, index) => (
            <div key={index} className="bg-slate-900 rounded-none border-2 border-blue-500 hover:border-blue-400 transition-colors group">
              <div className="relative">
                <img src={area.image} alt={area.name} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute top-4 left-4 flex space-x-2">
                  {area.trending && (
                    <span className="bg-red-500 text-white px-3 py-1 text-sm font-bold rounded-none flex items-center space-x-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>HOT</span>
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 text-sm font-bold rounded-none">
                    {area.growth}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">{area.name}</h3>
                  <div className="flex items-center text-gray-300 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{area.city}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="flex items-center text-gray-400 mb-1">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span className="text-sm">Price Range</span>
                    </div>
                    <div className="text-white font-semibold">{area.priceRange}</div>
                  </div>
                  <div>
                    <div className="flex items-center text-gray-400 mb-1">
                      <BarChart3 className="h-4 w-4 mr-1" />
                      <span className="text-sm">Properties</span>
                    </div>
                    <div className="text-white font-semibold">{area.properties}</div>
                  </div>
                </div>
                
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-none border-2 border-blue-400 transition-colors">
                  Explore {area.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-slate-900 p-8 rounded-none border-2 border-blue-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Market Analysis & Trends</h3>
                <p className="text-gray-400 text-lg mb-6">
                  Stay ahead with our comprehensive market analysis and investment insights. Our data-driven approach helps you make informed decisions.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-blue-400" />
                    <span>Real-time price tracking and market trends</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-blue-400" />
                    <span>ROI calculations and investment potential analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    <span>Location-based growth predictions and forecasts</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-none border-2 border-blue-400 mb-4">
                  View Market Report
                </button>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-slate-800 p-4 rounded-none border border-blue-500">
                    <div className="text-2xl font-bold text-blue-400">+15%</div>
                    <div className="text-sm text-gray-400">Avg. Growth Rate</div>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-none border border-blue-500">
                    <div className="text-2xl font-bold text-blue-400">50+</div>
                    <div className="text-sm text-gray-400">Areas Tracked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingAreas;