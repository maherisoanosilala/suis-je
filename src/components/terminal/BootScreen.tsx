'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { VscTerminalBash } from 'react-icons/vsc'
import { HiOutlineLockClosed } from 'react-icons/hi'

interface BootScreenProps {
  onStart: () => void
}

const BOOT_LINES = [
  '> portfolio.exe',
  '> initializing …',
  '> ready.',
]

export function BootScreen({ onStart }: BootScreenProps) {
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [bootDone, setBootDone] = useState(false)

  // Séquence de boot ligne par ligne
  useEffect(() => {
    let cancelled = false
    let i = 0
    const timer = setInterval(() => {
      if (cancelled) return
      if (i >= BOOT_LINES.length) {
        clearInterval(timer)
        setBootDone(true)
        return
      }
      setVisibleLines((prev) => [...prev, BOOT_LINES[i]])
      i++
    }, 400)

    return () => {
      cancelled = true
      clearInterval(timer)
    }
  }, [])

  // Lancer avec Entrée
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Enter' && bootDone) {
        onStart()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [bootDone, onStart])

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-6 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {/* Halo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(126,231,135,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="w-full max-w-xl relative">
        <div className="rounded-xl border border-border bg-surface terminal-glow overflow-hidden">
          {/* Header "portail" — pas de faux boutons, un vrai label */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-bg">
            <div className="flex items-center gap-2 text-accent">
              <HiOutlineLockClosed size={13} />
              <span className="font-mono text-[11px] tracking-wider uppercase text-accent/80">
                secure access
              </span>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <VscTerminalBash size={13} className="text-muted/60" />
              <span className="font-mono text-[11px] text-muted/70">
                arthur@portfolio
              </span>
            </div>
          </div>

          {/* Boot lines */}
          <div className="font-mono text-sm p-6 h-50 flex flex-col justify-between">
            <div className="space-y-1">
              {visibleLines.map((line, i) => (
                <div key={i} className="text-fg/80">
                  {line}
                </div>
              ))}
              {!bootDone && (
                <span className="inline-block w-2 h-4 bg-accent align-middle animate-pulse" />
              )}
            </div>

            {/* Bouton "Lancer" */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{
                opacity: bootDone ? 1 : 0,
                y: bootDone ? 0 : 6,
              }}
              transition={{ duration: 0.4 }}
              className="pt-4"
            >
              <button
                onClick={onStart}
                className="group flex items-center gap-3 w-full px-4 py-3 rounded-md border border-border bg-bg hover:border-accent/60 hover:bg-surface transition-colors"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded border border-border text-accent text-xs group-hover:border-accent/60 transition-colors">
                  ▶
                </span>
                <span className="font-mono text-sm text-fg group-hover:text-accent transition-colors">
                  exécuter le terminal
                </span>
                <span className="ml-auto font-mono text-[10px] text-muted border border-border rounded px-1.5 py-0.5">
                  ⏎ Enter
                </span>
              </button>
            </motion.div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted/70 font-mono">
          # ou appuie simplement sur Entrée
        </p>
      </div>
    </motion.section>
  )
}