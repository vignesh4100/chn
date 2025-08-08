import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Upload,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Calendar,
  Zap,
  Users,
  Building,
  Globe,
  Star,
  Award,
  Target,
  Headphones
} from 'lucide-react';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('https://chn-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log('Response:', result.message);

      alert('Thank you! Your message has been sent.');

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again.');
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

  const services = [
    'IT Infrastructure Management',
    'Software Development',
    'Workforce Management',
    'Payroll & Compliance',
    'Training & Development',
    'Digital Transformation',
    'Cloud Solutions',
    'Cybersecurity',
    'Data Analytics',
    'Other'
  ];

  const quickStats = [
    { icon: Clock, value: '< 24hrs', label: 'Response Time', color: 'from-cyan-400 to-blue-500' },
    { icon: Users, value: '500+', label: 'Happy Clients', color: 'from-purple-400 to-pink-500' },
    { icon: Award, value: '98%', label: 'Success Rate', color: 'from-green-400 to-teal-500' },
    { icon: Headphones, value: '24/7', label: 'Support', color: 'from-orange-400 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Modern Tech Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-brand-800 to-brand-900">
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>

          {/* Floating Elements */}
          <div className="absolute inset-0">
            {/* Tech Icons */}
            <div className="absolute top-20 left-20 animate-float opacity-20">
              <MessageSquare className="w-12 h-12 text-cyan-400" />
            </div>
            <div className="absolute top-40 right-32 animate-float opacity-20" style={{ animationDelay: '1s' }}>
              <Mail className="w-10 h-10 text-purple-400" />
            </div>
            <div className="absolute bottom-32 left-32 animate-float opacity-20" style={{ animationDelay: '2s' }}>
              <Phone className="w-14 h-14 text-pink-400" />
            </div>
            <div className="absolute bottom-48 right-1/4 animate-float opacity-20" style={{ animationDelay: '0.5s' }}>
              <Globe className="w-11 h-11 text-cyan-400" />
            </div>

            {/* Geometric Shapes */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-cyan-400/20 rounded-full animate-spin-slow">
              <div className="w-full h-full bg-gradient-to-r from-cyan-400/10 to-transparent rounded-full"></div>
            </div>
            <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border-2 border-purple-400/20 transform rotate-45 animate-spin-slow" style={{ animationDirection: 'reverse' }}>
              <div className="w-full h-full bg-gradient-to-r from-purple-400/10 to-transparent"></div>
            </div>

            {/* Particle System */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-float opacity-40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${4 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
              <MessageSquare className="w-4 h-4 text-cyan-300 animate-pulse" />
              <span className="text-cyan-200 text-sm font-medium">Contact Us</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white hero-heading-large mb-6">
              <span className="block">Let's Build the</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r leading-[1.3] from-brand-300 via-brand-400 to-brand-500 animate-gradient-x">
                Right Solution
              </span>
              <span className="block">for Your Business</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              At CHN Technologies, we're always ready to connect. Whether you need expert consulting,
              IT solutions, or want to explore a partnership — we're here to help.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r ${stat.color} rounded-xl mb-2`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Our Locations */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Locations</h3>
                </div>

                <div className="space-y-6">
                  <div className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Building className="w-4 h-4 text-cyan-600" />
                      Head Office
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      No. 28, Fourth Main Road,<br />
                      CIT Nagar, Chennai. 600 035.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100 text-center">
                      <h4 className="font-semibold text-gray-900 mb-1">Branch</h4>
                      <p className="text-gray-600 text-sm">Coimbatore</p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl border border-green-100 text-center">
                      <h4 className="font-semibold text-gray-900 mb-1">Branch</h4>
                      <p className="text-gray-600 text-sm">Bangalore</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl border border-green-100">
                    <span className="font-medium text-gray-900">Monday – Saturday</span>
                    <span className="text-green-600 font-semibold">9:30 AM – 6:30 PM</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border border-red-100">
                    <span className="font-medium text-gray-900">Sunday</span>
                    <span className="text-red-600 font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-br from-cyan-500 to-purple-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Need a Quick Response?
                </h3>

                <div className="space-y-4">
                  <a
                    href="tel:+917010203031"
                    className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                  >
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm opacity-90">Call us directly</div>
                      <div className="font-semibold">+91 70102 03031</div>
                    </div>
                  </a>

                  <a
                    href="mailto:sales@chnindia.com"
                    className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm opacity-90">Sales & Service</div>
                      <div className="font-semibold">sales@chnindia.com</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@chnindia.com"
                    className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm opacity-90">Support</div>
                      <div className="font-semibold">info@chnindia.com</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Send Us a Message</h3>
                  </div>
                  <p className="text-gray-600 text-lg">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-lg"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-lg"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  {/* Phone and Company */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-lg"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name <span className="text-gray-400">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-lg"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject / Service Inquiry *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-lg"
                    >
                      <option value="">Select a service or inquiry type</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message / Requirements *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-lg resize-vertical"
                      placeholder="Tell us more about your requirements, project details, or any specific questions you have..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-2 disabled:transform-none disabled:shadow-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Your Query</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section with Images */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,101,179,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,101,179,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-brand-500/20 to-brand-600/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-brand-600/20 to-brand-700/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="text-center lg:text-left">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <Star className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Let's Start Something Great
                  </h2>
                </div>

                <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                  From software development to workforce consulting, we partner with businesses across industries
                  to deliver solutions that create measurable impact.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>Book a Free Consultation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    <Target className="w-5 h-5" />
                    <span>Explore Our Services</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              {/* Main Professional Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Professional team collaboration and technology solutions"
                  className="w-full h-96 object-cover"
                />

                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-900 font-semibold text-sm">Available 24/7</span>
                </div>

                {/* Bottom Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">500+</div>
                      <div className="text-white/80 text-xs">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">98%</div>
                      <div className="text-white/80 text-xs">Success</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-white/80 text-xs">Support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Secondary Images */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-2xl overflow-hidden shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="Technology innovation and digital transformation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>
              </div>

              <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-2xl overflow-hidden shadow-xl transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="Business consulting and strategic planning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
              </div>

              {/* Decorative SVG Elements */}
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2">
                <svg width="80" height="80" viewBox="0 0 80 80" className="text-cyan-400/30 animate-spin-slow">
                  <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
                  <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 3" />
                  <circle cx="40" cy="40" r="5" fill="currentColor" />
                </svg>
              </div>

              <div className="absolute bottom-1/4 -left-12">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-purple-400/30 animate-pulse">
                  <polygon points="30,5 55,50 5,50" fill="none" stroke="currentColor" strokeWidth="2" />
                  <polygon points="30,15 45,40 15,40" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="30" cy="30" r="3" fill="currentColor" />
                </svg>
              </div>

              {/* Glowing Dots */}
              <div className="absolute top-16 left-16 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
              <div className="absolute bottom-16 right-16 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Additional Visual Elements */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                title: "AI Solutions",
                description: "Cutting-edge artificial intelligence"
              },
              {
                image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                title: "Cloud Services",
                description: "Scalable cloud infrastructure"
              },
              {
                image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                title: "Data Analytics",
                description: "Intelligent business insights"
              },
              {
                image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                title: "Digital Transform",
                description: "Complete business evolution"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.description}</p>
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

export default Contact;