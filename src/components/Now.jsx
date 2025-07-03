export default function Now() {
  return (
    <section id="now" className="px-8 py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        What I’m Doing Now
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-6 leading-relaxed">
        Currently focusing on sharpening my DevOps skills, rebuilding <span className="text-cyan-400 font-medium">Muzi</span> with WebSockets, expanding <span className="text-cyan-400 font-medium">MovieMate</span> for movie lovers, and crafting <span className="text-cyan-400 font-medium">LightVault</span> — a local secrets CLI tool. Also learning Next.js & TypeScript along the way.
      </p>

      <div className="max-w-xl mx-auto mb-6">
        <ul className="list-disc list-inside text-left text-gray-400">
          <li>Learning Next.js, TypeScript & CI/CD</li>
          <li>Building Muzi (real-time voting)</li>
          <li>MovieMate (watchlist + reviews)</li>
          <li>LightVault (open-source CLI)</li>
          <li>Exploring DevOps pipelines</li>
        </ul>
      </div>

      <blockquote className="italic text-gray-500">
        “Mitti ka tan, masti ka man,  
        Kshan-bhar jeevan — mera parichay!”
      </blockquote>
    </section>
  );
}
