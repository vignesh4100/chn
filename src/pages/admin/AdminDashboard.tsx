import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';
import { blogService, articleService, newsService, jobService } from '../../services/cmsService';
import { 
  FileText, 
  BookOpen, 
  Newspaper, 
  Briefcase,
  PlusCircle,
  TrendingUp,
  Users,
  Calendar,
  Eye,
  BarChart3
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    blogs: { total: 0, published: 0, draft: 0, today: 0 },
    articles: { total: 0, published: 0, draft: 0, today: 0 },
    news: { total: 0, published: 0, draft: 0, today: 0 },
    jobs: { total: 0, published: 0, draft: 0, today: 0 }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [blogStats, articleStats, newsStats, jobStats] = await Promise.all([
        blogService.getStats(),
        articleService.getStats(),
        newsService.getStats(),
        jobService.getStats()
      ]);

      setStats({
        blogs: blogStats,
        articles: articleStats,
        news: newsStats,
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
      title: 'Blog Posts',
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
      title: 'News',
      icon: Newspaper,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      textColor: 'text-green-600',
      path: '/admin/news',
      newPath: '/admin/news/new',
      stats: stats.news
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
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Welcome to CMS Dashboard</h1>
          <p className="text-cyan-100">Manage all your content from one central location</p>
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

        {/* Content Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <p className="text-2xl font-bold text-purple-600">{type.stats.today}</p>
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

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/admin/blogs/new"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FileText className="w-5 h-5 text-cyan-600" />
              <span className="font-medium">New Blog Post</span>
            </Link>
            <Link
              to="/admin/articles/new"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <BookOpen className="w-5 h-5 text-purple-600" />
              <span className="font-medium">New Article</span>
            </Link>
            <Link
              to="/admin/news/new"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Newspaper className="w-5 h-5 text-green-600" />
              <span className="font-medium">New News</span>
            </Link>
            <Link
              to="/admin/jobs/new"
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Briefcase className="w-5 h-5 text-orange-600" />
              <span className="font-medium">New Job</span>
            </Link>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;