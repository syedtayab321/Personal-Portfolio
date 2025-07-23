import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";

const ContactMe = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

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

  const buttonHover = {
    hover: {
      y: -5,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
      className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      {/* Contact Section */}
      <motion.div
        variants={container}
        className="flex flex-col items-center justify-center text-center py-20 px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={item} className="mb-12">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Let's Connect!
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <motion.p
          variants={item}
          className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
        >
          Feel free to reach out for collaborations, projects, or just to say
          hi! I'm always open to discussing new opportunities and creative
          ideas.
        </motion.p>

        {/* Contact Buttons */}
        <motion.div
          variants={container}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <motion.a
            whileHover="hover"
            whileTap="tap"
            variants={buttonHover}
            href="mailto:tayabsajid5@gmail.com"
            className="flex items-center gap-3 border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition-all text-lg"
          >
            <FaEnvelope className="text-2xl" />
            <span>Email Me</span>
            <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </motion.a>

          <motion.a
            variants={buttonHover}
            whileHover="hover"
            whileTap="tap"
            href="https://wa.me/+923365298230"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all text-lg"
          >
            <FaWhatsapp className="text-2xl" />
            <span>WhatsApp Me</span>
            <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={item} className="mb-12">
          <h3 className="text-xl text-gray-400 mb-6">Or find me on</h3>
          <div className="flex justify-center gap-6">
            <motion.a
              whileHover={{ y: -5, scale: 1.1, color: "#60a5fa" }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/syedtayab321"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 transition-colors"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, scale: 1.1, color: "#818cf8" }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/syed-tayyab-bukhari-485a0222b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 transition-colors"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gray-800/50 backdrop-blur-sm py-8 border-t border-gray-700"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <motion.p
            whileHover={{ scale: 1.02 }}
            className="text-sm text-gray-400 hover:text-white transition-colors mb-4 md:mb-0"
          >
            &copy; {new Date().getFullYear()} Tayyab Hussain. All rights
            reserved.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Crafted with <span className="text-blue-400">♥</span> in Pakistan
          </motion.div>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default ContactMe;