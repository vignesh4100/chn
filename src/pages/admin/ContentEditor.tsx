import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';
import ContentEditor from '../../components/admin/ContentEditor';
import { CMSService } from '../../services/cmsService';
import { ContentType } from '../../types/cms';

const ContentEditorPage: React.FC = () => {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const navigate = useNavigate();
  const { contentType, id } = useParams<{ contentType: ContentType; id?: string }>();

  const service = new CMSService(contentType!);

  useEffect(() => {
    if (id && contentType) {
      loadContent(id);
    } else {
      setPageLoading(false);
    }
  }, [id, contentType]);

  const loadContent = async (contentId: string) => {
    try {
      const item = await service.getById(contentId);
      if (item) {
        setContent(item);
      } else {
        navigate(`/admin/${contentType}`);
      }
    } catch (error) {
      console.error('Error loading content:', error);
      navigate(`/admin/${contentType}`);
    } finally {
      setPageLoading(false);
    }
  };

  const handleSave = async (data: any) => {
    setLoading(true);
    try {
      if (id) {
        await service.update(id, data);
      } else {
        await service.create(data);
      }
      navigate(`/admin/${contentType}`);
    } catch (error) {
      console.error('Error saving content:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate(`/admin/${contentType}`);
  };

  if (pageLoading) {
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
      <ContentEditor
        contentType={contentType!}
        content={content}
        onSave={handleSave}
        onCancel={handleCancel}
        loading={loading}
      />
    </AdminLayout>
  );
};

export default ContentEditorPage;