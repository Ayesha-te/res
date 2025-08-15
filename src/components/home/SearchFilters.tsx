import { Filter, MapPin, DollarSign, Calendar, Square } from 'lucide-react';

const SearchFilters = () => {
  return (
    <section className="bg-slate-800 py-12 border-b-2 border-blue-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Advanced Property Search</h2>
          <p className="text-gray-400">Use our advanced filters to find exactly what you're looking for</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900 p-6 rounded-none border-2 border-blue-500">
            <MapPin className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Location Filter</h3>
            <p className="text-gray-400 mb-4">Search by specific areas, neighborhoods, or landmarks</p>
            <select className="w-full bg-slate-700 text-white p-2 rounded-none border border-blue-400">
              <option>Select Location</option>
              <option>DHA Lahore</option>
              <option>Gulberg</option>
              <option>Clifton Karachi</option>
            </select>
          </div>

          <div className="bg-slate-900 p-6 rounded-none border-2 border-blue-500">
            <DollarSign className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Price Range</h3>
            <p className="text-gray-400 mb-4">Set your budget range for property search</p>
            <div className="flex space-x-2">
              <input type="number" placeholder="Min Price" className="flex-1 bg-slate-700 text-white p-2 rounded-none border border-blue-400" />
              <input type="number" placeholder="Max Price" className="flex-1 bg-slate-700 text-white p-2 rounded-none border border-blue-400" />
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-none border-2 border-blue-500">
            <Square className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Area Size</h3>
            <p className="text-gray-400 mb-4">Filter properties by area size in marla or kanal</p>
            <select className="w-full bg-slate-700 text-white p-2 rounded-none border border-blue-400">
              <option>Select Area</option>
              <option>3-5 Marla</option>
              <option>5-10 Marla</option>
              <option>1-2 Kanal</option>
            </select>
          </div>

          <div className="bg-slate-900 p-6 rounded-none border-2 border-blue-500">
            <Calendar className="h-8 w-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Property Age</h3>
            <p className="text-gray-400 mb-4">Filter by construction year or property age</p>
            <select className="w-full bg-slate-700 text-white p-2 rounded-none border border-blue-400">
              <option>Any Age</option>
              <option>New Construction</option>
              <option>0-5 Years</option>
              <option>5-10 Years</option>
            </select>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-none border-2 border-blue-400 flex items-center space-x-2 mx-auto">
            <Filter className="h-5 w-5" />
            <span>Apply Filters</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;