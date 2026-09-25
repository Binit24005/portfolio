import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Command, X } from 'lucide-react';
import { SITE_CONFIG } from '../../data/config';
import { useNavigate } from 'react-router-dom';

const SearchPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Filter projects based on query
  const filteredProjects = query.trim() === '' 
    ? [] 
    : SITE_CONFIG.projects.filter(project => 
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
        project.description.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < filteredProjects.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === 'Enter') {
        if (filteredProjects[selectedIndex]) {
          handleSelect(filteredProjects[selectedIndex]);
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredProjects, selectedIndex]);

  const handleSelect = (project) => {
    // Navigate to project detail if it exists, otherwise scroll to it
    if (project.id) {
      navigate(`/project/${project.id}`);
    } else {
        const element = document.getElementById('projects');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] cursor-pointer"
          />

          {/* Palette Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed top-[15%] left-1/2 -translate-x-1/2 w-[95%] max-w-2xl bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] z-[101] overflow-hidden font-inter"
          >
            {/* Input Wrapper */}
            <div className="flex items-center gap-4 p-5 border-b border-white/5">
              <Search className="w-5 h-5 text-white/30" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Search projects, stacks, tags..."
                className="flex-1 bg-transparent text-lg outline-none text-white placeholder:text-white/20"
              />
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-white/40 uppercase font-bold tracking-widest">
                <Command className="w-2.5 h-2.5" /> K
              </div>
              <button onClick={onClose} className="p-1 hover:bg-white/5 rounded-md transition-colors">
                <X className="w-5 h-5 text-white/30" />
              </button>
            </div>

            {/* Results Section */}
            <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
              {query.trim() === '' ? (
                <div className="p-10 text-center flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/20">
                    <Search className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-white/40">Type to search through my work</p>
                    <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">Projects · Experiments · Stack</p>
                  </div>
                </div>
              ) : filteredProjects.length > 0 ? (
                <div className="p-2">
                  <div className="px-4 py-2 text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Results</div>
                  {filteredProjects.map((project, index) => (
                    <div
                      key={project.id || index}
                      onMouseEnter={() => setSelectedIndex(index)}
                      onClick={() => handleSelect(project)}
                      className={`group flex items-center justify-between gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                        index === selectedIndex ? 'bg-white/10' : 'hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-4 overflow-hidden">
                        {project.image && (
                          <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10 flex-shrink-0">
                            <img src={project.image} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                          </div>
                        )}
                        <div className="overflow-hidden">
                          <h3 className="text-sm font-medium text-white truncate">{project.title}</h3>
                          <p className="text-xs text-white/40 truncate">{project.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                         {project.tags?.slice(0, 2).map(tag => (
                           <span key={tag} className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/30 lowercase">
                             {tag}
                           </span>
                         ))}
                         <ArrowRight className={`w-4 h-4 text-white/40 transition-transform ${index === selectedIndex ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-10 text-center text-white/40 text-sm">
                  No results found for "{query}"
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-white/5 bg-white/[0.02] flex items-center justify-between text-[10px] text-white/30 uppercase font-bold tracking-widest">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5"><kbd className="bg-white/5 px-1.5 py-0.5 rounded border border-white/10 text-white/60">↑↓</kbd> Navigate</span>
                <span className="flex items-center gap-1.5"><kbd className="bg-white/5 px-1.5 py-0.5 rounded border border-white/10 text-white/60">Enter</kbd> Select</span>
              </div>
              <span className="flex items-center gap-1.5"><kbd className="bg-white/5 px-1.5 py-0.5 rounded border border-white/10 text-white/60">Esc</kbd> Close</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchPalette;
