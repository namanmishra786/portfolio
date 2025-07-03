export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-white/10 bg-white/5 backdrop-blur-md rounded-t-3xl">
      <div className="text-xl font-bold tracking-tight text-white">
        Naman
      </div>
      <div className="space-x-6 text-sm text-gray-300">
        <a href="#about" className="hover:text-cyan-400 transition">About</a>
        <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
        <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
      </div>
    </nav>
  );
}
