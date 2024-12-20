import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './store/auth'
import { ToastContainer, toast } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <App />
      <ToastContainer
        autoClose={1500}
        theme="colored"
      />
    </StrictMode>,
  </AuthProvider>
)


