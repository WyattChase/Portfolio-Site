// pages/Projects.jsx
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import ProjectCard from "../components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaClock,
  FaSortAlphaDown,
  FaTags,
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiFirebase } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
import StarfieldBackground from "../components/Starfield-background";

const tagIcons = {
  React: <FaReact className="text-cyan-500" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  HTML: <FaHtml5 className="text-orange-600" />,
  CSS: <FaCss3Alt className="text-blue-600" />,
  JavaScript: <FaNodeJs className="text-green-600" />,
  Python: <FaPython className="text-yellow-400" />,
  MongoDB: <SiMongodb className="text-green-700" />,
  Tailwind: <BiLogoTailwindCss className="text-blue-800" />,
};

const sortProjects = (projects, sortType, selectedTag) => {
  let filtered = [...projects];

  if (sortType === "Tags" && selectedTag !== "All") {
    filtered = filtered.filter((project) =>
      project.tags?.includes(selectedTag)
    );
  }

  switch (sortType) {
    case "Title":
      return filtered.sort((a, b) => a.title.localeCompare(b.title));
    case "Newest":
      return filtered.sort((a, b) => b.timestamp - a.timestamp);
    default:
      return filtered;
  }
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [sortType, setSortType] = useState("Newest");
  const [selectedTag, setSelectedTag] = useState("All");
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnap = await getDocs(collection(db, "projects"));
        const projectData = querySnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectData);

        const tags = new Set();
        projectData.forEach((p) => p.tags?.forEach((tag) => tags.add(tag)));
        setAllTags(["All", ...Array.from(tags)]);
      } catch (err) {
        console.error("Error loading projects:", err);
      }
    };
    fetchProjects();
  }, []);

  const sortedProjects = sortProjects(projects, sortType, selectedTag);

  const sortOptions = [
    { name: "Newest", icon: <FaClock className="mr-2" /> },
    { name: "Title", icon: <FaSortAlphaDown className="mr-2" /> },
    { name: "Tags", icon: <FaTags className="mr-2" /> },
  ];

  return (
    <section className="relative pt-36 px-6 min-h-screen bg-transparent text-gray-100 overflow-hidden">
      <StarfieldBackground />

      <div className="relative z-10 mb-10 text-center">
        <div className="inline-flex flex-wrap justify-center gap-4 bg-gray-300 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          {sortOptions.map(({ name, icon }) => (
            <button
              key={name}
              onClick={() => setSortType(name)}
              className={`flex items-center px-6 py-2 rounded text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                ${
                  sortType === name
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-700 text-gray-800 dark:text-blue-300 border border-gray-300 dark:border-gray-600"
                }`}
            >
              {icon}
              {name}
            </button>
          ))}

          {sortType === "Tags" && (
            <motion.select
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="px-4 py-2 rounded border bg-blue-900 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              {allTags.map((tag) => (
                <option
                  key={tag}
                  value={tag}
                  className="bg-blue-900 dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {tag}
                </option>
              ))}
            </motion.select>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <AnimatePresence>
          {sortedProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
              {project.tags && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 bg-blue-200 dark:bg-blue-600 text-blue-900 dark:text-blue-100 px-2 py-1 text-xs rounded-full"
                    >
                      {tagIcons[tag] || null}
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
