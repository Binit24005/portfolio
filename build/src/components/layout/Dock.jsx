import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Home, User, Code, Mail, FileText } from "lucide-react";
import { cn } from "../../lib/utils";

// Individual Dock Icon
function DockIcon({ mouseX, icon: Icon, label, onClick }) {
  const ref = useRef(null);

  // Calculate distance from mouse to the center of this icon
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
    };

    return val - bounds.x - bounds.width / 2;
  });

  // Magnetic width effect
  const widthTransform = useTransform(
    distance,
    [-150, 0, 150],
    [40, 80, 40]
  );

  // Add smooth spring animation
  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.button
      ref={ref}
      type="button"
      style={{ width, height: width }}
      onClick={onClick}
      aria-label={label}
      className={cn(
        "aspect-square rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center relative group",
        "hover:bg-zinc-800 transition-colors"
      )}
    >
      {/* Icon */}
      <Icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />

      {/* Tooltip */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 w-auto px-2 py-1 rounded border border-zinc-800 bg-zinc-950 text-xs text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {label}
      </span>
    </motion.button>
  );
}

// Main Dock Component
export default function Dock() {
  const mouseX = useMotionValue(Infinity);

  // Scroll to a section by its ID
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const items = [
    {
      icon: Home,
      label: "Home",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      icon: User,
      label: "About",
      onClick: () => scrollToSection("about"),
    },
    {
      icon: Code,
      label: "Projects",
      onClick: () => scrollToSection("projects"),
    },
    {
      icon: FileText,
      label: "Resume",
      onClick: () => window.open("/Binit_Resume.pdf", "_blank"),
    },
    {
      icon: Mail,
      label: "Contact",
      onClick: () => scrollToSection("contact"),
    },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex h-16 items-end gap-4 rounded-2xl border border-zinc-800 bg-black/80 backdrop-blur-md px-4 pb-3"
      >
        {items.map((item, index) => (
          <DockIcon
            key={index}
            mouseX={mouseX}
            {...item}
          />
        ))}
      </motion.div>
    </div>
  );
}

