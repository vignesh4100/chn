import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { 
  LayoutDashboard,
  FileText, 
  Briefcase,
  BookOpen,
  LogOut, 
  Menu, 
  X,
  User,
  Settings,
  BarChart3
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/admin/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/admin/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const menuItems = [
    {
      title: 'Overview',
      icon: LayoutDashboard,
      path: '/admin',
      color: 'text-blue-600'
    },
    {
      title: 'Content Management',
      icon: FileText,
      path: '/admin/content',
      color: 'text-cyan-600',
      isSection: true
    },
    {
      title: 'Blogs',
      icon: FileText,
      path: '/admin/blogs',
      color: 'text-cyan-600',
      submenu: [
        { title: 'All Posts', path: '/admin/blogs' },
        { title: 'New Post', path: '/admin/blogs/new' }
      ]
    },
    {
      title: 'Articles',
      icon: BookOpen,
      path: '/admin/articles',
      color: 'text-purple-600',
      submenu: [
        { title: 'All Articles', path: '/admin/articles' },
        { title: 'New Article', path: '/admin/articles/new' }
      ]
    },
    {
      title: 'Career Management',
      icon: Briefcase,
      path: '/admin/careers',
      color: 'text-orange-600',
      isSection: true
    },
    {
      title: 'Job Postings',
      icon: Briefcase,
      path: '/admin/jobs',
      color: 'text-orange-600',
      submenu: [
        { title: 'All Jobs', path: '/admin/jobs' },
        { title: 'New Job', path: '/admin/jobs/new' }
      ]
    },
    {
      title: 'System',
      icon: Settings,
      path: '/admin/system',
      color: 'text-gray-600',
      isSection: true
    },
    {
      title: 'Analytics & Reports',
      icon: BarChart3,
      path: '/admin/analytics',
      color: 'text-indigo-600'
    },
    {
      title: 'System Settings',
      icon: Settings,
      path: '/admin/settings',
      color: 'text-gray-600'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">CMS Admin</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="mt-6 px-3 flex-1 overflow-y-auto">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path || 
                           (item.submenu && item.submenu.some(sub => location.pathname === sub.path));
            
            // Section headers
            if (item.isSection) {
              return (
                <div key={index} className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6 first:mt-0">
                  {item.title}
                </div>
              );
            }
            
            return (
              <div key={index} className="mb-1">
                <Link
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : item.color}`} />
                  <span className="font-medium">{item.title}</span>
                </Link>
                
                {/* Submenu */}
                {item.submenu && isActive && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        onClick={() => setSidebarOpen(false)}
                        className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                          location.pathname === subItem.path
                            ? 'bg-gray-100 text-gray-900 font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user?.email}
              </p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-semibold text-gray-900">
                Admin Panel
              </h1>
            </div>
            
            <div className="flex items-center gap-3">
              <Link
                to="/"
                target="_blank"
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Site
              </Link>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;