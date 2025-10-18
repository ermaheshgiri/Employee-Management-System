# Render Environment Variables Setup

## Backend (Web Service)

Set these environment variables in your Render backend service:

```
NODE_VERSION=20
PORT=5000
MONGODB_URI=your_mongodb_connection_string_here
JWT_SECRET=your_secure_jwt_secret_here
```

## Frontend (Static Site)

Set these environment variables in your Render frontend static site:

```
NODE_VERSION=20
VITE_API_URL=https://ems6-backend.onrender.com
```

**Important**: Replace `ems6-backend.onrender.com` with your actual backend service URL.

## CORS Configuration

Update your backend `server/index.js` to allow your frontend domain:

```javascript
import cors from 'cors'

app.use(cors({
  origin: [
    'http://localhost:5173',  // Local development
    'https://your-frontend-app.onrender.com'  // Production frontend
  ],
  credentials: true
}));
```

## Quick Deploy Checklist

### Backend:
- [ ] Set all environment variables
- [ ] Clear build cache
- [ ] Verify MongoDB connection string is correct
- [ ] Deploy using `node index.js` as start command

### Frontend:
- [ ] Set `NODE_VERSION=20`
- [ ] Set `VITE_API_URL` to your backend URL
- [ ] Clear build cache
- [ ] Deploy with build command: `npm ci && node ./node_modules/vite/bin/vite.js build`
- [ ] Publish directory: `dist`

### After Deploy:
- [ ] Test login functionality
- [ ] Check browser console for any 404/CORS errors
- [ ] Verify images load correctly (if using file uploads)
- [ ] Test all CRUD operations

## Troubleshooting

### Still getting 404 errors?
1. Check that backend service is actually running (not sleeping)
2. Verify `VITE_API_URL` is set correctly in frontend environment
3. Check browser Network tab to see what URL is being called
4. Ensure backend CORS allows your frontend domain

### CORS errors?
1. Update backend `cors()` configuration with frontend URL
2. Restart backend service after changing CORS settings
3. Clear browser cache

### Build fails?
1. Clear Render build cache
2. Ensure Node version is 20 (not 21 or 22)
3. Check all import paths use correct casing
4. Verify all dependencies are in package.json
