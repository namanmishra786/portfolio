export default function Blog() {
  return (
    <section id="blog" className="px-8 py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">
        Notes & Blog
      </h2>

      <div className="space-y-8 max-w-3xl mx-auto text-left">
        <div className="p-6 border border-white/10 bg-white/5 rounded-xl backdrop-blur hover:border-cyan-400 transition">
          <h3 className="text-2xl font-semibold mb-2 text-cyan-400">
            Why I Switched to MERN
          </h3>
          <p className="text-gray-400 mb-3">
            Moving from Spring Boot to Express made my projects faster to build
            and easier to deploy.
          </p>
          <a
            href="#"
            className="text-sm text-cyan-400 hover:underline inline-flex items-center gap-1"
          >
            Read more →
          </a>
        </div>

        <div className="p-6 border border-white/10 bg-white/5 rounded-xl backdrop-blur hover:border-cyan-400 transition">
          <h3 className="text-2xl font-semibold mb-2 text-cyan-400">
            Lessons from Muzi
          </h3>
          <p className="text-gray-400 mb-3">
            Building a voting playlist app taught me a lot about real-time
            features, auth, and UI polish.
          </p>
          <a
            href="#"
            className="text-sm text-cyan-400 hover:underline inline-flex items-center gap-1"
          >
            Read more →
          </a>
        </div>
      </div>
    </section>
  );
}
