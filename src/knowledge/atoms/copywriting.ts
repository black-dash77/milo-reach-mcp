import type { BrainAtom } from "./types.js";

export const COPYWRITING_ATOMS: BrainAtom[] = [
  {
    id: "cop-001",
    category: "copywriting",
    principle:
      "Les 5 niveaux de conscience de Schwartz dictent le message. Unaware : stat choquante. Problem-aware : miroir de la douleur. Solution-aware : differenciation. Product-aware : preuve sociale. Most aware : offre directe. Envoyer le mauvais message au mauvais stade tue la conversion.",
    application:
      "Identifie le niveau de conscience du prospect et adapte le type de message en consequence.",
    triggers: ["conscience", "stade", "niveau", "adapte", "personnalise", "segmente"],
    personaAffinity: ["Writer", "Prospector"],
    maturityRange: [20, 80],
    weight: 9,
  },
  {
    id: "cop-002",
    category: "copywriting",
    principle:
      "Le 'slippery slide' de Sugarman : chaque element du texte a un seul objectif — faire lire l'element suivant. L'objet fait ouvrir. La premiere ligne fait lire la deuxieme. Le premier paragraphe fait lire le deuxieme. Chaque element reduit la friction vers le CTA.",
    application:
      "Verifie que chaque element du texte (objet, hook, corps, CTA) remplit son role unique dans la chaine de lecture.",
    triggers: ["structure email", "enchainer", "fluidite", "lire", "captiver", "accrocher"],
    personaAffinity: ["Writer"],
    maturityRange: [10, 70],
    weight: 8,
  },
  {
    id: "cop-003",
    category: "copywriting",
    principle:
      "La formule 4U pour les objets d'email : Utile (benefice clair), Urgent (raison d'ouvrir maintenant), Ultra-specifique (chiffre ou detail), Unique (angle inattendu). Un objet qui coche 3/4 U a un taux d'ouverture superieur de 30%.",
    application:
      "Score chaque objet d'email sur les 4U et propose des variantes qui maximisent le score.",
    triggers: ["objet email", "sujet", "taux ouverture", "ouvrir", "subject line"],
    personaAffinity: ["Writer"],
    maturityRange: [10, 60],
    weight: 7,
  },
  {
    id: "cop-004",
    category: "copywriting",
    principle:
      "Un seul CTA par communication. Un cerveau face a 'Repondez a cet email OU visitez notre site OU telechargez notre guide OU reservez un appel' ne fait rien. Un seul CTA clair, avec un verbe d'action et zero friction : 'Repondez OUI a cet email.'",
    application:
      "Verifie qu'il n'y a qu'un seul CTA par email/page et que l'action est la plus simple possible.",
    triggers: ["cta", "appel a l'action", "que faire", "repondre", "cliquer", "action"],
    personaAffinity: ["Writer"],
    maturityRange: [0, 60],
    weight: 8,
  },
  {
    id: "cop-005",
    category: "copywriting",
    principle:
      "AIDA (Attention, Interet, Desir, Action) est le framework de base. A: pattern interrupt ou curiosity gap. I: probleme reconnu, mirroring. D: solution presentee, preuve, projection. A: CTA unique, clair, sans friction. AIDA fonctionne pour un email de 50 mots comme pour une page de 2000.",
    application:
      "Structure tout contenu commercial autour du framework AIDA en adaptant la longueur au canal.",
    triggers: ["aida", "structure", "framework", "email", "contenu", "persuasif"],
    personaAffinity: ["Writer"],
    maturityRange: [0, 50],
    weight: 7,
  },
  {
    id: "cop-006",
    category: "copywriting",
    principle:
      "PAS (Problem, Agitate, Solve) est l'arme anti-inertie. P: nommer le probleme avec les mots du prospect. A: amplifier les consequences de l'inaction ('chaque mois, c'est X de perdu'). S: presenter la solution comme la suite logique, pas comme un pitch. Le 'Agitate' fait le gros du travail emotionnel.",
    application:
      "Utilise PAS pour les emails de prospection froid ou la douleur doit etre activee avant la solution.",
    triggers: ["probleme", "douleur", "frustration", "solution", "resoudre", "souffrir"],
    personaAffinity: ["Writer"],
    maturityRange: [10, 60],
    weight: 7,
  },
  {
    id: "cop-007",
    category: "copywriting",
    principle:
      "Le ton conversationnel bat toujours le corporate. Lire a haute voix est le test ultime — si ca sonne naturel en conversation, c'est bon. Les contractions, les phrases courtes, les questions directes ('Ca vous parle ?') creent une connexion que le langage formel ne cree pas.",
    application:
      "Redige dans un ton conversationnel et verifie avec le 'test de la lecture a haute voix'.",
    triggers: ["ton", "style", "voix", "naturel", "authentique", "formel", "informel"],
    personaAffinity: ["Writer"],
    maturityRange: [0, 50],
    weight: 6,
  },
  {
    id: "cop-008",
    category: "copywriting",
    principle:
      "'Vous/Tu' doit apparaitre 3x plus que 'Je/Nous'. Le centrage client est la regle d'or : le prospect ne se soucie pas de tes 15 ans d'experience, il se soucie de ce que ces 15 ans d'experience vont faire pour LUI. Chaque 'je' doit etre transforme en 'vous'.",
    application:
      "Audit le ratio 'vous vs je' dans les communications et recentre systematiquement sur le client.",
    triggers: ["centrer client", "ego", "egocentrique", "vous", "perspective", "empathie"],
    personaAffinity: ["Writer"],
    maturityRange: [0, 40],
    weight: 7,
  },
  {
    id: "cop-009",
    category: "copywriting",
    principle:
      "Les power words activent le cerveau limbique : Decouvrez, Transformez, Imaginez, Prouve, Gratuit, Exclusif, Garanti, Resultat, Secret, Erreur. Mais leur pouvoir s'epuise avec la repetition — utiliser 2-3 par email, pas 15.",
    application:
      "Integre des power words strategiquement dans les hooks, les CTA et les objets sans saturation.",
    triggers: ["mots", "vocabulaire", "impact", "puissant", "percutant", "emotion"],
    personaAffinity: ["Writer"],
    maturityRange: [0, 50],
    weight: 6,
  },
  {
    id: "cop-010",
    category: "copywriting",
    principle:
      "Le Before-After-Bridge est le framework de conversion le plus rapide. Before: 'Vous passez 3h par jour a prospecter sans resultat.' After: 'Imaginez un pipeline de 20 leads qualifies par mois, sans cold calling.' Bridge: 'Voici comment [methode].' La puissance vient du contraste emotionnel entre Before et After.",
    application:
      "Utilise BAB pour les emails courts, les posts LinkedIn et les premiers touchpoints ou la brievete compte.",
    triggers: ["avant apres", "contraste", "court", "rapide", "post", "linkedin"],
    personaAffinity: ["Writer"],
    maturityRange: [0, 50],
    weight: 7,
  },
  {
    id: "cop-011",
    category: "copywriting",
    principle:
      "Le test A/B en copywriting ne teste pas des mots — il teste des hypotheses psychologiques. Variante A (curiosite) vs Variante B (preuve sociale) vs Variante C (peur de manquer). Identifier le levier gagnant, pas le mot gagnant, permet de scaler l'insight sur tous les contenus.",
    application:
      "Propose des variantes A/B avec un levier psychologique different par variante et un framework de decision.",
    triggers: ["a/b test", "variante", "tester", "optimiser", "meilleur", "comparer"],
    personaAffinity: ["Writer", "Analyst"],
    maturityRange: [20, 70],
    weight: 6,
  },
  {
    id: "cop-012",
    category: "copywriting",
    principle:
      "Le P.S. est l'element le plus lu d'un email apres l'objet. Les lecteurs scannent : objet → premiere ligne → P.S. → decideur de lire le corps. Le P.S. ideal reformule le benefice principal ou ajoute un element de preuve sociale ou d'urgence.",
    application:
      "Ajoute un P.S. strategique a chaque email commercial avec un rappel du benefice principal ou une preuve sociale.",
    triggers: ["post scriptum", "fin email", "conclusion", "fermer", "derniere ligne"],
    personaAffinity: ["Writer"],
    maturityRange: [0, 50],
    weight: 5,
  },
];
