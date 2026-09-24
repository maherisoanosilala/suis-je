'use client'

import { motion } from 'framer-motion'
import { CommandBlock } from '../terminal/CommandBlock'
import { fadeUp, stagger } from '@/lib/motion'

const HIGHLIGHTS = [
  'Je livre en autonomie — cadrage, dev, packaging, déploiement, formation.',
  "Je m'adapte au contexte : cloud, on-premise, secteur public, scale-up.",
  "Je parle produit autant que code — je comprends l'enjeu métier derrière la feature.",
  "Je laisse le code plus propre que je l'ai trouvé.",
]

export function About() {
  return (
    <CommandBlock command="cat ~/about.md" id="about">
      <motion.div
        className="space-y-5 text-fg/80 leading-relaxed font-mono"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <motion.p variants={fadeUp} className='text-sm'>
          Freelance fullstack <span className="text-accent">Next.js</span>, basé
          à Madagascar. Je conçois et livre des produits web de bout en bout —
          du cadrage au déploiement, en passant par la formation des
          utilisateurs.
        </motion.p>

        <motion.p variants={fadeUp} className='text-sm'>
          Mon parcours m'a fait toucher à des contextes très différents :{' '}
          <span className="text-fg">administration publique</span>,{' '}
          <span className="text-fg">industrie</span>,{' '}
          <span className="text-fg">agritech</span>,{' '}
          <span className="text-fg">e-commerce</span>. Ce que j'en retire :
          l'adaptabilité, l'autonomie, et le sens des contraintes réelles.
        </motion.p>

        <motion.p variants={fadeUp} className="pt-2 font-mono">
          Ce qui me distingue :
        </motion.p>

        <motion.ul variants={stagger} className="space-y-2 pl-4 text-xs">
          {HIGHLIGHTS.map((item) => (
            <motion.li
              key={item}
              variants={fadeUp}
              className="flex gap-2"
            >
              <span className="text-accent shrink-0">→</span>
              <span className="text-sm">{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          variants={fadeUp}
          className="text-sm text-muted italic pt-4"
        >
          # Aujourd'hui, j'accompagne des scale-ups sur des enjeux produit et
          techniques : architecture Next.js, performances, design systems,
          mentorat.
        </motion.p>
      </motion.div>
    </CommandBlock>
  )
}