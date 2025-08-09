import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterApp } from './router/RouterApp'

import "./index.css"
import { UserProvider } from './context/UserContext'

// importacion de estilos
import "./styles/components/Home.css"
import "./styles/components/Header.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterApp />
    </UserProvider>
  </StrictMode>,
)

