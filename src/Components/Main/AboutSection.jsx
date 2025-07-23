import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image from './../../assets/images/own_image.jpeg';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* Image Section */}
        <motion.div 
          variants={imageVariants}
          whileHover="hover"
          className="lg:w-1/3 xl:w-2/5 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 blur-xl opacity-20 animate-pulse" />
            <img
              src={image}
              alt="Tayyab Hussain"
              className="w-full h-full object-cover rounded-2xl border-4 border-blue-500/30 shadow-2xl relative z-10"
            />
            <div className="absolute -inset-4 rounded-2xl border-2 border-blue-400/30 opacity-0 hover:opacity-100 transition-opacity duration-300 z-0" />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="lg:w-2/3 xl:w-3/5 text-center lg:text-left max-w-3xl"
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              About Me
            </span>
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Hello there! I'm <span className="text-blue-400 font-semibold">Tayyab Hussain</span>, a passionate <span className="text-purple-400 font-semibold">Software Engineer</span> specializing in creating modern, high-performing web and mobile applications.
            </p>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
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
                <span key={item.tech} className={`px-4 py-2 bg-gray-800/50 border ${item.color} rounded-full text-sm font-medium`}>
                  {item.tech}
                </span>
              ))}
            </div>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              I deliver seamless and efficient solutions tailored to client needs, combining technical excellence with creative problem-solving.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to="/projects"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                View My Work
              </Link>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;