
import { Star, Phone, Mail, MapPin, Award, Users, TrendingUp } from 'lucide-react';

const ExpertAgents = () => {
  const agents = [
    {
      name: "Ahmad Khan",
      specialization: "Luxury Properties",
      location: "DHA Lahore",
      rating: 4.9,
      reviews: 250,
      sales: 150,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "+92 300 1234567",
      email: "ahmad@wesell.pk"
    },
    {
      name: "Sarah Ahmed",
      specialization: "Commercial Real Estate",
      location: "Blue Area Islamabad",
      rating: 4.8,
      reviews: 180,
      sales: 120,
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "+92 301 7654321",
      email: "sarah@wesell.pk"
    },
    {
      name: "Muhammad Ali",
      specialization: "Residential Properties",
      location: "Clifton Karachi",
      rating: 4.9,
      reviews: 300,
      sales: 200,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "+92 302 9876543",
      email: "ali@wesell.pk"
    },
    {
      name: "Fatima Shah",
      specialization: "Investment Properties",
      location: "Gulberg Lahore",
      rating: 4.7,
      reviews: 220,
      sales: 180,
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
      phone: "+92 303 5432109",
      email: "fatima@wesell.pk"
    }
  ];

  return (
    <section className="bg-slate-800 py-16 border-y-2 border-blue-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Meet Our Expert Agents</h2>
          <p className="text-gray-400 text-lg">Professional real estate experts ready to help you find your perfect property</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <div key={index} className="bg-slate-900 rounded-none border-2 border-blue-500 hover:border-blue-400 transition-colors group">
              <div className="p-6">
                <div className="text-center mb-6">
                  <img 
                    src={agent.image} 
                    alt={agent.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-blue-500 object-cover"
                  />
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {agent.name}
                  </h3>
                  <p className="text-blue-400 text-sm font-semibold">{agent.specialization}</p>
                  <div className="flex items-center justify-center mt-2 text-gray-400 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{agent.location}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{agent.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm">({agent.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="h-4 w-4 text-blue-400" />
                      <span className="text-gray-400 text-sm">Sales</span>
                    </div>
                    <span className="text-white font-semibold">{agent.sales}+</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-none border-2 border-blue-400 flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Call Now</span>
                  </button>
                  <button className="w-full border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white py-2 px-4 rounded-none flex items-center justify-center space-x-2 transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-slate-900 p-8 rounded-none border-2 border-blue-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Why Choose Our Agents?</h3>
                <p className="text-gray-400 text-lg mb-6">
                  Our certified real estate professionals bring years of experience, local market knowledge, and commitment to helping you achieve your property goals.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-blue-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Certified Professionals</h4>
                      <p className="text-gray-400 text-sm">Licensed and certified by relevant authorities</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-blue-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Local Expertise</h4>
                      <p className="text-gray-400 text-sm">Deep knowledge of local markets and neighborhoods</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-6 w-6 text-blue-400 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Proven Track Record</h4>
                      <p className="text-gray-400 text-sm">Hundreds of successful transactions completed</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <div className="bg-slate-800 p-6 rounded-none border border-blue-500 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                  <div className="text-white font-semibold mb-1">Expert Agents</div>
                  <div className="text-gray-400 text-sm">Across Pakistan</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 p-4 rounded-none border border-blue-500 text-center">
                    <div className="text-2xl font-bold text-blue-400">4.8</div>
                    <div className="text-gray-400 text-sm">Avg Rating</div>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-none border border-blue-500 text-center">
                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                    <div className="text-gray-400 text-sm">Support</div>
                  </div>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-none border-2 border-blue-400">
                  Find Your Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertAgents;