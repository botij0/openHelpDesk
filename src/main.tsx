import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import OpenHelpDeskApp from './OpenHelpDeskApp.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OpenHelpDeskApp />
  </StrictMode>,
)
