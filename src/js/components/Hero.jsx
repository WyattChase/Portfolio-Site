import { useState, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import profileImg from "../../../assets/jaysax.jpg";
import altlogo from "../../../assets/alt-jaysax.png";
import sparkleSound from "../../../assets/sparkle.wav";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);
  const sparkleRef = useRef(null);
  const audioRef = useRef(null);

  const handleHover = () => {
    setIsFlipped(true);
    setShowSparkle(true);
    audioRef.current?.play();
    setTimeout(() => setShowSparkle(false), 600); // hide sparkles after animation
  };

  const handleLeave = () => setIsFlipped(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white text-center px-6 py-20 relative z-10">
      {/* Audio */}
      <audio ref={audioRef} src={sparkleSound} preload="auto" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl font-bold mb-4 text-teal-400"
      >
        <Typewriter
          words={[
            "Jean St. Cloud",
            "Full Stack Developer",
            "Game QA Engineer",
            "Musician & Creator",
          ]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg md:text-2xl max-w-2xl mb-8 text-blue-100"
      >
        I build immersive apps, test games for quality, and blend creativity
        with code and sound.
      </motion.p>

      {/* Profile Image Flip using Framer Motion */}
      {/* Profile Image Flip using Framer Motion */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative w-52 h-52 mb-8"
        style={{ perspective: 1000 }}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Image Wrapper */}
          <div
            className="absolute w-full h-full rounded-full overflow-hidden border-4 border-teal-400 shadow-lg bg-black"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
            }}
          >
            <div className="w-full h-full">
              <img
                src={profileImg}
                alt="Jean St. Cloud"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Back Image Wrapper */}
          <div
            className="absolute w-full h-full rounded-full overflow-hidden border-4 border-teal-400 shadow-lg bg-black"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="w-full h-full">
              <img
                src={altlogo}
                alt="Pixel Jean"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Sparkle Layer */}
        <div
          ref={sparkleRef}
          className={`sparkle rounded-full pointer-events-none ${
            showSparkle ? "show" : ""
          }`}
        />
      </motion.div>

      {/* Social Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <Link
          href="/jeans-resume.pdf"
          target="_blank"
          locale={false}
          rel="noopener noreferrer"
          onClick={() => toast.success("Opening résumé...")}
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:opacity-90 text-white font-medium rounded shadow-md transition"
        >
          View Résumé
        </Link>

        <a
          href="https://www.linkedin.com/in/jean-st-cloud/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded shadow-md transition flex items-center gap-2"
        >
          <AiFillLinkedin className="text-xl" />
          LinkedIn
        </a>

        <a
          href="https://github.com/WyattChase/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded shadow-md transition flex items-center gap-2"
        >
          <AiFillGithub className="text-xl" />
          GitHub
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
