import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import Statistics from './components/Statistics'
import Apply from './components/Apply'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
      path: '/',
      element: <Home/>,
      },
      {
      path: 'statistic',
      element: <Statistics/>,
      },
      {
      path: 'apply',
      element: <Apply/>,
      },
      {
      path: 'blog',
      element: <Blog/>,
      },
  ],
},

])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
