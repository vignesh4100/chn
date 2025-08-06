import React from 'react';
import { 
  Target, 
  Eye, 
  Heart, 
  Shield, 
  Lightbulb, 
  Users, 
  Handshake, 
  ArrowRight,
  CheckCircle,
  Zap,
  Award,
  TrendingUp,
  Globe,
  Star,
  Cpu,
  Database,
  Code,
  Cloud
} from 'lucide-react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const About: React.FC = ({ onOpenModal }) => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We act with honesty and transparency, always putting clients\' interests first.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: CheckCircle,
      title: 'Accountability',
      description: 'We own our work, our outcomes, and our promises delivering with consistency.',
      color: 'from-green-500 to-teal-500',
      bgColor: 'from-green-500/10 to-teal-500/10'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace change, think ahead, and deliver future-ready solutions.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: Heart,
      title: 'Client-Centricity',
      description: 'Your goals are our mission. We build every solution with your business in mind.',
      color: 'from-red-500 to-orange-500',
      bgColor: 'from-red-500/10 to-orange-500/10'
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'We work as one with clients, partners, and teams for shared success.',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-500/10 to-purple-500/10'
    }
  ];

  const stats = [
    { icon: Award, value: '10+', label: 'Years of Excellence', color: 'from-cyan-400 to-blue-500' },
    { icon: Globe, value: 'Pan-India', label: 'Presence', color: 'from-purple-400 to-pink-500' },
    { icon: TrendingUp, value: '500+', label: 'Projects Delivered', color: 'from-green-400 to-teal-500' },
    { icon: Star, value: '98%', label: 'Client Satisfaction', color: 'from-orange-400 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-brand-800 to-brand-900 overflow-hidden">
        {/* Dynamic Geometric Background */}
        <div className="absolute inset-0">
          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0 animate-gradient-x"></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {/* Large Hexagons */}
            <div className="absolute top-20 left-10 w-32 h-32 border-2 border-cyan-400/20 transform rotate-12 animate-spin-slow">
              <div className="w-full h-full bg-gradient-to-r from-cyan-400/10 to-transparent rounded-lg"></div>
            </div>
            <div className="absolute top-40 right-20 w-24 h-24 border-2 border-purple-400/20 transform -rotate-12 animate-spin-slow" style={{ animationDirection: 'reverse' }}>
              <div className="w-full h-full bg-gradient-to-r from-purple-400/10 to-transparent rounded-lg"></div>
            </div>
            
            {/* Floating Tech Icons */}
            <div className="absolute top-32 left-1/4 animate-float opacity-20">
              <Cpu className="w-12 h-12 text-cyan-400" />
            </div>
            <div className="absolute top-48 right-1/3 animate-float opacity-20" style={{ animationDelay: '1s' }}>
              <Database className="w-10 h-10 text-purple-400" />
            </div>
            <div className="absolute bottom-32 left-1/3 animate-float opacity-20" style={{ animationDelay: '2s' }}>
              <Code className="w-14 h-14 text-pink-400" />
            </div>
            <div className="absolute bottom-48 right-1/4 animate-float opacity-20" style={{ animationDelay: '0.5s' }}>
              <Cloud className="w-11 h-11 text-cyan-400" />
            </div>
            
            {/* Diagonal Lines */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transform -rotate-12"></div>
              <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent transform rotate-12"></div>
              <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent transform -rotate-12"></div>
            </div>
            
            {/* Particle System */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-float opacity-40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${4 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
              <Zap className="w-4 h-4 text-cyan-300 animate-pulse" />
              <span className="text-cyan-200 text-sm font-medium">About CHN Technologies</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white hero-heading-large mb-6">
              <span className="block">Empowering Enterprises with</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 animate-gradient-x">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 animate-gradient-x">
                Smart Tech, Smarter Workforce
              </span>
              <span className="block">and Seamless Operations</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              At CHN Technologies, we combine innovation, strategy, and execution to solve complex business challenges. 
              From IT infrastructure to workforce management, we deliver impactful solutions that power progress across industries.
            </p>
          
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section id="overview" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                <Target className="w-4 h-4 text-cyan-600" />
                <span className="text-cyan-700 text-sm font-medium">Company Overview</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Trusted Partner in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">
                  Enterprise Transformation
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                CHN Technologies is a trusted partner in enterprise transformation — delivering excellence in 
                Infrastructure Management, Software Development, Workforce Consulting, Payroll & Compliance, 
                and Corporate Training.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over a decade of expertise and a pan-India presence, we support organizations in optimizing 
                operations, enhancing people performance, and embracing digital innovation.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-cyan-200 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-cyan-50 to-purple-50 rounded-3xl p-8 border border-cyan-100">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-3"></div>
                    <h4 className="font-semibold text-gray-900 mb-2">IT Infrastructure</h4>
                    <p className="text-gray-600 text-sm">Advanced technology solutions</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-3"></div>
                    <h4 className="font-semibold text-gray-900 mb-2">Software Development</h4>
                    <p className="text-gray-600 text-sm">Custom application development</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mb-3"></div>
                    <h4 className="font-semibold text-gray-900 mb-2">Workforce Consulting</h4>
                    <p className="text-gray-600 text-sm">Strategic HR solutions</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-3"></div>
                    <h4 className="font-semibold text-gray-900 mb-2">Training & Development</h4>
                    <p className="text-gray-600 text-sm">Skill enhancement programs</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold">
                    <span>Comprehensive Solutions</span>
                    <CheckCircle className="w-5 h-5" />
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl animate-spin-slow opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl animate-bounce opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,101,179,0.1),transparent_50%)] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-2 mb-8">
              <Eye className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-cyan-300 text-sm font-medium">Vision & Mission</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 animate-gradient-x">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 animate-gradient-x">
                Purpose & Direction
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-brand-500 to-brand-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              </div>
              
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                To become a leading force in empowering businesses through people-first consulting 
                and technology-driven solutions.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">Leading market position</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">People-first approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">Technology-driven innovation</span>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                To simplify operations, enrich workforce capabilities, and drive organizational growth 
                by offering tailored consulting and tech solutions that deliver real-world impact.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-300">Simplified operations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-300">Enhanced workforce capabilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-300">Real-world impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-cyan-600" />
              <span className="text-cyan-700 text-sm font-medium">Core Values</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Values That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">
                Drive Us Forward
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values shape every decision we make and every solution we deliver
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-cyan-200 transition-all duration-500 transform hover:-translate-y-4 text-center relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-purple-600 transition-all duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        {/* Futuristic Circuit Board Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          {/* Circuit Board Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <g stroke="currentColor" strokeWidth="1" fill="none" className="text-cyan-400">
                    <path d="M10,10 L90,10 L90,90 L10,90 Z" />
                    <circle cx="20" cy="20" r="3" fill="currentColor" />
                    <circle cx="80" cy="20" r="3" fill="currentColor" />
                    <circle cx="20" cy="80" r="3" fill="currentColor" />
                    <circle cx="80" cy="80" r="3" fill="currentColor" />
                    <path d="M20,20 L80,20 M20,80 L80,80 M20,20 L20,80 M80,20 L80,80" />
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
          </div>
          
          {/* Animated Data Streams */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
                style={{
                  top: `${10 + i * 12}%`,
                  left: '0%',
                  width: '100%',
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
          
          {/* Floating Tech Elements */}
          <div className="absolute top-20 left-20 animate-float opacity-30">
            <div className="w-16 h-16 border-2 border-cyan-400 rounded-lg transform rotate-45">
              <div className="w-full h-full bg-gradient-to-r from-cyan-400/20 to-transparent rounded-sm"></div>
            </div>
          </div>
          <div className="absolute top-40 right-32 animate-float opacity-30" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 border-2 border-purple-400 rounded-full">
              <div className="w-full h-full bg-gradient-to-r from-purple-400/20 to-transparent rounded-full"></div>
            </div>
          </div>
          <div className="absolute bottom-32 left-32 animate-float opacity-30" style={{ animationDelay: '2s' }}>
            <div className="w-20 h-20 border-2 border-pink-400 rounded-lg transform -rotate-12">
              <div className="w-full h-full bg-gradient-to-r from-pink-400/20 to-transparent rounded-sm"></div>
            </div>
          </div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Matrix-style falling code */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-cyan-400 text-xs font-mono animate-bounce"
                style={{
                  left: `${i * 5}%`,
                  top: '-10%',
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '4s',
                  animationIterationCount: 'infinite'
                }}
              >
                {Math.random().toString(36).substring(2, 8)}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 relative overflow-hidden">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl"></div>
            
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to simplify operations and{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                  scale smarter?
                </span>
              </h2>
              
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Partner with CHN Technologies — where technology meets trust, and people meet performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={onOpenModal} className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-2">
                  <span>Talk to Our Experts</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <Link 
                to="/contact"
                className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Users className="w-5 h-5" />
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;