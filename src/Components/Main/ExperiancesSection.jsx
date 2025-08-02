import { FaBriefcase, FaTools, FaCode, FaUsers } from "react-icons/fa";

const experiences = [
  {
    company: "mimAR | 3D Architectural Visualization Company",
    role: "Software Developer (Onsite)",
    duration: "June 2025 - Present",
    description:
      "Led the development of architectural visualization web applications at mimAR in Islamabad, utilizing Flutter and Node.js. Designed and implemented scalable backend solutions, and collaborated with cross-functional teams to deliver high-quality projects.",
  },
  {
    company: "Mecarvi Prints",
    role: "Frontend Developer (Part-Time)",
    duration: "Jan 2025 - August 2025",
    description:
      "Developed responsive and user-friendly web interfaces using React. Collaborated with design teams to implement visually appealing UI components and optimized front-end performance for seamless user experiences.",
  },
  {
    company: "FalconXoft",
    role: "Full Stack Developer",
    duration: "Jan 2025 - March 2025",
    description:
      "Led development of enterprise web applications using React, Next.js, and Django. Architected scalable backend solutions and mentored junior developers to enhance team productivity.",
  },
  {
    company: "Fiver/Upwork",
    role: "Flutter App Developer",
    duration: "Jan 2021 - Present",
    description:
      "Developed mobile applications using Flutter, Firebase, and Node.js. Focused on performance optimization and responsive UI/UX design to meet client requirements.",
  },
  {
    company: "CsEra Pvt Ltd",
    role: "Full Stack Developer",
    duration: "June 2023 - Feb 2024",
    description:
      "Developed full-stack web and mobile applications using React, Next.js, Node.js, Django, Laravel, Flutter, and Firebase. Implemented CI/CD pipelines and optimized database performance for efficient project delivery.",
  },
  {
    company: "First Light - UAE Based Company",
    role: "Flutter App Developer",
    duration: "May 2024 - Nov 2024",
    description:
      "Built cross-platform mobile applications with Flutter, integrated RESTful APIs, and implemented Firebase authentication and real-time database solutions for robust app functionality.",
  },
];

const technicalSkills = [
  { name: "React.js", percentage: 90 },
  { name: "Next.js", percentage: 90 },
  { name: "Node.js", percentage: 90 },
  { name: "Django", percentage: 85 },
  { name: "Laravel", percentage: 75 },
  { name: "Flutter", percentage: 90 },
  { name: "Firebase/MongoDB", percentage: 85 },
  { name: "MySQL/PostgreSQL", percentage: 85 },
  { name: "Bootstrap/Tailwind", percentage: 90 },
  { name: "DevOps", percentage: 80 },
  { name: "Docker", percentage: 80 },
  { name: "AI Integrations", percentage: 75 },
];

const professionalQualities = [
  { name: "Project Management", percentage: 85 },
  { name: "Project Handling", percentage: 90 },
  { name: "Team Leadership", percentage: 80 },
  { name: "Agile Methodologies", percentage: 85 },
  { name: "Client Communication", percentage: 90 },
  { name: "Problem Solving", percentage: 88 },
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
  "DevOps",
  "AI Integrations",
];

const ExperienceSkills = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Experience & Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto" />
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-3">
            <div className="p-2 bg-blue-400/10 rounded-lg">
              <FaBriefcase className="text-blue-400 text-xl" />
            </div>
            Professional Experience
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
              >
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-gray-900 p-3 rounded-lg border border-blue-400/30">
                      <FaBriefcase className="text-blue-400 text-2xl" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{exp.company}</h4>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm font-medium">
                        {exp.role}
                      </span>
                      <span className="text-gray-400 text-sm">{exp.duration}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Qualities Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-purple-400 mb-6 flex items-center gap-3">
            <div className="p-2 bg-purple-400/10 rounded-lg">
              <FaUsers className="text-purple-400 text-xl" />
            </div>
            Professional Qualities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {professionalQualities.map((quality, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300 font-medium text-sm">{quality.name}</span>
                  <span className="text-purple-400 font-medium text-sm">{quality.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"
                    style={{ width: `${quality.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center gap-3">
              <div className="p-2 bg-blue-400/10 rounded-lg">
                <FaTools className="text-blue-400 text-xl" />
              </div>
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                    <span className="text-blue-400 font-medium text-sm">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 flex items-center gap-3">
              <div className="p-2 bg-purple-400/10 rounded-lg">
                <FaCode className="text-purple-400 text-xl" />
              </div>
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full text-sm font-medium border border-gray-700 hover:border-blue-400/30 transition-colors"
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