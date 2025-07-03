export default function About() {
  return (
    <section id="about" className="px-8 py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
        About Me
      </h2>

      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-left">
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          👋 I’m <span className="text-cyan-400 font-semibold">Naman</span> — a
          full-stack developer with a taste for turning chaotic ideas into clean,
          functional web apps.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          I specialize in the <span className="text-cyan-400">MERN</span> stack,
          love crafting <span className="text-cyan-400">CLI tools</span>, and have a
          strong base in <span className="text-cyan-400">Java & Spring Boot</span>.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          Currently exploring <span className="text-cyan-400">Next.js</span>,
          <span className="text-cyan-400"> TypeScript</span>, and all things{" "}
          <span className="text-cyan-400">DevOps</span> — because shipping well matters.
        </p>

        <p className="text-gray-500 text-base leading-relaxed">
          When I’m not building or learning, I enjoy poetry and cricket — and
          sometimes both at the same time.
        </p>
      </div>
    </section>
  );
}
