export interface Mission {
  id: string
  title: string
  context: string
  role: string
  decisions: string[]
  result: string
  stack: string[]
  featured: boolean
}

export const MISSIONS: Mission[] = [
  {
    id: 'commune-budget',
    title: 'Gestion Recettes & Dépenses — Commune Urbaine',
    context:
      'Administration publique · Fianarantsoa · Gestion budgétaire communale',
    role: 'Autonome · 1 an · Next.js + NestJS · Livraison on-premise (.bat)',
    decisions: [
      'Architecture fullstack Next.js + NestJS packagée pour tourner en local — aucune donnée ne sort de la commune',
      'Système de rôles (saisie / validation / consultation) et traçabilité complète des opérations',
      "Migration d'un process Excel partagé vers une base MongoDB centralisée et fiable",
      'Livraison via script .bat, installation et formation des agents sur site',
    ],
    result:
      'Remplace Excel pour la gestion financière communale · utilisé quotidiennement par ~10 agents',
    stack: ['Next.js', 'NestJS', 'TypeScript', 'MongoDB'],
    featured: true,
  },
  {
    id: 'chambre-froide',
    title: 'Suivi Temps Réel — Chambre Froide Industrielle',
    context:
      'Industrie · Stockage de matières premières · Surveillance de température',
    role: 'Autonome · 4 mois · Firebase · Dashboard + alertes + historique',
    decisions: [
      'Monitoring temps réel de la température via Firebase',
      'Alertes automatiques en cas de dérive — enjeu direct : éviter la perte de matières premières',
      'Dashboard de consultation + historique complet des relevés',
      'Architecture serverless (Firebase) : zéro serveur à maintenir côté client',
    ],
    result:
      'Remplace les relevés manuels · surveillance continue et alertes en cas de dérive',
    stack: ['Firebase', 'Temps réel', 'Dashboard', 'Alertes'],
    featured: true,
  },
  {
    id: 'betail',
    title: 'Système de Gestion de Bétail',
    context: 'Agritech · Traçabilité des zébus (passeports, suivi sanitaire)',
    role: 'Fullstack · 4 mois',
    decisions: [
      'Modélisation MongoDB orientée traçabilité (audit trail)',
      'Auth JWT + rôles (éleveur / véto / admin)',
    ],
    result: 'Déployé en production · passeports et suivis sanitaires traités',
    stack: ['Next.js', 'Node', 'MongoDB', 'JWT'],
    featured: false,
  },
  {
    id: 'ecommerce',
    title: 'Plateforme E-Commerce',
    context: 'Retail · Vente en ligne de chaussures',
    role: 'Fullstack · 3 mois',
    decisions: [
      'Panier, paiement, gestion de stock en temps réel',
      'Upload images via Cloudinary + optimisation',
    ],
    result: "Mise en production · tunnel d'achat optimisé",
    stack: ['React', 'Node', 'MongoDB', 'Cloudinary'],
    featured: false,
  },
  {
    id: 'paiements',
    title: 'Système de Gestion de Paiements',
    context: 'Outil interne · Suivi de transactions financières',
    role: 'Fullstack · 2 mois',
    decisions: [
      'Dashboard temps réel + filtres avancés',
      'Rôles et permissions granulaires',
    ],
    result: 'Remplace un process Excel manuel',
    stack: ['React', 'Express', 'MongoDB', 'JWT'],
    featured: false,
  },
  {
    id: 'events',
    title: "Plateforme d'Inscription aux Événements",
    context: 'Conférences · Inscription et gestion des participants',
    role: 'Fullstack · 2 mois',
    decisions: [
      'Inscription en ligne + gestion des participants',
      'Protection anti-bot (hCaptcha)',
    ],
    result: "Utilisée pour la gestion d'événements",
    stack: ['React', 'Node', 'MongoDB', 'hCaptcha'],
    featured: false,
  },
]