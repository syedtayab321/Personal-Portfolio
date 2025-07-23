import { FaBriefcase, FaTools, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    company: "mimAR | 3D Architectural Visualization Company",
    role: "Software Developer (Onsite)",
    duration: "June 2025 - Present",
    description:
      "Led the development of architectural visualization web applications at mimAR | 3D Architectural Visualization Company in Islamabad, utilizing Flutter and Node.js. Designed and implemented scalable backend solutions, and collaborated with cross-functional teams.",
  },
  {
    company: "Mecarvi Prints",
    role: "Frontend Developer (Part-Time)",
    duration: "Jan 2025 - July 2025",
    description:
      "Developed responsive and user-friendly web interfaces using React. Collaborated with design teams to implement visually appealing UI components and optimized front-end performance.",
  },
  {
    company: "FalconXoft",
    role: "Full Stack Developer",
    duration: "Jan 2025 - March 2025",
    description:
      "Led development of enterprise web applications using React, Next.js, and Django. Architected scalable backend solutions and mentored junior developers.",
  },
  {
    company: "Fiver/Upwork",
    role: "Flutter App Developer",
    duration: "Jan 2021 - Present",
    description:
      "Developed mobile applications using Flutter, Firebase and Node.js. Focused on performance optimization and responsive UI/UX design.",
  },
  {
    company: "CsEra Pvt Ltd",
    role: "Full Stack Developer",
    duration: "June 2023 - Feb 2024",
    description:
      "Developed Full Stack Web and mobile applications using React, Next.js, Node.js, Django, Laravel, Flutter, and Firebase. Implemented CI/CD pipelines and optimized database performance.",
  },
  {
    company: "First Light - UAE Based Company",
    role: "Flutter App Developer",
    duration: "May 2024 - Nov 2024",
    description:
      "Built cross-platform mobile applications with Flutter, integrated RESTful APIs, and implemented Firebase authentication and real-time database solutions.",
  },
];

const skills = [
  { name: "Project Management", percentage: 85 },
  { name: "React.js", percentage: 90 },
  { name: "Next.js", percentage: 90 },
  { name: "Django", percentage: 85 },
  { name: "Laravel", percentage: 75 },
  { name: "Flutter", percentage: 90 },
  { name: "Firebase", percentage: 85 },
  { name: "MySQL/PostgreSQL", percentage: 85 },
  { name: "Bootstrap/Tailwind", percentage: 90 },
];

const technologies = [
  "React",
  "Next.js",
  "Django",
  "Laravel",
  "Flutter",
  "Firebase",
  "Node.js",
  "GraphQL",
  "Docker",
  "AWS",
  "Git",
  "CI/CD",
  "REST APIs",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Material UI",
  "Redux",
  "TypeScript",
];

const ExperienceSkills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

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

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: {
        duration: 1.5,
        type: "spring",
        damping: 10,
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Experience & Skills
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Experience Section */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-400 rounded-full filter blur-3xl opacity-10"></div>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="bg-gray-900 p-4 rounded-lg border border-blue-400/30">
                    <FaBriefcase className="text-blue-400 text-3xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {exp.company}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm font-medium">
                      {exp.role}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Skills Progress Bars */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-3xl font-semibold text-blue-400 mb-8 flex items-center gap-4"
              whileHover={{ x: 5 }}
            >
              <div className="p-3 bg-blue-400/10 rounded-lg">
                <FaTools className="text-blue-400 text-2xl" />
              </div>
              Technical Skills
            </motion.h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-blue-400 font-medium">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <motion.div
                      custom={skill.percentage}
                      variants={progressBarVariants}
                      initial="hidden"
                      animate="visible"
                      className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies Badges */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-3xl font-semibold text-purple-400 mb-8 flex items-center gap-4"
              whileHover={{ x: 5 }}
            >
              <div className="p-3 bg-purple-400/10 rounded-lg">
                <FaCode className="text-purple-400 text-2xl" />
              </div>
              Tools & Technologies
            </motion.h3>

            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
            >
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                    backgroundColor: "rgba(99, 102, 241, 0.2)",
                  }}
                  className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-700 cursor-default hover:border-blue-400/30 transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceSkills;