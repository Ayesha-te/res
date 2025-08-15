import { useState } from 'react';
import { Calculator, DollarSign, Home, TrendingUp, PieChart } from 'lucide-react';

const PropertyCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(12);
  const [loanTerm, setLoanTerm] = useState(20);

  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Property Tools & Calculators</h2>
          <p className="text-gray-400 text-lg">Make informed financial decisions with our comprehensive calculators</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-8 rounded-none border-2 border-blue-500">
            <div className="flex items-center mb-6">
              <Calculator className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Loan Calculator</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-white mb-2">Loan Amount (PKR)</label>
                <input
                  type="range"
                  min="1000000"
                  max="50000000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-blue-400 font-bold text-lg mt-2">
                  PKR {(loanAmount / 1000000).toFixed(1)}M
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Interest Rate (%)</label>
                <input
                  type="range"
                  min="8"
                  max="20"
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-blue-400 font-bold text-lg mt-2">{interestRate}%</div>
              </div>

              <div>
                <label className="block text-white mb-2">Loan Term (Years)</label>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-blue-400 font-bold text-lg mt-2">{loanTerm} Years</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-slate-900 rounded-none border border-blue-500">
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Monthly Payment</div>
                <div className="text-3xl font-bold text-blue-400">
                  PKR {Math.round(monthlyPayment).toLocaleString()}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-sm text-gray-400">Total Interest</div>
                  <div className="text-lg font-semibold text-white">
                    PKR {Math.round((monthlyPayment * numberOfPayments) - loanAmount).toLocaleString()}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400">Total Amount</div>
                  <div className="text-lg font-semibold text-white">
                    PKR {Math.round(monthlyPayment * numberOfPayments).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-800 p-6 rounded-none border-2 border-blue-500">
              <div className="flex items-center mb-4">
                <Home className="h-6 w-6 text-blue-400 mr-2" />
                <h4 className="text-xl font-bold text-white">Construction Cost Calculator</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Area (Sq Ft)</label>
                  <input className="w-full bg-slate-700 text-white p-2 rounded-none border border-blue-400" placeholder="2000" />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Rate per Sq Ft</label>
                  <input className="w-full bg-slate-700 text-white p-2 rounded-none border border-blue-400" placeholder="1200" />
                </div>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 mt-4 rounded-none border border-blue-400">
                Calculate Cost
              </button>
            </div>

            <div className="bg-slate-800 p-6 rounded-none border-2 border-blue-500">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-blue-400 mr-2" />
                <h4 className="text-xl font-bold text-white">ROI Calculator</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Purchase Price</label>
                  <input className="w-full bg-slate-700 text-white p-2 rounded-none border border-blue-400" placeholder="5000000" />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Current Value</label>
                  <input className="w-full bg-slate-700 text-white p-2 rounded-none border border-blue-400" placeholder="6000000" />
                </div>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 mt-4 rounded-none border border-blue-400">
                Calculate ROI
              </button>
            </div>

            <div className="bg-slate-800 p-6 rounded-none border-2 border-blue-500">
              <div className="flex items-center mb-4">
                <PieChart className="h-6 w-6 text-blue-400 mr-2" />
                <h4 className="text-xl font-bold text-white">Unit Converter</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <select className="bg-slate-700 text-white p-2 rounded-none border border-blue-400">
                  <option>Marla</option>
                  <option>Kanal</option>
                  <option>Sq Ft</option>
                  <option>Sq Yard</option>
                </select>
                <select className="bg-slate-700 text-white p-2 rounded-none border border-blue-400">
                  <option>Sq Ft</option>
                  <option>Sq Yard</option>
                  <option>Marla</option>
                  <option>Kanal</option>
                </select>
              </div>
              <input className="w-full bg-slate-700 text-white p-2 mt-3 rounded-none border border-blue-400" placeholder="Enter value" />
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 mt-4 rounded-none border border-blue-400">
                Convert
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-slate-800 p-8 rounded-none border-2 border-blue-500">
          <h3 className="text-2xl font-bold text-white text-center mb-8">More Financial Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-slate-900 rounded-none border border-blue-500">
              <DollarSign className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Affordability Calculator</h4>
              <p className="text-gray-400 text-sm mb-4">Calculate how much house you can afford based on your income</p>
              <button className="text-blue-400 hover:text-blue-300 font-semibold">Try Now →</button>
            </div>
            <div className="text-center p-6 bg-slate-900 rounded-none border border-blue-500">
              <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Investment Analysis</h4>
              <p className="text-gray-400 text-sm mb-4">Analyze potential returns on property investments</p>
              <button className="text-blue-400 hover:text-blue-300 font-semibold">Try Now →</button>
            </div>
            <div className="text-center p-6 bg-slate-900 rounded-none border border-blue-500">
              <Calculator className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Rent vs Buy</h4>
              <p className="text-gray-400 text-sm mb-4">Compare the costs of renting versus buying a property</p>
              <button className="text-blue-400 hover:text-blue-300 font-semibold">Try Now →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyCalculator;