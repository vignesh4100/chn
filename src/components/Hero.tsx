import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Zap, Code, Database, Shield, Users, Award, Clock, Brain, Globe, Cpu } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingIcons = [
    { Icon: Code, delay: '0s', position: 'top-20 left-20' },
    { Icon: Database, delay: '1s', position: 'top-40 right-32' },
    { Icon: Shield, delay: '2s', position: 'bottom-40 left-32' },
    { Icon: Zap, delay: '0.5s', position: 'bottom-20 right-20' },
  ];

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-brand-800 to-blue-900 overflow-hidden">
      {/* Optional: Light Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating Tech Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} animate-float opacity-20 hover:opacity-40 transition-opacity`}
          style={{ animationDelay: delay }}
        >
          <Icon className="w-8 h-8 text-cyan-600" />
        </div>
      ))}

      {/* Mouse Follower Glow */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-cyan-300/20 to-purple-300/20 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            <div className="animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-6 py-2 mb-8">
                <Zap className="w-4 h-4 text-blue-600 animate-pulse" />
                <span className="text-blue-700 text-sm font-medium">Next-Gen Technology Solutions</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white hero-heading-large mb-6 mt-10">
                <span className="block">Empowering</span>
                <span className="block text-transparent bg-clip-text leading-[1.3] bg-gradient-to-r from-brand-400 via-brand-500 to-brand-700 animate-gradient-x">
                  Digital Future
                </span>
                <span className="block">with AI & Tech</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                CHN Technologies delivers cutting-edge IT infrastructure, intelligent workforce solutions, 
                and custom software development that transforms businesses for the digital age.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={onOpenModal}
                  className="group relative bg-gradient-to-r from-brand-600 to-brand-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Start Your Transformation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
                </button>

                {/* <button className="group bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button> */}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-brand-400 mb-1">100+</div>
                  <div className="text-slate-300 text-sm">Projects</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-brand-500 mb-1">99%</div>
                  <div className="text-slate-300 text-sm">Success Rate</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-brand-600 mb-1">24/7</div>
                  <div className="text-slate-300 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Visual */}
          <div className="hidden sm:block flex-1 max-w-lg">
            <div className="relative perspective-1000">
              <div className="relative transform-style-3d animate-float">
                <div className="relative w-full h-96 transform-style-3d">
                  {/* <div className="absolute inset-0 rounded-full shadow-2xl transform rotate-y-12 hover:rotate-y-0 transition-all duration-1000"> */}
                      {/* Brain/Globe Center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-40 h-40">
                        <Brain className="absolute inset-0 w-full h-full text-white/70 drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]" />
                        {/* <Globe className="absolute inset-0 w-full h-full text-cyan-400/30 animate-spin-slow" /> */}
                      </div>
                    </div>

                    <div className="absolute inset-0">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                          style={{
                            top: `${15 + Math.random() * 70}%`,
                            left: `${15 + Math.random() * 70}%`,
                            opacity: 0.6 + Math.random() * 0.4,
                            transform: `scale(${0.5 + Math.random() * 1})`
                          }}
                        ></div>
                      ))}
                    </div>
                  {/* </div> */}

                  {/* Orbiting Rings */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="absolute inset-4 border-2 border-cyan-400/20 rounded-full"></div>
                  </div>
                  <div className="absolute inset-0 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}>
                    <div className="absolute inset-8 border-2 border-purple-400/20 rounded-full"></div>
                  </div>
                  <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '20s' }}>
                    <div className="absolute inset-12 border-2 border-pink-400/20 rounded-full"></div>
                  </div>

                  {/* Orbiting Icons */}
                  <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '25s' }}>
                    <div className="absolute top-0 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-24">
                      <div className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-1/2 w-12 h-12 -translate-x-1/2 translate-y-24">
                      <div className="w-full h-full bg-gradient-to-r from-blue-600/80 to-blue-800/80 rounded-xl flex items-center justify-center">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute left-0 top-1/2 w-12 h-12 -translate-x-24 -translate-y-1/2">
                      <div className="w-full h-full bg-gradient-to-r from-blue-400/80 to-blue-600/80 rounded-xl flex items-center justify-center">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute right-0 top-1/2 w-12 h-12 translate-x-24 -translate-y-1/2">
                      <div className="w-full h-full bg-gradient-to-r from-blue-300/80 to-blue-500/80 rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glowing Base */}
                {/* <div className="absolute bottom-0 left-1/2 w-64 h-12 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 rounded-full blur-xl -translate-x-1/2"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;