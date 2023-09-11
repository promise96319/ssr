import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
  // createHashRouter as createBrowserRouter,
  createBrowserRouter,
} from 'react-router-dom'
import { routes } from './routes'

createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={createBrowserRouter(routes)} />)
