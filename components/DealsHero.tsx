
import React, { useState } from 'react';

const DealsHero: React.FC = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
      <div className="grid md:grid-cols-2 items-center">
        <div className="p-8 md:p-12">
          <div className="inline-block bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-base font-medium px-2 py-0.5 rounded-xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Welcome Offer
            </span>
          </div>
          <h1 className="font-display font-semibold text-gray-800 dark:text-white text-4xl lg:text-5xl mt-6 leading-tight tracking-tight">
            200% extra gold coins welcome offer
          </h1>
          <p className="mt-4 text-2xl text-gray-500 dark:text-gray-400">
            400,000 gold coins, plus free purchase benefits today 
          </p>
          <button className="mt-8 bg-[linear-gradient(90deg,#1AAE42,#049347)] text-white font-display font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity text-base tracking-wide">
            Accept Offer Now
          </button>
        </div>
        <div className="relative h-64 md:h-full min-h-[250px]">
          {!isImageLoaded && <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>}
          <img
            src="https://i.postimg.cc/8z7HgxPw/17a88654-b92d-4862-a14c-ba77f3fe9870.png"
            alt="Welcome offer with gold coins and prize tickets"
            className={`absolute bottom-0 max-w-[fit-content] right-0 h-[100%] w-auto md:h-[115%] transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default DealsHero;
