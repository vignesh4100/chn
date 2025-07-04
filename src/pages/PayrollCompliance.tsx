import React from 'react';
import { 
  Calculator, 
  Clock, 
  FileCheck, 
  BarChart3, 
  Shield, 
  Users,
  Phone,
  ArrowRight,
  CheckCircle,
  Award,
  Globe,
  TrendingUp,
  Target,
  Zap,
  Star,
  FileText,
  Layers,
  Rocket,
  Database,
  Code,
  Cloud,
  Headphones,
  Smartphone,
  Monitor,
  Heart,
  Lightbulb,
  Calendar,
  DollarSign,
  ClipboardCheck,
  Building,
  UserCheck,
  Fingerprint,
  AlertTriangle,
  CheckSquare,
  PieChart,
  LineChart,
  Briefcase
} from 'lucide-react';
import Footer from '../components/Footer';

const PayrollCompliance: React.FC = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Payroll Processing',
      description: 'We manage your entire payroll cycle — from salary calculation to payslip generation and disbursement — with precision and confidentiality.',
      features: [
        'Salary structure design & CTC mapping',
        'Monthly payroll processing',
        'Payslip generation & employee access',
        'Full & final settlements',
        'Payroll inputs integration (attendance, overtime, leave)'
      ],
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-500/10 to-teal-600/10',
      image: 'https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
    },
    {
      icon: Clock,
      title: 'Attendance & Shift Management',
      description: 'Optimize productivity with smart shift scheduling and automated attendance systems. Whether your teams are in-office, on-field, or hybrid — we offer tools that adapt to your work environment.',
      features: [
        'Biometric & RFID-based attendance tracking',
        'GPS-based attendance for field staff',
        'Multiple shift and roster management',
        'Leave management integration',
        'Real-time attendance dashboards & reports'
      ],
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-indigo-600/10',
      image: 'https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
    },
    {
      icon: FileCheck,
      title: 'Statutory Compliance Management',
      description: 'Stay audit-ready and legally secure with our expert-led compliance services. We manage regulatory filings, employee benefits, and labor law adherence on your behalf.',
      features: [
        'EPF, ESI, PT, TDS calculations & filings',
        'Monthly challan generation and submission',
        'Digital registers & statutory documentation',
        'Labor law audits & inspections support',
        'Form 16, Form 24Q, and annual returns'
      ],
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-500/10 to-red-600/10',
      image: 'https://images.pexels.com/photos/6863250/pexels-photo-6863250.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
    },
    {
      icon: BarChart3,
      title: 'HR & Compliance Dashboards',
      description: 'Get full visibility into your payroll and compliance health. Our custom dashboards deliver real-time insights on salary trends, workforce costs, statutory dues, and more.',
      features: [
        'Real-time compliance status tracking',
        'Payroll analytics and cost optimization',
        'Statutory dues monitoring',
        'Workforce cost analysis',
        'Custom reporting and visualization'
      ],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10',
      image: 'https://images.pexels.com/photos/7654118/pexels-photo-7654118.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop'
    }
  ];

  const techTools = [
    {
      icon: Cloud,
      title: 'Cloud-based payroll software',
      description: 'Secure, accessible, and scalable payroll processing systems'
    },
    {
      icon: Fingerprint,
      title: 'Biometric & mobile attendance systems',
      description: 'Advanced time tracking for all work environments'
    },
    {
      icon: Code,
      title: 'API integrations with HRMS & accounting software',
      description: 'Seamless data flow between critical business systems'
    },
    {
      icon: Shield,
      title: 'Compliance tracking tools & reporting systems',
      description: 'Stay ahead of regulatory requirements and deadlines'
    }
  ];

  const outcomes = [
    {
      icon: CheckSquare,
      title: '100% statutory compliance',
      description: 'With up-to-date laws and regulations'
    },
    {
      icon: Calculator,
      title: 'Accurate, error-free payroll processing',
      description: 'Eliminating manual errors and discrepancies'
    },
    {
      icon: Clock,
      title: 'Customizable shift & attendance systems',
      description: 'Tailored to your unique workforce needs'
    },
    {
      icon: Calendar,
      title: 'On-time filings and reduced audit risks',
      description: 'Never miss a deadline or compliance requirement'
    },
    {
      icon: Cloud,
      title: 'Secure, cloud-based data management',
      description: 'Protected employee and financial information'
    },
    {
      icon: Headphones,
      title: 'Dedicated support & expert consulting',
      description: 'Guidance from compliance specialists'
    }
  ];

  const stats = [
    { value: '100%', label: 'Compliance Accuracy', icon: CheckSquare, color: 'from-green-400 to-teal-500' },
    { value: '99.9%', label: 'Payroll Accuracy', icon: Calculator, color: 'from-blue-400 to-indigo-500' },
    { value: '30%', label: 'Admin Time Saved', icon: Clock, color: 'from-purple-400 to-pink-500' },
    { value: '0', label: 'Compliance Penalties', icon: Shield, color: 'from-orange-400 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Modern Split Layout with Gradient Background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-teal-900">
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTIwIDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0xNi0xNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNCIvPjwvZz48L2c+PC9zdmc+')]"></div>
          
          {/* Floating Icons */}
          <div className="absolute top-20 left-20 animate-float opacity-20">
            <Calculator className="w-12 h-12 text-green-300" />
          </div>
          <div className="absolute top-40 right-32 animate-float opacity-20" style={{ animationDelay: '1s' }}>
            <FileCheck className="w-10 h-10 text-teal-300" />
          </div>
          <div className="absolute bottom-32 left-32 animate-float opacity-20" style={{ animationDelay: '2s' }}>
            <Clock className="w-14 h-14 text-emerald-300" />
          </div>
          
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-teal-900/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
                <Calculator className="w-4 h-4 text-green-300 animate-pulse" />
                <span className="text-green-200 text-sm font-medium">Payroll & Compliance Consulting</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                <span className="block">Error-Free Payroll.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-teal-300 to-emerald-300 animate-gradient-x">
                  Total Compliance.
                </span>
                <span className="block">Peace of Mind.</span>
              </h1>
              
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Managing payroll and staying compliant with labor laws can be overwhelming — especially when attendance, 
                shifts, overtime, and leave data come from multiple sources. At CHN Technologies, we simplify it all with 
                structured payroll systems, integrated workforce data, and expert advisory support to help you process 
                salaries with confidence and meet every statutory requirement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-400 hover:to-teal-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 flex items-center justify-center gap-2">
                  <span>Schedule a Compliance Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <a
                  href="tel:+917010203031"
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Talk to a Compliance Expert</span>
                </a>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img
                  src="https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Payroll and compliance management dashboard"
                  className="w-full h-96 object-cover"
                />
                
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-900 font-semibold text-sm">100% Compliance Guaranteed</span>
                </div>
                
                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-white/80 text-xs">Compliance</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">99.9%</div>
                      <div className="text-white/80 text-xs">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">30%</div>
                      <div className="text-white/80 text-xs">Time Saved</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Secondary Images */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-2xl overflow-hidden shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/6863250/pexels-photo-6863250.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="Compliance documentation and regulatory filings"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20"></div>
              </div>

              <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-2xl overflow-hidden shadow-xl transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/7654118/pexels-photo-7654118.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="HR dashboard with payroll analytics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-500/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Include Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-full px-4 py-2 mb-6">
              <Briefcase className="w-4 h-4 text-green-600" />
              <span className="text-green-700 text-sm font-medium">Our Services Include</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                Include
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
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
                        Includes:
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

      {/* Technology-Driven Efficiency Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-6 py-2 mb-8">
              <Zap className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-green-300 text-sm font-medium">Technology-Driven Efficiency</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technology-Driven{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-emerald-400 animate-gradient-x">
                Efficiency
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              We leverage modern tools to ensure your payroll and compliance processes are fast, secure, and error-free.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techTools.map((tool, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-teal-400 transition-all duration-300">
                  {tool.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-teal-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTIwIDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0xNi0xNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNCIvPjwvZz48L2c+PC9zdmc+')]"></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <TrendingUp className="w-4 h-4 text-green-300 animate-pulse" />
              <span className="text-green-200 text-sm font-medium">Outcomes You Can Expect</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Outcomes You Can{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-teal-300 to-emerald-300 animate-gradient-x">
                Expect
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-4 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <outcome.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                  {outcome.title}
                </h3>
                
                <p className="text-green-200 font-medium">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">Our Performance</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Delivering{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Measurable Results
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00TTIwIDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0xNi0xNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNCIvPjwvZz48L2c+PC9zdmc+')]"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 relative overflow-hidden">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-teal-500/5 to-emerald-500/5 rounded-3xl"></div>
            
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Want a Payroll System That Works{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-300">
                  With Your Workforce, Not Against It?
                </span>
              </h2>
              
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Let's build a payroll and compliance system that adapts to your unique workforce needs and keeps you ahead of regulatory requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+917010203031"
                  className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Schedule a Compliance Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  <FileText className="w-5 h-5" />
                  <span>Download Compliance Guide</span>
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

export default PayrollCompliance;