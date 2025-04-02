import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import './App.css'
import Header from './components/Header'
import BooksDashboard from './components/BooksDashboard'
import GoogleBooks from './components/GoogleBooks'
import ErrorPage from './components/ErrorPage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import BookDetails from './components/BookDetails'
const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  )
};

const appRouter = createBrowserRouter([
  {
    path : '/',
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <BooksDashboard/>
      },
      {
        path:"/google-books",
        element: <GoogleBooks/>
      },
      {
        path:"/about-us",
        element: <AboutUs/>
      },
      {
        path:"/contact-us",
        element: <ContactUs/>
      },
      {
        path:"/book-details/:bookId",
        element:<BookDetails/>
      }
    ],
    errorElement: <ErrorPage/>
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={appRouter}> </RouterProvider>
  )
}

export default App
