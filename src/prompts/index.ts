/**
 * MCP Prompts -- 7 pre-built prompt templates for common marketing workflows.
 *
 * Prompts:
 *   marketing_audit           — Full 8-pillar maturity audit
 *   prospect_deep_analysis    — Deep psychographic prospect analysis
 *   campaign_planning         — 4-week neurofunnel campaign plan
 *   positioning_workshop      — Guided positioning/differentiation workshop
 *   offer_builder             — Hormozi-style offer construction
 *   cold_outreach_sequence    — Multi-touch outreach sequence builder
 *   pricing_review            — Value-based pricing analysis
 */

import type { Server } from "@modelcontextprotocol/sdk/server/index.js";
import {
  ListPromptsRequestSchema,
  GetPromptRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

interface PromptDef {
  name: string;
  description: string;
  arguments: Array<{
    name: string;
    description: string;
    required: boolean;
  }>;
  build: (args: Record<string, string>) => string;
}

const PROMPTS: PromptDef[] = [
  // ── 1. Marketing Audit ──
  {
    name: "marketing_audit",
    description:
      "Perform a full 8-pillar marketing maturity audit for a freelancer. Analyzes positioning, offer, storytelling, credibility, acquisition, pricing, retention, and mindset. Returns prioritized action plan.",
    arguments: [
      {
        name: "business_niche",
        description: "Business niche or activity description",
        required: true,
      },
      {
        name: "services",
        description: "List of services offered",
        required: true,
      },
      {
        name: "target_audience",
        description: "Target audience description",
        required: true,
      },
      {
        name: "monthly_revenue",
        description: "Approximate monthly revenue in EUR",
        required: false,
      },
      {
        name: "main_challenge",
        description: "The biggest current challenge",
        required: false,
      },
    ],
    build: (args) => `Tu es Milo, un expert senior en growth marketing pour freelances et solopreneurs.

Realise un audit marketing complet sur les 8 piliers de maturite pour ce business :

**Niche :** ${args.business_niche}
**Services :** ${args.services}
**Audience cible :** ${args.target_audience}
${args.monthly_revenue ? `**CA mensuel :** ${args.monthly_revenue} EUR` : ""}
${args.main_challenge ? `**Defi principal :** ${args.main_challenge}` : ""}

Pour CHAQUE pilier (positioning, offer, storytelling, credibility, acquisition, pricing, retention, mindset) :
1. Evalue le score de maturite (0-100) base sur les informations disponibles
2. Identifie le diagnostic principal (force ou faiblesse)
3. Donne UNE action prioritaire concrete et implementable en moins de 2 semaines

Termine par :
- Le score global de maturite
- Les 3 actions prioritaires dans l'ordre d'impact
- Un quick win implementable en 48h

Utilise les tools maturity_score, sector_detect, et atoms_route pour enrichir ton analyse.`,
  },

  // ── 2. Prospect Deep Analysis ──
  {
    name: "prospect_deep_analysis",
    description:
      "Perform a deep psychographic analysis of a prospect to determine the optimal approach, emotional stage, applicable biases, and personalized outreach strategy.",
    arguments: [
      {
        name: "prospect_name",
        description: "Name of the prospect",
        required: true,
      },
      {
        name: "company",
        description: "Prospect's company name",
        required: false,
      },
      {
        name: "signals",
        description:
          "Observed behavioral signals (email opens, page visits, responses, etc.)",
        required: true,
      },
      {
        name: "sector",
        description: "Prospect's business sector",
        required: false,
      },
      {
        name: "previous_interactions",
        description: "Summary of previous interactions with this prospect",
        required: false,
      },
    ],
    build: (args) => `Tu es Milo en mode Prospector -- expert en qualification et psychologie du prospect.

Analyse ce prospect en profondeur :

**Prospect :** ${args.prospect_name}
${args.company ? `**Entreprise :** ${args.company}` : ""}
**Signaux observes :** ${args.signals}
${args.sector ? `**Secteur :** ${args.sector}` : ""}
${args.previous_interactions ? `**Interactions precedentes :** ${args.previous_interactions}` : ""}

Produis :
1. **Profil psychographique** : Motivations profondes, style de decision, sensibilite aux differents leviers
2. **Stade emotionnel** : Ou se situe le prospect dans le parcours (awareness -> curiosity -> interest -> desire -> action -> loyalty)
3. **Biais applicables** : Les 3-5 biais cognitifs les plus pertinents pour ce prospect specifique, avec comment les appliquer de maniere ethique
4. **Strategie d'objection** : Les objections probables et les reponses psychologiques preparees
5. **Next best action** : L'action exacte a realiser maintenant, formulee comme un email ou message pret a envoyer

Utilise les tools prospect_analyze, bias_lookup, et atoms_search pour enrichir ton analyse.`,
  },

  // ── 3. Campaign Planning ──
  {
    name: "campaign_planning",
    description:
      "Create a complete 4-week neurofunnel marketing campaign plan with weekly objectives, content, channels, and KPIs.",
    arguments: [
      {
        name: "objective",
        description:
          "Campaign objective (e.g., generate 20 qualified leads, launch new service)",
        required: true,
      },
      {
        name: "sector",
        description: "Business sector",
        required: true,
      },
      {
        name: "budget",
        description: "Available budget in EUR (0 if organic only)",
        required: false,
      },
      {
        name: "channels",
        description: "Preferred marketing channels (LinkedIn, email, Meta Ads, etc.)",
        required: false,
      },
      {
        name: "target_audience",
        description: "Target audience for this campaign",
        required: true,
      },
    ],
    build: (args) => `Tu es Milo en mode Strategist -- expert en planification de campagnes marketing neuroscience-driven.

Cree un plan de campagne complet sur 4 semaines :

**Objectif :** ${args.objective}
**Secteur :** ${args.sector}
**Audience cible :** ${args.target_audience}
${args.budget ? `**Budget :** ${args.budget} EUR` : "**Budget :** Organique uniquement"}
${args.channels ? `**Canaux preferes :** ${args.channels}` : ""}

Pour CHAQUE semaine (S1 a S4) :
1. **Objectif hebdo** : Ce qui doit etre accompli
2. **Stade emotionnel cible** : Le stade du neurofunnel a activer (awareness -> curiosity -> interest -> desire)
3. **Contenu** : Les pieces de contenu a produire (avec type, angle, et CTA)
4. **Canaux** : Ou distribuer et comment
5. **Biais a activer** : Le levier psychologique principal de la semaine
6. **KPIs** : Les metriques a tracker avec les benchmarks attendus

Termine par :
- Le budget reparti par semaine et par canal
- Les 5 KPIs de campagne globaux
- Les risques identifies et les plans B

Utilise les tools campaign_plan, sector_guide, bias_lookup, et atoms_route pour enrichir ton plan.`,
  },

  // ── 4. Positioning Workshop ──
  {
    name: "positioning_workshop",
    description:
      "Guide a freelancer through a structured positioning workshop to define their unique market position, differentiation axes, and category creation opportunity.",
    arguments: [
      {
        name: "current_positioning",
        description: "Current positioning statement or tagline",
        required: true,
      },
      {
        name: "niche",
        description: "Business niche or market segment",
        required: true,
      },
      {
        name: "competitors",
        description: "List of known competitors (comma-separated)",
        required: false,
      },
      {
        name: "strengths",
        description: "Key strengths and unique abilities",
        required: false,
      },
      {
        name: "ideal_client",
        description: "Description of the ideal client",
        required: false,
      },
    ],
    build: (args) => `Tu es Milo en mode Strategist -- expert en positionnement et differenciation.

Guide un atelier de positionnement structure :

**Positionnement actuel :** ${args.current_positioning}
**Niche :** ${args.niche}
${args.competitors ? `**Concurrents connus :** ${args.competitors}` : ""}
${args.strengths ? `**Forces cles :** ${args.strengths}` : ""}
${args.ideal_client ? `**Client ideal :** ${args.ideal_client}` : ""}

Structure de l'atelier :

1. **Diagnostic du positionnement actuel** : Purple Cow test, analyse de la differenciation, score de memorabilite
2. **Cartographie concurrentielle** : Blue Ocean Canvas ERRC, identification des zones vides, groupes strategiques
3. **ICP profond** : Definition du client ideal avec profil psychographique, pas juste demographique
4. **Axes de differenciation** : Les 3 axes les plus prometteurs pour se differencier (pas juste "qualite" ou "prix")
5. **Opportunite de creation de categorie** : Comment nommer une categorie que tu possedes (ex: "Revenue Design" au lieu de "web design")
6. **Nouveau positionnement** : 3 propositions de positionnement en format "J'aide [qui] a [quoi] grace a [comment]"
7. **Plan de validation** : Comment tester le nouveau positionnement en 2 semaines avec 10 prospects

Utilise les tools positioning_evaluate, sector_guide, market_analyze, et framework_get pour enrichir l'atelier.`,
  },

  // ── 5. Offer Builder ──
  {
    name: "offer_builder",
    description:
      "Build an irresistible offer using Hormozi's Value Equation with 3-tier packaging, pricing strategy, and guarantee structure.",
    arguments: [
      {
        name: "service",
        description: "The core service or expertise",
        required: true,
      },
      {
        name: "target_audience",
        description: "Who this offer is for",
        required: true,
      },
      {
        name: "current_price",
        description: "Current average price in EUR",
        required: false,
      },
      {
        name: "desired_outcome",
        description: "The main result the client wants",
        required: true,
      },
      {
        name: "sector",
        description: "Business sector",
        required: false,
      },
    ],
    build: (args) => `Tu es Milo en mode Strategist -- expert en construction d'offres irresistibles.

Construis une offre complete selon la Value Equation de Hormozi :

**Service :** ${args.service}
**Audience :** ${args.target_audience}
**Resultat souhaite :** ${args.desired_outcome}
${args.current_price ? `**Prix actuel :** ${args.current_price} EUR` : ""}
${args.sector ? `**Secteur :** ${args.sector}` : ""}

Produis :

1. **Value Equation** :
   - Dream Outcome : Quel est le resultat reve du client ? (Formuler en termes emotionnels ET rationnels)
   - Perceived Likelihood : Quels elements augmentent la confiance que le resultat sera atteint ?
   - Time Delay : Comment reduire le temps percu avant le premier resultat ?
   - Effort & Sacrifice : Comment minimiser l'effort demande au client ?

2. **Structure 3 Tiers** :
   - **Essentiel** : L'offre d'entree (avec prix, livrables, duree, pour qui)
   - **Pro** : L'offre phare -- celle que 60% des clients devraient choisir (effet de compromis)
   - **Premium** : L'offre haute valeur qui ancre le prix des autres

3. **Garantie** : Le type de garantie le plus adapte (resultat, satisfaction, remboursement partiel) et sa formulation exacte

4. **Bonus Stack** : 3-5 bonus a forte valeur percue mais faible cout de production

5. **Pricing** : Le prix recommande pour chaque tier avec la justification psychologique (ancrage, framing, sous-pricing detection)

Utilise les tools offer_evaluate, pricing_strategy, sector_guide, et bias_lookup pour enrichir l'offre.`,
  },

  // ── 6. Cold Outreach Sequence ──
  {
    name: "cold_outreach_sequence",
    description:
      "Build a multi-touch cold outreach sequence with psychologically calibrated messages for each touchpoint, adapted to the prospect's emotional journey.",
    arguments: [
      {
        name: "prospect_type",
        description: "Type of prospect (ICP description)",
        required: true,
      },
      {
        name: "offer",
        description: "The service/offer being promoted",
        required: true,
      },
      {
        name: "sector",
        description: "Prospect's sector",
        required: false,
      },
      {
        name: "channel",
        description: "Primary channel: email, linkedin, or multi-channel",
        required: false,
      },
      {
        name: "unique_angle",
        description: "What makes you different from other providers",
        required: false,
      },
    ],
    build: (args) => `Tu es Milo en mode Writer + Prospector -- expert en outreach qui convertit.

Cree une sequence d'outreach complete :

**Type de prospect :** ${args.prospect_type}
**Offre :** ${args.offer}
${args.sector ? `**Secteur prospect :** ${args.sector}` : ""}
${args.channel ? `**Canal principal :** ${args.channel}` : "**Canal :** Multi-canal (email + LinkedIn)"}
${args.unique_angle ? `**Angle differenciateur :** ${args.unique_angle}` : ""}

Pour CHAQUE touchpoint (minimum 5, maximum 8) :
1. **Objectif emotionnel** : Le stade cible du neurofunnel
2. **Biais active** : Le levier psychologique principal
3. **Timing** : Delai depuis le touchpoint precedent (et pourquoi ce timing)
4. **Contenu complet** : L'email/message entier, pret a copier-coller (avec objet pour les emails)
5. **CTA** : L'action demandee (une seule)
6. **Variante A/B** : Une version alternative de l'objet ou de l'accroche (avec le levier psychologique teste)

Regles :
- Touchpoint 1 : JAMAIS de pitch. Valeur pure (reciprocite)
- Touchpoint 2 : Credibilite + preuve sociale
- Touchpoint 3 : Miroir du probleme + curiosite gap
- Touchpoints 4-5 : Urgence douce + engagement progressif
- Dernier touchpoint : Break-up email (pattern interrupt)

Termine par :
- KPIs attendus par touchpoint (taux d'ouverture, reponse)
- Conditions de sortie (quand arreter la sequence)
- Strategie de relance pour les leads qui ouvrent sans repondre

Utilise les tools atoms_search, bias_lookup, copy_evaluate, et objection_handle pour enrichir la sequence.`,
  },

  // ── 7. Pricing Review ──
  {
    name: "pricing_review",
    description:
      "Perform a complete value-based pricing analysis with under-pricing detection, competitive positioning, and psychological pricing recommendations.",
    arguments: [
      {
        name: "services",
        description: "List of services with current prices",
        required: true,
      },
      {
        name: "sector",
        description: "Business sector",
        required: true,
      },
      {
        name: "target_audience",
        description: "Target audience and their budget level",
        required: true,
      },
      {
        name: "acceptance_rate",
        description: "Current proposal acceptance rate (percentage)",
        required: false,
      },
      {
        name: "monthly_revenue",
        description: "Current monthly revenue in EUR",
        required: false,
      },
    ],
    build: (args) => `Tu es Milo en mode Analyst + Strategist -- expert en pricing psychologique.

Realise un audit pricing complet :

**Services et prix :** ${args.services}
**Secteur :** ${args.sector}
**Audience cible :** ${args.target_audience}
${args.acceptance_rate ? `**Taux d'acceptation devis :** ${args.acceptance_rate}%` : ""}
${args.monthly_revenue ? `**CA mensuel :** ${args.monthly_revenue} EUR` : ""}

Analyse :

1. **Detection de sous-pricing** :
   - Signaux de sous-pricing (taux d'acceptation >80%, jamais de "c'est trop cher", clients qui ne negocient pas)
   - Estimation de la marge perdue
   - Test de prix recommande (+30%, +50%, +100%)

2. **Analyse de valeur** :
   - Valeur reelle delivree vs prix facture (ratio)
   - ROI pour le client (retour sur investissement de ton service)
   - Positionnement prix vs marche

3. **Strategie de pricing psychologique** :
   - Anchoring : Comment ancrer la perception de valeur avant de reveler le prix
   - Framing : Comment presenter le prix (jour, projet, retour sur investissement)
   - Tiers : Structure 3 paliers optimale avec prix

4. **Plan d'augmentation** :
   - Strategie progressive pour augmenter les prix de X% sur 90 jours
   - Comment communiquer la hausse aux clients existants
   - Nouveaux clients : le nouveau pricing des maintenant

5. **KPIs a surveiller** :
   - Les metriques qui confirment que le pricing est bon
   - Les signaux d'alarme qui indiquent qu'il faut ajuster

Utilise les tools pricing_strategy, offer_evaluate, sector_guide, et atoms_search pour enrichir l'audit.`,
  },
];

export function registerPrompts(server: Server): void {
  server.setRequestHandler(ListPromptsRequestSchema, async () => ({
    prompts: PROMPTS.map((p) => ({
      name: p.name,
      description: p.description,
      arguments: p.arguments,
    })),
  }));

  server.setRequestHandler(GetPromptRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    const promptDef = PROMPTS.find((p) => p.name === name);

    if (!promptDef) {
      throw new Error(
        `Unknown prompt: ${name}. Available: ${PROMPTS.map((p) => p.name).join(", ")}`
      );
    }

    const promptArgs = (args ?? {}) as Record<string, string>;

    // Validate required arguments
    for (const arg of promptDef.arguments) {
      if (arg.required && !promptArgs[arg.name]) {
        throw new Error(
          `Missing required argument '${arg.name}' for prompt '${name}'. ${arg.description}`
        );
      }
    }

    const content = promptDef.build(promptArgs);

    return {
      description: promptDef.description,
      messages: [
        {
          role: "user" as const,
          content: {
            type: "text" as const,
            text: content,
          },
        },
      ],
    };
  });

  console.error(`[milo-reach] Registered ${PROMPTS.length} prompts`);
}
