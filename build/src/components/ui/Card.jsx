import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { SITE_CONFIG } from '../../data/config';

const Card = ({ project, index }) => {
  return (
    <div
      className="group flex flex-col h-full w-full max-w-md bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-400 cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* 1. Image Area (Top) - Clean edges */}
      <div className="w-full aspect-[16/10] overflow-hidden bg-gray-50 border-b border-gray-100">
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}
      </div>

      {/* 2. Content Area */}
      <div className="p-6 flex flex-col flex-1">
        
        {/* Header: Title & Arrow */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-black transition-colors">
            {project.title}
          </h3>
          {/* Arrow acts as a subtle micro-interaction */}
          <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
        </div>

        {/* Description: High legibility gray */}
        <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-1 font-medium">
          {project.description}
        </p>

        {/* Footer: Tech Tags & Socials */}
        <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100">
          
          {/* Tags: Pill shape, minimal gray */}
          {project.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-full bg-gray-100 text-gray-600 border border-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* GitHub Icon */}
          {SITE_CONFIG.socials.github && (
            <div className="text-gray-400 hover:text-black transition-colors">
              <Github className="w-5 h-5" />
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Card;