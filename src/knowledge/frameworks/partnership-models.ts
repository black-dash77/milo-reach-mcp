/**
 * PARTNERSHIP MODELS — Templates et structures de partenariat.
 * Referral, co-marketing, white-label, et ecosystemes complementaires.
 */
export const PARTNERSHIP_MODELS = {
  name: "partnership_models",
  description:
    "Modeles de partenariat structures pour freelances : referral, co-marketing, affiliation, white-label et alliances strategiques.",

  referral_program: {
    description:
      "Programme de recommandation structure pour generer des leads qualifies via le reseau existant.",
    structure: {
      commission_ponctuelle: {
        taux: "10-15% du premier projet",
        ideal_pour: "Partenaires occasionnels, clients satisfaits, contacts reseau.",
        minimum_motivant:
          "La commission doit representer au moins 500 CHF pour etre motivante. En dessous, l'effort de recommandation n'en vaut pas la peine pour le referent.",
      },
      commission_recurrente: {
        taux: "5-8% sur chaque projet pendant 12 mois",
        ideal_pour: "Partenaires strategiques actifs, apporteurs d'affaires reguliers.",
        avantage:
          "Cree un revenu passif pour le partenaire qui l'incite a continuer de recommander sur le long terme.",
      },
      reciproque: {
        mecanisme: "Les deux partenaires se recommandent mutuellement sans commission financiere.",
        ideal_pour:
          "Freelances avec des services complementaires et des audiences de taille similaire.",
        tracking:
          "Tracker les leads envoyes dans les deux sens et faire un bilan trimestriel pour equilibrer.",
      },
    },
    mise_en_place: [
      "Definir les criteres d'un 'bon lead' pour eviter les referrals non qualifies.",
      "Creer un formulaire ou lien de tracking dedie a chaque partenaire.",
      "Communiquer la grille de commission de facon transparente.",
      "Payer les commissions dans les 30 jours apres encaissement — jamais en retard.",
      "Envoyer un rapport mensuel au partenaire : leads recus, conversions, commissions dues.",
    ] as const,
  },

  co_marketing: {
    description:
      "Partenariat de co-marketing pour amplifier la portee et partager les couts.",
    formats: {
      co_webinaire: {
        description:
          "Webinaire commun ou chaque partenaire presente son expertise complementaire.",
        repartition:
          "Chaque partenaire invite son audience. Les leads generes sont partages ou attribues selon la source.",
        roi_attendu: "2-3x plus d'inscrits qu'un webinaire solo, leads pre-qualifies par la confiance croisee.",
      },
      contenu_co_cree: {
        description: "Article, guide, podcast ou video cree a quatre mains.",
        formats_recommandes: [
          "Guide complet co-brande (ex: 'Le guide du lancement SaaS par [designer] et [dev]').",
          "Podcast croise : chacun est invite sur le podcast de l'autre.",
          "Etude de cas croisee : un projet commun documente des deux perspectives.",
        ] as const,
        distribution:
          "Chaque partenaire publie et partage le contenu avec sa propre audience. Double exposition, moitie effort.",
      },
      evenement_commun: {
        description: "Atelier, meetup ou conference co-organise.",
        avantage:
          "Partage des couts (lieu, logistique, promotion) et des audiences. Positionnement en duo d'experts complementaires.",
        regle:
          "Choisir un partenaire avec une audience de taille similaire. Un desequilibre trop grand cree de la frustration.",
      },
    },
    kpis_partages: [
      "Leads generes par chaque canal (tracking par source).",
      "CA attribuable au partenariat dans les 90 jours.",
      "Taux de conversion des leads co-generes vs leads solo.",
      "NPS des participants aux events communs.",
    ] as const,
  },

  white_label: {
    description:
      "Modele de services fournis sous la marque d'une agence partenaire.",
    avantages: [
      "Volume de projets garanti sans effort de prospection.",
      "Revenus previsibles sur 6-12 mois.",
      "Exposition a des projets plus grands et plus complexes.",
    ] as const,
    risques: [
      "Invisibilite : les clients finaux ne connaissent pas le freelance.",
      "Dependance : si l'agence perd le client, le freelance perd le revenu.",
      "Pression sur les marges : l'agence prend une part significative.",
    ] as const,
    regles_de_securite: {
      plafond_ca:
        "Jamais plus de 40% du CA en white-label. Au-dela, la dependance est trop forte.",
      contrat_ecrit:
        "Toujours un accord formel couvrant : perimetre, tarifs, delais de paiement, PI, non-sollicitation, et conditions de fin.",
      tarification:
        "Le tarif white-label doit etre au minimum 60-70% du tarif client direct. En dessous, la marge ne justifie pas l'invisibilite.",
      strategie_sortie:
        "Utiliser le revenu white-label pour financer la croissance de la marque propre. Le white-label est un tremplin, pas une destination.",
    },
  },

  affiliate_program: {
    description:
      "Programme d'affiliation pour vendre des produits digitaux via un reseau de recommandeurs.",
    prerequis: [
      "Un produit digital de qualite (cours, template, outil) avec un taux de satisfaction >90%.",
      "Une page de vente optimisee avec un taux de conversion valide (>3%).",
      "Un systeme de tracking et de paiement automatise (ThriveCart, Gumroad, Lemonsqueezy).",
    ] as const,
    structure: {
      commission: "20-30% du prix de vente. Le taux doit etre assez eleve pour motiver sans detruire la marge.",
      cookie_duration:
        "90 jours minimum. Le prospect peut mettre du temps a convertir — un cookie trop court punit l'affilie.",
      support_affilies: [
        "Kit de promotion : emails pre-ecrits, visuels, textes pour reseaux sociaux.",
        "Dashboard de suivi : ventes, commissions, clics en temps reel.",
        "Formation rapide sur le produit et le pitch ideal.",
      ] as const,
    },
    recrutement: [
      "Commencer par les clients satisfaits — ce sont les meilleurs ambassadeurs.",
      "Contacter les influenceurs de la niche avec un acces gratuit au produit.",
      "Proposer des conditions speciales aux premiers affilies (commission majoree pendant 6 mois).",
    ] as const,
  },

  partnership_evaluation: {
    description:
      "Grille d'evaluation pour qualifier un partenariat potentiel avant de s'engager.",
    criteres: {
      alignement_audience: {
        question: "L'audience du partenaire correspond-elle a ton ICP ?",
        poids: "Critique. Un partenaire avec la mauvaise audience = zero valeur.",
        score: "1 (aucun alignement) a 5 (alignement parfait)",
      },
      taille_comparable: {
        question: "L'audience du partenaire est-elle de taille comparable a la tienne ?",
        poids: "Important. Un desequilibre trop grand cree un rapport de force defavorable.",
        score: "1 (10x plus grand ou plus petit) a 5 (taille similaire)",
      },
      reputation: {
        question: "Le partenaire a-t-il une reputation solide et alignee avec tes valeurs ?",
        poids: "Important. Ta reputation est liee a celle de ton partenaire.",
        score: "1 (reputation douteuse) a 5 (reputation excellente)",
      },
      complementarite: {
        question: "Les offres sont-elles complementaires sans se chevaucher ?",
        poids: "Essentiel. Un partenaire avec la meme offre est un concurrent deguise.",
        score: "1 (concurrent direct) a 5 (parfaitement complementaire)",
      },
      engagement: {
        question: "Le partenaire est-il pret a investir du temps et des ressources ?",
        poids: "Bloquant. Un partenariat unilateral est voue a l'echec.",
        score: "1 (aucun effort) a 5 (investissement egal)",
      },
    },
    seuil_decision:
      "Score minimum de 18/25 pour engager un partenariat actif. En dessous de 15, le partenariat ne vaut pas l'investissement.",
  },

  partner_tiering: {
    description:
      "Systeme de tiers pour structurer et motiver les partenaires selon leur niveau d'engagement.",
    bronze: {
      critere: "1-3 referrals par trimestre ou engagement ponctuel.",
      avantages: [
        "Commission standard (10%).",
        "Mention dans le repertoire de partenaires.",
        "Acces au kit de promotion.",
      ] as const,
    },
    silver: {
      critere: "4-10 referrals par trimestre ou projets communs reguliers.",
      avantages: [
        "Commission majoree (12-15%).",
        "Co-branding sur les projets communs.",
        "Invitation aux evenements exclusifs.",
        "Support prioritaire.",
      ] as const,
    },
    gold: {
      critere: "10+ referrals par trimestre ou co-marketing actif avec ROI mesure.",
      avantages: [
        "Commission premium (15-20%) + bonus trimestriel.",
        "Co-marketing actif (webinaires, contenu, events).",
        "Acces anticipe a tous les nouveaux produits.",
        "Appel strategique mensuel.",
        "Mise en avant publique comme partenaire privilegiee.",
      ] as const,
    },
  },
} as const;
