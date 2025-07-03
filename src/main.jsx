import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ✅ AOS for subtle scroll animations
import AOS from 'aos'
import 'aos/dist/aos.css'

// ✅ This helper component will run AOS.init() when app mounts
function Main() {
  useEffect(() => {
    AOS.init({
      duration: 800, // fade duration
      once: true,    // only animate once
    })
  }, [])

  return <App />
}

// ✅ Render the app with StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
