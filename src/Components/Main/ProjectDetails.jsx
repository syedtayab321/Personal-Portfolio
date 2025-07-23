import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import projects from "../../Utils/Projects";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageHover = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <h2 className="text-3xl font-semibold">Project Not Found</h2>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
      className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Back Button */}
      <motion.div variants={item} className="max-w-7xl mx-auto mb-8">
        <Link
          to="/projects"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-all group"
        >
          <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
      </motion.div>

      {/* Project Details Container */}
      <motion.div
        variants={container}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
      >
        {/* Left Side - Project Image Gallery */}
        <motion.div variants={item} className="space-y-4">
          {/* Main Image */}
          <motion.div
            whileHover="hover"
            variants={imageHover}
            className="rounded-xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-800"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-auto max-h-[500px] object-contain"
            />
          </motion.div>

          {/* Thumbnail Grid */}
          {project.images.length > 1 && (
            <motion.div variants={container} className="grid grid-cols-3 gap-3">
              {project.images.slice(1).map((img, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={imageHover}
                  className="rounded-lg overflow-hidden border border-gray-700 hover:border-blue-400/50 transition-colors bg-gray-800"
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-24 sm:h-28 object-cover cursor-pointer"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Right Side - Project Details */}
        <motion.div
          variants={container}
          className="flex flex-col justify-center space-y-6"
        >
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          >
            {project.title}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-gray-300 leading-relaxed"
          >
            {project.description}
          </motion.p>

          <motion.div variants={item}>
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.split(",").map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-gray-800/50 text-blue-400 text-sm font-medium border border-blue-500/20"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              Key Features
            </h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  className="flex items-start text-gray-300"
                >
                  <span className="text-blue-400 mr-2">•</span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4 pt-4">
            {project.liveLink && (
              <motion.a
                whileHover={{ y: -3, boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                <FiExternalLink /> Live Demo
              </motion.a>
            )}

            {project.repoLink && (
              <motion.a
                whileHover={{ y: -3, backgroundColor: "rgba(79, 70, 229, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-blue-500 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all"
              >
                <FiGithub /> View Code
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;