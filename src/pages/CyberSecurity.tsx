import React from 'react';
import { 
  Shield, 
  Eye, 
  Search, 
  Database, 
  FileText, 
  HardDrive,
  Phone,
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Lock,
  Activity,
  AlertTriangle,
  Cpu,
  Globe,
  Building,
  Plane,
  Car,
  Factory,
  Stethoscope,
  Fuel,
  Banknote,
  Award,
  Clock,
  TrendingUp,
  Target,
  Crosshair,
  Bug,
  ShieldCheck,
  Server,
  Wifi,
  Smartphone
} from 'lucide-react';
import Footer from '../components/Footer';

const CyberSecurity: React.FC = () => {
  const cyberServices = [
    {
      icon: Eye,
      title: 'Threat Detection & Prevention',
      description: 'Real-time monitoring, intrusion detection, and advanced threat analytics.',
      features: ['24/7 SOC monitoring', 'AI-powered threat detection', 'Behavioral analytics', 'Incident response'],
      color: 'from-red-500 to-orange-600',
      bgColor: 'from-red-500/10 to-orange-600/10'
    },
    {
      icon: Shield,
      title: 'Network & Endpoint Security',
      description: 'Protect your infrastructure with multi-layered defense and endpoint controls.',
      features: ['Next-gen firewalls', 'Endpoint protection', 'Network segmentation', 'Zero-trust architecture'],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-500/10 to-cyan-600/10'
    },
    {
      icon: Search,
      title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
      description: 'Identify and remediate security gaps before attackers do.',
      features: ['Comprehensive scanning', 'Ethical hacking', 'Risk assessment', 'Remediation guidance'],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10'
    },
    {
      icon: Activity,
      title: 'Security Information & Event Management (SIEM)',
      description: 'Unified visibility into security events, incident response, and compliance reporting.',
      features: ['Centralized logging', 'Real-time correlation', 'Automated alerts', 'Compliance reporting'],
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-500/10 to-teal-600/10'
    },
    {
      icon: FileText,
      title: 'Governance, Risk & Compliance (GRC)',
      description: 'Align your IT practices with global security standards and industry-specific regulations.',
      features: ['Policy management', 'Risk assessment', 'Compliance audits', 'Regulatory alignment'],
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-500/10 to-purple-600/10'
    },
    {
      icon: HardDrive,
      title: 'Data Protection & Backup Solutions',
      description: 'Safeguard sensitive data with encryption, secure storage, and disaster recovery planning.',
      features: ['Data encryption', 'Secure backups', 'Disaster recovery', 'Data loss prevention'],
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-500/10 to-orange-600/10'
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Expert Security Professionals',
      description: 'Certified analysts and security professionals with deep industry expertise'
    },
    {
      icon: Building,
      title: 'Industry-Aligned Solutions',
      description: 'Tailored security solutions for BFSI, Healthcare, Telecom, Manufacturing, and more'
    },
    {
      icon: Globe,
      title: 'Scalable Security Architecture',
      description: 'Solutions for cloud, hybrid, and on-premise environments that grow with your business'
    },
    {
      icon: Target,
      title: 'Proactive Threat Hunting',
      description: 'Continuous and proactive threat hunting to stay ahead of emerging cyber threats'
    }
  ];

  const industries = [
    { name: 'BFSI', icon: Banknote, color: 'from-emerald-500 to-teal-500' },
    { name: 'IT & ITES', icon: Cpu, color: 'from-blue-500 to-cyan-500' },
    { name: 'Energy', icon: Fuel, color: 'from-yellow-500 to-orange-500' },
    { name: 'Pharma', icon: Stethoscope, color: 'from-pink-500 to-red-500' },
    { name: 'Healthcare', icon: Stethoscope, color: 'from-red-500 to-pink-500' },
    { name: 'Logistics', icon: Car, color: 'from-purple-500 to-pink-500' },
    { name: 'Manufacturing', icon: Factory, color: 'from-indigo-500 to-purple-500' },
    { name: 'Industrial', icon: Building, color: 'from-gray-500 to-slate-600' }
  ];

  const heroStats = [
    { icon: Shield, value: '99.9%', label: 'Threat Detection', color: 'from-red-400 to-orange-500' },
    { icon: Clock, value: '<1min', label: 'Response Time', color: 'from-blue-400 to-cyan-500' },
    { icon: Award, value: '24/7', label: 'SOC Monitoring', color: 'from-green-400 to-teal-500' },
    { icon: TrendingUp, value: '500+', label: 'Threats Blocked', color: 'from-purple-400 to-pink-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Advanced Security Layout */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Cybersecurity Matrix Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900 to-orange-900">
          {/* Security Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="securityGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <g stroke="currentColor" strokeWidth="1" fill="none" className="text-red-400">
                    <rect x="10" y="10" width="80" height="80" rx="8" />
                    <rect x="20" y="20" width="60" height="60" rx="4" />
                    <circle cx="50" cy="50" r="15" />
                    <circle cx="50" cy="50" r="8" fill="currentColor" />
                    <path d="M30,30 L70,30 M30,70 L70,70 M30,30 L30,70 M70,30 L70,70" strokeDasharray="3,3" />
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#securityGrid)" />
            </svg>
          </div>
          
          {/* Animated Threat Indicators */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-red-400 to-transparent animate-pulse"
                style={{
                  top: `${10 + i * 12}%`,
                  left: '0%',
                  width: '100%',
                  animationDelay: `${i * 0.6}s`,
                  animationDuration: '4s'
                }}
              />
            ))}
          </div>
          
          {/* Floating Security Icons */}
          <div className="absolute top-20 left-20 animate-float opacity-30">
            <div className="w-16 h-16 bg-gradient-to-r from-red-400/20 to-orange-500/20 rounded-2xl border-2 border-red-400/30 flex items-center justify-center">
              <Shield className="w-8 h-8 text-red-400" />
            </div>
          </div>
          <div className="absolute top-40 right-32 animate-float opacity-30" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400/20 to-yellow-500/20 rounded-xl border-2 border-orange-400/30 flex items-center justify-center">
              <Lock className="w-6 h-6 text-orange-400" />
            </div>
          </div>
          <div className="absolute bottom-32 left-32 animate-float opacity-30" style={{ animationDelay: '2s' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-red-500/20 rounded-2xl border-2 border-yellow-400/30 flex items-center justify-center">
              <Eye className="w-10 h-10 text-yellow-400" />
            </div>
          </div>
          <div className="absolute bottom-48 right-1/4 animate-float opacity-30" style={{ animationDelay: '0.5s' }}>
            <div className="w-14 h-14 bg-gradient-to-r from-red-400/20 to-pink-500/20 rounded-xl border-2 border-red-400/30 flex items-center justify-center">
              <AlertTriangle className="w-7 h-7 text-red-400" />
            </div>
          </div>
          
          {/* Glowing Security Perimeter */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
                <Shield className="w-4 h-4 text-red-300 animate-pulse" />
                <span className="text-red-200 text-sm font-medium">Advanced Cyber Security</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white hero-heading-large mb-6">
                <span className="block">Cyber</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-orange-300 to-yellow-300 animate-gradient-x">
                  Security
                </span>
              </h1>
              
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-4">
                  Secure Today. Resilient Tomorrow.
                </h2>
                
                <p className="text-xl text-slate-300 leading-relaxed">
                  In an increasingly digital and interconnected world, cyber threats are evolving faster than ever. 
                  Our Cyber Security solutions are designed to protect your organization from data breaches, ransomware, 
                  insider threats, and regulatory risks — ensuring your business remains secure and compliant.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="tel:+917010203031"
                  className="group bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-400 hover:to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Consult Our Cyber Experts</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <Activity className="w-5 h-5" />
                  <span>Security Assessment</span>
                </button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-red-400 mb-1">99.9%</div>
                  <div className="text-slate-400 text-sm">Detection Rate</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-orange-400 mb-1">24/7</div>
                  <div className="text-slate-400 text-sm">SOC Monitoring</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual Element - Security Operations Center */}
            <div className="relative">
              {/* Main Security Dashboard */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* SOC Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-lg">Security Operations Center</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-red-400 text-sm">Active Monitoring</span>
                  </div>
                </div>
                
                {/* Threat Detection Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: Shield, color: 'from-red-400 to-orange-500', label: 'Firewall', status: 'Protected' },
                    { icon: Eye, color: 'from-blue-400 to-cyan-500', label: 'Monitoring', status: 'Active' },
                    { icon: Lock, color: 'from-green-400 to-teal-500', label: 'Encryption', status: 'Enabled' },
                    { icon: AlertTriangle, color: 'from-yellow-400 to-orange-500', label: 'Threats', status: 'Blocked' },
                    { icon: Database, color: 'from-purple-400 to-pink-500', label: 'Backup', status: 'Secure' },
                    { icon: Wifi, color: 'from-indigo-400 to-purple-500', label: 'Network', status: 'Monitored' }
                  ].map((security, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-r ${security.color} rounded-xl mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <security.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-white text-xs font-medium mb-1">{security.label}</div>
                      <div className="text-green-400 text-xs">{security.status}</div>
                      
                      {/* Security Status Indicator */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
                
                {/* Security Metrics */}
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
                
                {/* Threat Intelligence Feed */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <h4 className="text-white text-sm font-medium mb-3">Threat Intelligence</h4>
                  <div className="space-y-2">
                    {[
                      { threat: 'Malware blocked', source: 'Email gateway', time: '1m ago', severity: 'high' },
                      { threat: 'Intrusion attempt', source: 'Network perimeter', time: '3m ago', severity: 'critical' },
                      { threat: 'Phishing detected', source: 'Web filter', time: '7m ago', severity: 'medium' }
                    ].map((intel, index) => (
                      <div key={index} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            intel.severity === 'critical' ? 'bg-red-400' : 
                            intel.severity === 'high' ? 'bg-orange-400' : 'bg-yellow-400'
                          }`}></div>
                          <span className="text-slate-300">{intel.threat}</span>
                          <span className="text-slate-400">{intel.source}</span>
                        </div>
                        <span className="text-slate-500">{intel.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Security Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-red-400 to-orange-600 rounded-2xl animate-spin-slow opacity-80 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-600 rounded-xl animate-bounce opacity-60 flex items-center justify-center">
                <Bug className="w-6 h-6 text-white" />
              </div>

              {/* Security Perimeter Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-30">
                  <defs>
                    <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                  <line x1="20%" y1="20%" x2="80%" y2="80%" stroke="url(#securityGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                  <line x1="80%" y1="20%" x2="20%" y2="80%" stroke="url(#securityGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <circle cx="50%" cy="50%" r="30%" fill="none" stroke="url(#securityGradient)" strokeWidth="1" strokeDasharray="10,5" className="animate-spin-slow" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Cyber Security Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-red-600" />
              <span className="text-red-700 text-sm font-medium">Core Security Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Cyber Security{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Services
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {cyberServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-red-200 transition-all duration-500 transform hover:-translate-y-4 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-600 transition-all duration-300">
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

                {/* Security Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-red-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-orange-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Divider */}
      <div className="relative py-12 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-red-400"></div>
              <Crosshair className="w-8 h-8 text-red-500" />
              <div className="w-16 h-px bg-gradient-to-r from-red-400 to-transparent"></div>
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

      {/* Industries We Secure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
              <Building className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 text-sm font-medium">Industries We Secure</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                We Secure
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Our tailored cybersecurity solutions protect mission-critical assets across BFSI, IT & ITES, 
              Energy, Pharma, Healthcare, Logistics, and Industrial sectors.
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
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600">
          {/* Security Matrix Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating Security Elements */}
          <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-2xl blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Security Perimeter */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 400">
              <defs>
                <linearGradient id="securityPerimeter" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <line x1="0" y1="200" x2="1000" y2="200" stroke="url(#securityPerimeter)" strokeWidth="2" />
              <circle cx="200" cy="200" r="8" fill="white" />
              <circle cx="400" cy="200" r="6" fill="white" />
              <circle cx="600" cy="200" r="7" fill="white" />
              <circle cx="800" cy="200" r="5" fill="white" />
            </svg>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Ahead of Cyber Threats.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Stay Secure.
            </span>
          </h3>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Ready to fortify your digital infrastructure? Our cybersecurity experts are standing by to assess, 
            design, and implement comprehensive security solutions that protect your business from evolving threats.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:+917010203031"
              className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Consult Our Cyber Experts</span>
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

export default CyberSecurity;