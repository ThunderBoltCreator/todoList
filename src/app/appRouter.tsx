import {baseLayout} from 'app/layouts/baseLayout.tsx'
import {Home} from 'pages/home/Home.tsx'
import {createBrowserRouter} from 'react-router-dom'

export function appRouter() {
  return createBrowserRouter([
    {
      path: '/',
      element: baseLayout,
      errorElement: <div><strong>404 NOT FOUND</strong></div>,
      children: [
        {
          path: 'home',
          element: <Home />
        }
      ]
    }
  ])
}