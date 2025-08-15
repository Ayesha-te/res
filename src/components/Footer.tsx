
import { Home, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t-2 border-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">We Sell</span>
            </div>
            <p className="text-gray-400 mb-4">
              Pakistan's leading real estate platform connecting buyers, sellers, and investors with the perfect properties.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/properties" className="hover:text-blue-400">Properties</a></li>
              <li><a href="/plot-finder" className="hover:text-blue-400">Plot Finder</a></li>
              <li><a href="/area-guides" className="hover:text-blue-400">Area Guides</a></li>
              <li><a href="/tools" className="hover:text-blue-400">Tools</a></li>
              <li><a href="/community" className="hover:text-blue-400">Community</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400">Property Valuation</a></li>
              <li><a href="#" className="hover:text-blue-400">Investment Consulting</a></li>
              <li><a href="#" className="hover:text-blue-400">Legal Services</a></li>
              <li><a href="#" className="hover:text-blue-400">Property Management</a></li>
              <li><a href="#" className="hover:text-blue-400">Market Analysis</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@wesell.pk</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Lahore, Karachi, Islamabad</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 We Sell Pakistan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;