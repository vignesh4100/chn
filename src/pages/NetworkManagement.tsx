import React from 'react';
import { 
  Network, 
  Shield, 
  TrendingUp, 
  Settings, 
  Cloud, 
  AlertTriangle,
  Phone,
  ArrowRight,
  CheckCircle,
  Zap,
  Monitor,
  Lock,
  Activity,
  Server,
  Wifi,
  Eye,
  Building,
  Plane,
  Car,
  Factory,
  Stethoscope,
  Fuel,
  Banknote
} from 'lucide-react';
import Footer from '../components/Footer';

const NetworkManagement: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: '24/7 Network Monitoring',
      description: 'Proactive monitoring to identify and resolve issues before they impact operations.',
      features: ['Real-time alerts', 'Performance tracking', 'Automated diagnostics', 'Issue prevention']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Continuous tuning for speed, stability, and efficiency.',
      features: ['Bandwidth optimization', 'Traffic analysis', 'Speed enhancement', 'Latency reduction']
    },
    {
      icon: Shield,
      title: 'Security Management',
      description: 'Firewalls, intrusion detection, and compliance-driven network protection.',
      features: ['Firewall configuration', 'Threat detection', 'Security audits', 'Compliance monitoring']
    },
    {
      icon: Settings,
      title: 'Infrastructure Setup & Maintenance',
      description: 'From design to deployment and routine health checks.',
      features: ['Network design', 'Equipment installation', 'Regular maintenance', 'Health monitoring']
    },
    {
      icon: Cloud,
      title: 'Cloud & Hybrid Network Support',
      description: 'End-to-end support for modern enterprise environments.',
      features: ['Cloud integration', 'Hybrid solutions', 'Multi-cloud support', 'Migration assistance']
    },
    {
      icon: AlertTriangle,
      title: 'Incident & Problem Management',
      description: 'Fast recovery with root-cause analysis and preventive solutions.',
      features: ['Rapid response', 'Root cause analysis', 'Preventive measures', 'Documentation']
    }
  ];

  const industries = [
    { name: 'Aerospace', icon: Plane, color: 'from-blue-500 to-cyan-500' },
    { name: 'Automotive', icon: Car, color: 'from-red-500 to-orange-500' },
    { name: 'Manufacturing', icon: Factory, color: 'from-purple-500 to-pink-500' },
    { name: 'Telecom', icon: Wifi, color: 'from-green-500 to-teal-500' },
    { name: 'Healthcare', icon: Stethoscope, color: 'from-pink-500 to-red-500' },
    { name: 'Energy', icon: Fuel, color: 'from-yellow-500 to-orange-500' },
    { name: 'BFSI', icon: Banknote, color: 'from-emerald-500 to-teal-500' },
    { name: 'And More', icon: Building, color: 'from-indigo-500 to-purple-500' }
  ];

  const whyChooseUs = [
    'Expertise in multi-vendor network environments',
    'Scalable solutions tailored to your business size and sector',
    'SLA-backed support and real-time alerts',
    'Proven success across 20+ industries'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Clean Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating Network Icons */}
          <div className="absolute top-20 left-20 animate-float opacity-20">
            <Network className="w-16 h-16 text-blue-500" />
          </div>
          <div className="absolute top-40 right-32 animate-float opacity-20" style={{ animationDelay: '1s' }}>
            <Server className="w-12 h-12 text-purple-500" />
          </div>
          <div className="absolute bottom-32 left-32 animate-float opacity-20" style={{ animationDelay: '2s' }}>
            <Wifi className="w-14 h-14 text-cyan-500" />
          </div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-blue-200 rounded-full opacity-30"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-purple-200 rounded-lg transform rotate-45 opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-2 mb-8">
              <Network className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">Network Management Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              <span className="block">Network</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                Management
              </span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                Seamless Connectivity. Secured Performance. Scalable Infrastructure.
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                In today's hyper-connected business landscape, your network is the backbone of productivity and performance. 
                Our Network Management services ensure your infrastructure is always secure, optimized, and future-ready — 
                no matter the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">Our Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Offer
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
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
              <Activity className="w-8 h-8 text-blue-500" />
              <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries We Empower */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
              <Building className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 text-sm font-medium">Industries</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Empower
              </span>
            </h2>
            
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

      {/* Visual Divider */}
      <div className="relative py-12 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(107,114,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(107,114,128,0.1)_1px,transparent_1px)] bg-[size:25px_25px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
              <Eye className="w-8 h-8 text-gray-500" />
              <div className="w-16 h-px bg-gradient-to-r from-gray-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-full px-4 py-2 mb-6">
              <Lock className="w-4 h-4 text-green-600" />
              <span className="text-green-700 text-sm font-medium">Why Choose Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                CHN Technologies?
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                      {reason}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Network Connection Lines */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 400">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <line x1="0" y1="200" x2="1000" y2="200" stroke="url(#lineGradient)" strokeWidth="2" />
              <circle cx="200" cy="200" r="4" fill="white" />
              <circle cx="500" cy="200" r="4" fill="white" />
              <circle cx="800" cy="200" r="4" fill="white" />
            </svg>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect Your Enterprise –{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Intelligently.
            </span>
          </h3>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Ready to transform your network infrastructure? Our experts are standing by to design, 
            implement, and manage a network solution that grows with your business.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:+917010203031"
              className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Speak to Our Network Experts</span>
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

export default NetworkManagement;