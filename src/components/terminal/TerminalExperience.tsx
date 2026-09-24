'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BootScreen } from './BootScreen'
import { TerminalHero } from './TerminalHero'

export function TerminalExperience() {
  const [started, setStarted] = useState(false)

  return (
    <AnimatePresence mode="wait">
      {!started ? (
        <BootScreen key="boot" onStart={() => setStarted(true)} />
      ) : (
        <motion.div
          key="terminal"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <TerminalHero onExit={() => setStarted(false)} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}