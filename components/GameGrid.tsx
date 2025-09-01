

import React, { useRef, useState } from 'react';
import type { Game } from '../types';
import GameCard from './GameCard';
import GameDetailModal from './GameDetailModal';
import { GameControllerIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';

const ShowAllCard: React.FC = () => {
  return (
    <a href="#" className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 w-[135px] flex-shrink-0">
      <div className="relative rounded-xl group-hover:shadow-2xl transition-shadow shadow-md overflow-hidden aspect-[2/3] bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex flex-col items-center justify-center p-4 text-center">
        <div className="w-12 h-12 bg-white dark:bg-gray-900/50 rounded-xl flex items-center justify-center mb-2 transition-transform group-hover:scale-110 border border-gray-200 dark:border-gray-700">
          <ChevronRightIcon className="w-6 h-6 text-primary" />
        </div>
        <p className="font-bold text-gray-800 dark:text-gray-200">Show All</p>
      </div>
    </a>
  );
};

interface GameGridProps {
  title: string;
  games: Game[];
  icon?: React.ComponentType<{ className?: string }>;
}

const GameGrid: React.FC<GameGridProps> = ({ title, games, icon: Icon = GameControllerIcon }) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = direction === 'left' ? -scrollContainer.current.clientWidth : scrollContainer.current.clientWidth;
      scrollContainer.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      {selectedGame && <GameDetailModal game={selectedGame} onClose={() => setSelectedGame(null)} />}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
              <Icon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
          </div>
          <div className="flex items-center">
            <button onClick={() => scroll('left')} aria-label="Scroll left" className="p-2 rounded-l-full border border-r-0 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <ChevronLeftIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            </button>
            <button onClick={() => scroll('right')} aria-label="Scroll right" className="p-2 rounded-r-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <ChevronRightIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
        <div ref={scrollContainer} className="flex items-start space-x-3 overflow-x-auto pb-4 scrollbar-hide">
          {games.map((game) => (
            <GameCard key={game.id} game={game} onClick={() => setSelectedGame(game)} />
          ))}
          <ShowAllCard />
        </div>
      </section>
    </>
  );
};

export default GameGrid;