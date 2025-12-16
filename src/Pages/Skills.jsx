import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiExpress, SiMysql } from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React JS", icon: FaReact, color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Figma", icon: SiFigma, color: "text-pink-400" },
  { name: "Node JS", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express JS", icon: SiExpress, color: "text-gray-300" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
];

export default function Skills() {
  return (
    <section className='relative py-28 bg-[#06070f] text-white overflow-hidden'>
      {/* Background Glows */}
      <div className='absolute -top-40 -left-40 w-[400px] h-[400px] bg-fuchsia-600/20 rounded-full blur-[120px]' />
      <div className='absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px]' />

      <div className='relative max-w-6xl mx-auto px-6'>
        {/* Heading */}
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-4'>
          My{" "}
          <span className='bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent'>
            Skills
          </span>
        </h2>
        <p className='text-gray-400 text-center mb-14'>
          Technologies I use to build modern & scalable web applications
        </p>

        {/* ROW 1 – Auto Scroll Left */}
        <div className='relative overflow-hidden mb-10'>
          <div className='flex gap-6 w-max animate-scroll-left hover:[animation-play-state:paused]'>
            {[...skills, ...skills].map((skill, i) => (
              <SkillCard key={`left-${i}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* ROW 2 – Auto Scroll Right */}
        <div className='relative overflow-hidden'>
          <div className='flex gap-6 w-max animate-scroll-right hover:[animation-play-state:paused]'>
            {[...skills, ...skills].map((skill, i) => (
              <SkillCard key={`right-${i}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Glassmorphism Skill Card Component
function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <div
      className='group relative min-w-[140px] rounded-2xl p-5
                 bg-white/5 border border-white/10 backdrop-blur-xl
                 flex flex-col items-center gap-3
                 hover:-translate-y-2 hover:shadow-lg
                 transition-all duration-300 ease-out'>
      {/* Glow */}
      <div
        className='absolute -inset-1 rounded-2xl 
                      bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 
                      blur-xl opacity-0 group-hover:opacity-100 transition'
      />

      <Icon
        className={`relative z-10 text-4xl ${skill.color} group-hover:scale-110 transition-transform`}
      />
      <span className='relative z-10 text-sm font-medium text-white/80'>
        {skill.name}
      </span>
    </div>
  );
}
