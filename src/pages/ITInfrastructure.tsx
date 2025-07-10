import React, { useState } from 'react';
import { 
  Server, 
  Network, 
  Shield, 
  Monitor, 
  Cable, 
  Eye,
  MapPin,
  Lock,
  Rocket,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Award,
  Clock,
  Globe,
  Building,
  Cpu,
  Database,
  Cloud,
  Settings
} from 'lucide-react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ITInfrastructure: React.FC = ({ onOpenModal }) => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const coreServices = [
    {
      icon: Network,
      title: 'Network Management',
      description: 'We offer design, deployment, and support for LAN/WAN, wireless networks, and routers. This includes bandwidth optimization, firewall management, and real-time monitoring to minimize downtime.',
      link: '/network-management',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-500/10 to-blue-600/10'
    },
    {
      icon: Monitor,
      title: 'End User Computing (Desktop Support)',
      description: 'Comprehensive device and user-level IT support. We handle OS installation, system updates, antivirus protection, and user access control for secure, functional computing across your organization.',
      link: '/end-user-computing',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10'
    },
    {
      icon: Shield,
      title: 'Cyber Security & Firewall Setup',
      description: 'Protect your IT environment with enterprise-grade cyber security measures — antivirus, firewall configuration, data protection, threat detection, and recovery solutions.',
      link: '/cyber-security',
      color: 'from-red-500 to-orange-600',
      bgColor: 'from-red-500/10 to-orange-600/10'
    },
    {
      icon: Server,
      title: 'Server Administration',
      description: 'We manage on-premise and cloud servers, covering OS maintenance, backup scheduling, virtualization, uptime monitoring, and disaster recovery planning.',
      link: '/server-administration',
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-500/10 to-teal-600/10'
    },
    {
      icon: Cable,
      title: 'LAN Cabling & Surveillance',
      description: 'We install structured LAN cabling, IP surveillance systems, CCTV, and PoE switch-based security. Ideal for smart offices, warehouses, and factories.',
      link: '/lan-cabling-surveillance',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-500/10 to-purple-600/10'
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: '15+ Years of Infrastructure Expertise',
      description: 'Proven track record in enterprise IT solutions'
    },
    {
      icon: Globe,
      title: 'PAN India Deployment & Support',
      description: 'Nationwide presence with local expertise'
    },
    {
      icon: Settings,
      title: 'Flexible AMC & On-Demand Support Models',
      description: 'Customized service agreements to fit your needs'
    },
    {
      icon: Lock,
      title: 'Secure & Compliant IT Architecture',
      description: 'Industry-standard security and compliance protocols'
    },
    {
      icon: Zap,
      title: 'Rapid Issue Resolution with 24/7 Monitoring',
      description: 'Proactive monitoring and instant response capabilities'
    }
  ];

  const industries = [
    'Aerospace & Defense', 'Automotive', 'Construction', 'Energy', 'Manufacturing', 
    'IT & ITES', 'Telecom', 'Industrial Automation', 'Logistics', 'Cement & Steel', 
    'Healthcare', 'Oil & Gas', 'Petrochemicals', 'Plastics', 'Fertilizers', 
    'Sugar', 'Tyres', 'FMCG/FMCD', 'BFSI'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Advanced Tech Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
          {/* Animated Circuit Pattern */}
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
          
          {/* Floating Tech Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 animate-float opacity-30">
              <Server className="w-12 h-12 text-cyan-400" />
            </div>
            <div className="absolute top-40 right-32 animate-float opacity-30" style={{ animationDelay: '1s' }}>
              <Database className="w-10 h-10 text-purple-400" />
            </div>
            <div className="absolute bottom-32 left-32 animate-float opacity-30" style={{ animationDelay: '2s' }}>
              <Cloud className="w-14 h-14 text-pink-400" />
            </div>
            <div className="absolute bottom-48 right-1/4 animate-float opacity-30" style={{ animationDelay: '0.5s' }}>
              <Network className="w-11 h-11 text-cyan-400" />
            </div>
          </div>
          
          {/* Data Flow Lines */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
                style={{
                  top: `${15 + i * 15}%`,
                  left: '0%',
                  width: '100%',
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
          
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
              <Server className="w-4 h-4 text-cyan-300 animate-pulse" />
              <span className="text-cyan-200 text-sm font-medium">IT Infrastructure Management</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              <span className="block">Reliable IT Infrastructure</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r leading-[1] from-cyan-300 via-purple-300 to-pink-300 animate-gradient-x">
                Management
              </span>
              <span className="block">for Secure & Scalable Operations</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-5xl mx-auto leading-relaxed">
              CHN Technologies delivers comprehensive IT infrastructure services — from network setup and server administration 
              to cybersecurity, user support, and surveillance — ensuring your operations are always up, secure, and future-ready.
            </p>
            
            {/* Key Highlights */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-white text-sm font-medium">On-Site & Remote Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Lock className="w-4 h-4 text-purple-400" />
                <span className="text-white text-sm font-medium">24/7 Monitoring</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Rocket className="w-4 h-4 text-pink-400" />
                <span className="text-white text-sm font-medium">100+ Clients</span>
              </div>
            </div>
            
            <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white w-auto max-w-80 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-2 mx-auto">
              <span>Speak to Our IT Experts</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* What is IT Infrastructure Management */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                <Cpu className="w-4 h-4 text-cyan-600" />
                <span className="text-cyan-700 text-sm font-medium">Infrastructure Overview</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete IT Infrastructure Support –{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">
                  From Cabling to Cloud
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Our IT Infrastructure Management services cover the design, implementation, support, and monitoring of all critical systems 
                that your business depends on. We align your IT setup with your operations — ensuring security, availability, and cost-efficiency. 
                Whether you're setting up a new office, managing multiple branches, or scaling remote teams, CHN Technologies ensures your 
                infrastructure never becomes a bottleneck.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-50 to-purple-50 rounded-3xl p-8 border border-cyan-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <Network className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Network Design</h4>
                    <p className="text-gray-600 text-sm">Optimized connectivity</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Security</h4>
                    <p className="text-gray-600 text-sm">Enterprise protection</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <Server className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Server Management</h4>
                    <p className="text-gray-600 text-sm">24/7 monitoring</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Surveillance</h4>
                    <p className="text-gray-600 text-sm">Smart monitoring</p>
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

      {/* Core Services */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.1),transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-2 mb-8">
              <Settings className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-cyan-300 text-sm font-medium">Core Services</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Core Services{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">
                We Offer
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <a
                    href={service.link}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.color} hover:opacity-90 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CHN Technologies */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">
                CHN Technologies?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted expertise and proven solutions for your IT infrastructure needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-cyan-200 transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-purple-600 transition-all duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-2 mb-8">
              <Building className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-cyan-300 text-sm font-medium">Industries We Serve</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industries{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">
                We Serve
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300 text-sm font-medium">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-purple-600 to-pink-600">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Stabilize and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Scale Your Infrastructure?
            </span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let our certified IT team manage your tech backbone while you focus on business growth.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white font-medium">+91-7010203031</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3">
              <Mail className="w-5 h-5 text-white" />
              <span className="text-white font-medium">info@chnindia.com</span>
            </div>
          </div>
          
          <button onClick={onOpenModal} className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
            <span>Request a Callback</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITInfrastructure;