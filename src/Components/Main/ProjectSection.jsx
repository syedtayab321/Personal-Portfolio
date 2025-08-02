import { Link } from "react-router-dom";
import projects from "../../Utils/Projects";

const ProjectsSection = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-3">
            My Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my latest work, combining innovation and functionality.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400/30 transition-colors duration-200"
            >
              {/* Project Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.techStack.split(",").map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-700/80 text-blue-400 border border-blue-400/20"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* View Project Button */}
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center justify-center px-5 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 text-sm sm:text-base"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;