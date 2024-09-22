import React from 'react';
import { BsCurrencyDollar } from "react-icons/bs";
import { LuScaling } from "react-icons/lu";
import { AiOutlineDollar } from "react-icons/ai";
const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center space-y-2">
    <div className="text-green-500">{icon}</div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="grid md:grid-cols-3 gap-10 p-8 bg-white">
      <FeatureCard 
        icon={<BsCurrencyDollar />} 
        title="Higher Profits" 
        description="Keep more of your profits with low prices." 
      />
      <FeatureCard 
        icon={<LuScaling />} 
        title="Robust Scaling" 
        description="Easily scale your business with no upfront costs." 
      />
      <FeatureCard 
        icon={<AiOutlineDollar />} 
        title="Best Selection" 
        description="Access the largest variety of high-quality products." 
      />
    </section>
  );
};

export default FeaturesSection;
