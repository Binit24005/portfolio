import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Search } from 'lucide-react';
import { SITE_CONFIG } from '../../data/config';
import './Header.css';

export default function Header({ theme, onToggleTheme, onSearchClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner container">
        <nav className="header__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `header__link${isActive ? ' header__link--active' : ''}`}
          >
            Home
          </NavLink>
          <a
            href="/#projects"
            className="header__link"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Work
          </a>
          <a
            href="/#blogs"
            className="header__link"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('blogs')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Blog
          </a>
          <NavLink
            to="/games"
            className={({ isActive }) => `header__link${isActive ? ' header__link--active' : ''}`}
          >
            Games
          </NavLink>
          <a
            href={SITE_CONFIG.socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="header__link"
          >
            Resume
          </a>
        </nav>
        
        <div className="header__right">
          <button className="header__search" onClick={onSearchClick} aria-label="Search">
            <Search size={14} className="header__search-icon" />
            <span className="header__search-text">Search</span>
            <kbd className="header__search-kbd">Ctrl K</kbd>
          </button>
          
          <div className="header__divider" />
          
          <button
            className="header__toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}
