import { FaGithub, FaDocker, FaFigma, FaCode } from "react-icons/fa";
import { SiPostman, SiVercel } from "react-icons/si";

export default function TechStack() {
  const tools = [
    { name: "VS Code", icon: <FaCode className="w-6 h-6" /> },
    { name: "GitHub", icon: <FaGithub className="w-6 h-6" /> },
    { name: "Vercel", icon: <SiVercel className="w-6 h-6" /> },
    { name: "Postman", icon: <SiPostman className="w-6 h-6" /> },
    { name: "Figma", icon: <FaFigma className="w-6 h-6" /> },
    { name: "Docker", icon: <FaDocker className="w-6 h-6" /> },
  ];

  return (
    <section id="techstack" className="px-8 py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
        Tech Stack & Tools
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
        Some of the tools I use daily to build, test, ship, and polish modern web projects.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex flex-col items-center justify-center p-6 border border-white/10 bg-white/5 rounded-lg backdrop-blur text-gray-300 hover:border-cyan-400 transition"
          >
            {tool.icon}
            <span className="mt-3">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
