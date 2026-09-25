import React from "react";
import { GoCode, GoIssueOpened, GoGitPullRequest, GoPlay, GoTable, GoShield, GoGraph } from "react-icons/go";

const HeaderLinks = ({ activeTab = "Code", setActiveTab }) => {
  const links = [
    { icon: <GoCode size={16} />, name: "Code", targetId: "readme-header" },
    { icon: <GoIssueOpened size={16} />, name: "Issues", targetId: "about" },
    { icon: <GoGitPullRequest size={16} />, name: "Pull Requests", targetId: "skills" },
    { icon: <GoPlay size={16} />, name: "Actions", targetId: "projects" },
    { icon: <GoTable size={16} />, name: "Projects", targetId: "experience" },
    { icon: <GoShield size={16} />, name: "Security", targetId: "contact" },
    { icon: <GoGraph size={16} />, name: "Insights", targetId: "contact" },
  ];

  return (
    <div className="flex items-center gap-1 overflow-x-auto select-none mt-2 scrollbar-none">
      {links.map((link) => {
        const isActive = activeTab === link.name;
        return (
          <button
            key={link.name}
            onClick={() => {
              setActiveTab && setActiveTab(link.name);
              const target = document.getElementById(link.targetId);
              if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-zinc-800/50 cursor-pointer transition-all duration-200 border-b-2 font-medium text-sm whitespace-nowrap ${
              isActive
                ? "border-orange-500 text-zinc-100"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <div>{link.icon}</div>
            <span>{link.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default HeaderLinks;
