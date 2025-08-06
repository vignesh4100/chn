import React from 'react';
import { 
  Smartphone, 
  Monitor, 
  Gamepad2, 
  Building, 
  Zap, 
  Code,
  Phone,
  ArrowRight,
  CheckCircle,
  Database,
  Cloud,
  Shield,
  Users,
  Award,
  Clock,
  TrendingUp,
  Rocket,
  Target,
  Eye,
  Settings,
  Layers,
  Lightbulb,
  Star,
  Play,
  Cpu,
  Globe,
  Briefcase,
  GraduationCap,
  Heart,
  ShoppingCart,
  Factory,
  GitBranch,
  TestTube,
  Upload,
  Headphones
} from 'lucide-react';
import Footer from '../components/Footer';

const ApplicationDevelopment: React.FC = ({ onOpenModal }) => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'We build intuitive, feature-rich mobile apps for Android, iOS, and cross-platform frameworks like Flutter and React Native. Whether it\'s a customer-facing app or an internal utility, we focus on performance, UX, and seamless integration.',
      features: ['Native iOS/Android', 'Cross-platform development', 'Performance optimization', 'Seamless integration'],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-500/10 to-cyan-600/10'
    },
    {
      icon: Gamepad2,
      title: 'Gaming Application Development',
      description: 'From casual games to strategy-based or educational apps, our game developers bring engaging and immersive gaming experiences to life using platforms like Unity and Unreal Engine.',
      features: ['Unity & Unreal Engine', 'Casual & strategy games', 'Educational gaming', 'Immersive experiences'],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10'
    },
    {
      icon: Monitor,
      title: 'Web Application Development',
      description: 'We create dynamic, secure, and scalable web applications using modern stacks like React, Node.js, Laravel, and Python — built to streamline workflows, automate tasks, and enhance digital engagement.',
      features: ['Modern tech stacks', 'Workflow automation', 'Scalable architecture', 'Digital engagement'],
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-500/10 to-teal-600/10'
    },
    {
      icon: Building,
      title: 'Enterprise Application Development',
      description: 'We develop custom ERP systems, HR portals, CRM platforms, and internal dashboards tailored to your organizational processes and user hierarchies — all built to scale as you grow.',
      features: ['Custom ERP systems', 'HR & CRM platforms', 'Internal dashboards', 'Scalable solutions'],
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-500/10 to-red-600/10'
    },
    {
      icon: GitBranch,
      title: 'API & Third-Party Integration',
      description: 'From payment gateways to cloud services, we ensure your app communicates with the tools you rely on, using seamless and secure API integrations.',
      features: ['Payment gateways', 'Cloud service integration', 'Secure APIs', 'Third-party connections'],
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-500/10 to-purple-600/10'
    }
  ];

  const techStack = {
    frontend: ['React', 'Vue.js', 'Angular'],
    backend: ['Node.js', 'PHP', 'Python', 'Laravel'],
    mobile: ['Kotlin', 'Swift', 'Flutter', 'React Native'],
    gamedev: ['Unity', 'Unreal Engine'],
    databases: ['MySQL', 'MongoDB', 'PostgreSQL'],
    cloud: ['AWS', 'Azure', 'Firebase']
  };

  const whyChooseUs = [
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'We prioritize user experience with intuitive interfaces'
    },
    {
      icon: Target,
      title: 'Custom-Built Solutions',
      description: 'No templates, no shortcuts — every app is built to your business'
    },
    {
      icon: Zap,
      title: 'Agile Development',
      description: 'Fast, flexible, and iterative development cycles'
    },
    {
      icon: Shield,
      title: 'Secure & Scalable Code',
      description: 'Built to protect user data and grow with your business'
    },
    {
      icon: Headphones,
      title: 'Full Lifecycle Support',
      description: 'From ideation to post-launch maintenance'
    }
  ];

  const clientTypes = [
    { name: 'Startups', icon: Rocket, description: 'With innovative app ideas', color: 'from-blue-500 to-cyan-500' },
    { name: 'Enterprises', icon: Building, description: 'Seeking digital transformation', color: 'from-purple-500 to-pink-500' },
    { name: 'E-commerce', icon: ShoppingCart, description: 'Expanding into mobile', color: 'from-green-500 to-teal-500' },
    { name: 'Education', icon: GraduationCap, description: 'Gaming, and healthcare sectors', color: 'from-orange-500 to-red-500' },
    { name: 'Internal Teams', icon: Briefcase, description: 'Needing workflow automation tools', color: 'from-indigo-500 to-purple-500' }
  ];

  const developmentProcess = [
    {
      icon: Lightbulb,
      title: 'Ideation & Planning',
      description: 'Understanding your vision and defining project scope'
    },
    {
      icon: Eye,
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user interfaces'
    },
    {
      icon: Code,
      title: 'Development & Coding',
      description: 'Building robust applications with clean, scalable code'
    },
    {
      icon: TestTube,
      title: 'Testing & QA',
      description: 'Comprehensive testing to ensure quality and performance'
    },
    {
      icon: Upload,
      title: 'Deployment & Launch',
      description: 'Seamless deployment to app stores and platforms'
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: 'Ongoing support and feature enhancements'
    }
  ];

  const heroStats = [
    { icon: Smartphone, value: '300+', label: 'Apps Developed', color: 'from-blue-400 to-cyan-500' },
    { icon: Users, value: '95%', label: 'User Satisfaction', color: 'from-purple-400 to-pink-500' },
    { icon: TrendingUp, value: '200%', label: 'Avg. Performance Boost', color: 'from-green-400 to-teal-500' },
    { icon: Clock, value: '24/7', label: 'Support', color: 'from-orange-400 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Application Development Layout */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Application Development Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-brand-800 to-brand-900">
          {/* App Development Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="appPattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                  <g stroke="currentColor" strokeWidth="1" fill="none" className="text-purple-400">
                    {/* Mobile App Frame */}
                    <rect x="40" y="20" width="70" height="110" rx="8" />
                    <rect x="45" y="30" width="60" height="90" rx="4" fill="currentColor" opacity="0.1" />
                    {/* App Icons */}
                    <rect x="50" y="35" width="12" height="12" rx="2" fill="currentColor" opacity="0.3" />
                    <rect x="67" y="35" width="12" height="12" rx="2" fill="currentColor" opacity="0.3" />
                    <rect x="84" y="35" width="12" height="12" rx="2" fill="currentColor" opacity="0.3" />
                    <rect x="50" y="52" width="12" height="12" rx="2" fill="currentColor" opacity="0.3" />
                    <rect x="67" y="52" width="12" height="12" rx="2" fill="currentColor" opacity="0.3" />
                    <rect x="84" y="52" width="12" height="12" rx="2" fill="currentColor" opacity="0.3" />
                    {/* Navigation */}
                    <rect x="50" y="105" width="46" height="8" rx="4" fill="currentColor" opacity="0.2" />
                    {/* Connection Lines */}
                    <path d="M75,130 L75,140 M70,135 L80,135" strokeWidth="2" opacity="0.4" />
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#appPattern)" />
            </svg>
          </div>
          
          {/* Animated Development Streams */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"
                style={{
                  top: `${10 + i * 9}%`,
                  left: '0%',
                  width: '100%',
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
          
          {/* Floating App Development Icons */}
          <div className="absolute top-20 left-20 animate-float opacity-30">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-2xl border-2 border-purple-400/30 flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          <div className="absolute top-40 right-32 animate-float opacity-30" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-xl border-2 border-blue-400/30 flex items-center justify-center">
              <Monitor className="w-6 h-6 text-blue-400" />
            </div>
          </div>
          <div className="absolute bottom-32 left-32 animate-float opacity-30" style={{ animationDelay: '2s' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-2xl border-2 border-green-400/30 flex items-center justify-center">
              <Gamepad2 className="w-10 h-10 text-green-400" />
            </div>
          </div>
          <div className="absolute bottom-48 right-1/4 animate-float opacity-30" style={{ animationDelay: '0.5s' }}>
            <div className="w-14 h-14 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-xl border-2 border-orange-400/30 flex items-center justify-center">
              <Building className="w-7 h-7 text-orange-400" />
            </div>
          </div>
          
          {/* Glowing Development Zones */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
                <Code className="w-4 h-4 text-purple-300 animate-pulse" />
                <span className="text-purple-200 text-sm font-medium">Application Development Excellence</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white hero-heading-large mb-6">
                <span className="block">Application</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 animate-gradient-x">
                  Development
                </span>
              </h1>
              
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-4">
                  Build Smart Applications That Scale With Your Business
                </h2>
                
                <p className="text-xl text-slate-300 leading-relaxed">
                  At CHN Technologies, we specialize in developing custom applications that solve real business challenges, 
                  enhance user experiences, and support long-term digital growth. From mobile apps to enterprise systems 
                  and interactive platforms — we bring your vision to life with agile, scalable, and high-performing applications.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="tel:+917010203031"
                  className="group bg-gradient-to-r from-brand-500 to-brand-700 hover:from-brand-400 hover:to-brand-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-500/25 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Let's build your next big app</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button onClick={onOpenModal} className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  <span>Start Your Project Today</span>
                </button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-purple-400 mb-1">300+</div>
                  <div className="text-slate-400 text-sm">Apps Built</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-pink-400 mb-1">95%</div>
                  <div className="text-slate-400 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual Element - App Development Showcase */}
            <div className="relative">
              {/* Main App Development Dashboard */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-lg">App Development Studio</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">In Development</span>
                  </div>
                </div>
                
                {/* App Types Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: Smartphone, color: 'from-blue-400 to-cyan-500', label: 'Mobile Apps', count: '150+' },
                    { icon: Monitor, color: 'from-purple-400 to-pink-500', label: 'Web Apps', count: '120+' },
                    { icon: Gamepad2, color: 'from-green-400 to-teal-500', label: 'Games', count: '30+' },
                    { icon: Building, color: 'from-orange-400 to-red-500', label: 'Enterprise', count: '80+' },
                    { icon: Database, color: 'from-indigo-400 to-purple-500', label: 'APIs', count: '200+' },
                    { icon: Cloud, color: 'from-cyan-400 to-blue-500', label: 'Cloud Apps', count: '90+' }
                  ].map((app, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-r ${app.color} rounded-xl mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <app.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-white text-xs font-medium mb-1">{app.label}</div>
                      <div className="text-slate-300 text-xs">{app.count}</div>
                      
                      {/* Status Indicator */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
                
                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {heroStats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300"
                    >
                      <div className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r ${stat.color} rounded-lg mb-2`}>
                        <stat.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className="text-slate-400 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Development Activity */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <h4 className="text-white text-sm font-medium mb-3">Recent Development Activity</h4>
                  <div className="space-y-2">
                    {[
                      { action: 'Mobile app deployed', project: 'E-commerce iOS', time: '2h ago', status: 'success' },
                      { action: 'Game level completed', project: 'Educational Game', time: '4h ago', status: 'success' },
                      { action: 'API integration tested', project: 'Enterprise CRM', time: '6h ago', status: 'success' },
                      { action: 'UI/UX review passed', project: 'Healthcare App', time: '8h ago', status: 'success' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            activity.status === 'success' ? 'bg-green-400' : 
                            activity.status === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
                          }`}></div>
                          <span className="text-slate-300">{activity.action}</span>
                          <span className="text-slate-400">{activity.project}</span>
                        </div>
                        <span className="text-slate-500">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Development Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-2xl animate-spin-slow opacity-80 flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-xl animate-bounce opacity-60 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>

              {/* Development Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-30">
                  <defs>
                    <linearGradient id="devGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  <line x1="25%" y1="25%" x2="75%" y2="75%" stroke="url(#devGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                  <line x1="75%" y1="25%" x2="25%" y2="75%" stroke="url(#devGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <circle cx="50%" cy="50%" r="30%" fill="none" stroke="url(#devGradient)" strokeWidth="1" strokeDasharray="8,4" className="animate-spin-slow" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Application Development Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 text-sm font-medium">Our Application Development Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Application Development{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Services
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-purple-200 transition-all duration-500 transform hover:-translate-y-4 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* App Development Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-2 mb-8">
              <Layers className="w-4 h-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 text-sm font-medium">Tech Stack We Work With</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Tech Stack We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient-x">
                Work With
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-6 gap-8">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <div
                key={category}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <h3 className="text-white font-bold text-lg mb-4 capitalize group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {category === 'gamedev' ? 'Game Dev' : category}
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

      {/* Development Process */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Settings className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">Development Process</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Concept to Code —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                We're With You
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((step, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 text-center relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 mt-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
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

      {/* Why Choose CHN */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-6 py-2 mb-8">
              <Award className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-green-300 text-sm font-medium">Why CHN for App Development?</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Why CHN for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 animate-gradient-x">
                App Development?
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-teal-400 transition-all duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Build For */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 text-sm font-medium">Who We Build For</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Build For
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-orange-200 transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${client.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <client.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
                  {client.name}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600">
          {/* App Development Pattern Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-2xl blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* App Development Flow */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 400">
              <defs>
                <linearGradient id="appFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <line x1="0" y1="200" x2="1000" y2="200" stroke="url(#appFlowGradient)" strokeWidth="2" />
              <circle cx="200" cy="200" r="5" fill="white" />
              <circle cx="400" cy="200" r="4" fill="white" />
              <circle cx="600" cy="200" r="6" fill="white" />
              <circle cx="800" cy="200" r="4" fill="white" />
            </svg>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            From Concept to Code —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              We're With You
            </span>
          </h3>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Whether it's a mobile app to engage customers or a web platform to drive efficiency, CHN Technologies 
            turns your ideas into digital solutions that deliver. Let's build your next big app.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:+917010203031"
              className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Contact us today for a free consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Star className="w-5 h-5" />
              <span>Start your project today</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApplicationDevelopment;