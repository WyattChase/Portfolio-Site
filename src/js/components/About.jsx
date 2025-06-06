// pages/About.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaUserAstronaut, FaGamepad, FaCode, FaMusic } from "react-icons/fa";
import StarfieldBackground from "./Starfield-background.jsx";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function About() {
  const scrollRef = useRef(null);

  const onButtonClick = async () => {
    const pdfUrl = "/jeans-resume.pdf";
    try {
      const res = await fetch(pdfUrl, { method: "HEAD" });
      if (res.ok) {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.download = "Jean-Software-Engineer-Resume.pdf";
        link.click();
        toast.success("Opening résumé...");
      } else {
        toast.error("PDF not found!");
      }
    } catch {
      toast.error("Could not load résumé.");
    }
  };

  // const onButtonClick = () => {
  //   // using PDF in public directory
  //   const pdfUrl = "/jeans-resume.pdf";
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "Jean-Software-Engineer-Resume.pdf"; // Specify the desired filename for download
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link); // Clean up the element
  // };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollSpeed = 1;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full px-6 pt-36 pb-20 bg-transparent text-gray-200">
      <div className="absolute inset-0 -z-10">
        <StarfieldBackground />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-center text-teal-500">
          About Me
        </h1>
        <p className="text-lg leading-8 mb-6">
          I’m Jean St. Cloud, a Game QA Analyst and Full Stack Developer based
          in Miami, FL. I build engaging digital experiences and test game
          mechanics to ensure quality and fun. Passionate about gaming, music,
          and code, I thrive at the intersection of creativity and technical
          problem-solving.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <FaUserAstronaut className="text-4xl text-purple-500 mb-3 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">
              Creative Technologist
            </h3>
            <p>
              Blending design, development, and storytelling into immersive
              projects.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <FaGamepad className="text-4xl text-red-500 mb-3 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Game QA & Design</h3>
            <p>
              Ensuring gameplay feels great with rigorous testing and feedback
              loops.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <FaCode className="text-4xl text-green-500 mb-3 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Full Stack Engineer</h3>
            <p>
              React, Firebase, Node.js, MongoDB — building scalable and
              responsive apps.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <FaMusic className="text-4xl text-yellow-400 mb-3 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Musician & Composer</h3>
            <p>
              Crafting sounds and melodies with saxophone and digital tools for
              games and web.
            </p>
          </div>
        </div>

        <div className="text-center mb-10">
          <button
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:opacity-90 text-white font-medium rounded shadow-md transition"
            onClick={onButtonClick}
          >
            Download PDF
          </button>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-teal-400 mb-4">
            Timeline of My Journey
          </h2>
          <div
            className="overflow-x-hidden scrollbar-hide"
            ref={scrollRef}
            style={{ scrollbarWidth: "none" }}
          >
            <ul className="flex space-x-8 pb-4">
              <li className="min-w-[200px] text-center">
                <p className="text-sm text-teal-300">2010</p>
                <p>
                  Started programming at Miami Dade College with C++ in Computer
                  Programming and Business Analytics.
                </p>
              </li>
              <li className="min-w-[200px] text-center">
                <p className="text-sm text-teal-300">2021</p>
                <p>Began self-learning JavaScript, HTML, and CSS.</p>
              </li>
              <li className="min-w-[200px] text-center">
                <p className="text-sm text-teal-300">2022</p>
                <p>
                  Started building games in Unreal and Unity. Continued
                  developing with React and Firebase, like the Instagram Clone.
                </p>
              </li>
              <li className="min-w-[200px] text-center">
                <p className="text-sm text-teal-300">2023</p>
                <p>
                  Completed Full Stack Bootcamp at 4Geeks Academy. Became an
                  Assistant Teacher after graduation.
                </p>
              </li>
              <li className="min-w-[200px] text-center">
                <p className="text-sm text-teal-300">2024</p>
                <p>
                  Participated in BiteCon AWS Developer sessions. Expanded QA
                  testing and full-stack skills including MongoDB and Express.
                </p>
              </li>
              <li className="min-w-[200px] text-center">
                <p className="text-sm text-teal-300">2025</p>
                <p>
                  Launched Loot & Chill, my gaming lounge and web concept.
                  Actively building game/music-dev experiences and applying for
                  roles in Game QA and Software Development.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
