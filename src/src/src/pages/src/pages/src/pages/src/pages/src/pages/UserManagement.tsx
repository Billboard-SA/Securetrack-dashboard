export default function UserManagement() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-2xl font-bold text-orange-400 mb-4">👥 User Management</h1>

      <div className="bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm">
        <p className="text-sm text-gray-300 mb-2">
          Here you’ll be able to manage trial requests, activate subscription plans, and onboard new investigators or admins.
        </p>

        <ul className="text-sm text-gray-400 space-y-2 mt-4">
          <li>👤 Trial request from <strong>user@domain.com</strong> — Pending approval</li>
          <li>✅ <strong>jane.smith@securemail.com</strong> upgraded to Premium</li>
          <li>🚫 <strong>temp-user01</strong> subscription expired</li>
        </ul>
      </div>

      <footer className="text-xs text-center text-gray-500 mt-8">
        Placeholder UI — backend integration coming soon.
      </footer>
    </div>
  )
}
