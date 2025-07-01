import { ReactNode } from 'react'

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white/5 rounded-lg shadow-md border border-white/10 backdrop-blur-md">
      {children}
    </div>
  )
}

export function CardContent({ children }: { children: ReactNode }) {
  return (
    <div className="p-4">
      {children}
    </div>
  )
}
