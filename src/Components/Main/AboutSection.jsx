import { Link } from "react-router-dom";
import image from './../../assets/images/profile2.png';

const AboutSection = () => {
  const techStack = [
    { name: "React", color: "text-blue-600" },
    { name: "Next.js", color: "text-gray-600" },
    { name: "Django", color: "text-green-600" },
    { name: "Laravel", color: "text-red-600" },
    { name: "Flutter", color: "text-blue-500" },
    { name: "Node.js", color: "text-green-600" },
    { name: "TypeScript", color: "text-blue-600" },
    { name: "Python", color: "text-yellow-600" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative">
              {/* Simple Image Container */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt="Tayyab Hussain"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>

            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Hello there! I'm <span className="text-blue-600 dark:text-blue-400 font-semibold">Tayyab Hussain</span>, 
                a passionate <span className="text-blue-600 dark:text-blue-400 font-semibold">Software Engineer</span> 
                specializing in creating modern, high-performing web and mobile applications.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My tech stack includes:
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 py-2">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-3 py-1.5 bg-white dark:bg-gray-800 ${tech.color} text-sm font-medium rounded-md border border-gray-200 dark:border-gray-700`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I deliver seamless and efficient solutions tailored to client needs, combining 
                technical excellence with creative problem-solving. My focus is on creating 
                scalable, maintainable code that exceeds expectations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <Link
                to="/projects"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200"
              >
                View My Work
              </Link>
              
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-md transition-colors duration-200"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;