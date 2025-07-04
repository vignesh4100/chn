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

      {/* Mega Menu Overlay */}
      {activeMegaMenu && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={closeMegaMenu}
        >
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-screen max-w-6xl bg-white/98 backdrop-blur-xl border border-gray-200/50 rounded-3xl shadow-2xl shadow-gray-900/10 animate-fade-in-up mx-4">
            <div className="p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {navItems.find(item => item.name === activeMegaMenu)?.megaMenu?.title}
                </h3>
                <p className="text-gray-600">
                  {navItems.find(item => item.name === activeMegaMenu)?.megaMenu?.subtitle}
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
              </div>

              {/* Divisions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {navItems.find(item => item.name === activeMegaMenu)?.megaMenu?.divisions.map((division, divIndex) => (
                  <div key={divIndex} className="group/division">
                    {/* Division Header */}
                    <div className="mb-6">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${division.color} rounded-2xl mb-3 group-hover/division:scale-110 transition-transform duration-300`}>
                        <division.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{division.title}</h4>
                    </div>

                    {/* Services List */}
                    <div className="space-y-2">
                      {division.services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          to={service.path}
                          className="group/service flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                          onClick={closeMegaMenu}
                        >
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover/service:bg-gradient-to-r group-hover/service:from-cyan-500 group-hover/service:to-purple-600 transition-all duration-200">
                            <service.icon className="w-4 h-4 text-gray-600 group-hover/service:text-white transition-colors duration-200" />
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-700 group-hover/service:text-gray-900 font-medium text-sm transition-colors duration-200">
                              {service.name}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMobileMenu} />
          <div className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300">
            <div className="p-6 pt-24">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
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