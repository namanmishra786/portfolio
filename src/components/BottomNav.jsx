export default function BottomNav() {
  return (
    <nav className="flex justify-around px-6 py-4 border-t border-white/10">
      <a href="#home" className="hover:text-cyan-400">Home</a>
      <a href="#projects" className="hover:text-cyan-400">Projects</a>
      <a href="#contact" className="hover:text-cyan-400">Contact</a>
    </nav>
  );
}
