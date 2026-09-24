export type CommandKey =
  | 'help'
  | 'about'
  | 'missions'
  | 'stack'
  | 'contact'
  | 'clear'
  | 'exit'

export const COMMANDS: Record<CommandKey, string> = {
  help: 'Liste les commandes disponibles',
  about: 'Qui je suis, ce que je fais',
  missions: 'Mes études de cas récentes',
  stack: 'Ma stack et mes outils',
  contact: 'Comment me joindre',
  clear: 'Efface le terminal',
  exit: 'Quitter le terminal',
}

export const HELP_TEXT = [
  'Commandes disponibles :',
  ...Object.entries(COMMANDS).map(
    ([cmd, desc]) => `  ${cmd.padEnd(10)} ${desc}`
  ),
].join('\n')


export const ABOUT_TEXT = `RAZAFIARINOSY Lala Arthur
Freelance Fullstack Next.js basé à Madagascar.

Je conçois et livre des produits web de bout en bout :
cadrage, dev, packaging, déploiement, formation.

Contextes : administration publique, industrie,
agritech, e-commerce — puis scale-ups.

Tape "missions" pour voir mes études de cas.`

export const CONTACT_TEXT = `  email     nosilala13@gmail.com
  whatsapp  https://wa.me/261380671010
  github    https://github.com/maherisoanosilala      
  linkedin  https://linkedin.com/in/maherisoa02`