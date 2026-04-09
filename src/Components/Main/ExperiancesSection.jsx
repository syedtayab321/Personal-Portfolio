import { FaBriefcase, FaCode, FaTools } from "react-icons/fa";

const experiences = [
  {
    company: "mimAR | 3D Architectural Visualization Company",
    role: "Software Engineer (Onsite)",
    duration: "June 2025 - Present",
    location: "Islamabad",
    description:
      "Leading development of architectural visualization web applications using Flutter and Node.js. Designing scalable backend solutions and collaborating with cross-functional teams.",
  },
  {
    company: "Mecarvi Technologies",
    role: "Full Stack Developer",
    duration: "Jan 2025 - August 2025",
    location: "USA Based",
    description:
      "Built responsive web applications using React with integrated back-end services. Collaborated with teams to deliver high-performance user interfaces.",
  },
  {
    company: "Fiverr/Upwork",
    role: "Full Stack Developer",
    duration: "Jan 2021 - Present",
    location: "Freelance",
    description:
      "Developed full-stack applications using Django, Next.js, React Native, and Flutter. Delivered optimized solutions for web and mobile platforms.",
  },
  {
    company: "CsEra Pvt Ltd",
    role: "Full Stack Developer",
    duration: "June 2023 - Feb 2024",
    location: "Pakistan",
    description:
      "Developed web and mobile applications using React, Next.js, Node.js, Django, Laravel, and Flutter. Implemented CI/CD pipelines and optimized database performance.",
  },
  {
    company: "First Light",
    role: "Mobile Application Developer",
    duration: "May 2024 - Nov 2024",
    location: "UAE Based",
    description:
      "Built cross-platform mobile apps with Flutter and React Native. Integrated RESTful APIs and Firebase authentication solutions.",
  },
];

const technicalSkills = [
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 90 },
  { name: "Node.js", level: 90 },
  { name: "Express.js", level: 85 },
  { name: "Django", level: 85 },
  { name: "Flutter", level: 90 },
  { name: "React Native", level: 85 },
  { name: "Python", level: 85 },
  { name: "TypeScript", level: 80 },
];

const technologies = [
  "React", "Next.js", "Node.js", "Express.js", "Django", "Flutter",
  "React Native", "Firebase", "MongoDB", "PostgreSQL", "Docker",
  "Git", "REST APIs", "Tailwind CSS", "TypeScript", "AWS"
];

const ExperienceSkills = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Experience & Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <FaBriefcase className="text-blue-600 dark:text-blue-400 text-2xl" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Professional Experience
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="mb-3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {exp.company}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.role}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {exp.duration}
                    </span>
                    {exp.location && (
                      <>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {exp.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaCode className="text-blue-600 dark:text-blue-400 text-2xl" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Technical Skills
              </h3>
            </div>
            
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaTools className="text-blue-600 dark:text-blue-400 text-2xl" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Technologies
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSkills;