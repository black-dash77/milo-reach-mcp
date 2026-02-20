import type { SectorProfile } from "./types.js";

export const PHOTOGRAPHER_SECTOR: SectorProfile = {
  key: "photographer",
  labels: [
    "photographe", "videaste", "photo", "video", "film", "production",
    "realisateur", "drone", "evenementiel",
  ],
  positioning: "Le photographe qui se vend comme 'photographe professionnel polyvalent' est en competition avec chaque smartphone. La specialisation par emotion ou par resultat cree une categorie : 'Je capture l'essence de votre marque en images qui convertissent' ou 'Photographe corporate qui humanise les entreprises tech'. Le portfolio n'est pas un catalogue — c'est une promesse visuelle de ce que le client va obtenir.",
  offerStructure: "Offre d'entree : mini-shooting de 30 min (portrait pro ou 5 photos produit) — faible friction, demontre la qualite. Offre coeur : pack complet (shooting + retouche + droits + livraison optimisee web/print) avec nombre de photos defini. Offre premium : direction artistique complete + abonnement mensuel de contenu visuel. Le recurring revenue passe par les abonnements de contenu regulier pour les reseaux sociaux et le site.",
  priorityChannels: ["Instagram portfolio", "Google My Business local", "referral et bouche-a-oreille", "partenariats complementaires (agences, wedding planners)"],
  pricingStrategy: "Ne jamais vendre des photos — vendre l'impact des images sur le business du client. '10 photos produit professionnelles' est une commodite. 'Des visuels qui augmentent votre taux de conversion de 25%' est un investissement. L'ancrage par la valeur du projet global : si le shooting est pour un lancement produit a 100K, l'investissement photo de 3K est derisoire. Toujours inclure les droits d'utilisation dans le forfait — les negociations de droits tuent des deals.",
  storytellingAngle: "L'artiste qui comprend le business. Chaque image raconte l'histoire de la marque, pas la maitrise technique du photographe. Les before/after sont puissants : l'entreprise avec des photos generiques vs avec de vraies photos pro — l'impact sur la perception est immediat et visceral. Le recit de la coulisse (backstage) humanise le process et justifie l'investissement.",
  clientSizeAdaptation: {
    small: "Solopreneurs et TPE : packages accessibles avec delivrables immediats. Coaching rapide sur la mise en scene pour qu'ils puissent completer entre les shootings pro. La valeur ajoutee c'est de les rendre photogeniques, pas juste de prendre des photos.",
    medium: "PME : banque d'images brandees avec charte visuelle. Shootings trimestriels planifies pour maintenir la fraicheur du contenu. Formation basique de l'equipe interne pour le contenu quotidien.",
    large: "Grands comptes : direction artistique avec brief creatif structure. Production multi-formats (web, print, social, evenementiel). Contrat annuel avec volume negocie et exclusivite sectorielle.",
  },
};
