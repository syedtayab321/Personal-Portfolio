import { Link } from "react-router-dom";
import image from './../../assets/images/profile2.png';

const AboutSection = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Image Section */}
        <div className="lg:w-1/3 flex justify-center">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 blur-lg opacity-20" />
            <img
              src={image}
              alt="Tayyab Hussain"
              className="w-full h-full object-cover rounded-2xl border-4 border-blue-500/30 relative z-10"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-2/3 text-center lg:text-left max-w-3xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              About Me
            </span>
          </h2>

          <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Hello there! I'm <span className="text-blue-400 font-semibold">Tayyab Hussain</span>, a passionate <span className="text-purple-400 font-semibold">Software Engineer</span> specializing in creating modern, high-performing web and mobile applications.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              My tech stack includes:
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                { tech: 'React', color: 'text-blue-400 border-blue-400/20' },
                { tech: 'Django', color: 'text-green-400 border-green-400/20' },
                { tech: 'Laravel', color: 'text-red-400 border-red-400/20' },
                { tech: 'Next.js', color: 'text-gray-300 border-gray-600' },
                { tech: 'Flutter', color: 'text-cyan-400 border-cyan-400/20' },
                { tech: 'Node.js', color: 'text-green-500 border-green-500/20' }
              ].map((item) => (
                <span key={item.tech} className={`px-3 py-1.5 bg-gray-800/50 border ${item.color} rounded-full text-sm font-medium`}>
                  {item.tech}
                </span>
              ))}
            </div>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I deliver seamless and efficient solutions tailored to client needs, combining technical excellence with creative problem-solving.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
            <Link
              to="/projects"
              className="inline-block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 text-sm sm:text-base"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="inline-block px-6 py-2.5 bg-transparent border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-colors duration-200 text-sm sm:text-base"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;