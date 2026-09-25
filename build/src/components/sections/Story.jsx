import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Story = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the background image
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  // Fade and scale for the text container
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [40, 0, 0, -40]);

  // Color transition for the main header (mapping from muted to bright)
  const headerColor = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.6, 0.9],
    ["rgba(255,255,255,0.1)", "rgba(255,255,255,1)", "rgba(255,255,255,1)", "rgba(255,255,255,0.1)"]
  );

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background py-32"
    >
      {/* Background Layer with Seamless Masking (Static Container) */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <motion.img 
          src="https://images.unsplash.com/photo-1635776063328-153b13e3c245?w=1200&auto=format&fit=crop&q=80" 
          alt="Atmospheric background"
          className="w-full h-[140%] object-cover opacity-40 absolute top-[-20%]"
          style={{ y: backgroundY }}
        />

        {/* Biometric Pulse Radial Glow */}
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(147,197,253,0.25)_0%,_rgba(0,0,0,0)_70%)]" 
        />
      </div>

      {/* Animated Text Content */}
      <motion.div 
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-muted-foreground text-sm md:text-base font-medium tracking-[0.4em] mb-8 uppercase opacity-60">
            I bring a sense of
          </p>

          <motion.h2 
            style={{ color: headerColor }}
            className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
          >
            Story, language & <br className="hidden md:block" /> visual awareness
          </motion.h2>

          <p className="text-muted-foreground text-lg md:text-xl font-medium tracking-tight">
            to my work
          </p>
        </motion.div>
      </motion.div>

      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />
    </section>
  );
};

export default Story;
