import type { BrainAtom } from "./types.js";

/**
 * SALES CALLS — 12 atoms on synchronous selling psychology for freelancers.
 * Discovery calls, objection handling, closing techniques, and meeting dynamics.
 */
export const SALES_CALLS_ATOMS: BrainAtom[] = [
  {
    id: "sal-001",
    category: "sales_calls",
    principle:
      "Les 3 premieres minutes d'un appel decouverte determinent 80% du resultat. Commence par une question ouverte sur leur contexte, pas par une presentation de toi. Le prospect doit parler 70% du temps dans ces premieres minutes — celui qui ecoute detient le pouvoir.",
    application:
      "Structure l'ouverture de l'appel avec une question de contexte ('Racontez-moi comment vous en etes arrive a ce point...') et resiste a l'envie de pitcher pendant les 3 premieres minutes.",
    triggers: ["appel", "decouverte", "premier contact", "call", "rendez-vous", "ouverture"],
    personaAffinity: ["Prospector", "Strategist"],
    maturityRange: [10, 70],
    weight: 9,
  },
  {
    id: "sal-002",
    category: "sales_calls",
    principle:
      "Le SPIN Selling adapte au freelance : Situation (contexte actuel), Probleme (douleur identifiee), Implication (cout de l'inaction), Need-payoff (valeur de la solution). Chaque question SPIN fait monter la tension — le prospect se vend la solution a lui-meme.",
    application:
      "Prepare 2 questions par categorie SPIN avant chaque appel. Le but est que le prospect verbalise lui-meme l'urgence de la solution.",
    triggers: ["spin", "questions", "decouverte", "diagnostic", "qualifier", "besoins"],
    personaAffinity: ["Prospector", "Strategist"],
    maturityRange: [20, 80],
    weight: 8,
  },
  {
    id: "sal-003",
    category: "sales_calls",
    principle:
      "La demo inversee : au lieu de montrer ce que tu sais faire, demande au prospect de te montrer son probleme en temps reel. Partage d'ecran inverse. Le prospect ressent sa douleur en direct, et toi tu diagnostiques comme un medecin — ce qui transforme la dynamique de vendeur a expert.",
    application:
      "Propose au prospect de partager son ecran pour montrer sa situation actuelle. Diagnostique en live et note les points de friction visibles.",
    triggers: ["demo", "presentation", "montrer", "partager ecran", "screenshare", "audit"],
    personaAffinity: ["Prospector"],
    maturityRange: [30, 90],
    weight: 7,
  },
  {
    id: "sal-004",
    category: "sales_calls",
    principle:
      "Ne revele jamais le prix en premier. Ancre la valeur avant le chiffre. Technique du sandwich : rappelle le probleme (cout de l'inaction), presente la solution (benefice concret), puis le prix. Le prix apres la valeur semble raisonnable ; le prix avant la valeur semble cher.",
    application:
      "Avant de donner un prix en appel, recapitule : 'Vous m'avez dit que ce probleme vous coute X par mois. Ma solution vous permettrait de Y. L'investissement est de Z.'",
    triggers: ["prix", "tarif", "combien", "budget", "cher", "investissement", "argent"],
    personaAffinity: ["Prospector", "Strategist"],
    maturityRange: [10, 80],
    weight: 9,
  },
  {
    id: "sal-005",
    category: "sales_calls",
    principle:
      "Le 'negative close' : au lieu de pousser a la vente, deconseille subtilement. 'Honnement, si vous n'etes pas sur que c'est prioritaire, attendez peut-etre 6 mois.' La reactance psychologique pousse le prospect a defendre sa propre decision d'achat. Fonctionne surtout avec les profils dominants.",
    application:
      "Utilise le negative close quand le prospect hesite : suggere de ne pas avancer, et observe si le prospect se convainc lui-meme.",
    triggers: ["hesitation", "pas sur", "reflchir", "attendre", "pas pret", "doute"],
    personaAffinity: ["Prospector"],
    maturityRange: [40, 100],
    weight: 6,
  },
  {
    id: "sal-006",
    category: "sales_calls",
    principle:
      "Le silence est l'outil de closing le plus puissant. Apres avoir annonce le prix ou pose une question cle, tais-toi. 5 secondes de silence semblent une eternite, mais celui qui parle en premier perd. Le silence force le prospect a traiter l'information et a reagir authentiquement.",
    application:
      "Apres chaque question importante ou annonce de prix, compte mentalement jusqu'a 7 avant de reprendre la parole.",
    triggers: ["silence", "attendre", "ne rien dire", "pause", "closing", "negociation"],
    personaAffinity: ["Prospector"],
    maturityRange: [30, 100],
    weight: 8,
  },
  {
    id: "sal-007",
    category: "sales_calls",
    principle:
      "Toute objection est un signal d'interet. 'C'est trop cher' signifie 'Je ne vois pas encore la valeur'. 'Je dois reflechir' signifie 'Je n'ai pas assez confiance'. Reformule l'objection en question : 'Si le budget n'etait pas un frein, est-ce que cette solution vous semble la bonne ?'",
    application:
      "Face a une objection, reformule-la en isolant le vrai blocage : budget, timing, confiance, ou decision partagee.",
    triggers: ["objection", "trop cher", "reflechir", "pas le moment", "bloquer", "reticent"],
    personaAffinity: ["Prospector", "Strategist"],
    maturityRange: [10, 80],
    weight: 9,
  },
  {
    id: "sal-008",
    category: "sales_calls",
    principle:
      "Le pont appel-devis : ne termine jamais un appel sans definir la prochaine etape concrete. 'Je vous envoie le devis demain a 14h et on se rappelle jeudi a 10h pour en discuter.' Un devis envoye sans date de suivi a 3x moins de chances de conversion.",
    application:
      "Termine chaque appel decouverte en fixant la date d'envoi du devis ET la date du prochain appel dans le meme echange.",
    triggers: ["devis", "proposition", "suite", "prochaine etape", "follow-up", "relance"],
    personaAffinity: ["Prospector", "Automator"],
    maturityRange: [10, 70],
    weight: 8,
  },
  {
    id: "sal-009",
    category: "sales_calls",
    principle:
      "En multi-decideurs, identifie le champion (celui qui pousse en interne) et l'anti-sponsor (celui qui bloque). Donne au champion les arguments et le support dont il a besoin pour vendre a ta place en interne. Un deal B2B meurt quand le champion ne peut pas articuler ta valeur a son boss.",
    application:
      "Demande 'Qui d'autre est implique dans cette decision ?' et prepare un document de synthese que le champion peut transmettre en interne.",
    triggers: ["decideur", "multi-stakeholder", "comite", "boss", "validation", "hierarchie"],
    personaAffinity: ["Prospector", "Strategist"],
    maturityRange: [30, 100],
    weight: 7,
  },
  {
    id: "sal-010",
    category: "sales_calls",
    principle:
      "Un no-show n'est pas un rejet — c'est un oubli dans 70% des cas. Le follow-up post no-show doit etre leger et sans reproche : 'J'imagine que votre journee a ete chargee. Je garde le creneau ouvert demain a la meme heure si ca vous convient.' Le ton fait la difference entre relance et harcelement.",
    application:
      "Configure un message automatique 5 minutes apres le no-show, leger et sans culpabilisation, avec proposition d'un nouveau creneau.",
    triggers: ["no-show", "absent", "pas venu", "oublie", "annule", "manque"],
    personaAffinity: ["Automator", "Prospector"],
    maturityRange: [10, 70],
    weight: 6,
  },
  {
    id: "sal-011",
    category: "sales_calls",
    principle:
      "Closer l'hesitant : utilise la technique du 'choix entre deux oui'. Au lieu de 'Voulez-vous avancer ?', demande 'Vous preferez commencer par l'audit ou directement par la refonte ?' Les deux options impliquent l'accord. L'hesitant a besoin qu'on guide sa decision, pas qu'on la force.",
    application:
      "Quand le prospect hesite, propose deux options qui impliquent toutes les deux l'avancement du projet.",
    triggers: ["hesitant", "indecis", "choisir", "decider", "pas sur", "bloquer"],
    personaAffinity: ["Prospector"],
    maturityRange: [20, 80],
    weight: 7,
  },
  {
    id: "sal-012",
    category: "sales_calls",
    principle:
      "Le micro-engagement post-appel : dans les 5 minutes apres l'appel, envoie un recap de 3 points et demande une action minuscule ('Pouvez-vous me confirmer l'email de facturation ?'). Ce petit oui active le biais d'engagement — une fois qu'on a dit oui a un petit truc, on dit plus facilement oui au gros.",
    application:
      "Envoie un recap structure dans les 5 minutes post-appel avec une micro-action a confirmer par le prospect.",
    triggers: ["apres appel", "recap", "suivi", "engagement", "confirmation", "email post-call"],
    personaAffinity: ["Prospector", "Automator"],
    maturityRange: [10, 70],
    weight: 7,
  },
];
