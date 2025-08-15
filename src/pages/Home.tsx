import Hero from '../components/home/Hero';
import FeaturedProperties from '../components/home/FeaturedProperties';
import WhyChooseUs from '../components/home/WhyChooseUs';
import PropertyTypes from '../components/home/PropertyTypes';
import SearchFilters from '../components/home/SearchFilters';
import Statistics from '../components/home/Statistics';
import Testimonials from '../components/home/Testimonials';
import LatestNews from '../components/home/LatestNews';
import CitiesWeServe from '../components/home/CitiesWeServe';
import HowItWorks from '../components/home/HowItWorks';
import PropertyCalculator from '../components/home/PropertyCalculator';
import ExpertAgents from '../components/home/ExpertAgents';
import TrendingAreas from '../components/home/TrendingAreas';
import InvestmentGuide from '../components/home/InvestmentGuide';
import MobileApp from '../components/home/MobileApp';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <SearchFilters />
      <FeaturedProperties />
      <PropertyTypes />
      <WhyChooseUs />
      <Statistics />
      <HowItWorks />
      <TrendingAreas />
      <PropertyCalculator />
      <ExpertAgents />
      <CitiesWeServe />
      <InvestmentGuide />
      <Testimonials />
      <LatestNews />
      <MobileApp />
      <Newsletter />
    </div>
  );
};

export default Home;