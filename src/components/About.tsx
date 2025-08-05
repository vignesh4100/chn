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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-6 py-2 mb-6">
            <Brain className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-blue-600 text-sm font-medium">About Our Innovation</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Pioneering the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 animate-gradient-x">
              Digital Revolution
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transforming Tomorrow with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                AI & Innovation
              </span>
            </h3>

            <p className="text-xl text-gray-700 leading-relaxed">
              CHN Technologies stands at the forefront of digital transformation, combining artificial intelligence, 
              cloud computing, and advanced analytics to create solutions that don't just meet today's needs—they 
              anticipate tomorrow's challenges.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
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
                  <feature.icon className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-gray-900 font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link
                to="/about"
                className="group bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-2"
              >
                <span>Discover Our Journey</span>
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-white border border-gray-200 p-8 rounded-3xl hover:bg-blue-50 transition-all duration-500 transform hover:-translate-y-4 text-center overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>

                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
