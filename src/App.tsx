import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import LiveTracking from './pages/LiveTracking'
import SecurityAccess from './pages/SecurityAccess'
import UserManagement from './pages/UserManagement'
import Analytics from './pages/Analytics'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tracking" element={<LiveTracking />} />
      <Route path="/security" element={<SecurityAccess />} />
      <Route path="/users" element={<UserManagement />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  )
}
