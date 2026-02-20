/**
 * SEO INTENT MAPPING — Strategie de contenu SEO basee sur l'intention de recherche.
 * Mapping des intentions, cluster strategy, et conversion par stade du funnel.
 */
export const SEO_INTENT_MAPPING = {
  name: "seo_intent_mapping",
  description:
    "Framework de strategie de contenu SEO basee sur l'intention de recherche et le mapping intention-funnel.",

  intent_taxonomy: {
    informationnelle: {
      description:
        "L'utilisateur cherche a comprendre, apprendre ou resoudre un probleme. Il n'est pas encore en mode achat. Represente 60-70% des recherches totales.",
      signaux: [
        "comment", "pourquoi", "qu'est-ce que", "guide", "tutoriel", "definition",
        "exemples", "conseils", "astuces", "difference entre",
      ] as const,
      funnel_stage: "TOFU (Top of Funnel) — Awareness",
      format_ideal:
        "Articles longs (2000-3000 mots), guides complets, tutoriels pas-a-pas, listes de ressources, infographies explicatives.",
      cta_adapte:
        "Lead magnet (checklist, template, ebook gratuit) en echange de l'email. Pas de pitch commercial.",
      kpi: "Trafic organique, temps sur page, taux de rebond, inscriptions newsletter.",
    },
    navigationnelle: {
      description:
        "L'utilisateur cherche un site, une marque ou une page specifique. Il sait deja ce qu'il veut. Peu exploitable pour l'acquisition sauf si c'est TA marque qu'il cherche.",
      signaux: [
        "nom de marque", "login", "connexion", "site officiel", "prix [marque]",
        "avis [marque]",
      ] as const,
      funnel_stage: "Navigation directe",
      format_ideal:
        "Pages optimisees pour ta marque, FAQ, pages de comparaison '[ta marque] vs [concurrent]'.",
      cta_adapte: "Acces direct au produit/service, formulaire de contact visible.",
      kpi: "Trafic de marque, taux de clic sur la SERP, branded search volume.",
    },
    commerciale: {
      description:
        "L'utilisateur compare des options et evalue des solutions. Il est proche de l'achat mais pas encore decide. C'est le sweet spot du freelance — haut intent, decision en cours.",
      signaux: [
        "meilleur", "comparatif", "avis", "alternative a", "vs", "top 10",
        "quel [service] choisir", "freelance pour [besoin]",
      ] as const,
      funnel_stage: "MOFU (Middle of Funnel) — Consideration",
      format_ideal:
        "Comparatifs detailles, etudes de cas, temoignages clients, articles 'X vs Y', pages de services optimisees, guides d'achat.",
      cta_adapte:
        "Appel decouverte gratuit, audit offert, devis personnalise, etude de cas telechargeables.",
      kpi: "Taux de conversion devis, leads qualifies generes, position moyenne sur les keywords commerciaux.",
    },
    transactionnelle: {
      description:
        "L'utilisateur est pret a agir — acheter, s'inscrire, reserver. C'est le moment de convertir. Ces keywords ont le moins de volume mais le plus de valeur par visite.",
      signaux: [
        "acheter", "commander", "tarif", "devis", "reserver", "s'inscrire",
        "engager un freelance", "prix [service]",
      ] as const,
      funnel_stage: "BOFU (Bottom of Funnel) — Decision",
      format_ideal:
        "Landing pages optimisees, pages de prix, formulaires de devis, pages de prise de RDV, pages de checkout.",
      cta_adapte:
        "Bouton de reservation direct, formulaire de devis rapide, numero de telephone, chat en direct.",
      kpi: "Taux de conversion, cout par acquisition, valeur par visite, revenue par keyword.",
    },
  },

  cluster_strategy: {
    description:
      "Le modele Hub & Spoke : un article pilier central (3000+ mots, couvre le sujet en profondeur) entoure de 8-12 articles satellites qui traitent chaque sous-sujet en detail. Les liens internes entre le pilier et les satellites renforcent l'autorite topique aux yeux de Google.",
    etapes: [
      "Identifier le sujet pilier principal aligne avec l'offre du freelance.",
      "Lister 10-15 sous-sujets (questions courantes, angles specifiques, problemes connexes).",
      "Filtrer pour ne garder que les sous-sujets avec un volume de recherche mesurable.",
      "Rediger le pilier en premier — il doit couvrir le sujet de facon exhaustive.",
      "Rediger les satellites un par un, chacun avec un angle unique et un lien vers le pilier.",
      "Interconnecter les satellites entre eux quand c'est pertinent.",
      "Mettre a jour le pilier tous les 3-6 mois avec les nouvelles donnees et tendances.",
    ] as const,
    metriques_succes:
      "Trafic organique du cluster (+200-500% en 6 mois), position moyenne des keywords du cluster, nombre de backlinks naturels attires, leads generes par le cluster.",
  },

  content_audit_framework: {
    description:
      "Framework d'audit pour evaluer et optimiser le contenu existant avant de creer du nouveau.",
    criteres: {
      performance:
        "Trafic, position, taux de clic, taux de rebond, temps sur page. Un article en position 5-15 avec un bon CTR merite une optimisation prioritaire.",
      pertinence:
        "Le contenu repond-il encore a l'intention de recherche ? Les informations sont-elles a jour ? Les exemples sont-ils pertinents ?",
      completude:
        "Le contenu couvre-t-il le sujet en profondeur ? Manque-t-il des sections que les concurrents couvrent ? Les 'People Also Ask' sont-ils adresses ?",
      engagement:
        "Le contenu genere-t-il des partages, des commentaires, des backlinks ? Est-il cite comme reference ?",
    },
    actions: {
      optimiser:
        "Articles en position 5-20 avec du potentiel. Enrichir le contenu, optimiser les balises, ajouter des sections manquantes.",
      fusionner:
        "Deux articles sur des sujets proches qui se cannibalisent. Fusionner en un seul article plus complet.",
      supprimer:
        "Contenu obsolete, hors-sujet ou de faible qualite qui dilue l'autorite du domaine. Rediriger l'URL vers un contenu pertinent.",
      creer:
        "Gaps identifies dans le cluster ou keywords sans contenu correspondant.",
    },
  },

  keyword_prioritization: {
    description:
      "Matrice de priorisation des mots-cles pour un freelance avec des ressources limitees.",
    axes: {
      potentiel_business:
        "Note de 1 a 5 : a quel point ce keyword peut generer des leads ou du CA ? Un keyword informationnel avec beaucoup de volume mais zero intent commercial = note 1. Un keyword transactionnel de niche = note 5.",
      difficulte:
        "Note de 1 a 5 : la competition SEO sur ce keyword. Domain Authority des sites en page 1, nombre de backlinks necessaires, qualite du contenu existant.",
      effort_contenu:
        "Note de 1 a 5 : combien de temps et d'expertise pour creer un contenu qui se positionne ? Un article simple vs un guide complet avec donnees originales.",
    },
    formule:
      "Score de priorite = (Potentiel business x 3) - (Difficulte x 2) - (Effort x 1). Prioriser les scores les plus eleves. Commencer par les 'quick wins' : potentiel business eleve, difficulte faible.",
  },
} as const;
