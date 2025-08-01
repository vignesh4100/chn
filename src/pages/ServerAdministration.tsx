import React from 'react';
import { 
  Server, 
  Shield, 
  TrendingUp, 
  Settings, 
  Cloud, 
  Database,
  Phone,
  ArrowRight,
  CheckCircle,
  Zap,
  Monitor,
  Lock,
  Activity,
  HardDrive,
  Cpu,
  Eye,
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
  BarChart3,
  RefreshCw,
  AlertCircle,
  CheckSquare,
  Layers,
  Terminal
} from 'lucide-react';
import Footer from '../components/Footer';

const ServerAdministration: React.FC = () => {
  const serverServices = [
    {
      icon: Settings,
      title: 'Server Installation & Configuration',
      description: 'Deployment of physical, virtual, and cloud-based servers tailored to your infrastructure needs.',
      features: ['Physical server setup', 'Virtual machine deployment', 'Cloud server configuration', 'Custom infrastructure design'],
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-500/10 to-teal-600/10'
    },
    {
      icon: Activity,
      title: '24/7 Monitoring & Maintenance',
      description: 'Real-time performance tracking, health checks, and issue resolution to prevent downtime.',
      features: ['Real-time monitoring', 'Performance tracking', 'Health diagnostics', 'Proactive maintenance'],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-500/10 to-cyan-600/10'
    },
    {
      icon: RefreshCw,
      title: 'Patch Management & Updates',
      description: 'Regular OS and software updates to maintain security and compatibility.',
      features: ['Automated patching', 'Security updates', 'Compatibility testing', 'Update scheduling'],
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-500/10 to-indigo-600/10'
    },
    {
      icon: HardDrive,
      title: 'Backup & Disaster Recovery',
      description: 'Automated backups and recovery plans to protect against data loss and system failure.',
      features: ['Automated backups', 'Disaster recovery plans', 'Data protection', 'Recovery testing'],
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-500/10 to-red-600/10'
    },
    {
      icon: TrendingUp,
      title: 'Performance Tuning',
      description: 'Optimization of server resources for faster processing and enhanced reliability.',
      features: ['Resource optimization', 'Performance analysis', 'Capacity planning', 'Speed enhancement'],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-500/10 to-emerald-600/10'
    },
    {
      icon: Shield,
      title: 'Security Hardening',
      description: 'Firewall setup, access control, and threat prevention for a secure server environment.',
      features: ['Firewall configuration', 'Access control', 'Threat prevention', 'Security audits'],
      color: 'from-red-500 to-pink-600',
      bgColor: 'from-red-500/10 to-pink-600/10'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Certified Cross-Platform Expertise',
      description: 'Linux, Windows, and Cloud administration with industry certifications'
    },
    {
      icon: Building,
      title: 'Multi-Industry Experience',
      description: 'Proven success across Manufacturing, Healthcare, IT, Energy, and BFSI sectors'
    },
    {
      icon: Layers,
      title: 'End-to-End Lifecycle Support',
      description: 'Complete server management from initial setup to scaling and optimization'
    },
    {
      icon: BarChart3,
      title: 'Transparent SLA-Backed Service',
      description: 'Clear reporting, performance metrics, and guaranteed service delivery'
    }
  ];

  const industries = [
    { name: 'Manufacturing', icon: Factory, color: 'from-blue-500 to-cyan-500' },
    { name: 'Healthcare', icon: Stethoscope, color: 'from-pink-500 to-red-500' },
    { name: 'IT & Technology', icon: Cpu, color: 'from-purple-500 to-indigo-500' },
    { name: 'Energy & Power', icon: Fuel, color: 'from-yellow-500 to-orange-500' },
    { name: 'BFSI', icon: Banknote, color: 'from-emerald-500 to-teal-500' },
    { name: 'Automotive', icon: Car, color: 'from-red-500 to-orange-500' },
    { name: 'Aerospace', icon: Plane, color: 'from-indigo-500 to-purple-500' },
    { name: 'Enterprise', icon: Building, color: 'from-gray-500 to-slate-600' }
  ];

  const heroStats = [
    { icon: Globe, value: '99.9%', label: 'Server Uptime', color: 'from-emerald-400 to-teal-500' },
    { icon: Users, value: '1000+', label: 'Servers Managed', color: 'from-blue-400 to-cyan-500' },
    { icon: Clock, value: '24/7', label: 'Monitoring', color: 'from-purple-400 to-indigo-500' },
    { icon: Award, value: '<30s', label: 'Response Time', color: 'from-orange-400 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Server Infrastructure Layout */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Server Room Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-brand-800 to-brand-900">
          {/* Server Rack Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="serverRack" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  <g stroke="currentColor" strokeWidth="1" fill="none" className="text-emerald-400">
                    <rect x="20" y="20" width="80" height="80" rx="4" />
                    <rect x="25" y="25" width="70" height="15" rx="2" fill="currentColor" opacity="0.3" />
                    <rect x="25" y="45" width="70" height="15" rx="2" fill="currentColor" opacity="0.3" />
                    <rect x="25" y="65" width="70" height="15" rx="2" fill="currentColor" opacity="0.3" />
                    <rect x="25" y="85" width="70" height="10" rx="2" fill="currentColor" opacity="0.3" />
                    <circle cx="30" cy="32" r="2" fill="currentColor" />
                    <circle cx="35" cy="32" r="2" fill="currentColor" />
                    <circle cx="40" cy="32" r="2" fill="currentColor" />
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#serverRack)" />
            </svg>
          </div>
          
          {/* Animated Data Processing Streams */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse"
                style={{
                  top: `${8 + i * 10}%`,
                  left: '0%',
                  width: '100%',
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
          
          {/* Floating Server Components */}
          <div className="absolute top-20 left-20 animate-float opacity-30">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-2xl border-2 border-emerald-400/30 flex items-center justify-center">
              <Server className="w-8 h-8 text-emerald-400" />
            </div>
          </div>
          <div className="absolute top-40 right-32 animate-float opacity-30" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-xl border-2 border-blue-400/30 flex items-center justify-center">
              <Database className="w-6 h-6 text-blue-400" />
            </div>
          </div>
          <div className="absolute bottom-32 left-32 animate-float opacity-30" style={{ animationDelay: '2s' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-purple-400/20 to-indigo-500/20 rounded-2xl border-2 border-purple-400/30 flex items-center justify-center">
              <Cloud className="w-10 h-10 text-purple-400" />
            </div>
          </div>
          <div className="absolute bottom-48 right-1/4 animate-float opacity-30" style={{ animationDelay: '0.5s' }}>
            <div className="w-14 h-14 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-xl border-2 border-orange-400/30 flex items-center justify-center">
              <HardDrive className="w-7 h-7 text-orange-400" />
            </div>
          </div>
          
          {/* Glowing Server Clusters */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
                <Server className="w-4 h-4 text-emerald-300 animate-pulse" />
                <span className="text-emerald-200 text-sm font-medium">Server Administration Excellence</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white hero-heading-large mb-6">
                <span className="block">Server</span>
               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 animate-gradient-x">
                  Administration
                </span>
              </h1>
              
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-4">
                  Reliable Uptime. Peak Performance. Complete Control.
                </h2>
                
                <p className="text-xl text-slate-300 leading-relaxed">
                  Your servers are the foundation of your digital operations. Our Server Administration services ensure 
                  they run smoothly, securely, and efficiently — supporting business continuity and scalability across 
                  all environments.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="tel:+917010203031"
                  className="group bg-gradient-to-r from-brand-500 to-brand-700 hover:from-brand-400 hover:to-brand-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-500/25 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Connect with Our Server Experts</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Activity className="w-5 h-5" />
                  <span>View Performance Metrics</span>
                </button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">99.9%</div>
                  <div className="text-slate-400 text-sm">Uptime</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-teal-400 mb-1">1000+</div>
                  <div className="text-slate-400 text-sm">Servers</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual Element - Server Management Console */}
            <div className="relative">
              {/* Main Server Management Dashboard */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-lg">Server Management Console</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-emerald-400 text-sm">All Systems Operational</span>
                  </div>
                </div>
                
                {/* Server Status Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: Server, color: 'from-emerald-400 to-teal-500', label: 'Web Servers', status: 'Online', count: '12' },
                    { icon: Database, color: 'from-blue-400 to-cyan-500', label: 'DB Servers', status: 'Active', count: '8' },
                    { icon: Cloud, color: 'from-purple-400 to-indigo-500', label: 'Cloud VMs', status: 'Running', count: '24' },
                    { icon: HardDrive, color: 'from-orange-400 to-red-500', label: 'Storage', status: 'Healthy', count: '6TB' },
                    { icon: Shield, color: 'from-red-400 to-pink-500', label: 'Security', status: 'Protected', count: '100%' },
                    { icon: Monitor, color: 'from-cyan-400 to-blue-500', label: 'Monitoring', status: 'Active', count: '24/7' }
                  ].map((server, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-r ${server.color} rounded-xl mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <server.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-white text-xs font-medium mb-1">{server.label}</div>
                      <div className="text-emerald-400 text-xs mb-1">{server.status}</div>
                      <div className="text-slate-300 text-xs">{server.count}</div>
                      
                      {/* Status Indicator */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                
                {/* System Activity Log */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <h4 className="text-white text-sm font-medium mb-3">System Activity</h4>
                  <div className="space-y-2">
                    {[
                      { action: 'Server backup completed', server: 'WEB-01', time: '1m ago', status: 'success' },
                      { action: 'Performance optimization', server: 'DB-03', time: '4m ago', status: 'success' },
                      { action: 'Security patch applied', server: 'APP-02', time: '12m ago', status: 'success' },
                      { action: 'Health check passed', server: 'CLOUD-05', time: '15m ago', status: 'success' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            activity.status === 'success' ? 'bg-emerald-400' : 
                            activity.status === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
                          }`}></div>
                          <span className="text-slate-300">{activity.action}</span>
                          <span className="text-slate-400">{activity.server}</span>
                        </div>
                        <span className="text-slate-500">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Server Management Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-2xl animate-spin-slow opacity-80 flex items-center justify-center">
                <Terminal className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-xl animate-bounce opacity-60 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>

              {/* Server Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-30">
                  <defs>
                    <linearGradient id="serverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#0891b2" />
                    </linearGradient>
                  </defs>
                  <line x1="25%" y1="25%" x2="75%" y2="75%" stroke="url(#serverGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                  <line x1="75%" y1="25%" x2="25%" y2="75%" stroke="url(#serverGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <circle cx="50%" cy="50%" r="25%" fill="none" stroke="url(#serverGradient)" strokeWidth="1" strokeDasharray="8,4" className="animate-spin-slow" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Server Management Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 text-sm font-medium">Server Management Capabilities</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Server Management{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Capabilities
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {serverServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-emerald-200 transition-all duration-500 transform hover:-translate-y-4 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300">
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

                {/* Server Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-emerald-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-teal-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="relative py-12 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-emerald-400"></div>
              <Server className="w-8 h-8 text-emerald-500" />
              <div className="w-16 h-px bg-gradient-to-r from-emerald-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">Why Choose Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                CHN Technologies?
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
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

      {/* Visual Divider */}
      <div className="relative py-12 bg-gradient-to-r from-gray-50 to-purple-50">
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
              <Building className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 text-sm font-medium">Industries</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                We Serve
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Proven server administration expertise across Manufacturing, Healthcare, IT, Energy, and BFSI sectors 
              with end-to-end lifecycle support.
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
          {/* Server Infrastructure Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-2xl blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Server Connection Network */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 400">
              <defs>
                <linearGradient id="serverNetworkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <line x1="0" y1="200" x2="1000" y2="200" stroke="url(#serverNetworkGradient)" strokeWidth="2" />
              <circle cx="200" cy="200" r="5" fill="white" />
              <circle cx="400" cy="200" r="4" fill="white" />
              <circle cx="600" cy="200" r="6" fill="white" />
              <circle cx="800" cy="200" r="4" fill="white" />
            </svg>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Maximize Uptime.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Minimize Risk.
            </span>
          </h3>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Ready to optimize your server infrastructure? Our certified administrators are standing by to design, 
            implement, and manage server solutions that ensure peak performance and reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:+917010203031"
              className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Connect with Our Server Experts</span>
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

export default ServerAdministration;