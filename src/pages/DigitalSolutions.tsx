import React from 'react';
import { 
  BarChart3, 
  Zap, 
  Database, 
  TrendingUp, 
  Eye, 
  Activity,
  Phone,
  ArrowRight,
  CheckCircle,
  Brain,
  Cpu,
  Cloud,
  Settings,
  Users,
  Award,
  Clock,
  Target,
  Lightbulb,
  Rocket,
  Shield,
  Globe,
  Building,
  Factory,
  Stethoscope,
  Banknote,
  Car,
  Plane,
  GraduationCap,
  ShoppingCart,
  Layers,
  GitBranch,
  Workflow,
  Bot,
  LineChart,
  PieChart,
  Monitor,
  Smartphone,
  Server,
  HardDrive
} from 'lucide-react';
import Footer from '../components/Footer';

const DigitalSolutions: React.FC = () => {
  const digitalServices = [
    {
      icon: BarChart3,
      title: 'Data Analytics & Data Visualization',
      subtitle: 'Transforming Data into Actionable Insights',
      description: 'In the digital age, data is the new currency. Our Data Analytics & Visualization services help you harness the power of your business data to gain deep insights, identify trends, and drive better decision-making.',
      features: [
        'Business Intelligence (BI) Dashboards',
        'Interactive Data Visualization', 
        'Predictive & Descriptive Analytics',
        'KPI Tracking & Reporting',
        'Real-time Data Monitoring'
      ],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-500/10 to-cyan-600/10'
    },
    {
      icon: Zap,
      title: 'Automation & Digital Transformation',
      subtitle: 'Streamline Operations & Embrace Digital Excellence',
      description: 'Our Automation & Digital Transformation services are designed to simplify complex business processes, reduce manual effort, and boost operational efficiency. We help organizations adopt intelligent automation and digital tools that drive innovation and improve productivity.',
      features: [
        'Business Process Automation (BPA)',
        'Robotic Process Automation (RPA)',
        'Digital Workflow Optimization',
        'Cloud Integration & Digital Tools',
        'AI & Machine Learning Implementation'
      ],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10'
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: 'Customized Solutions for Your Business',
      description: 'Tailored digital solutions that align with your specific business needs and objectives'
    },
    {
      icon: Users,
      title: 'Experienced Team of Digital Experts',
      description: 'Certified professionals with deep expertise in data analytics and automation technologies'
    },
    {
      icon: Settings,
      title: 'End-to-End Implementation & Support',
      description: 'Complete project lifecycle management from planning to deployment and ongoing support'
    },
    {
      icon: Rocket,
      title: 'Scalable and Future-Ready Technologies',
      description: 'Solutions built with modern, scalable technologies that grow with your business'
    }
  ];

  const industries = [
    { name: 'Manufacturing', icon: Factory, color: 'from-blue-500 to-cyan-500' },
    { name: 'Healthcare', icon: Stethoscope, color: 'from-pink-500 to-red-500' },
    { name: 'BFSI', icon: Banknote, color: 'from-emerald-500 to-teal-500' },
    { name: 'Automotive', icon: Car, color: 'from-red-500 to-orange-500' },
    { name: 'Aerospace', icon: Plane, color: 'from-indigo-500 to-purple-500' },
    { name: 'Education', icon: GraduationCap, color: 'from-green-500 to-teal-500' },
    { name: 'Retail', icon: ShoppingCart, color: 'from-orange-500 to-red-500' },
    { name: 'Enterprise', icon: Building, color: 'from-gray-500 to-slate-600' }
  ];

  const heroStats = [
    { icon: BarChart3, value: '500+', label: 'Data Projects', color: 'from-blue-400 to-cyan-500' },
    { icon: Zap, value: '80%', label: 'Process Efficiency', color: 'from-purple-400 to-pink-500' },
    { icon: TrendingUp, value: '300%', label: 'ROI Improvement', color: 'from-green-400 to-teal-500' },
    { icon: Clock, value: '24/7', label: 'Data Monitoring', color: 'from-orange-400 to-red-500' }
  ];

  const dataAnalyticsFeatures = [
    { icon: PieChart, title: 'Interactive Dashboards', description: 'Real-time business intelligence dashboards' },
    { icon: LineChart, title: 'Predictive Analytics', description: 'AI-powered forecasting and trend analysis' },
    { icon: Eye, title: 'Data Visualization', description: 'Clear, engaging visual representations of data' },
    { icon: Activity, title: 'Real-time Monitoring', description: 'Live data tracking and automated alerts' }
  ];

  const automationFeatures = [
    { icon: Bot, title: 'RPA Implementation', description: 'Robotic process automation for repetitive tasks' },
    { icon: Workflow, title: 'Process Optimization', description: 'Streamlined workflows and digital processes' },
    { icon: Cloud, title: 'Cloud Integration', description: 'Seamless cloud-based digital transformation' },
    { icon: Brain, title: 'AI Implementation', description: 'Machine learning and artificial intelligence solutions' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Digital Solutions Layout */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Digital Transformation Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
          {/* Data Flow Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="dataPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  <g stroke="currentColor" strokeWidth="1" fill="none" className="text-indigo-400">
                    {/* Data Nodes */}
                    <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
                    <circle cx="150" cy="50" r="6" fill="currentColor" opacity="0.2" />
                    <circle cx="50" cy="150" r="7" fill="currentColor" opacity="0.25" />
                    <circle cx="150" cy="150" r="5" fill="currentColor" opacity="0.2" />
                    <circle cx="100" cy="100" r="10" fill="currentColor" opacity="0.4" />
                    {/* Data Connections */}
                    <path d="M50,50 L150,50 M50,150 L150,150 M50,50 L50,150 M150,50 L150,150" strokeDasharray="3,3" opacity="0.3" />
                    <path d="M50,50 L100,100 M150,50 L100,100 M50,150 L100,100 M150,150 L100,100" strokeDasharray="2,2" opacity="0.2" />
                    {/* Analytics Symbols */}
                    <rect x="40" y="40" width="20" height="20" rx="2" opacity="0.1" />
                    <rect x="140" y="40" width="20" height="20" rx="2" opacity="0.1" />
                    <rect x="40" y="140" width="20" height="20" rx="2" opacity="0.1" />
                    <rect x="140" y="140" width="20" height="20" rx="2" opacity="0.1" />
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dataPattern)" />
            </svg>
          </div>
          
          {/* Animated Data Streams */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-pulse"
                style={{
                  top: `${15 + i * 12}%`,
                  left: '0%',
                  width: '100%',
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '4s'
                }}
              />
            ))}
          </div>
          
          {/* Floating Digital Icons */}
          <div className="absolute top-20 left-20 animate-float opacity-30">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-2xl border-2 border-blue-400/30 flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="absolute top-40 right-32 animate-float opacity-30" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-xl border-2 border-purple-400/30 flex items-center justify-center">
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          <div className="absolute bottom-32 left-32 animate-float opacity-30" style={{ animationDelay: '2s' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-2xl border-2 border-green-400/30 flex items-center justify-center">
              <Brain className="w-10 h-10 text-green-400" />
            </div>
          </div>
          <div className="absolute bottom-48 right-1/4 animate-float opacity-30" style={{ animationDelay: '0.5s' }}>
            <div className="w-14 h-14 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-xl border-2 border-orange-400/30 flex items-center justify-center">
              <Database className="w-7 h-7 text-orange-400" />
            </div>
          </div>
          
          {/* Glowing Digital Zones */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
                <Brain className="w-4 h-4 text-indigo-300 animate-pulse" />
                <span className="text-indigo-200 text-sm font-medium">Digital Solutions Excellence</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                <span className="block">Digital</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 animate-gradient-x">
                  Solutions
                </span>
              </h1>
              
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-4">
                  Empowering Business Growth Through Data & Automation
                </h2>
                
                <p className="text-xl text-slate-300 leading-relaxed">
                  At CHN Technologies, we help businesses unlock their full potential with cutting-edge digital solutions. 
                  By combining Data Analytics & Visualization with Automation & Digital Transformation, we enable organizations 
                  to make smarter decisions, streamline operations, and stay ahead in today's fast-changing digital landscape.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="tel:+917010203031"
                  className="group bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Let's Transform Your Business Together</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5" />
                  <span>Contact us today to get started!</span>
                </button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-blue-400 mb-1">500+</div>
                  <div className="text-slate-400 text-sm">Data Projects</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-indigo-400 mb-1">80%</div>
                  <div className="text-slate-400 text-sm">Efficiency Boost</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual Element - Digital Analytics Dashboard */}
            <div className="relative">
              {/* Main Digital Analytics Dashboard */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-lg">Digital Analytics Hub</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Live Data</span>
                  </div>
                </div>
                
                {/* Analytics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: BarChart3, color: 'from-blue-400 to-cyan-500', label: 'Analytics', value: '95%' },
                    { icon: Zap, color: 'from-purple-400 to-pink-500', label: 'Automation', value: '87%' },
                    { icon: TrendingUp, color: 'from-green-400 to-teal-500', label: 'Growth', value: '234%' },
                    { icon: Database, color: 'from-orange-400 to-red-500', label: 'Data Quality', value: '99%' }
                  ].map((metric, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-r ${metric.color} rounded-xl mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <metric.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-white text-xs font-medium mb-1">{metric.label}</div>
                      <div className="text-slate-300 text-lg font-bold">{metric.value}</div>
                      
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
                
                {/* Digital Transformation Progress */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <h4 className="text-white text-sm font-medium mb-3">Digital Transformation Progress</h4>
                  <div className="space-y-3">
                    {[
                      { process: 'Data Migration', progress: 95, color: 'bg-blue-400' },
                      { process: 'Process Automation', progress: 87, color: 'bg-purple-400' },
                      { process: 'Analytics Implementation', progress: 92, color: 'bg-green-400' }
                    ].map((item, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-300">{item.process}</span>
                          <span className="text-white">{item.progress}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div 
                            className={`${item.color} h-2 rounded-full transition-all duration-1000`}
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Digital Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-2xl animate-spin-slow opacity-80 flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl animate-bounce opacity-60 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>

              {/* Digital Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-30">
                  <defs>
                    <linearGradient id="digitalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                  <line x1="20%" y1="30%" x2="80%" y2="70%" stroke="url(#digitalGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                  <line x1="80%" y1="30%" x2="20%" y2="70%" stroke="url(#digitalGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <circle cx="50%" cy="50%" r="25%" fill="none" stroke="url(#digitalGradient)" strokeWidth="1" strokeDasharray="8,4" className="animate-spin-slow" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Digital Solutions Include Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Lightbulb className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">Our Digital Solutions Include</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Digital Solutions{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Include
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-16">
            {digitalServices.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <h4 className={`text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                    {service.subtitle}
                  </h4>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-900 mb-3">Our Expertise Includes:</h5>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <p className="text-gray-600 leading-relaxed">
                      {index === 0 
                        ? "With visually engaging dashboards and powerful analytics, we help you turn complex data into clear, actionable insights that fuel business growth."
                        : "By automating routine tasks and embracing digital transformation, you can save time, reduce costs, and focus on what matters most—growing your business."
                      }
                    </p>
                  </div>
                </div>
                
                {/* Visual Element */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className={`bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 border border-gray-100`}>
                    <div className="grid grid-cols-2 gap-4">
                      {(index === 0 ? dataAnalyticsFeatures : automationFeatures).map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                          <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl mx-auto mb-3 flex items-center justify-center`}>
                            <feature.icon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-6 py-2 mb-8">
              <Award className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-green-300 text-sm font-medium">Why Choose Us?</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 animate-gradient-x">
                CHN Technologies?
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                
                {/* Check mark indicator */}
                <div className="mt-4 flex justify-center">
                  <CheckCircle className="w-6 h-6 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Transform */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
              <Building className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 text-sm font-medium">Industries We Transform</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Transform
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Our digital solutions empower businesses across diverse industries to harness data insights 
              and automate processes for enhanced efficiency and growth.
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${industry.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
          {/* Digital Transformation Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-2xl blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Data Flow Network */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 400">
              <defs>
                <linearGradient id="dataFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <line x1="0" y1="200" x2="1000" y2="200" stroke="url(#dataFlowGradient)" strokeWidth="2" />
              <circle cx="200" cy="200" r="6" fill="white" />
              <circle cx="400" cy="200" r="4" fill="white" />
              <circle cx="600" cy="200" r="5" fill="white" />
              <circle cx="800" cy="200" r="4" fill="white" />
            </svg>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Transform Your Business{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Together
            </span>
          </h3>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Partner with CHN Technologies to unlock the power of digital innovation. Whether you're looking to harness 
            data-driven insights or automate business processes, we're here to help you succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:+917010203031"
              className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Contact us today to get started!</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Rocket className="w-5 h-5" />
              <span>Explore Digital Solutions</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalSolutions;