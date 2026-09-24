export interface StackGroup {
  label: string
  icon: string
  items: string[]
}

export const STACK: StackGroup[] = [
  {
    label: 'Frontend',
    icon: '⬢',
    items: [
      'Next.js (App Router)',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    label: 'Backend',
    icon: '⬢',
    items: ['Node.js', 'NestJS', 'Express', 'API Routes', 'REST'],
  },
  {
    label: 'Data & temps réel',
    icon: '⬢',
    items: ['MongoDB', 'Firebase', 'PostgreSQL', 'Prisma', 'Redis'],
  },
  {
    label: 'DevOps & déploiement',
    icon: '⬢',
    items: [
      'Vercel',
      'Docker',
      'Git / GitHub',
      'CI/CD',
      'On-premise (.bat)',
    ],
  },
  {
    label: 'Outils produit',
    icon: '⬢',
    items: ['Jira', 'Notion', 'Slack', 'Trello', 'Linear'],
  },
  {
    label: 'Design & collaboration',
    icon: '⬢',
    items: ['Figma', 'Postman', 'Excalidraw', 'Loom'],
  },
  {
    label: 'Automatisation & no-code',
    icon: '⬢',
    items: ['n8n', 'Zapier', 'Make', 'Webhooks'],
  },
  {
    label: 'IA & assistants',
    icon: '⬢',
    items: ['ChatGPT', 'Claude', 'GitHub Copilot', 'Cursor'],
  },
]