import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white relative overflow-hidden">
      {/* Background Overlay */}
      <motion.div 
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Animated floating circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-gold-500/20"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-gold-500/10"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-gold-500/15"
        animate={{
          y: [0, -15, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Content */}
      <motion.div
        className="relative text-center px-6 z-10 max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-gray-100"
          variants={itemVariants}
        >
          Transforming Ideas into Reality
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8"
          variants={itemVariants}
        >
          Elevating businesses with high-performance websites and cutting-edge Mobile apps.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          <motion.div variants={itemVariants}>
            <Link
              to="/projects"
              className="border-2 border-gold-500 px-6 py-3  text-yellow-400 font-semibold rounded-full hover:bg-white transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View My Work
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              to="/contact"
              className="border-2 border-gold-500 px-6 py-3  text-yellow-400 font-semibold rounded-full hover:bg-white transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </div>
  );
};

export default HeroSection;