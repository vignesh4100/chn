import React, { useState } from 'react';
import {
  Briefcase,
  Users,
  GraduationCap,
  Zap,
  Heart,
  Phone,
  ArrowRight,
  CheckCircle,
  Upload,
  Award,
  Globe,
  Clock,
  TrendingUp,
  Target,
  Shield,
  Star,
  FileText,
  Rocket,
  Building,
  Cpu,
  Database,
  Code,
  Cloud,
  Headphones,
  Smartphone,
  Monitor,
  Lightbulb,
  Send,
  Sparkles,
  Handshake,
  Brain,
  Smile,
  Layers
} from 'lucide-react';
import Footer from '../components/Footer';

const Careers: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    let resumeBase64 = '';
    let resumeType = '';
    let resumeName = '';

    if (formData.resume) {
      resumeType = formData.resume.type;
      resumeName = formData.resume.name;

      const reader = new FileReader();
      const fileAsBase64 = await new Promise<string>((resolve, reject) => {
        reader.onload = () => resolve((reader.result as string).split(',')[1]);
        reader.onerror = () => reject('Error reading file');
        reader.readAsDataURL(formData.resume);
      });

      resumeBase64 = fileAsBase64;
    }

    const response = await fetch('https://chn-backend.onrender.com/api/career', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        message: formData.message,
        resumeBase64,
        resumeName,
        resumeType,
      }),
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.message);

    setSubmitted(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      message: '',
      resume: null,
    });
  } catch (err) {
    alert('Something went wrong. Please try again.');
    console.error(err);
  } finally {
    setIsSubmitting(false);
  }
};




  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      resume: file
    });
  };

  const positions = [
    'IT Infrastructure Specialist',
    'Network Administrator',
    'Cybersecurity Analyst',
    'Server Administrator',
    'Web Designer/Developer',
    'Software Developer',
    'Mobile App Developer',
    'Data Analyst/Visualization Specialist',
    'Automation Specialist',
    'HR Consultant',
    'Payroll Specialist',
    'Compliance Officer',
    'Training & Development Specialist',
    'Sales Executive',
    'Marketing Specialist',
    'Administrative Assistant',
    'Other'
  ];

  const benefits = [
    {
      icon: Building,
      title: 'Diverse Projects',
      description: 'Work across top industries — from IT & Manufacturing to BFSI & Energy'
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Access to training, certifications & career mentorship'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'A people-first environment that values ideas & initiative'
    },
    {
      icon: Rocket,
      title: 'Innovation-Driven',
      description: 'Be part of teams that build future-ready solutions'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible policies & wellness support'
    }
  ];

  const teamValues = [
    { icon: Handshake, title: 'Collaboration', color: 'from-blue-500 to-cyan-500' },
    { icon: Brain, title: 'Innovation', color: 'from-purple-500 to-pink-500' },
    { icon: Shield, title: 'Integrity', color: 'from-green-500 to-teal-500' },
    { icon: Target, title: 'Excellence', color: 'from-amber-500 to-orange-500' },
    { icon: Smile, title: 'Positivity', color: 'from-indigo-500 to-blue-500' },
    { icon: Layers, title: 'Growth', color: 'from-rose-500 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Animated Gradient Background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          {/* Animated Mesh Grid */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
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

          {/* Floating Career Icons */}
          <div className="absolute top-20 left-20 animate-float opacity-20">
            <Briefcase className="w-12 h-12 text-indigo-300" />
          </div>
          <div className="absolute top-40 right-32 animate-float opacity-20" style={{ animationDelay: '1s' }}>
            <Code className="w-10 h-10 text-purple-300" />
          </div>
          <div className="absolute bottom-32 left-32 animate-float opacity-20" style={{ animationDelay: '2s' }}>
            <Cpu className="w-14 h-14 text-pink-300" />
          </div>

          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
                <Briefcase className="w-4 h-4 text-indigo-300 animate-pulse" />
                <span className="text-indigo-200 text-sm font-medium">Join Our Team</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                <span className="block">Join a Team That's</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 animate-gradient-x">
                  Building the Future
                </span>
                <span className="block">of Tech & Talent</span>
              </h1>

              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                At CHN Technologies, we believe in empowering people as much as we empower businesses.
                We're looking for dynamic, driven, and curious minds to join our fast-growing team across
                IT Services, Software Development, HR Consulting, and Compliance Management.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => {
                    const applicationForm = document.getElementById('application-form');
                    if (applicationForm) {
                      applicationForm.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25 flex items-center justify-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="mailto:hrd@chnindia.com"
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact HR Team</span>
                </a>
              </div>
            </div>

            {/* Right Animated Element */}
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* Career Path Visualization */}
                <div className="relative h-80">
                  {/* Career Path Line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform -translate-x-1/2"></div>

                  {/* Career Milestones */}
                  <div className="absolute left-1/2 top-0 w-12 h-12 bg-indigo-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>

                  <div className="absolute left-1/2 top-1/3 w-12 h-12 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>

                  <div className="absolute left-1/2 top-2/3 w-12 h-12 bg-pink-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>

                  <div className="absolute left-1/2 bottom-0 w-12 h-12 bg-rose-500 rounded-full transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>

                  {/* Career Stage Labels */}
                  <div className="absolute left-0 top-0 w-1/3 text-right pr-8">
                    <div className="text-white font-bold">Join the Team</div>
                    <div className="text-indigo-300 text-sm">Start your journey</div>
                  </div>

                  <div className="absolute right-0 top-1/3 w-1/3 text-left pl-8">
                    <div className="text-white font-bold">Grow Your Skills</div>
                    <div className="text-purple-300 text-sm">Continuous learning</div>
                  </div>

                  <div className="absolute left-0 top-2/3 w-1/3 text-right pr-8">
                    <div className="text-white font-bold">Lead Projects</div>
                    <div className="text-pink-300 text-sm">Take ownership</div>
                  </div>

                  <div className="absolute right-0 bottom-0 w-1/3 text-left pl-8">
                    <div className="text-white font-bold">Advance Your Career</div>
                    <div className="text-rose-300 text-sm">Reach new heights</div>
                  </div>
                </div>

                {/* Animated Particles */}
                <div className="absolute inset-0">
                  {[...Array(10)].map((_, i) => (
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
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl transform rotate-12 z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl transform -rotate-12 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-indigo-600" />
              <span className="text-indigo-700 text-sm font-medium">Why Work With Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Work With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                CHN Technologies
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that values innovation, growth, and work-life balance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-indigo-200 transition-all duration-500 transform hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
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

      {/* Our Team Values */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.05),transparent_25%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_25%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-purple-700 text-sm font-medium">Our Team Values</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Team{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Values
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and culture
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamValues.map((value, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                  {value.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Animated Mesh Grid */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="application-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#application-grid)" />
            </svg>
          </div>

          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sticky top-32">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                  <Send className="w-4 h-4 text-indigo-300" />
                  <span className="text-indigo-200 text-sm font-medium">Submit Your Application</span>
                </div>

                <h2 className="text-3xl font-bold text-white mb-6">
                  Ready to Join Our Team?
                </h2>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  Fill out the form and our HR team will reach out if there's a match. We're always looking for talented
                  individuals who are passionate about technology and innovation.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Competitive Compensation</h3>
                      <p className="text-slate-300 text-sm">Salary packages that recognize your skills and experience</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Growth Opportunities</h3>
                      <p className="text-slate-300 text-sm">Clear career paths and advancement opportunities</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Inclusive Environment</h3>
                      <p className="text-slate-300 text-sm">A diverse workplace where everyone belongs</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="text-white font-semibold mb-4">Have Questions?</h3>
                  <p className="text-slate-300 mb-4">
                    Feel free to reach out to our HR team at:
                  </p>
                  <a
                    href="mailto:hrd@chnindia.com"
                    className="flex items-center gap-2 text-indigo-300 hover:text-indigo-200 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>hrd@chnindia.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Application Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Application</h2>

                  {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for your interest in joining CHN Technologies. Our HR team will review your application and contact you soon.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                      >
                        Submit Another Application
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name and Email */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                            placeholder="Enter your email address"
                          />
                        </div>
                      </div>

                      {/* Phone and Position */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                            placeholder="Enter your phone number"
                          />
                        </div>

                        <div>
                          <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                            Position Applying For *
                          </label>
                          <select
                            id="position"
                            name="position"
                            required
                            value={formData.position}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                          >
                            <option value="">Select a position</option>
                            {positions.map((position, index) => (
                              <option key={index} value={position}>{position}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Cover Letter / Additional Information
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-vertical"
                          placeholder="Tell us about your experience, skills, and why you're interested in joining our team..."
                        ></textarea>
                      </div>

                      {/* Resume Upload */}
                      <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                          Upload Resume *
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            id="resume"
                            name="resume"
                            required
                            onChange={handleFileChange}
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                          />
                          <label
                            htmlFor="resume"
                            className="w-full flex items-center justify-center gap-3 px-4 py-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 cursor-pointer group"
                          >
                            <Upload className="w-6 h-6 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                            <span className="text-gray-600 group-hover:text-indigo-600 transition-colors">
                              {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                            </span>
                          </label>
                          {formData.resume && (
                            <div className="mt-2 flex items-center gap-2 text-sm text-green-600">
                              <CheckCircle className="w-4 h-4" />
                              File selected: {formData.resume.name}
                            </div>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Supported formats: PDF, DOC, DOCX (Max 5MB)
                        </p>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25 flex items-center justify-center gap-2 disabled:transform-none disabled:shadow-none"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Submit Application</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
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

export default Careers;

// Mail icon component since it's not imported from lucide-react
const Mail = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);