import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, ShieldCheck, UserCog, BarChart3 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      <header className="text-3xl font-bold text-center mb-6 text-cyan-400">
        SecureTrack SA - Admin Dashboard
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex flex-col items-center p-4">
            <MapPin className="w-8 h-8 text-blue-400" />
            <h3 className="font-semibold text-lg mt-2">Live Tracking</h3>
            <p className="text-sm text-gray-400 text-center">Realtime location of all tracked devices</p>
            <Button className="mt-4" onClick={() => navigate('/tracking')}>View Map</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center p-4">
            <ShieldCheck className="w-8 h-8 text-green-400" />
            <h3 className="font-semibold text-lg mt-2">Security Tools</h3>
            <p className="text-sm text-gray-400 text-center">Control camera, mic, and phone lock</p>
            <Button className="mt-4" onClick={() => navigate('/security')}>Access Panel</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center p-4">
            <UserCog className="w-8 h-8 text-orange-400" />
            <h3 className="font-semibold text-lg mt-2">User Management</h3>
            <p className="text-sm text-gray-400 text-center">Manage subscriptions and trial requests</p>
            <Button className="mt-4" onClick={() => navigate('/users')}>Manage Users</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center p-4">
            <BarChart3 className="w-8 h-8 text-pink-400" />
            <h3 className="font-semibold text-lg mt-2">Analytics</h3>
            <p className="text-sm text-gray-400 text-center">Device stats, alerts, and reports</p>
            <Button className="mt-4" onClick={() => navigate('/analytics')}>View Stats</Button>
          </CardContent>
        </Card>
      </div>

      <footer className="text-center text-sm mt-8 text-gray-500">
        SecureTrack SA © 2025
      </footer>
    </div>
  )
}
