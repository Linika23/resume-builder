import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar.jsx'
import LandingPage from './pages/LandingPage.jsx'
import ResumeBuilder from './pages/ResumeBuilder.jsx'
import ResumePreview from './pages/ResumePreview.jsx'

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#14142a',
            color: '#f0f0f8',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '12px',
            fontSize: '0.9rem',
          },
          success: {
            iconTheme: { primary: '#34d399', secondary: '#14142a' },
          },
          error: {
            iconTheme: { primary: '#f87171', secondary: '#14142a' },
          },
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/builder" element={<ResumeBuilder />} />
        <Route path="/preview" element={<ResumePreview />} />
      </Routes>
    </>
  )
}

export default App
