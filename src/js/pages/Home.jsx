// src/pages/Home.jsx
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import jaysax from "../../../public/assets/jaysax.jpg";
import StarfieldBackground from "../components/Starfield-background";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent text-gray-100">
      <StarfieldBackground />

      <main className="relative z-10 px-6 md:px-16 lg:px-32 transition-all">
        {/* NAVBAR */}
        <nav className="py-6 mb-12 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Jean St. Cloud</h1>
          <ul className="flex items-center space-x-4">
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-md"
                download
                href="/jeans-resume.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* HERO SECTION */}
        <section className="min-h-screen text-center py-10">
          <h2 className="text-5xl py-2 text-teal-500 font-semibold">Jean St. Cloud</h2>
          <h3 className="text-2xl py-2">Full Stack Developer & Game QA Engineer</h3>
          <p className="text-md py-4 leading-7 max-w-xl mx-auto text-blue-100">
            I design and build user-focused web apps while testing and improving
            game systems for quality. I’m passionate about building immersive
            and performant experiences through development and QA practices.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-10 text-4xl py-6">
            <a
              href="https://www.linkedin.com/in/jean-st-cloud/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="hover:text-blue-500 transition duration-300" />
            </a>
            <a
              href="https://github.com/WyattChase"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="hover:text-purple-500 transition duration-300" />
            </a>
          </div>

          {/* PROFILE IMAGE */}
          <div className="relative w-64 h-64 mx-auto mt-10 rounded-full overflow-hidden border-4 border-teal-400">
            <img
              src={jaysax}
              alt="Jean St. Cloud"
              className="object-cover w-full h-full"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
