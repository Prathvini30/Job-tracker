import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Analytics from './pages/Analytics'
import LandingPage from './components/LandingPage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import UpdateJob from './pages/UpdateJob'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/analytics" element={<Analytics />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/jobs/:id/edit" element={<UpdateJob/>} />
      </Routes>
    </>
  )
}

export default App
