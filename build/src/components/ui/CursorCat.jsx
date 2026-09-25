import React, { useEffect, useRef } from 'react';

/**
 * CursorCat - A React wrapper for the classic Oneko.js (cat following cursor).
 * Implementation based on adryd325's oneko.js.
 */
const CursorCat = () => {
  const nekoRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    // 1. Safety check: Disable only on very small screens
    const isSmallScreen = window.innerWidth < 600;
    if (isSmallScreen) {
      console.log("CursorCat: Screen too small, disabling.");
      return;
    }

    console.log("CursorCat: Initializing...");

    // 2. Prevent multiple initializations (React StrictMode safety)
    if (initialized.current) return;
    initialized.current = true;

    // --- Configuration ---
    const nekoFile = "https://raw.githubusercontent.com/adryd325/oneko.js/main/oneko.gif";
    const nekoSpeed = 6;
    const spriteSets = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
      scratchWallN: [[0, 0], [0, -1]],
      scratchWallS: [[-7, -1], [-6, -2]],
      scratchWallE: [[-2, -2], [-2, -3]],
      scratchWallW: [[-4, 0], [-4, -1]],
      tired: [[-3, -2]],
      sleeping: [[-2, 0], [-2, -1]],
      N: [[-1, -2], [-1, -3]],
      NE: [[0, -2], [0, -3]],
      E: [[-3, 0], [-3, -1]],
      SE: [[-5, -1], [-5, -2]],
      S: [[-6, -3], [-7, -2]],
      SW: [[-5, -3], [-6, -1]],
      W: [[-4, -2], [-4, -3]],
      NW: [[-1, 0], [-1, -1]],
    };

    // --- State ---
    let nekoPosX = 32;
    let nekoPosY = 32;
    let mousePosX = 0;
    let mousePosY = 0;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation = null;
    let idleAnimationFrame = 0;
    let lastFrameTimestamp;

    // --- DOM Setup ---
    const nekoEl = document.createElement("div");
    nekoRef.current = nekoEl;
    nekoEl.id = "oneko";
    nekoEl.ariaHidden = "true";
    nekoEl.style.width = "32px";
    nekoEl.style.height = "32px";
    nekoEl.style.position = "fixed";
    nekoEl.style.pointerEvents = "none";
    nekoEl.style.imageRendering = "pixelated";
    nekoEl.style.zIndex = "999999";
    nekoEl.style.backgroundImage = `url(${nekoFile})`;
    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
    document.body.appendChild(nekoEl);

    const onMouseMove = (event) => {
      mousePosX = event.clientX;
      mousePosY = event.clientY;
    };

    const setSprite = (name, frame) => {
      const sprite = spriteSets[name][frame % spriteSets[name].length];
      nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    };

    const resetIdleAnimation = () => {
      idleAnimation = null;
      idleAnimationFrame = 0;
    };

    const idle = () => {
      idleTime += 1;
      if (idleTime > 10 && Math.floor(Math.random() * 200) === 0 && idleAnimation === null) {
        let availableIdleAnimations = ["sleeping", "tired"];
        if (nekoPosX < 32) availableIdleAnimations.push("scratchWallW");
        if (nekoPosY < 32) availableIdleAnimations.push("scratchWallN");
        if (nekoPosX > window.innerWidth - 32) availableIdleAnimations.push("scratchWallE");
        if (nekoPosY > window.innerHeight - 32) availableIdleAnimations.push("scratchWallS");
        idleAnimation = availableIdleAnimations[Math.floor(Math.random() * availableIdleAnimations.length)];
      }

      switch (idleAnimation) {
        case "sleeping":
          if (idleAnimationFrame < 8) {
            setSprite("tired", 0);
            break;
          }
          setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 192) resetIdleAnimation();
          break;
        case "scratchWallW":
        case "scratchWallE":
        case "scratchWallN":
        case "scratchWallS":
        case "scratchSelf":
          setSprite(idleAnimation, idleAnimationFrame);
          if (idleAnimationFrame > 9) resetIdleAnimation();
          break;
        case "tired":
          setSprite("tired", 0);
          if (idleAnimationFrame > 9) resetIdleAnimation();
          break;
        default:
          setSprite("idle", 0);
          break;
      }
      idleAnimationFrame += 1;
    };

    const frame = () => {
      frameCount += 1;
      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      // reduced threshold for better follow responsiveness
      if (distance < nekoSpeed || distance < 24) { 
        idle();
        return;
      }

      idleAnimation = null;
      idleAnimationFrame = 0;

      if (idleTime > 1) {
        setSprite("alert", 0);
        idleTime = Math.min(idleTime, 7);
        idleTime -= 1;
        return;
      }

      let direction = "";
      direction += diffY > nekoSpeed / 2 ? "N" : "";
      direction += diffY < -nekoSpeed / 2 ? "S" : "";
      direction += diffX > nekoSpeed / 2 ? "W" : "";
      direction += diffX < -nekoSpeed / 2 ? "E" : "";
      setSprite(direction, frameCount);

      nekoPosX -= (diffX / distance) * nekoSpeed;
      nekoPosY -= (diffY / distance) * nekoSpeed;

      nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
      nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

      nekoEl.style.left = `${nekoPosX - 16}px`;
      nekoEl.style.top = `${nekoPosY - 16}px`;
    };

    const onAnimationFrame = (timestamp) => {
      if (!nekoEl.isConnected) return;
      if (!lastFrameTimestamp) lastFrameTimestamp = timestamp;
      
      // Further reduced frequency to ~10 FPS for a very "lazy" follow
      if (timestamp - lastFrameTimestamp > 100) { 
        lastFrameTimestamp = timestamp;
        frame();
      }
      window.requestAnimationFrame(onAnimationFrame);
    };

    // --- Listeners ---
    window.addEventListener("mousemove", onMouseMove);
    const animationFrameId = window.requestAnimationFrame(onAnimationFrame);

    // --- Cleanup ---
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.cancelAnimationFrame(animationFrameId);
      if (nekoEl && nekoEl.parentNode) {
        nekoEl.parentNode.removeChild(nekoEl);
      }
      initialized.current = false;
    };
  }, []);

  return null; // Component renders nothing directly
};

export default CursorCat;
