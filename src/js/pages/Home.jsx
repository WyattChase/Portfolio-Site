// src/pages/Home.jsx
import StarfieldBackground from "../components/Starfield-background";
import Hero from "../components/Hero";
import CanvasParticles from "../components/CanvasParticles";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-gray-100">
      <StarfieldBackground />
      
      <main className="relative z-10 px-6 md:px-16 lg:px-32 transition-all">
        <CanvasParticles />
        <Hero />
      </main>
    </div>
  );
}
