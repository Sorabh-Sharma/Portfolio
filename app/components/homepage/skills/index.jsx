// @flow strict

import { programmingSkills, webSkills, toolsSkills } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const subHeadings = [
  { label: "Programming & Core Concepts", skills: programmingSkills, direction: "left" },
  { label: "Web Development & Technologies", skills: webSkills, direction: "left" },
  { label: "Tools & Platforms", skills: toolsSkills, direction: "left" },
];

function SkillMarquee({ skills, direction }) {
  return (
    <Marquee
      gradient={false}
      speed={60}
      pauseOnHover={true}
      pauseOnClick={true}
      delay={0}
      play={true}
      direction={direction}
    >
      {skills.map((skill, id) => (
        <div
          className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
          key={id}
        >
          <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
            <div className="flex -translate-y-[1px] justify-center">
              <div className="w-3/4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 p-6">
              <div className="h-8 sm:h-10">
                <Image
                  src={skillsImage(skill)?.src}
                  alt={skill}
                  width={40}
                  height={40}
                  className="h-full w-auto rounded-lg"
                />
              </div>
              <p className="text-white text-sm sm:text-lg">{skill}</p>
            </div>
          </div>
        </div>
      ))}
    </Marquee>
  );
}

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Main heading — same style as Projects */}
      <div className="flex items-center justify-start relative my-5 lg:py-8">
        <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
          SKILLS
        </span>
        <span className="w-full h-[2px] bg-[#1a1443]"></span>
      </div>

      {/* Three sub-section rows */}
      <div className="flex flex-col gap-8 w-full mt-4">
        {subHeadings.map(({ label, skills, direction }) => (
          <div key={label} className="flex items-center gap-0">
            {/* Sub-heading label fixed on left */}
            <div className="flex-shrink-0 w-[220px] lg:w-[260px] flex items-center justify-end pr-4 lg:pr-6">
              <span className="text-violet-300 text-xs sm:text-sm font-semibold tracking-wider uppercase text-right leading-snug">
                {label}
              </span>
              <span className="ml-4 w-[2px] h-12 bg-gradient-to-b from-transparent via-violet-500 to-transparent flex-shrink-0" />
            </div>
            {/* Scrolling icons */}
            <div className="flex-1 overflow-hidden">
              <SkillMarquee skills={skills} direction={direction} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;