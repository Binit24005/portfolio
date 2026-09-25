import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToogle from "../ui/ThemeToogle";
import { Search } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Work", href: "#projects" },
  { name: "Blog", href: "#blogs" },
  { name: "Resume", href: "https://drive.google.com/file/d/1c2fWx5AaKiqn87ds3BQsQeRq8ju6tGZx/view?usp=sharing" },
];

export default function Navbar({ onSearchClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 font-inter ${
        isScrolled ? "bg-background/40 backdrop-blur-xl py-3 border-b border-white/5" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
        {/* Left: Navigation Links with Magnetic Effect */}
        <nav className="flex gap-1 items-center relative" onMouseLeave={() => setHoveredLink(null)}>
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.name)}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground z-10"
            >
              <span className="relative z-10">{link.name}</span>
              {hoveredLink === link.name && (
                <motion.div
                  layoutId="navbar-hover"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                  className="absolute inset-0 bg-white/5 rounded-full z-0"
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right: Search and Theme Toggle */}
        <div className="flex items-center gap-4">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onSearchClick}
            className="hidden md:flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full text-muted-foreground text-xs border border-white/5 cursor-pointer hover:border-white/10 hover:bg-white/10 transition-all"
          >
            <Search className="w-3.5 h-3.5" />
            <div className="flex items-center gap-2">
              <span className="font-medium">Search</span>
              <kbd className="font-sans text-[10px] opacity-40 bg-white/10 px-1.5 py-0.5 rounded">Ctrl K</kbd>
            </div>
          </motion.div>
          <div className="w-px h-4 bg-white/10 mx-1 hidden md:block" />
          <ThemeToogle />
        </div>
      </div>
    </header>
  );
}
