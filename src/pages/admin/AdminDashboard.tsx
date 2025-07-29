import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';
import { blogService, articleService, jobService } from '../../services/cmsService';
import { 
  FileText, 
  BookOpen, 
  Briefcase,
  TrendingUp,
  Users,
  Calendar,
  Eye,
  BarChart3,
  Plus,
  Settings,
  Activity,
  PlusCircle,
  BarChart3
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    blogs: { total: 0, published: 0, draft: 0, today: 0 },
    articles: { total: 0, published: 0, draft: 0, today: 0 },
    jobs: { total: 0, published: 0, draft: 0, today: 0 }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [blogStats, articleStats, jobStats] = await Promise.all([
        blogService.getStats(),
        articleService.getStats(),
        jobService.getStats()
      ]);

      setStats({
        blogs: blogStats,
        articles: articleStats,
        jobs: jobStats
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const contentTypes = [
    {
      title: 'Blogs',
      icon: FileText,
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-50 to-blue-50',
      textColor: 'text-cyan-600',
      path: '/admin/blogs',
      newPath: '/admin/blogs/new',
      stats: stats.blogs
    },
    {
      title: 'Articles',
      icon: BookOpen,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-50 to-indigo-50',
      textColor: 'text-purple-600',
      path: '/admin/articles',
      newPath: '/admin/articles/new',
      stats: stats.articles
    },
    {
      title: 'Job Postings',
      icon: Briefcase,
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50',
      textColor: 'text-orange-600',
      path: '/admin/jobs',
      newPath: '/admin/jobs/new',
      stats: stats.jobs
    }
  ];

  const totalStats = {
    total: Object.values(stats).reduce((sum, stat) => sum + stat.total, 0),
    published: Object.values(stats).reduce((sum, stat) => sum + stat.published, 0),
    draft: Object.values(stats).reduce((sum, stat) => sum + stat.draft, 0),
    today: Object.values(stats).reduce((sum, stat) => sum + stat.today, 0)
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          <div className="relative">
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-slate-200">Manage your website content, analytics, and system settings</p>
          </div>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalStats.total}</p>
                <p className="text-gray-600">Total Content</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalStats.published}</p>
                <p className="text-gray-600">Published</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalStats.draft}</p>
                <p className="text-gray-600">Drafts</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalStats.today}</p>
                <p className="text-gray-600">Created Today</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Management Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Content Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contentTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className={`bg-gradient-to-r ${type.color} p-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{type.title}</h3>
                      <p className="text-white/80">Manage your {type.title.toLowerCase()}</p>
                    </div>
                  </div>
                  <Link
                    to={type.newPath}
                    className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors"
                  >
                    <PlusCircle className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{type.stats.total}</p>
                    <p className="text-gray-600 text-sm">Total</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{type.stats.published}</p>
                    <p className="text-gray-600 text-sm">Published</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-600">{type.stats.draft}</p>
                    <p className="text-gray-600 text-sm">Drafts</p>
                  </div>
                  <div className="text-center">
                      <Plus className="w-5 h-5" />
                    <p className="text-gray-600 text-sm">Today</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Link
                    to={type.path}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-center transition-colors"
                  >
                    View All
                  </Link>
                  <Link
                    to={type.newPath}
                    className={`flex-1 bg-gradient-to-r ${type.color} text-white px-4 py-2 rounded-lg text-center hover:opacity-90 transition-opacity`}
                  >
                    Create New
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* System Management Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">System Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
                  <p className="text-gray-600 text-sm">Configure system settings</p>
                </div>
              </div>
              <Link
                to="/admin/settings"
                className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-center transition-colors block"
              >
                Manage Settings
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">System Status</h3>
                  <p className="text-gray-600 text-sm">Monitor system health</p>
                </div>
              </div>
              <div className="w-full bg-green-50 text-green-700 px-4 py-2 rounded-lg text-center">
                All Systems Operational
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;