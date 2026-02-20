import type { SectorProfile } from "./types.js";

export const DEVELOPER_SECTOR: SectorProfile = {
  key: "developer",
  labels: [
    "developpeur", "dev", "web", "app", "logiciel", "saas", "programmeur",
    "agence web", "react", "shopify", "frontend", "backend", "fullstack",
  ],
  positioning: "Les devs se battent sur les technos — mais le client n'achete pas du React, il achete un probleme resolu. Le positionnement gagnant lie une expertise technique a un resultat business mesurable : 'Je construis des apps SaaS qui reduisent le churn de 30%' bat 'Developpeur fullstack React/Node' a chaque fois. La specialisation par verticale (fintech, healthtech, e-commerce) ou par probleme (migration, performance, MVP) cree une categorie ou la concurrence est quasi nulle.",
  offerStructure: "Offre d'entree : audit technique gratuit (30 min) qui revele les failles et opportunites — cree la reciprocite et demontre l'expertise. Offre coeur : forfait projet avec livrables et resultats definis, jamais de TJM nu. Offre premium : retainer mensuel avec SLA, maintenance proactive et conseil strategique. Le recurring revenue via la maintenance est le levier de stabilite le plus sous-exploite par les devs.",
  priorityChannels: ["GitHub/open-source", "LinkedIn technique", "referral clients existants", "communautes dev (Discord, Slack)"],
  pricingStrategy: "Bannir le TJM visible — il commoditise l'expertise. Tarifer au projet avec ancrage sur la valeur business : 'Ce MVP va vous permettre de valider votre marche et lever 500K' justifie 25K mieux que '50 jours x 500EUR'. Proposer 3 paliers (essentiel, standard, premium) avec le palier du milieu comme ancre. La garantie 'satisfait ou on itere' reduit la friction de decision.",
  storytellingAngle: "Le developpeur qui comprend le business. Pas un executant technique, un partenaire qui traduit la vision en produit. Les etudes de cas montrent le RESULTAT business ('+200% d'utilisateurs actifs', 'levee de 2M apres le MVP') pas la stack technique. Le recit type : 'Le client avait un probleme business X, on a construit Y, resultat Z en N semaines.'",
  clientSizeAdaptation: {
    small: "Startups et solopreneurs : packages MVP rapides (4-8 semaines), process lean, communication directe. Proposer un scope reduit mais fonctionnel plutot qu'un devis mammouth. Le quick win technique qui genere du CA rapidement vaut plus qu'une architecture parfaite.",
    medium: "PME et scale-ups : audit + roadmap technique avant tout projet. Montrer la capacite a s'integrer avec les equipes existantes. Les retainers de 3-6 mois avec objectifs trimestriels creent de la previsibilite pour les deux parties.",
    large: "ETI et grands comptes : processus structure, documentation, conformite. Le dev freelance se positionne comme expert specialise que l'interne n'a pas — pas comme substitut d'une ESN. Mettre en avant les certifications, la securite, et les references du meme secteur.",
  },
};
