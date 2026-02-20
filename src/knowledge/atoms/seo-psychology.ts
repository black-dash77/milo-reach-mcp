import type { BrainAtom } from "./types.js";

/**
 * SEO PSYCHOLOGY — 12 atoms on search intent mapping and content-for-search strategy.
 * Search behavior, content clusters, EEAT, and intent-to-funnel mapping for freelancers.
 */
export const SEO_PSYCHOLOGY_ATOMS: BrainAtom[] = [
  {
    id: "seo-001",
    category: "seo_psychology",
    principle:
      "La hierarchie des intentions de recherche : informationnelle ('comment faire X'), navigationnelle ('outil Y login'), commerciale ('meilleur outil pour X'), transactionnelle ('acheter X'). Un freelance doit creer du contenu pour chaque stade, mais concentrer 60% de son effort sur le commercial — c'est la ou se trouvent les prospects chauds.",
    application:
      "Categorise les mots-cles cibles par intention et priorise les mots-cles a intention commerciale pour le contenu de conversion.",
    triggers: ["seo", "recherche", "google", "mots-cles", "intention", "contenu"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [10, 70],
    weight: 9,
  },
  {
    id: "seo-002",
    category: "seo_psychology",
    principle:
      "Le modele de cluster de contenu : un pilier central (article de 3000+ mots) entoure de 8-12 articles satellites lies par des liens internes. Google recompense l'autorite topique — etre l'expert complet d'un sujet bat etre mediocre sur 50. Un cluster bien construit multiplie le trafic organique par 3-5x en 6 mois.",
    application:
      "Identifie le sujet pilier principal du freelance et dessine un cluster de 10 articles satellites couvrant chaque angle du sujet.",
    triggers: ["cluster", "pilier", "articles", "blog", "contenu", "strategie editoriale"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [20, 80],
    weight: 8,
  },
  {
    id: "seo-003",
    category: "seo_psychology",
    principle:
      "EEAT pour freelances (Experience, Expertise, Autorite, Trust) : Google privilegie les contenus ecrits par quelqu'un qui a FAIT la chose, pas juste qui en parle. Inclure des exemples reels de projets, des screenshots, des chiffres personnels. Un article avec 'J'ai teste ca sur 15 clients et voici les resultats' bat un article generique 10 fois sur 10.",
    application:
      "Enrichis chaque article de blog avec des exemples concrets, des resultats de projets reels et des donnees proprietaires.",
    triggers: ["eeat", "autorite", "expertise", "credibilite", "google", "confiance"],
    personaAffinity: ["Writer", "Strategist"],
    maturityRange: [20, 90],
    weight: 8,
  },
  {
    id: "seo-004",
    category: "seo_psychology",
    principle:
      "L'optimisation pour les featured snippets : structure les reponses en paragraphes de 40-60 mots, listes numerotees, ou tableaux. Google extrait ces formats pour la position 0. Un featured snippet capte 35% des clics — c'est la premiere impression avant meme que le prospect visite ton site.",
    application:
      "Reformate les sections cles des articles avec des reponses concises de 40-60 mots, des listes a puces et des tableaux de comparaison.",
    triggers: ["featured snippet", "position zero", "reponse rapide", "encadre", "extrait"],
    personaAffinity: ["Writer"],
    maturityRange: [30, 90],
    weight: 6,
  },
  {
    id: "seo-005",
    category: "seo_psychology",
    principle:
      "Le SEO semantique depasse le mot-cle exact. Google comprend les entites, les relations et le contexte. Couvrir un sujet en profondeur avec le vocabulaire complet du champ semantique (synonymes, termes lies, questions associees) signale une expertise reelle a l'algorithme.",
    application:
      "Utilise les 'People Also Ask' de Google et les termes NLP associes pour enrichir chaque article du champ semantique complet du sujet.",
    triggers: ["semantique", "nlp", "champ lexical", "entites", "profondeur", "completude"],
    personaAffinity: ["Writer", "Strategist"],
    maturityRange: [30, 90],
    weight: 7,
  },
  {
    id: "seo-006",
    category: "seo_psychology",
    principle:
      "Le SEO local est un levier sous-estime pour les freelances. 46% des recherches Google ont une intention locale. Un profil Google Business optimise avec des avis clients, des photos de projets et des posts reguliers peut generer 5-10 leads qualifies par mois a cout zero.",
    application:
      "Cree et optimise un profil Google Business avec categorie precise, avis clients, et publications hebdomadaires montrant des projets recents.",
    triggers: ["local", "google business", "avis", "geolocalisation", "ville", "region"],
    personaAffinity: ["Prospector", "Strategist"],
    maturityRange: [10, 60],
    weight: 7,
  },
  {
    id: "seo-007",
    category: "seo_psychology",
    principle:
      "La strategie de rafraichissement : un article mis a jour tous les 6-12 mois performe mieux qu'un article neuf. Google favorise la fraicheur. Mettre a jour les donnees, ajouter des sections, actualiser les exemples — le ratio effort/resultat est 5x meilleur que creer du contenu neuf.",
    application:
      "Planifie un audit trimestriel des 10 meilleurs articles : mets a jour les donnees, ajoute des sections et rafraichis les exemples.",
    triggers: ["mise a jour", "rafraichir", "ancien article", "actualiser", "obsolete", "date"],
    personaAffinity: ["Writer", "Analyst"],
    maturityRange: [30, 100],
    weight: 7,
  },
  {
    id: "seo-008",
    category: "seo_psychology",
    principle:
      "La psychologie du backlink : les gens linkent vers du contenu qui les fait paraitre intelligents aupres de LEUR audience. Cree du contenu 'linkable' : etudes originales, statistiques exclusives, frameworks nommables, outils gratuits. Un article avec des donnees proprietaires recoit 5x plus de backlinks qu'un article d'opinion.",
    application:
      "Cree un contenu phare par trimestre avec des donnees originales, un framework nomme ou un outil gratuit concu pour attirer des backlinks naturels.",
    triggers: ["backlink", "lien", "autorite", "domaine", "link building", "netlinking"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [40, 100],
    weight: 7,
  },
  {
    id: "seo-009",
    category: "seo_psychology",
    principle:
      "Le mapping intention-funnel : informationnel → TOFU (awareness), commercial → MOFU (consideration), transactionnel → BOFU (decision). Chaque contenu doit avoir un CTA adapte a son stade : TOFU = lead magnet, MOFU = etude de cas, BOFU = prise de RDV. Un CTA mal aligne tue la conversion.",
    application:
      "Verifie que chaque contenu a un CTA adapte a son stade funnel : newsletter pour TOFU, demo pour MOFU, devis pour BOFU.",
    triggers: ["funnel", "entonnoir", "conversion", "cta", "parcours", "stade"],
    personaAffinity: ["Strategist", "Analyst"],
    maturityRange: [20, 80],
    weight: 8,
  },
  {
    id: "seo-010",
    category: "seo_psychology",
    principle:
      "Le matching difficulte-autorite : un site avec un Domain Authority de 20 ne doit pas viser des mots-cles de difficulte 70+. Commence par les 'low-hanging fruits' — mots-cles a difficulte 10-30 avec 100-500 recherches mensuelles. 20 articles bien positionnes sur des requetes de niche valent mieux qu'un article invisible sur une requete competitive.",
    application:
      "Filtre les mots-cles cibles pour ne garder que ceux dont la difficulte est inferieure ou egale a l'autorite du domaine + 10 points.",
    triggers: ["difficulte", "competition", "mot-cle", "domain authority", "accessible", "facile"],
    personaAffinity: ["Analyst", "Strategist"],
    maturityRange: [10, 70],
    weight: 8,
  },
  {
    id: "seo-011",
    category: "seo_psychology",
    principle:
      "L'analyse de gap de contenu : compare les mots-cles pour lesquels tes concurrents se positionnent et pas toi. Ces gaps sont des opportunites directes. Un concurrent qui ranke sur 'consultant CRM Geneve' et pas toi signifie qu'il capte des prospects qui pourraient etre les tiens.",
    application:
      "Realise une analyse de gap mensuelle avec 3-5 concurrents directs et priorise les mots-cles a fort potentiel commercial non couverts.",
    triggers: ["gap", "lacune", "concurrent", "manque", "opportunite", "analyse concurrentielle"],
    personaAffinity: ["Analyst", "Strategist"],
    maturityRange: [30, 90],
    weight: 7,
  },
  {
    id: "seo-012",
    category: "seo_psychology",
    principle:
      "Long-form vs short-form : les articles de 2500+ mots rankent en moyenne 3 positions plus haut, mais seulement s'ils sont complets et bien structures. Un article court (800 mots) bien cible sur une requete precise bat un article long et dilue. La regle : aussi long que necessaire, aussi court que possible.",
    application:
      "Adapte la longueur du contenu a l'intention : reponses directes en 800-1200 mots, guides complets en 2500-4000 mots, etudes de cas en 1500-2000 mots.",
    triggers: ["longueur", "combien de mots", "article long", "court", "format", "taille"],
    personaAffinity: ["Writer"],
    maturityRange: [10, 80],
    weight: 6,
  },
];
