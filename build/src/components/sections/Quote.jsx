import React from 'react';

const Quote = () => {
  return (
    <section className="relative py-32 px-6 bg-black text-white overflow-hidden">
      {/* ─── VIDEO BACKGROUND with Seamless Masking ─── */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://videos.pexels.com/video-files/7762075/12111166_1920_1080_30fps.mp4" type="video/mp4" />
          <source src="https://www.pexels.com/download/video/7762075/" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-medium leading-[1.3] tracking-tight">
          <span className="text-white opacity-100">
            Creating products that not only look great but drive real
          </span>{' '}
          <span className="text-white opacity-100 font-bold underline decoration-white/20 underline-offset-8">results.</span>{' '}
          <span className="text-white opacity-40">
            No more one-sided wins — I create experiences that delight users and deliver business impact.
          </span>{' '}
          <span className="text-white opacity-100 font-bold">
            Let's build something that scales.
          </span>
        </h2>
      </div>
    </section>
  );
};

export default Quote;
