import type { RouteObject } from 'react-router-dom'
import { AAA } from './a'
import { App } from './app'
import { BBB } from './b'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: 'a',
        element: <AAA></AAA>,
      },
      {
        path: 'b',
        element: <BBB></BBB>,
      },
    ],
  },
]
