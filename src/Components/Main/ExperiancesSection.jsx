import { FaBriefcase, FaTools, FaCode, FaUsers } from "react-icons/fa";
import { useEffect, useRef } from "react";

const experiences = [
  {
    company: "mimAR | 3D Architectural Visualization Company",
    role: "Senior Mobile App Developer (Onsite)",
    duration: "June 2025 - Present",
    description: "Led the development of architectural visualization web applications at mimAR in Islamabad, utilizing Flutter and Node.js. Designed and implemented scalable backend solutions, and collaborated with cross-functional teams to deliver high-quality projects.",
  },
  {
    company: "Mecarvi Prints",
    role: "Frontend Developer (Part-Time)",
    duration: "Jan 2025 - August 2025",
    description: "Developed responsive and user-friendly web interfaces using React. Collaborated with design teams to implement visually appealing UI components and optimized front-end performance for seamless user experiences.",
  },
  {
    company: "FalconXoft",
    role: "Full Stack Developer",
    duration: "Jan 2025 - March 2025",
    description: "Led development of enterprise web applications using React, Next.js, and Django. Architected scalable backend solutions and mentored junior developers to enhance team productivity.",
  },
  {
    company: "Fiver/Upwork",
    role: "Flutter App Developer",
    duration: "Jan 2021 - Present",
    description: "Developed mobile applications using Flutter, Firebase, and Node.js. Focused on performance optimization and responsive UI/UX design to meet client requirements.",
  },
  {
    company: "CsEra Pvt Ltd",
    role: "Full Stack Developer",
    duration: "June 2023 - Feb 2024",
    description: "Developed full-stack web and mobile applications using React, Next.js, Node.js, Django, Laravel, Flutter, and Firebase. Implemented CI/CD pipelines and optimized database performance for efficient project delivery.",
  },
  {
    company: "First Light - UAE Based Company",
    role: "Flutter App Developer",
    duration: "May 2024 - Nov 2024",
    description: "Built cross-platform mobile applications with Flutter, integrated RESTful APIs, and implemented Firebase authentication and real-time database solutions for robust app functionality.",
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
  "React", "Next.js", "Django", "Laravel", "Flutter", "Firebase", "Node.js", 
  "GraphQL", "Docker", "AWS", "Git", "CI/CD", "REST APIs", "MongoDB", "PostgreSQL", 
  "Tailwind CSS", "Material UI", "Redux", "TypeScript", "DevOps", "AI Integrations"
];

const ExperienceSkills = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 30;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-bounce-slow" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-ping-slow" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4 animate-gradient-x">
            Experience & Skills
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto transform hover:scale-x-110 transition-transform duration-300" />
        </div>

        <div className="mb-16 animate-fade-in-up delay-100">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-3">
            <div className="p-3 bg-cyan-400/10 rounded-2xl backdrop-blur-sm border border-cyan-400/30">
              <FaBriefcase className="text-cyan-400 text-2xl" />
            </div>
            Professional Experience
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group backdrop-blur-sm bg-slate-800/30 p-6 rounded-3xl border-2 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-cyan-500/10 p-3 rounded-2xl border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                      <FaBriefcase className="text-cyan-400 text-2xl" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">{exp.company}</h4>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30">
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

        <div className="mb-16 animate-fade-in-up delay-200">
          <h3 className="text-2xl font-semibold text-purple-400 mb-6 flex items-center gap-3">
            <div className="p-3 bg-purple-400/10 rounded-2xl backdrop-blur-sm border border-purple-400/30">
              <FaUsers className="text-purple-400 text-2xl" />
            </div>
            Professional Qualities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {professionalQualities.map((quality, index) => (
              <div key={index} className="backdrop-blur-sm bg-slate-800/30 p-4 rounded-2xl border border-slate-700/50">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-medium">{quality.name}</span>
                  <span className="text-purple-400 font-bold">{quality.percentage}%</span>
                </div>
                <div className="w-full bg-slate-700/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-400 to-cyan-500 rounded-full transform origin-left transition-all duration-1000 ease-out"
                    style={{ width: `${quality.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate-fade-in-up delay-300">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-3">
              <div className="p-3 bg-cyan-400/10 rounded-2xl backdrop-blur-sm border border-cyan-400/30">
                <FaTools className="text-cyan-400 text-2xl" />
              </div>
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="backdrop-blur-sm bg-slate-800/30 p-4 rounded-2xl border border-slate-700/50">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-cyan-400 font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transform origin-left transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up delay-400">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 flex items-center gap-3">
              <div className="p-3 bg-purple-400/10 rounded-2xl backdrop-blur-sm border border-purple-400/30">
                <FaCode className="text-purple-400 text-2xl" />
              </div>
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block backdrop-blur-sm bg-slate-800/30 text-gray-300 px-4 py-2 rounded-2xl text-sm font-medium border border-slate-700/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105"
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