import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, ArrowRight, Grid, Code, Users, Calculator, GraduationCap, Server, Cloud, Shield, Database, Smartphone, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu or mega menu is open
  useEffect(() => {
    if (isOpen || activeMegaMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, activeMegaMenu]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      megaMenu: {
        title: 'Our Services',
        subtitle: 'Comprehensive technology and consulting solutions',
        divisions: [
          {
            title: 'Technology Solutions',
            icon: Code,
            color: 'from-cyan-500 to-blue-600',
            services: [
              { name: 'IT Infrastructure Management', path: '/services/infrastructure', icon: Server },
              { name: 'Software Development', path: '/services/development', icon: Code },
              { name: 'Cloud Solutions', path: '/services/cloud', icon: Cloud },
              { name: 'Cybersecurity', path: '/services/security', icon: Shield }
            ]
          },
          {
            title: 'Workforce Solutions',
            icon: Users,
            color: 'from-purple-500 to-pink-600',
            services: [
              { name: 'Workforce Management', path: '/services/workforce', icon: Users },
              { name: 'Payroll & Compliance', path: '/services/payroll', icon: Calculator },
              { name: 'Training & Development', path: '/services/training', icon: GraduationCap },
              { name: 'HR Consulting', path: '/services/hr-consulting', icon: Users }
            ]
          },
          {
            title: 'Digital Innovation',
            icon: Cpu,
            color: 'from-green-500 to-teal-600',
            services: [
              { name: 'AI & Machine Learning', path: '/services/ai-ml', icon: Cpu },
              { name: 'Data Analytics', path: '/services/analytics', icon: Database },
              { name: 'Mobile Applications', path: '/services/mobile', icon: Smartphone },
              { name: 'Digital Transformation', path: '/services/digital-transform', icon: Grid }
            ]
          },
          {
            title: 'Consulting Services',
            icon: Grid,
            color: 'from-orange-500 to-red-600',
            services: [
              { name: 'Business Strategy', path: '/services/strategy', icon: Grid },
              { name: 'Process Optimization', path: '/services/optimization', icon: Grid },
              { name: 'Technology Consulting', path: '/services/tech-consulting', icon: Grid },
              { name: 'Change Management', path: '/services/change-management', icon: Grid }
            ]
          }
        ]
      }
    },
    { name: 'Contact', path: '/contact' }
  ];

  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleMegaMenuEnter = (itemName: string) => {
    setActiveMegaMenu(itemName);
  };

  const handleMegaMenuLeave = () => {
    setActiveMegaMenu(null);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-xl border-b border-gray-200/50 shadow-xl shadow-gray-900/10' 
          : 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  CHN Technologies
                </span>
                <div className={`text-xs font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-cyan-600' : 'text-cyan-300'
                }`}>
                  Empowering Digital Future
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.megaMenu && handleMegaMenuEnter(item.name)}
                  onMouseLeave={() => item.megaMenu && handleMegaMenuLeave()}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 relative overflow-hidden ${
                      isActivePath(item.path)
                        ? isScrolled
                          ? 'text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/25'
                          : 'text-white bg-gradient-to-r from-cyan-500/80 to-purple-600/80 backdrop-blur-sm shadow-lg shadow-cyan-500/25'
                        : isScrolled
                          ? 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:shadow-lg hover:shadow-cyan-500/25'
                          : 'text-white hover:text-white hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {item.megaMenu && (
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 relative z-10" />
                    )}
                    
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </Link>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 flex items-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-3 rounded-2xl transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100 hover:text-cyan-600' 
                    : 'text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
                }`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mega Menu Overlay */}
      {activeMegaMenu && (
        <div 
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={closeMegaMenu}
        >
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-screen max-w-7xl bg-white/98 backdrop-blur-xl border border-gray-200/50 rounded-3xl shadow-2xl shadow-gray-900/20 animate-fade-in-up mx-4">
            <div className="p-10">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full px-6 py-2 mb-4">
                  <Grid className="w-5 h-5 text-cyan-600" />
                  <span className="text-cyan-700 font-medium">Explore Our Services</span>
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-3">
                  {navItems.find(item => item.name === activeMegaMenu)?.megaMenu?.title}
                </h3>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {navItems.find(item => item.name === activeMegaMenu)?.megaMenu?.subtitle}
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
              </div>

              {/* Divisions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {navItems.find(item => item.name === activeMegaMenu)?.megaMenu?.divisions.map((division, divIndex) => (
                  <div key={divIndex} className="group/division bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-6 hover:shadow-xl hover:border-cyan-200 transition-all duration-300 transform hover:-translate-y-2">
                    {/* Division Header */}
                    <div className="mb-6 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${division.color} rounded-2xl mb-4 group-hover/division:scale-110 transition-transform duration-300 shadow-lg`}>
                        <division.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{division.title}</h4>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
                    </div>

                    {/* Services List */}
                    <div className="space-y-3">
                      {division.services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          to={service.path}
                          className="group/service flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 border border-transparent hover:border-cyan-200 transition-all duration-300 transform hover:scale-105"
                          onClick={closeMegaMenu}
                        >
                          <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover/service:bg-gradient-to-r group-hover/service:from-cyan-500 group-hover/service:to-purple-600 transition-all duration-300 shadow-sm group-hover/service:shadow-lg">
                            <service.icon className="w-5 h-5 text-gray-600 group-hover/service:text-white transition-colors duration-300" />
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-700 group-hover/service:text-gray-900 font-semibold transition-colors duration-300">
                              {service.name}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover/service:text-cyan-600 opacity-0 group-hover/service:opacity-100 group-hover/service:translate-x-1 transition-all duration-300" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="text-center mt-10 pt-8 border-t border-gray-200">
                <p className="text-gray-600 mb-4">Need a custom solution? Let's discuss your specific requirements.</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25"
                  onClick={closeMegaMenu}
                >
                  <span>Contact Our Experts</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMobileMenu} />
          <div className="fixed top-0 right-0 h-full w-80 bg-white/98 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 border-l border-gray-200">
            <div className="p-6 pt-28">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                      isActivePath(item.path)
                        ? 'text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/25'
                        : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:shadow-lg hover:shadow-cyan-500/25'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    <span>{item.name}</span>
                    {item.megaMenu && <ChevronDown className="w-4 h-4 ml-auto" />}
                  </Link>
                ))}
                
                <div className="pt-6 border-t border-gray-200">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                    onClick={closeMobileMenu}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;