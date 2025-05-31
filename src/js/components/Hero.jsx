

// src/components/Hero.jsx
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-gray-800 text-white text-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome To my Portfolio Page! I am Jean.
      </h1>
      <p className="text-lg md:text-2xl mb-8">
        A Front-End Developer building engaging web experiences.
      </p>
      <div className="space-x-4">
        <a
          href="../../../public/assets/jeans-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded"
        >
          View Résumé
        </a>
        <a
          href="https://www.linkedin.com/in/jean-st-cloud/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/WyattChase/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};
export default Hero;
