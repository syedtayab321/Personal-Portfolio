import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import projects from "../../Utils/Projects";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <h2 className="text-2xl font-semibold">Project Not Found</h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto mb-6">
        <Link
          to="/projects"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group text-sm sm:text-base"
        >
          <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
      </div>

      {/* Project Details Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        {/* Left Side - Main Image */}
        <div className="rounded-xl overflow-hidden border border-gray-700 bg-gray-800">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-auto max-h-[450px] object-contain"
            loading="lazy"
          />
        </div>

        {/* Right Side - Project Details */}
        <div className="flex flex-col justify-center space-y-5">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            {project.description}
          </p>

          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.split(",").map((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 rounded-full bg-gray-800/50 text-blue-400 text-sm font-medium border border-blue-500/20"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-2">
              Key Features
            </h3>
            <ul className="space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-300 text-sm sm:text-base">
                  <span className="text-blue-400 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 transition-colors text-sm sm:text-base"
              >
                <FiExternalLink /> Live Demo
              </a>
            )}

            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-blue-500 text-blue-400 px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-500/10 transition-colors text-sm sm:text-base"
              >
                <FiGithub /> View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;