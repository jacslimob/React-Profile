// import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
// pages
import AboutMe from './pages/AboutMe.jsx'
import Resume from './pages/Resume.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
     {
      index: true,
      element: <AboutMe />
     },
     {
      path: 'portfolio',
      element : <Portfolio />
     },
     {
      path: 'contact',
      element: <Contact />
     },
     {
      path: 'resume',
      element: <Resume />
     }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
