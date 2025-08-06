import React, { useState, useEffect } from 'react';
import { CMSService } from '../services/cmsService';
import { BlogPost } from '../types/cms';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Search, 
  Tag, 
  FileText, 
  BookOpen, 
  PenTool, 
  Lightbulb,
  Sparkles,
  TrendingUp,
  Clock,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  const blogService = new CMSService('blogs');

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const allPosts = await blogService.getAll(); // Get all posts
      const publishedPosts = allPosts.filter(post => post.published); // Filter published posts
      setPosts(publishedPosts as BlogPost[]);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Advanced Blog Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-brand-800 to-brand-900">
          {/* Blog Content Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="blogPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  <g stroke="currentColor" strokeWidth="1" fill="none" className="text-indigo-400">
                    {/* Article Cards */}
                    <rect x="20" y="20" width="80" height="80" rx="8" />
                    <rect x="25" y="25" width="70" height="15" rx="3" fill="currentColor" opacity="0.3" />
                    <rect x="25" y="45" width="50" height="8" rx="2" fill="currentColor" opacity="0.2" />
                    <rect x="25" y="58" width="60" height="8" rx="2" fill="currentColor" opacity="0.2" />
                    <rect x="25" y="71" width="40" height="8" rx="2" fill="currentColor" opacity="0.2" />
                    <rect x="25" y="84" width="55" height="10" rx="2" fill="currentColor" opacity="0.3" />
                    {/* Reading Icons */}
                    <circle cx="30" cy="32" r="2" fill="currentColor" />
                    <circle cx="35" cy="32" r="2" fill="currentColor" />
                    <circle cx="40" cy="32" r="2" fill="currentColor" />
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#blogPattern)" />
            </svg>
          </div>
          
          {/* Animated Reading Streams */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-pulse"
                style={{
                  top: `${15 + i * 12}%`,
                  left: '0%',
                  width: '100%',
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '4s'
                }}
              />
            ))}
          </div>
          
          {/* Floating Blog Icons */}
          <div className="absolute top-20 left-20 animate-float opacity-30">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-400/20 to-purple-500/20 rounded-2xl border-2 border-indigo-400/30 flex items-center justify-center">
              <FileText className="w-8 h-8 text-indigo-400" />
            </div>
          </div>
          <div className="absolute top-40 right-32 animate-float opacity-30" style={{ animationDelay: '1s' }}>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-xl border-2 border-purple-400/30 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          <div className="absolute bottom-32 left-32 animate-float opacity-30" style={{ animationDelay: '2s' }}>
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-2xl border-2 border-cyan-400/30 flex items-center justify-center">
              <PenTool className="w-10 h-10 text-cyan-400" />
            </div>
          </div>
          <div className="absolute bottom-48 right-1/4 animate-float opacity-30" style={{ animationDelay: '0.5s' }}>
            <div className="w-14 h-14 bg-gradient-to-r from-pink-400/20 to-red-500/20 rounded-xl border-2 border-pink-400/30 flex items-center justify-center">
              <Lightbulb className="w-7 h-7 text-pink-400" />
            </div>
          </div>
          
          {/* Glowing Knowledge Zones */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
                <BookOpen className="w-4 h-4 text-blue-300 animate-pulse" />
                <span className="text-blue-200 text-sm font-medium">Knowledge Hub</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white hero-heading-large mb-6">
                <span className="block">Insights &</span>
               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-brand-700 animate-gradient-x">
               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800 animate-gradient-x">
                  Innovation
                </span>
                <span className="block">Stories</span>
              </h1>
              
              <p className="text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl lg:mx-0 mx-auto">
                Discover the latest trends, insights, and innovations in technology, business transformation, 
                and digital solutions from our team of experts.
              </p>
              
              {/* Blog Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 mb-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-brand-400 mb-1">{posts.length}+</div>
                  <div className="text-slate-400 text-sm">Articles</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-brand-500 mb-1">5</div>
                  <div className="text-slate-400 text-sm">Categories</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-brand-600 mb-1">Weekly</div>
                  <div className="text-slate-400 text-sm">Updates</div>
                </div>
              </div>
            </div>
            
            {/* Right Search & Featured */}
            <div className="relative">
              {/* Main Search Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-lg">Explore Our Content</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-400 text-sm">Live Updates</span>
                  </div>
                </div>
                
                {/* Enhanced Search */}
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                {/* Quick Categories */}
                <div className="mb-6">
                  <h4 className="text-white text-sm font-medium mb-3">Popular Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Technology', 'AI & ML', 'Digital Transform', 'Business', 'Innovation'].map((topic, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchTerm(topic.toLowerCase())}
                        className="bg-white/10 hover:bg-white/20 text-slate-300 hover:text-blue-200 px-3 py-1.5 rounded-lg text-sm transition-all duration-200 border border-white/10 hover:border-blue-300/30"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Reading Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{posts.length}</div>
                    <div className="text-slate-400 text-xs">Total Articles</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-500 mb-1">5min</div>
                    <div className="text-slate-400 text-xs">Avg Read Time</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl animate-spin-slow opacity-80 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl animate-bounce opacity-60 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {searchTerm ? 'No posts found' : 'No blog posts yet'}
              </h2>
              <p className="text-gray-600">
                {searchTerm ? 'Try adjusting your search terms' : 'Check back soon for new content'}
              </p>
            </div>
          ) : (
            <>
              {/* Featured Article */}
              {filteredPosts.length > 0 && (
                <div className="mb-16">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-4">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-700 text-sm font-medium">Featured Article</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Latest Insights</h2>
                  </div>
                  
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="grid lg:grid-cols-2">
                      {filteredPosts[0].coverImage && (
                        <div className="relative h-80 lg:h-auto overflow-hidden">
                          <img
                            src={filteredPosts[0].coverImage}
                            alt={filteredPosts[0].title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                          {filteredPosts[0].category && (
                            <div className="absolute top-6 left-6">
                              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                                {filteredPosts[0].category}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                      
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                          {filteredPosts[0].title}
                        </h3>
                        
                        {filteredPosts[0].excerpt && (
                          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            {filteredPosts[0].excerpt}
                          </p>
                        )}
                        
                        <div className="flex items-center gap-6 text-gray-600 mb-6">
                          <span className="flex items-center gap-2">
                            <User className="w-5 h-5" />
                            {filteredPosts[0].author}
                          </span>
                          <span className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            {new Date(filteredPosts[0].createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            5 min read
                          </span>
                        </div>
                        
                        {filteredPosts[0].tags && filteredPosts[0].tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {filteredPosts[0].tags.slice(0, 4).map((tag, index) => (
                              <span
                                key={index}
                                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                              >
                                <Tag className="w-3 h-3" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        <Link
                          to={`/blogs/${filteredPosts[0].slug}`}
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        >
                          Read Full Article
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* All Articles Grid */}
              {filteredPosts.length > 1 && (
                <div>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      All Articles
                      {searchTerm && (
                        <span className="text-indigo-600"> for "{searchTerm}"</span>
                      )}
                    </h2>
                    <p className="text-gray-600">
                      {filteredPosts.length - 1} more article{filteredPosts.length - 1 !== 1 ? 's' : ''} to explore
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.slice(1).map((post) => (
                      <article
                        key={post.id}
                        className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                      >
                        {post.coverImage && (
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={post.coverImage}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            {post.category && (
                              <div className="absolute top-4 left-4">
                                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                  {post.category}
                                </span>
                              </div>
                            )}
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                              <Eye className="w-4 h-4 text-gray-600" />
                            </div>
                          </div>
                        )}
                        
                        <div className="p-6">
                          <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                            {post.title}
                          </h2>
                          
                          {post.excerpt && (
                            <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                              {post.excerpt}
                            </p>
                          )}
                          
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {post.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                          
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.slice(0, 3).map((tag, index) => (
                                <span
                                  key={index}
                                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs flex items-center gap-1"
                                >
                                  <Tag className="w-3 h-3" />
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          <Link
                            to={`/blogs/${post.slug}`}
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Single Article Display */}
              {filteredPosts.length === 1 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  {post.coverImage && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      {post.category && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h2>
                    
                    {post.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs flex items-center gap-1"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <Link
                      to={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;