import type { BrainAtom } from "./types.js";

/**
 * EVENTS & WEBINARS — 12 atoms on event and webinar conversion psychology.
 * Registration, attendance, conversion, and follow-up strategies.
 */
export const EVENTS_WEBINARS_ATOMS: BrainAtom[] = [
  {
    id: "ew-001",
    category: "events_webinars",
    principle:
      "La formule du titre de webinaire : [Resultat desire] + [Delai/Methode] + [Sans obstacle redoute]. Exemple : 'Comment signer 3 clients premium en 30 jours sans prospecter a froid'. Le titre doit promettre une transformation specifique et mesurable — les titres vagues attirent des audiences vagues.",
    application:
      "Teste 3 variantes de titre pour chaque webinaire en suivant la formule R+D+S et mesure le taux d'inscription de chaque variante.",
    triggers: ["titre webinaire", "webinar", "nom evenement", "inscription", "attirer"],
    personaAffinity: ["Writer", "Strategist"],
    maturityRange: [10, 70],
    weight: 8,
  },
  {
    id: "ew-002",
    category: "events_webinars",
    principle:
      "La psychologie inscription-presence : en moyenne, 40-50% des inscrits se presentent. Pour maximiser : rappel J-1 (email + SMS), rappel H-1, et un 'bonus early bird' pour ceux qui se connectent 5 min avant. Creer un enjeu de presence ('places limitees pour le Q&A') augmente le show rate de 15-20%.",
    application:
      "Configure une sequence de rappels automatiques : J-7, J-1 (email+SMS), H-2, H-0, avec un incentive pour la presence en direct.",
    triggers: ["presence", "show rate", "inscrits", "participation", "rappel", "no-show webinaire"],
    personaAffinity: ["Automator", "Strategist"],
    maturityRange: [20, 80],
    weight: 8,
  },
  {
    id: "ew-003",
    category: "events_webinars",
    principle:
      "La structure 40/40/20 du webinaire : 40% valeur pure (enseignement), 40% demonstration (preuves et cas concrets), 20% offre (transition naturelle vers l'achat). Un webinaire qui vend trop vite perd l'audience ; un webinaire qui ne vend pas du tout gaspille l'opportunite. Le 40/40/20 est le ratio optimal valeur/conversion.",
    application:
      "Structure chaque webinaire en 3 blocs temporels : enseignement pur (40%), cas pratiques et demos (40%), puis transition vers l'offre (20%).",
    triggers: ["structure webinaire", "plan", "contenu webinaire", "presenter", "organiser"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [20, 80],
    weight: 9,
  },
  {
    id: "ew-004",
    category: "events_webinars",
    principle:
      "Live vs evergreen : le live cree l'urgence et l'interaction (conversion 2-3x superieure), l'evergreen scale sans effort. Strategie hybride : lance en live pour valider le contenu et l'offre, puis automatise en evergreen avec les optimisations apprises. Le live est le labo, l'evergreen est l'usine.",
    application:
      "Realise d'abord 3 sessions live pour optimiser le contenu et le taux de conversion, puis transforme la meilleure en webinaire evergreen automatise.",
    triggers: ["evergreen", "automatique", "webinaire auto", "scalable", "repeter", "enregistre"],
    personaAffinity: ["Automator", "Strategist"],
    maturityRange: [40, 100],
    weight: 7,
  },
  {
    id: "ew-005",
    category: "events_webinars",
    principle:
      "La technique du Q&A closing : les dernieres 10 minutes du Q&A sont le moment de conversion maximal. Reponds aux questions en liant chaque reponse a ton offre. Plante des questions ('On me demande souvent si...') si necessaire. Le Q&A transforme la presentation en conversation — et c'est dans la conversation que la vente se fait.",
    application:
      "Reserve 10-15 min pour le Q&A et prepare 3-5 questions/reponses qui redirigent naturellement vers ton offre.",
    triggers: ["q&a", "questions reponses", "interaction", "fin webinaire", "closing", "vendre"],
    personaAffinity: ["Prospector", "Writer"],
    maturityRange: [20, 80],
    weight: 7,
  },
  {
    id: "ew-006",
    category: "events_webinars",
    principle:
      "La sequence de follow-up post-evenement a une fenetre de 72h. Heure 1 : replay + recap. Heure 24 : temoignage + CTA. Heure 48 : urgence (offre expire). Heure 72 : dernier rappel. Au-dela, le prospect a oublie l'emotion ressentie pendant l'evenement. 60% des conversions post-webinaire arrivent dans les premieres 48h.",
    application:
      "Configure une sequence automatique de 4 emails post-webinaire sur 72h avec replay, preuve sociale, urgence, et dernier rappel.",
    triggers: ["follow-up", "apres webinaire", "relance", "sequence post", "email apres"],
    personaAffinity: ["Automator", "Writer"],
    maturityRange: [20, 80],
    weight: 8,
  },
  {
    id: "ew-007",
    category: "events_webinars",
    principle:
      "Le ROI du networking n'est pas immediat — il se mesure sur 6-12 mois. Un contact pris lors d'un evenement met en moyenne 3-5 interactions pour se transformer en opportunite. La cle : le suivi systematique post-evenement. Un message personnalise dans les 24h ('J'ai adore votre question sur X') convertit 5x mieux qu'un ajout LinkedIn generique.",
    application:
      "Apres chaque evenement, envoie un message personnalise dans les 24h a chaque contact pertinent en referencant un element specifique de la rencontre.",
    triggers: ["networking", "evenement", "rencontre", "contact", "conference", "salon"],
    personaAffinity: ["Prospector"],
    maturityRange: [10, 70],
    weight: 7,
  },
  {
    id: "ew-008",
    category: "events_webinars",
    principle:
      "Obtenir un creneau speaker est le raccourci d'autorite le plus puissant. Parler sur scene positionne instantanement comme expert — meme devant 30 personnes. La strategie : commence petit (meetups locaux), enregistre chaque intervention, utilise les videos comme preuve sociale pour obtenir des scenes plus grandes.",
    application:
      "Identifie 3 evenements locaux dans ta niche et propose un sujet specifique avec un titre accrocheur et une bio orientee resultats.",
    triggers: ["speaker", "intervenant", "parler", "conference", "scene", "pitch"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [30, 90],
    weight: 7,
  },
  {
    id: "ew-009",
    category: "events_webinars",
    principle:
      "Le pricing des workshops suit la regle du 'prix du resultat' : un workshop a 500 CHF qui enseigne a signer des clients a 5000 CHF est une evidence. Le format workshop (petit groupe, interactif, action) justifie un prix 5-10x superieur au webinaire car la transformation est plus profonde et le suivi plus personnalise.",
    application:
      "Positionne le workshop comme un accelerateur avec un ROI clair : 'Investis X, apprends a generer Y.' Limite les places a 10-15 pour justifier le premium.",
    triggers: ["workshop", "atelier", "formation", "prix formation", "groupe", "intensif"],
    personaAffinity: ["Strategist"],
    maturityRange: [40, 100],
    weight: 6,
  },
  {
    id: "ew-010",
    category: "events_webinars",
    principle:
      "Le co-webinaire avec un partenaire complementaire double l'audience et la credibilite. Un freelance designer + un copywriter = une audience combinee et une offre plus complete. Regle : choisir un partenaire avec une audience similaire en taille mais complementaire en expertise. Jamais un concurrent direct.",
    application:
      "Identifie 3 partenaires complementaires et propose un webinaire commun ou chacun apporte sa perspective unique sur un probleme partage.",
    triggers: ["co-webinaire", "partenaire", "collaboration", "joint", "invite", "duo"],
    personaAffinity: ["Strategist", "Prospector"],
    maturityRange: [20, 80],
    weight: 6,
  },
  {
    id: "ew-011",
    category: "events_webinars",
    principle:
      "La segmentation des participants post-evenement est critique. 3 segments : les engages (questions, chat actif, restes jusqu'au bout), les passifs (presents mais silencieux), les absents. Chaque segment recoit une sequence differente — l'engage recoit un CTA direct, le passif un recap de valeur, l'absent un replay avec urgence.",
    application:
      "Segmente les participants en 3 groupes apres chaque evenement et personnalise la sequence de suivi pour chaque segment.",
    triggers: ["segmenter", "participants", "categoriser", "apres evenement", "engagement"],
    personaAffinity: ["Automator", "Analyst"],
    maturityRange: [30, 90],
    weight: 7,
  },
  {
    id: "ew-012",
    category: "events_webinars",
    principle:
      "L'urgence du replay : un replay disponible 'indefiniment' n'est jamais regarde. Un replay disponible '48h' est regarde par 60% des inscrits absents. La rarete artificielle fonctionne parce que le cerveau humain priorise ce qui pourrait disparaitre. Meme si tu prevois de le rendre disponible plus tard, la fenetre limitee force l'action immediate.",
    application:
      "Limite l'acces au replay a 48-72h avec un compteur visible et un email de rappel 12h avant expiration.",
    triggers: ["replay", "enregistrement", "revoir", "disponible", "urgence", "expiration"],
    personaAffinity: ["Automator", "Writer"],
    maturityRange: [20, 80],
    weight: 7,
  },
];
