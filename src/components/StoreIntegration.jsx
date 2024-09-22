import React from 'react';

const StoreIntegration = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-center text-2xl font-semibold">Connect your store</h2>
      <p className="text-center text-gray-500">Easily integrate with the world's most popular platforms.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center mt-8">
        <img src="/logo1.png" alt="Shopify" className="h-12 mx-auto"/>
        <img src="/logo2.png" alt="Etsy" className="h-12 mx-auto"/>
        <img src="/logo3.png" alt="eBay" className="h-12 mx-auto"/>
        <img src="/logo4.png" alt="Wix" className="h-12 mx-auto"/>
      </div>
    </section>
  );
};

export default StoreIntegration;
