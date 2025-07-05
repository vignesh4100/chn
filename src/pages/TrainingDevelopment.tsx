import React from 'react';
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
  Puzzle
} from 'lucide-react';
import Footer from '../components/Footer';

const TrainingDevelopment: React.FC = () => {
  const services = [
    {
      icon: Presentation,
      title: 'Corporate Training Programs',
      description: 'We design customized training modules based on your team's functional needs — from leadership and communication to sales, customer service, and project management.',
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
      description: 'Whether it's mastering emerging technologies or improving interpersonal skills, our expert-led sessions help employees perform confidently in dynamic work environments.',
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
      description: 'We groom your high-potential employees into tomorrow's leaders through structured coaching, mentorship, and simulation-based learning.',
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
      {/* Hero Section - Modern Split Layout with Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900 to-orange-900">
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTIwIDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0xNi0xNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNCIvPjwvZz48L2c+PC9zdmc+')]"></div>
          
          {/* Floating Icons */}
          <div className="absolute top-20 left-20 animate-float opacity-20">
            <GraduationCap className="w-12 h-12 text-amber-300" />
          </div>
          <div className="absolute top-40 right-32 animate-float opacity-20" style={{ animationDelay: '1s' }}>
            <BookOpen className="w-10 h-10 text-orange-300" />
          </div>
          <div className="absolute bottom-32 left-32 animate-float opacity-20" style={{ animationDelay: '2s' }}>
            <Target className="w-14 h-14 text-yellow-300" />
          </div>
          
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-orange-900/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
                <GraduationCap className="w-4 h-4 text-amber-300 animate-pulse" />
                <span className="text-amber-200 text-sm font-medium">Training & Development Consulting</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                <span className="block">Empower Your Team</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 animate-gradient-x">
                  with Strategic Learning
                </span>
              </h1>
              
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                At CHN, we help businesses build learning programs that actually work. From onboarding to leadership 
                training, our consultants design development plans aligned with performance goals and future-readiness.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25 flex items-center justify-center gap-2">
                  <span>Turn Training into Transformation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a
                  href="tel:+917010203031"
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Discuss Your Training Goals</span>
                </a>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Corporate training session with engaged participants"
                  className="w-full h-96 object-cover"
                />
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-900 font-semibold text-sm">Expert-Led Training</span>
                </div>
                
                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">25,000+</div>
                      <div className="text-white/80 text-xs">Professionals</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">98%</div>
                      <div className="text-white/80 text-xs">Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">35%</div>
                      <div className="text-white/80 text-xs">Performance</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Secondary Images */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-2xl overflow-hidden shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="Technical skills training session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20"></div>
              </div>

              <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-2xl overflow-hidden shadow-xl transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="Interactive workshop and team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
            
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group relative bg-white border border-gray-200 rounded-3xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-80 lg:h-auto overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-30 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    
                    {/* Floating Icon */}
                    <div className="absolute top-6 left-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
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
                        Key Components:
                      </h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r ${service.color} mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2`}>
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

      {/* How We Add Value Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm border border-amber-500/20 rounded-full px-6 py-2 mb-8">
              <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="text-amber-300 text-sm font-medium">How We Add Value</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 animate-gradient-x">
                Add Value
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueAdditions.map((value, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-400 transition-all duration-300">
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

      {/* Training Formats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <Layers className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">Training Formats</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Flexible{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Training Formats
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {trainingFormats.map((format, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${format.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <format.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                  {format.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 text-sm font-medium">Who Benefits</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Benefits
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficiaries.map((beneficiary, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-purple-200 transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${beneficiary.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <beneficiary.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                  {beneficiary.name}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {beneficiary.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-4 text-center"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTIwIDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0xNi0xNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNCIvPjwvZz48L2c+PC9zdmc+')]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
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
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+917010203031"
                  className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Contact us today to discuss your training goals</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <FileText className="w-5 h-5" />
                  <span>Download Training Catalog</span>
                </button>
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