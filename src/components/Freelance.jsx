export default function Freelance() {
  return (
    <section id="freelance" className="px-6 py-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Freelance Work
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            I collaborate with founders, startups, and small teams to build clean,
            responsive web apps and landing pages that turn ideas into polished,
            high-converting products.
          </p>
          <ul className="list-disc pl-5 text-gray-400 space-y-2">
            <li>Custom frontend development</li>
            <li>SEO-friendly landing pages</li>
            <li>Bug fixes & optimizations</li>
            <li>UI polish & performance tuning</li>
          </ul>
          <a
            href="mailto:youremail@example.com"
            className="inline-block mt-8 px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-colors duration-300"
          >
            Let’s Work Together
          </a>
        </div>

        {/* Visual / Accent */}
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 opacity-80 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}
