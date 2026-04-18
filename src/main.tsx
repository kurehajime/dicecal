import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LiquidGlassProvider } from '@mael-667/liquid-glass-react'
import '@fontsource/archivo-black/400.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LiquidGlassProvider>
      <App />
    </LiquidGlassProvider>
  </StrictMode>,
)
