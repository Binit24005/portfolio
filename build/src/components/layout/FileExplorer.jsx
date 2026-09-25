import React from "react";
import {
  GoFileDirectoryFill,
  GoFile,
  GoGitCommit,
} from "react-icons/go";
import { SITE_CONFIG } from "../../data/config";

const FileExplorer = () => {
  const files = [
    {
      name: "README.md",
      type: "file",
      message: "docs: portfolio overview and contact details",
      date: "today",
      targetId: "readme-header",
    },
    {
      name: "projects/",
      type: "dir",
      message: `feat: showcase ${SITE_CONFIG.projects.length} featured builds`,
      date: "updated",
      targetId: "projects",
    },
    {
      name: "about/",
      type: "dir",
      message: "docs: add bio and current focus",
      date: "updated",
      targetId: "about",
    },
    {
      name: "experience/",
      type: "dir",
      message: `feat: list ${SITE_CONFIG.experience.length} active roles`,
      date: "updated",
      targetId: "experience",
    },
    {
      name: "contact/",
      type: "dir",
      message: "chore: refresh socials and resume link",
      date: "today",
      targetId: "contact",
    },
    {
      name: "config.js",
      type: "file",
      message: "chore: keep all site data in one place",
      date: "today",
      targetId: "readme-header",
    },
  ];

  // Scroll to the selected section
  const handleRowClick = (targetId) => {
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Allow keyboard navigation
  const handleKeyDown = (event, targetId) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleRowClick(targetId);
    }
  };

  return (
    <div className="border border-zinc-800 rounded-lg overflow-hidden bg-[#0d1117] text-zinc-300 text-sm font-sans mt-6">
      {/* Latest Commit Header */}
      <div className="flex items-center justify-between gap-4 p-3.5 bg-[#161b22] border-b border-zinc-800 text-xs">
        <div className="flex items-center gap-2 min-w-0">
          <div className="rounded-full overflow-hidden w-6 h-6 min-w-6 border border-zinc-700 bg-zinc-800 flex items-center justify-center">
            <span className="text-[10px] font-bold text-zinc-400">
              B
            </span>
          </div>

          <span className="font-semibold text-zinc-200 whitespace-nowrap">
            Binit Singh
          </span>

          <span className="text-zinc-400 hover:underline cursor-pointer truncate hidden sm:block">
            Redesign portfolio UI to look like GitHub repo
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-zinc-400 hover:text-blue-400 cursor-pointer flex-shrink-0">
          <GoGitCommit size={16} />

          <span className="font-mono text-zinc-300">
            a1b2c3d
          </span>

          <span>· 4 commits</span>
        </div>
      </div>

      {/* Files List */}
      <div className="divide-y divide-zinc-800">
        {files.map((file) => (
          <div
            key={file.name}
            role="button"
            tabIndex={0}
            onClick={() => handleRowClick(file.targetId)}
            onKeyDown={(event) =>
              handleKeyDown(event, file.targetId)
            }
            className="flex items-center justify-between gap-3 p-3 hover:bg-[#161b22]/50 cursor-pointer transition-colors duration-150 focus:outline-none focus:bg-[#161b22]/70"
          >
            {/* Name Column */}
            <div className="flex items-center gap-3 w-1/3 min-w-0">
              {file.type === "dir" ? (
                <GoFileDirectoryFill
                  size={16}
                  className="text-blue-400 flex-shrink-0"
                />
              ) : (
                <GoFile
                  size={16}
                  className="text-zinc-400 flex-shrink-0"
                />
              )}

              <span className="hover:underline hover:text-blue-400 font-medium truncate">
                {file.name}
              </span>
            </div>

            {/* Commit Message Column */}
            <div className="hidden md:block w-1/2 text-zinc-400 truncate pr-4 text-xs">
              {file.message}
            </div>

            {/* Date Column */}
            <div className="text-right text-zinc-500 text-xs w-20 flex-shrink-0">
              {file.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileExplorer;

