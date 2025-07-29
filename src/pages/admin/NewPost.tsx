import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';
import BlogEditor from '../../components/admin/BlogEditor';
import { createBlogPost } from '../../services/blogService';
import { BlogPost } from '../../types/blog';

const NewPost: React.FC = () => {
  const navigate = useNavigate();

  const handleSave = async (postData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      await createBlogPost(postData);
      navigate('/admin');
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  };

  const handleCancel = () => {
    navigate('/admin');
  };

  return (
    <AdminLayout>
      <BlogEditor
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </AdminLayout>
  );
};

export default NewPost;