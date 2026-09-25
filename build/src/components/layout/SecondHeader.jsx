import React from "react";
import SecondHeaderOptions from "./SecondHeaderOptions";
import pic from "../../images/profile.png";

const SecondHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-zinc-800 gap-4">
      <div className="flex items-center gap-2">
        <div className="rounded-full overflow-hidden w-[24px] h-[24px] border border-zinc-700 flex-shrink-0">
          <img
            src={pic}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-zinc-200 text-lg font-semibold hover:underline cursor-pointer">
          portfolio
        </h1>
        <div className="border border-zinc-700 rounded-full px-2.5 py-0.5 text-zinc-400 text-[11px] font-medium">
          Public
        </div>
      </div>
      <SecondHeaderOptions />
    </div>
  );
};

export default SecondHeader;
