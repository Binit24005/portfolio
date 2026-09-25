import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SITE_CONFIG } from '../../data/config';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

// ─── Stagger Variants ───────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 70, damping: 14 }
  }
};

// ─── Component ──────────────────────────────────────────
export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-background font-inter">
      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-muted-foreground mb-10">
          Selected Work
        </p>
        {/* Staggered Card List */}
        <motion.div
          className="flex flex-col gap-16 md:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {SITE_CONFIG.projects.map((project, index) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);

            const mouseXSpring = useSpring(x);
            const mouseYSpring = useSpring(y);

            const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
            const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

            const handleMouseMove = (e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const width = rect.width;
              const height = rect.height;
              const mouseX = e.clientX - rect.left;
              const mouseY = e.clientY - rect.top;
              const xPct = mouseX / width - 0.5;
              const yPct = mouseY / height - 0.5;
              x.set(xPct);
              y.set(yPct);
            };

            const handleMouseLeave = () => {
              x.set(0);
              y.set(0);
            };

            return (
              <motion.div
                key={project.id || index}
                variants={cardVariants}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="group relative h-[220px] grid grid-cols-1 md:grid-cols-2 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.02]"
              >
                {/* ─── LEFT: TEXT ─── */}
                <div className="flex flex-col justify-between p-6 md:p-8 bg-card h-full" style={{ transform: "translateZ(20px)" }}>
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight text-foreground mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed max-w-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-mono text-muted-foreground/40 tracking-widest">
                      {project.year || '2025'}
                    </span>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2 border border-foreground text-foreground text-[10px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300 rounded-sm"
                      >
                        Live Demo
                        <ArrowUpRight size={12} />
                      </a>
                      <Link
                        to={`/project/${project.id}`}
                        className="flex items-center gap-2 px-5 py-2 border border-foreground text-foreground text-[10px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300 rounded-sm"
                      >
                        View Project
                        <ArrowUpRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ─── RIGHT: IMAGE ─── */}
                <div className="relative h-full overflow-hidden bg-gray-50" style={{ transform: "translateZ(10px)" }}>
                  <img
                    src={project.image || 'https://via.placeholder.com/800x600'}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Glass Shimmer */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};