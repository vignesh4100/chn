import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Briefcase, 
  UserPlus, 
  Building, 
  Handshake,
  Phone,
  ArrowRight,
  CheckCircle,
  Award,
  Globe,
  Clock,
  TrendingUp,
  Target,
  Zap,
  Shield,
  Star,
  FileText,
  Layers,
  Rocket,
  Cpu,
  Database,
  Code,
  Cloud,
  Headphones,
  Smartphone,
  Monitor,
  Heart,
  Lightbulb,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Footer from '../components/Footer';

const WorkforceManagement: React.FC = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const services = [
    {
      icon: Search,
      title: 'Permanent Recruitment',
      description: 'We specialize in end-to-end permanent hiring solutions tailored for long-term workforce stability and business growth. Our recruitment experts ensure you find top-tier, culture-fit professionals who contribute from day one.',
      features: [
        'End-to-End Talent Acquisition (sourcing to onboarding)',
        'Industry-Specific Hiring: IT, Engineering, Healthcare, Finance, Manufacturing, and more',
        'Skill-Based Assessments & Competency Mapping',
        'Diversity & Inclusion Hiring',
        'Employer Branding & Talent Market Insights'
      ],
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-indigo-600/10',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
    },
    {
      icon: Building,
      title: 'Recruitment Process Outsourcing (RPO)',
      description: 'Our scalable RPO solutions streamline your entire hiring lifecycle. From sourcing and screening to offer rollouts and onboarding, we manage everything — reducing costs and improving time-to-hire metrics.',
      features: [
        'Full Lifecycle Recruitment Management',
        'Scalable & Project-Based RPO Models',
        'Talent Pipelining & Workforce Planning',
        'Employer Branding & Candidate Experience Enhancement'
      ],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
    },
    {
      icon: Briefcase,
      title: 'Executive Search',
      description: 'We help you identify and hire senior leadership talent that aligns with your vision, values, and strategic direction. With a discreet, targeted approach, we connect you with high-impact leaders for critical roles.',
      features: [
        'C-Level & Senior Leadership Roles (CEO, CFO, CTO, CHRO, etc.)',
        'Industry-Specific Executive Search',
        'Confidential & Discreet Hiring Processes',
        'Market Intelligence & Talent Mapping',
        'Leadership Assessment & Cultural Fit Evaluation'
      ],
      color: 'from-amber-500 to-orange-600',
      bgColor: 'from-amber-500/10 to-orange-600/10',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
    },
    {
      icon: UserPlus,
      title: 'Contingent Staffing',
      description: 'Achieve workforce flexibility with our agile staffing solutions. Whether you need contract workers, project-based teams, or temporary professionals — we provide access to skilled talent on-demand, without long-term commitments.',
      features: [
        'Contract & Temporary Staffing',
        'On-Demand Workforce Solutions',
        'Gig & Freelance Talent Access',
        'Managed Service Provider (MSP) Solutions',
        'Hybrid Workforce Models',
        'Risk & Compliance Management',
        'Talent Pool Development for Urgent Hiring'
      ],
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-500/10 to-teal-600/10',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Deep industry expertise across sectors',
      description: 'Our specialized recruiters understand the unique talent needs of your industry'
    },
    {
      icon: Cpu,
      title: 'Tech-enabled talent delivery',
      description: 'AI-powered matching algorithms and digital assessment tools for better candidate selection'
    },
    {
      icon: Shield,
      title: 'Strong compliance & documentation processes',
      description: 'Ensuring all hiring practices meet legal and regulatory requirements'
    },
    {
      icon: Target,
      title: 'Pan-India hiring & deployment capability',
      description: 'Access to talent across all major cities and regions in India'
    },
    {
      icon: Heart,
      title: 'Personalized approach with measurable outcomes',
      description: 'Customized solutions with clear KPIs and performance metrics'
    }
  ];

  const industries = [
    { name: 'Information Technology', icon: Monitor, color: 'from-blue-500 to-cyan-500' },
    { name: 'Healthcare', icon: Heart, color: 'from-pink-500 to-red-500' },
    { name: 'Manufacturing', icon: Layers, color: 'from-purple-500 to-indigo-500' },
    { name: 'Finance & Banking', icon: Database, color: 'from-emerald-500 to-teal-500' },
    { name: 'Retail & E-commerce', icon: Smartphone, color: 'from-orange-500 to-red-500' },
    { name: 'Engineering', icon: Code, color: 'from-blue-500 to-indigo-500' },
    { name: 'Telecom', icon: Cloud, color: 'from-cyan-500 to-blue-500' },
    { name: 'Education', icon: Lightbulb, color: 'from-yellow-500 to-amber-500' }
  ];

  const stats = [
    { value: '500+', label: 'Clients Served', icon: Building, color: 'from-blue-400 to-indigo-500' },
    { value: '10,000+', label: 'Successful Placements', icon: Users, color: 'from-purple-400 to-pink-500' },
    { value: '95%', label: 'Retention Rate', icon: Award, color: 'from-emerald-400 to-teal-500' },
    { value: '48 Hrs', label: 'Average Response Time', icon: Clock, color: 'from-amber-400 to-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Asymmetric Layout with Overlapping Elements */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradient with Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-brand-800 to-brand-900">
          {/* Mesh Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="grid-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"></path>
                  <circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.3)"></circle>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
            </svg>
          </div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`
                }}
              />
            ))}
          </div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content - Overlapping Cards */}
            <div className="lg:w-1/2 z-10 mb-12 lg:mb-0">
              <div className="relative">
                {/* Main Content Card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">
                  <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
                    <Users className="w-4 h-4 text-blue-300" />
                    <span className="text-blue-200 text-sm font-medium">Workforce Management</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                    <span className="block">Hire Smarter.</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 animate-gradient-x">
                      Scale Faster.
                    </span>
                    <span className="block">Stay Compliant.</span>
                  </h1>
                  
                  <p className="text-lg text-slate-200 mb-8 leading-relaxed max-w-xl">
                    At CHN Technologies, we deliver strategic workforce management solutions that help you build 
                    high-performing teams, reduce hiring overhead, and maintain operational agility.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <button onClick={onOpenModal} className="group bg-gradient-to-r from-brand-500 to-brand-700 hover:from-brand-400 hover:to-brand-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand-500/25 flex items-center gap-2">
                      <span>Build Your Future Workforce</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <a
                      href="tel:+917010203031"
                      className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Schedule a Call</span>
                    </a>
                  </div>
                </div>              
              </div>
            </div>
            
            {/* Right Content - Staggered Images */}
            <div className="lg:w-1/2 relative">
              <div className="relative h-[500px]">
                {/* Main Image */}
                <div className="absolute top-0 right-0 w-4/5 h-80 rounded-2xl overflow-hidden shadow-2xl z-20 transform hover:scale-105 transition-all duration-500">
                  <img
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Diverse business team collaborating on workforce strategy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent"></div>
                </div>
                
                {/* Secondary Image */}
                <div className="absolute bottom-0 left-0 w-3/5 h-64 rounded-2xl overflow-hidden shadow-2xl z-10 transform hover:scale-105 transition-all duration-500">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="HR professionals reviewing candidate profiles"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 via-transparent to-transparent"></div>
                </div>
                
                {/* Tertiary Image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl z-30 hover:scale-110 transition-all duration-500">
                  <img
                    src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                    alt="Job interview and talent assessment"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl transform rotate-12 z-0"></div>
                <div className="absolute top-1/4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg transform -rotate-12 z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">Our Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Workforce Solutions
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From permanent recruitment to contingent staffing, we offer end-to-end workforce management services
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <service.icon className={`w-5 h-5 ${activeTab === index ? 'text-white' : 'text-gray-500'}`} />
                  <span>{service.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            {services.map((service, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  activeTab === index ? 'block' : 'hidden'
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-80 lg:h-auto overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-30`}></div>
                    
                    {/* Floating Icon */}
                    <div className="absolute top-6 left-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                      <service.icon className={`w-8 h-8 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 lg:p-10">
                    <h3 className={`text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        {service.title === 'Recruitment Process Outsourcing (RPO)' ? 'RPO Highlights:' : 
                         service.title === 'Executive Search' ? 'Executive Hiring Expertise:' : 
                         service.title === 'Contingent Staffing' ? 'Contingent Staffing Includes:' : 
                         'What We Offer:'}
                      </h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r ${service.color} mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button onClick={onOpenModal} className={`bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2`}>
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Hexagonal Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_25%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(79,70,229,0.05),transparent_25%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 text-sm font-medium">Our Advantages</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                CHN Technologies
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine industry expertise with cutting-edge technology to deliver exceptional workforce solutions
            </p>
          </div>

          {/* Hexagonal Grid Layout */}
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group w-64 h-72 relative"
              >
                {/* Hexagon Background */}
                <div className="absolute inset-0 bg-white border border-gray-200 shadow-lg rounded-3xl transform transition-all duration-500 group-hover:shadow-xl group-hover:border-purple-200 group-hover:-translate-y-2"></div>
                
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-indigo-600 transition-all duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Accordion Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-2 mb-8">
              <Building className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">Industries We Serve</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Specialized Talent Solutions{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient-x">
                Across Industries
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center`}>
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                  </div>
                  {openAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </button>
                
                {openAccordion === index && (
                  <div className="px-6 pb-6 text-slate-300 space-y-3 animate-fade-in-up">
                    <p>Our specialized {industry.name.toLowerCase()} recruitment team understands the unique talent requirements of your sector.</p>
                    <div className="pt-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Industry-specific talent pool</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Specialized skill assessment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Compliance expertise</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Floating Cards */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTIwIDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0xNi0xNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNCIvPjwvZz48L2c+PC9zdmc+')]"></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <TrendingUp className="w-4 h-4 text-indigo-300 animate-pulse" />
              <span className="text-indigo-200 text-sm font-medium">Our Impact</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Driving{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 animate-gradient-x">
                Workforce Excellence
              </span>
            </h2>
          </div>

          {/* Floating Stats Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative w-64"
                style={{ 
                  transform: `translateY(${index % 2 === 0 ? '0' : '40px'})`,
                  zIndex: 10 - index
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl transform transition-all duration-500 group-hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  
                  <div className="text-indigo-200 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Asymmetric Design */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTIwIDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0xNi0xNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNCIvPjwvZz48L2c+PC9zdmc+')]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Left Image */}
            <div className="lg:col-span-2 hidden lg:block">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <img
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Team collaboration on recruitment strategy"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/30 to-transparent"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-xl">500+</div>
                        <div className="text-blue-200 text-sm">Global Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl transform -rotate-12 z-0"></div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg transform rotate-12 z-0"></div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="lg:col-span-3">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 relative overflow-hidden">
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-3xl"></div>
                
                <div className="relative">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Let's Build Your{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                      Workforce of the Future
                    </span>
                  </h2>
                  
                  <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                    Whether you need one leader or a hundred workers, CHN Technologies helps you scale efficiently with confidence.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="tel:+917010203031"
                      className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Schedule a Discovery Call</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                      <FileText className="w-5 h-5" />
                      <span>Download Brochure</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkforceManagement;