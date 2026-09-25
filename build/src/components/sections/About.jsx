import React from 'react';
import { SITE_CONFIG } from '../../data/config';
import { ArrowUpRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background text-foreground overflow-hidden font-inter">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* ─── LEFT: PORTRAIT IMAGE ─── */}
        <div className="w-full md:w-[40%]">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-white/5">
            <img 
              src="/ChatGPT Image Apr 19, 2026, 11_00_41 PM.png" 
              alt="Portrait" 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* ─── RIGHT: CONTENT ─── */}
        <div className="w-full md:w-[60%] flex flex-col items-start text-left">
          
          {/* Badge */}
          <div className="mb-6 px-3 py-1 rounded-full bg-white/10 border border-white/5 text-[9px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
            About
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-medium leading-[1.1] tracking-tight mb-8">
            Building Intelligent <span className="text-foreground opacity-40">Things</span>
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
            {SITE_CONFIG.description}
          </p>

          {/* CTA: View Resume */}
          <a 
            href="/Binit_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold text-black transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: 'linear-gradient(45deg, #bef264, #a3e635)',
              boxShadow: '0 8px 25px -8px rgba(163, 230, 53, 0.4)'
            }}
          >
            View Resume
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
