import type { BrainAtom } from "./types.js";

export const OFFER_ATOMS: BrainAtom[] = [
  {
    id: "off-001",
    category: "offer",
    principle:
      "Une offre irresistible selon Hormozi : la valeur percue doit etre au moins 10x le prix demande. Valeur = (Resultat reve x Probabilite percue de succes) / (Temps de latence x Effort requis). Augmenter les deux premiers, diminuer les deux derniers.",
    application:
      "Restructure l'offre du freelance pour maximiser chaque variable de l'equation de valeur Hormozi.",
    triggers: ["offre", "proposition", "valeur", "irresistible", "convaincre", "pourquoi moi"],
    personaAffinity: ["Strategist"],
    maturityRange: [20, 80],
    weight: 9,
  },
  {
    id: "off-002",
    category: "offer",
    principle:
      "La structure en 3 paliers est un levier psychologique, pas juste commercial. Le palier du milieu est l'ancre — c'est celui que tu veux vendre. Le palier bas existe pour que le milieu paraisse raisonnable. Le palier haut existe pour que le milieu paraisse accessible.",
    application:
      "Construit une offre en 3 paliers ou chaque palier a un role psychologique precis dans la decision.",
    triggers: ["palier", "option", "package", "formule", "tier", "gamme"],
    personaAffinity: ["Strategist"],
    maturityRange: [20, 70],
    weight: 8,
  },
  {
    id: "off-003",
    category: "offer",
    principle:
      "Ne jamais vendre du temps — vendre une transformation. '5 jours de consulting' est une depense. 'Un systeme qui genere 20 leads qualifies par mois' est un investissement. La transformation doit etre mesurable, temporalisee et desirable.",
    application:
      "Reformule l'offre en termes de transformation client avec un resultat mesurable et une timeline claire.",
    triggers: ["tjm", "taux journalier", "temps", "jours", "heures", "facturer"],
    personaAffinity: ["Strategist"],
    maturityRange: [10, 60],
    weight: 9,
  },
  {
    id: "off-004",
    category: "offer",
    principle:
      "Les bonus strategiques augmentent la valeur percue sans augmenter le cout. Un template, un guide, un acces communaute, un appel supplementaire — chaque bonus doit resoludre une objection specifique ou eliminer une friction dans la delivrance.",
    application:
      "Identifie les 3 principales objections du prospect et cree un bonus qui neutralise chacune.",
    triggers: ["bonus", "inclus", "gratuit", "ajouter", "valeur ajoutee", "plus"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [30, 80],
    weight: 6,
  },
  {
    id: "off-005",
    category: "offer",
    principle:
      "La garantie est le plus puissant eliminateur de risque. Garantie de resultat > garantie satisfait ou rembourse > pas de garantie. Plus la garantie est forte, plus le taux de conversion augmente — et paradoxalement, moins elle est utilisee.",
    application:
      "Propose une garantie calibree au niveau de confiance du freelance : resultat minimum garanti ou extension gratuite.",
    triggers: ["garantie", "risque", "engagement", "peur", "hesitation", "rembourser"],
    personaAffinity: ["Strategist"],
    maturityRange: [30, 90],
    weight: 8,
  },
  {
    id: "off-006",
    category: "offer",
    principle:
      "L'offre d'entree (tripwire) a un seul objectif : transformer un prospect en client. Le premier achat est le plus difficile. Un audit a 97EUR, un mini-service, un atelier — faible ticket, haute valeur, zero risque. Une fois client, l'upsell vers l'offre coeur est 5x plus facile.",
    application:
      "Cree une offre d'entree a faible friction qui demontre l'expertise et ouvre la porte a l'offre principale.",
    triggers: ["premier client", "commencer", "test", "essai", "petit budget", "decouvrir"],
    personaAffinity: ["Strategist", "Prospector"],
    maturityRange: [0, 50],
    weight: 7,
  },
  {
    id: "off-007",
    category: "offer",
    principle:
      "Le recurring revenue est le saint graal du freelance. Un retainer mensuel de 2K vaut plus que des projets ponctuels de 10K — la previsibilite reduit le stress, stabilise le CA, et permet de dire non aux mauvais projets.",
    application:
      "Identifie les composantes de l'offre transformables en retainer mensuel et propose une structure d'abonnement.",
    triggers: ["recurrent", "mensuel", "abonnement", "retainer", "regulier", "stable", "previsible"],
    personaAffinity: ["Strategist"],
    maturityRange: [40, 100],
    weight: 8,
  },
  {
    id: "off-008",
    category: "offer",
    principle:
      "L'offre productisee (meme livrable, meme process, meme prix) est 3x plus rentable que le sur-mesure. La standardisation du delivery permet de scaler sans scaler les heures. Le client achete la certitude du resultat, pas la personnalisation du process.",
    application:
      "Identifie le service le plus demande et propose une version productisee avec scope, prix et timeline fixes.",
    triggers: ["productiser", "standardiser", "scaler", "systematiser", "process", "automatiser"],
    personaAffinity: ["Strategist", "Automator"],
    maturityRange: [40, 90],
    weight: 7,
  },
  {
    id: "off-009",
    category: "offer",
    principle:
      "Le 'scope of work' detaille protege le freelance et rassure le client. Chaque delivrable doit etre nomme, quantifie et temporalise. Ce qui n'est pas dans le scope n'est pas inclus — communique clairement en amont.",
    application:
      "Structure une proposition avec scope precis, delivrables listes, timeline et conditions de revision.",
    triggers: ["devis", "proposition", "scope", "livrable", "deadline", "contrat"],
    personaAffinity: ["Strategist"],
    maturityRange: [10, 60],
    weight: 6,
  },
  {
    id: "off-010",
    category: "offer",
    principle:
      "L'upsell le plus naturel est celui qui resout le probleme suivant. Apres un site web, le client a besoin de trafic. Apres du trafic, il a besoin de conversion. Chaque offre doit ouvrir la porte a la suivante dans une progression logique.",
    application:
      "Cartographie le parcours client post-achat et identifie les upsells naturels a chaque etape.",
    triggers: ["upsell", "vente additionnelle", "suite", "apres", "prochain", "complementaire"],
    personaAffinity: ["Strategist", "Automator"],
    maturityRange: [30, 80],
    weight: 7,
  },
  {
    id: "off-011",
    category: "offer",
    principle:
      "La valeur perceptuelle se construit par le naming et le packaging. 'Accompagnement digital' est generique. 'Le Sprint 90 — Systeme d'acquisition clients en 90 jours' est proprietary, desirable et memorable. Nommer sa methode cree une categorie.",
    application:
      "Aide le freelance a nommer sa methode et ses offres avec un vocabulaire qui cree de la propriete intellectuelle.",
    triggers: ["nom", "marque", "methode", "framework", "systeme", "programme"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [30, 80],
    weight: 7,
  },
  {
    id: "off-012",
    category: "offer",
    principle:
      "Le stacking de valeur : lister chaque composante de l'offre avec sa valeur individuelle avant de reveler le prix total. 'Audit (valeur 500EUR) + Strategie (valeur 2000EUR) + Implementation (valeur 3000EUR) + Suivi 3 mois (valeur 1500EUR) = 7000EUR de valeur, prix : 3500EUR.' Le cerveau compare le stack au prix, pas le prix au portefeuille.",
    application:
      "Decompose l'offre en composantes valorisees individuellement pour amplifier la valeur percue totale.",
    triggers: ["valeur", "combien ca vaut", "justifier le prix", "trop cher", "investissement"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [20, 70],
    weight: 7,
  },
];
