import React from "react";

function SkillTag({ tag, recommendation }) {
  return (
    <>
      <div class="relative flex flex-col items-center group">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-slate-200 rounded-3xl text-lg px-4 py-1">
          <p>{tag}</p>
        </div>
        <div class="absolute bottom-0 flex-col items-center hidden mb-10 group-hover:flex">
          <span class="relative z-10 p-2 text-xs leading-none rounded-md text-black whitespace-no-wrap bg-blue-300 shadow-lg">
            Recommendations: {recommendation}
          </span>
          <div class="w-3 h-3 -mt-2 rotate-45 bg-blue-300"></div>
        </div>
      </div>
    </>
  );
}

export default SkillTag;
