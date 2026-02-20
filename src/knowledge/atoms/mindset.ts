import type { BrainAtom } from "./types.js";

export const MINDSET_ATOMS: BrainAtom[] = [
  {
    id: "min-001",
    category: "mindset",
    principle:
      "Travailler SUR son business, pas DANS son business. Si le freelance passe 80% de son temps a executer et 0% a strategiser, le business ne grandit pas — il tourne en rond. Bloquer 4h par semaine pour la strategie, le marketing et le developpement business est non-negociable.",
    application:
      "Aide le freelance a structurer sa semaine avec du temps dedie au developpement business, pas seulement a l'execution.",
    triggers: ["temps", "organiser", "productivite", "priorite", "croissance", "stagner"],
    personaAffinity: ["Strategist"],
    maturityRange: [0, 60],
    weight: 8,
  },
  {
    id: "min-002",
    category: "mindset",
    principle:
      "L'essentialisme de McKeown : faire moins mais mieux. Un freelance qui dit oui a tout dit non a l'excellence. Chaque oui a un projet mediocre est un non a un projet excellent. La discipline de dire non est la competence la plus rentable du freelance.",
    application:
      "Aide a creer un filtre de selection de projets base sur des criteres clairs (rentabilite, alignement, plaisir, apprentissage).",
    triggers: ["dire non", "trop de travail", "deborde", "choisir", "priorite", "selectif"],
    personaAffinity: ["Strategist"],
    maturityRange: [20, 80],
    weight: 8,
  },
  {
    id: "min-003",
    category: "mindset",
    principle:
      "Le syndrome de l'imposteur est universel chez les freelances — et il a un antidote : les preuves. Chaque projet reussi, chaque temoignage, chaque resultat mesurable est une preuve contre l'imposteur. Constituer un 'dossier de confiance' accessible dans les moments de doute.",
    application:
      "Aide le freelance a constituer et consulter son dossier de preuves quand le doute apparait.",
    triggers: ["imposteur", "douter", "legitime", "pas assez bon", "confiance", "capable"],
    personaAffinity: ["Strategist"],
    maturityRange: [0, 50],
    weight: 7,
  },
  {
    id: "min-004",
    category: "mindset",
    principle:
      "Le growth mindset de Dweck : les competences se developpent, elles ne sont pas figees. Un freelance qui dit 'je ne sais pas vendre' a simplement 'pas encore appris a vendre'. Chaque echec est un feedback, pas une sentence. Cette distinction change tout.",
    application:
      "Recadre les echecs et les lacunes comme des opportunites d'apprentissage avec un plan d'action concret.",
    triggers: ["echec", "erreur", "rate", "impossible", "pas capable", "apprendre"],
    personaAffinity: ["Strategist"],
    maturityRange: [0, 40],
    weight: 6,
  },
  {
    id: "min-005",
    category: "mindset",
    principle:
      "La regle du 80/20 (Pareto) s'applique a tout : 20% des clients generent 80% du CA. 20% des activites generent 80% des resultats. 20% des contenus generent 80% du trafic. Identifier et doubler les 20% qui comptent est la decision strategique la plus importante.",
    application:
      "Analyse les donnees pour identifier les 20% a haut impact et propose un plan pour les amplifier.",
    triggers: ["pareto", "80/20", "essentiel", "priorite", "impact", "rendement"],
    personaAffinity: ["Analyst", "Strategist"],
    maturityRange: [10, 80],
    weight: 8,
  },
  {
    id: "min-006",
    category: "mindset",
    principle:
      "Le freelance qui ne mesure rien ne progresse pas. Mais le freelance qui mesure tout se noie dans les chiffres. Les 5 metriques essentielles : CA mensuel, nombre de leads qualifies, taux de conversion devis, prix moyen par projet, et satisfaction client (NPS).",
    application:
      "Definit les 5 KPIs essentiels et met en place un tableau de bord simple pour un suivi hebdomadaire.",
    triggers: ["kpi", "mesurer", "suivre", "tableau de bord", "indicateur", "performance"],
    personaAffinity: ["Analyst"],
    maturityRange: [10, 60],
    weight: 7,
  },
  {
    id: "min-007",
    category: "mindset",
    principle:
      "L'objectif financier sans plan d'action est un reve. Decomposer : 100K EUR/an = 8.3K EUR/mois = 2 projets a 4.2K = 4 devis envoyes = 8 appels decouverte = 20 leads qualifies par mois. Chaque chiffre intermediaire est un levier actionnable.",
    application:
      "Decompose l'objectif de CA en metriques intermediaires actionnables et identifie les leviers prioritaires.",
    triggers: ["objectif", "chiffre affaires", "chiffre d'affaires", "revenus", "gagner", "facturer"],
    personaAffinity: ["Strategist", "Analyst"],
    maturityRange: [0, 60],
    weight: 7,
  },
  {
    id: "min-008",
    category: "mindset",
    principle:
      "Le 'feast or famine' est le cycle toxique du freelance : trop de travail → pas de prospection → plus de travail → panique → prospection agressive → trop de travail. La solution : prospecter TOUJOURS, meme quand le pipeline est plein. 30 min par jour minimum.",
    application:
      "Met en place un systeme de prospection continue independant de la charge de travail actuelle.",
    triggers: ["irregulier", "creux", "pas de client", "feast famine", "instable", "cycle"],
    personaAffinity: ["Strategist", "Automator"],
    maturityRange: [0, 50],
    weight: 8,
  },
  {
    id: "min-009",
    category: "mindset",
    principle:
      "La peur du rejet est le plus grand frein a la croissance du freelance. Mais le rejet n'est pas personnel — c'est une inadequation de timing, de besoin ou de budget. Chaque 'non' rapproche du 'oui'. Et un 'non' poli est infiniment mieux qu'un silence.",
    application:
      "Normalise le rejet comme partie integrante du process et aide a en extraire les lecons utiles.",
    triggers: ["rejet", "non", "refus", "peur", "oser", "bloquer", "procrastiner"],
    personaAffinity: ["Prospector"],
    maturityRange: [0, 40],
    weight: 6,
  },
  {
    id: "min-010",
    category: "mindset",
    principle:
      "L'investissement en soi est le meilleur investissement business. Une formation, un coaching, un mastermind — le ROI est exponentiel parce qu'il s'applique a TOUT ce que le freelance fait ensuite. Le freelance qui economise sur sa propre formation perd 10x en opportunites manquees.",
    application:
      "Identifie la competence-goulot (celle qui freine le plus la croissance) et recommande un investissement cible.",
    triggers: ["formation", "apprendre", "ameliorer", "competence", "investir", "progresser"],
    personaAffinity: ["Strategist"],
    maturityRange: [10, 60],
    weight: 6,
  },
  {
    id: "min-011",
    category: "mindset",
    principle:
      "Le perfectionnisme est l'ennemi de la progression. 'Done is better than perfect' n'est pas un compromis sur la qualite — c'est la reconnaissance que la version 1 lancee bat la version 2 en preparation. Iterer rapidement sur du feedback reel bat planifier indefiniment.",
    application:
      "Encourage le lancement rapide avec iteration plutot que la preparation parfaite. MVP > masterpiece.",
    triggers: ["parfait", "pret", "lancer", "attendre", "procrastiner", "bloquer", "hesiter"],
    personaAffinity: ["Strategist"],
    maturityRange: [0, 40],
    weight: 7,
  },
  {
    id: "min-012",
    category: "mindset",
    principle:
      "Le networking strategique est un investissement a rendement differe. Les relations construites aujourd'hui generent des opportunites dans 6-18 mois. La regle : donner 5x avant de demander 1x. Le freelance qui aide genereusement son reseau recoit des opportunites que le marketing ne peut pas acheter.",
    application:
      "Propose un plan de networking strategique avec cibles, frequence et mode d'apport de valeur.",
    triggers: ["reseau", "networking", "relations", "communaute", "evenement", "connexion"],
    personaAffinity: ["Prospector", "Strategist"],
    maturityRange: [10, 70],
    weight: 6,
  },
];
