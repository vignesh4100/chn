import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, ArrowRight, Server, Code, Smartphone, Users, Calculator, GraduationCap } from 'lucide-react';

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

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Technology', 
      path: '/technology',
      dropdown: [
        { name: 'IT Infrastructure', path: '/technology/infrastructure' },
        { name: 'Software Solutions', path: '/technology/software' },
        { name: 'Digital Solutions', path: '/technology/digital' }
      ]
    },
    { 
      name: 'Consulting', 
      path: '/consulting',
      dropdown: [
        { name: 'Workforce Management', path: '/consulting/workforce' },
        { name: 'Payroll & Compliance', path: '/consulting/payroll' },
        { name: 'Training & Development', path: '/consulting/training' }
      ]
    },
    { name: 'Contact', path: '/contact' }
  ];

  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleMegaMenuToggle = (menu: string) => {
    if (activeMegaMenu === menu) {
      setActiveMegaMenu(null);
    } else {
      setActiveMegaMenu(menu);
    }
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
  };

  return (
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
              <React.Fragment key={item.name}>
                {!item.dropdown ? (
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      isActivePath(item.path)
                        ? isScrolled
                          ? 'text-cyan-600 bg-cyan-50'
                          : 'text-cyan-300 bg-white/10'
                        : isScrolled
                          ? 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div className="relative">
                    <button
                      onClick={() => handleMegaMenuToggle(item.name)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        isActivePath(item.path)
                          ? isScrolled
                            ? 'text-cyan-600 bg-cyan-50'
                            : 'text-cyan-300 bg-white/10'
                          : isScrolled
                            ? 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                      } ${activeMegaMenu === item.name ? (isScrolled ? 'bg-cyan-50 text-cyan-600' : 'bg-white/10 text-white') : ''}`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMegaMenu === item.name ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                )}
              </React.Fragment>
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

        {/* Mega Menu Dropdowns */}
        {activeMegaMenu === 'Technology' && (
          <div className="absolute left-0 right-0 mt-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl shadow-gray-900/10 py-8 animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-3 gap-8">
                {/* IT Infrastructure */}
                <div className="group">
                  <Link 
                    to="/technology/infrastructure" 
                    className="flex items-center gap-3 mb-4 hover:text-cyan-600 transition-colors"
                    onClick={closeMegaMenu}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Server className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">IT Infrastructure</h3>
                      <p className="text-gray-500 text-sm">Comprehensive infrastructure solutions</p>
                    </div>
                  </Link>
                  <ul className="space-y-2 pl-14">
                    <li>
                      <Link 
                        to="/network-management" 
                        className="text-gray-600 hover:text-cyan-600 flex items-center gap-2 transition-colors"
                        onClick={closeMegaMenu}
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                        <span>Network Management</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/end-user-computing" 
                        className="text-gray-600 hover:text-cyan-600 flex items-center gap-2 transition-colors"
                        onClick={closeMegaMenu}
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                        <span>End User Computing</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/cyber-security" 
                        className="text-gray-600 hover:text-cyan-600 flex items-center gap-2 transition-colors"
                        onClick={closeMegaMenu}
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                        <span>Cyber Security</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/server-administration" 
                        className="text-gray-600 hover:text-cyan-600 flex items-center gap-2 transition-colors"
                        onClick={closeMegaMenu}
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                        <span>Server Administration</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/lan-cabling-surveillance" 
                        className="text-gray-600 hover:text-cyan-600 flex items-center gap-2 transition-colors"
                        onClick={closeMegaMenu}
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                        <span>LAN Cabling & Surveillance</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                
                {/* Software Solutions */}
                <div className="group">
                  <Link 
                    to="/technology/software" 
                    className="flex items-center gap-3 mb-4 hover:text-cyan-600 transition-colors"
                    onClick={closeMegaMenu}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Software Solutions</h3>
                      <p className="text-gray-500 text-sm">Custom development services</p>
                    </div>
                  </Link>
                  <ul className="space-y-2 pl-14">
                    <li>
                      <Link 
                        to="/web-design-development" 
                        className="text-gray-600 hover:text-cyan-600 flex items-center gap-2 transition-colors"
                        onClick={closeMegaMenu}
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                        <span>Web Design & Development</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/application-development" 
                        className="text-gray-600 hover:text-cyan-600 flex items-center gap-2 transition-colors"
                        onClick={closeMegaMenu}
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                        <span>Application Development</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/software-solutions" 
                        className="text-gray-600 hover:text-cyan-600 flex items-center gap-2 transition-colors"
                        onClick={closeMegaMenu}
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                        <span>All Software Services</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                
                {/* Digital Solutions */}
                <div className="group">
                  <Link 
                    to="/technology/digital" 
                    className="flex items-center gap-3 mb-4 hover:text-cyan-600 transition-colors"
                    onClick={closeMegaMenu}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Digital Solutions</h3>
                      <p className="text-gray-500 text-sm">Digital transformation services</p>
                    </div>
                  </Link>
                  <ul className="space-y-2 pl-14">
                    <li>
                      <Link 
                        to="/data-analytics-visualization" 
                        className="text-gray-600 hover:text-cyan-600 flex items-center gap-2 transition-colors"
                        onClick={closeMegaMenu}
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                        <span>Data Analytics & Visualization</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/automation-digital-transformation" 
                        className="text-gray-600 hover:text-cyan-600 flex items-center gap-2 transition-colors"
                        onClick={closeMegaMenu}
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                        <span>Automation & Digital Transformation</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/technology/digital" 
                        className="text-gray-600 hover:text-cyan-600 flex items-center gap-2 transition-colors"
                        onClick={closeMegaMenu}
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                        <span>All Digital Services</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeMegaMenu === 'Consulting' && (
          <div className="absolute left-0 right-0 mt-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl shadow-gray-900/10 py-8 animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-3 gap-8">
                {/* Workforce Management */}
                <div className="group">
                  <Link 
                    to="/consulting/workforce" 
                    className="flex items-center gap-3 mb-4 hover:text-cyan-600 transition-colors"
                    onClick={closeMegaMenu}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Workforce Management</h3>
                      <p className="text-gray-500 text-sm">Strategic workforce solutions</p>
                    </div>
                  </Link>
                  <div className="pl-14 space-y-4">
                    <p className="text-gray-600">
                      We deliver strategic workforce management solutions that help you build high-performing teams, reduce hiring overhead, and maintain operational agility.
                    </p>
                    <Link 
                      to="/consulting/workforce" 
                      className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                      onClick={closeMegaMenu}
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                
                {/* Payroll & Compliance */}
                <div className="group">
                  <Link 
                    to="/consulting/payroll" 
                    className="flex items-center gap-3 mb-4 hover:text-cyan-600 transition-colors"
                    onClick={closeMegaMenu}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Payroll & Compliance</h3>
                      <p className="text-gray-500 text-sm">Error-free payroll management</p>
                    </div>
                  </Link>
                  <div className="pl-14 space-y-4">
                    <p className="text-gray-600">
                      We simplify payroll with structured systems, integrated workforce data, and expert advisory support to help you process salaries with confidence.
                    </p>
                    <Link 
                      to="/consulting/payroll" 
                      className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-800 transition-colors"
                      onClick={closeMegaMenu}
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                
                {/* Training & Development */}
                <div className="group">
                  <Link 
                    to="/consulting/training" 
                    className="flex items-center gap-3 mb-4 hover:text-cyan-600 transition-colors"
                    onClick={closeMegaMenu}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Training & Development</h3>
                      <p className="text-gray-500 text-sm">Strategic learning solutions</p>
                    </div>
                  </Link>
                  <div className="pl-14 space-y-4">
                    <p className="text-gray-600">
                      We help businesses build learning programs that actually work, from onboarding to leadership training, aligned with performance goals.
                    </p>
                    <Link 
                      to="/consulting/training" 
                      className="inline-flex items-center gap-2 text-amber-600 font-medium hover:text-amber-800 transition-colors"
                      onClick={closeMegaMenu}
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-colors duration-200 ${
                      isActivePath(item.path)
                        ? 'text-cyan-600 bg-cyan-50'
                        : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-cyan-600 hover:bg-cyan-50/50 rounded-lg transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;