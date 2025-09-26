import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import image from './../../assets/images/profile3.png';

const AboutSection = () => {
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
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-slow" />
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-bounce-slow" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-ping-slow" />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 relative z-10">
        <div className="lg:w-2/5 flex justify-center animate-float">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-1 animate-rotate">
              <div className="w-full h-full rounded-3xl bg-slate-900" />
            </div>
            
            <div className="relative h-full w-full rounded-3xl overflow-hidden border-4 border-slate-800/50 shadow-2xl">
              <img
                src={image}
                alt="Tayyab Hussain"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/20" />
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-cyan-500/20 blur-xl animate-pulse" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-purple-500/20 blur-xl animate-bounce-slow" />
          </div>
        </div>

        <div className="lg:w-3/5 text-center lg:text-left max-w-3xl">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
              About Me
            </span>
          </h2>

          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed animate-fade-in-up delay-100">
              Hello there! I'm <span className="text-cyan-400 font-semibold">Tayyab Hussain</span>, a passionate <span className="text-purple-400 font-semibold">Software Engineer</span> specializing in creating modern, high-performing web and mobile applications.
            </p>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed animate-fade-in-up delay-200">
              My tech stack includes:
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-fade-in-up delay-300">
              {[
                { tech: 'React', color: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10' },
                { tech: 'Django', color: 'text-green-400 border-green-400/30 bg-green-400/10' },
                { tech: 'Laravel', color: 'text-red-400 border-red-400/30 bg-red-400/10' },
                { tech: 'Next.js', color: 'text-gray-300 border-gray-600/30 bg-gray-400/10' },
                { tech: 'Flutter', color: 'text-blue-400 border-blue-400/30 bg-blue-400/10' },
                { tech: 'Node.js', color: 'text-green-500 border-green-500/30 bg-green-500/10' },
                { tech: 'TypeScript', color: 'text-blue-300 border-blue-300/30 bg-blue-300/10' },
                { tech: 'Python', color: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10' }
              ].map((item) => (
                <span key={item.tech} className={`px-4 py-2 border-2 ${item.color} rounded-full text-sm font-medium backdrop-blur-sm transform hover:scale-105 transition-all duration-300`}>
                  {item.tech}
                </span>
              ))}
            </div>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed animate-fade-in-up delay-400">
              I deliver seamless and efficient solutions tailored to client needs, combining technical excellence with creative problem-solving. My focus is on creating scalable, maintainable code that exceeds expectations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-12 animate-fade-in-up delay-500">
            <Link
              to="/projects"
              className="group relative px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-3 text-base overflow-hidden shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            
            <Link
              to="/contact"
              className="group relative px-8 py-3.5 bg-transparent border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-3 text-base backdrop-blur-sm hover:border-cyan-400 transform hover:scale-105"
            >
              Contact Me
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;