import React from "react";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col">
      {/* Contact Section */}
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-3">
              Let's Connect!
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto" />
          </div>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I'm excited to collaborate on innovative projects or discuss new opportunities. Reach out to share your ideas or just say hello!
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:tayabsajid5@gmail.com"
              className="group flex items-center gap-2 border-2 border-blue-500 text-blue-400 px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-500/10 transition-colors duration-200 text-sm sm:text-base"
            >
              <FaEnvelope className="text-xl" />
              <span>Email Me</span>
              <FaArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://wa.me/+923365298230"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 border-2 border-purple-500 text-purple-400 px-6 py-2.5 rounded-lg font-semibold hover:bg-purple-500/10 transition-colors duration-200 text-sm sm:text-base"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp Me</span>
              <FaArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg text-gray-300 font-medium mb-4">Connect with me on</h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/syedtayab321"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <FaGithub />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/syed-tayyab-bukhari-485a0222b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <FaLinkedin />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800/50 py-6 border-t border-gray-700">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 text-sm">
          <p className="text-gray-400 hover:text-white transition-colors mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Syed Tayyab Hussain. All rights reserved.
          </p>
          <div className="text-gray-400 hover:text-white transition-colors">
            Crafted with <span className="text-blue-400">♥</span> in Pakistan
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactMe;