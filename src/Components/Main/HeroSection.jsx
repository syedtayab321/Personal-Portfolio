import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import ProfileImage from './../../assets/images/profile.jpeg';

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "anticipate",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden px-4">
      {/* Abstract background elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Floating blobs */}
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-900/20 blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-purple-900/20 blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>

      {/* Content container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10 py-20">
        {/* Text content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-2 font-medium"
            variants={itemVariants}
          >
            Hi there, I'm
          </motion.p>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white"
            variants={itemVariants}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Syed Tayyab
            </span>
          </motion.h1>
          
          <motion.div 
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 min-h-[60px]"
            variants={itemVariants}
          >
            <TypeAnimation
              sequence={[
                'Software Engineer',
                1500,
                'Full Stack Developer',
                1500,
                'Mobile App Developer',
                1500,
                'Tech Enthusiast',
                1500
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400"
            />
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
            variants={itemVariants}
          >
            I create stunning digital experiences with cutting-edge technology and pixel-perfect design.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4 items-center"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <Link
                to="/projects"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span>View Portfolio</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <a
                href="https://wa.me/+923365298230"
                target="_blank"
                className="px-8 py-3 bg-gray-800/50 border border-gray-700 text-white font-semibold rounded-lg hover:bg-gray-700/50 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span>Contact Me</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Social links */}
          <motion.div 
            className="flex justify-center lg:justify-start gap-6 mt-10"
            variants={itemVariants}
          >
            {[
              { name: 'GitHub', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',link:'https://github.com/syedtayab321' },
              { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',link:'https://www.linkedin.com/in/syed-tayyab-bukhari-485a0222b' },
              { name: 'Twitter', icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' ,link:'https://github.com/syedtayab321'},
              { name: 'Dribbble', icon: 'M12 12c-2.03 0-3.899.67-5.407 1.8-.13-.102-.321-.204-.481-.275a.809.809 0 00-.828.172.81.81 0 00-.189.843c.035.095.078.187.126.276A6.728 6.728 0 005.5 12c0 .38.034.752.1 1.111-.1.031-.202.063-.305.094a.81.81 0 00-.587.963.81.81 0 00.963.587c.218-.063.42-.172.6-.316.172.495.4.963.679 1.395a6.654 6.654 0 01-3.172-1.387.81.81 0 00-1.152.1.81.81 0 00.1 1.152 8.349 8.349 0 004.6 1.49c.47 0 .934-.043 1.389-.126.218.403.47.783.753 1.137a6.728 6.728 0 01-2.732 1.93.81.81 0 00-.447 1.067.81.81 0 001.067.447 8.35 8.35 0 003.38-2.39 8.5 8.5 0 003.38 2.39.81.81 0 001.067-.447.81.81 0 00-.447-1.067 6.728 6.728 0 01-2.732-1.93c.283-.354.535-.734.753-1.137.455.083.92.126 1.389.126a8.349 8.349 0 004.6-1.49.81.81 0 00.1-1.152.81.81 0 00-1.152-.1 6.654 6.654 0 01-3.172 1.387c.28-.432.507-.9.679-1.395.18.144.382.253.6.316a.81.81 0 00.963-.587.81.81 0 00-.587-.963c-.103-.031-.205-.063-.305-.094.066-.36.1-.731.1-1.111 0-.38-.034-.752-.1-1.111.1-.031.202-.063.305-.094a.81.81 0 00.587-.963.81.81 0 00-.963-.587c-.16.071-.35.173-.481.275A6.728 6.728 0 0012 12zm0 0c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm0 0c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z' ,link:'https://github.com/syedtayab321'}
            ].map((social) => (
              <motion.a 
                key={social.name}
                href={social.link} 
                target="_blank"
                className="text-gray-500 hover:text-white transition-colors"
                whileHover={{ y: -3, color: '#ffffff' }}
                title={social.name}
              >
                <span className="sr-only">{social.name}</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 blur-xl opacity-20 animate-pulse" />
            <div className="relative h-full w-full rounded-2xl overflow-hidden border-4 border-gray-800/50 shadow-2xl">
              <img
                src={ProfileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent" />
            </div>
            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-blue-600/10 blur-lg"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-purple-600/10 blur-lg"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;