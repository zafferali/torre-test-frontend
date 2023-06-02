import React from 'react';

function SkillTag({tag}) {
  return (
    <div className='bg-gradient-to-r from-sky-500 to-indigo-500 text-slate-200 rounded-3xl text-lg px-4 py-1'>
       <p>{tag}</p>
    </div>
  )
}

export default SkillTag;
