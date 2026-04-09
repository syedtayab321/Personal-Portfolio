import React from "react";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactMe = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Me",
      value: "tayabsajid5@gmail.com",
      link: "mailto:tayabsajid5@gmail.com",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp Me",
      value: "+92 316 0854067",
      link: "https://wa.me/+923160854067",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" />,
      name: "GitHub",
      link: "https://github.com/syedtayab321",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/syed-tayyab-bukhari-485a0222b",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <div className="flex-grow flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Let's Connect
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm excited to collaborate on innovative projects or discuss new opportunities. 
              Reach out to share your ideas or just say hello!
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith("http") ? "_blank" : undefined}
                rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center p-6 rounded-lg border ${method.borderColor} ${method.bgColor} hover:shadow-md transition-all duration-300`}
              >
                <div className={`${method.color} mr-4`}>
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {method.value}
                  </p>
                </div>
                <div className="text-gray-400 group-hover:translate-x-1 transition-transform duration-200">
                  →
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
              Or connect with me on social media
            </h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 text-gray-500 dark:text-gray-400 ${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 text-sm">
          <p className="text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Syed Tayyab Hussain. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
            Crafted with <span className="text-red-500">♥</span> in Pakistan
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ContactMe;