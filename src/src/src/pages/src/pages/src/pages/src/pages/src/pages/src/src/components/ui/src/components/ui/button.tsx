import { ButtonHTMLAttributes } from 'react'

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-1.5 px-4 rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
    />
  )
}
