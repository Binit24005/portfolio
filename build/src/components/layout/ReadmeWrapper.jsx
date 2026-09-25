import React from "react";
import { GoBook, GoListUnordered, GoPencil } from "react-icons/go";

const ReadmeWrapper = ({ children }) => {
  return (
    <div id="readme-header" className="border border-zinc-800 rounded-lg overflow-hidden bg-[#0d1117] text-zinc-300 mt-6 font-sans">
      {/* README Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <GoListUnordered size={16} className="text-zinc-400 hover:text-zinc-200 cursor-pointer" />
          <GoBook size={16} className="text-zinc-400" />
          <span className="font-semibold text-sm text-zinc-200">README.md</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 border border-zinc-700 hover:bg-zinc-800 rounded-md text-zinc-400 hover:text-zinc-200 transition-colors">
            <GoPencil size={14} />
          </button>
        </div>
      </div>

      {/* README Content Area */}
      <div className="bg-background px-4 py-6 md:px-8 md:py-10">
        <div className="markdown-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ReadmeWrapper;
