// components/ProjectCard.jsx
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
  className="flex flex-col h-full bg-blue-600 dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all"
  whileHover={{ scale: 1.03 }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
  {project.imageUrl && (
    <div className="aspect-video w-full mb-4 rounded-lg overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>
  )}

  <h3 className="text-2xl font-semibold mb-3 text-gray-100 dark:text-blue-400">
    {project.title}
  </h3>

  <p className="mb-3 text-gray-100 dark:text-gray-300 flex-grow">
    {project.description}
  </p>

  {project.tags && (
    <p className="text-sm text-teal-300 dark:text-teal-400 font-medium mb-3">
      Tech: {project.tags.join(", ")}
    </p>
  )}

  <div className="flex space-x-4 mt-auto">
    {project.demoUrl && (
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noreferrer"
        className="text-sm font-semibold text-cyan-300 hover:underline"
      >
        Live Demo
      </a>
    )}
    {project.githubUrl && (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="text-sm font-semibold text-purple-300 hover:underline"
      >
        Source Code
      </a>
    )}
  </div>
</motion.div>

  );
};

export default ProjectCard;
