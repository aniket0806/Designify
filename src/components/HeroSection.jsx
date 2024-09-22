import Pic from  "../../asset/Pic1.jpg"
const HeroSection = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center p-8 md:p-16 bg-gray-50 w-full"
      style={{ height: 'calc(100vh - 4rem)' }} 
    >
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-4xl font-bold leading-tight ">Create and sell custom products</h1>
        <p className="text-lg text-gray-600">Easily create custom products and start selling today.</p>
        <div className="space-x-4">
          <button className="bg-violet-500 text-white px-6 py-3 rounded">Start for Free</button>
          <button className="text-black border border-violet-500 px-6 py-3 rounded">Learn More</button>
        </div>
      </div>
      <div className="  md:w-96 mt-8 md:mt-0  ">
        <img src={Pic} alt="Custom Products" />
      </div>
    </section>
  );
};

export default HeroSection;