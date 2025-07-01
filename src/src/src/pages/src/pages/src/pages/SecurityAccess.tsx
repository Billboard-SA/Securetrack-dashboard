import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SecurityAccess() {
  const [micEnabled, setMicEnabled] = useState(false)
  const [camEnabled, setCamEnabled] = useState(false)
  const [lockTriggered, setLockTriggered] = useState(false)

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 space-y-6">
      <h1 className="text-2xl font-bold text-green-400">🔐 Security Control Tools</h1>
      <p className="text-gray-400">Toggle remote access tools and track intervention logs.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Microphone */}
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-md">
          <h2 className="text-lg font-semibold text-white mb-2">🎙 Remote Mic</h2>
          <p className="text-sm text-gray-300 mb-2">Enable audio access on stolen device.</p>
          <Switch
            checked={micEnabled}
            onChange={setMicEnabled}
            className={classNames(
              micEnabled ? 'bg-green-500' : 'bg-gray-700',
              'relative inline-flex h-6 w-11 items-center rounded-full transition'
            )}
          >
            <span
              className={classNames(
                micEnabled ? 'translate-x-6' : 'translate-x-1',
                'inline-block h-4 w-4 transform rounded-full bg-white transition'
              )}
            />
          </Switch>
        </div>

        {/* Camera */}
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-md">
          <h2 className="text-lg font-semibold text-white mb-2">📸 Remote Camera</h2>
          <p className="text-sm text-gray-300 mb-2">Capture visuals from active phone.</p>
          <Switch
            checked={camEnabled}
            onChange={setCamEnabled}
            className={classNames(
              camEnabled ? 'bg-blue-500' : 'bg-gray-700',
              'relative inline-flex h-6 w-11 items-center rounded-full transition'
            )}
          >
            <span
              className={classNames(
                camEnabled ? 'translate-x-6' : 'translate-x-1',
                'inline-block h-4 w-4 transform rounded-full bg-white transition'
              )}
            />
          </Switch>
        </div>

        {/* Lock */}
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-md">
          <h2 className="text-lg font-semibold text-white mb-2">🔒 Remote Lock</h2>
          <p className="text-sm text-gray-300 mb-2">Immediately lock and disable phone.</p>
          <button
            onClick={() => setLockTriggered(true)}
            className="mt-2 py-1 px-4 bg-red-600 hover:bg-red-700 transition rounded text-sm font-medium"
          >
            {lockTriggered ? '✔️ Lock Sent' : 'Trigger Lock'}
          </button>
        </div>
      </div>

      {/* Logs */}
      <div className="mt-6 bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-md">
        <h3 className="font-semibold text-white mb-2 text-sm">📋 Recent Actions</h3>
        <ul className="text-gray-300 text-sm space-y-1">
          {micEnabled && <li>✅ Mic enabled on XA-002</li>}
          {camEnabled && <li>✅ Camera active on XA-002</li>}
          {lockTriggered && <li>🔒 Lock issued to XA-002</li>}
          {!micEnabled && !camEnabled && !lockTriggered && <li>No actions yet.</li>}
        </ul>
      </div>
    </div>
  )
}
