import React from 'react';
import { 
  Monitor, 
  Smartphone, 
  Shield, 
  Settings, 
  Cloud, 
  Headphones,
  Phone,
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Lock,
  Activity,
  Server,
  Laptop,
  Tablet,
  Building,
  Plane,
  Car,
  Factory,
  Stethoscope,
  Fuel,
  Banknote,
  Globe,
  Award,
  Clock,
  TrendingUp,
  Eye,
  Cpu,
  Database,
  HardDrive
} from 'lucide-react';
import Footer from '../components/Footer';

const EndUserComputing: React.FC = () => {
  const eucServices = [
    {
      icon: Smartphone,
      title: 'Device Lifecycle Management',
      description: 'Procurement, deployment, and retirement of desktops, laptops, and mobile devices.',
      features: ['Device procurement', 'Automated deployment', 'Asset tracking', 'Secure retirement'],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-500/10 to-cyan-600/10'
    },
    {
      icon: Monitor,
      title: 'Virtual Desktop Infrastructure (VDI)',
      description: 'Secure remote access and centralized management with scalable virtualization solutions.',
      features: ['Virtual desktops', 'Remote access', 'Centralized control', 'Scalable infrastructure'],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10'
    },
    {
      icon: Settings,
      title: 'Workspace Management',
      description: 'Unified platforms for productivity tools, collaboration apps, and data access.',
      features: ['Unified workspace', 'App management', 'Data synchronization', 'Collaboration tools'],
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-500/10 to-teal-600/10'
    },
    {
      icon: Shield,
      title: 'Patch Management & Security',
      description: 'Regular updates and security compliance for all end-user devices.',
      features: ['Automated patching', 'Security updates', 'Compliance monitoring', 'Threat protection'],
      color: 'from-red-500 to-orange-600',
      bgColor: 'from-red-500/10 to-orange-600/10'
    },
    {
      icon: Headphones,
      title: 'Service Desk & Support',
      description: 'Dedicated helpdesk for troubleshooting, issue resolution, and user assistance.',
      features: ['24/7 helpdesk', 'Remote support', 'Issue tracking', 'User training'],
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-500/10 to-purple-600/10'
    }
  ];

  const businessBenefits = [
    {
      icon: TrendingUp,
      title: 'Enhanced User Experience',
      description: 'Improved productivity and operational efficiency across all user touchpoints'
    },
    {
      icon: Eye,
      title: 'Centralized IT Control',
      description: 'Unified management with decentralized workforce support capabilities'
    },
    {
      icon: Clock,
      title: 'Reduced Downtime',
      description: 'Faster issue resolution and proactive maintenance protocols'
    },
    {
      icon: Lock,
      title: 'Improved Security',
      description: 'Enhanced compliance and comprehensive endpoint security measures'
    }
  ];

  const industries = [
    { name: 'IT & Telecom', icon: Smartphone, color: 'from-blue-500 to-cyan-500' },
    { name: 'Healthcare', icon: Stethoscope, color: 'from-pink-500 to-red-500' },
    { name: 'Manufacturing', icon: Factory, color: 'from-purple-500 to-pink-500' },
    { name: 'BFSI', icon: Banknote, color: 'from-emerald-500 to-teal-500' },
    { name: 'FMCG', icon: Building, color: 'from-orange-500 to-red-500' },
    { name: 'Automotive', icon: Car, color: 'from-red-500 to-orange-500' },
    { name: 'Energy', icon: Fuel, color: 'from-yellow-500 to-orange-500' },
    { name: 'Aerospace', icon: Plane, color: 'from-indigo-500 to-purple-500' }
  ];

  const heroStats = [
    { icon: Users, value: '10K+', label: 'Devices Managed', color: 'from-cyan-400 to-blue-500' },
    { icon: Globe, value: '99.5%', label: 'Uptime SLA', color: 'from-purple-400 to-pink-500' },
    { icon: Award, value: '24/7', label: 'Support Available', color: 'from-green-400 to-teal-500' },
    { icon: Clock, value: '<2min', label: 'Avg Response', color: 'from-orange-400 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Modern Split Layout */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Advanced Tech Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-brand-800 to-brand-900">
          {/* Digital Workspace Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="workspaceGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <g stroke="currentColor" strokeWidth="1" fill="none" className="text-purple-400">
                    <rect x="10" y="10" width="60" height="40" rx="4" />
                    <rect x="15" y="15" width="50" height="30" rx="2" />
                    <circle cx="20" cy="60" r="3" fill="currentColor" />
                    <circle cx="35" cy="60" r="3" fill="currentColor" />
                    <circle cx="50" cy="60" r="3" fill="currentColor" />
                    <path d="M20,60 L35,60 M35,60 L50,60" strokeDasharray="2,2" />
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#workspaceGrid)" />
            </svg>
          </div>
          
          {/* Animated Device Streams */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"
                style={{
                  top: `${15 + i * 15}%`,
                  left: '0%',
                  width: '100%',
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: '4s'
                }}
              />
            ))}
          </div>
          
          {/* Floating Device Icons */}
          <div className="absolute top-20 left-20 animate-float opacity-30">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-2xl border-2 border-purple-400/30 flex items-center justify-center">
              <Laptop className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          <div className="absolute top-40 right-32 animate-float opacity-30" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-xl border-2 border-cyan-400/30 flex items-center justify-center">
              <Tablet className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
          <div className="absolute bottom-32 left-32 animate-float opacity-30" style={{ animationDelay: '2s' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-pink-400/20 to-red-500/20 rounded-2xl border-2 border-pink-400/30 flex items-center justify-center">
              <Monitor className="w-10 h-10 text-pink-400" />
            </div>
          </div>
          <div className="absolute bottom-48 right-1/4 animate-float opacity-30" style={{ animationDelay: '0.5s' }}>
            <div className="w-14 h-14 bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-xl border-2 border-green-400/30 flex items-center justify-center">
              <Smartphone className="w-7 h-7 text-green-400" />
            </div>
          </div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
                <Monitor className="w-4 h-4 text-purple-300 animate-pulse" />
                <span className="text-purple-200 text-sm font-medium">End User Computing Excellence</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white hero-heading-large mb-6">
                <span className="block">End User</span>
               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 pb-2 to-brand-500 animate-gradient-x">
               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 animate-gradient-x">
                  Computing
                </span>
                <span className="block text-2xl md:text-3xl font-semibold text-slate-200 mt-4">
                  (EUC)
                </span>
              </h1>
              
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-4">
                  Empowering People. Enhancing Productivity.
                </h2>
                
                <p className="text-xl text-slate-300 leading-relaxed">
                  Your workforce deserves seamless, secure, and scalable digital experiences. Our End User Computing 
                  solutions ensure that employees have reliable access to the applications, data, and tools they need — 
                  anytime, anywhere.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="tel:+917010203031"
                  className="group bg-gradient-to-r from-brand-500 to-brand-700 hover:from-brand-400 hover:to-brand-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-500/25 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Talk to Our EUC Specialists</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Activity className="w-5 h-5" />
                  <span>View Solutions</span>
                </button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-purple-400 mb-1">10K+</div>
                  <div className="text-slate-400 text-sm">Devices</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-pink-400 mb-1">99.5%</div>
                  <div className="text-slate-400 text-sm">Uptime</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual Element - EUC Dashboard */}
            <div className="relative">
              {/* Main EUC Management Dashboard */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-lg">EUC Management Console</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Live</span>
                  </div>
                </div>
                
                {/* Device Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: Laptop, color: 'from-blue-400 to-cyan-500', label: 'Laptops', count: '2.5K' },
                    { icon: Monitor, color: 'from-purple-400 to-pink-500', label: 'Desktops', count: '1.8K' },
                    { icon: Smartphone, color: 'from-green-400 to-teal-500', label: 'Mobile', count: '3.2K' },
                    { icon: Tablet, color: 'from-orange-400 to-red-500', label: 'Tablets', count: '850' },
                    { icon: Cloud, color: 'from-indigo-400 to-purple-500', label: 'VDI', count: '1.2K' },
                    { icon: Server, color: 'from-cyan-400 to-blue-500', label: 'Servers', count: '45' }
                  ].map((device, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-r ${device.color} rounded-xl mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <device.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-white text-xs font-medium mb-1">{device.label}</div>
                      <div className="text-slate-300 text-xs">{device.count}</div>
                      
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
                
                {/* Activity Feed */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <h4 className="text-white text-sm font-medium mb-3">Recent Activity</h4>
                  <div className="space-y-2">
                    {[
                      { action: 'Device deployed', device: 'Laptop-2847', time: '2m ago', status: 'success' },
                      { action: 'Patch applied', device: 'Desktop-1923', time: '5m ago', status: 'success' },
                      { action: 'VDI session', device: 'User-4521', time: '8m ago', status: 'active' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            activity.status === 'success' ? 'bg-green-400' : 
                            activity.status === 'active' ? 'bg-blue-400' : 'bg-yellow-400'
                          }`}></div>
                          <span className="text-slate-300">{activity.action}</span>
                          <span className="text-slate-400">{activity.device}</span>
                        </div>
                        <span className="text-slate-500">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Management Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-2xl animate-spin-slow opacity-80 flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl animate-bounce opacity-60 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>

              {/* Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-30">
                  <defs>
                    <linearGradient id="eucGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  <line x1="20%" y1="20%" x2="80%" y2="80%" stroke="url(#eucGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                  <line x1="80%" y1="20%" x2="20%" y2="80%" stroke="url(#eucGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1s' }} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our EUC Services Include Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 text-sm font-medium">Our EUC Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our EUC Services{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Include
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {eucServices.map((service, index) => (
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

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="relative py-12 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-purple-400"></div>
              <Users className="w-8 h-8 text-purple-500" />
              <div className="w-16 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Benefits */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-green-700 text-sm font-medium">Business Benefits</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Business{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                Benefits
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-green-200 transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-teal-600 transition-all duration-300">
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

      {/* Visual Divider */}
      <div className="relative py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(107,114,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(107,114,128,0.1)_1px,transparent_1px)] bg-[size:25px_25px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
              <Building className="w-8 h-8 text-gray-500" />
              <div className="w-16 h-px bg-gradient-to-r from-gray-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Building className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">Industries</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                We Serve
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              From IT & Telecom to Healthcare, Manufacturing, BFSI, and FMCG, we deliver custom EUC solutions 
              tailored to your business environment.
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${industry.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600">
          {/* Digital Workspace Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-2xl blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Device Connection Network */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 400">
              <defs>
                <linearGradient id="deviceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <line x1="0" y1="200" x2="1000" y2="200" stroke="url(#deviceGradient)" strokeWidth="2" />
              <circle cx="200" cy="200" r="6" fill="white" />
              <circle cx="400" cy="200" r="4" fill="white" />
              <circle cx="600" cy="200" r="5" fill="white" />
              <circle cx="800" cy="200" r="4" fill="white" />
            </svg>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Give Your Teams the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Digital Edge.
            </span>
          </h3>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Ready to transform your end-user experience? Our EUC specialists are here to design, 
            implement, and manage solutions that empower your workforce and drive productivity.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:+917010203031"
              className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Talk to Our EUC Specialists</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <span>+91-7010203031</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EndUserComputing;