import React from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000000]"
    >
      <div className="w-full max-w-lg md:max-w-2xl px-10">
        <DotLottieReact
          src="https://lottie.host/1da3397f-88c0-4b24-af00-df8194c067f1/3qbH3V0oet.lottie"
          loop
          autoplay
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="mt-8 text-center text-[10px] tracking-[0.4em] uppercase text-white font-mono"
        >
          Building intelligent things
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
