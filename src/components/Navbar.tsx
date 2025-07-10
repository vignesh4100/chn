import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Zap, ArrowRight
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    { name: 'Technology', path: '/technology', isDropdown: true },
    { name: 'Consulting', path: '/consulting', isDropdown: true },
    { name: 'Contact', path: '/contact' },
  ];

  const isActivePath = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md border-b border-gray-200' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
          <img src='https://chnindia.com/assets/images/CHN-logo.png' width={100}/>
            {/* <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div> */}
            <div>
              <span className="text-xl font-bold text-gray-900">Connect Human Network </span>
              <div className="text-xs text-cyan-600">Empowering Digital Future</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.name} className={`relative ${item.isDropdown ? 'group/menu' : ''}`}>
                {!item.isDropdown ? (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                      isActivePath(item.path)
                        ? 'text-cyan-600 bg-cyan-50'
                        : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                        isActivePath(item.path)
                          ? 'text-cyan-600 bg-cyan-50'
                          : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover/menu:rotate-180" />
                    </button>

                    <div className="invisible opacity-0 group-hover/menu:visible group-hover/menu:opacity-100 transition-all duration-200 fixed left-0 right-0 top-20 bg-white shadow-md border-t border-gray-200 z-40 py-6 px-6">
                      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
                        {item.name === 'Technology' && (
                          <>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">IT Infrastructure</h3>
                              <ul className="space-y-1">
                                <li><Link to="/network-management" className="text-gray-600 hover:text-cyan-600">Network Management</Link></li>
                                <li><Link to="/end-user-computing" className="text-gray-600 hover:text-cyan-600">End User Computing</Link></li>
                                <li><Link to="/cyber-security" className="text-gray-600 hover:text-cyan-600">Cyber Security</Link></li>
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">Software Solutions</h3>
                              <ul className="space-y-1">
                                <li><Link to="/web-design-development" className="text-gray-600 hover:text-cyan-600">Web Design & Development</Link></li>
                                <li><Link to="/application-development" className="text-gray-600 hover:text-cyan-600">Application Development</Link></li>
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Solutions</h3>
                              <ul className="space-y-1">
                                <li><Link to="/data-analytics-visualization" className="text-gray-600 hover:text-cyan-600">Data Analytics</Link></li>
                                <li><Link to="/automation-digital-transformation" className="text-gray-600 hover:text-cyan-600">Automation</Link></li>
                              </ul>
                            </div>
                          </>
                        )}

                        {item.name === 'Consulting' && (
                          <>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">Workforce Management</h3>
                              <p className="text-gray-600 mb-2">Build high-performing teams and reduce hiring overhead.</p>
                              <Link to="/consulting/workforce" className="text-cyan-600 font-medium hover:underline">Learn more</Link>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">Payroll & Compliance</h3>
                              <p className="text-gray-600 mb-2">Error-free payroll with expert support and structured systems.</p>
                              <Link to="/consulting/payroll" className="text-cyan-600 font-medium hover:underline">Learn more</Link>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">Training & Development</h3>
                              <p className="text-gray-600 mb-2">Custom learning programs aligned with business goals.</p>
                              <Link to="/consulting/training" className="text-cyan-600 font-medium hover:underline">Learn more</Link>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
