import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PassingProsInJsx from './PassingProsInJsx'
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <PassingProsInJsx/>
  </StrictMode>,
)
