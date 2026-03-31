import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ProfileImage from './../../assets/images/profile2.png';

const HeroSection = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = Math.random() * 0.8 - 0.4;
        this.color = `hsla(${Math.random() * 60 + 200}, 80%, 65%, 0.6)`;
        this.originalX = this.x;
        this.originalY = this.y;
        this.distX = 0;
        this.distY = 0;
      }

      update(mouseX, mouseY) {
        // Mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const angle = Math.atan2(dy, dx);
          const force = (150 - distance) / 150;
          this.x -= Math.cos(angle) * force * 2;
          this.y -= Math.sin(angle) * force * 2;
        } else {
          // Return to original position
          this.x += (this.originalX - this.x) * 0.05;
          this.y += (this.originalY - this.y) * 0.05;
        }

        // Keep within bounds
        this.x = Math.min(Math.max(this.x, 0), canvas.width);
        this.y = Math.min(Math.max(this.y, 0), canvas.height);
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      setMousePosition({ x: mouseX, y: mouseY });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    function animate() {
      ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update(mouseX, mouseY);
        particle.draw();
      });

      // Draw connecting lines
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(100, 150, 255, 0.1)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const floatingIcons = [
    { icon: "⚛️", delay: "0s", duration: "20s", left: "10%", top: "20%" },
    { icon: "💻", delay: "2s", duration: "25s", left: "85%", top: "15%" },
    { icon: "🎨", delay: "1s", duration: "22s", left: "15%", top: "70%" },
    { icon: "🚀", delay: "3s", duration: "28s", left: "90%", top: "80%" },
    { icon: "⚡", delay: "1.5s", duration: "24s", left: "75%", top: "40%" },
    { icon: "🎯", delay: "2.5s", duration: "26s", left: "5%", top: "85%" },
  ];

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0a0a14] via-[#0f0f1a] to-[#0a0a14] text-white px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden">
      
      {/* Animated Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-[#0a0a14]/50" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(100,150,255,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(100,150,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-[slide_20s_linear_infinite]" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className="absolute text-4xl opacity-20 animate-float-vertical"
          style={{
            left: item.left,
            top: item.top,
            animationDelay: item.delay,
            animationDuration: item.duration,
          }}
        >
          {item.icon}
        </div>
      ))}

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-ping-slow" />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 z-10 relative">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 animate-fade-in-up">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm text-gray-300 font-medium">Available for opportunities</span>
          </div>

          {/* Title */}
          <div className="space-y-4 animate-fade-in-up animation-delay-200">
            <p className="text-xl text-gray-300 font-light tracking-wide">
              Hi, I'm
            </p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                  Syed Tayyab
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-2xl opacity-30 animate-pulse" />
              </span>
            </h1>
          </div>

          {/* Role */}
          <div className="relative animate-fade-in-up animation-delay-400">
            <p className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Software Engineer 
            </p>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl rounded-full" />
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animation-delay-600">
            Crafting scalable, high-performance web applications with modern technologies. 
            Specialized in React, Node.js, and cloud architecture. 4+ years of experience 
            delivering enterprise-grade solutions.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4 animate-fade-in-up animation-delay-800">
            <div className="text-center">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">4+</p>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">30+</p>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">15+</p>
              <p className="text-sm text-gray-400">Happy Clients</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5 animate-fade-in-up animation-delay-1000">
            <Link
              to="/projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-3 text-base shadow-xl hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 active:scale-95"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span>View Portfolio</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <a
              href="https://wa.me/+923365298230"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center gap-3 text-base hover:border-cyan-500/50 transform hover:scale-105 active:scale-95"
            >
              <span>Let's Connect</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-6 animate-fade-in-up animation-delay-1200">
            {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'MongoDB'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-300 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-5 pt-4 animate-fade-in-up animation-delay-1400">
            {[
              { name: 'GitHub', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z', link: 'https://github.com/syedtayab321', color: 'hover:text-purple-400' },
              { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', link: 'https://www.linkedin.com/in/syed-tayyab-bukhari-485a0222b', color: 'hover:text-blue-400' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-3 text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                title={social.name}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-current to-transparent rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <span className="sr-only">{social.name}</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Right Content - Enhanced Profile Image */}
        <div className="lg:w-1/2 flex justify-center relative">
          <div 
            className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px]"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width - 0.5;
              const y = (e.clientY - rect.top) / rect.height - 0.5;
              e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
            }}
            style={{ transition: 'transform 0.3s ease-out' }}
          >
            {/* Glowing Border Animation */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-75 blur-xl animate-pulse-slow" />
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-100 animate-rotate" />
            
            {/* Image Container */}
            <div className="relative h-full w-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
              <img
                src={ProfileImage}
                alt="Syed Tayyab - Software Engineer"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                loading="eager"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              {/* Tech Icons Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3">
                {['⚛️', '💻', '🚀', '🎨'].map((icon, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xl animate-float"
                    style={{ animationDelay: `${idx * 0.2}s` }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Orbiting Elements */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse animation-delay-1000" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 font-medium tracking-wider">SCROLL</span>
          <div className="w-[2px] h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;