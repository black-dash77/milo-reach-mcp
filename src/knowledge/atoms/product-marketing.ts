import type { BrainAtom } from "./types.js";

/**
 * PRODUCT MARKETING — 12 atoms on launch psychology and feature marketing.
 * Launch sequences, beta programs, and version psychology for freelancers.
 */
export const PRODUCT_MARKETING_ATOMS: BrainAtom[] = [
  {
    id: "pm-001",
    category: "product_marketing",
    principle:
      "La sequence de lancement en 5 phases : Pre-buzz (J-30, teasing), Waitlist (J-21, creation de la demande), Pre-launch (J-7, contenu educatif), Launch (J0, ouverture avec urgence), Post-launch (J+7, preuves sociales). Chaque phase active un biais psychologique different : curiosite → anticipation → autorite → rarete → conformite sociale.",
    application:
      "Planifie chaque lancement avec un calendrier de 5 semaines couvrant les 5 phases et assignant un contenu specifique a chaque phase.",
    triggers: ["lancement", "launch", "nouveau produit", "sortie", "mise en marche"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [30, 100],
    weight: 9,
  },
  {
    id: "pm-002",
    category: "product_marketing",
    principle:
      "Le programme beta active 3 leviers psychologiques : l'exclusivite ('choisi parmi X candidats'), le sentiment de co-creation ('votre feedback faconne le produit'), et la preuve sociale anticipee ('les beta testeurs recommandent a 85%'). Un beta bien gere genere des ambassadeurs avant meme le lancement — ils defendent le produit parce qu'ils y ont contribue.",
    application:
      "Lance un programme beta de 2-4 semaines avec 10-20 participants selectionnes, un canal de feedback dedie, et une obligation de temoignage post-beta.",
    triggers: ["beta", "test", "pre-lancement", "early access", "acces anticipe", "testeur"],
    personaAffinity: ["Strategist", "Prospector"],
    maturityRange: [30, 90],
    weight: 7,
  },
  {
    id: "pm-003",
    category: "product_marketing",
    principle:
      "Le framework d'annonce de feature : Probleme (ce que les utilisateurs n'arrivaient pas a faire) → Solution (ce que la nouvelle feature permet) → Proof (un cas concret avec resultat) → CTA (comment l'utiliser). Ne jamais annoncer une feature par ses specifications techniques — toujours par le probleme qu'elle resout. 'Nouvelle API v3' ne dit rien. 'Automatisez vos relances en 2 clics' dit tout.",
    application:
      "Redige chaque annonce de feature en suivant PSPC : Probleme vecu par l'utilisateur, Solution apportee, Preuve concrete, et Call-to-action.",
    triggers: ["feature", "fonctionnalite", "nouveaute", "mise a jour", "annonce", "update"],
    personaAffinity: ["Writer"],
    maturityRange: [20, 80],
    weight: 7,
  },
  {
    id: "pm-004",
    category: "product_marketing",
    principle:
      "La psychologie de la waitlist : le simple fait de s'inscrire sur une liste d'attente augmente le desir de 300% (effet de rarete + engagement). Les elements cles : montrer le nombre d'inscrits ('1247 en attente'), offrir un bonus pour le partage ('Passe devant en invitant 3 amis'), et communiquer regulierement ('Vous etes #234, lancement dans 12 jours').",
    application:
      "Cree une page waitlist avec compteur d'inscrits, systeme de parrainage pour remonter dans la file, et emails de progression hebdomadaires.",
    triggers: ["waitlist", "liste attente", "pre-inscription", "attendre", "bientot"],
    personaAffinity: ["Strategist", "Automator"],
    maturityRange: [30, 90],
    weight: 7,
  },
  {
    id: "pm-005",
    category: "product_marketing",
    principle:
      "Le early bird vs pricing de lancement : le prix early bird recompense l'action rapide (urgence temporelle), le prix de lancement recompense la confiance (risque plus eleve = prix plus bas). Regle : le early bird ne doit pas depasser -30% du prix final. Au-dela, tu devalues le produit. Et TOUJOURS communiquer le prix final a cote du prix reduit pour ancrer la valeur.",
    application:
      "Fixe le prix early bird a -20 a -30% du prix final avec une deadline precise et un compteur visible. Affiche toujours les deux prix.",
    triggers: ["early bird", "prix lancement", "reduction", "promotion", "offre speciale"],
    personaAffinity: ["Strategist"],
    maturityRange: [20, 80],
    weight: 8,
  },
  {
    id: "pm-006",
    category: "product_marketing",
    principle:
      "La collecte de temoignages est un processus, pas un accident. Demande le temoignage au moment du pic emotionnel — juste apres un succes, une livraison, ou un resultat mesurable. Le template : 'Quelle etait votre situation avant ? Qu'est-ce qui a change ? Quel resultat concret avez-vous obtenu ?' Un bon temoignage raconte une transformation, pas une satisfaction.",
    application:
      "Automatise une demande de temoignage 48h apres chaque livraison reussie avec un questionnaire guide de 4 questions orientees transformation.",
    triggers: ["temoignage", "avis client", "retour", "feedback", "recommandation", "review"],
    personaAffinity: ["Automator", "Prospector"],
    maturityRange: [10, 80],
    weight: 9,
  },
  {
    id: "pm-007",
    category: "product_marketing",
    principle:
      "Les launch partners amplifient un lancement de 3-5x. Identifie 5-10 personnes influentes dans ta niche et propose-leur un acces anticipe gratuit en echange d'un post le jour du lancement. La cle : facilite-leur la tache — fournis les visuels, le texte, et le lien. Plus tu reduis l'effort, plus ils participent.",
    application:
      "Recrute 5-10 launch partners 3 semaines avant le lancement, fournis-leur un kit de communication complet et coordonne les publications le jour J.",
    triggers: ["launch partner", "influenceur", "amplifier", "partenaire lancement", "relais"],
    personaAffinity: ["Prospector", "Strategist"],
    maturityRange: [30, 90],
    weight: 7,
  },
  {
    id: "pm-008",
    category: "product_marketing",
    principle:
      "Soft launch vs hard launch : le soft launch teste le produit avec un petit groupe (<100 personnes), corrige les problemes, et collecte des temoignages AVANT le hard launch public. Le hard launch arrive avec des preuves solides, une offre optimisee, et une communication rodee. Un hard launch sans soft launch est un pari — un soft launch reduit le risque a presque zero.",
    application:
      "Planifie toujours un soft launch de 2 semaines avant le hard launch pour valider l'offre, corriger les bugs et accumuler les preuves sociales.",
    triggers: ["soft launch", "lancement doux", "tester", "pre-lancement", "valider"],
    personaAffinity: ["Strategist"],
    maturityRange: [30, 90],
    weight: 7,
  },
  {
    id: "pm-009",
    category: "product_marketing",
    principle:
      "L'engagement post-launch determine la retention. Les 30 jours apres le lancement sont critiques : onboarding guide (J1-3), premier quick win (J4-7), premiere milestone (J14), check-in (J30). Un client qui n'a pas de quick win dans les 7 premiers jours a 60% de chances de churner. Le lancement n'est pas la fin — c'est le debut de la relation.",
    application:
      "Configure une sequence d'onboarding post-achat de 30 jours avec des etapes cles orientees vers le premier resultat concret.",
    triggers: ["post-lancement", "onboarding", "retention", "apres achat", "activation"],
    personaAffinity: ["Automator", "Strategist"],
    maturityRange: [20, 90],
    weight: 8,
  },
  {
    id: "pm-010",
    category: "product_marketing",
    principle:
      "La psychologie de la mise a jour : un upgrade n'est pas une vente — c'est une invitation a plus de valeur. Le framework : rappelle les resultats obtenus (ancrage positif), montre ce qui devient possible avec l'upgrade (desir), et cree une offre de migration facilitee (reduire la friction). Le client existant a un cout d'acquisition de 0 — l'upgrade est le levier de croissance le plus rentable.",
    application:
      "Presente chaque upgrade comme une evolution naturelle en montrant les resultats actuels et le potentiel supplementaire deblocable.",
    triggers: ["upgrade", "mise a jour", "version", "amelioration", "evolution", "migration"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [30, 100],
    weight: 7,
  },
  {
    id: "pm-011",
    category: "product_marketing",
    principle:
      "Le pipeline d'etudes de cas : chaque projet client reussi est une etude de cas potentielle. Le process : obtenir l'accord pendant le projet (pas apres), documenter pendant l'execution (pas de memoire), publier dans les 30 jours post-livraison. Un freelance avec 10 etudes de cas detaillees n'a plus besoin de pitcher — le contenu vend pour lui.",
    application:
      "Integre la demande d'etude de cas dans le contrat initial et documente chaque projet avec des captures avant/pendant/apres.",
    triggers: ["etude de cas", "case study", "portfolio", "resultats", "succes client"],
    personaAffinity: ["Writer", "Prospector"],
    maturityRange: [20, 80],
    weight: 8,
  },
  {
    id: "pm-012",
    category: "product_marketing",
    principle:
      "Le re-launch : relancer un produit existant avec un angle neuf est souvent plus rentable que de creer un nouveau produit. Nouveau packaging, nouveau positionnement, nouvelles preuves sociales, nouveau canal. Le produit est le meme mais le message change. Un re-launch bien execute genere 50-70% du CA du launch initial avec 20% de l'effort.",
    application:
      "Tous les 6 mois, evalue tes offres existantes pour un potentiel de re-launch avec un nouvel angle, de nouvelles preuves, ou un nouveau canal.",
    triggers: ["relancer", "re-launch", "reanimer", "ancien produit", "nouvelle version"],
    personaAffinity: ["Strategist"],
    maturityRange: [40, 100],
    weight: 6,
  },
];
