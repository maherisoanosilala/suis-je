'use client'

import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
  VscTerminalBash,
} from 'react-icons/vsc'
import { HiOutlineStatusOnline } from 'react-icons/hi'

interface TerminalTitleBarProps {
  user?: string
  onMinimize?: () => void
  onMaximize?: () => void
  onClose?: () => void
}

const BUTTONS = [
  {
    key: 'close' as const,
    color: '#ff5f57',
    ring: 'ring-[#ff5f57]/30',
    Icon: VscChromeClose,
    label: 'Fermer',
    hint: 'Fermer (exit)',
  },
  {
    key: 'min' as const,
    color: '#febc2e',
    ring: 'ring-[#febc2e]/30',
    Icon: VscChromeMinimize,
    label: 'Réduire',
    hint: 'Réduire',
  },
  {
    key: 'max' as const,
    color: '#28c840',
    ring: 'ring-[#28c840]/30',
    Icon: VscChromeMaximize,
    label: 'Agrandir',
    hint: 'Agrandir',
  },
]

export function TerminalTitleBar({
  user = 'arthur@portfolio',
  onMinimize,
  onMaximize,
  onClose,
}: TerminalTitleBarProps) {
  const handlers = {
    close: onClose,
    min: onMinimize,
    max: onMaximize,
  }

  return (
    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg select-none">
      {/* Boutons macOS */}
      <div className="flex items-center gap-2.5">
        {BUTTONS.map(({ key, color, ring, Icon, label, hint }) => (
          <button
            key={key}
            onClick={handlers[key]}
            className={`group relative w-3.5 h-3.5 rounded-full flex items-center justify-center transition-shadow hover:ring-2 ${ring}`}
            style={{ backgroundColor: color }}
            aria-label={label}
            title={hint}
          >
            <Icon
              size={10}
              className="text-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </button>
        ))}
      </div>

      {/* Titre + icône terminal */}
      <div className="flex items-center gap-2 ml-4">
        <VscTerminalBash size={14} className="text-accent" />
        <span className="font-mono text-xs text-muted">
          {user} <span className="text-muted/50">—</span>{' '}
          <span className="text-fg/70">zsh</span>
        </span>
      </div>

      {/* Statut à droite */}
      <div className="ml-auto flex items-center gap-1.5">
        <span className="relative flex items-center justify-center w-2 h-2">
          <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-40" />
          <span className="relative w-1.5 h-1.5 rounded-full bg-accent" />
        </span>
        <span className="font-mono text-[10px] text-muted/70 tracking-wide">
          online
        </span>
      </div>
    </div>
  )
}