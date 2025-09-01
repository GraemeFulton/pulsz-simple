
import React, { useState } from 'react';
import type { Publisher } from '../types';

interface PublisherCardProps {
  publisher: Publisher;
}

const PublisherCard: React.FC<PublisherCardProps> = ({ publisher }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="flex-shrink-0 w-40 flex flex-col items-center space-y-2">
      <div className="relative bg-gray-100/70 dark:bg-gray-800 rounded-xl h-24 w-full flex items-center justify-center p-4 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
        {!isLoaded && <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl"></div>}
        <img
          src={publisher.logoUrl}
          alt={publisher.name}
          className={`max-h-full max-w-full object-contain transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className="w-full flex items-center space-x-1.5">
        <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
        <p className="text-xs text-gray-500 dark:text-gray-200 font-medium">
          <span className="font-bold">{publisher.playingCount.toLocaleString()}</span> playing
        </p>
      </div>
    </div>
  );
};

export default PublisherCard;