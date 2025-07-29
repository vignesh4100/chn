import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';
import BlogEditor from '../../components/admin/BlogEditor';
import { getBlogPostById, updateBlogPost } from '../../services/blogService';
import { BlogPost } from '../../types/blog';

const EditPost: React.FC = () => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      loadPost(id);
    }
  }, [id]);

  const loadPost = async (postId: string) => {
    try {
      const blogPost = await getBlogPostById(postId);
      if (blogPost) {
        setPost(blogPost);
      } else {
        navigate('/admin');
      }
    } catch (error) {
      console.error('Error loading post:', error);
      navigate('/admin');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (postData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (!id) return;
    
    try {
      await updateBlogPost(id, postData);
      navigate('/admin');
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  };

  const handleCancel = () => {
    navigate('/admin');
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

  if (!post) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h2>
          <button
            onClick={() => navigate('/admin')}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg"
          >
            Back to Dashboard
          </button>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <BlogEditor
        post={post}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </AdminLayout>
  );
};

export default EditPost;