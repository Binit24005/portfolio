import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Components from './Pages/Components';
import Games from './Pages/Games';
import Detailroute from './components/sections/Projects2/Detailroute';
import SearchPalette from './components/ui/SearchPalette';
import CursorCat from './components/ui/CursorCat';
import './index.css';
import './App.css';

export default function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const loader = document.getElementById('global-loader');
    if (!loader) return;

    loader.classList.add('fade-out');
    const timer = window.setTimeout(() => {
      loader.remove();
    }, 500);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle search palette on Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  return (
    <div className="app">
      <Header 
        theme={theme} 
        onToggleTheme={toggleTheme} 
        onSearchClick={() => setIsSearchOpen(true)} 
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/components" element={<Components />} />
          <Route path="/games" element={<Games />} />
          <Route path="/project/:id" element={<Detailroute />} />
        </Routes>
      </main>
      <Footer />
      <SearchPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      {location.pathname !== '/games' && <CursorCat />}
    </div>
  );
}
