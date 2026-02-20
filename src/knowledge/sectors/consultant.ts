import type { SectorProfile } from "./types.js";

export const CONSULTANT_SECTOR: SectorProfile = {
  key: "consultant",
  labels: [
    "consultant", "conseil", "accompagnement",
    "mentoring", "strategie", "advisory", "expertise",
  ],
  positioning: "Le consultant vend de l'invisible — son positionnement doit rendre le resultat tangible. 'J'aide les PME tech a reduire leur churn de 40% en 90 jours' bat 'Consultant en strategie digitale'. La methode proprietaire est le saint graal : nommer son framework cree une categorie et elimine la comparaison. Le consultant qui a un 'Systeme en 5 etapes' ne se compare plus aux autres — il EST la reference de sa methode.",
  offerStructure: "Offre d'entree : session diagnostic gratuite ou a prix symbolique — le consultant demontre sa valeur en posant les bonnes questions, pas en donnant toutes les reponses. Offre coeur : accompagnement sur 3 mois avec objectifs mesurables, appels reguliers et acces direct. Offre premium : advisory retainer avec disponibilite prioritaire, acces VIP, et co-pilotage strategique. L'upsell naturel est la formation d'equipe et la creation de process internes.",
  priorityChannels: ["LinkedIn thought leadership", "webinaires et masterclasses", "podcast invitations", "referral reseau professionnel"],
  pricingStrategy: "Tarifer a la transformation, jamais a l'heure. 'Investissement de 5K pour un systeme qui genere 50K/an de CA additionnel' cadre la decision comme un ROI, pas une depense. La structure 3 paliers est essentielle : le palier DIY (templates + acces communaute), le palier accompagne (appels + suivi), le palier VIP (co-pilotage intensif). La garantie de resultat ou de remboursement est le plus puissant eliminateur d'objections pour un consultant.",
  storytellingAngle: "Le consultant qui est passe par la — la vulnerabilite strategique. Raconter ses propres echecs et apprentissages cree une connexion que les diplomes ne creent pas. Le Golden Circle naturel : POURQUOI cette mission (conviction profonde), COMMENT cette methode (process unique), QUOI ces resultats (preuves concretes). Les temoignages video de clients sont l'arme ultime de conversion.",
  clientSizeAdaptation: {
    small: "Solopreneurs : accompagnement individuel intensif, focus sur les quick wins qui generent du CA rapidement. Programmes de groupe pour democratiser l'acces. Templates et outils pratiques plutot que theorie.",
    medium: "PME : diagnostic organisationnel + plan d'action + implementation accompagnee. Former les equipes pour que l'impact perdure apres la mission. Les missions recurrentes trimestrielles creent de la previsibilite.",
    large: "Grands comptes : se positionner comme expert externe qui dit ce que l'interne n'ose pas dire. Propositions structurees avec ROI projete. Pilot de 3 mois avant engagement long terme. Les recommandations doivent s'appuyer sur des donnees internes, pas des benchmarks generiques.",
  },
};
