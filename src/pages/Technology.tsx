import React from 'react';
import { 
  Server, 
  Code, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield,
  Cpu,
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Footer from '../components/Footer';

const Technology: React.FC = () => {
  const technologies = [
    {
      icon: Server,
      title: 'IT Infrastructure',
      description: 'Comprehensive infrastructure management and optimization solutions',
      features: ['Network Management', 'Server Administration', 'Security Implementation', 'Performance Monitoring'],
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-500/10 to-blue-600/10',
      link: '/technology/infrastructure'
    },
    {
      icon: Code,
      title: 'Software Solutions',
      description: 'Custom software development and application modernization',
      features: ['Custom Development', 'Legacy Modernization', 'API Integration', 'Quality Assurance'],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10',
      link: '/technology/software'
    },
    {
      icon: Smartphone,
      title: 'Digital Solutions',
      description: 'Digital transformation and emerging technology implementation',
      features: ['Digital Strategy', 'Process Automation', 'IoT Solutions', 'AI Integration'],
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-500/10 to-teal-600/10',
      link: '/technology/digital'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          
          {/* Floating Tech Icons */}
          <div className="absolute top-20 left-20 animate-float opacity-20">
            <Cpu className="w-12 h-12 text-cyan-400" />
          </div>
          <div className="absolute top-40 right-32 animate-float opacity-20" style={{ animationDelay: '1s' }}>
            <Database className="w-10 h-10 text-purple-400" />
          </div>
          <div className="absolute bottom-32 left-32 animate-float opacity-20" style={{ animationDelay: '2s' }}>
            <Cloud className="w-14 h-14 text-pink-400" />
          </div>
          
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
              <Zap className="w-4 h-4 text-cyan-300 animate-pulse" />
              <span className="text-cyan-200 text-sm font-medium">Technology Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              <span className="block">Cutting-Edge</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 animate-gradient-x">
                Technology Solutions
              </span>
              <span className="block">for Modern Business</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Harness the power of advanced technology to transform your business operations, 
              enhance productivity, and drive innovation across your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Services */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Technology{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-cyan-200 transition-all duration-500 transform hover:-translate-y-4 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-purple-600 transition-all duration-300">
                    {tech.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tech.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {tech.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={tech.link}
                    className={`w-full bg-gradient-to-r ${tech.color} hover:opacity-90 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg transform group-hover:scale-105`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technology;