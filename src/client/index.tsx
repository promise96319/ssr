import { hydrateRoot } from 'react-dom/client'
import { App } from '../examples'

hydrateRoot(document.getElementById('root') as HTMLElement, <App />)
