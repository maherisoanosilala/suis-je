'use client'

import { motion } from 'framer-motion'
import { CommandBlock } from '../terminal/CommandBlock'
import { fadeUp, stagger } from '@/lib/motion'
import { STACK } from '@/lib/stack'

export function Stack() {
  return (
    <CommandBlock command="cat ~/stack.md" id="stack">
      <motion.div
        className="grid sm:grid-cols-2 gap-5 font-mono"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {STACK.map((g) => (
          <motion.div
            key={g.label}
            variants={fadeUp}
            className="group border border-border rounded-lg p-5 hover:border-accent/40 transition-colors relative overflow-hidden"
          >
            {/* Liseré accent à gauche au hover */}
            <span className="absolute left-0 top-0 bottom-0 w-px bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

            <h4 className="font-mono text-sm text-accent mb-3 flex items-center gap-2">
              <span className="text-accent/60">{g.icon}</span>
              <span>{g.label}</span>
            </h4>

            <ul className="space-y-1.5 text-xs text-fg/80">
              {g.items.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-muted/60">·</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </CommandBlock>
  )
}