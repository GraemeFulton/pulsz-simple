import React from 'react';
import { FacebookIcon, InstagramIcon } from './icons';

const PromoBanners: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Facebook Banner */}
      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden p-8 flex flex-col justify-between h-48">
        <div className="absolute -right-16 -top-8 text-blue-100 opacity-50 dark:opacity-20">
            <FacebookIcon className="w-64 h-64" />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-800 dark:text-gray-200">Love Free Coins?</h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Join free promos every week</p>
        </div>
        <button className="relative z-10 w-full bg-[linear-gradient(-135deg,#fe139c,#c71cb8)] text-white font-semibold font-display py-3 rounded-xl text-lg hover:opacity-90 transition-transform hover:scale-105">
          Like us on Facebook
        </button>
      </div>

      {/* Instagram Banner */}
      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden p-8 flex flex-col justify-between h-48">
        <div className="absolute -right-12 -top-10 text-purple-100 opacity-60 dark:opacity-20">
             <InstagramIcon className="w-56 h-56" />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-800 dark:text-gray-200">Love Free Coins?</h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Join free promos every week</p>
        </div>
        <button className="relative z-10 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold font-display py-3 rounded-xl text-lg hover:opacity-90 transition-transform hover:scale-105">
          Follow us on Instagram
        </button>
      </div>
    </div>
  );
};

export default PromoBanners;