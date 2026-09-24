'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function BackToTerminal() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function goToTerminal() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // Focus l'input après le scroll
    setTimeout(() => {
      const input = document.querySelector<HTMLInputElement>(
        'input[aria-label="Terminal input"]'
      )
      input?.focus()
    }, 700)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          onClick={goToTerminal}
          className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-surface/90 backdrop-blur-md font-mono text-xs text-muted hover:text-accent hover:border-accent/50 transition-colors shadow-lg"
          aria-label="Retour au terminal"
        >
          <span className="text-accent">$</span>
          <span>cd ~/terminal</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}