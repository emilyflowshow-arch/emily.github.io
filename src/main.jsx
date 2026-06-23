import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HennaPage from './pages/Henna.jsx'
import HowToChoosePage from './pages/articles/HowToChoose.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/חינה" element={<HennaPage />} />
        <Route path="/חינה/איך-לבחור" element={<HowToChoosePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
