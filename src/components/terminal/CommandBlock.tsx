'use client'

import { motion } from 'framer-motion'
import { TerminalHeader } from './TerminalHeader'
import { fadeUp } from '@/lib/motion'

interface CommandBlockProps {
  command: string
  children: React.ReactNode
  id?: string
  index?: string
  label?: string
}

export function CommandBlock({
  command,
  children,
  id,
  index,
  label,
}: CommandBlockProps) {
  return (
    <section
      id={id}
      className="py-24 md:py-32 border-t border-border relative"
    >
      <motion.div
        className="max-w-3xl mx-auto px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {index && label && (
          <div className="font-mono text-[11px] tracking-wider text-muted/70 mb-6 flex items-center gap-2">
            <span className="text-accent/60">[</span>
            <span>{index}</span>
            <span className="text-muted/40">/</span>
            <span>{label}</span>
            <span className="text-accent/60">]</span>
          </div>
        )}
        <TerminalHeader command={command} />
        <div>{children}</div>
      </motion.div>
    </section>
  )
}