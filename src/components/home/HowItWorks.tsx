
import { Search, Eye, FileCheck, Key } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Search Properties",
      description: "Browse through thousands of verified properties using our advanced search filters",
      step: "01"
    },
    {
      icon: Eye,
      title: "View & Compare",
      description: "View detailed property information, photos, and compare different options",
      step: "02"
    },
    {
      icon: FileCheck,
      title: "Documentation",
      description: "Complete legal verification and documentation with our expert assistance",
      step: "03"
    },
    {
      icon: Key,
      title: "Get Your Keys",
      description: "Complete the transaction and get the keys to your new property",
      step: "04"
    }
  ];

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-400 text-lg">Simple steps to find and buy your dream property</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="bg-slate-800 w-20 h-20 mx-auto rounded-none border-2 border-blue-500 flex items-center justify-center group hover:border-blue-400 transition-colors">
                    <Icon className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-blue-500 transform translate-x-4"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-slate-800 p-8 rounded-none border-2 border-blue-500">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Need Guidance?</h3>
            <p className="text-gray-400 text-lg mb-6 max-w-3xl mx-auto">
              Our experienced real estate professionals are here to guide you through every step of the process. 
              From property selection to final documentation, we ensure a smooth experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-none border-2 border-blue-400">
                Talk to Expert
              </button>
              <button className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-none">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;