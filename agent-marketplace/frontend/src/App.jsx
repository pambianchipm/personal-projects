import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import AgentDetail from './pages/AgentDetail'
import Chat from './pages/Chat'
import CreateAgent from './pages/CreateAgent'
import EditAgent from './pages/EditAgent'
import Dashboard from './pages/Dashboard'
import LoginRegister from './pages/LoginRegister'
import Profile from './pages/Profile'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/agents/:id" element={<AgentDetail />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/profile/:username" element={<Profile />} />

        {/* Protected routes */}
        <Route path="/chat/:conversationId" element={
          <ProtectedRoute><Chat /></ProtectedRoute>
        } />
        <Route path="/create" element={
          <ProtectedRoute><CreateAgent /></ProtectedRoute>
        } />
        <Route path="/agents/:id/edit" element={
          <ProtectedRoute><EditAgent /></ProtectedRoute>
        } />
        <Route path="/dashboard" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        } />
      </Routes>
    </>
  )
}
