import React, { useState } from 'react';
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
  HardDrive,
  Star,
  Play
} from 'lucide-react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const DigitalSolutions: React.FC = ({ onOpenModal }) => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const coreServices = [
    {
      icon: BarChart3,
      title: 'Data Analytics & Data Visualization',
      description: 'Transforming Data into Actionable Insights. In the digital age, data is the new currency. Our Data Analytics & Visualization services help you harness the power of your business data to gain deep insights, identify trends, and drive better decision-making.',
      link: '/data-analytics-visualization',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-500/10 to-cyan-600/10',
      features: ['Business Intelligence Dashboards', 'Interactive Data Visualization', 'Predictive & Descriptive Analytics', 'KPI Tracking & Reporting', 'Real-time Data Monitoring']
    },
    {
      icon: Zap,
      title: 'Automation & Digital Transformation',
      description: 'Streamline Operations & Embrace Digital Excellence. Our Automation & Digital Transformation services are designed to simplify complex business processes, reduce manual effort, and boost operational efficiency.',
      link: '/automation-digital-transformation',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10',
      features: ['Business Process Automation (BPA)', 'Robotic Process Automation (RPA)', 'Digital Workflow Optimization', 'Cloud Integration & Digital Tools', 'AI & Machine Learning Implementation']
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
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
              <Brain className="w-4 h-4 text-indigo-300 animate-pulse" />
              <span className="text-indigo-200 text-sm font-medium">Digital Solutions Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              <span className="block">Digital Solutions</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 animate-gradient-x">
                for Business Growth
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-5xl mx-auto leading-relaxed">
              At CHN Technologies, we help businesses unlock their full potential with cutting-edge digital solutions. 
              By combining Data Analytics & Visualization with Automation & Digital Transformation, we enable organizations 
              to make smarter decisions, streamline operations, and stay ahead in today's fast-changing digital landscape.
            </p>
            
            {/* Key Highlights */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <BarChart3 className="w-4 h-4 text-blue-400" />
                <span className="text-white text-sm font-medium">Data-Driven Insights</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <span className="text-white text-sm font-medium">Process Automation</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Brain className="w-4 h-4 text-pink-400" />
                <span className="text-white text-sm font-medium">AI & ML Integration</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={onOpenModal} className="group bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-2">
                <span>Let's Transform Your Business Together</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <Link to="/contact" className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                <span>Contact us today to get started!</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CHN for Digital Solutions */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <Lightbulb className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-sm font-medium">Why Choose CHN</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Unlock the Power of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Digital Innovation
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                At CHN Technologies, we specialize in transforming raw data into actionable insights and automating 
                complex business processes. Our digital solutions are designed to boost efficiency, reduce costs, 
                and drive innovation across your organization. Whether you're looking to harness data analytics 
                or embrace digital transformation, we deliver results that matter.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                {heroStats.map((stat, index) => (
                  <div
                    key={index}
                    className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 text-center"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data Analytics</h4>
                    <p className="text-gray-600 text-sm">Actionable insights</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Automation</h4>
                    <p className="text-gray-600 text-sm">Process optimization</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl animate-spin-slow opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl animate-bounce opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Digital Solutions */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-8">
              <Brain className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">Our Digital Solutions Include</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Digital Solutions{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                Include
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className={`space-y-2 mb-6 transition-all duration-500 ${
                    hoveredService === index ? 'opacity-100 max-h-40' : 'opacity-70 max-h-24 overflow-hidden'
                  }`}>
                    <h4 className="text-white font-semibold mb-3">Our Expertise Includes:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={service.link}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.color} hover:opacity-90 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                CHN Technologies?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted expertise and proven solutions for your digital transformation needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-green-200 transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-teal-600 transition-all duration-300">
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

      {/* Industries We Transform */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-2 mb-8">
              <Building className="w-4 h-4 text-purple-400 animate-pulse" />
              <span className="text-purple-300 text-sm font-medium">Industries We Transform</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industries{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient-x">
                We Transform
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${industry.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-300 group-hover:text-white transition-colors duration-300">
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
          {/* Digital Pattern Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Data Flow */}
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Digital Innovation?
            </span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
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
              <Star className="w-5 h-5" />
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