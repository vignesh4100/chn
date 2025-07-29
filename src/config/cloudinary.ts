export const cloudinaryConfig = {
  cloudName: 'dprredz2j', // Replace with your Cloudinary cloud name
  apiKey: '653631547718184', // Replace with your Cloudinary API key
  apiSecret: 'bH2QScCuk_MSwbxg7xXWqLtq8B0', // Replace with your Cloudinary API secret
  uploadPreset: 'blog-images' // Create this preset in your Cloudinary dashboard
};

export const uploadToCloudinary = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', cloudinaryConfig.uploadPreset);
  formData.append('cloud_name', cloudinaryConfig.cloudName);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};