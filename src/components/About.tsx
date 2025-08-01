import React from 'react';
import { Award, Users, TrendingUp, Shield, Cpu, Rocket, Brain, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const stats = [
    { icon: Award, value: '3+', label: 'Years Innovation', color: 'from-blue-500 to-blue-700' },
    { icon: Users, value: '100+', label: 'Global Clients', color: 'from-blue-400 to-blue-600' },
    { icon: TrendingUp, value: '99%', label: 'Success Rate', color: 'from-blue-600 to-blue-800' },
    { icon: Shield, value: '24/7', label: 'AI Support', color: 'from-blue-300 to-blue-500' },
  ];

  const features = [
    { icon: Cpu, title: 'AI-Powered Solutions', description: 'Leveraging artificial intelligence for smarter business operations' },
    { icon: Rocket, title: 'Rapid Deployment', description: 'Lightning-fast implementation with zero downtime' },
    { icon: Brain, title: 'Intelligent Analytics', description: 'Data-driven insights for strategic decision making' },
    { icon: Zap, title: 'Real-time Processing', description: 'Instant responses with cutting-edge technology' },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,101,179,0.05),transparent_50%)] animate-pulse"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-brand-500/10 to-brand-600/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-brand-600/10 to-brand-700/10 rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-700/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-8">
            <Brain className="w-4 h-4 text-brand-400 animate-pulse" />
            <span className="text-brand-300 text-sm font-medium">About Our Innovation</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Pioneering the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-600 to-brand-800 animate-gradient-x">
              Digital Revolution
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-brand-500 to-brand-700 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transforming Tomorrow with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
                AI & Innovation
              </span>
            </h3>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              CHN Technologies stands at the forefront of digital transformation, combining artificial intelligence, 
              cloud computing, and advanced analytics to create solutions that don't just meet today's needs—they 
              anticipate tomorrow's challenges.
            </p>
            
            <p className="text-lg text-gray-500 leading-relaxed">
              Since 2021, we've been pushing the boundaries of what's possible, delivering next-generation 
              technology solutions that empower businesses to thrive in an increasingly digital world.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 border border-gray-200 rounded-2xl p-4 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  <feature.icon className="w-8 h-8 text-brand-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-gray-900 font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <Link to='/about' className="group bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-2">
                <span>Discover Our Journey</span>
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* Interactive Stats Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-white border border-gray-200 p-8 rounded-3xl hover:shadow-xl hover:border-brand-200 transition-all duration-500 transform hover:-translate-y-4 text-center overflow-hidden"
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Glowing Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                  
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>

                  {/* Particle Effect */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-brand-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                </div>
              ))}
            </div>

            {/* Connecting Lines Animation */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-20">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0065B3" />
                    <stop offset="100%" stopColor="#005299" />
                  </linearGradient>
                </defs>
                <line x1="50%" y1="25%" x2="50%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
                <line x1="25%" y1="50%" x2="75%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;