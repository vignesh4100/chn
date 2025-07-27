import React, { useState, useEffect } from 'react';
import {
  Save,
  Eye,
  Upload,
  X,
  Plus,
  Tag,
  Calendar,
  User,
  FileText,
  Image as ImageIcon,
  Settings,
  ArrowLeft,
  Check,
  AlertCircle,
  Loader
} from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { BlogService } from '../../services/blogService';
import { uploadToCloudinary } from '../../config/cloudinary';

interface BlogEditorProps {
  blogId?: string;
  onSave: (blog: BlogPost) => void;
  onCancel: () => void;
}

const BlogEditor: React.FC<BlogEditorProps> = ({ blogId, onSave, onCancel }) => {
  const [blog, setBlog] = useState<Partial<BlogPost>>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featuredImage: '',
    author: {
      name: 'Admin',
      email: 'admin@chnindia.com'
    },
    category: '',
    tags: [],
    status: 'draft',
    seo: {
      metaTitle: '',
      metaDescription: '',
      keywords: []
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [activeTab, setActiveTab] = useState<'content' | 'seo' | 'settings'>('content');
  const [newTag, setNewTag] = useState('');
  const [newKeyword, setNewKeyword] = useState('');
  const [previewMode, setPreviewMode] = useState(false);

  const categories = [
    'Technology',
    'Business',
    'Innovation',
    'Digital Transformation',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud Computing',
    'Software Development',
    'Data Analytics',
    'Industry Insights'
  ];

  useEffect(() => {
    if (blogId) {
      loadBlog();
    }
  }, [blogId]);

  useEffect(() => {
    if (blog.title) {
      setBlog(prev => ({
        ...prev,
        slug: BlogService.generateSlug(blog.title),
        seo: {
          ...prev.seo!,
          metaTitle: blog.title.length > 60 ? blog.title.substring(0, 57) + '...' : blog.title
        }
      }));
    }
  }, [blog.title]);

  const loadBlog = async () => {
    if (!blogId) return;
    
    setIsLoading(true);
    try {
      const blogData = await BlogService.getBlogPost(blogId);
      if (blogData) {
        setBlog(blogData);
      }
    } catch (error) {
      console.error('Error loading blog:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const imageUrl = await uploadToCloudinary(file);
      setBlog(prev => ({ ...prev, featuredImage: imageUrl }));
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setUploadingImage(false);
    }
  };

  const addTag = () => {
    if (newTag.trim() && !blog.tags?.includes(newTag.trim())) {
      setBlog(prev => ({
        ...prev,
        tags: [...(prev.tags || []), newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setBlog(prev => ({
      ...prev,
      tags: prev.tags?.filter(tag => tag !== tagToRemove) || []
    }));
  };

  const addKeyword = () => {
    if (newKeyword.trim() && !blog.seo?.keywords?.includes(newKeyword.trim())) {
      setBlog(prev => ({
        ...prev,
        seo: {
          ...prev.seo!,
          keywords: [...(prev.seo?.keywords || []), newKeyword.trim()]
        }
      }));
      setNewKeyword('');
    }
  };

  const removeKeyword = (keywordToRemove: string) => {
    setBlog(prev => ({
      ...prev,
      seo: {
        ...prev.seo!,
        keywords: prev.seo?.keywords?.filter(keyword => keyword !== keywordToRemove) || []
      }
    }));
  };

  const handleSave = async (status: 'draft' | 'published') => {
    if (!blog.title || !blog.content) {
      alert('Please fill in the title and content');
      return;
    }

    setIsSaving(true);
    try {
      const blogData = {
        ...blog,
        status,
        readTime: BlogService.calculateReadTime(blog.content),
        publishedAt: status === 'published' ? new Date() : undefined
      } as BlogPost;

      if (blogId) {
        await BlogService.updateBlogPost(blogId, blogData);
      } else {
        const newId = await BlogService.createBlogPost(blogData);
        blogData.id = newId;
      }

      onSave(blogData);
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Failed to save blog. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <Loader className="w-6 h-6 animate-spin text-blue-600" />
          <span className="text-gray-600">Loading blog...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={onCancel}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Blog List</span>
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-semibold text-gray-900">
                {blogId ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>{previewMode ? 'Edit' : 'Preview'}</span>
              </button>

              <button
                onClick={() => handleSave('draft')}
                disabled={isSaving}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors disabled:opacity-50"
              >
                {isSaving ? <Loader className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                <span>Save Draft</span>
              </button>

              <button
                onClick={() => handleSave('published')}
                disabled={isSaving}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-colors disabled:opacity-50"
              >
                {isSaving ? <Loader className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                <span>Publish</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {previewMode ? (
              /* Preview Mode */
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                {blog.featuredImage && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={blog.featuredImage}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{blog.author?.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        {new Date().toLocaleDateString()}
                      </span>
                    </div>
                    {blog.category && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {blog.category}
                      </span>
                    )}
                  </div>
                  
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
                  <p className="text-xl text-gray-600 mb-8">{blog.excerpt}</p>
                  
                  <div className="prose prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: blog.content?.replace(/\n/g, '<br>') || '' }} />
                  </div>
                  
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Edit Mode */
              <div className="space-y-6">
                {/* Title and Basic Info */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Blog Title *
                      </label>
                      <input
                        type="text"
                        value={blog.title}
                        onChange={(e) => setBlog(prev => ({ ...prev, title: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                        placeholder="Enter your blog title..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        URL Slug
                      </label>
                      <input
                        type="text"
                        value={blog.slug}
                        onChange={(e) => setBlog(prev => ({ ...prev, slug: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="blog-url-slug"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Excerpt
                      </label>
                      <textarea
                        value={blog.excerpt}
                        onChange={(e) => setBlog(prev => ({ ...prev, excerpt: e.target.value }))}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                        placeholder="Brief description of your blog post..."
                      />
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <ImageIcon className="w-5 h-5" />
                    Featured Image
                  </h3>
                  
                  {blog.featuredImage ? (
                    <div className="relative">
                      <img
                        src={blog.featuredImage}
                        alt="Featured"
                        className="w-full h-64 object-cover rounded-xl"
                      />
                      <button
                        onClick={() => setBlog(prev => ({ ...prev, featuredImage: '' }))}
                        className="absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="featured-image"
                        disabled={uploadingImage}
                      />
                      <label
                        htmlFor="featured-image"
                        className="cursor-pointer flex flex-col items-center gap-3"
                      >
                        {uploadingImage ? (
                          <Loader className="w-8 h-8 animate-spin text-blue-600" />
                        ) : (
                          <Upload className="w-8 h-8 text-gray-400" />
                        )}
                        <span className="text-gray-600">
                          {uploadingImage ? 'Uploading...' : 'Click to upload featured image'}
                        </span>
                      </label>
                    </div>
                  )}
                </div>

                {/* Content Editor */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Content *
                  </h3>
                  
                  <textarea
                    value={blog.content}
                    onChange={(e) => setBlog(prev => ({ ...prev, content: e.target.value }))}
                    rows={20}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical font-mono text-sm"
                    placeholder="Write your blog content here... You can use HTML tags for formatting."
                  />
                  
                  <div className="mt-4 text-sm text-gray-500">
                    <p>You can use HTML tags for formatting. Estimated read time: {BlogService.calculateReadTime(blog.content || '')} min</p>
                  </div>
                </div>

                {/* Tabs for Additional Settings */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="border-b border-gray-200">
                    <nav className="flex">
                      {[
                        { id: 'content', label: 'Content Settings', icon: FileText },
                        { id: 'seo', label: 'SEO Settings', icon: Settings },
                        { id: 'settings', label: 'Advanced', icon: Settings }
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id as any)}
                          className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                            activeTab === tab.id
                              ? 'border-blue-500 text-blue-600'
                              : 'border-transparent text-gray-500 hover:text-gray-700'
                          }`}
                        >
                          <tab.icon className="w-4 h-4" />
                          {tab.label}
                        </button>
                      ))}
                    </nav>
                  </div>

                  <div className="p-6">
                    {activeTab === 'content' && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category
                          </label>
                          <select
                            value={blog.category}
                            onChange={(e) => setBlog(prev => ({ ...prev, category: e.target.value }))}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">Select a category</option>
                            {categories.map((category) => (
                              <option key={category} value={category}>
                                {category}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tags
                          </label>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {blog.tags?.map((tag, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                              >
                                <Tag className="w-3 h-3" />
                                {tag}
                                <button
                                  onClick={() => removeTag(tag)}
                                  className="ml-1 hover:text-blue-600"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={newTag}
                              onChange={(e) => setNewTag(e.target.value)}
                              onKeyPress={(e) => e.key === 'Enter' && addTag()}
                              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Add a tag..."
                            />
                            <button
                              onClick={addTag}
                              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'seo' && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Meta Title
                          </label>
                          <input
                            type="text"
                            value={blog.seo?.metaTitle}
                            onChange={(e) => setBlog(prev => ({
                              ...prev,
                              seo: { ...prev.seo!, metaTitle: e.target.value }
                            }))}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="SEO title for search engines..."
                            maxLength={60}
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            {blog.seo?.metaTitle?.length || 0}/60 characters
                          </p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Meta Description
                          </label>
                          <textarea
                            value={blog.seo?.metaDescription}
                            onChange={(e) => setBlog(prev => ({
                              ...prev,
                              seo: { ...prev.seo!, metaDescription: e.target.value }
                            }))}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                            placeholder="Brief description for search engines..."
                            maxLength={160}
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            {blog.seo?.metaDescription?.length || 0}/160 characters
                          </p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            SEO Keywords
                          </label>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {blog.seo?.keywords?.map((keyword, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                              >
                                {keyword}
                                <button
                                  onClick={() => removeKeyword(keyword)}
                                  className="ml-1 hover:text-green-600"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={newKeyword}
                              onChange={(e) => setNewKeyword(e.target.value)}
                              onKeyPress={(e) => e.key === 'Enter' && addKeyword()}
                              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Add SEO keyword..."
                            />
                            <button
                              onClick={addKeyword}
                              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'settings' && (
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Author Name
                          </label>
                          <input
                            type="text"
                            value={blog.author?.name}
                            onChange={(e) => setBlog(prev => ({
                              ...prev,
                              author: { ...prev.author!, name: e.target.value }
                            }))}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Author Email
                          </label>
                          <input
                            type="email"
                            value={blog.author?.email}
                            onChange={(e) => setBlog(prev => ({
                              ...prev,
                              author: { ...prev.author!, email: e.target.value }
                            }))}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Status Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Current Status:</span>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      blog.status === 'published' 
                        ? 'bg-green-100 text-green-800'
                        : blog.status === 'draft'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {blog.status?.charAt(0).toUpperCase() + blog.status?.slice(1)}
                    </span>
                  </div>
                  
                  {blog.status === 'published' && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Published:</span>
                      <span className="text-sm text-gray-900">
                        {new Date().toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Word Count:</span>
                    <span className="text-sm font-medium text-gray-900">
                      {blog.content?.split(/\s+/).length || 0}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Read Time:</span>
                    <span className="text-sm font-medium text-gray-900">
                      {BlogService.calculateReadTime(blog.content || '')} min
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Characters:</span>
                    <span className="text-sm font-medium text-gray-900">
                      {blog.content?.length || 0}
                    </span>
                  </div>
                </div>
              </div>

              {/* SEO Preview */}
              {blog.title && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Preview</h3>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="text-blue-600 text-lg font-medium line-clamp-1">
                      {blog.seo?.metaTitle || blog.title}
                    </div>
                    <div className="text-green-600 text-sm mt-1">
                      chnindia.com/blog/{blog.slug}
                    </div>
                    <div className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {blog.seo?.metaDescription || blog.excerpt || 'No description available'}
                    </div>
                  </div>
                </div>
              )}

              {/* Validation */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Validation</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    {blog.title ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`text-sm ${blog.title ? 'text-green-700' : 'text-red-700'}`}>
                      Title
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {blog.content && blog.content.length > 100 ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-red-500" />
                    )}
                    <span className={`text-sm ${blog.content && blog.content.length > 100 ? 'text-green-700' : 'text-red-700'}`}>
                      Content (min 100 chars)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {blog.featuredImage ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                    )}
                    <span className={`text-sm ${blog.featuredImage ? 'text-green-700' : 'text-yellow-700'}`}>
                      Featured Image
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {blog.excerpt ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                    )}
                    <span className={`text-sm ${blog.excerpt ? 'text-green-700' : 'text-yellow-700'}`}>
                      Excerpt
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;