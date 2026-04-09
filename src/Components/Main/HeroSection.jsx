import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileImage from './../../assets/images/profile2.png';

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Software Engineer",
    "React Specialist",
    "Full Stack Developer",
    "Cloud Architect"
  ];

  useEffect(() => {
    const currentRole = roles[textIndex];
    
    if (isDeleting) {
      if (charIndex > 0) {
        const timer = setTimeout(() => {
          setTypedText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % roles.length);
      }
    } else {
      if (charIndex < currentRole.length) {
        const timer = setTimeout(() => {
          setTypedText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setIsDeleting(true), 2000);
        return () => clearTimeout(timer);
      }
    }
  }, [charIndex, isDeleting, textIndex, roles]);

  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "30+", label: "Projects Completed" },
    { value: "15+", label: "Happy Clients" }
  ];

  const techStack = ["React", "Node.js", "Flutter", "TypeScript", "Python", "AWS", "MongoDB","Docker"];

  return (
    <section className="min-h-screen w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            {/* Greeting */}
            <div className="space-y-3">
              <p className="text-lg text-gray-600 dark:text-gray-400 font-medium tracking-wide">
                Hi, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Syed Tayyab
              </h1>
            </div>

            {/* Typing Animation */}
            <div className="h-16">
              <p className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300">
                <span className="border-r-2 border-blue-500 pr-1">
                  {typedText}
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              Crafting scalable, high-performance web applications with modern technologies. 
              Specialized in React, Node.js, and cloud architecture. 4+ years of experience 
              delivering enterprise-grade solutions.
            </p>

            {/* CTA Buttons */}
            {/* <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/projects"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                View Portfolio
              </Link>
              
              <a
                href="https://wa.me/+923365298230"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 border border-gray-200 dark:border-gray-700"
              >
                Let's Connect
              </a>
            </div> */}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="pt-4">
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-500 mb-3 tracking-wide">
                TECH STACK
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/syedtayab321"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/syed-tayyab-bukhari-485a0222b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Simple Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20" />
              
              {/* Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={ProfileImage}
                  alt="Syed Tayyab - Software Engineer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;