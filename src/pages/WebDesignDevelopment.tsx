import React from 'react';
import { 
  Monitor, 
  Smartphone, 
  Zap, 
  Search, 
  Shield, 
  Layers,
  Phone,
  ArrowRight,
  CheckCircle,
  Code,
  Palette,
  Globe,
  TrendingUp,
  Users,
  Award,
  Clock,
  Building,
  ShoppingCart,
  Briefcase,
  GraduationCap,
  Heart,
  Target,
  Rocket,
  Eye,
  Settings,
  BarChart3,
  Lightbulb,
  Star,
  Play
} from 'lucide-react';
import Footer from '../components/Footer';

const WebDesignDevelopment: React.FC = ({ onOpenModal }) => {
  const services = [
    {
      icon: Palette,
      title: 'Custom Website Design',
      description: 'We craft visually engaging and responsive websites that reflect your brand identity and engage your audience. Every design is built with usability, performance, and storytelling in mind.',
      features: ['Brand-aligned design', 'User experience focus', 'Visual storytelling', 'Usability optimization'],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-500/10 to-cyan-600/10'
    },
    {
      icon: Code,
      title: 'Website Development',
      description: 'Our development team brings your ideas to life using the latest technologies — from HTML/CSS and JavaScript to dynamic CMS platforms like WordPress, Webflow, and custom frameworks.',
      features: ['Modern technologies', 'CMS integration', 'Custom frameworks', 'Dynamic functionality'],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10'
    },
    {
      icon: Smartphone,
      title: 'Responsive & Mobile-First Design',
      description: 'With mobile traffic dominating the web, we ensure your website looks and performs flawlessly across all devices — desktop, tablet, and mobile.',
      features: ['Mobile-first approach', 'Cross-device compatibility', 'Responsive layouts', 'Touch optimization'],
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-500/10 to-teal-600/10'
    },
    {
      icon: Target,
      title: 'Landing Page & Microsite Development',
      description: 'We design high-converting landing pages and campaign-focused microsites optimized for lead generation and marketing ROI.',
      features: ['Conversion optimization', 'Lead generation focus', 'Campaign alignment', 'Marketing ROI'],
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-500/10 to-red-600/10'
    },
    {
      icon: Zap,
      title: 'Speed, SEO & Security Optimization',
      description: 'Our websites are SEO-optimized, lightning fast, and built with secure architecture to ensure better rankings, performance, and peace of mind.',
      features: ['SEO optimization', 'Performance tuning', 'Security hardening', 'Search rankings'],
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-500/10 to-purple-600/10'
    }
  ];

  const technologies = {
    frontend: ['HTML5', 'CSS3', 'JavaScript'],
    frameworks: ['React', 'Next.js', 'Vue.js'],
    cms: ['WordPress', 'Webflow', 'Wix', 'Shopify'],
    backend: ['Node.js', 'PHP', 'Laravel'],
    design: ['Figma', 'Adobe XD']
  };

  const whyChooseUs = [
    {
      icon: Target,
      title: 'Custom-Built Solutions',
      description: 'Every website is designed to fit your business goals, not a template.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Architecture',
      description: 'Ready to grow as your business expands.'
    },
    {
      icon: Search,
      title: 'SEO & Performance Focused',
      description: 'Designed to rank well and load fast.'
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'We collaborate closely to ensure your vision is realized.'
    },
    {
      icon: Settings,
      title: 'End-to-End Support',
      description: 'From discovery to deployment, and beyond.'
    }
  ];

  const clientTypes = [
    { name: 'Startups', icon: Rocket, description: 'Seeking a bold digital presence', color: 'from-blue-500 to-cyan-500' },
    { name: 'Enterprises', icon: Building, description: 'Needing scalable corporate websites', color: 'from-purple-500 to-pink-500' },
    { name: 'Marketing Teams', icon: BarChart3, description: 'Launching campaign pages', color: 'from-green-500 to-teal-500' },
    { name: 'E-commerce', icon: ShoppingCart, description: 'Looking for high-converting storefronts', color: 'from-orange-500 to-red-500' },
    { name: 'Service Providers', icon: Briefcase, description: 'Needing lead-generation landing pages', color: 'from-indigo-500 to-purple-500' }
  ];

  const heroStats = [
    { icon: Globe, value: '500+', label: 'Websites Built', color: 'from-blue-400 to-cyan-500' },
    { icon: Users, value: '98%', label: 'Client Satisfaction', color: 'from-purple-400 to-pink-500' },
    { icon: TrendingUp, value: '150%', label: 'Avg. Traffic Increase', color: 'from-green-400 to-teal-500' },
    { icon: Clock, value: '24/7', label: 'Support', color: 'from-orange-400 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Web Design Layout */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Web Design Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
          {/* Design Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="designGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <g stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-400">
                    <rect x="10" y="10" width="80" height="60" rx="4" />
                    <rect x="15" y="15" width="70" height="8" rx="2" fill="currentColor" opacity="0.3" />
                    <rect x="15" y="28" width="50" height="6" rx="1" fill="currentColor" opacity="0.2" />
                    <rect x="15" y="38" width="60" height="6" rx="1" fill="currentColor" opacity="0.2" />
                    <rect x="15" y="48" width="40" height="6" rx="1" fill="currentColor" opacity="0.2" />
                    <rect x="15" y="58" width="65" height="8" rx="2" fill="currentColor" opacity="0.3" />
                    <circle cx="20" cy="19" r="2" fill="currentColor" />
                    <circle cx="25" cy="19" r="2" fill="currentColor" />
                    <circle cx="30" cy="19" r="2" fill="currentColor" />
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#designGrid)" />
            </svg>
          </div>
          
          {/* Animated Design Elements */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"
                style={{
                  top: `${8 + i * 8}%`,
                  left: '0%',
                  width: '100%',
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '4s'
                }}
              />
            ))}
          </div>
          
          {/* Floating Design Icons */}
          <div className="absolute top-20 left-20 animate-float opacity-30">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-2xl border-2 border-blue-400/30 flex items-center justify-center">
              <Palette className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="absolute top-40 right-32 animate-float opacity-30" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-xl border-2 border-purple-400/30 flex items-center justify-center">
              <Monitor className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          <div className="absolute bottom-32 left-32 animate-float opacity-30" style={{ animationDelay: '2s' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-2xl border-2 border-green-400/30 flex items-center justify-center">
              <Code className="w-10 h-10 text-green-400" />
            </div>
          </div>
          <div className="absolute bottom-48 right-1/4 animate-float opacity-30" style={{ animationDelay: '0.5s' }}>
            <div className="w-14 h-14 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-xl border-2 border-orange-400/30 flex items-center justify-center">
              <Smartphone className="w-7 h-7 text-orange-400" />
            </div>
          </div>
          
          {/* Glowing Design Zones */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
                <Monitor className="w-4 h-4 text-blue-300 animate-pulse" />
                <span className="text-blue-200 text-sm font-medium">Web Design & Development Excellence</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                <span className="block">Web Design &</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 animate-gradient-x">
                  Development
                </span>
              </h1>
              
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-4">
                  Crafting Websites That Perform, Engage, and Convert
                </h2>
                
                <p className="text-xl text-slate-300 leading-relaxed">
                  Bring your digital presence to life with CHN Technologies. We design and develop custom websites 
                  that blend stunning visuals with seamless functionality — helping you captivate audiences, 
                  tell your story, and drive real business results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="tel:+917010203031"
                  className="group bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Let's Build Your Website for Impact</span>
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
                  <div className="text-3xl font-bold text-blue-400 mb-1">500+</div>
                  <div className="text-slate-400 text-sm">Websites</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">98%</div>
                  <div className="text-slate-400 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual Element - Design Showcase */}
            <div className="relative">
              {/* Main Design Showcase */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* Showcase Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-lg">Design Showcase</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Live Preview</span>
                  </div>
                </div>
                
                {/* Website Preview Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { type: 'Corporate', color: 'from-blue-400 to-cyan-500', icon: Building },
                    { type: 'E-commerce', color: 'from-purple-400 to-pink-500', icon: ShoppingCart },
                    { type: 'Landing Page', color: 'from-green-400 to-teal-500', icon: Target },
                    { type: 'Portfolio', color: 'from-orange-400 to-red-500', icon: Briefcase }
                  ].map((preview, index) => (
                    <div
                      key={index}
                      className="group/item relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      <div className={`w-full h-20 bg-gradient-to-r ${preview.color} rounded-xl mb-3 flex items-center justify-center group-hover/item:scale-105 transition-transform duration-300`}>
                        <preview.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-white text-xs font-medium">{preview.type}</div>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
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
                
                {/* Design Tools */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <h4 className="text-white text-sm font-medium mb-3">Design Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'Adobe XD', 'React', 'WordPress', 'Shopify'].map((tool, index) => (
                      <span
                        key={index}
                        className="bg-white/10 text-slate-300 px-3 py-1 rounded-lg text-xs hover:bg-white/20 hover:text-white transition-all duration-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Design Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-2xl animate-spin-slow opacity-80 flex items-center justify-center">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl animate-bounce opacity-60 flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>

              {/* Design Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-30">
                  <defs>
                    <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <line x1="20%" y1="30%" x2="80%" y2="70%" stroke="url(#designGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                  <line x1="80%" y1="30%" x2="20%" y2="70%" stroke="url(#designGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1s' }} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Lightbulb className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">What We Do</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Do
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-4 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
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

                {/* Design Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-8">
              <Layers className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">Technologies We Work With</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technologies We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-gradient-x">
                Work With
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {Object.entries(technologies).map(([category, techs], index) => (
              <div
                key={category}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <h3 className="text-white font-bold text-lg mb-4 capitalize group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                  {category === 'cms' ? 'CMS' : category}
                </h3>
                <div className="space-y-2">
                  {techs.map((tech, techIndex) => (
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 text-sm font-medium">Why Choose CHN</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose CHN for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Web Development?
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-purple-200 transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-6 py-2 mb-8">
              <Users className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-green-300 text-sm font-medium">Who We Work With</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Who We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 animate-gradient-x">
                Work With
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${client.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <client.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-teal-400 transition-all duration-300">
                  {client.name}
                </h3>
                
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-purple-600">
          {/* Design Pattern Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-2xl blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Design Flow */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 400">
              <defs>
                <linearGradient id="designFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <line x1="0" y1="200" x2="1000" y2="200" stroke="url(#designFlowGradient)" strokeWidth="2" />
              <circle cx="200" cy="200" r="5" fill="white" />
              <circle cx="400" cy="200" r="4" fill="white" />
              <circle cx="600" cy="200" r="6" fill="white" />
              <circle cx="800" cy="200" r="4" fill="white" />
            </svg>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            From Idea to Launch{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              We've Got You Covered
            </span>
          </h3>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Whether you're building your first website or revamping an outdated one, CHN Technologies delivers 
            results that look good and work smart. Let's build a website that works for you.
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
              <span>View Our Portfolio</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDesignDevelopment;