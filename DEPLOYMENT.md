# EMS6 - Employee Management System

## Deployment Fixes Applied

### Backend (Server)
- ✅ Replaced native `bcrypt` with `bcryptjs` to avoid binary compatibility issues
- ✅ Added Node engine constraint: `"engines": { "node": ">=18 <22" }`
- ✅ Added production start script: `npm run start:prod` (uses `node index.js`)
- ✅ Updated `.gitignore` to exclude `node_modules/` and `public/uploads/`

### Frontend
- ✅ Fixed Vite permission issues: build script now uses `node ./node_modules/vite/bin/vite.js build`
- ✅ Fixed case-sensitive import paths for `AuthContext.jsx` (Linux compatibility)
- ✅ Added environment-aware API configuration (`src/utils/apiConfig.js`)
- ✅ Updated API calls to use dynamic base URL for production/development

## Environment Setup

### Backend Environment Variables
Create `.env` file in `/server`:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend Environment Variables (Optional)
Create `.env` file in `/frontend`:
```
VITE_API_URL=https://ems6-backend.onrender.com
```

## Local Development

### Server
```bash
cd server
npm install
npm start          # Development (uses nodemon)
npm run start:prod # Production
```

### Frontend
```bash
cd frontend
npm install
npm run dev   # Development server
npm run build # Production build
```

## Render Deployment

### Backend (Web Service)
- **Build Command**: `npm ci`
- **Start Command**: `node index.js`
- **Root Directory**: `server`
- **Environment**: Set `NODE_VERSION=20`

### Frontend (Static Site)
- **Build Command**: `npm ci && node ./node_modules/vite/bin/vite.js build`
- **Publish Directory**: `dist`
- **Root Directory**: `frontend`
- **Environment**: Set `NODE_VERSION=20` and `VITE_API_URL=https://ems6-backend.onrender.com`

### Using render.yaml (Recommended)
The repo includes a `render.yaml` file that automatically configures both services. Simply:
1. Connect your repo to Render
2. Select "Blueprint" deployment
3. Render will create both services automatically

## API Base URL Logic
The frontend automatically detects the environment:
- **Production**: Uses `https://ems6-backend.onrender.com`
- **Development**: Uses `http://localhost:5000`
- **Custom**: Set `VITE_API_URL` environment variable to override

## Troubleshooting

### Build Errors on Render
- Clear build cache before redeploying
- Ensure Node version is set to 20 (not 21 or 22)
- Check that all import paths use correct casing

### 404 Errors in Production
- Verify backend service is running on Render
- Check CORS configuration in server allows frontend domain
- Ensure frontend environment has correct `VITE_API_URL`

### CORS Issues
Add your frontend domain to CORS whitelist in `server/index.js`:
```javascript
app.use(cors({
  origin: ['http://localhost:5173', 'https://your-frontend.onrender.com']
}));
```
