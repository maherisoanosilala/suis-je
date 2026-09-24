'use client'

import { motion } from 'framer-motion'
import { CommandBlock } from '../terminal/CommandBlock'
import { fadeUp, stagger } from '@/lib/motion'
import { MISSIONS } from '@/data/mission'

export function Missions() {
  const featured = MISSIONS.filter((m) => m.featured)
  const others = MISSIONS.filter((m) => !m.featured)

  return (
    <CommandBlock command="ls ~/missions" id="missions">
      <motion.div
        className="space-y-10"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {featured.map((m) => (
          <motion.article
            key={m.id}
            variants={fadeUp}
            className="border border-border rounded-lg p-6 bg-surface/50 hover:border-accent/40 transition-colors"
          >
            <header className="mb-4">
              <h3 className="text-lg font-medium text-fg">{m.title}</h3>
              <p className="text-sm text-muted mt-1">{m.context}</p>
              <p className="text-xs font-mono text-accent mt-2">{m.role}</p>
            </header>

            <ul className="space-y-1.5 text-sm text-fg/80 mb-4">
              {m.decisions.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="text-accent shrink-0">→</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-fg/70 italic mb-4">{m.result}</p>

            <div className="flex flex-wrap gap-2">
              {m.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs font-mono px-2 py-1 rounded border border-border text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>

      {others.length > 0 && (
        <motion.div
          className="mt-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="font-mono text-sm text-muted mb-6">
            <span className="text-accent">#</span> autres projets
          </div>

          <div className="space-y-6">
            {others.map((m) => (
              <motion.div
                key={m.id}
                variants={fadeUp}
                className="border-l-2 border-border pl-4 hover:border-accent/60 transition-colors"
              >
                <h4 className="text-fg font-medium">{m.title}</h4>
                <p className="text-xs text-muted mt-1">{m.context}</p>
                <p className="text-xs text-fg/60 mt-1 italic">{m.result}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {m.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-mono px-1.5 py-0.5 rounded border border-border text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </CommandBlock>
  )
}