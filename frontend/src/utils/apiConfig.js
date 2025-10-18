// API base URL - automatically uses production URL on Render, localhost for dev
const API_BASE_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.MODE === 'production' 
    ? 'https://ems6-backend.onrender.com' 
    : 'http://localhost:5000');

export default API_BASE_URL;
