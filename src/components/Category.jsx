import React from "react";
import SkillTag from "./SkillTag";

function Category({ heading, skills = [] }) {
  return (
    <div className="ml-2 mb-2">
      <h3 className="mb-2 text-xl font-semibold">{heading}:</h3>
      {skills.length ? (
        <div className="flex gap-2 flex-wrap mb-5">
          {skills.map((skill, index) => (
            <SkillTag key={index} tag={skill.name} recommendation={skill.recommendations} />
          ))}
        </div>
      ) : (
        <div>No skills found</div>
      )}
    </div>
  );
}

export default Category;
