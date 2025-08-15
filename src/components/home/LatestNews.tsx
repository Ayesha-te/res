
import { Calendar, User, ArrowRight, TrendingUp, MapPin, DollarSign } from 'lucide-react';

const LatestNews = () => {
  const news = [
    {
      id: 1,
      title: "Pakistan Real Estate Market Shows 15% Growth in Q4 2024",
      excerpt: "The Pakistani real estate market continues its upward trajectory with significant growth in major cities, driven by infrastructure development and increased investor confidence.",
      author: "Real Estate Analyst",
      date: "Dec 15, 2024",
      category: "Market Trends",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true
    },
    {
      id: 2,
      title: "New Housing Society Launches in Lahore with Modern Amenities",
      excerpt: "A premium housing project featuring smart homes, green spaces, and world-class facilities is set to transform the residential landscape in Lahore's prime location.",
      author: "Property News",
      date: "Dec 12, 2024",
      category: "New Launches",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    },
    {
      id: 3,
      title: "Islamabad Property Prices Surge 20% in Blue Area",
      excerpt: "Commercial and residential properties in Islamabad's Blue Area have experienced significant price appreciation due to high demand and limited supply.",
      author: "Market Reporter",
      date: "Dec 10, 2024",
      category: "Price Updates",
      image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    },
    {
      id: 4,
      title: "Government Announces New Real Estate Investment Incentives",
      excerpt: "The government has introduced new tax incentives and policies to encourage real estate investment and boost the construction sector across Pakistan.",
      author: "Policy Desk",
      date: "Dec 8, 2024",
      category: "Government Policy",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    },
    {
      id: 5,
      title: "Smart City Project in Karachi Attracts International Investors",
      excerpt: "A groundbreaking smart city development in Karachi has attracted significant international investment, promising to revolutionize urban living in Pakistan.",
      author: "Investment News",
      date: "Dec 5, 2024",
      category: "Investment",
      image: "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    },
    {
      id: 6,
      title: "Mortgage Rates Drop to Historic Lows, Boosting Home Buying",
      excerpt: "Pakistani banks have reduced mortgage rates to historic lows, making home ownership more accessible and driving increased demand in the residential sector.",
      author: "Finance Reporter",
      date: "Dec 3, 2024",
      category: "Finance",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    }
  ];

  const categories = ["All", "Market Trends", "New Launches", "Investment", "Government Policy"];

  return (
    <section className="bg-slate-800 py-16 border-y-2 border-blue-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Real Estate News</h2>
          <p className="text-gray-400 text-lg">Stay updated with the latest trends, market insights, and property news</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-none border-2 transition-colors ${
                index === 0 
                  ? 'bg-blue-500 border-blue-400 text-white' 
                  : 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {news.slice(0, 4).map((article) => (
                <article key={article.id} className="bg-slate-900 rounded-none border-2 border-blue-500 hover:border-blue-400 transition-colors group">
                  <div className="relative">
                    <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-500 text-white px-3 py-1 text-sm font-semibold rounded-none">
                        {article.category}
                      </span>
                    </div>
                    {article.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded-none">
                          FEATURED
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900 p-6 rounded-none border-2 border-blue-500">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <TrendingUp className="h-5 w-5 text-blue-400 mr-2" />
                Trending Stories
              </h3>
              <div className="space-y-4">
                {news.slice(4).map((article) => (
                  <div key={article.id} className="border-b border-slate-700 pb-4 last:border-b-0">
                    <h4 className="text-white font-semibold mb-2 hover:text-blue-400 cursor-pointer transition-colors">
                      {article.title}
                    </h4>
                    <div className="flex items-center text-sm text-gray-400 space-x-3">
                      <span>{article.date}</span>
                      <span>{article.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-none border-2 border-blue-500">
              <h3 className="text-xl font-bold text-white mb-6">Market Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-400" />
                    <span className="text-gray-400">Market Growth</span>
                  </div>
                  <span className="text-green-400 font-bold">+15%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-blue-400" />
                    <span className="text-gray-400">Active Cities</span>
                  </div>
                  <span className="text-white font-bold">100+</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-400">Avg. Investment</span>
                  </div>
                  <span className="text-white font-bold">₹2.5Cr</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-none border-2 border-blue-500">
              <h3 className="text-xl font-bold text-white mb-4">Newsletter Signup</h3>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest real estate news and market updates delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-slate-700 text-white p-3 rounded-none border border-blue-400"
                />
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-none border-2 border-blue-400">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-none transition-colors">
            View All News & Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;