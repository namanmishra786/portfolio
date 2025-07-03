import {
  Code2,
  Database,
  Server,
  GitBranch,
  Settings,
  TerminalSquare,
} from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiDocker,
  SiPostman,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

import { FaJava, FaCode } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="px-8 py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
        Skills
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {/* 👉 Frontend */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-cyan-400 font-semibold mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5" /> Frontend
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2"><SiReact /> React.js</li>
            <li className="flex items-center gap-2"><SiNextdotjs /> Next.js</li>
            <li className="flex items-center gap-2"><SiTailwindcss /> Tailwind CSS</li>
            <li className="flex items-center gap-2">HTML, CSS, JS</li>
          </ul>
        </div>

        {/* 👉 Backend */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-cyan-400 font-semibold mb-4 flex items-center gap-2">
            <Server className="w-5 h-5" /> Backend
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2"><SiNodedotjs /> Node.js</li>
            <li className="flex items-center gap-2"><SiExpress /> Express.js</li>
            <li className="flex items-center gap-2"><FaJava /> Java</li>
            <li className="flex items-center gap-2"><SiSpringboot /> Spring Boot</li>
          </ul>
        </div>

        {/* 👉 Database */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-cyan-400 font-semibold mb-4 flex items-center gap-2">
            <Database className="w-5 h-5" /> Database
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2"><SiMongodb /> MongoDB</li>
            <li className="flex items-center gap-2"><SiMysql /> MySQL</li>
          </ul>
        </div>

        {/* 👉 DevOps */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-cyan-400 font-semibold mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5" /> DevOps
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2"><SiDocker /> Docker Basics</li>
            <li className="flex items-center gap-2">CI/CD Concepts</li>
          </ul>
        </div>

        {/* 👉 Tools */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-cyan-400 font-semibold mb-4 flex items-center gap-2">
            <GitBranch className="w-5 h-5" /> Tools
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2"><GitBranch /> Git & GitHub</li>
            <li className="flex items-center gap-2"><SiPostman /> Postman</li>
            <li className="flex items-center gap-2"><FaCode /> VS Code</li>
          </ul>
        </div>

        {/* 👉 Other */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-cyan-400 font-semibold mb-4 flex items-center gap-2">
            <TerminalSquare className="w-5 h-5" /> Other
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2">REST APIs</li>
            <li className="flex items-center gap-2"><TerminalSquare className="w-4 h-4" /> CLI Tools</li>
            <li className="flex items-center gap-2">Open Source Basics</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
