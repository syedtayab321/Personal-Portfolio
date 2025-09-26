import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import projects from "../../Utils/Projects";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 25;

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

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-4">Project Not Found</h2>
          <Link to="/projects" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 group">
            <FiArrowLeft className="mr-2 group-hover:-translate-x-2 transition-transform" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-10 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-slow" />
        <div className="absolute bottom-20 -right-10 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-bounce-slow" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <Link
            to="/projects"
            className="group inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-base font-medium"
          >
            <FiArrowLeft className="mr-3 group-hover:-translate-x-2 transition-transform duration-300" />
            Back to Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="animate-fade-in-up delay-100">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/50 bg-slate-800/30 backdrop-blur-sm shadow-2xl">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-auto max-h-[500px] object-contain transform hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6 animate-fade-in-up delay-200">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed backdrop-blur-sm bg-slate-800/20 rounded-2xl p-4">
              {project.description}
            </p>

            <div className="backdrop-blur-sm bg-slate-800/20 rounded-2xl p-4">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.split(",").map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/30 transform hover:scale-105 transition-all duration-300"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-sm bg-slate-800/20 rounded-2xl p-4">
              <h3 className="text-xl font-semibold text-purple-400 mb-3 flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-300 text-base">
                    <span className="text-cyan-400 mr-3 text-lg">▸</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="flex flex-wrap gap-4 pt-2">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 text-base overflow-hidden shadow-xl hover:shadow-cyan-500/25 transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <FiExternalLink className="text-lg" /> 
                  Live Demo
                </a>
              )}

              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-6 py-3 bg-transparent border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2 text-base backdrop-blur-sm hover:border-cyan-400 transform hover:scale-105"
                >
                  <FiGithub className="text-lg" />
                  View Code
                </a>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;