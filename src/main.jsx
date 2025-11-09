import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from "react-router/dom";
import AuthProvider from './AuthContext/AuthProvider.jsx';
import './index.css';
import router from './Routes/Routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
    
  </StrictMode>,
)
