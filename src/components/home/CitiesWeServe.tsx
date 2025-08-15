
import { MapPin, Building, Home, TrendingUp } from 'lucide-react';

const CitiesWeServe = () => {
  const cities = [
    {
      name: "Lahore",
      properties: "18,500+",
      averagePrice: "85L",
      growth: "+12%",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
      areas: ["DHA", "Gulberg", "Model Town", "Johar Town"]
    },
    {
      name: "Karachi",
      properties: "15,200+",
      averagePrice: "95L",
      growth: "+15%",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
      areas: ["Clifton", "DHA", "Gulshan", "North Nazimabad"]
    },
    {
      name: "Islamabad",
      properties: "8,900+",
      averagePrice: "1.2Cr",
      growth: "+18%",
      image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=600",
      areas: ["Blue Area", "F-7", "F-8", "G-9"]
    },
    {
      name: "Rawalpindi",
      properties: "7,300+",
      averagePrice: "60L",
      growth: "+10%",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
      areas: ["Bahria Town", "DHA", "Satellite Town", "PWD"]
    },
    {
      name: "Faisalabad",
      properties: "4,800+",
      averagePrice: "45L",
      growth: "+8%",
      image: "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600",
      areas: ["Peoples Colony", "Model Town", "Gulberg", "Millat Town"]
    },
    {
      name: "Multan",
      properties: "3,200+",
      averagePrice: "40L",
      growth: "+9%",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
      areas: ["Model Town", "Cantt", "Shah Rukn-e-Alam", "Gulgasht"]
    }
  ];

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Cities We Serve</h2>
          <p className="text-gray-400 text-lg">Find properties across major cities in Pakistan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <div key={index} className="bg-slate-800 rounded-none border-2 border-blue-500 hover:border-blue-400 transition-colors group">
              <div className="relative">
                <img src={city.image} alt={city.name} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 text-sm font-bold rounded-none">
                    {city.growth}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-3xl font-bold text-white">{city.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="flex items-center text-gray-400 mb-1">
                      <Home className="h-4 w-4 mr-1" />
                      <span className="text-sm">Properties</span>
                    </div>
                    <div className="text-white font-bold">{city.properties}</div>
                  </div>
                  <div>
                    <div className="flex items-center text-gray-400 mb-1">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="text-sm">Avg Price</span>
                    </div>
                    <div className="text-white font-bold">PKR {city.averagePrice}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-gray-400 text-sm mb-2">Popular Areas:</div>
                  <div className="flex flex-wrap gap-2">
                    {city.areas.map((area, areaIndex) => (
                      <span key={areaIndex} className="bg-slate-900 text-blue-400 px-2 py-1 text-xs rounded-none border border-blue-500">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-none border-2 border-blue-400 transition-colors">
                  Explore {city.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-slate-800 p-8 rounded-none border-2 border-blue-500">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Expanding Across Pakistan</h3>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                We're continuously expanding our coverage to serve more cities and provide better property options for our customers across Pakistan.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">100+ Cities</h4>
                <p className="text-gray-400">Covered across all provinces</p>
              </div>
              <div className="text-center">
                <Building className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">500+ Areas</h4>
                <p className="text-gray-400">Including prime localities</p>
              </div>
              <div className="text-center">
                <Home className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">50,000+ Properties</h4>
                <p className="text-gray-400">Listed across the country</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-none border-2 border-blue-400 mr-4">
                View All Cities
              </button>
              <button className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-none transition-colors">
                Request New City
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitiesWeServe;