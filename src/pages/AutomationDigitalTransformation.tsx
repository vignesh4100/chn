import React from 'react';
import { 
  Zap, 
  Bot, 
  Workflow, 
  Cloud, 
  Brain, 
  Settings,
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
  TrendingUp,
  Eye,
  Star,
  Play,
  Briefcase,
  FileText,
  Calendar,
  DollarSign,
  AlertCircle,
  CheckSquare,
  Cpu,
  GitBranch,
  Activity,
  BarChart3,
  Smartphone,
  Server,
  HardDrive,
  Network,
  Lock,
  Headphones
} from 'lucide-react';
import Footer from '../components/Footer';

const AutomationDigitalTransformation: React.FC = () => {
  const coreServices = [
    {
      icon: Workflow,
      title: 'Business Process Automation',
      description: 'Automate repetitive and manual processes across HR, payroll, finance, and operations using industry-standard tools like Zapier, Make (Integromat), and Power Automate. Our automation layer reduces delays, minimizes errors, and boosts productivity.',
      features: ['HR process automation', 'Payroll automation', 'Finance workflows', 'Operations optimization'],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-500/10 to-cyan-600/10'
    },
    {
      icon: Bot,
      title: 'AI Agents & Intelligent Assistants',
      description: 'We deploy AI-driven agents to handle tasks like lead qualification, employee onboarding, FAQ responses, customer engagement, and internal helpdesk operations — reducing human dependency and enabling 24/7 responsiveness.',
      features: ['Lead qualification', 'Employee onboarding', 'FAQ automation', 'Customer engagement', 'Helpdesk operations'],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10'
    },
    {
      icon: GitBranch,
      title: 'Workflow Automation & Integration',
      description: 'We map and digitize your workflows — from approval chains to document processing — and integrate your systems through APIs to enable seamless data flow and unified dashboards.',
      features: ['Workflow mapping', 'Approval automation', 'Document processing', 'API integration', 'Unified dashboards'],
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-500/10 to-teal-600/10'
    },
    {
      icon: Cloud,
      title: 'Cloud-Based Digital Infrastructure',
      description: 'Migrate from legacy systems to flexible, secure cloud environments using AWS, Google Cloud, or Microsoft Azure. We ensure business continuity with scalable infrastructure tailored to your operations.',
      features: ['Legacy migration', 'Cloud deployment', 'Scalable infrastructure', 'Business continuity'],
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-500/10 to-red-600/10'
    },
    {
      icon: Brain,
      title: 'Smart Decision Support Systems',
      description: 'We implement AI-backed automation to drive data-informed decisions — whether it\'s sending alerts on anomalies, generating predictive insights, or assisting managers through real-time dashboards.',
      features: ['Anomaly detection', 'Predictive insights', 'Real-time dashboards', 'Decision support'],
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-500/10 to-purple-600/10'
    }
  ];

  const valueAdditions = [
    {
      icon: Target,
      title: 'Centralized Command',
      description: 'Unified platforms to manage tasks, data, and communication'
    },
    {
      icon: Zap,
      title: 'AI-Powered Efficiency',
      description: 'Replace manual tasks with smart agents that learn and adapt'
    },
    {
      icon: Shield,
      title: 'Error-Free Operations',
      description: 'Reduced manual input and human errors'
    },
    {
      icon: Clock,
      title: 'Faster Turnaround Time',
      description: 'Speed up repetitive tasks and approvals'
    },
    {
      icon: Network,
      title: 'Integrated Systems',
      description: 'APIs that connect HRMS, CRM, Finance, Attendance, and more'
    }
  ];

  const automationUseCases = [
    {
      department: 'HR',
      useCase: 'Automated onboarding, leave & attendance workflows, exit management',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      department: 'Payroll',
      useCase: 'Statutory compliance checks, payslip generation, auto-reminders',
      icon: DollarSign,
      color: 'from-green-500 to-teal-500'
    },
    {
      department: 'Sales & CRM',
      useCase: 'Lead assignment via AI agents, follow-up triggers, status updates',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500'
    },
    {
      department: 'Admin & IT',
      useCase: 'Asset tracking, IT helpdesk chatbots, software provisioning',
      icon: Settings,
      color: 'from-orange-500 to-red-500'
    },
    {
      department: 'Training',
      useCase: 'LMS integration, training feedback collection, report automation',
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const toolsAndTechnologies = [
    {
      category: 'Low-code/No-code Automation',
      tools: ['Zapier', 'Make (Integromat)', 'Power Automate'],
      icon: Workflow,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Advanced RPA Solutions',
      tools: ['UiPath', 'Workato'],
      icon: Bot,
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'AI Agents',
      tools: ['OpenAI GPT', 'ChatGPT'],
      icon: Brain,
      color: 'from-green-500 to-teal-500'
    },
    {
      category: 'Process Digitization',
      tools: ['Google Workspace', 'Microsoft 365'],
      icon: Cloud,
      color: 'from-orange-500 to-red-500'
    },
    {
      category: 'API Integrations',
      tools: ['Custom API Integrations'],
      icon: GitBranch,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      category: 'Operational Automation',
      tools: ['Notion', 'Airtable', 'Trello Automation'],
      icon: Settings,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const transformationApproach = [
    {
      step: 1,
      icon: Eye,
      title: 'Assess',
      description: 'Current processes and identify automation opportunities'
    },
    {
      step: 2,
      icon: Lightbulb,
      title: 'Design',
      description: 'Intelligent workflows with user-centric interfaces'
    },
    {
      step: 3,
      icon: Rocket,
      title: 'Deploy',
      description: 'Scalable automation using trusted platforms'
    },
    {
      step: 4,
      icon: Users,
      title: 'Train',
      description: 'Teams and ensure adoption'
    },
    {
      step: 5,
      icon: Activity,
      title: 'Support',
      description: 'Continuously with monitoring and optimization'
    }
  ];

  const heroStats = [
    { icon: Zap, value: '80%', label: 'Process Efficiency', color: 'from-blue-400 to-cyan-500' },
    { icon: Bot, value: '24/7', label: 'AI Automation', color: 'from-purple-400 to-pink-500' },
    { icon: TrendingUp, value: '300%', label: 'ROI Improvement', color: 'from-green-400 to-teal-500' },
    { icon: Clock, value: '90%', label: 'Time Savings', color: 'from-orange-400 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Automation & Digital Transformation Layout */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Digital Transformation Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
          {/* Automation Flow Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="automationPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  <g stroke="currentColor" strokeWidth="1" fill="none" className="text-purple-400">
                    {/* Automation Nodes */}
                    <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
                    <circle cx="150" cy="50" r="6" fill="currentColor" opacity="0.2" />
                    <circle cx="50" cy="150" r="7" fill="currentColor" opacity="0.25" />
                    <circle cx="150" cy="150" r="5" fill="currentColor" opacity="0.2" />
                    <circle cx="100" cy="100" r="10" fill="currentColor" opacity="0.4" />
                    {/* Workflow Connections */}
                    <path d="M50,50 L100,100 L150,50" strokeWidth="2" strokeDasharray="3,3" opacity="0.3" />
                    <path d="M50,150 L100,100 L150,150" strokeWidth="2" strokeDasharray="3,3" opacity="0.3" />
                    <path d="M50,50 L50,150 M150,50 L150,150" strokeDasharray="2,2" opacity="0.2" />
                    {/* Process Boxes */}
                    <rect x="40" y="40" width="20" height="20" rx="2" opacity="0.1" />
                    <rect x="140" y="40" width="20" height="20" rx="2" opacity="0.1" />
                    <rect x="40" y="140" width="20" height="20" rx="2" opacity="0.1" />
                    <rect x="140" y="140" width="20" height="20" rx="2" opacity="0.1" />
                    <rect x="90" y="90" width="20" height="20" rx="2" opacity="0.15" />
                    {/* AI Symbols */}
                    <path d="M95,95 L105,95 M100,90 L100,110 M97,97 L103,103 M103,97 L97,103" strokeWidth="1" opacity="0.3" />
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#automationPattern)" />
            </svg>
          </div>
          
          {/* Animated Automation Streams */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"
                style={{
                  top: `${10 + i * 9}%`,
                  left: '0%',
                  width: '100%',
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
          
          {/* Floating Automation Icons */}
          <div className="absolute top-20 left-20 animate-float opacity-30">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-2xl border-2 border-purple-400/30 flex items-center justify-center">
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          <div className="absolute top-40 right-32 animate-float opacity-30" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-xl border-2 border-blue-400/30 flex items-center justify-center">
              <Bot className="w-6 h-6 text-blue-400" />
            </div>
          </div>
          <div className="absolute bottom-32 left-32 animate-float opacity-30" style={{ animationDelay: '2s' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-2xl border-2 border-green-400/30 flex items-center justify-center">
              <Workflow className="w-10 h-10 text-green-400" />
            </div>
          </div>
          <div className="absolute bottom-48 right-1/4 animate-float opacity-30" style={{ animationDelay: '0.5s' }}>
            <div className="w-14 h-14 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-xl border-2 border-orange-400/30 flex items-center justify-center">
              <Brain className="w-7 h-7 text-orange-400" />
            </div>
          </div>
          
          {/* Glowing Automation Zones */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
                <Zap className="w-4 h-4 text-purple-300 animate-pulse" />
                <span className="text-purple-200 text-sm font-medium">Automation & Digital Transformation Excellence</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white hero-heading-large mb-6">
                <span className="block">Automation &</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r pb-2 from-purple-300 via-pink-300 to-cyan-300 animate-gradient-x">
                  Digital Transformation
                </span>
              </h1>
              
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-4">
                  Reimagine Operations. Redefine Efficiency. Drive Intelligent Growth.
                </h2>
                
                <p className="text-xl text-slate-300 leading-relaxed">
                  Digital transformation is no longer optional — it's a necessity. At CHN Technologies, we help businesses 
                  automate, digitize, and intelligently scale their operations through tailored tech strategies. From low-code 
                  tools to advanced AI agents, we simplify complex workflows and future-proof your business processes.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="tel:+917010203031"
                  className="group bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Schedule a free consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-purple-400 mb-1">80%</div>
                  <div className="text-slate-400 text-sm">Efficiency</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-pink-400 mb-1">24/7</div>
                  <div className="text-slate-400 text-sm">AI Agents</div>
                </div>
              </div>
            </div>
            
            {/* Right Visual Element - Automation Control Center */}
            <div className="relative">
              {/* Main Automation Dashboard */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-lg">Automation Control Center</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Active Automation</span>
                  </div>
                </div>
                
                {/* Automation Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: Workflow, color: 'from-blue-400 to-cyan-500', label: 'Workflows', status: 'Running', count: '45' },
                    { icon: Bot, color: 'from-purple-400 to-pink-500', label: 'AI Agents', status: 'Active', count: '12' },
                    { icon: Cloud, color: 'from-green-400 to-teal-500', label: 'Cloud Apps', status: 'Synced', count: '8' },
                    { icon: GitBranch, color: 'from-orange-400 to-red-500', label: 'Integrations', status: 'Connected', count: '24' },
                    { icon: Brain, color: 'from-indigo-400 to-purple-500', label: 'AI Decisions', status: 'Learning', count: '156' },
                    { icon: Settings, color: 'from-cyan-400 to-blue-500', label: 'Processes', status: 'Optimized', count: '89' }
                  ].map((automation, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 text-center"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-r ${automation.color} rounded-xl mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <automation.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-white text-xs font-medium mb-1">{automation.label}</div>
                      <div className="text-green-400 text-xs mb-1">{automation.status}</div>
                      <div className="text-slate-300 text-xs">{automation.count}</div>
                      
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
                
                {/* Automation Activity */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                  <h4 className="text-white text-sm font-medium mb-3">Recent Automation Activity</h4>
                  <div className="space-y-2">
                    {[
                      { action: 'Workflow automated', process: 'HR Onboarding', time: '5m ago', status: 'success' },
                      { action: 'AI agent deployed', process: 'Lead Qualification', time: '12m ago', status: 'success' },
                      { action: 'Process optimized', process: 'Invoice Processing', time: '18m ago', status: 'success' },
                      { action: 'Integration completed', process: 'CRM-ERP Sync', time: '25m ago', status: 'success' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            activity.status === 'success' ? 'bg-green-400' : 
                            activity.status === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
                          }`}></div>
                          <span className="text-slate-300">{activity.action}</span>
                          <span className="text-slate-400">{activity.process}</span>
                        </div>
                        <span className="text-slate-500">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Automation Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-2xl animate-spin-slow opacity-80 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-xl animate-bounce opacity-60 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>

              {/* Automation Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-30">
                  <defs>
                    <linearGradient id="automationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  <line x1="25%" y1="25%" x2="75%" y2="75%" stroke="url(#automationGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                  <line x1="75%" y1="25%" x2="25%" y2="75%" stroke="url(#automationGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <circle cx="50%" cy="50%" r="30%" fill="none" stroke="url(#automationGradient)" strokeWidth="1" strokeDasharray="8,4" className="animate-spin-slow" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
              <Lightbulb className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 text-sm font-medium">Our Core Solutions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Solutions
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
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

                {/* Automation Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Add Value Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-6 py-2 mb-8">
              <Rocket className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-green-300 text-sm font-medium">How We Add Value</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 animate-gradient-x">
                Add Value
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueAdditions.map((value, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-teal-400 transition-all duration-300">
                  {value.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Across Functions Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Building className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">Solutions Across Functions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions Across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Functions
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationUseCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                  {useCase.department}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {useCase.useCase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-6 py-2 mb-8">
              <Layers className="w-4 h-4 text-orange-400 animate-pulse" />
              <span className="text-orange-300 text-sm font-medium">Our Tools & Technologies</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Tools &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 animate-gradient-x">
                Technologies
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolsAndTechnologies.map((category, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-300">
                  {category.category}
                </h3>
                
                <div className="space-y-2">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 text-slate-300 text-sm hover:bg-white/10 hover:text-white transition-all duration-200"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4 text-indigo-600" />
              <span className="text-indigo-700 text-sm font-medium">Our Approach to Digital Transformation</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Approach to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Digital Transformation
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {transformationApproach.map((step, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-indigo-200 transition-all duration-500 transform hover:-translate-y-2 text-center relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
                
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 mt-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600">
          {/* Automation Pattern Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-2xl blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Automation Flow */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 400">
              <defs>
                <linearGradient id="automationFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <line x1="0" y1="200" x2="1000" y2="200" stroke="url(#automationFlowGradient)" strokeWidth="2" />
              <circle cx="200" cy="200" r="5" fill="white" />
              <circle cx="400" cy="200" r="4" fill="white" />
              <circle cx="600" cy="200" r="6" fill="white" />
              <circle cx="800" cy="200" r="4" fill="white" />
            </svg>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate What{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Slows You Down?
            </span>
          </h3>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Whether you're starting small or planning an enterprise-wide transformation, CHN Technologies brings 
            the expertise, tools, and strategy to make automation a reality. Schedule a free consultation and let's get to work.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:+917010203031"
              className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Schedule a free consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Star className="w-5 h-5" />
              <span>Explore Automation Solutions</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutomationDigitalTransformation;