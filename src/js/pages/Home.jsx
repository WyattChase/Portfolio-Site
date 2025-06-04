// src/pages/Home.jsx
import StarfieldBackground from "../components/Starfield-background";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-gray-100">
      <StarfieldBackground />

      {/* Hero already includes everything */}
      <main className="relative z-10 px-6 md:px-16 lg:px-32 transition-all">
        <Hero />
      </main>
    </div>
  );
}
