import React from "react";
import { languages, frameworks } from "./SkillIcons";

type Props = {};

const Skills = () => {
  return (
    <div className="w-2/3 h-4/5 border-cyan-500 border-4 rounded-3xl m-auto p-40  bg-opacity-10  text-white text-lg ">
      <div>
        {" "}
        <span> Languages that I primarily use :-</span>
        <ul className="flex">
          {languages.map((language, index) => (
            <li>
              <img
                src={`${language.url}`}
                alt={language.name}
                className="h-10 w-10"
              />
            </li>
          ))}
        </ul>
      </div>

      <div>
        {" "}
        <span> Frameworks that assist me :-</span>
        <ul className="flex">
          {frameworks.map((framework, index) => (
            <li>
              <img
                src={`${framework.url}`}
                alt={framework.name}
                className="h-10 w-10"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
