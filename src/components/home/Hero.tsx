import { Search, MapPin, Home, Building } from 'lucide-react';
import homeImage from '../../assets/home.jpg'; // Correct path from components/home/ to assets/

const Hero = () => {
  return (
    <section
      className="relative bg-slate-900 py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Find Your Perfect
          <span className="block text-blue-400">Property </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Discover the best properties, plots, and commercial spaces across Pakistan. Your dream property is just a click away.
        </p>

        {/* Search Box */}
        <div className="bg-slate-800 p-6 rounded-none border-2 border-blue-500 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <select className="bg-slate-700 text-white p-3 rounded-none border border-blue-400">
              <option>Property Type</option>
              <option>House</option>
              <option>Plot</option>
              <option>Commercial</option>
              <option>Apartment</option>
            </select>
            <select className="bg-slate-700 text-white p-3 rounded-none border border-blue-400">
              <option>City</option>
              <option>Lahore</option>
              <option>Karachi</option>
              <option>Islamabad</option>
              <option>Rawalpindi</option>
            </select>
            <select className="bg-slate-700 text-white p-3 rounded-none border border-blue-400">
              <option>Price Range</option>
              <option>Under 50 Lakh</option>
              <option>50 Lakh - 1 Crore</option>
              <option>1 - 5 Crore</option>
              <option>Above 5 Crore</option>
            </select>
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-none border-2 border-blue-400 flex items-center justify-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-800 p-6 rounded-none border-2 border-blue-500 hover:border-blue-400 transition-colors">
            <Home className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">50,000+</h3>
            <p className="text-gray-400">Properties Listed</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-none border-2 border-blue-500 hover:border-blue-400 transition-colors">
            <Building className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">500+</h3>
            <p className="text-gray-400">Verified Agents</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-none border-2 border-blue-500 hover:border-blue-400 transition-colors">
            <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">100+</h3>
            <p className="text-gray-400">Cities Covered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
