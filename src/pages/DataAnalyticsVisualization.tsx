import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Activity, 
  PieChart,
  LineChart,
  Phone,
  ArrowRight,
  CheckCircle,
  Monitor,
  Database,
  Globe,
  Users,
  Award,
  Clock,
  Target,
  Lightbulb,
  Rocket,
  Shield,
  Building,
  Factory,
  Stethoscope,
  Banknote,
  Car,
  Plane,
  GraduationCap,
  ShoppingCart,
  Layers,
  Settings,
  Zap,
  Brain,
  Star,
  Play,
  Briefcase,
  FileText,
  Calendar,
  DollarSign,
  TrendingDown,
  AlertCircle,
  CheckSquare
} from 'lucide-react';
import Footer from '../components/Footer';

const DataAnalyticsVisualization: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Business Intelligence Dashboards',
      description: 'We build intuitive, real-time dashboards using tools like Power BI, Tableau, and Google Data Studio to give stakeholders instant access to KPIs, metrics, and operational insights.',
      features: ['Real-time KPI tracking', 'Interactive visualizations', 'Stakeholder access control', 'Operational insights'],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-500/10 to-cyan-600/10'
    },
    {
      icon: FileText,
      title: 'Custom Data Reporting Solutions',
      description: 'Whether it\'s HR performance, compliance tracking, or project timelines, we create tailored reports that are easy to understand and aligned with your business goals.',
      features: ['HR performance reports', 'Compliance tracking', 'Project timeline reports', 'Goal-aligned metrics'],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10'
    },
    {
      icon: TrendingUp,
      title: 'Predictive & Descriptive Analytics',
      description: 'We help you go beyond reporting. Using advanced analytics, we enable trend forecasting, risk identification, and performance optimization across departments.',
      features: ['Trend forecasting', 'Risk identification', 'Performance optimization', 'Advanced analytics'],
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-500/10 to-teal-600/10'
    },
    {
      icon: Activity,
      title: 'Process & Operational Analytics',
      description: 'Visualize bottlenecks, delays, and inefficiencies. Our analytics solutions help you fine-tune internal processes with data-backed clarity.',
      features: ['Bottleneck identification', 'Process visualization', 'Efficiency analysis', 'Data-backed insights'],
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-500/10 to-red-600/10'
    },
    {
      icon: Eye,
      title: 'Interactive Visualizations',
      description: 'We transform complex datasets into engaging visuals that make data exploration simple, intuitive, and effective for all levels of users.',
      features: ['Complex data transformation', 'Engaging visual design', 'Intuitive exploration', 'Multi-level accessibility'],
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-500/10 to-purple-600/10'
    }
  ];

  const keyBenefits = [
    {
      icon: Zap,
      title: 'Faster Decision-Making',
      description: 'Real-time data at your fingertips'
    },
    {
      icon: Shield,
      title: 'Enhanced Transparency',
      description: 'Across departments with centralized reporting'
    },
    {
      icon: Brain,
      title: 'Data-Driven Culture',
      description: 'That supports innovation and accountability'
    },
    {
      icon: Settings,
      title: 'Custom Dashboards',
      description: 'Built to your workflow and metrics'
    },
    {
      icon: AlertCircle,
      title: 'Reduced Operational Blind Spots',
      description: 'Through visual process tracking'
    }
  ];

  const beneficiaries = [
    { 
      name: 'CXOs and Operations Heads', 
      icon: Target, 
      description: 'Seeking real-time visibility',
      color: 'from-blue-500 to-cyan-500' 
    },
    { 
      name: 'HR Managers', 
      icon: Users, 
      description: 'Tracking employee productivity and attrition',
      color: 'from-purple-500 to-pink-500' 
    },
    { 
      name: 'Compliance Teams', 
      icon: CheckSquare, 
      description: 'Monitoring statutory activities',
      color: 'from-green-500 to-teal-500' 
    },
    { 
      name: 'Project Managers', 
      icon: Briefcase, 
      description: 'Overseeing multi-team collaboration',
      color: 'from-orange-500 to-red-500' 
    },
    { 
      name: 'Finance Teams', 
      icon: DollarSign, 
      description: 'Visualizing expense and revenue flows',
      color: 'from-indigo-500 to-purple-500' 
    }
  ];

  const tools = [
    { name: 'Power BI', icon: BarChart3, color: 'from-yellow-500 to-orange-500' },
    { name: 'Tableau', icon: PieChart, color: 'from-blue-500 to-cyan-500' },
    { name: 'Google Data Studio', icon: LineChart, color: 'from-green-500 to-teal-500' },
    { name: 'Excel Automation & Macros', icon: FileText, color: 'from-purple-500 to-pink-500' },
    { name: 'Custom Web-Based Dashboards', icon: Monitor, color: 'from-red-500 to-orange-500' }
  ];

  const heroStats = [
    { icon: BarChart3, value: '500+', label: 'Dashboards Created', color: 'from-blue-400 to-cyan-500' },
    { icon: TrendingUp, value: '90%', label: 'Decision Speed Increase', color: 'from-purple-400 to-pink-500' },
    { icon: Eye, value: '100%', label: 'Data Visibility', color: 'from-green-400 to-teal-500' },
    { icon: Clock, value: '24/7', label: 'Real-time Monitoring', color: 'from-orange-400 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Analytics & Visualization Layout */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Analytics Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-brand-800 to-brand-900">
          {/* Data Visualization Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="analyticsPattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                  <g stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-400">
                    {/* Chart Elements */}
                    <rect x="20" y="20" width="110" height="80" rx="4" />
                    <rect x="25" y="25" width="100" height="70" rx="2" fill="currentColor" opacity="0.05" />
                    {/* Bar Chart */}
                    <rect x="30" y="60" width="8" height="30" fill="currentColor" opacity="0.3" />
                    <rect x="42" y="50" width="8" height="40" fill="currentColor" opacity="0.3" />
                    <rect x="54" y="45" width="8" height="45" fill="currentColor" opacity="0.3" />
                    <rect x="66" y="55" width="8" height="35" fill="currentColor" opacity="0.3" />
                    <rect x="78" y="40" width="8" height="50" fill="currentColor" opacity="0.3" />
                    {/* Line Chart */}
                    <path d="M90,70 L95,60 L100,65 L105,55 L110,50 L115,60" strokeWidth="2" opacity="0.4" />
                    {/* Data Points */}
                    <circle cx="90" cy="70" r="2" fill="currentColor" opacity="0.5" />
                    <circle cx="95" cy="60" r="2" fill="currentColor" opacity="0.5" />
                    <circle cx="100" cy="65" r="2" fill="currentColor" opacity="0.5" />
                    <circle cx="105" cy="55" r="2" fill="currentColor" opacity="0.5" />
                    <circle cx="110" cy="50" r="2" fill="currentColor" opacity="0.5" />
                    <circle cx="115" cy="60" r="2" fill="currentColor" opacity="0.5" />
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#analyticsPattern)" />
            </svg>
          </div>
          
          {/* Animated Data Streams */}
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
          
          {/* Floating Analytics Icons */}
          <div className="absolute top-20 left-20 animate-float opacity-30">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-2xl border-2 border-blue-400/30 flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="absolute top-40 right-32 animate-float opacity-30" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-xl border-2 border-purple-400/30 flex items-center justify-center">
              <PieChart className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          <div className="absolute bottom-32 left-32 animate-float opacity-30" style={{ animationDelay: '2s' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-2xl border-2 border-green-400/30 flex items-center justify-center">
              <TrendingUp className="w-10 h-10 text-green-400" />
            </div>
          </div>
          <div className="absolute bottom-48 right-1/4 animate-float opacity-30" style={{ animationDelay: '0.5s' }}>
            <div className="w-14 h-14 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-xl border-2 border-orange-400/30 flex items-center justify-center">
              <Eye className="w-7 h-7 text-orange-400" />
            </div>
          </div>
          
          {/* Glowing Analytics Zones */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
                <BarChart3 className="w-4 h-4 text-blue-300 animate-pulse" />
                <span className="text-blue-200 text-sm font-medium">Analytics & Data Visualization Excellence</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white hero-heading-large mb-6">
                <span className="block">Analytics &</span>
               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 animate-gradient-x">
               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 animate-gradient-x">
                  Data Visualization
                </span>
              </h1>
              
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-4">
                  Turn Raw Data Into Real-Time Business Insights
                </h2>
                
                <p className="text-xl text-slate-300 leading-relaxed">
                  In today's data-driven world, decision-making backed by clear, actionable insights is what sets 
                  successful businesses apart. At CHN Technologies, our Analytics & Data Visualization solutions 
                  are built to help you unlock the true value of your data — empowering your teams to see more, 
                  know more, and do more.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="tel:+917010203031"
                  className="group bg-gradient-to-r from-brand-500 to-brand-700 hover:from-brand-400 hover:to-brand-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-500/25 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Talk to our data experts today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-blue-400 mb-1">500+</div>
                  <div className="text-slate-400 text-sm">Dashboards</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">90%</div>
                  <div className="text-slate-400 text-sm">Faster Decisions</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual Element - Analytics Dashboard */}
            <div className="relative">
              {/* Main Analytics Dashboard */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-lg">Business Intelligence Dashboard</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Live Data</span>
                  </div>
                </div>
                
                {/* Analytics Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: BarChart3, color: 'from-blue-400 to-cyan-500', label: 'Revenue', value: '$2.4M', trend: '+12%' },
                    { icon: TrendingUp, color: 'from-green-400 to-teal-500', label: 'Growth', value: '24%', trend: '+5%' },
                    { icon: Users, color: 'from-purple-400 to-pink-500', label: 'Users', value: '15.2K', trend: '+8%' },
                    { icon: Eye, color: 'from-orange-400 to-red-500', label: 'Views', value: '89.3K', trend: '+15%' },
                    { icon: Activity, color: 'from-indigo-400 to-purple-500', label: 'Activity', value: '94%', trend: '+3%' },
                    { icon: Target, color: 'from-cyan-400 to-blue-500', label: 'Goals', value: '87%', trend: '+7%' }
                  ].map((metric, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-r ${metric.color} rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <metric.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-white text-xs font-medium mb-1">{metric.label}</div>
                      <div className="text-white text-sm font-bold mb-1">{metric.value}</div>
                      <div className="text-green-400 text-xs">{metric.trend}</div>
                      
                      {/* Trend Indicator */}
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
                
                {/* Data Sources */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <h4 className="text-white text-sm font-medium mb-3">Connected Data Sources</h4>
                  <div className="flex flex-wrap gap-2">
                    {['CRM', 'ERP', 'Analytics', 'Database', 'Cloud'].map((source, index) => (
                      <span
                        key={index}
                        className="bg-white/10 text-slate-300 px-3 py-1 rounded-lg text-xs hover:bg-white/20 hover:text-white transition-all duration-200"
                      >
                        {source}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Analytics Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-2xl animate-spin-slow opacity-80 flex items-center justify-center">
                <Database className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl animate-bounce opacity-60 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>

              {/* Data Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-30">
                  <defs>
                    <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <line x1="20%" y1="30%" x2="80%" y2="70%" stroke="url(#dataGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                  <line x1="80%" y1="30%" x2="20%" y2="70%" stroke="url(#dataGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1s' }} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Lightbulb className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">What We Offer</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Offer
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

                {/* Analytics Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-6 py-2 mb-8">
              <Rocket className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-green-300 text-sm font-medium">Key Benefits</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Key{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 animate-gradient-x">
                Benefits
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-teal-400 transition-all duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 text-sm font-medium">Who Can Benefit</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who Can{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Benefit?
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficiaries.map((beneficiary, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-purple-200 transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${beneficiary.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <beneficiary.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                  {beneficiary.name}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {beneficiary.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-6 py-2 mb-8">
              <Layers className="w-4 h-4 text-orange-400 animate-pulse" />
              <span className="text-orange-300 text-sm font-medium">Tools & Technologies We Work With</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Tools & Technologies{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 animate-gradient-x">
                We Work With
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${tool.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-300">
                  {tool.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-purple-600">
          {/* Analytics Pattern Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-2xl blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Data Flow */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 400">
              <defs>
                <linearGradient id="analyticsFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <line x1="0" y1="200" x2="1000" y2="200" stroke="url(#analyticsFlowGradient)" strokeWidth="2" />
              <circle cx="200" cy="200" r="5" fill="white" />
              <circle cx="400" cy="200" r="4" fill="white" />
              <circle cx="600" cy="200" r="6" fill="white" />
              <circle cx="800" cy="200" r="4" fill="white" />
            </svg>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            From Data to Decisions{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Seamlessly
            </span>
          </h3>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            At CHN Technologies, we combine technical expertise with business understanding to deliver visual stories 
            that make data meaningful. Talk to our data experts today and unlock insights that drive real impact.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:+917010203031"
              className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Talk to our data experts today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataAnalyticsVisualization;