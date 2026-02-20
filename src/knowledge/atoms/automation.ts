import type { BrainAtom } from "./types.js";

export const AUTOMATION_ATOMS: BrainAtom[] = [
  {
    id: "auto-001",
    category: "automation",
    principle:
      "Prepare un briefing avant chaque meeting : historique du lead, derniers echanges, objectifs de la rencontre. La preparation cree la confiance. Un freelance qui arrive prepare montre du professionnalisme et gagne du temps.",
    application:
      "Genere automatiquement un briefing pre-meeting avec l'historique du lead, les notes et les objectifs a atteindre.",
    triggers: ["meeting", "reunion", "preparation", "briefing", "avant rendez-vous", "appel"],
    personaAffinity: ["Automator", "Prospector"],
    maturityRange: [10, 100],
    weight: 8,
  },
  {
    id: "auto-002",
    category: "automation",
    principle:
      "Un lead hot ne reste pas hot longtemps. Alerte immediate, action dans l'heure. L'automatisation du timing fait gagner des deals. Chaque heure de retard reduit la probabilite de conversion de 10%.",
    application:
      "Configure des alertes instantanees pour les leads hot et priorise la reponse dans l'heure qui suit.",
    triggers: ["lead hot", "chaud", "urgent", "alerte", "notification", "reactif", "rapide"],
    personaAffinity: ["Automator", "Prospector"],
    maturityRange: [10, 100],
    weight: 9,
  },
  {
    id: "auto-003",
    category: "automation",
    principle:
      "Verifie la progression des objectifs a mi-parcours. Si tu es a moins de 50%, propose un plan d'acceleration avant qu'il soit trop tard. L'alerte precoce sauve les objectifs — attendre la deadline pour constater l'echec est le pire scenario.",
    application:
      "Automatise une verification a mi-periode de chaque objectif et declenche un plan d'acceleration si le rythme est insuffisant.",
    triggers: ["objectif", "progression", "retard", "mi-parcours", "suivi", "goal", "tracking"],
    personaAffinity: ["Automator", "Analyst"],
    maturityRange: [10, 100],
    weight: 7,
  },
  {
    id: "auto-004",
    category: "automation",
    principle:
      "Les meilleurs workflows chainent 2-3 actions : enrichissement → scoring → notification. L'automatisation libere le temps pour la strategie. Un workflow bien concu fait en 30 secondes ce qui prendrait 30 minutes manuellement.",
    application:
      "Cree des workflows qui chainent des actions complementaires pour maximiser l'efficacite operationnelle.",
    triggers: ["workflow", "automatiser", "chaine", "sequence", "process", "pipeline", "enchainer"],
    personaAffinity: ["Automator"],
    maturityRange: [20, 100],
    weight: 8,
  },
  {
    id: "auto-005",
    category: "automation",
    principle:
      "Active l'auto-enrichissement sur les nouveaux leads. Chaque lead doit avoir LinkedIn + email + entreprise dans les 30 minutes suivant sa creation. L'enrichissement automatique transforme un lead brut en opportunite qualifiee sans effort manuel.",
    application:
      "Configure un workflow d'enrichissement automatique qui se declenche a chaque nouveau lead pour completer le profil en moins de 30 minutes.",
    triggers: ["auto-enrichissement", "nouveau lead", "automatique", "enrichir", "creation", "trigger"],
    personaAffinity: ["Automator", "Prospector"],
    maturityRange: [15, 100],
    weight: 7,
  },
  {
    id: "auto-006",
    category: "automation",
    principle:
      "La delivrabilite email se construit et se protege comme un actif strategique. Un domaine neuf doit etre 'warme' progressivement : 10 emails/jour la premiere semaine, puis +10/jour chaque semaine. L'authentification (SPF, DKIM, DMARC) est non-negociable. Un taux de bounce > 3% ou de spam > 0.1% declenche des penalites qui prennent des semaines a recuperer. Surveiller sa reputation d'envoyeur est aussi important que rediger le contenu.",
    application:
      "Met en place un plan de warmup progressif pour les nouveaux domaines et surveille les metriques de delivrabilite (bounce rate, spam complaints, sender score) en continu.",
    triggers: ["delivrabilite", "warmup", "reputation", "spf", "dkim", "dmarc", "bounce"],
    personaAffinity: ["Automator"],
    maturityRange: [10, 90],
    weight: 8,
  },
  {
    id: "auto-007",
    category: "automation",
    principle:
      "Les sequences trigger-based (declenchees par un evenement) surperforment les sequences time-based (declenchees par un delai) de 3x en taux de conversion. Un email envoye 5 minutes apres une visite sur la page pricing est 10x plus pertinent qu'un email envoye J+3 dans une sequence lineaire. L'evenement revele l'intention — le timing revele l'habitude de l'envoyeur, pas le besoin du prospect.",
    application:
      "Identifie les evenements declencheurs cles (visite page, ouverture email, clic lien, formulaire) et cree des sequences event-driven plutot que calendar-driven.",
    triggers: ["trigger", "evenement", "declencheur", "temps reel", "automatique", "signal"],
    personaAffinity: ["Automator", "Strategist"],
    maturityRange: [20, 100],
    weight: 8,
  },
  {
    id: "auto-008",
    category: "automation",
    principle:
      "Le branching conditionnel dans les sequences transforme un envoi lineaire en parcours intelligent. Si le prospect ouvre l'email → chemin A (envoyer le case study). S'il n'ouvre pas → chemin B (renvoyer avec un nouvel objet 48h apres). S'il clique → chemin C (proposition directe). Chaque branche adapte le message au comportement reel, pas au comportement espere.",
    application:
      "Structure chaque sequence avec des points de branchement conditionnel bases sur les actions du prospect (ouverture, clic, reponse) pour personnaliser le parcours automatiquement.",
    triggers: ["branchement", "conditionnel", "si ouvert", "si clic", "parcours", "personnalise"],
    personaAffinity: ["Automator"],
    maturityRange: [20, 100],
    weight: 7,
  },
  {
    id: "auto-009",
    category: "automation",
    principle:
      "Les leads dormants (aucune interaction depuis 60+ jours) representent 30-40% de la base et sont souvent ignores. Une sequence de re-engagement en 3 etapes est le meilleur ROI d'automation : (1) email de valeur pure sans CTA commercial, (2) question ouverte sur leur situation actuelle, (3) offre exclusive de reactivation. Les non-repondants apres 3 touchpoints doivent etre nettoyes de la liste active pour proteger la delivrabilite.",
    application:
      "Cree une sequence de re-engagement automatique pour les leads inactifs depuis 60+ jours avec escalade progressive et nettoyage des non-repondants.",
    triggers: ["dormant", "inactif", "re-engagement", "reactivation", "relancer", "nettoyer"],
    personaAffinity: ["Automator", "Prospector"],
    maturityRange: [20, 90],
    weight: 7,
  },
  {
    id: "auto-010",
    category: "automation",
    principle:
      "L'orchestration multi-canal synchronise les touchpoints email, LinkedIn et SMS pour eviter le bombardement et maximiser l'impact. La regle : jamais 2 canaux le meme jour. Sequence optimale pour un prospect B2B : J1 connexion LinkedIn, J3 email personnalise, J7 commentaire sur son post, J10 email de valeur, J14 message LinkedIn de suivi. Le multi-canal augmente le taux de reponse de 2-3x vs mono-canal, mais seulement si les messages sont coherents et espaces.",
    application:
      "Orchestre les sequences de prospection sur 2-3 canaux avec un espacement minimum de 48h entre chaque touchpoint et une coherence de message cross-canal.",
    triggers: ["multi-canal", "omnicanal", "linkedin", "email", "sms", "orchestration", "synchroniser"],
    personaAffinity: ["Automator", "Prospector"],
    maturityRange: [20, 100],
    weight: 8,
  },
  {
    id: "auto-011",
    category: "automation",
    principle:
      "L'A/B testing dans les sequences automatisees teste des hypotheses, pas des mots. Tester l'objet seul mesure la curiosite. Tester l'heure d'envoi mesure la disponibilite. Tester le contenu mesure la pertinence. Chaque test doit avoir un objectif clair, un echantillon suffisant (minimum 100 par variante), et un seul critere de decision. Lancer un test sans seuil de significativite predefini est de la pseudo-science.",
    application:
      "Integre des A/B tests systematiques dans les sequences (objet, heure d'envoi, contenu, CTA) avec un minimum de 100 envois par variante et un critere de succes defini avant le lancement.",
    triggers: ["a/b test", "test sequence", "optimiser", "objet", "heure envoi", "variante"],
    personaAffinity: ["Analyst", "Automator"],
    maturityRange: [20, 100],
    weight: 6,
  },
  {
    id: "auto-012",
    category: "automation",
    principle:
      "La sante d'une automation se mesure par 5 indicateurs : taux de bounce (< 3%), taux de desabonnement (< 0.5%), taux d'engagement (ouvertures + clics en tendance), decay rate (vitesse de degradation des metriques), et hygiene de liste (% d'emails valides). Une automation qui tourne sans monitoring est une bombe a retardement — chaque semaine sans audit risque de degrader la reputation d'envoyeur irreversiblement.",
    application:
      "Met en place un tableau de bord de sante automation avec alertes automatiques quand un indicateur depasse son seuil critique (bounce > 3%, unsub > 0.5%, engagement en baisse sur 2 semaines consecutives).",
    triggers: ["monitoring", "sante", "bounce rate", "engagement", "hygiene", "liste", "audit"],
    personaAffinity: ["Analyst", "Automator"],
    maturityRange: [15, 100],
    weight: 7,
  },
];
