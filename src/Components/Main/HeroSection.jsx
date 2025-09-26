import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import ProfileImage from './../../assets/images/profile3.png';

const HeroSection = () => {
  const canvasRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
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

    const textElement = textRef.current;
    if (textElement) {
      const text = textElement.textContent;
      textElement.textContent = '';
      
      text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${i * 0.05}s`;
        span.className = 'animate-fade-in-up';
        textElement.appendChild(span);
      });
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden">
    
      <canvas ref={canvasRef} className="absolute inset-0" />
      

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
       
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" />
        <div className="absolute top-1/2 -right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow" />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-ping-slow" />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 z-10 relative">
    
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <p className="text-lg md:text-xl text-gray-300 font-medium tracking-wide animate-fade-in">
            Hello, I'm
          </p>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span 
              ref={textRef}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x"
            >
              Syed Tayyab
            </span>
          </h1>
          
          <div className="relative inline-block">
            <p className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 relative z-10">
              Software Engineer & Innovator
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 blur-lg opacity-30 animate-pulse"></div>
          </div>
          
          <p className="text-base sm:text-lg text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed animate-fade-in-up delay-300">
            Crafting exceptional digital experiences with cutting-edge technology and pixel-perfect design.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in-up delay-500">
            <Link
              to="/projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-3 text-sm sm:text-base overflow-hidden shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              Explore Portfolio
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            
            <a
              href="https://wa.me/+923365298230"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-transparent border-2 border-cyan-500/50 text-white font-semibold rounded-2xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-3 text-sm sm:text-base backdrop-blur-sm hover:border-cyan-400 transform hover:scale-105"
            >
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>

          {/* Enhanced Social links */}
          <div className="flex justify-center lg:justify-start gap-6 mt-8 animate-fade-in-up delay-700">
            {[
              { 
                name: 'GitHub', 
                icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z', 
                link: 'https://github.com/syedtayab321',
                color: 'hover:text-purple-400'
              },
              { 
                name: 'LinkedIn', 
                icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', 
                link: 'https://www.linkedin.com/in/syed-tayyab-bukhari-485a0222b',
                color: 'hover:text-blue-400'
              },
              // { 
              //   name: 'Twitter', 
              //   icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84', 
              //   link: 'https://x.com/syedtayab321',
              //   color: 'hover:text-cyan-400'
              // },
            ].map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-3 text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                title={social.name}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-current to-transparent rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <span className="sr-only">{social.name}</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        
        <div className="lg:w-1/2 flex justify-center animate-float">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
        
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-1 animate-rotate">
              <div className="w-full h-full rounded-3xl bg-slate-900" />
            </div>
            
            <div className="relative h-full w-full rounded-3xl overflow-hidden border-4 border-slate-800/50 shadow-2xl">
              <img
                src={ProfileImage}
                alt="Syed Tayyab"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/20" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-cyan-500/20 blur-xl animate-pulse" />
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-purple-500/20 blur-xl animate-bounce-slow" />
            <div className="absolute top-10 -right-10 w-16 h-16 rounded-full bg-blue-500/20 blur-lg animate-ping-slow" />
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm text-cyan-400 mb-2 font-medium">Explore More</span>
          <div className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;