import type { SectorProfile } from "./types.js";

export const GENERAL_SECTOR: SectorProfile = {
  key: "general",
  labels: [],
  positioning: "Tout freelance peut creer sa propre categorie en combinant deux dimensions : son expertise technique et le resultat business qu'il genere. La formule : 'J'aide [cible precise] a [resultat mesurable] grace a [methode unique].' Si cette phrase ne fait pas dire 'c'est exactement ce qu'il me faut' a la bonne personne, elle est trop generique. Le test ultime de la specialisation : peux-tu dire 'Je suis le seul qui...' ?",
  offerStructure: "Offre d'entree : session decouverte ou audit gratuit qui demontre la valeur avant tout engagement. Offre coeur : forfait avec livrables et resultats definis sur 1-3 mois. Offre premium : accompagnement long terme avec retainer et acces prioritaire. Toujours structurer en 3 paliers — le palier du milieu est l'ancre psychologique, le premium existe pour rendre le milieu raisonnable.",
  priorityChannels: ["LinkedIn", "referral", "email outreach personnalise", "communautes de niche"],
  pricingStrategy: "Ne jamais afficher un TJM sans contexte de valeur. Le prix est un signal : trop bas = pas expert, juste bien = commodite, premium = specialiste. Toujours presenter la valeur avant le prix (ancrage). Toujours proposer 3 options (effet de leurre). Toujours inclure une garantie qui reduit le risque percu. Si le taux d'acceptation depasse 80%, augmenter les prix de 20% — c'est un signal de sous-pricing.",
  storytellingAngle: "L'histoire personnelle qui explique la mission. Pourquoi ce metier, pourquoi cette specialisation, quel probleme personnel a ete le declencheur. La vulnerabilite strategique — montrer qu'on est passe par les memes galeres que ses clients — cree une connexion que les credentials ne creent pas. Le recit doit toujours aboutir a : 'et c'est pour ca que j'aide maintenant les gens comme vous a eviter ces erreurs.'",
  clientSizeAdaptation: {
    small: "Solopreneurs et TPE : packages simples, process leger, resultats rapides. Adapter le vocabulaire — pas de jargon. Le quick win qui genere du CA dans les 30 premiers jours cree la confiance pour la suite.",
    medium: "PME : propositions structurees avec diagnostic, plan d'action et timeline. Montrer la capacite a s'integrer avec les equipes existantes. Les retainers trimestriels creent de la previsibilite.",
    large: "Grands comptes : processus de vente plus long, documentation exhaustive, conformite. Se positionner comme expert externe irreplacable, pas comme ressource supplementaire. Mettre en avant les references du meme secteur et la valeur strategique unique.",
  },
};
