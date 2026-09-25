import React from "react";
import { GoEye, GoRepoForked, GoStar, GoTriangleDown } from "react-icons/go";
import { SITE_CONFIG } from "../../data/config";

const SecondHeaderOptions = () => {
  const socialCount = Object.values(SITE_CONFIG.socials).filter(Boolean).length;
  const projectCount = SITE_CONFIG.projects.length;
  const experienceCount = SITE_CONFIG.experience.length;
  return (
    <div className="flex items-center gap-2 text-xs text-zinc-300">
      {/* Projects Button */}
      <a
        className="px-2 border py-1 border-zinc-700 flex items-center gap-1 rounded-md bg-zinc-800 hover:bg-zinc-700/80 transition-all duration-200"
        href="#projects"
      >
        <GoEye className="size-[16px] text-zinc-400" />
        <span>Projects</span>
        <span className="bg-zinc-700 text-zinc-300 rounded-full px-1.5 py-0.5 font-medium">
          {projectCount}
        </span>
        <GoTriangleDown className="size-[12px] text-zinc-400" />
      </a>

      {/* Experience Button */}
      <a
        className="px-2 border py-1 border-zinc-700 flex items-center gap-1 rounded-md bg-zinc-800 hover:bg-zinc-700/80 transition-all duration-200"
        href="#experience"
      >
        <GoRepoForked className="size-[16px] text-zinc-400" />
        <span>Experience</span>
        <span className="bg-zinc-700 text-zinc-300 rounded-full px-1.5 py-0.5 font-medium">
          {experienceCount}
        </span>
        <GoTriangleDown className="size-[12px] text-zinc-400" />
      </a>

      {/* Links Button */}
      <a
        className="px-2 border py-1 border-zinc-700 flex items-center gap-1 rounded-md bg-zinc-800 hover:bg-zinc-700/80 transition-all duration-200"
        href="#contact"
      >
        <GoStar className="size-[16px] text-zinc-400" />
        <span>Links</span>
        <span className="bg-zinc-700 text-zinc-300 rounded-full px-1.5 py-0.5 font-medium">
          {socialCount}
        </span>
        <GoTriangleDown className="size-[12px] text-zinc-400" />
      </a>
    </div>
  );
};

export default SecondHeaderOptions;
