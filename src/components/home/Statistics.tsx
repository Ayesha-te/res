import React from 'react';
import { TrendingUp, Users, Home, Award, Clock, MapPin } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      icon: Home,
      number: "50,000+",
      label: "Properties Listed",
      description: "Active listings across Pakistan"
    },
    {
      icon: Users,
      number: "100,000+",
      label: "Happy Customers",
      description: "Satisfied buyers and sellers"
    },
    {
      icon: Award,
      number: "500+",
      label: "Expert Agents",
      description: "Professional real estate agents"
    },
    {
      icon: TrendingUp,
      number: "₹500B+",
      label: "Properties Sold",
      description: "Total transaction value"
    },
    {
      icon: Clock,
      number: "15",
      label: "Years Experience",
      description: "In Pakistani real estate market"
    },
    {
      icon: MapPin,
      number: "100+",
      label: "Cities Covered",
      description: "Across all provinces"
    }
  ];

  return (
    <section className="bg-slate-800 py-16 border-y-2 border-blue-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Track Record</h2>
          <p className="text-gray-400 text-lg">Numbers that speak for our success and your trust</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-slate-900 p-8 rounded-none border-2 border-blue-500 text-center hover:border-blue-400 transition-colors group">
                <div className="mb-6">
                  <Icon className="h-16 w-16 text-blue-400 mx-auto group-hover:text-blue-300 transition-colors" />
                </div>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {stat.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-400">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-slate-900 p-8 rounded-none border-2 border-blue-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Market Leader in Pakistan</h3>
              <p className="text-gray-400 text-lg mb-6">
                We've established ourselves as the most trusted real estate platform in Pakistan, helping thousands of families find their dream homes and investors discover profitable opportunities.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Highest customer satisfaction rate in the industry</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Average property sale time: 30 days</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>24/7 customer support in Urdu and English</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Legal assistance for all transactions</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-6 rounded-none border-2 border-blue-500 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">98%</div>
                <div className="text-sm text-gray-400">Customer Satisfaction</div>
              </div>
              <div className="bg-slate-800 p-6 rounded-none border-2 border-blue-500 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">30</div>
                <div className="text-sm text-gray-400">Days Average Sale</div>
              </div>
              <div className="bg-slate-800 p-6 rounded-none border-2 border-blue-500 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Customer Support</div>
              </div>
              <div className="bg-slate-800 p-6 rounded-none border-2 border-blue-500 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-sm text-gray-400">Legal Assistance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;