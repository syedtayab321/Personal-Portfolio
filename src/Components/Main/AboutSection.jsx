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
      backgroundColor: "rgba(212, 175, 55, 0.1)",
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Left Side - Image */}
      <motion.div 
        variants={imageVariants}
        whileHover="hover"
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
      >
        <div className="relative">
          <img
            src={image}
            alt="About Me"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-4 border-yellow-600 shadow-xl object-cover relative z-10"
          />
          <div className="absolute inset-0 rounded-full bg-yellow-600 blur-md opacity-30 animate-pulse"></div>
          <div className="absolute -inset-2 rounded-full border-4 border-yellow-400 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </motion.div>

      {/* Right Side - Content */}
      <motion.div 
        className="md:w-1/2 text-center md:text-left px-4 sm:px-6 max-w-2xl"
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"
        >
          About Me
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed"
        >
          Hello There I am Tayyab Hussain a passionate <span className="text-yellow-400 font-semibold">Software Engineer</span> specializing in creating modern,
          high-performing web and mobile applications. With expertise in both frontend
          and backend technologies, I transform ideas into stunning digital experiences.
        </motion.p>

        <motion.p 
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed"
        >
          My tech stack includes <span className="text-yellow-400 font-semibold">React</span>, <span className="text-yellow-400 font-semibold">Django</span>, <span className="text-yellow-400 font-semibold">Laravel</span>, <span className="text-yellow-400 font-semibold">Next.js</span>, and <span className="text-yellow-400 font-semibold">Flutter</span>, ensuring
          seamless and efficient solutions tailored to client needs.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center md:justify-start gap-4"
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              to="/projects"
              className="inline-block border-2 border-yellow-500 px-6 py-3 text-yellow-500 font-semibold rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300"
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
              className="inline-block border-2 border-yellow-500 px-6 py-3 text-yellow-500 font-semibold rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;