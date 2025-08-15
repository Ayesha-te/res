
import { TrendingUp, DollarSign, PieChart, BarChart3, Target, BookOpen } from 'lucide-react';

const InvestmentGuide = () => {
  const investmentTips = [
    {
      icon: TrendingUp,
      title: "Market Trends Analysis",
      description: "Understand current market trends and price movements to make informed investment decisions.",
      tips: ["Track price history", "Monitor supply-demand", "Study growth patterns"]
    },
    {
      icon: Target,
      title: "Location Selection",
      description: "Choose the right location based on future development plans and infrastructure projects.",
      tips: ["Research development plans", "Check connectivity", "Evaluate amenities"]
    },
    {
      icon: DollarSign,
      title: "Budget Planning",
      description: "Plan your budget considering all costs including registration, taxes, and maintenance.",
      tips: ["Include all hidden costs", "Plan for maintenance", "Keep emergency fund"]
    },
    {
      icon: PieChart,
      title: "Portfolio Diversification",
      description: "Diversify your real estate portfolio across different property types and locations.",
      tips: ["Mix property types", "Spread across cities", "Balance risk-return"]
    }
  ];

  const investmentTypes = [
    {
      type: "Residential Investment",
      roi: "8-12%",
      risk: "Low",
      timeframe: "5-10 years",
      description: "Stable returns through rental income and capital appreciation"
    },
    {
      type: "Commercial Investment",
      roi: "10-15%",
      risk: "Medium",
      timeframe: "3-7 years",
      description: "Higher yields but requires more capital and market knowledge"
    },
    {
      type: "Plot Investment",
      roi: "12-20%",
      risk: "High",
      timeframe: "3-5 years",
      description: "Potential for high returns but requires timing and location expertise"
    }
  ];

  return (
    <section className="bg-slate-800 py-16 border-y-2 border-blue-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Real Estate Investment Guide</h2>
          <p className="text-gray-400 text-lg">Master the art of real estate investment with expert insights and strategies</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {investmentTips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div key={index} className="bg-slate-900 p-8 rounded-none border-2 border-blue-500 hover:border-blue-400 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="bg-slate-800 p-3 rounded-none border border-blue-500">
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{tip.title}</h3>
                    <p className="text-gray-400 mb-4">{tip.description}</p>
                    <ul className="space-y-2">
                      {tip.tips.map((tipItem, tipIndex) => (
                        <li key={tipIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>{tipItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Investment Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentTypes.map((investment, index) => (
              <div key={index} className="bg-slate-900 p-6 rounded-none border-2 border-blue-500 hover:border-blue-400 transition-colors">
                <h4 className="text-xl font-bold text-white mb-4">{investment.type}</h4>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Expected ROI:</span>
                    <span className="text-blue-400 font-semibold">{investment.roi}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Risk Level:</span>
                    <span className={`font-semibold ${
                      investment.risk === 'Low' ? 'text-green-400' : 
                      investment.risk === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                    }`}>{investment.risk}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Timeframe:</span>
                    <span className="text-white font-semibold">{investment.timeframe}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{investment.description}</p>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-none border border-blue-400 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-none border-2 border-blue-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-3xl font-bold text-white">Investment Resources</h3>
              </div>
              <p className="text-gray-400 text-lg mb-6">
                Access comprehensive resources, market reports, and expert analysis to make informed investment decisions.
              </p>
              <ul className="space-y-3 text-gray-400 mb-6">
                <li className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-blue-400" />
                  <span>Monthly market reports and analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5 text-blue-400" />
                  <span>Investment calculators and tools</span>
                </li>
                <li className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-blue-400" />
                  <span>Expert webinars and workshops</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-none border-2 border-blue-400">
                  Download Guide
                </button>
                <button className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-none transition-colors">
                  Book Consultation
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-800 p-6 rounded-none border border-blue-500">
                <h4 className="text-xl font-bold text-white mb-2">Market Performance</h4>
                <div className="text-3xl font-bold text-blue-400 mb-2">+15.2%</div>
                <p className="text-gray-400 text-sm">Average annual growth in prime locations</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-none border border-blue-500 text-center">
                  <div className="text-2xl font-bold text-blue-400">₹500B+</div>
                  <div className="text-gray-400 text-sm">Transaction Volume</div>
                </div>
                <div className="bg-slate-800 p-4 rounded-none border border-blue-500 text-center">
                  <div className="text-2xl font-bold text-blue-400">50K+</div>
                  <div className="text-gray-400 text-sm">Investors Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentGuide;