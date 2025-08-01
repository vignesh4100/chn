import React, { useState } from 'react';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Zap, 
  Database, 
  Settings,
  Phone,
  ArrowRight,
  CheckCircle,
  Monitor,
  Layers,
  BarChart3,
  Cpu,
  Globe,
  Users,
  Award,
  Clock,
  TrendingUp,
  Building,
  Plane,
  Car,
  Factory,
  Stethoscope,
  Fuel,
  Banknote,
  Lightbulb,
  Target,
  Rocket,
  Shield,
  Eye,
  Workflow,
  GitBranch,
  TestTube,
  Upload,
  Headphones
} from 'lucide-react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const SoftwareSolutions: React.FC = ({ onOpenModal }) => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const coreServices = [
    {
      icon: Monitor,
      title: 'Web Design & Development',
      description: 'Create stunning, responsive websites and web applications that engage users and drive business growth.',
      link: '/web-design-development',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-500/10 to-cyan-600/10',
      features: ['Custom Web Design', 'Responsive Development', 'E-commerce Solutions', 'CMS Integration', 'SEO Optimization', 'Performance Optimization']
    },
    {
      icon: Code,
      title: 'Application Development',
      description: 'Build powerful desktop, mobile, and web applications tailored to your specific business requirements.',
      link: '/application-development',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10',
      features: ['Desktop Applications', 'Mobile Apps (iOS/Android)', 'Web Applications', 'Cross-platform Solutions', 'API Integration', 'Database Design']
    }
  ];

  const developmentProcess = [
    {
      icon: Target,
      title: 'Consultation & Requirements Gathering',
      description: 'Understanding your business needs and technical requirements'
    },
    {
      icon: Lightbulb,
      title: 'UI/UX Wireframing & Prototyping',
      description: 'Creating intuitive designs and interactive prototypes'
    },
    {
      icon: Code,
      title: 'Agile-Based Development (Scrum Sprints)',
      description: 'Iterative development with regular feedback and updates'
    },
    {
      icon: TestTube,
      title: 'QA Testing & UAT',
      description: 'Comprehensive testing and user acceptance validation'
    },
    {
      icon: Upload,
      title: 'Deployment & Monitoring',
      description: 'Seamless deployment with continuous monitoring'
    },
    {
      icon: Headphones,
      title: 'Post-Launch Support & Maintenance',
      description: 'Ongoing support, updates, and feature enhancements'
    }
  ];

  const techStack = {
    frontend: ['React', 'Angular', 'Vue.js'],
    backend: ['Laravel', 'Node.js', 'Django', '.NET Core'],
    mobile: ['Flutter', 'Kotlin', 'React Native'],
    database: ['PostgreSQL', 'MongoDB', 'MySQL'],
    cloud: ['AWS', 'Docker', 'Azure', 'GitHub Actions']
  };

  const benefits = [
    {
      icon: Target,
      title: 'Tailored to Your Industry',
      description: 'Customized solutions that align with your specific business needs and processes.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable & Future-Ready',
      description: 'Flexible architecture that grows with your operations and technology demands.'
    },
    {
      icon: Rocket,
      title: 'Faster Time-to-Market',
      description: 'Agile development ensures quick deployment and faster ROI.'
    },
    {
      icon: Zap,
      title: 'Improved Efficiency & Automation',
      description: 'Streamline operations and reduce manual work with smart, integrated tools.'
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Stethoscope, color: 'from-pink-500 to-red-500' },
    { name: 'BFSI', icon: Banknote, color: 'from-emerald-500 to-teal-500' },
    { name: 'Manufacturing', icon: Factory, color: 'from-purple-500 to-indigo-500' },
    { name: 'Automotive', icon: Car, color: 'from-red-500 to-orange-500' },
    { name: 'Aerospace', icon: Plane, color: 'from-blue-500 to-cyan-500' },
    { name: 'Energy', icon: Fuel, color: 'from-yellow-500 to-orange-500' },
    { name: 'Enterprise', icon: Building, color: 'from-gray-500 to-slate-600' },
    { name: 'Technology', icon: Cpu, color: 'from-indigo-500 to-purple-500' }
  ];

  const heroStats = [
    { icon: Code, value: '500+', label: 'Projects Delivered', color: 'from-blue-400 to-cyan-500' },
    { icon: Users, value: '200+', label: 'Happy Clients', color: 'from-purple-400 to-pink-500' },
    { icon: Award, value: '99%', label: 'Success Rate', color: 'from-green-400 to-teal-500' },
    { icon: Clock, value: '24/7', label: 'Support', color: 'from-orange-400 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Software Development Layout */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Software Development Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-brand-800 to-brand-900">
          {/* Code Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="codePattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  <g stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-400">
                    {/* Code Blocks */}
                    <rect x="20" y="20" width="160" height="160" rx="8" />
                    <rect x="30" y="30" width="140" height="20" rx="4" fill="currentColor" opacity="0.3" />
                    <rect x="30" y="60" width="100" height="15" rx="3" fill="currentColor" opacity="0.2" />
                    <rect x="30" y="85" width="120" height="15" rx="3" fill="currentColor" opacity="0.2" />
                    <rect x="30" y="110" width="80" height="15" rx="3" fill="currentColor" opacity="0.2" />
                    <rect x="30" y="135" width="140" height="15" rx="3" fill="currentColor" opacity="0.2" />
                    <rect x="30" y="160" width="60" height="15" rx="3" fill="currentColor" opacity="0.2" />
                    {/* Code Brackets */}
                    <path d="M40,40 L35,45 L40,50" strokeWidth="2" />
                    <path d="M160,40 L165,45 L160,50" strokeWidth="2" />
                    {/* Function Indicators */}
                    <circle cx="45" cy="70" r="2" fill="currentColor" />
                    <circle cx="45" cy="95" r="2" fill="currentColor" />
                    <circle cx="45" cy="120" r="2" fill="currentColor" />
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#codePattern)" />
            </svg>
          </div>
          
          {/* Animated Code Streams */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"
                style={{
                  top: `${5 + i * 6}%`,
                  left: '0%',
                  width: '100%',
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
          
          {/* Floating Development Icons */}
          <div className="absolute top-20 left-20 animate-float opacity-30">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-2xl border-2 border-blue-400/30 flex items-center justify-center">
              <Code className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="absolute top-40 right-32 animate-float opacity-30" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-xl border-2 border-purple-400/30 flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          <div className="absolute bottom-32 left-32 animate-float opacity-30" style={{ animationDelay: '2s' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-2xl border-2 border-green-400/30 flex items-center justify-center">
              <Monitor className="w-10 h-10 text-green-400" />
            </div>
          </div>
          <div className="absolute bottom-48 right-1/4 animate-float opacity-30" style={{ animationDelay: '0.5s' }}>
            <div className="w-14 h-14 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-xl border-2 border-orange-400/30 flex items-center justify-center">
              <Database className="w-7 h-7 text-orange-400" />
            </div>
          </div>
          
          {/* Glowing Development Zones */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
              <Code className="w-4 h-4 text-blue-300 animate-pulse" />
              <span className="text-blue-200 text-sm font-medium">Custom Software Development Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white hero-heading-large mb-6">
              <span className="block">Custom Software Development</span>
             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 animate-gradient-x">
                Services for Your Business Growth
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-5xl mx-auto leading-relaxed">
              We build scalable, secure, and high-performance software tailored to your business needs — 
              from web and mobile apps to enterprise solutions and process automation.
            </p>
            
            {/* Key Highlights */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-white text-sm font-medium">Agile Development</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-purple-400" />
                <span className="text-white text-sm font-medium">Secure Architecture</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Headphones className="w-4 h-4 text-pink-400" />
                <span className="text-white text-sm font-medium">Full-Cycle Support</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to='/contact' className="group bg-gradient-to-r from-brand-500 to-brand-700 hover:from-brand-400 hover:to-brand-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-500/25 flex items-center justify-center gap-2">
                <span>Request a Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CHN for Software Development */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Lightbulb className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-sm font-medium">Why Choose CHN</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Off-the-Shelf Doesn't Fit Everyone —{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Custom Software Does
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                At CHN Technologies, we specialize in custom software development that aligns with your workflows, 
                customers, and growth plans. Our solutions are flexible, future-ready, and designed to boost efficiency. 
                Whether you're a startup or enterprise, we tailor software that scales with you.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                {heroStats.map((stat, index) => (
                  <div
                    key={index}
                    className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <Monitor className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Web Design</h4>
                    <p className="text-gray-600 text-sm">Beautiful & responsive</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Applications</h4>
                    <p className="text-gray-600 text-sm">Custom solutions</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl animate-spin-slow opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl animate-bounce opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Software Development Services */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-8">
              <Code className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">Core Development Services</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Core Software{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                Development Services
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-4 relative overflow-hidden"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className={`space-y-2 mb-6 transition-all duration-500 ${
                    hoveredService === index ? 'opacity-100 max-h-40' : 'opacity-70 max-h-24 overflow-hidden'
                  }`}>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={service.link}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.color} hover:opacity-90 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Idea to Execution —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Our Development Workflow
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven development process ensures quality delivery and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((step, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 text-center relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 mt-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-8">
              <Layers className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">Technology Stack</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology Stack{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                We Use
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <div
                key={category}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <h3 className="text-white font-bold text-lg mb-4 capitalize group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {category}
                </h3>
                <div className="space-y-2">
                  {technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 text-slate-300 text-sm hover:bg-white/10 hover:text-white transition-all duration-200"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Benefits of Custom{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Software Development
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how custom software solutions can transform your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-2 mb-8">
              <Building className="w-4 h-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 text-sm font-medium">Industries We Serve</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industries{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient-x">
                We Serve
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${industry.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-300 group-hover:text-white transition-colors duration-300">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
          {/* Code Pattern Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Development Flow */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 400">
              <defs>
                <linearGradient id="devGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <line x1="0" y1="200" x2="1000" y2="200" stroke="url(#devGradient)" strokeWidth="2" />
              <circle cx="200" cy="200" r="6" fill="white" />
              <circle cx="400" cy="200" r="4" fill="white" />
              <circle cx="600" cy="200" r="5" fill="white" />
              <circle cx="800" cy="200" r="4" fill="white" />
            </svg>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build the Software That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Grows Your Business?
            </span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's transform your ideas into powerful software solutions that drive growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:+917010203031"
              className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <span>Request a Free Quote</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareSolutions;