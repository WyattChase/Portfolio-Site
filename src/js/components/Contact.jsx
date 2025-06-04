import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import StarfieldBackground from "./Starfield-background";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import confetti from "canvas-confetti";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      await addDoc(collection(db, "contacts"), { name, email, message });
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent successfully!");
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      console.error("Error adding document: ", err);
      toast.error("Something went wrong. Try again later.");
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-white">
      <StarfieldBackground />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-xl bg-gradient-to-br from-gray-900 to-black bg-opacity-90 p-8 rounded-2xl shadow-2xl border border-teal-500"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-teal-400 animate-pulse">
          Contact Me
        </h2>
        <AnimatePresence>
          {submitted ? (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-green-700 text-white p-4 rounded text-center"
            >
              Thank you! Your message has been sent.
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label
                  className="block mb-2 text-sm font-semibold"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 hover:ring hover:ring-cyan-400 transition duration-200"
                  placeholder="Your Name"
                  required
                />
              </motion.div>
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label
                  className="block mb-2 text-sm font-semibold"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 hover:ring hover:ring-cyan-400 transition duration-200"
                  placeholder="you@example.com"
                  required
                />
              </motion.div>
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label
                  className="block mb-2 text-sm font-semibold"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-teal-500 hover:ring hover:ring-cyan-400 transition duration-200"
                  placeholder="Your message..."
                  required
                />
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full relative overflow-hidden bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 text-white font-semibold py-2 px-4 rounded shadow-lg transition-all duration-300 before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-10 before:animate-pulse"
              >
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </form>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 flex justify-center space-x-6 text-2xl text-white"
        >
          <a
            href="https://www.linkedin.com/in/jean-st-cloud/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-transform transform hover:scale-125 duration-300"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/WyattChase"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-transform transform hover:scale-125 duration-300"
          >
            <AiFillGithub />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
