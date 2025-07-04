import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Zap, Code, Database, Shield } from 'lucide-react';

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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
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
          <Icon className="w-8 h-8 text-cyan-400" />
        </div>
      ))}

      {/* Mouse Follower Effect */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-300"
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
              {/* Glowing Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-2 mb-8">
                <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-cyan-300 text-sm font-medium">Next-Gen Technology Solutions</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                <span className="block">Empowering</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">
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
                  className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Start Your Transformation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
                </button>
                
                <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">100+</div>
                  <div className="text-slate-400 text-sm">Projects</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-purple-400 mb-1">99%</div>
                  <div className="text-slate-400 text-sm">Success Rate</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-pink-400 mb-1">24/7</div>
                  <div className="text-slate-400 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 3D Visual Element */}
          <div className="flex-1 max-w-lg">
            <div className="relative animate-float">
              {/* Main Glass Card */}
              <div className="relative w-full h-96 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 rounded-3xl animate-pulse"></div>
                
                {/* Tech Grid */}
                <div className="relative grid grid-cols-3 gap-4 h-full">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-xl backdrop-blur-sm border border-white/10 flex items-center justify-center group hover:scale-110 transition-all duration-300"
                      style={{
                        animationDelay: `${i * 0.1}s`
                      }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg opacity-60 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                    </div>
                  ))}
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl animate-spin-slow opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl animate-bounce opacity-60"></div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-8 animate-pulse"></div>
                <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-purple-400 rounded-full -translate-x-1/2 translate-y-8 animate-pulse"></div>
                <div className="absolute left-0 top-1/2 w-4 h-4 bg-pink-400 rounded-full -translate-x-8 -translate-y-1/2 animate-pulse"></div>
                <div className="absolute right-0 top-1/2 w-4 h-4 bg-cyan-400 rounded-full translate-x-8 -translate-y-1/2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;