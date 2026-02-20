import type { BrainAtom } from "./types.js";

export const PERSUASION_ATOMS: BrainAtom[] = [
  {
    id: "per-001",
    category: "persuasion",
    principle:
      "La reciprocite de Cialdini : donner de la valeur sans rien demander cree une dette psychologique inconsciente. Le premier email d'une sequence doit DONNER — un conseil, une ressource, un audit. La proposition vient apres, quand la reciprocite a fait son travail.",
    application:
      "Structure chaque premiere interaction autour de la reciprocite : valeur gratuite avant toute demande.",
    triggers: ["premier contact", "approche", "gratuit", "valeur", "donner", "generosite"],
    personaAffinity: ["Prospector", "Writer"],
    maturityRange: [0, 50],
    weight: 9,
  },
  {
    id: "per-002",
    category: "persuasion",
    principle:
      "La preuve sociale est le raccourci de decision du cerveau. '127 freelances utilisent cette methode' bat 'methode efficace'. Plus la preuve est specifique et similaire au prospect (meme secteur, meme taille), plus elle est persuasive.",
    application:
      "Integre des elements de preuve sociale contextuels (meme secteur, meme probleme) dans chaque communication de vente.",
    triggers: ["preuve sociale", "temoignage", "combien de clients", "qui utilise", "reference"],
    personaAffinity: ["Writer", "Prospector"],
    maturityRange: [10, 70],
    weight: 8,
  },
  {
    id: "per-003",
    category: "persuasion",
    principle:
      "La perte aversion de Kahneman : perdre 100EUR fait 2x plus mal que gagner 100EUR fait plaisir. Cadrer en termes de perte ('vous perdez 5K/mois en opportunites manquees') est plus motivant qu'en termes de gain ('gagnez 5K/mois de plus').",
    application:
      "Cadre le cout de l'inaction pour le prospect en pertes concretes et mesurables dans ses messages.",
    triggers: ["perdre", "cout", "manquer", "risque", "inaction", "retard"],
    personaAffinity: ["Writer", "Prospector"],
    maturityRange: [20, 80],
    weight: 8,
  },
  {
    id: "per-004",
    category: "persuasion",
    principle:
      "L'ancrage : le premier chiffre mentionne devient la reference pour tous les suivants. Montrer la valeur totale (10K) AVANT le prix (3K) fait que 3K parait raisonnable. Montrer le prix (3K) sans ancre fait que 3K parait cher.",
    application:
      "Structure chaque proposition en montrant d'abord la valeur totale, puis le prix — jamais l'inverse.",
    triggers: ["prix", "cher", "comparer", "reference", "valeur", "investissement"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [20, 80],
    weight: 9,
  },
  {
    id: "per-005",
    category: "persuasion",
    principle:
      "L'engagement et la coherence : un petit 'oui' mene a un grand 'oui'. Faire repondre le prospect a une question simple ('est-ce que ce probleme vous parle ?') cree un micro-engagement qui facilite l'engagement suivant. Chaque etape de la vente est un 'oui' progressif.",
    application:
      "Construit les sequences d'email comme une escalade de micro-engagements qui menent naturellement au CTA final.",
    triggers: ["engagement", "etapes", "progressif", "conversion", "funnel", "parcours"],
    personaAffinity: ["Prospector", "Automator"],
    maturityRange: [10, 60],
    weight: 7,
  },
  {
    id: "per-006",
    category: "persuasion",
    principle:
      "La rarete et l'urgence ne fonctionnent que si elles sont REELLES. La fausse urgence ('plus que 2 places' quand il y en a 200) detruit la confiance. L'urgence naturelle est toujours plus puissante : 'chaque semaine de retard = X leads perdus' est un fait, pas une tactique.",
    application:
      "Utilise uniquement l'urgence basee sur des faits reels (cout de l'inaction, saisonnalite, capacite limitee).",
    triggers: ["urgence", "maintenant", "vite", "dernier", "limite", "delai"],
    personaAffinity: ["Writer", "Prospector"],
    maturityRange: [20, 70],
    weight: 7,
  },
  {
    id: "per-007",
    category: "persuasion",
    principle:
      "Le cadrage (framing) de Kahneman : la meme information presentee differemment change completement la decision. '95% de clients satisfaits' et '1 client sur 20 mecontent' sont la meme statistique — mais l'impact emotionnel est radicalement different.",
    application:
      "Cadre chaque statistique et chaque proposition sous l'angle le plus favorable sans deformer la realite.",
    triggers: ["presenter", "formuler", "angle", "perspective", "cadrer", "reformuler"],
    personaAffinity: ["Writer", "Analyst"],
    maturityRange: [20, 70],
    weight: 7,
  },
  {
    id: "per-008",
    category: "persuasion",
    principle:
      "L'autorite de Cialdini : les signaux d'expertise accelerent la confiance. Publications, interventions, certifications, annees d'experience, clients reconnus. Mais l'autorite la plus puissante est demonstree, pas declaree — montrer son expertise en action bat lister ses diplomes.",
    application:
      "Identifie les meilleurs signaux d'autorite du freelance et les integre naturellement dans sa communication.",
    triggers: ["autorite", "expert", "credibilite", "confiance", "experience", "expertise"],
    personaAffinity: ["Writer", "Strategist"],
    maturityRange: [10, 60],
    weight: 7,
  },
  {
    id: "per-009",
    category: "persuasion",
    principle:
      "La pre-suasion de Cialdini : ce qui precede le message est aussi important que le message. Poser la question 'sur une echelle de 1 a 10, a quel point etes-vous satisfait de votre acquisition client actuelle ?' AVANT de proposer une solution force le prospect a evaluer sa situation — et rarement a 10.",
    application:
      "Utilise des questions d'auto-evaluation avant chaque proposition pour que le prospect reconnaisse son besoin.",
    triggers: ["question", "diagnostic", "evaluer", "situation", "audit", "analyse"],
    personaAffinity: ["Prospector", "Writer"],
    maturityRange: [20, 80],
    weight: 7,
  },
  {
    id: "per-010",
    category: "persuasion",
    principle:
      "Le principe d'appreciation : on dit oui plus facilement a quelqu'un qu'on apprecie. Le ton conversationnel, l'humour dose, la personnalisation des messages — tout cela construit l'appreciation. Un email qui commence par 'J'ai vu votre post sur [sujet specifique]' montre un interet sincere.",
    application:
      "Personalise chaque premiere interaction avec un element specifique qui montre un interet sincere pour le prospect.",
    triggers: ["personnaliser", "approche", "premier email", "froid", "icebreaker"],
    personaAffinity: ["Prospector", "Writer"],
    maturityRange: [0, 50],
    weight: 7,
  },
  {
    id: "per-011",
    category: "persuasion",
    principle:
      "L'effet de contraste : presenter l'option la plus chere d'abord rend la suivante raisonnable. Presenter le probleme le plus grave d'abord rend la solution indispensable. Le cerveau juge toujours par comparaison, jamais en absolu.",
    application:
      "Structure les presentations de prix et de problemes en utilisant le contraste sequentiel a l'avantage du freelance.",
    triggers: ["comparer", "option", "choix", "alternative", "presenter"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [20, 70],
    weight: 6,
  },
  {
    id: "per-012",
    category: "persuasion",
    principle:
      "Max 1-2 leviers psychologiques par message. Empiler reciprocite + rarete + preuve sociale + perte aversion dans un meme email est de la manipulation visible. La subtilite est la marque d'un expert — un seul levier bien place fait plus qu'un cocktail agressif.",
    application:
      "Selectionne le levier psychologique le plus adapte au contexte et l'applique avec subtilite.",
    triggers: ["persuader", "convaincre", "influence", "psychologie", "technique", "tactique"],
    personaAffinity: ["Writer"],
    maturityRange: [0, 100],
    weight: 8,
  },
];
