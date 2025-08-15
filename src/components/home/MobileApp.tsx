import React from 'react';
import { Smartphone, Download, Search, Bell, MapPin, Star } from 'lucide-react';

const MobileApp = () => {
  const features = [
    {
      icon: Search,
      title: "Advanced Search",
      description: "Search properties on-the-go with powerful filters"
    },
    {
      icon: MapPin,
      title: "Map View",
      description: "Explore properties with interactive map features"
    },
    {
      icon: Bell,
      title: "Price Alerts",
      description: "Get notified when prices drop in your preferred areas"
    },
    {
      icon: Star,
      title: "Save Favorites",
      description: "Bookmark properties and access them anytime"
    }
  ];

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Smartphone className="h-10 w-10 text-blue-400 mr-4" />
              <h2 className="text-4xl font-bold text-white">Download Our Mobile App</h2>
            </div>
            <p className="text-gray-400 text-lg mb-8">
              Take We Sell with you wherever you go. Our mobile app provides the full property search experience 
              right in your pocket, with exclusive mobile-only features and real-time notifications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-slate-800 p-3 rounded-none border border-blue-500">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-none border-2 border-blue-500 flex items-center space-x-3 transition-colors">
                  <div className="bg-white rounded p-1">
                    <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">A</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="font-bold">App Store</div>
                  </div>
                </button>
                
                <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-none border-2 border-blue-500 flex items-center space-x-3 transition-colors">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded p-1">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="font-bold">Google Play</div>
                  </div>
                </button>
              </div>

              <div className="text-sm text-gray-400">
                <span>Available for iOS 14.0+ and Android 8.0+</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-800 p-8 rounded-none border-2 border-blue-500">
              <div className="text-center">
                <div className="bg-slate-900 p-6 rounded-none border border-blue-500 mb-6">
                  <Smartphone className="h-20 w-20 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">We Sell Mobile</h3>
                  <p className="text-gray-400">Property search made simple</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-900 p-4 rounded-none border border-blue-500">
                    <div className="text-2xl font-bold text-blue-400">4.8</div>
                    <div className="text-sm text-gray-400">App Store Rating</div>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-none border border-blue-500">
                    <div className="text-2xl font-bold text-blue-400">100K+</div>
                    <div className="text-sm text-gray-400">Downloads</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-slate-900 p-3 rounded-none border border-blue-500 text-left">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-blue-400" />
                      <span className="text-white text-sm">GPS-based property search</span>
                    </div>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-none border border-blue-500 text-left">
                    <div className="flex items-center space-x-2">
                      <Bell className="h-4 w-4 text-blue-400" />
                      <span className="text-white text-sm">Instant property alerts</span>
                    </div>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-none border border-blue-500 text-left">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-blue-400" />
                      <span className="text-white text-sm">Offline property viewing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-none transform rotate-12">
              <span className="font-bold text-sm">NEW</span>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-slate-800 p-8 rounded-none border-2 border-blue-500">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Exclusive Mobile Features</h3>
            <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
              Our mobile app offers exclusive features that you won't find on the web version, 
              making your property search more convenient and efficient.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-900 p-6 rounded-none border border-blue-500">
                <div className="w-16 h-16 bg-blue-500 rounded-none mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">AR Property View</h4>
                <p className="text-gray-400 text-sm">
                  Use augmented reality to visualize properties in their actual locations
                </p>
              </div>
              
              <div className="bg-slate-900 p-6 rounded-none border border-blue-500">
                <div className="w-16 h-16 bg-blue-500 rounded-none mx-auto mb-4 flex items-center justify-center">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Voice Search</h4>
                <p className="text-gray-400 text-sm">
                  Search for properties using voice commands in Urdu and English
                </p>
              </div>
              
              <div className="bg-slate-900 p-6 rounded-none border border-blue-500">
                <div className="w-16 h-16 bg-blue-500 rounded-none mx-auto mb-4 flex items-center justify-center">
                  <Bell className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Smart Notifications</h4>
                <p className="text-gray-400 text-sm">
                  AI-powered notifications based on your search behavior and preferences
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-none border-2 border-blue-400">
                Download Now - It's Free!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;