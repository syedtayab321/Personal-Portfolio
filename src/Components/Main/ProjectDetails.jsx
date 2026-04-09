import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import projects from "../../Utils/Projects";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h2>
          <Link 
            to="/projects" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
          >
            <FiArrowLeft className="mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
          >
            <FiArrowLeft className="mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Project Image */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h1>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.split(",").map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md border border-gray-200 dark:border-gray-700"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-600 dark:text-gray-400 text-sm">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200"
                >
                  <FiExternalLink className="mr-2" />
                  Live Demo
                </a>
              )}

              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-md transition-colors duration-200"
                >
                  <FiGithub className="mr-2" />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;