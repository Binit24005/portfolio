import React from 'react';
import { motion } from 'framer-motion';

// ─── Update these items to match what YOU are actively building / learning ───
const items = [
  {
    title: "Personal Portfolio",
    tag: "Building",
    tagStyle: "build",
    date: "2025",
    desc: "Designing and building this site from scratch — React, Tailwind, and Framer Motion. Learning by doing.",
  },
  {
    title: "Frontend Development",
    tag: "Learning",
    tagStyle: "learn",
    date: "Ongoing",
    desc: "Deep-diving into React, animation libraries, and design systems. Shipping small projects weekly to sharpen the craft.",
  },
  {
    title: "Content Creation",
    tag: "Creating",
    tagStyle: "create",
    date: "Ongoing",
    desc: "Documenting the journey — sharing what I learn about building products, design, and the indie maker lifestyle.",
  },
];

const tagStyles = {
  build: "bg-blue-500/10 text-blue-500 border border-blue-500/30",
  learn: "bg-purple-500/10 text-purple-500 border border-purple-500/30",
  create: "bg-amber-500/10 text-amber-500 border border-amber-500/30",
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-background text-foreground"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="max-w-3xl mx-auto">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-[11px] tracking-widest uppercase text-muted-foreground mb-2"
        >
          / building in public
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06, duration: 0.5 }}
          className="text-4xl font-semibold italic text-foreground mb-2"
        >
          Just getting started.
        </motion.h2>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.12, duration: 0.4 }}
          className="text-sm text-muted-foreground mb-10"
        >
          No corporate history yet — but here's what I'm actively working on.
        </motion.p>

        {/* Divider */}
        <div className="h-px bg-border mb-10" style={{ width: "40%" }} />

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="border border-border rounded-2xl px-6 py-5 bg-background cursor-default
                         transition-colors hover:border-border/60"
            >
              <div className="flex items-center justify-between gap-3 mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-medium text-foreground">
                    {item.title}
                  </span>
                  <span
                    className={`text-[9px] tracking-wider px-2 py-0.5 rounded-full ${tagStyles[item.tagStyle]}`}
                  >
                    {item.tag}
                  </span>
                </div>
                <span
                  className="text-muted-foreground ml-auto text-[11px]"
                >
                  {item.date}
                </span>
              </div>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

          {/* Open to work */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.42, duration: 0.45 }}
            className="mt-2 border border-dashed border-border rounded-2xl px-6 py-5
                       flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="text-muted-foreground"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-medium text-foreground mb-0.5">
                Open to opportunities
              </p>
              <p className="text-[13px] text-muted-foreground">
                Internships, freelance, and collab projects. Let's build something together.
              </p>
            </div>
          </motion.div>

          {/* Spotify Playlist Embed */}
          <motion.div
            variants={cardVariants}
            className="mt-6 border border-border rounded-2xl overflow-hidden bg-[#121212]"
          >
            <div className="p-4 border-b border-border flex items-center justify-between">
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                Current Soundtrack
              </span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                ))}
              </div>
            </div>
            <iframe
              title="Spotify Embed: Recommendation Playlist"
              src={`https://open.spotify.com/embed/playlist/5RzGutHhpzwWNYkREkUNWp?utm_source=generator&theme=0`}
              width="100%"
              height="360"
              style={{ border: 'none' }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;