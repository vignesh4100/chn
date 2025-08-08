import React from 'react';
import { 
  Users, 
  Calculator, 
  GraduationCap, 
  Target,
  TrendingUp,
  Shield,
  Award,
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Footer from '../components/Footer';

const Consulting: React.FC = () => {
  const consultingServices = [
    {
      icon: Users,
      title: 'Workforce Management Consulting',
      description: 'Strategic workforce planning and optimization solutions',
      features: ['Talent Acquisition', 'Performance Management', 'Employee Engagement', 'Workforce Analytics'],
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-500/10 to-blue-600/10',
      link: '/consulting/workforce'
    },
    {
      icon: Calculator,
      title: 'Payroll & Compliance Consulting',
      description: 'Comprehensive payroll processing and regulatory compliance',
      features: ['Payroll Processing', 'Tax Compliance', 'Benefits Administration', 'Regulatory Updates'],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10',
      link: '/consulting/payroll'
    },
    {
      icon: GraduationCap,
      title: 'Training & Development Consulting',
      description: 'Professional development and skill enhancement programs',
      features: ['Skills Assessment', 'Custom Training', 'Leadership Development', 'Certification Programs'],
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-500/10 to-teal-600/10',
      link: '/consulting/training'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-brand-800 to-brand-900">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          
          {/* Floating Icons */}
          <div className="absolute top-20 left-20 animate-float opacity-20">
            <Target className="w-12 h-12 text-cyan-400" />
          </div>
          <div className="absolute top-40 right-32 animate-float opacity-20" style={{ animationDelay: '1s' }}>
            <TrendingUp className="w-10 h-10 text-purple-400" />
          </div>
          <div className="absolute bottom-32 left-32 animate-float opacity-20" style={{ animationDelay: '2s' }}>
            <Award className="w-14 h-14 text-pink-400" />
          </div>
          
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
              <Shield className="w-4 h-4 text-cyan-300 animate-pulse" />
              <span className="text-cyan-200 text-sm font-medium">Consulting Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              <span className="block">Strategic</span>
             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 animate-gradient-x">
                Business Consulting
              </span>
              <span className="block">for Growth</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Expert consulting services to optimize your workforce, streamline operations, 
              and drive sustainable business growth through strategic planning and execution.
            </p>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Consulting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-700">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting solutions to transform your business operations and maximize potential
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-cyan-200 transition-all duration-500 transform hover:-translate-y-4 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-purple-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={service.link}
                    className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg transform group-hover:scale-105`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consulting;