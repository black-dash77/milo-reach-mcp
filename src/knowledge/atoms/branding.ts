import type { BrainAtom } from "./types.js";

export const BRANDING_ATOMS: BrainAtom[] = [
  {
    id: "bra-001",
    category: "branding",
    principle:
      "La coherence bat la perfection. Un branding 'moyen' applique de maniere 100% coherente sur tous les touchpoints est plus puissant qu'un branding 'parfait' applique de maniere inconsistante. La repetition construit la reconnaissance, la variation la detruit.",
    application:
      "Audite la coherence du branding sur tous les canaux et corrige les inconsistances avant d'optimiser le design.",
    triggers: ["branding", "coherence", "identite", "image", "consistance", "uniformiser"],
    personaAffinity: ["Strategist"],
    maturityRange: [10, 60],
    weight: 8,
  },
  {
    id: "bra-002",
    category: "branding",
    principle:
      "Le personal brand du freelance EST le brand de l'entreprise. Les gens achetent a des personnes, pas a des logos. Un visage, une voix, une perspective unique — c'est ce qui differencie dans un marche sature. L'authenticite est le seul avantage competitif incopiable.",
    application:
      "Aide le freelance a definir et assumer sa voix unique plutot que de se cacher derriere un brand corporate impersonnel.",
    triggers: ["personal brand", "image personnelle", "se montrer", "visible", "reputation"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [0, 50],
    weight: 7,
  },
  {
    id: "bra-003",
    category: "branding",
    principle:
      "La brand voice est le ton de personnalite constant dans toute communication. Definie en 3 adjectifs (ex: 'Direct, Expertise, Accessible') avec des exemples de 'oui' et 'non'. La brand voice ne change pas entre un email froid et un post LinkedIn — elle s'adapte au format, pas au fond.",
    application:
      "Definit une brand voice en 3 adjectifs avec des exemples concrets et l'applique a tous les contenus generes.",
    triggers: ["ton", "voix", "style", "personnalite", "comment parler", "brand voice"],
    personaAffinity: ["Writer"],
    maturityRange: [10, 60],
    weight: 7,
  },
  {
    id: "bra-004",
    category: "branding",
    principle:
      "La simplification est la forme ultime du branding. Si le message ne tient pas en une phrase, il est trop complexe. Si le logo a besoin d'explication, il echoue. Si la proposition de valeur demande 2 minutes de lecture, personne ne la lira. Simplifier n'est pas dumifier — c'est clarifier.",
    application:
      "Challenge chaque element de communication avec le test 'un enfant de 12 ans comprend-il l'essentiel ?'.",
    triggers: ["simplifier", "clair", "complique", "confus", "message", "comprendre"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [0, 50],
    weight: 7,
  },
  {
    id: "bra-005",
    category: "branding",
    principle:
      "Le brand positioning statement : Pour [cible], [nom] est le [categorie] qui [benefice unique] parce que [raison de croire]. Ce statement n'est jamais montre tel quel — c'est le guide interne qui aligne toutes les decisions de communication.",
    application:
      "Construit un brand positioning statement et verifie que chaque communication s'y conforme.",
    triggers: ["positionnement de marque", "brand", "statement", "declarer", "affirmer"],
    personaAffinity: ["Strategist"],
    maturityRange: [20, 60],
    weight: 6,
  },
  {
    id: "bra-006",
    category: "branding",
    principle:
      "Le 'Zag' de Neumeier applique au branding : quand tous les concurrents sont bleus, sois orange. Quand tous sont serieux, sois humain. La differenciation de marque la plus memorable est souvent la plus simple — un angle, un ton, une promesse que personne d'autre ne fait.",
    application:
      "Analyse le paysage visuel et verbal des concurrents et propose un axe de differenciation contraste.",
    triggers: ["differencier", "se demarquer", "unique", "memorable", "remarquable"],
    personaAffinity: ["Strategist"],
    maturityRange: [20, 70],
    weight: 6,
  },
  {
    id: "bra-007",
    category: "branding",
    principle:
      "Un brand fort polarise. S'il plait a tout le monde, il est generique. Les marques les plus puissantes ont des detracteurs — et c'est un signe de sante. Avoir des gens qui n'aiment pas ta communication signifie que tu as un positionnement clair.",
    application:
      "Encourage le freelance a assumer un brand clivant plutot que consensuel, tant qu'il resonne avec le client ideal.",
    triggers: ["plaire a tout le monde", "critique", "polariser", "assumer", "opinion"],
    personaAffinity: ["Strategist"],
    maturityRange: [20, 70],
    weight: 6,
  },
  {
    id: "bra-008",
    category: "branding",
    principle:
      "La regle du '7 touchpoints' : un prospect a besoin de voir une marque 7 fois avant de la retenir. Chaque touchpoint doit etre coherent et memorable. La presence reguliere sur 2 canaux bat la presence sporadique sur 5.",
    application:
      "Planifie une strategie de presence multi-canal avec frequence reguliere sur les canaux prioritaires.",
    triggers: ["visibilite", "presence", "frequence", "regulier", "touchpoint", "recall"],
    personaAffinity: ["Strategist", "Automator"],
    maturityRange: [10, 60],
    weight: 6,
  },
  {
    id: "bra-009",
    category: "branding",
    principle:
      "Les micro-interactions construisent le brand plus que les grandes campagnes. La facon de repondre aux emails, la rapidite de reponse, le ton d'un message de suivi, l'attention aux details dans un devis — chaque interaction est un touchpoint de marque.",
    application:
      "Standardise les micro-interactions (reponse type, delai, format de devis) pour que chaque touchpoint renforce le brand.",
    triggers: ["experience", "touchpoint", "detail", "qualite", "impression", "perception"],
    personaAffinity: ["Automator", "Strategist"],
    maturityRange: [10, 70],
    weight: 6,
  },
  {
    id: "bra-010",
    category: "branding",
    principle:
      "Le thought leadership est le branding le plus rentable pour un freelance. Partager sa pensee, ses frameworks, ses opinions sur son domaine cree une autorite naturelle que la publicite ne peut pas acheter. 1 post LinkedIn par semaine pendant 6 mois transforme un inconnu en reference.",
    application:
      "Propose un plan de thought leadership avec themes, frequence et formats adaptes au secteur du freelance.",
    triggers: ["thought leadership", "expert", "autorite", "contenu", "partager", "publier"],
    personaAffinity: ["Writer", "Strategist"],
    maturityRange: [20, 80],
    weight: 7,
  },
  {
    id: "bra-011",
    category: "branding",
    principle:
      "Le brand story a trois couches. Couche 1 : le QUOI (services, expertise). Couche 2 : le COMMENT (methode, approche). Couche 3 : le POURQUOI (mission, conviction). La plupart des freelances ne communiquent que la couche 1. Les clients se connectent emotionnellement a la couche 3.",
    application:
      "Aide le freelance a articuler les 3 couches de son brand story et a communiquer davantage sur les couches 2 et 3.",
    triggers: ["histoire de marque", "raconter", "qui suis-je", "a propos", "bio", "about"],
    personaAffinity: ["Writer", "Strategist"],
    maturityRange: [0, 50],
    weight: 6,
  },
  {
    id: "bra-012",
    category: "branding",
    principle:
      "Le naming est le premier acte de branding. Le nom de la methode, de l'offre, du framework — chaque nom doit etre memorable, prononcable et evocateur du benefice. 'Le Sprint 90' est meilleur que 'Programme d'accompagnement trimestriel'. Nommer, c'est posseder.",
    application:
      "Propose des noms memorables pour les offres, methodes et frameworks du freelance.",
    triggers: ["nommer", "nom", "appeler", "baptiser", "titre", "intitule"],
    personaAffinity: ["Writer"],
    maturityRange: [20, 70],
    weight: 5,
  },
];
