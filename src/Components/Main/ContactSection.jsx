import React, { useEffect, useRef } from "react";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

const ContactMe = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 40;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
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
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
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
    <section className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-slow" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-bounce-slow" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-ping-slow" />
      </div>

      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl w-full text-center space-y-12">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4 animate-gradient-x">
              Let's Connect!
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto transform hover:scale-x-110 transition-transform duration-300" />
          </div>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            I'm excited to collaborate on innovative projects or discuss new opportunities. Reach out to share your ideas or just say hello!
          </p>

          <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up delay-200">
            <a
              href="mailto:tayabsajid5@gmail.com"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-3 text-base overflow-hidden shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <FaEnvelope className="text-xl" />
              <span>Email Me</span>
              <FaArrowRight className="ml-1 group-hover:translate-x-2 transition-transform duration-200" />
            </a>

            <a
              href="https://wa.me/+923160854067"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-transparent border-2 border-purple-500/50 text-purple-400 font-semibold rounded-2xl hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-3 text-base backdrop-blur-sm hover:border-purple-400 transform hover:scale-105"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp Me</span>
              <FaArrowRight className="ml-1 group-hover:translate-x-2 transition-transform duration-200" />
            </a>
          </div>

          <div className="animate-fade-in-up delay-300">
            <h3 className="text-xl text-gray-300 font-medium mb-6">Connect with me on</h3>
            <div className="flex justify-center gap-8">
              <a
                href="https://github.com/syedtayab321"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 text-2xl text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
              >
                <div className="absolute inset-0 bg-cyan-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaGithub />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/syed-tayyab-bukhari-485a0222b"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 text-2xl text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <div className="absolute inset-0 bg-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaLinkedin />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-slate-800/30 py-8 border-t border-slate-700/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 text-base">
          <p className="text-gray-400 hover:text-white transition-all duration-300 mb-4 sm:mb-0 transform hover:scale-105">
            &copy; {new Date().getFullYear()} Syed Tayyab Hussain. All rights reserved.
          </p>
          <div className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-105">
            Crafted with <span className="text-cyan-400 animate-pulse">♥</span> in Pakistan
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactMe;