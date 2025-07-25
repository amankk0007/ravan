// API Configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://bioping-backend.onrender.com/api';
export const ADMIN_API_BASE_URL = process.env.REACT_APP_ADMIN_API_URL || 'https://bioping-backend.onrender.com/api';

// Environment check
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production'; 