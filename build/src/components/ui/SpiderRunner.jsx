import React, { useEffect, useRef, useState } from 'react';

/**
 * SpiderRunner Component
 * A high-performance sprite animation component that follows the cursor.
 */
const SpiderRunner = ({
  spriteUrl = "/spider-run-stripe.png",
  frameWidth = 250,
  frameHeight = 250,
  totalFrames = 5,
  fps = 12,
  scale = 0.4,
}) => {
  const containerRef = useRef(null);
  const position = useRef({ x: 100, y: 100 });
  const mouse = useRef({ x: 100, y: 100 });
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;
    const speed = 0.08; // Easing speed

    const followMouse = () => {
      // Smoothly interpolate position towards mouse
      const dx = mouse.current.x - position.current.x;
      const dy = mouse.current.y - position.current.y;

      position.current.x += dx * speed;
      position.current.y += dy * speed;

      // Update Sprite Flip based on direction
      if (Math.abs(dx) > 1) {
        setFlip(dx < 0);
      }

      if (containerRef.current) {
        containerRef.current.style.left = `${position.current.x - (frameWidth * scale) / 2}px`;
        containerRef.current.style.top = `${position.current.y - (frameHeight * scale) / 2}px`;
      }

      animationFrameId = requestAnimationFrame(followMouse);
    };

    followMouse();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [frameWidth, frameHeight, scale]);

  const animationDuration = `${totalFrames / fps}s`;

  return (
    <div
      ref={containerRef}
      className="spider-runner-container"
      style={{
        position: 'fixed',
        zIndex: 999999,
        pointerEvents: 'none',
        width: frameWidth,
        height: frameHeight,
        transform: `scale(${scale}) scaleX(${flip ? -1 : 1})`,
        overflow: 'hidden',
        willChange: 'left, top'
      }}
    >
      <div
        className="spider-sprite"
        style={{
          width: frameWidth * totalFrames,
          height: frameHeight,
          backgroundImage: `url(${spriteUrl})`,
          backgroundSize: `${frameWidth * totalFrames}px ${frameHeight}px`,
          backgroundRepeat: 'no-repeat',
          animation: `spider-run ${animationDuration} steps(${totalFrames}) infinite`,
        }}
      />

      <style>{`
        @keyframes spider-run {
          from { background-position: 0px 0px; }
          to { background-position: -${frameWidth * totalFrames}px 0px; }
        }
      `}</style>
    </div>
  );
};

export default SpiderRunner;
