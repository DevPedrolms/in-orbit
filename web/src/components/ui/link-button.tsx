import type React from 'react'

// Defirnir props (funções / argumentos aceitados) esperadas para o componente LinkButton
interface LinkButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export function LinkButton({ children, onClick }: LinkButtonProps) {
  return (
    <button
      type="button"
      className="text-zinc-500 underline hover:text-zinc-700 focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
