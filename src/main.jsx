import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterApp } from './router/RouterApp'

import { UserProvider } from './context/UserContext'

// importacion de estilos
import "./styles/pages/Home.css"
import "./styles/components/Header.css"
import "./styles/pages/Register.css"
import "./styles/pages/Login.css"
import "./styles/components/Footer.css"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RouterApp />
    </UserProvider>
  </StrictMode>,
)

