import React from 'react';
import { 
  Cable, 
  Eye, 
  Shield, 
  Settings, 
  Monitor, 
  Lock,
  Phone,
  ArrowRight,
  CheckCircle,
  Zap,
  Network,
  Camera,
  Activity,
  Wifi,
  Database,
  Building,
  Plane,
  Car,
  Factory,
  Stethoscope,
  Fuel,
  Banknote,
  Globe,
  Users,
  Award,
  Clock,
  Layers,
  Cpu,
  HardDrive,
  Router,
  Smartphone,
  Video,
  Fingerprint,
  KeyRound,
  AlertTriangle,
  CheckSquare
} from 'lucide-react';
import Footer from '../components/Footer';

const LANCablingSurveillance: React.FC = () => {
  const lanCablingServices = [
    {
      icon: Cable,
      title: 'Structured Cabling Design & Installation',
      description: 'Organized, high-performance cabling for voice, data, and video transmission.',
      features: ['Network design', 'Cable routing', 'Patch panel setup', 'Documentation'],
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-indigo-600/10'
    },
    {
      icon: Wifi,
      title: 'Fiber Optic & Copper Cabling',
      description: 'Scalable and future-ready cabling systems for all building types.',
      features: ['Fiber optic installation', 'Copper cabling', 'Hybrid solutions', 'Future-proofing'],
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-500/10 to-teal-600/10'
    },
    {
      icon: Activity,
      title: 'Cable Testing & Certification',
      description: 'Assurance of network integrity, performance, and standards compliance.',
      features: ['Performance testing', 'Certification reports', 'Quality assurance', 'Standards compliance'],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10'
    },
    {
      icon: Database,
      title: 'Data Center Cabling',
      description: 'High-density cabling solutions for server rooms and enterprise data environments.',
      features: ['High-density solutions', 'Server room cabling', 'Rack management', 'Cable organization'],
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-500/10 to-red-600/10'
    }
  ];

  const surveillanceServices = [
    {
      icon: Camera,
      title: 'CCTV Installation & Setup',
      description: 'High-definition IP cameras, DVR/NVR systems, and live monitoring.',
      features: ['HD IP cameras', 'DVR/NVR systems', 'Live monitoring', 'Recording solutions'],
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-500/10 to-blue-600/10'
    },
    {
      icon: Fingerprint,
      title: 'Access Control Systems',
      description: 'Biometric, RFID, and keypad entry for secured premises.',
      features: ['Biometric systems', 'RFID access', 'Keypad entry', 'Multi-factor authentication'],
      color: 'from-emerald-500 to-green-600',
      bgColor: 'from-emerald-500/10 to-green-600/10'
    },
    {
      icon: Monitor,
      title: 'Remote Monitoring & Alerts',
      description: 'Real-time surveillance access from anywhere, anytime.',
      features: ['Remote access', 'Mobile monitoring', 'Real-time alerts', 'Cloud integration'],
      color: 'from-violet-500 to-purple-600',
      bgColor: 'from-violet-500/10 to-purple-600/10'
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: 'Ongoing health checks, repairs, and system upgrades.',
      features: ['Regular maintenance', 'System upgrades', 'Technical support', 'Performance optimization'],
      color: 'from-amber-500 to-orange-600',
      bgColor: 'from-amber-500/10 to-orange-600/10'
    }
  ];

  const industries = [
    { name: 'Offices', icon: Building, color: 'from-blue-500 to-cyan-500' },
    { name: 'Warehouses', icon: Factory, color: 'from-purple-500 to-pink-500' },
    { name: 'Industrial Units', icon: Settings, color: 'from-orange-500 to-red-500' },
    { name: 'Healthcare', icon: Stethoscope, color: 'from-pink-500 to-red-500' },
    { name: 'Educational', icon: Users, color: 'from-green-500 to-teal-500' },
    { name: 'Retail Chains', icon: Banknote, color: 'from-emerald-500 to-teal-500' },
    { name: 'Manufacturing', icon: Cpu, color: 'from-indigo-500 to-purple-500' },
    { name: 'Logistics', icon: Car, color: 'from-yellow-500 to-orange-500' }
  ];

  const heroStats = [
    { icon: Cable, value: '5000+', label: 'Cables Installed', color: 'from-blue-400 to-indigo-500' },
    { icon: Camera, value: '1000+', label: 'Cameras Deployed', color: 'from-purple-400 to-pink-500' },
    { icon: Award, value: '99%', label: 'Uptime Achieved', color: 'from-green-400 to-teal-500' },
    { icon: Clock, value: '24/7', label: 'Monitoring', color: 'from-orange-400 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Infrastructure & Security Layout */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Infrastructure & Security Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-brand-800 to-brand-900">
          {/* Cable & Camera Network Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="infrastructureGrid" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                  <g stroke="currentColor" strokeWidth="1" fill="none" className="text-indigo-400">
                    {/* Cable Routes */}
                    <path d="M25,25 L125,25 M25,75 L125,75 M25,125 L125,125" strokeDasharray="5,5" />
                    <path d="M25,25 L25,125 M75,25 L75,125 M125,25 L125,125" strokeDasharray="5,5" />
                    {/* Network Nodes */}
                    <circle cx="25" cy="25" r="3" fill="currentColor" />
                    <circle cx="75" cy="25" r="3" fill="currentColor" />
                    <circle cx="125" cy="25" r="3" fill="currentColor" />
                    <circle cx="25" cy="75" r="3" fill="currentColor" />
                    <circle cx="75" cy="75" r="4" fill="currentColor" />
                    <circle cx="125" cy="75" r="3" fill="currentColor" />
                    <circle cx="25" cy="125" r="3" fill="currentColor" />
                    <circle cx="75" cy="125" r="3" fill="currentColor" />
                    <circle cx="125" cy="125" r="3" fill="currentColor" />
                    {/* Camera Coverage Areas */}
                    <circle cx="75" cy="75" r="20" fill="none" stroke="currentColor" strokeDasharray="3,3" opacity="0.5" />
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#infrastructureGrid)" />
            </svg>
          </div>
          
          {/* Animated Infrastructure Streams */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-pulse"
                style={{
                  top: `${5 + i * 8}%`,
                  left: '0%',
                  width: '100%',
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '4s'
                }}
              />
            ))}
          </div>
          
          {/* Floating Infrastructure Components */}
          <div className="absolute top-20 left-20 animate-float opacity-30">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-2xl border-2 border-blue-400/30 flex items-center justify-center">
              <Cable className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="absolute top-40 right-32 animate-float opacity-30" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-xl border-2 border-purple-400/30 flex items-center justify-center">
              <Camera className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          <div className="absolute bottom-32 left-32 animate-float opacity-30" style={{ animationDelay: '2s' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-2xl border-2 border-green-400/30 flex items-center justify-center">
              <Router className="w-10 h-10 text-green-400" />
            </div>
          </div>
          <div className="absolute bottom-48 right-1/4 animate-float opacity-30" style={{ animationDelay: '0.5s' }}>
            <div className="w-14 h-14 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-xl border-2 border-cyan-400/30 flex items-center justify-center">
              <Eye className="w-7 h-7 text-cyan-400" />
            </div>
          </div>
          
          {/* Glowing Infrastructure Zones */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
                <Cable className="w-4 h-4 text-indigo-300 animate-pulse" />
                <span className="text-indigo-200 text-sm font-medium">Infrastructure & Security Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white hero-heading-large mb-6">
                <span className="block">LAN Cabling &</span>
               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 animate-gradient-x">
                  Surveillance
                </span>
                <span className="block">Systems</span>
              </h1>
              
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-4">
                  Strong Connections. Smart Security.
                </h2>
                
                <p className="text-xl text-slate-300 leading-relaxed">
                  Robust infrastructure and real-time surveillance are essential to modern business operations. 
                  Our LAN Cabling and Surveillance System solutions are designed to provide seamless connectivity 
                  and 24/7 monitoring — ensuring speed, safety, and scalability across your enterprise.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="tel:+917010203031"
                  className="group bg-gradient-to-r from-brand-500 to-brand-700 hover:from-brand-400 hover:to-brand-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-500/25 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get a Custom Infrastructure Quote</span>
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
                  <div className="text-3xl font-bold text-blue-400 mb-1">5000+</div>
                  <div className="text-slate-400 text-sm">Cables</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-indigo-400 mb-1">1000+</div>
                  <div className="text-slate-400 text-sm">Cameras</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual Element - Infrastructure Control Center */}
            <div className="relative">
              {/* Main Infrastructure Management Dashboard */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-lg">Infrastructure Control Center</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">All Systems Online</span>
                  </div>
                </div>
                
                {/* Infrastructure Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: Cable, color: 'from-blue-400 to-indigo-500', label: 'LAN Cables', status: 'Connected', count: '250' },
                    { icon: Camera, color: 'from-purple-400 to-pink-500', label: 'IP Cameras', status: 'Recording', count: '48' },
                    { icon: Router, color: 'from-green-400 to-teal-500', label: 'Network', status: 'Active', count: '12' },
                    { icon: Eye, color: 'from-cyan-400 to-blue-500', label: 'Monitoring', status: 'Live', count: '24/7' },
                    { icon: Lock, color: 'from-red-400 to-pink-500', label: 'Access Control', status: 'Secured', count: '16' },
                    { icon: HardDrive, color: 'from-orange-400 to-red-500', label: 'Storage', status: 'Available', count: '8TB' }
                  ].map((system, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-r ${system.color} rounded-xl mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <system.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-white text-xs font-medium mb-1">{system.label}</div>
                      <div className="text-green-400 text-xs mb-1">{system.status}</div>
                      <div className="text-slate-300 text-xs">{system.count}</div>
                      
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
                
                {/* System Activity Feed */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <h4 className="text-white text-sm font-medium mb-3">System Activity</h4>
                  <div className="space-y-2">
                    {[
                      { action: 'Cable test completed', location: 'Floor 3 - Zone A', time: '2m ago', status: 'success' },
                      { action: 'Camera motion detected', location: 'Entrance - Cam 12', time: '5m ago', status: 'alert' },
                      { action: 'Access granted', location: 'Server Room', time: '8m ago', status: 'success' },
                      { action: 'Network optimization', location: 'Main Switch', time: '15m ago', status: 'success' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            activity.status === 'success' ? 'bg-green-400' : 
                            activity.status === 'alert' ? 'bg-yellow-400' : 'bg-red-400'
                          }`}></div>
                          <span className="text-slate-300">{activity.action}</span>
                          <span className="text-slate-400">{activity.location}</span>
                        </div>
                        <span className="text-slate-500">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Infrastructure Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-2xl animate-spin-slow opacity-80 flex items-center justify-center">
                <Network className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl animate-bounce opacity-60 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>

              {/* Infrastructure Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-30">
                  <defs>
                    <linearGradient id="infrastructureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                  <line x1="20%" y1="30%" x2="80%" y2="70%" stroke="url(#infrastructureGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                  <line x1="80%" y1="30%" x2="20%" y2="70%" stroke="url(#infrastructureGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <circle cx="50%" cy="50%" r="30%" fill="none" stroke="url(#infrastructureGradient)" strokeWidth="1" strokeDasharray="8,4" className="animate-spin-slow" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAN Cabling Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Cable className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">LAN Cabling Solutions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              LAN Cabling{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Solutions
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {lanCablingServices.map((service, index) => (
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
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cable Pattern */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="relative py-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
              <Eye className="w-8 h-8 text-blue-500" />
              <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Surveillance System Solutions Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
              <Camera className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 text-sm font-medium">Surveillance System Solutions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Surveillance System{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Solutions
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {surveillanceServices.map((service, index) => (
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
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security Pattern */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="relative py-12 bg-gradient-to-r from-gray-50 to-green-50">
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

      {/* Industries We Equip */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-full px-4 py-2 mb-6">
              <Building className="w-4 h-4 text-green-600" />
              <span className="text-green-700 text-sm font-medium">Industries We Equip</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                We Equip
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              We design and implement cabling and surveillance infrastructure for Offices, Warehouses, 
              Industrial Units, Healthcare Facilities, Educational Institutions, and Retail Chains.
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
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
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-teal-600 transition-all duration-300">
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
          {/* Infrastructure Network Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-2xl blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Infrastructure Connection Network */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 400">
              <defs>
                <linearGradient id="infrastructureNetworkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <line x1="0" y1="200" x2="1000" y2="200" stroke="url(#infrastructureNetworkGradient)" strokeWidth="2" />
              <circle cx="150" cy="200" r="4" fill="white" />
              <circle cx="350" cy="200" r="6" fill="white" />
              <circle cx="550" cy="200" r="4" fill="white" />
              <circle cx="750" cy="200" r="5" fill="white" />
              <circle cx="850" cy="200" r="4" fill="white" />
            </svg>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Future-Proof Your Network.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Safeguard Your Premises.
            </span>
          </h3>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Ready to build a robust infrastructure foundation? Our experts are standing by to design, 
            install, and maintain cabling and surveillance solutions that grow with your business.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:+917010203031"
              className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Get a Custom Infrastructure Quote</span>
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

export default LANCablingSurveillance;