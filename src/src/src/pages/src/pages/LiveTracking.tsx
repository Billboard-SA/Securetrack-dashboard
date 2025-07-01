import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'

// Custom pulse icon
const deviceIcon = new L.DivIcon({
  className: 'custom-icon',
  html: `<div class='relative'>
    <div class='absolute w-6 h-6 bg-cyan-400 opacity-75 rounded-full animate-ping'></div>
    <div class='w-3 h-3 bg-cyan-500 rounded-full z-10'></div>
  </div>`,
  iconSize: [0, 0],
})

const mockDevices = [
  { id: 'XA-001', lat: -33.9249, lng: 18.4241, status: 'Active' },
  { id: 'XA-002', lat: -26.2041, lng: 28.0473, status: 'Idle' }
]

export default function LiveTracking() {
  const [devices, setDevices] = useState(mockDevices)

  useEffect(() => {
    const interval = setInterval(() => {
      setDevices(devices => devices.map(d => ({
        ...d,
        lat: d.lat + (Math.random() - 0.5) * 0.01,
        lng: d.lng + (Math.random() - 0.5) * 0.01,
      })))
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4">
      <h2 className="text-2xl font-semibold text-cyan-400 mb-4">📍 Live Device Tracking</h2>
      <div className="w-full h-[600px] rounded-xl overflow-hidden">
        <MapContainer center={[-30.5595, 22.9375]} zoom={5} scrollWheelZoom style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {devices.map(device => (
            <Marker key={device.id} position={[device.lat, device.lng]} icon={deviceIcon}>
              <Popup>
                <p className="font-semibold">{device.id}</p>
                <p>Status: {device.status}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  )
}
