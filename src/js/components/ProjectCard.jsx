// components/ProjectCard.jsx
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-blue-600 dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="mb-4 rounded-lg w-full h-48 object-cover"
        />
      )}
      <h3 className="text-2xl font-semibold mb-3 text-white dark:text-white">
        {project.title}
      </h3>
      <p className="mb-3 text-gray-700 dark:text-gray-300">
        {project.description}
      </p>
      {project.tags && (
        <p className="text-sm text-teal-600 dark:text-teal-400 font-medium mb-3">
          Tech: {project.tags.join(", ")}
        </p>
      )}
      <div className="flex space-x-4">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-purple-600 hover:underline"
          >
            Source Code
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
