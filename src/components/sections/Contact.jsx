'use client'

import { motion } from 'framer-motion'
import { CommandBlock } from '../terminal/CommandBlock'
import { fadeUp, stagger } from '@/lib/motion'
import { SOCIALS } from '@/lib/social'

export function Contact() {
  return (
    <CommandBlock command="./contact.sh" id="contact" index="04" label="contact">
      <motion.div
        className="grid sm:grid-cols-2 gap-3"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {SOCIALS.map((s) => {
          const Icon = s.icon
          const isExternal = s.href.startsWith('http')
          return (
            <motion.a
              key={s.label}
              variants={fadeUp}
              href={s.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-3 p-4 rounded-lg border border-border hover:border-accent/50 hover:bg-surface transition-colors"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-md border border-border bg-bg text-muted group-hover:text-accent group-hover:border-accent/40 transition-colors">
                <Icon size={16} strokeWidth={1.75} />
              </span>

              <span className="flex flex-col min-w-0">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  {s.label}
                </span>
                <span className="text-sm text-fg truncate group-hover:text-accent transition-colors">
                  {s.value}
                </span>
              </span>
            </motion.a>
          )
        })}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-xs text-muted font-mono"
      >
        # Réponse sous 24h · Disponible pour missions freelance
      </motion.p>
    </CommandBlock>
  )
}