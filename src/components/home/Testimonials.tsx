
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      location: "Lahore",
      property: "5 Marla House in DHA",
      rating: 5,
      comment: "We Sell made buying our dream house incredibly easy. The agent was professional, and the entire process was transparent. Highly recommended!",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Fatima Khan",
      location: "Karachi",
      property: "Apartment in Clifton",
      rating: 5,
      comment: "Excellent service! Found the perfect apartment within my budget. The team was very supportive throughout the buying process.",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Muhammad Ali",
      location: "Islamabad",
      property: "Commercial Plot",
      rating: 5,
      comment: "As an investor, I needed detailed market analysis. We Sell provided excellent insights that helped me make the right investment decision.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Sarah Ahmad",
      location: "Rawalpindi",
      property: "1 Kanal House",
      rating: 5,
      comment: "The plot finder tool was amazing! We could see exact locations and street views before visiting. Saved us so much time and effort.",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Usman Sheikh",
      location: "Faisalabad",
      property: "10 Marla House",
      rating: 5,
      comment: "Great experience selling my property through We Sell. Got the best price and the transaction was completed quickly with all legal support.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Ayesha Malik",
      location: "Multan",
      property: "Commercial Space",
      rating: 5,
      comment: "The community forum helped me connect with other investors and learn from their experiences. The platform is comprehensive and user-friendly.",
      image: "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-gray-400 text-lg">Real experiences from real customers who found their perfect properties</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-none border-2 border-blue-500 hover:border-blue-400 transition-colors">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative mb-4">
                <Quote className="h-6 w-6 text-blue-400 absolute -top-1 -left-1" />
                <p className="text-gray-300 pl-6 italic">"{testimonial.comment}"</p>
              </div>

              <div className="text-sm text-blue-400 font-semibold">
                Property: {testimonial.property}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-800 p-8 rounded-none border-2 border-blue-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Join Thousands of Satisfied Customers</h3>
              <p className="text-gray-400 text-lg mb-6">
                Our commitment to excellence has earned us the trust of over 100,000 customers across Pakistan. 
                Join our satisfied customer community today.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-slate-900 p-4 rounded-none border border-blue-500">
                  <div className="text-2xl font-bold text-blue-400">4.8/5</div>
                  <div className="text-gray-400 text-sm">Average Rating</div>
                </div>
                <div className="bg-slate-900 p-4 rounded-none border border-blue-500">
                  <div className="text-2xl font-bold text-blue-400">98%</div>
                  <div className="text-gray-400 text-sm">Satisfaction</div>
                </div>
                <div className="bg-slate-900 p-4 rounded-none border border-blue-500">
                  <div className="text-2xl font-bold text-blue-400">50K+</div>
                  <div className="text-gray-400 text-sm">Reviews</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-4">Share Your Experience</h4>
              <p className="text-gray-400 mb-6">
                Help others by sharing your experience with We Sell. Your feedback helps us serve better.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-none border-2 border-blue-400 mb-4">
                Write a Review
              </button>
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  Have a concern? <span className="text-blue-400 cursor-pointer hover:text-blue-300">Contact our support team</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;