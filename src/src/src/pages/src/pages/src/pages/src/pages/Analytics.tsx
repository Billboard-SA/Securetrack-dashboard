import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const deviceStatus = [
  { name: 'Active', value: 8 },
  { name: 'Idle', value: 3 },
  { name: 'Offline', value: 1 },
]

const activityData = [
  { time: '10:00', active: 6 },
  { time: '11:00', active: 8 },
  { time: '12:00', active: 9 },
  { time: '13:00', active: 7 },
  { time: '14:00', active: 8 },
]

const COLORS = ['#00F7FF', '#F472B6', '#475569']

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 space-y-6">
      <h1 className="text-2xl font-bold text-cyan-400">📊 Device Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm">
          <h2 className="text-lg mb-2 font-semibold text-white">Active Devices (Last 5 Hours)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={activityData}>
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="active"
                stroke="#00F7FF"
                strokeWidth={3}
                dot={{ r: 4, stroke: '#00F7FF', fill: '#0F172A' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm">
          <h2 className="text-lg mb-2 font-semibold text-white">Status Breakdown</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={deviceStatus} cx="50%" cy="50%" label outerRadius={80} fill="#00F7FF" dataKey="value">
                {deviceStatus.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Event Feed */}
      <div className="bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm">
        <h2 className="text-lg mb-2 font-semibold text-white">🔔 System Logs</h2>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>📍 XA-002 exited geofence - 14:03</li>
          <li>🔒 Remote Lock sent to XA-005 - 13:45</li>
          <li>🔋 XA-008 battery below 10% - 13:15</li>
        </ul>
      </div>
    </div>
  )
}
