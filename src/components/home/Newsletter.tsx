import React, { useState } from 'react';
import { Mail, CheckCircle, TrendingUp, FileText, Bell, Users } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    setEmail('');
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Weekly market trends and property price updates"
    },
    {
      icon: FileText,
      title: "Investment Tips",
      description: "Expert advice on real estate investment opportunities"
    },
    {
      icon: Bell,
      title: "New Listings",
      description: "First access to newly listed premium properties"
    },
    {
      icon: Users,
      title: "Community Updates",
      description: "News from our real estate community and forums"
    }
  ];

  return (
    <section className="bg-slate-800 py-16 border-t-2 border-blue-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <Mail className="h-10 w-10 text-blue-400 mr-4" />
              <h2 className="text-4xl font-bold text-white">Stay Informed</h2>
            </div>
            <p className="text-gray-400 text-lg mb-8">
              Subscribe to our newsletter and never miss out on the latest property deals, 
              market insights, and investment opportunities in Pakistan's real estate market.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-slate-900 p-2 rounded-none border border-blue-500 mt-1">
                      <Icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-none border-2 border-blue-500">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              Join 50,000+ Property Enthusiasts
            </h3>
            
            {subscribed ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-green-400 mb-2">Successfully Subscribed!</h4>
                <p className="text-gray-400">
                  Thank you for subscribing. You'll receive our latest updates soon.
                </p>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                  <div>
                    <label className="block text-white mb-2">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-slate-700 text-white p-4 rounded-none border-2 border-blue-400 focus:outline-none focus:border-blue-300"
                      required
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="marketing"
                      className="mt-1 w-4 h-4 text-blue-400 border-blue-400 rounded-none focus:ring-blue-400"
                      required
                    />
                    <label htmlFor="marketing" className="text-sm text-gray-400">
                      I agree to receive marketing communications and understand I can unsubscribe at any time.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-none border-2 border-blue-400 font-semibold transition-colors"
                  >
                    Subscribe to Newsletter
                  </button>
                </form>

                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-4">
                    Join our community and get exclusive access to:
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <span className="bg-slate-800 text-blue-400 px-3 py-1 rounded-none border border-blue-500">
                      Weekly Reports
                    </span>
                    <span className="bg-slate-800 text-blue-400 px-3 py-1 rounded-none border border-blue-500">
                      Price Alerts
                    </span>
                    <span className="bg-slate-800 text-blue-400 px-3 py-1 rounded-none border border-blue-500">
                      Expert Tips
                    </span>
                  </div>
                </div>
              </>
            )}

            <div className="mt-8 pt-6 border-t border-slate-700 text-center">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">50K+</div>
                  <div className="text-xs text-gray-400">Subscribers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">98%</div>
                  <div className="text-xs text-gray-400">Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">Weekly</div>
                  <div className="text-xs text-gray-400">Updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-900 p-8 rounded-none border-2 border-blue-500">
            <h3 className="text-2xl font-bold text-white mb-4">Follow Us on Social Media</h3>
            <p className="text-gray-400 mb-6">
              Stay connected with us on social media for daily updates, property tips, and community discussions.
            </p>
            <div className="flex justify-center space-x-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-none border border-blue-500 transition-colors">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-blue-600 text-xs font-bold">f</span>
                </div>
              </button>
              <button className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-none border border-blue-500 transition-colors">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-blue-400 text-xs font-bold">t</span>
                </div>
              </button>
              <button className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-none border border-blue-500 transition-colors">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-pink-600 text-xs font-bold">ig</span>
                </div>
              </button>
              <button className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-none border border-blue-500 transition-colors">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-blue-800 text-xs font-bold">in</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;