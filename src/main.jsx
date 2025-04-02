import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router';
import GoogleBooks from './components/GoogleBooks.jsx';


createRoot(document.getElementById('root')).render(
 <App />
)

