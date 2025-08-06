import React, { useRef, useEffect } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Target, 
  TrendingUp, 
  Users,
  Phone,
  ArrowRight,
  CheckCircle,
  Award,
  Globe,
  Clock,
  Zap,
  Star,
  FileText,
  Layers,
  Rocket,
  Brain,
  Lightbulb,
  Briefcase,
  Building,
  Presentation,
  MessageSquare,
  LineChart,
  BarChart3,
  PieChart,
  Headphones,
  Laptop,
  Video,
  UserPlus,
  Handshake,
  Heart,
  Smile,
  Gauge,
  Medal,
  Sparkles,
  Puzzle,
  ChevronRight,
  Play,
  ArrowUpRight
} from 'lucide-react';
import Footer from '../components/Footer';

const TrainingDevelopment: React.FC = ({ onOpenModal }) => {
  const servicesRef = useRef<HTMLDivElement>(null);
  
  // Horizontal scroll with mouse wheel
  useEffect(() => {
    const element = servicesRef.current;
    if (!element) return;
    
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      element.scrollLeft += e.deltaY;
    };
    
    element.addEventListener('wheel', onWheel);
    return () => element.removeEventListener('wheel', onWheel);
  }, []);

  const services = [
    {
      icon: Presentation,
      title: 'Corporate Training Programs',
      description: 'We design customized training modules based on your team\'s functional needs — from leadership and communication to sales, customer service, and project management.',
      features: [
        'Leadership & management training',
        'Communication & presentation skills',
        'Sales & customer service excellence',
        'Project management methodologies',
        'Team building & collaboration'
      ],
      color: 'from-amber-500 to-orange-600',
      bgColor: 'from-amber-500/10 to-orange-600/10',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
    },
    {
      icon: Laptop,
      title: 'Technical & Soft Skills Upskilling',
      description: 'Whether it\'s mastering emerging technologies or improving interpersonal skills, our expert-led sessions help employees perform confidently in dynamic work environments.',
      features: [
        'Technical certification programs',
        'Digital literacy & software training',
        'Emotional intelligence development',
        'Problem-solving & critical thinking',
        'Conflict resolution & negotiation'
      ],
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-indigo-600/10',
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
    },
    {
      icon: Target,
      title: 'Customized Learning Pathways',
      description: 'Every organization has unique goals. We tailor learning journeys that align with your business vision — with programs delivered on-site, virtually, or in blended formats.',
      features: [
        'Personalized development plans',
        'Role-based learning tracks',
        'Blended learning approaches',
        'On-site & virtual delivery options',
        'Self-paced & instructor-led formats'
      ],
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-500/10 to-teal-600/10',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
    },
    {
      icon: LineChart,
      title: 'Performance & Productivity Enhancement',
      description: 'Through targeted development programs, we help teams enhance productivity, reduce errors, and operate at optimal efficiency.',
      features: [
        'Performance gap analysis',
        'Productivity improvement workshops',
        'Process efficiency training',
        'Quality management programs',
        'Time management & prioritization'
      ],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
    },
    {
      icon: UserPlus,
      title: 'Managerial & Leadership Development',
      description: 'We groom your high-potential employees into tomorrow\'s leaders through structured coaching, mentorship, and simulation-based learning.',
      features: [
        'Leadership competency development',
        'Executive coaching programs',
        'Succession planning support',
        'Change management training',
        'Strategic thinking & decision making'
      ],
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-500/10 to-blue-600/10',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
    }
  ];

  const valueAdditions = [
    {
      icon: Puzzle,
      title: 'Tailored Content',
      description: 'Programs aligned with industry, department, and employee roles'
    },
    {
      icon: Award,
      title: 'Certified Trainers',
      description: 'Sessions conducted by subject-matter experts and corporate coaches'
    },
    {
      icon: Video,
      title: 'Interactive Learning',
      description: 'Engaging formats including workshops, case studies, and role plays'
    },
    {
      icon: BarChart3,
      title: 'Measurable Outcomes',
      description: 'Training effectiveness tracked with post-program assessments and KPIs'
    },
    {
      icon: Layers,
      title: 'Scalable Delivery',
      description: 'Onboarding programs to leadership coaching — all under one roof'
    }
  ];

  const beneficiaries = [
    { 
      name: 'Organizations scaling up', 
      icon: Building, 
      description: 'Onboarding new teams efficiently',
      color: 'from-amber-500 to-orange-500' 
    },
    { 
      name: 'Enterprises', 
      icon: Heart, 
      description: 'Boosting employee engagement and retention',
      color: 'from-blue-500 to-indigo-500' 
    },
    { 
      name: 'HR leaders', 
      icon: Users, 
      description: 'Building a culture of continuous improvement',
      color: 'from-green-500 to-teal-500' 
    },
    { 
      name: 'Managers', 
      icon: Briefcase, 
      description: 'Upskilling departments for evolving demands',
      color: 'from-purple-500 to-pink-500' 
    }
  ];

  const trainingFormats = [
    { name: 'Instructor-Led Workshops', icon: Presentation, color: 'from-amber-500 to-orange-500' },
    { name: 'Virtual Live Training', icon: Video, color: 'from-blue-500 to-indigo-500' },
    { name: 'Self-Paced E-Learning', icon: Laptop, color: 'from-green-500 to-teal-500' },
    { name: 'Blended Learning', icon: Layers, color: 'from-purple-500 to-pink-500' },
    { name: 'Coaching & Mentoring', icon: Handshake, color: 'from-cyan-500 to-blue-500' }
  ];

  const stats = [
    { value: '25,000+', label: 'Professionals Trained', icon: Users, color: 'from-amber-400 to-orange-500' },
    { value: '98%', label: 'Satisfaction Rate', icon: Smile, color: 'from-blue-400 to-indigo-500' },
    { value: '35%', label: 'Avg. Performance Boost', icon: Gauge, color: 'from-green-400 to-teal-500' },
    { value: '200+', label: 'Training Programs', icon: BookOpen, color: 'from-purple-400 to-pink-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Parallax Effect with Animated Elements */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with Parallax Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-brand-800 to-brand-900">
          {/* Animated Learning Elements */}
          <div className="absolute inset-0">
            {/* Books */}
            <div className="absolute top-1/4 left-1/4 w-16 h-20 bg-amber-500/20 rounded-md transform rotate-12 animate-float"></div>
            <div className="absolute top-1/3 right-1/3 w-12 h-16 bg-orange-500/20 rounded-md transform -rotate-6 animate-float" style={{ animationDelay: '1s' }}></div>
            
            {/* Graduation Caps */}
            <div className="absolute bottom-1/4 left-1/3 w-12 h-12 border-2 border-amber-500/20 rounded-md transform rotate-45 animate-float" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Learning Paths */}
            <div className="absolute inset-0">
              <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,50 Q25,30 50,50 T100,50" stroke="rgba(251, 191, 36, 0.3)" fill="none" strokeWidth="0.5" />
                <path d="M0,60 Q35,40 70,60 T100,60" stroke="rgba(249, 115, 22, 0.3)" fill="none" strokeWidth="0.5" />
                <path d="M0,40 Q45,60 90,40 T100,40" stroke="rgba(245, 158, 11, 0.3)" fill="none" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
          
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-orange-900/80 to-amber-900/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
                <GraduationCap className="w-4 h-4 text-amber-300 animate-pulse" />
                <span className="text-amber-200 text-sm font-medium">Training & Development Consulting</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                <span className="block">Empower Your Team</span>
               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 pb-2 via-brand-400 to-brand-500 animate-gradient-x">
               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 animate-gradient-x">
                  with Strategic Learning
                </span>
              </h1>
              
              <p className="text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl lg:mx-0 mx-auto">
                At CHN, we help businesses build learning programs that actually work. From onboarding to leadership 
                training, our consultants design development plans aligned with performance goals and future-readiness.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button onClick={onOpenModal} className="group bg-gradient-to-r from-brand-500 to-brand-700 hover:from-brand-400 hover:to-brand-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-brand-500/25 flex items-center justify-center gap-2">
                  <span>Turn Training into Transformation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a
                  href="tel:+917010203031"
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Discuss Your Training Goals</span>
                </a>
              </div>
            </div>
            
            {/* Right Animated 3D Card Stack */}
            <div className="lg:col-span-5 perspective-1000">
              <div className="relative w-full h-96 transform-style-3d">
                {/* Main Card */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl transform rotate-y-12 hover:rotate-y-0 transition-all duration-500">
                  <div className="h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Strategic Learning Solutions</h3>
                    </div>
                    
                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-white mb-4">25,000+</div>
                        <div className="text-amber-300 text-xl">Professionals Trained</div>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex justify-between items-center">
                        <div className="flex -space-x-2">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 border-2 border-white/20"></div>
                          ))}
                        </div>
                        <div className="text-white text-sm">+200 Programs</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background Card 1 */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl shadow-xl transform -translate-z-10 rotate-y-12 rotate-x-12 scale-95"></div>
                
                {/* Background Card 2 */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl shadow-xl transform -translate-z-20 rotate-y-12 rotate-x-12 scale-90"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Horizontal Scroll Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700 text-sm font-medium">Our Focus Areas</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Focus{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Areas
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive training and development solutions designed to elevate your workforce
            </p>
          </div>

          {/* Horizontal Scrolling Services */}
          <div className="relative">
            {/* Gradient Overlays for Scroll Indication */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <div 
              ref={servicesRef}
              className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
            >
              <div className="flex gap-6 px-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group bg-white border border-gray-200 rounded-3xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl flex-shrink-0 w-80 snap-center"
                  >
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60`}></div>
                      
                      {/* Floating Icon */}
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                        <service.icon className={`w-6 h-6 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className={`text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                      
                      <button onClick={onOpenModal} className={`bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2`}>
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <div className="w-12 h-1 bg-gray-200 rounded-full"></div>
              <span>Scroll to explore all services</span>
              <div className="w-12 h-1 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Addition Section - Interactive Cards */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.05),transparent_25%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.05),transparent_25%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">How We Add Value</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Add Value
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach to training and development is designed to deliver measurable results for your organization
            </p>
          </div>

          {/* Interactive Value Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {valueAdditions.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 hover:z-10"
              >
                {/* Card Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
                
                {/* Expanding Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Formats & Beneficiaries - Split Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Section - Training Formats */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-2 mb-8">
                <Layers className="w-4 h-4 text-purple-400 animate-pulse" />
                <span className="text-purple-300 text-sm font-medium">Training Formats</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-8">
                Flexible{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Training Formats
                </span>
              </h2>
              
              <div className="space-y-6">
                {trainingFormats.map((format, index) => (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${format.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <format.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                          {format.name}
                        </h3>
                      </div>
                      
                      <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Section - Beneficiaries */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/10 to-rose-500/10 backdrop-blur-sm border border-pink-500/20 rounded-full px-6 py-2 mb-8">
                <Users className="w-4 h-4 text-pink-400 animate-pulse" />
                <span className="text-pink-300 text-sm font-medium">Who Benefits</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-8">
                Who{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                  Benefits
                </span>
              </h2>
              
              <div className="grid grid-cols-2 gap-6">
                {beneficiaries.map((beneficiary, index) => (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${beneficiary.color} rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <beneficiary.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-rose-400 transition-all duration-300">
                      {beneficiary.name}
                    </h3>
                    
                    <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      {beneficiary.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Animated Counter Cards */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-orange-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTIwIDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0xNi0xNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNCIvPjwvZz48L2c+PC9zdmc+')]"></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <TrendingUp className="w-4 h-4 text-amber-300 animate-pulse" />
              <span className="text-amber-200 text-sm font-medium">Our Impact</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Driving{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 animate-gradient-x">
                Learning Excellence
              </span>
            </h2>
          </div>

          {/* Animated Counter Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Glowing Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                
                {/* Card Content */}
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center transform transition-all duration-500 group-hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  
                  <div className="text-amber-200 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Immersive Design */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-orange-900/90 to-amber-900/90"></div>
          </div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-amber-500/30 rounded-full animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 relative overflow-hidden">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-orange-500/5 to-yellow-500/5 rounded-3xl"></div>
            
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Build a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-300">
                  Future-Ready Workforce
                </span>
              </h2>
              
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Turn training into transformation with CHN's strategic learning solutions.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="tel:+917010203031"
                  className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Contact us today to discuss your training goals</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                {/* <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <FileText className="w-5 h-5" />
                  <span>Download Training Catalog</span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainingDevelopment;