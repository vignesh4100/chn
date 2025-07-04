import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, ArrowRight, Grid, Code, Users, Calculator, GraduationCap, Server, Cloud, Shield, Database, Smartphone, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [megaMenuTimeout, setMegaMenuTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
            bgColor: 'from-cyan-50 to-blue-50',
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
            bgColor: 'from-purple-50 to-pink-50',
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
            bgColor: 'from-green-50 to-teal-50',
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
            bgColor: 'from-orange-50 to-red-50',
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
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout);
      setMegaMenuTimeout(null);
    }
    setActiveMegaMenu(itemName);
  };

  const handleMegaMenuLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 300); // Increased delay for better UX
    setMegaMenuTimeout(timeout);
  };

  const handleMegaMenuContentEnter = () => {
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout);
      setMegaMenuTimeout(null);
    }
  };

  const handleMegaMenuContentLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
    setMegaMenuTimeout(timeout);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
    if (megaMenuTimeout) {
      clearTimeout(megaMenuTimeout);
      setMegaMenuTimeout(null);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-gray-900/5' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  CHN Technologies
                </span>
                <div className={`text-xs transition-colors duration-300 ${
                  isScrolled ? 'text-cyan-600' : 'text-cyan-300'
                }`}>
                  Empowering Digital Future
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.megaMenu && handleMegaMenuEnter(item.name)}
                  onMouseLeave={() => item.megaMenu && handleMegaMenuLeave()}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      isActivePath(item.path)
                        ? isScrolled
                          ? 'text-cyan-600 bg-cyan-50'
                          : 'text-cyan-300 bg-white/10'
                        : isScrolled
                          ? 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                          : 'text-white hover:text-cyan-300 hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                    {item.megaMenu && (
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-xl transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mega Menu */}
      {activeMegaMenu && (
        <div className="fixed inset-0 z-40 lg:block hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeMegaMenu}
          />
          
          {/* Hover Bridge - Invisible area between navbar and megamenu */}
          <div 
            className="absolute top-16 left-0 right-0 h-8"
            onMouseEnter={handleMegaMenuContentEnter}
            onMouseLeave={handleMegaMenuContentLeave}
          />
          
          {/* Mega Menu Content */}
          <div 
            className="absolute top-20 left-0 right-0"
            onMouseEnter={handleMegaMenuContentEnter}
            onMouseLeave={handleMegaMenuContentLeave}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-3xl shadow-2xl shadow-gray-900/20 border border-gray-100 max-h-[80vh] overflow-y-auto">
                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {navItems.find(item => item.name === activeMegaMenu)?.megaMenu?.title}
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      {navItems.find(item => item.name === activeMegaMenu)?.megaMenu?.subtitle}
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
                  </div>

                  {/* Divisions Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {navItems.find(item => item.name === activeMegaMenu)?.megaMenu?.divisions.map((division, divIndex) => (
                      <div key={divIndex} className="group/division">
                        {/* Division Card */}
                        <div className={`bg-gradient-to-br ${division.bgColor} border border-gray-100 rounded-2xl p-5 h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                          {/* Division Header */}
                          <div className="text-center mb-5">
                            <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${division.color} rounded-2xl mb-3 group-hover/division:scale-110 transition-transform duration-300 shadow-lg`}>
                              <division.icon className="w-7 h-7 text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">{division.title}</h4>
                            <div className={`w-10 h-0.5 bg-gradient-to-r ${division.color} mx-auto rounded-full`}></div>
                          </div>

                          {/* Services List */}
                          <div className="space-y-2">
                            {division.services.map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                to={service.path}
                                className="group/service flex items-center gap-3 p-3 rounded-xl bg-white/60 hover:bg-white hover:shadow-md transition-all duration-200 border border-transparent hover:border-gray-200"
                                onClick={closeMegaMenu}
                              >
                                <div className={`w-8 h-8 bg-gradient-to-r ${division.color} rounded-lg flex items-center justify-center group-hover/service:scale-110 transition-transform duration-200 shadow-sm`}>
                                  <service.icon className="w-4 h-4 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="text-gray-800 group-hover/service:text-gray-900 font-semibold text-sm transition-colors duration-200 leading-tight block">
                                    {service.name}
                                  </span>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover/service:text-gray-600 opacity-0 group-hover/service:opacity-100 transform translate-x-2 group-hover/service:translate-x-0 transition-all duration-200 flex-shrink-0" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom CTA */}
                  <div className="text-center mt-8 pt-6 border-t border-gray-200">
                    <p className="text-gray-600 mb-4">Need a custom solution? Let's discuss your requirements.</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      onClick={closeMegaMenu}
                    >
                      <span>Contact Our Experts</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMobileMenu} />
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 overflow-y-auto">
            <div className="p-6 pt-24">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                        isActivePath(item.path)
                          ? 'text-cyan-600 bg-cyan-50'
                          : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                    
                    {/* Mobile Services Submenu */}
                    {item.megaMenu && (
                      <div className="ml-4 mt-3 space-y-3 max-h-96 overflow-y-auto">
                        {item.megaMenu.divisions.map((division, divIndex) => (
                          <div key={divIndex} className="border-l-2 border-gray-200 pl-4 pb-3">
                            <div className="flex items-center gap-2 mb-3">
                              <div className={`w-8 h-8 bg-gradient-to-r ${division.color} rounded-lg flex items-center justify-center`}>
                                <division.icon className="w-4 h-4 text-white" />
                              </div>
                              <h5 className="text-sm font-bold text-gray-900">{division.title}</h5>
                            </div>
                            <div className="space-y-1">
                              {division.services.map((service, serviceIndex) => (
                                <Link
                                  key={serviceIndex}
                                  to={service.path}
                                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors duration-200"
                                  onClick={closeMobileMenu}
                                >
                                  <service.icon className="w-4 h-4 flex-shrink-0" />
                                  <span className="flex-1">{service.name}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-center mt-6"
                  onClick={closeMobileMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;