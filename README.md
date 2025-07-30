# CHN Technologies Blog Admin Panel

## Firebase Hosting Setup

### Prerequisites
1. Install Firebase CLI globally:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

### Deployment Steps

1. **Initialize Firebase Project** (if not already done):
   ```bash
   firebase init hosting
   ```
   - Select your Firebase project
   - Set public directory to `dist`
   - Configure as single-page app: Yes
   - Don't overwrite index.html: No

2. **Update Project ID**:
   - Edit `.firebaserc` and replace `"your-project-id"` with your actual Firebase project ID

3. **Build and Deploy**:
   ```bash
   npm run deploy
   ```
   
   Or deploy only hosting:
   ```bash
   npm run deploy:hosting
   ```

4. **Quick Deploy** (after initial setup):
   ```bash
   firebase deploy --only hosting
   ```

### Firebase Project Configuration

Make sure your Firebase project has:
- ✅ Hosting enabled
- ✅ Firestore Database enabled (for blog/CMS functionality)
- ✅ Authentication enabled (for admin access)
- ✅ Storage enabled (if using file uploads)

### Custom Domain (Optional)

To add a custom domain:
1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the DNS configuration steps

### Environment Variables

For production deployment, make sure to:
1. Update `src/config/firebase.ts` with your production Firebase config
2. Update `src/config/cloudinary.ts` with your production Cloudinary settings

## Setup Instructions

### 1. Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing one
3. Enable Firestore Database
4. Enable Authentication (optional, for admin access)
5. Get your Firebase config and update `src/config/firebase.ts`

### 2. Cloudinary Configuration

1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Get your cloud name, API key, and API secret
3. Create an upload preset named `blog-images` in your Cloudinary dashboard:
   - Go to Settings > Upload
   - Add upload preset
   - Set preset name to `blog-images`
   - Set signing mode to "Unsigned"
   - Configure folder and other settings as needed
4. Update `src/config/cloudinary.ts` with your credentials

### 3. Firestore Security Rules

Add these security rules to your Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Blog posts
    match /blogs/{document} {
      allow read: if request.auth != null; // Authenticated read access
      allow write: if request.auth != null; // Authenticated write access
    }
    
    // Blog categories
    match /blog_categories/{document} {
      allow read: if request.auth != null; // Authenticated read access
      allow write: if request.auth != null; // Authenticated write access
    }
    
    // Articles
    match /articles/{document} {
      allow read: if request.auth != null; // Authenticated read access
      allow write: if request.auth != null; // Authenticated write access
    }
    
    // Job postings
    match /jobs/{document} {
      allow read: if request.auth != null; // Authenticated read access
      allow write: if request.auth != null; // Authenticated write access
    }
  }
}
```

### 4. Environment Variables (Optional)

Create a `.env` file in your project root:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your_app_id

VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_API_KEY=your_api_key
VITE_CLOUDINARY_UPLOAD_PRESET=blog-images
```

### 5. Access the Admin Panel

Navigate to `/admin/blogs` to access the blog management interface.

## Features

- ✅ Create, edit, and delete blog posts
- ✅ Rich text content editing
- ✅ Image upload via Cloudinary
- ✅ SEO optimization fields
- ✅ Category and tag management
- ✅ Draft and publish workflow
- ✅ Blog statistics dashboard
- ✅ Search and filtering
- ✅ Responsive design
- ✅ Preview mode
- ✅ Bulk operations

## Blog Post Structure

Each blog post includes:
- Title and URL slug
- Featured image
- Content (supports HTML)
- Excerpt
- Author information
- Category and tags
- SEO metadata
- Publication status
- Analytics (views, likes)

## Usage

1. **Creating a Blog Post:**
   - Click "New Blog Post"
   - Fill in the required fields
   - Upload a featured image
   - Write your content
   - Add SEO information
   - Save as draft or publish

2. **Managing Posts:**
   - View all posts in the list
   - Filter by status or category
   - Search by title or content
   - Edit existing posts
   - Delete posts (with confirmation)

3. **SEO Optimization:**
   - Meta title and description
   - Keywords
   - URL slug optimization
   - Preview how it appears in search results

## Customization

The blog system is designed to match your website's design structure with:
- Consistent color scheme (cyan/blue gradients)
- Modern card-based layouts
- Responsive design
- Smooth animations and transitions
- Professional typography

## Security Notes

- Implement proper authentication for admin access
- Use Firestore security rules to protect data
- Validate and sanitize user inputs
- Consider implementing role-based access control