import React from 'react';
import { 
  Users, 
  BarChart3, 
  Target, 
  Briefcase, 
  Clock, 
  TrendingUp,
  Phone,
  ArrowRight,
  CheckCircle,
  Zap,
  Award,
  Shield,
  Building,
  Layers,
  FileText,
  UserPlus,
  UserMinus,
  UserCheck,
  Calendar,
  Presentation,
  Lightbulb,
  Puzzle,
  Handshake,
  Star,
  Heart,
  Smile,
  Headphones
} from 'lucide-react';
import Footer from '../components/Footer';

const WorkforceManagement: React.FC = () => {
  const services = [
    {
      icon: UserPlus,
      title: 'Talent Acquisition & Onboarding',
      description: 'Streamline your recruitment process with our end-to-end talent acquisition solutions. We help you identify, attract, and onboard top talent efficiently.',
      features: ['Recruitment strategy development', 'Candidate sourcing & screening', 'Interview process optimization', 'Structured onboarding programs'],
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-indigo-600/10'
    },
    {
      icon: BarChart3,
      title: 'Performance Management',
      description: 'Develop robust performance management systems that drive productivity, engagement, and growth. Our solutions help align individual goals with organizational objectives.',
      features: ['KPI development & tracking', 'Feedback mechanisms', 'Performance review frameworks', 'Recognition programs'],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10'
    },
    {
      icon: UserCheck,
      title: 'Employee Engagement',
      description: 'Create a workplace culture that fosters engagement, satisfaction, and retention. Our strategies help you build an environment where employees thrive.',
      features: ['Engagement survey design', 'Culture development', 'Employee experience mapping', 'Retention strategies'],
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-500/10 to-teal-600/10'
    },
    {
      icon: UserMinus,
      title: 'Workforce Planning & Optimization',
      description: 'Align your workforce strategy with business goals through data-driven planning and optimization. We help you build the right team for your future needs.',
      features: ['Workforce forecasting', 'Skills gap analysis', 'Succession planning', 'Resource optimization'],
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-500/10 to-red-600/10'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Productivity',
      description: 'Optimize workforce performance and streamline processes to achieve more with your existing resources.'
    },
    {
      icon: Heart,
      title: 'Enhanced Employee Satisfaction',
      description: 'Create engaging work environments that boost morale, reduce turnover, and attract top talent.'
    },
    {
      icon: Target,
      title: 'Strategic Alignment',
      description: 'Ensure your workforce strategy directly supports your business goals and long-term vision.'
    },
    {
      icon: Shield,
      title: 'Compliance Assurance',
      description: 'Stay ahead of regulatory requirements with workforce policies that mitigate risk and ensure compliance.'
    }
  ];

  const approach = [
    {
      step: 1,
      title: 'Assess',
      description: 'Comprehensive evaluation of current workforce practices, challenges, and opportunities',
      icon: Layers
    },
    {
      step: 2,
      title: 'Strategize',
      description: 'Develop tailored solutions aligned with your business goals and organizational culture',
      icon: Lightbulb
    },
    {
      step: 3,
      title: 'Implement',
      description: 'Execute strategies with clear timelines, responsibilities, and success metrics',
      icon: Puzzle
    },
    {
      step: 4,
      title: 'Measure',
      description: 'Track progress and outcomes through data-driven analytics and reporting',
      icon: BarChart3
    },
    {
      step: 5,
      title: 'Optimize',
      description: 'Continuously refine approaches based on results and evolving business needs',
      icon: TrendingUp
    }
  ];

  const industries = [
    { name: 'Manufacturing', icon: Building, color: 'from-blue-500 to-indigo-500' },
    { name: 'Technology', icon: Zap, color: 'from-purple-500 to-pink-500' },
    { name: 'Healthcare', icon: Heart, color: 'from-red-500 to-pink-500' },
    { name: 'Financial Services', icon: Briefcase, color: 'from-green-500 to-teal-500' },
    { name: 'Retail', icon: ShoppingBag, color: 'from-orange-500 to-red-500' },
    { name: 'Education', icon: GraduationCap, color: 'from-blue-500 to-cyan-500' }
  ];

  const testimonials = [
    {
      quote: "CHN Technologies transformed our workforce management approach. Their strategic insights helped us reduce turnover by 35% while improving productivity across departments.",
      author: "Sarah Johnson",
      position: "HR Director",
      company: "Global Manufacturing Inc.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      quote: "The team at CHN provided invaluable guidance during our company's rapid growth phase. Their workforce planning strategies helped us scale efficiently while maintaining our culture.",
      author: "Michael Chen",
      position: "COO",
      company: "TechSolutions Ltd.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      quote: "Working with CHN's workforce consultants gave us the clarity we needed to restructure our teams for optimal performance. Their data-driven approach delivered measurable results.",
      author: "Priya Sharma",
      position: "People Operations Lead",
      company: "Innovate Financial",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const stats = [
    { value: '35%', label: 'Average Turnover Reduction', icon: UserMinus, color: 'from-blue-400 to-indigo-500' },
    { value: '28%', label: 'Productivity Improvement', icon: TrendingUp, color: 'from-purple-400 to-pink-500' },
    { value: '40%', label: 'Faster Hiring Process', icon: Clock, color: 'from-green-400 to-teal-500' },
    { value: '98%', label: 'Client Satisfaction', icon: Smile, color: 'from-orange-400 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Unique Workforce Management Layout */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Gradient Background with Organic Shapes */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
          {/* Organic Shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
            <div className="absolute top-1/2 left-1/2 w-1/3 h-1/3 bg-gradient-to-br from-indigo-400/20 to-blue-500/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating People Icons */}
          <div className="absolute top-20 left-20 animate-float opacity-30">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-full border-2 border-blue-400/30 flex items-center justify-center">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="absolute top-40 right-32 animate-float opacity-30" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full border-2 border-purple-400/30 flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          <div className="absolute bottom-32 left-32 animate-float opacity-30" style={{ animationDelay: '2s' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-pink-400/20 to-red-500/20 rounded-full border-2 border-pink-400/30 flex items-center justify-center">
              <BarChart3 className="w-10 h-10 text-pink-400" />
            </div>
          </div>
          
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
                <Users className="w-4 h-4 text-blue-300 animate-pulse" />
                <span className="text-blue-200 text-sm font-medium">Workforce Management Consulting</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                <span className="block">Strategic</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 animate-gradient-x">
                  Workforce Management
                </span>
                <span className="block">Consulting</span>
              </h1>
              
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Optimize your most valuable asset—your people. Our workforce management consulting 
                services help you build high-performing teams, enhance employee engagement, and 
                align your workforce strategy with business objectives.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="tel:+917010203031"
                  className="group bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <FileText className="w-5 h-5" />
                  <span>Download Brochure</span>
                </button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-blue-400 mb-1">35%</div>
                  <div className="text-slate-400 text-sm">Turnover Reduction</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-indigo-400 mb-1">28%</div>
                  <div className="text-slate-400 text-sm">Productivity Boost</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual Element - Workforce Dashboard */}
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5"></div>
                
                {/* Dashboard Header */}
                <div className="relative flex items-center justify-between mb-8">
                  <h3 className="text-white font-semibold text-lg">Workforce Analytics Dashboard</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Live Data</span>
                  </div>
                </div>
                
                {/* Team Performance Chart */}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6">
                  <h4 className="text-white text-sm font-medium mb-4">Team Performance Overview</h4>
                  
                  {/* Simulated Bar Chart */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300">Engineering</span>
                        <span className="text-blue-300">92%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300">Marketing</span>
                        <span className="text-blue-300">78%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300">Sales</span>
                        <span className="text-blue-300">85%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300">Customer Support</span>
                        <span className="text-blue-300">89%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{ width: '89%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <UserPlus className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-lg font-bold text-white">94%</div>
                    <div className="text-slate-400 text-xs">Onboarding Success</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <UserMinus className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-lg font-bold text-white">12%</div>
                    <div className="text-slate-400 text-xs">Turnover Rate</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <UserCheck className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-lg font-bold text-white">87%</div>
                    <div className="text-slate-400 text-xs">Engagement Score</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-lg font-bold text-white">18d</div>
                    <div className="text-slate-400 text-xs">Time-to-Hire</div>
                  </div>
                </div>
                
                {/* Recent Activity */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <h4 className="text-white text-sm font-medium mb-3">Recent Workforce Activity</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-slate-300">New hire onboarding completed</span>
                      </div>
                      <span className="text-slate-400">2h ago</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-slate-300">Performance review cycle started</span>
                      </div>
                      <span className="text-slate-400">5h ago</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-slate-300">Team engagement survey launched</span>
                      </div>
                      <span className="text-slate-400">1d ago</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full animate-spin-slow opacity-80 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full animate-bounce opacity-60 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">Our Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Workforce{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Management Solutions
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer end-to-end workforce consulting services designed to optimize your human capital 
              and drive organizational success.
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
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
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
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
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 text-sm font-medium">Key Benefits</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Our Consulting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Benefits You
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-purple-200 transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
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

      {/* Testimonials Section - Unique Design */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-indigo-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(79,70,229,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(192,132,252,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <Star className="w-4 h-4 text-yellow-300 animate-pulse" />
              <span className="text-yellow-200 text-sm font-medium">Client Success Stories</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 animate-gradient-x">
                Clients Say
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Quote Symbol */}
                <div className="absolute top-6 right-6 text-4xl text-indigo-400/20 font-serif">"</div>
                
                {/* Content */}
                <div className="relative">
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-indigo-400/30"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.author}</h4>
                      <p className="text-indigo-300 text-sm">{testimonial.position}</p>
                      <p className="text-slate-400 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section - Unique Timeline Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4 text-green-600" />
              <span className="text-green-700 text-sm font-medium">Our Approach</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                Methodology
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured, data-driven approach to workforce management consulting 
              that delivers measurable results.
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Timeline Approach */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-teal-500 hidden md:block"></div>
            
            <div className="space-y-12">
              {approach.map((step, index) => (
                <div key={index} className="relative">
                  <div className={`md:grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:rtl'}`}>
                    {/* Timeline Node */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center z-10">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className={`bg-white border border-gray-200 rounded-3xl p-8 shadow-lg relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} md:ltr`}>
                      <div className="md:hidden inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-4">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        Step {step.step}
                      </span>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    
                    {/* Empty Space for Alternating Layout */}
                    <div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-full px-4 py-2 mb-6">
              <Building className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 text-sm font-medium">Industries We Serve</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expertise Across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Multiple Industries
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section - Unique Stats Design */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-blue-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(79,70,229,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <BarChart3 className="w-4 h-4 text-blue-300 animate-pulse" />
              <span className="text-blue-200 text-sm font-medium">Measurable Results</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Delivering{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300 animate-gradient-x">
                Measurable Results
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 text-center overflow-hidden"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Content */}
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  
                  <p className="text-slate-300 text-sm">
                    {stat.label}
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
          {/* Pattern Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Workforce Strategy?
            </span>
          </h3>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Let's work together to build high-performing teams, enhance employee engagement, and 
            align your workforce strategy with your business objectives.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:+917010203031"
              className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Headphones className="w-5 h-5" />
              <span>Speak to a Consultant</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Import missing icons
function ShoppingBag(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function GraduationCap(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  );
}

export default WorkforceManagement;