import { hydrateRoot } from 'react-dom/client'
import {
  RouterProvider,
  // createHashRouter as createBrowserRouter,
  createBrowserRouter,
} from 'react-router-dom'
import { routes } from '../examples/routes'

hydrateRoot(document.getElementById('root') as HTMLElement, <RouterProvider router={createBrowserRouter(routes)} />)
