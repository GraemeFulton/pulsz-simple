
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DealsHero from './components/DealsHero';
import PromoBanners from './components/PromoBanners';
import GameGrid from './components/GameGrid';
import Publishers from './components/Publishers';
import { newGames, exclusiveGames, topGames, publishers } from './constants';
import StyleGuide from './components/StyleGuide';
import { NewIcon, VerifyIcon, TopGamesIcon } from './components/icons';

const MainApp: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => (
  <div className="bg-white dark:bg-gray-900 h-screen flex text-gray-800 dark:text-gray-300 overflow-hidden">
    <Sidebar theme={theme} toggleTheme={toggleTheme} />
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-[1200px] mx-auto">
          <div className="space-y-10">
            <PromoBanners />
            <GameGrid title="New Games" games={newGames} icon={NewIcon} />
            <GameGrid title="Exclusive Games" games={exclusiveGames} icon={VerifyIcon} />
            <Publishers publishers={publishers} />
            <GameGrid title="Top Games" games={topGames} icon={TopGamesIcon} />
            <DealsHero />
          </div>
        </div>
      </main>
    </div>
  </div>
);

const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  
  const getCurrentRoute = () => window.location.hash.replace(/^#/, '');
  const [route, setRoute] = useState(getCurrentRoute());

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getCurrentRoute());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  if (route === 'styleguide') {
    return <StyleGuide theme={theme} toggleTheme={toggleTheme} />;
  }

  return <MainApp theme={theme} toggleTheme={toggleTheme} />;
};

export default App;