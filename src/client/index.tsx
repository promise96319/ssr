import { hydrateRoot } from 'react-dom/client'
import {
  RouterProvider,
  // createHashRouter as createBrowserRouter,
  createBrowserRouter,
} from 'react-router-dom'
import { routes } from '../examples/routes'

hydrateRoot(document, <RouterProvider router={createBrowserRouter(routes)} />)
