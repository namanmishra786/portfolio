import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BottomNav from "./components/BottomNav";
import Skills from "./components/Skills";
import Freelance from "./components/Freelance";
import TechStack from "./components/TechStack";
import Blog from "./components/Blog";
import Now from "./components/Now";

// ✅ Add this!
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 font-sans text-white">
      <div className="w-full max-w-5xl bg-white/5 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden border border-white/10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Freelance />
        <TechStack />
        <Blog />
        <Now />
        <Contact />
        <BottomNav />
      </div>

      {/* ✅ Add the toaster at the end */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
