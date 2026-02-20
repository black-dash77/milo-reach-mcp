import type { BrainAtom } from "./types.js";

export const PRICING_ATOMS: BrainAtom[] = [
  {
    id: "pri-001",
    category: "pricing",
    principle:
      "Le prix est un signal, pas un chiffre. Un prix bas dit 'pas expert, disponible'. Un prix premium dit 'specialiste, demande'. La reaction du prospect au prix revele son profil : s'il negocie le prix, c'est un acheteur de commodite, pas un acheteur de valeur.",
    application:
      "Analyse le profil des prospects qui negocient vs ceux qui acceptent pour affiner le ciblage et le pricing.",
    triggers: ["prix", "tarif", "cher", "budget", "negocier", "remise"],
    personaAffinity: ["Strategist", "Analyst"],
    maturityRange: [10, 70],
    weight: 8,
  },
  {
    id: "pri-002",
    category: "pricing",
    principle:
      "Le value-based pricing : le prix est determine par la valeur du resultat pour le client, pas par le temps passe. Si un audit de 2 heures identifie un levier qui rapporte 50K/an au client, facturer 500EUR est du vol — pour le freelance.",
    application:
      "Calcule la valeur du resultat pour le client et propose un prix ancre sur cette valeur (10-20% du ROI projete).",
    triggers: ["combien facturer", "valeur", "juste prix", "sous-paye", "augmenter prix"],
    personaAffinity: ["Strategist"],
    maturityRange: [20, 80],
    weight: 9,
  },
  {
    id: "pri-003",
    category: "pricing",
    principle:
      "Un taux d'acceptation des devis superieur a 80% est un signal fort de sous-pricing. L'ancrage est le levier le plus puissant : toujours montrer la valeur totale avant le prix.",
    application:
      "Detecte le sous-pricing via le taux de conversion et recommande une strategie de hausse progressive avec ancrage.",
    triggers: ["devis", "acceptation", "taux", "conversion", "trop cher", "augmenter"],
    personaAffinity: ["Analyst", "Strategist"],
    maturityRange: [20, 100],
    weight: 8,
  },
  {
    id: "pri-004",
    category: "pricing",
    principle:
      "L'effet de leurre (decoy effect) : placer une option intermediaire rend le choix superieur plus attractif. Option A : basique a 1K. Option B (leurre) : standard a 2.5K. Option C : premium a 3K. L'option B rend l'option C irresistible (seulement 500EUR de plus pour beaucoup plus de valeur).",
    application:
      "Structure les paliers tarifaires en utilisant l'effet de leurre pour orienter vers le palier cible.",
    triggers: ["palier", "option", "package", "choisir", "formule", "comparaison"],
    personaAffinity: ["Strategist"],
    maturityRange: [30, 80],
    weight: 7,
  },
  {
    id: "pri-005",
    category: "pricing",
    principle:
      "Ne jamais annoncer un prix par email sans contexte de valeur. La sequence : (1) rappeler le probleme et son cout, (2) presenter la solution et ses benefices, (3) empiler la valeur, (4) reveler le prix. Le prix en fin de phrase, jamais en debut.",
    application:
      "Structure chaque proposition commerciale en suivant la sequence valeur-avant-prix systematiquement.",
    triggers: ["envoyer devis", "proposition", "presenter prix", "commercial", "vendre"],
    personaAffinity: ["Writer", "Strategist"],
    maturityRange: [10, 60],
    weight: 8,
  },
  {
    id: "pri-006",
    category: "pricing",
    principle:
      "La hausse de prix progressive : augmenter de 10-20% tous les 3-6 mois est moins risque et plus efficace qu'une seule hausse de 50%. Prevenir les clients existants avec un preavis et un cadrage positif : 'Pour maintenir le niveau de service que vous meritez...'",
    application:
      "Planifie une strategie de hausse de prix progressive avec le calendrier et les messages adaptes.",
    triggers: ["augmenter prix", "hausse", "trop bas", "evoluer", "tarif", "revaloriser"],
    personaAffinity: ["Strategist"],
    maturityRange: [30, 90],
    weight: 7,
  },
  {
    id: "pri-007",
    category: "pricing",
    principle:
      "La tarification au forfait elimine le risque pour le client ET pour le freelance. Le client sait combien il va payer. Le freelance sait combien il va gagner. Le TJM cree un incentive pervers : plus tu es lent, plus tu gagnes. Le forfait incentive l'efficacite.",
    application:
      "Convertit les offres au TJM en forfaits avec scope defini, en calculant une marge de securite de 20%.",
    triggers: ["forfait", "fixe", "tjm", "journalier", "devis", "estimation"],
    personaAffinity: ["Strategist"],
    maturityRange: [10, 60],
    weight: 7,
  },
  {
    id: "pri-008",
    category: "pricing",
    principle:
      "Le prix psychologique : 2970EUR parait significativement moins cher que 3000EUR. Mais dans le B2B, les chiffres ronds signalent la confiance et le professionnalisme. 5000EUR bat 4997EUR en B2B. Adapter la psychologie du prix au contexte.",
    application:
      "Recommande le format de prix adapte au contexte : chiffres ronds en B2B, psychologiques en B2C.",
    triggers: ["format prix", "chiffre rond", "psychologie prix", "presenter montant"],
    personaAffinity: ["Strategist"],
    maturityRange: [10, 50],
    weight: 5,
  },
  {
    id: "pri-009",
    category: "pricing",
    principle:
      "Le 'prix d'introduction' detruit la valeur percue. Plutot que de brader pour les premiers clients, offrir un bonus exclusif 'early adopter' qui augmente la valeur sans baisser le prix. Le premier prix fixe l'ancre pour tous les futurs clients.",
    application:
      "Propose des alternatives au prix d'introduction (bonus, extended scope, acces VIP) pour les premiers clients.",
    triggers: ["lancement", "premier prix", "debut", "attirer", "prix bas", "promo"],
    personaAffinity: ["Strategist"],
    maturityRange: [0, 40],
    weight: 6,
  },
  {
    id: "pri-010",
    category: "pricing",
    principle:
      "Le cout d'acquisition client (CAC) doit etre recupere au premier projet. Si un client coute 500EUR a acquerir et que le premier projet rapporte 300EUR, le modele n'est pas viable — sauf si le LTV est 5x+ le CAC grace aux recurrences et upsells.",
    application:
      "Calcule le CAC et le LTV pour verifier la viabilite du modele economique et ajuster si necessaire.",
    triggers: ["rentable", "cac", "cout acquisition", "ltv", "viable", "modele economique"],
    personaAffinity: ["Analyst", "Strategist"],
    maturityRange: [30, 90],
    weight: 7,
  },
  {
    id: "pri-011",
    category: "pricing",
    principle:
      "La negociation de prix revele le positionnement. Un client qui negocie systematiquement est un client qui ne percoit pas assez de valeur — le probleme est dans le positionnement, pas dans le prix. Le reflexe doit etre d'augmenter la valeur, pas de baisser le prix.",
    application:
      "Quand un prospect negocie, diagnostique le deficit de valeur percue plutot que de proposer une remise.",
    triggers: ["negociation", "remise", "reduction", "moins cher", "budget serre", "gratuit"],
    personaAffinity: ["Strategist", "Prospector"],
    maturityRange: [20, 70],
    weight: 7,
  },
  {
    id: "pri-012",
    category: "pricing",
    principle:
      "La facturation par etapes (milestone billing) reduit le risque percu des deux cotes. 30% au demarrage, 40% a mi-parcours, 30% a la livraison. Le client ne paie pas tout en avance, le freelance ne travaille pas a credit. Les milestones sont lies a des delivrables concrets.",
    application:
      "Propose un echeancier de paiement par milestones pour les projets depassant 3000EUR.",
    triggers: ["paiement", "echeancier", "acompte", "facturation", "milestone", "etape"],
    personaAffinity: ["Strategist"],
    maturityRange: [10, 60],
    weight: 6,
  },
];
