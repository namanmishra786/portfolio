// ✅ Import project images correctly from the /assets folder
import muziImage from "../assets/muzi.png";
import moviemateImage from "../assets/moviemate.png";
import lightvaultImage from "../assets/lightvault.png";
import crickscoreImage from "../assets/crickscore.png";
import freelance1Image from "../assets/tree1.png";
import freelance2Image from "../assets/lexi2.png";

export default function Projects() {
  // 👉 Featured Projects
  const featured = [
    {
      title: "Muzi",
      description: "Real-time playlist voting app with sockets & auth.",
      image: muziImage,
      demo: "#",
      code: "#",
    },
    {
      title: "MovieMate",
      description: "MERN movie tracker with public sharing & reviews.",
      image: moviemateImage,
      demo: "#",
      code: "#",
    },
    {
      title: "LightVault",
      description: "Open-source CLI tool for local secrets management.",
      image: lightvaultImage,
      demo: "#",
      code: "#",
    },
    {
      title: "CrickScore",
      description: "Cricket leaderboard & stats app for fans.",
      image: crickscoreImage,
      demo: "#",
      code: "#",
    },
  ];

  // 👉 Freelance Projects
  const freelance = [
    {
      title: "built a website for a client",
      description: "Clean responsive landing page for a small business.",
      image: freelance1Image,
      demo: "#",
      code: "#",
    },
    {
      title: "seo and landing page ui ",
      description: "Improved UI and performance for a client’s site.",
      image: freelance2Image,
      demo: "#",
      code: "#",
    },
  ];

  return (
    <section id="projects" className="px-8 py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
        Featured Projects & Freelance Work
      </h2>

      {/* 👉 Featured Projects */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
          Featured Projects
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          {featured.map((p, i) => (
            <div
              key={i}
              className="border border-white/10 bg-white/5 backdrop-blur p-4 rounded-xl text-left hover:border-cyan-400 transition shadow hover:shadow-cyan-500/20"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
              <p className="text-gray-400 mb-4">{p.description}</p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition text-sm"
                >
                  Live Demo
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-600 text-gray-300 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition text-sm"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 👉 Freelance Projects */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
          Freelance Projects
        </h3>
        <div className="grid gap-8 md:grid-cols-2">
          {freelance.map((p, i) => (
            <div
              key={i}
              className="border border-white/10 bg-white/5 backdrop-blur p-4 rounded-xl text-left hover:border-cyan-400 transition shadow hover:shadow-cyan-500/20"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
              <p className="text-gray-400 mb-4">{p.description}</p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition text-sm"
                >
                  Live Demo
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-600 text-gray-300 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition text-sm"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
