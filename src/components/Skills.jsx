import React from 'react';
import { 
  SiNextdotjs, SiReact, SiTailwindcss, SiJavascript, 
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase,
  SiFigma, SiGit, SiPostman, SiVercel 
} from 'react-icons/si';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Crafting responsive, high-performance user interfaces.",
      skills: [
        { name: "Next.js", icon: <SiNextdotjs />, color: "hover:text-white" },
        { name: "React", icon: <SiReact />, color: "hover:text-[#61DAFB]" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "hover:text-[#38BDF8]" },
        { name: "JavaScript", icon: <SiJavascript />, color: "hover:text-[#F7DF1E]" },
      ]
    },
    {
      title: "Backend & Database",
      description: "Building secure APIs and scalable data structures.",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "hover:text-[#339933]" },
        { name: "Express", icon: <SiExpress />, color: "hover:text-gray-400" },
        { name: "MongoDB", icon: <SiMongodb />, color: "hover:text-[#47A248]" },
        { name: "Firebase", icon: <SiFirebase />, color: "hover:text-[#FFCA28]" },
      ]
    },
    {
      title: "Tools & Deployment",
      description: "Optimizing workflow and production environments.",
      skills: [
        { name: "Git", icon: <SiGit />, color: "hover:text-[#F05032]" },
        { name: "Vercel", icon: <SiVercel />, color: "hover:text-white" },
        { name: "Postman", icon: <SiPostman />, color: "hover:text-[#FF6C37]" },
        { name: "Figma", icon: <SiFigma />, color: "hover:text-[#F24E1E]" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#050505] text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2">Technical Arsenal</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Expertise & Tools</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-[#0f0f0f] border border-white/5 hover:border-blue-500/20 transition-all duration-500 group"
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                {category.description}
              </p>

              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className={`flex items-center gap-3 text-gray-500 transition-all duration-300 ${skill.color}`}
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Bottom Accent */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 italic">
            Currently exploring: <span className="text-white">Three.js, TypeScript, and Advanced Backend Architecture.</span>
          </p>
          <div className="flex -space-x-2">
             {/* Small status avatars or dots can go here */}
             <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;