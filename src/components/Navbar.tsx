import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Menu, X, Search, User, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-800 border-b-2 border-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">We Sell</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/properties" className="text-white hover:text-blue-400 transition-colors">Properties</Link>
            <Link to="/plot-finder" className="text-white hover:text-blue-400 transition-colors">Plot Finder</Link>
            <Link to="/area-guides" className="text-white hover:text-blue-400 transition-colors">Area Guides</Link>
            <Link to="/tools" className="text-white hover:text-blue-400 transition-colors">Tools</Link>
            <Link to="/community" className="text-white hover:text-blue-400 transition-colors">Community</Link>
            <Link to="/about" className="text-white hover:text-blue-400 transition-colors">About</Link>
            <Link to="/contact" className="text-white hover:text-blue-400 transition-colors">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Search className="h-5 w-5 text-white cursor-pointer hover:text-blue-400" />
            <User className="h-5 w-5 text-white cursor-pointer hover:text-blue-400" />
            <Phone className="h-5 w-5 text-white cursor-pointer hover:text-blue-400" />
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-white hover:text-blue-400">Home</Link>
            <Link to="/properties" className="block px-3 py-2 text-white hover:text-blue-400">Properties</Link>
            <Link to="/plot-finder" className="block px-3 py-2 text-white hover:text-blue-400">Plot Finder</Link>
            <Link to="/area-guides" className="block px-3 py-2 text-white hover:text-blue-400">Area Guides</Link>
            <Link to="/tools" className="block px-3 py-2 text-white hover:text-blue-400">Tools</Link>
            <Link to="/community" className="block px-3 py-2 text-white hover:text-blue-400">Community</Link>
            <Link to="/about" className="block px-3 py-2 text-white hover:text-blue-400">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-white hover:text-blue-400">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;