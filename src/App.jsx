import { Route, Routes } from 'react-router-dom'
import './App.css'
import NotFound from './Pages/Common/NotFound';
import Navbar from './Components/Common/Navbar';
import LandingPage from './Pages/Main/LandingPage';
import ProjectDetails from './Components/Main/ProjectDetails';
import AboutSection from './Components/Main/AboutSection';
import ProjectsSection from './Components/Main/ProjectSection';
import ContactMe from './Components/Main/ContactSection';
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<LandingPage/>}/>
        <Route path='/about' element={<AboutSection/>}/>
        <Route path='/projects' element={<ProjectsSection/>}/>
        <Route path='/contact' element={<ContactMe/>}/>
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
