import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { uploadToCloudinary } from '../../config/cloudinary';
import { BaseContent, ContentType } from '../../types/cms';
import { 
  Save, 
  Eye, 
  Upload, 
  X, 
  Image as ImageIcon,
  FileText,
  Hash,
  User,
  Globe,
  Calendar,
  Tag,
  MapPin,
  DollarSign,
  Clock,
  Briefcase
} from 'lucide-react';

interface ContentEditorProps {
  contentType: ContentType;
  content?: any;
  onSave: (data: any) => Promise<void>;
  onCancel: () => void;
  loading?: boolean;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ 
  contentType, 
  content, 
  onSave, 
  onCancel, 
  loading = false 
}) => {
  const [formData, setFormData] = useState<any>({});
  const [imageUploading, setImageUploading] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    if (content) {
      setFormData(content);
    } else {
      // Initialize with default values based on content type
      const defaultData: any = {
        title: '',
        slug: '',
        content: '',
        author: '',
        coverImage: '',
        published: false
      };

      if (contentType === 'jobs') {
        defaultData.department = '';
        defaultData.location = '';
        defaultData.jobType = 'full-time';
        defaultData.experience = '';
        defaultData.requirements = [];
        defaultData.active = true;
      } else if (contentType === 'news') {
        defaultData.location = '';
        defaultData.urgent = false;
        defaultData.source = '';
      } else if (contentType === 'articles') {
        defaultData.readTime = 5;
        defaultData.featured = false;
      } else if (contentType === 'blogs') {
        defaultData.excerpt = '';
        defaultData.tags = [];
        defaultData.category = '';
      }

      setFormData(defaultData);
    }
  }, [content, contentType]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setFormData((prev: any) => ({
      ...prev,
      title,
      slug: !content ? generateSlug(title) : prev.slug
    }));
  };

  const handleImageUpload = async (file: File) => {
    setImageUploading(true);
    try {
      const imageUrl = await uploadToCloudinary(file);
      setFormData((prev: any) => ({ ...prev, coverImage: imageUrl }));
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setImageUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content || !formData.author) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      await onSave(formData);
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Failed to save content. Please try again.');
    }
  };

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['link', 'image', 'video'],
      ['clean']
    ]
  };
  
  const quillFormats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'color', 'background',
    'align', 'script'
  ];

  const getContentTypeTitle = () => {
    const titles = {
      blogs: 'Blog Post',
      articles: 'Article',
      news: 'News Post',
      jobs: 'Job Posting'
    };
    return titles[contentType];
  };

  if (previewMode) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Preview Mode</h2>
              <button
                onClick={() => setPreviewMode(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Back to Editor
              </button>
            </div>
          </div>
          
          <article className="p-8">
            {formData.coverImage && (
              <img
                src={formData.coverImage}
                alt={formData.title}
                className="w-full h-64 object-cover rounded-lg mb-8"
              />
            )}
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{formData.title}</h1>
            
            <div className="flex items-center gap-4 text-gray-600 mb-8">
              <span>By {formData.author}</span>
              <span>•</span>
              <span>{new Date().toLocaleDateString()}</span>
              {formData.department && (
                <>
                  <span>•</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                    {formData.department}
                  </span>
                </>
              )}
            </div>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: formData.content }}
            />
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {content ? `Edit ${getContentTypeTitle()}` : `Create New ${getContentTypeTitle()}`}
            </h2>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setPreviewMode(true)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Eye className="w-4 h-4" />
                Preview
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-colors disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                {loading ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>

          {/* Basic Fields */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FileText className="w-4 h-4 inline mr-1" />
                Title *
              </label>
              <input
                type="text"
                value={formData.title || ''}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder={`Enter ${getContentTypeTitle().toLowerCase()} title`}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Hash className="w-4 h-4 inline mr-1" />
                Slug *
              </label>
              <input
                type="text"
                value={formData.slug || ''}
                onChange={(e) => setFormData((prev: any) => ({ ...prev, slug: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="url-friendly-slug"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-1" />
                Author *
              </label>
              <input
                type="text"
                value={formData.author || ''}
                onChange={(e) => setFormData((prev: any) => ({ ...prev, author: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Author name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <ImageIcon className="w-4 h-4 inline mr-1" />
                Cover Image
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
                  className="hidden"
                  id="cover-image"
                />
                <label
                  htmlFor="cover-image"
                  className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  {imageUploading ? 'Uploading...' : 'Upload Image'}
                </label>
                {formData.coverImage && (
                  <img
                    src={formData.coverImage}
                    alt="Cover"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                )}
              </div>
            </div>

            {/* Content-specific fields */}
            {contentType === 'jobs' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Briefcase className="w-4 h-4 inline mr-1" />
                    Department *
                  </label>
                  <input
                    type="text"
                    value={formData.department || ''}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, department: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="e.g., Engineering, Marketing"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Location *
                  </label>
                  <input
                    type="text"
                    value={formData.location || ''}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, location: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="e.g., Remote, New York, Hybrid"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type *
                  </label>
                  <select
                    value={formData.jobType || 'full-time'}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, jobType: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    required
                  >
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Experience Required
                  </label>
                  <input
                    type="text"
                    value={formData.experience || ''}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, experience: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="e.g., 2-5 years, Entry level"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <DollarSign className="w-4 h-4 inline mr-1" />
                    Salary Range
                  </label>
                  <input
                    type="text"
                    value={formData.salary || ''}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, salary: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="e.g., $50,000 - $70,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Application Deadline
                  </label>
                  <input
                    type="date"
                    value={formData.applicationDeadline ? new Date(formData.applicationDeadline).toISOString().split('T')[0] : ''}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, applicationDeadline: e.target.value ? new Date(e.target.value) : null }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </>
            )}

            {contentType === 'news' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location || ''}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, location: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="News location"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Source
                  </label>
                  <input
                    type="text"
                    value={formData.source || ''}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, source: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="News source"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="urgent"
                    checked={formData.urgent || false}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, urgent: e.target.checked }))}
                    className="mr-2"
                  />
                  <label htmlFor="urgent" className="text-sm font-medium text-gray-700">
                    Mark as Urgent
                  </label>
                </div>
              </>
            )}

            {contentType === 'articles' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Read Time (minutes)
                  </label>
                  <input
                    type="number"
                    value={formData.readTime || 5}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, readTime: parseInt(e.target.value) }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    min="1"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured || false}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, featured: e.target.checked }))}
                    className="mr-2"
                  />
                  <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                    Featured Article
                  </label>
                </div>
              </>
            )}

            {contentType === 'blogs' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <input
                    type="text"
                    value={formData.category || ''}
                    onChange={(e) => setFormData((prev: any) => ({ ...prev, category: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Blog category"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Tag className="w-4 h-4 inline mr-1" />
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    value={formData.tags ? formData.tags.join(', ') : ''}
                    onChange={(e) => setFormData((prev: any) => ({ 
                      ...prev, 
                      tags: e.target.value.split(',').map((tag: string) => tag.trim()).filter(Boolean)
                    }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="technology, web development, react"
                  />
                </div>
              </>
            )}

            {/* Published Status */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="published"
                checked={formData.published || false}
                onChange={(e) => setFormData((prev: any) => ({ ...prev, published: e.target.checked }))}
                className="mr-2"
              />
              <label htmlFor="published" className="text-sm font-medium text-gray-700">
                {contentType === 'jobs' ? 'Active Job Posting' : 'Published'}
              </label>
            </div>
          </div>
        </div>

        {/* Content Editor */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Content *
          </label>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <ReactQuill
              theme="snow"
              value={formData.content || ''}
              onChange={(content) => setFormData((prev: any) => ({ ...prev, content }))}
              modules={quillModules}
              formats={quillFormats}
              style={{ minHeight: '400px' }}
            />
          </div>
        </div>

        {/* Job-specific fields */}
        {contentType === 'jobs' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Requirements</h3>
            <textarea
              value={formData.requirements ? formData.requirements.join('\n') : ''}
              onChange={(e) => setFormData((prev: any) => ({ 
                ...prev, 
                requirements: e.target.value.split('\n').filter(Boolean)
              }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              rows={6}
              placeholder="Enter each requirement on a new line"
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default ContentEditor;