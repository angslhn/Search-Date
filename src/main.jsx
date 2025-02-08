import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './pages/main'

createRoot(document.getElementById('search-date-app')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
