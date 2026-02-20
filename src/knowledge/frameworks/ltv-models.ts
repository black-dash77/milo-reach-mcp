/**
 * LTV MODELS — Modeles de calcul de la Customer Lifetime Value.
 * Formules, segmentation, et strategies d'optimisation de la LTV pour freelances.
 */
export const LTV_MODELS = {
  name: "ltv_models",
  description:
    "Modeles de calcul et d'optimisation de la Customer Lifetime Value adaptes aux freelances et petites structures de services.",

  formules: {
    ltv_simple: {
      description:
        "Formule de base pour calculer la valeur vie client d'un freelance.",
      formule:
        "LTV = Valeur moyenne d'un projet x Frequence d'achat annuelle x Duree de relation en annees",
      exemple:
        "Valeur moyenne = 5000 CHF, Frequence = 2 projets/an, Duree = 3 ans → LTV = 5000 x 2 x 3 = 30 000 CHF",
      quand_utiliser:
        "Premiere estimation rapide. Suffisant pour 80% des freelances qui veulent definir leur budget d'acquisition client.",
    },

    ltv_avec_marge: {
      description:
        "Prend en compte la marge beneficiaire pour calculer la valeur reelle, pas juste le CA.",
      formule:
        "LTV nette = (Valeur moyenne x Marge brute %) x Frequence annuelle x Duree de relation",
      exemple:
        "Valeur = 5000 CHF, Marge = 70%, Frequence = 2/an, Duree = 3 ans → LTV nette = (5000 x 0.7) x 2 x 3 = 21 000 CHF",
      quand_utiliser:
        "Pour les freelances avec des couts directs significatifs (sous-traitance, outils, licences). Donne une image plus realiste de la rentabilite.",
    },

    ltv_avec_retention: {
      description:
        "Integre le taux de retention annuel pour un calcul plus precis.",
      formule:
        "LTV = Revenu annuel moyen par client / (1 - Taux de retention annuel)",
      exemple:
        "Revenu annuel = 10 000 CHF, Taux de retention = 80% (0.8) → LTV = 10 000 / (1 - 0.8) = 50 000 CHF",
      quand_utiliser:
        "Pour les modeles recurrents (retainer, abonnement) ou les freelances avec des relations client longues et variables.",
      note:
        "Ce modele suppose un revenu et une retention constants. En realite, la retention decroit avec le temps — ce modele surestime legerement la LTV reelle.",
    },

    ltv_segmentee: {
      description:
        "Calcul de LTV par segment de clients pour identifier les segments les plus rentables.",
      methode: [
        "Segmenter les clients par critere : secteur, taille, type de projet, source d'acquisition.",
        "Calculer la LTV de chaque segment separement.",
        "Comparer les segments : certains segments ont une LTV 3-5x superieure a d'autres.",
        "Concentrer les efforts d'acquisition sur les segments a LTV elevee.",
      ] as const,
      exemple:
        "Segment A (startups SaaS) : LTV = 45 000 CHF. Segment B (PME traditionnelles) : LTV = 12 000 CHF. Decision : prioriser le segment A dans la prospection et le contenu.",
    },
  },

  ratio_ltv_cac: {
    description:
      "Le ratio LTV/CAC est la metrique unitaire la plus importante pour evaluer la viabilite de l'acquisition client.",
    calcul: "Ratio = LTV / CAC (Cout d'Acquisition Client)",
    interpretation: {
      inferieur_a_1:
        "Chaque client coute plus a acquerir qu'il ne rapporte. Le business est non viable a terme. Action urgente : reduire le CAC ou augmenter la LTV.",
      entre_1_et_3:
        "Zone de danger. Le business est fragile — une hausse du CAC ou une baisse de la retention peut le rendre non rentable. Objectif : augmenter le ratio.",
      entre_3_et_5:
        "Zone saine. Le business est rentable et peut investir en croissance. C'est la cible pour la plupart des freelances.",
      superieur_a_5:
        "Excellent, mais peut indiquer un sous-investissement en acquisition. Potentiellement, le freelance pourrait croitre plus vite en augmentant le budget marketing.",
    },
    optimisation: {
      augmenter_ltv: [
        "Upsell : proposer des services complementaires aux clients existants.",
        "Cross-sell : introduire de nouvelles offres (formations, audits, retainers).",
        "Retention : ameliorer le service pour prolonger la duree de relation.",
        "Prix : augmenter les tarifs pour les nouveaux clients (sans impacter les existants).",
      ] as const,
      reduire_cac: [
        "Referral : les recommandations ont un CAC quasi-nul.",
        "Contenu organique : SEO, LinkedIn, newsletter — investissement temps mais cout monetaire faible.",
        "Optimisation du funnel : ameliorer le taux de conversion a chaque etape reduit le CAC global.",
        "Qualification : mieux qualifier les leads en amont pour eviter de dépenser du temps sur les mauvais prospects.",
      ] as const,
    },
  },

  cac_par_canal: {
    description:
      "Framework pour calculer le CAC (Cout d'Acquisition Client) par canal d'acquisition.",
    formule: "CAC canal = Depense totale du canal / Nombre de clients acquis via ce canal",
    canaux_typiques: {
      outreach_froid: {
        couts: "Outil d'email (50-200 CHF/mois) + temps de prospection (X heures x taux horaire).",
        cac_moyen: "500-2000 CHF selon le taux de reponse et de conversion.",
        note: "Le cout en temps est souvent sous-evalue. Inclure les heures de recherche, de redaction et de suivi.",
      },
      contenu_organique: {
        couts: "Temps de creation (articles, videos, posts) x taux horaire + outils eventuels.",
        cac_moyen: "200-800 CHF sur 6+ mois (amortissement du contenu).",
        note: "CAC eleve au debut (investissement), puis decroissant car le contenu continue d'attirer du trafic.",
      },
      publicite_payante: {
        couts: "Budget pub + cout de gestion (temps ou agence) + cout des creatives.",
        cac_moyen: "300-1500 CHF selon le secteur et la concurrence.",
        note: "Le CAC pub peut etre optimise en ameliorant le taux de conversion landing page → lead → client.",
      },
      referral: {
        couts: "Commission versee au referent (10-15% du premier projet).",
        cac_moyen: "500-1500 CHF (selon le montant du projet).",
        note: "Meilleur ROI global car les leads arrivent pre-qualifies — le taux de conversion est 3-5x superieur.",
      },
      networking: {
        couts: "Temps + frais d'evenement + deplacements.",
        cac_moyen: "Tres variable, 200-5000 CHF.",
        note: "Difficile a mesurer precisement mais souvent sous-estime. Les relations se construisent sur 6-12 mois.",
      },
    },
  },

  strategies_optimisation_ltv: {
    description:
      "Strategies actionnables pour augmenter la LTV des clients existants.",
    upsell_framework: {
      description: "Proposer des services de plus haute valeur aux clients existants.",
      timing:
        "Le meilleur moment pour proposer un upsell est immediatement apres un succes mesurable. Le client est au pic de satisfaction et de confiance.",
      technique:
        "Presenter l'upsell comme la suite logique : 'Maintenant que [resultat atteint], la prochaine etape pour maximiser [benefice] serait [offre upsell].'",
      exemples: [
        "Apres un site web livre → proposition de maintenance + SEO mensuel.",
        "Apres un branding reussi → proposition de templates marketing mensuels.",
        "Apres un audit → proposition d'implementation accompagnee.",
      ] as const,
    },
    retention_framework: {
      description: "Strategies pour prolonger la duree de relation client.",
      actions: [
        "Check-in trimestriel proactif : 'Comment ca va ? Des projets en vue ?'",
        "Envoi de valeur non sollicitee : article pertinent, tendance du secteur, opportunite repere.",
        "Celebration des anniversaires : 1 an de collaboration, milestone de resultats.",
        "Offre de fidelite : reduction sur le prochain projet pour les clients recurrents.",
        "Feedback loop : demander regulierement comment ameliorer le service.",
      ] as const,
    },
    early_warning: {
      description: "Detecter les signaux de churn avant qu'il ne soit trop tard.",
      signaux: [
        "Silence radio depuis 30+ jours (alors que la communication etait reguliere).",
        "Diminution de la frequence des projets.",
        "Questions sur les tarifs ou comparaison avec d'autres prestataires.",
        "Demande de 'pause' dans la collaboration.",
        "Reduction du perimetre des projets commandes.",
      ] as const,
      intervention:
        "Appel proactif dans les 48h apres detection du signal. Ton : bienveillant, pas commercial. 'J'ai remarque qu'on ne s'est pas parle depuis un moment. Tout va bien de votre cote ?'",
    },
  },
} as const;
