import React from "react";
import { GoSearch, GoTriangleDown, GoInbox, GoGitPullRequest, GoIssueOpened, GoPlus } from "react-icons/go";
import { SiGithub } from "react-icons/si";
import { RiMenuFill } from "react-icons/ri";
import { SITE_CONFIG } from "../../data/config";
import pic from "../../images/profile.png";
import ThemeToggle from "../ui/ThemeToogle";

const HeaderOptions = ({ onSearchClick }) => {
  const username = SITE_CONFIG.socials.github ? SITE_CONFIG.socials.github.split("/").pop() : "Binit24005";

  return (
    <div className="flex justify-between items-center text-sm font-sans">
      <div className="flex items-center gap-3.5">
        <span className="border p-1.5 rounded-md border-zinc-700 hover:bg-zinc-800/65 cursor-pointer transition-all duration-200">
          <RiMenuFill size={18} className="text-zinc-400" />
        </span>
        <span className="text-zinc-200">
          <SiGithub size={30} />
        </span>
        <div className="flex items-center gap-1 text-zinc-300">
          <span className="p-1 hover:bg-zinc-800/65 rounded-md cursor-pointer transition-all duration-200">
            {username}
          </span>
          <span className="text-zinc-500">{"/"}</span>
          <span className="font-semibold p-1 hover:bg-zinc-800/65 rounded-md cursor-pointer transition-all duration-200">
            portfolio
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3.5">
        {/* Search Bar triggering Search Palette */}
        <div 
          onClick={onSearchClick}
          className="relative max-w-[272px] min-w-[200px] cursor-pointer"
        >
          <div className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-400">
            <GoSearch size={16} />
          </div>
          <div className="w-full bg-[#010409] border border-zinc-700 rounded-md py-1.5 pl-8 pr-3 text-xs text-zinc-400 flex justify-between items-center hover:border-zinc-500 transition-all">
            <span>Search</span>
            <kbd className="font-sans text-[10px] opacity-40 bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-700">Ctrl K</kbd>
          </div>
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />

        <div className="border-l border-zinc-700 h-5" />

        <div className="flex items-center gap-2">
          <div className="p-1.5 flex items-center gap-1.5 border border-zinc-700 text-zinc-400 hover:bg-zinc-800/65 rounded-md cursor-pointer transition-all duration-200">
            <GoPlus size={16} />
            <GoTriangleDown size={16} />
          </div>
          <div className="p-1.5 border border-zinc-700 text-zinc-400 hover:bg-zinc-800/65 rounded-md cursor-pointer transition-all duration-200">
            <GoIssueOpened size={16} />
          </div>
          <div className="p-1.5 border border-zinc-700 text-zinc-400 hover:bg-zinc-800/65 rounded-md cursor-pointer transition-all duration-200">
            <GoGitPullRequest size={16} />
          </div>
          <div className="p-1.5 border border-zinc-700 text-zinc-400 hover:bg-zinc-800/65 rounded-md cursor-pointer transition-all duration-200">
            <GoInbox size={16} />
          </div>
        </div>

        <div className="cursor-pointer flex-shrink-0">
          <img
            src={pic}
            alt="avatar"
            className="size-[30px] rounded-full object-cover border border-zinc-700"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderOptions;
