'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BootScreen } from './BootScreen'
import { TerminalHero } from './TerminalHero'
import { About } from '../sections/About'
import { Missions } from '../sections/Mission'
import { Stack } from '../sections/Stack'
import { Contact } from '../sections/Contact'
import { TerminalHeader } from './TerminalHeader'
import { ScrollProgress } from '../ui/ScrollProgress'
import { BackToTerminal } from '../ui/BackToTerminal'

export function TerminalExperience() {
  const [started, setStarted] = useState(false)

  return (
    <AnimatePresence mode="wait">
      {!started ? (
        <BootScreen key="boot" onStart={() => setStarted(true)} />
      ) : (
        <motion.div
          key="site"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {/* Barre de progression + bouton retour uniquement quand on est "dedans" */}
          <ScrollProgress />
          <BackToTerminal />

          <main className="font-sans">
            <TerminalHero onExit={() => setStarted(false)} />

            <About />
            <Missions />
            <Stack />
            <Contact />

            <footer className="py-16 border-t border-border font-sans">
              <div className="max-w-3xl mx-auto px-6">
                <TerminalHeader command="exit" className="mb-0" />
                <p className="text-xs text-muted font-mono mt-4">
                  © {new Date().getFullYear()} RAZAFIARINOSY Lala Arthur — Fait
                  avec Next.js &amp; beaucoup de café.
                </p>
              </div>
            </footer>
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  )
}