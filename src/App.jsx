import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import Header from './components/Header'
import BooksDashboard from './components/BooksDashboard'
import GoogleBooks from './components/GoogleBooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <BooksDashboard/>
     <GoogleBooks/>
    </>
  )
}

export default App
