
import React, { useState } from 'react';
import { navItems } from '../constants';
import type { NavItem } from '../types';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon, HamburgerMenuIcon, DarkModeIcon } from './icons';

const SidebarNavItem: React.FC<{ item: NavItem; isActive: boolean; onClick: () => void; isCollapsed: boolean; }> = ({ item, isActive, onClick, isCollapsed }) => (
  <li
    onClick={onClick}
    className={`flex items-center space-x-3 p-2 rounded-xl cursor-pointer transition-colors duration-200 ${
      isActive
        ? 'bg-primary/10 text-primary font-semibold'
        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200'
    } ${isCollapsed ? 'justify-center' : ''}`}
  >
    <item.icon className="h-6 w-6 shrink-0" />
    {!isCollapsed && <span>{item.name}</span>}
  </li>
);

const ToggleSwitch: React.FC<{ enabled: boolean; setEnabled: () => void }> = ({ enabled, setEnabled }) => (
  <button
    onClick={(e) => { e.stopPropagation(); setEnabled(); }}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
      enabled ? 'bg-primary' : 'bg-gray-300'
    }`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
        enabled ? 'translate-x-6' : 'translate-x-1'
      }`}
    />
  </button>
);


const Sidebar: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isIconLoaded, setIsIconLoaded] = useState(false);

  return (
    <aside className={`relative bg-gray-50/10 dark:border-gray-700 dark:bg-gray-900 border-gray-100 flex flex-col py-2 border-r shrink-0 transition-all duration-300 ${isCollapsed ? 'w-24' : 'w-64'}`}>
      <div className={`flex border-b dark:border-gray-700 border-gray-100 shadow-sm items-center p-2 px-4 mb-2 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-xl transition-colors"
        >
          <HamburgerMenuIcon className="h-6 w-6" />
        </button>
        {!isCollapsed && (
            <div className="flex items-center space-x-2">
                <DarkModeIcon className="h-6 w-6 text-gray-500 dark:text-gray-400"/>
                <ToggleSwitch enabled={theme === 'dark'} setEnabled={toggleTheme} />
            </div>
        )}
      </div>

      <nav className="m-2 mx-4 dark:bg-gray-800 bg-white p-4 rounded-xl border dark:border-gray-700 border-gray-200">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <SidebarNavItem 
              key={item.name} 
              item={item} 
              isActive={activeItem === item.name}
              onClick={() => setActiveItem(item.name)}
              isCollapsed={isCollapsed}
            />
          ))}
        </ul>
      </nav>

      <div className={`px-8 transition-all duration-300 ${isCollapsed ? 'opacity-0 h-0 pointer-events-none' : 'opacity-100'}`}>
          <button 
            onClick={() => window.location.hash = 'styleguide'}
            className="text-xs font-medium text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
          >
            Brand Book
          </button>
      </div>

      <div className={`mx-4 mt-auto transition-opacity duration-200 ${isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex items-center p-2">
          <button 
            onClick={() => alert('App install initiated!')}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-sm font-semibold text-primary border-2 border-primary rounded-xl hover:bg-primary/10 transition"
          >
            <div className="relative h-6 w-6">
              {!isIconLoaded && <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md"></div>}
              <img
                src="https://storage.googleapis.com/www.ysi-group.com/ysi-images/pwa_icon_pulsz.png"
                alt="PWA Icon"
                className={`h-6 w-6 rounded-md transition-opacity duration-500 ${isIconLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIsIconLoaded(true)}
              />
            </div>
            <span>Install App</span>
          </button>
        </div>
        <div className="flex items-center justify-center space-x-4 p-2 mt-2">
          <a href="#" className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"><FacebookIcon className="h-6 w-6"/></a>
          <a href="#" className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"><InstagramIcon className="h-6 w-6"/></a>
          <a href="#" className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"><TwitterIcon className="h-6 w-6"/></a>
          <a href="#" className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"><YoutubeIcon className="h-6 w-6"/></a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;