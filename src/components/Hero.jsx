export default function Hero() {
  return (
    <section className="px-8 py-32 flex flex-col md:flex-row items-center justify-between text-left gap-12">
      {/* Left */}
      <div className="flex-1">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 animate__animated animate__fadeInDown">
          Hey, I’m <span className="text-cyan-400">Naman</span>.
        </h1>

        <p className="text-gray-400 text-lg max-w-xl leading-relaxed mb-6 animate__animated animate__fadeInUp animate__delay-1s">
          Full-stack developer turning messy ideas into clean code.
          MERN heavy, Java & Spring Boot roots, DevOps curious, open source brewing.
        </p>

        {/* ✅ Focus & Learning Boxes */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 animate__animated animate__fadeInUp animate__delay-2s">
          {/* Focus Box */}
          <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">🔧 Focus</h3>
            <ul className="list-disc list-inside ml-2 text-gray-400 text-sm space-y-1">
              <li>MERN</li>
              <li>Java & Spring Boot</li>
              <li>CLI Tools</li>
              <li>UI Polish</li>
            </ul>
          </div>

          {/* Learning Box */}
          <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
            <h3 className="text-white font-semibold mb-2">📚 Learning</h3>
            <ul className="list-disc list-inside ml-2 text-gray-400 text-sm space-y-1">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>DevOps</li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 animate__animated animate__fadeInUp animate__delay-3s">
          <a
            href="#contact"
            className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition"
          >
            Let’s Talk
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white/20 text-gray-300 rounded-full hover:bg-white hover:text-black transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right: Code Snippet */}
      <div className="flex-1 hidden md:flex justify-end animate__animated animate__fadeIn animate__delay-3s">
        <div className="bg-black/50 border border-white/10 rounded-xl p-6 font-mono text-sm text-left w-full max-w-md shadow-xl">
          <p className="text-green-400">const Naman = &#123;</p>
          <p className="ml-4 text-gray-300">
            role: <span className="text-cyan-400">"FullStack Dev"</span>,
          </p>
          <p className="ml-4 text-gray-300">
            stack: [<span className="text-cyan-400">"MERN", "Java", "Spring Boot", "Next.js", "TypeScript"</span>],
          </p>
          <p className="ml-4 text-gray-300">
            learning: [<span className="text-cyan-400">"DevOps"</span>],
          </p>
          <p className="ml-4 text-gray-300">
            openSource: <span className="text-cyan-400">true</span>
          </p>
          <p className="text-green-400">&#125;</p>
        </div>
      </div>
    </section>
  );
}
