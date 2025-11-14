import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Homepage from './pages/Homepage'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
