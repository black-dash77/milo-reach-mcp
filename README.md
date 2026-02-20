# Milo Reach MCP

Serveur MCP (Model Context Protocol) marketing expert pour **Claude Code**. Combine un cerveau de connaissances neuromarketing (250+ atomes) avec des APIs d'execution (discovery, enrichment, scraping) et un stockage Supabase.

Claude Code raisonne et orchestre. Milo Reach fournit le savoir expert ET les bras pour agir.

## Contenu

- **250+ atomes marketing** en 21 categories (positioning, offer, storytelling, persuasion, pricing, acquisition, copywriting, branding, retention, mindset, ads, automation, sales-calls, seo-psychology, video-persuasion, events-webinars, community, partnerships, product-marketing, analytics-deep, competitive-intel)
- **Neuro-engine** : 13 biais cognitifs x 6 stades emotionnels, 15 templates d'application, objection handlers, power language, timing intelligence
- **5 personas** : Prospector, Strategist, Writer, Analyst, Automator
- **10 secteurs** : developer, designer, consultant, photographer, writer, trainer, general, marketer, coach, saas_founder
- **12 frameworks** : sales-call-scripts, seo-intent-mapping, launch-playbooks, webinar-funnels, community-loops, partnership-models, attribution-models, ltv-models, competitive-maps, objection-handlers, power-language, timing-intelligence
- **Scoring 8 piliers** : positioning, offer, storytelling, credibility, acquisition, pricing, retention, mindset

## Installation

### Prerequis

- Node.js >= 18
- Un projet Claude Code

### 1. Cloner le repo

```bash
git clone https://github.com/black-dash77/milo-reach-mcp.git
cd milo-reach-mcp
npm install
npm run build
```

### 2. Configurer Claude Code

Ajouter dans le fichier `.mcp.json` a la racine de votre projet (ou dans `~/.claude/.mcp.json` pour un acces global) :

```json
{
  "mcpServers": {
    "milo-reach": {
      "command": "node",
      "args": ["/chemin/absolu/vers/milo-reach-mcp/dist/index.js"],
      "env": {
        "SUPABASE_URL": "https://xxx.supabase.co",
        "SUPABASE_ANON_KEY": "eyJ...",
        "HUNTER_API_KEY": "xxx",
        "ZEFIX_USERNAME": "xxx",
        "ZEFIX_PASSWORD": "xxx",
        "BRIGHT_DATA_API_KEY": "xxx",
        "PROXYCURL_API_KEY": "xxx",
        "APOLLO_API_KEY": "xxx"
      }
    }
  }
}
```

### 3. Redemarrer Claude Code

Apres avoir configure `.mcp.json`, relancer Claude Code. Les 26 outils Milo Reach apparaitront automatiquement.

## Variables d'environnement

| Variable | Requis | Description |
|----------|--------|-------------|
| `SUPABASE_URL` | Pour storage | URL du projet Supabase |
| `SUPABASE_ANON_KEY` | Pour storage | Cle anonyme Supabase |
| `HUNTER_API_KEY` | Pour enrichment | Cle API Hunter.io (email find/verify) |
| `ZEFIX_USERNAME` | Pour SOGC | Identifiant Zefix (registre commerce CH) |
| `ZEFIX_PASSWORD` | Pour SOGC | Mot de passe Zefix |
| `BRIGHT_DATA_API_KEY` | Pour discovery | Cle API Bright Data (SERP search) |
| `BRIGHT_DATA_SERP_ZONE` | Optionnel | Zone SERP Bright Data (defaut: "serp") |
| `PROXYCURL_API_KEY` | Pour enrichment | Cle API ProxyCurl (LinkedIn enrich) |
| `APOLLO_API_KEY` | Pour discovery | Cle API Apollo (fallback discovery) |

> Les outils **knowledge** (atoms, biases, frameworks, scoring, analysis, strategy) fonctionnent **sans aucune cle API**. Seuls les outils d'execution (discovery, enrichment, storage) necessitent des credentials.

## 26 Outils MCP

### Knowledge (4)

| Outil | Description |
|-------|-------------|
| `atoms_search` | Recherche dans les 250+ atomes par mot-cle ou categorie |
| `atoms_route` | Routing Engram : retourne les 8 atomes optimaux pour un contexte |
| `bias_lookup` | Biais cognitifs + templates pour un stade emotionnel |
| `framework_get` | Framework marketing complet par nom |

### Analysis (4)

| Outil | Description |
|-------|-------------|
| `prospect_analyze` | Profil psychologique prospect : stade, biais, objections, approche |
| `funnel_diagnose` | Diagnostic funnel par stade emotionnel |
| `market_analyze` | Analyse concurrentielle + positionnement Blue Ocean |
| `copy_evaluate` | Score un texte marketing (0-100) contre les principes neuro |

### Strategy (4)

| Outil | Description |
|-------|-------------|
| `strategy_recommend` | Recommandations priorisees selon maturite et secteur |
| `campaign_plan` | Planning campagne avec journey emotionnel |
| `pricing_strategy` | Strategie prix value-based avec tiers et ancrage |
| `objection_handle` | Strategie psychologique pour objections specifiques |

### Scoring (3)

| Outil | Description |
|-------|-------------|
| `maturity_score` | Score 8 piliers (0-100 chaque) + actions prioritaires |
| `offer_evaluate` | Evaluation Hormozi + packaging |
| `positioning_evaluate` | Tests Purple Cow, ICP, category creation |

### Sector & Persona (3)

| Outil | Description |
|-------|-------------|
| `sector_guide` | Guide marketing complet par secteur |
| `sector_detect` | Detecte le secteur depuis une description |
| `persona_guide` | Expertise deep d'une persona marketing |

### Discovery (3) — APIs

| Outil | Description | API |
|-------|-------------|-----|
| `prospect_search` | Recherche prospects par secteur/localisation | Bright Data + Apollo |
| `sogc_search` | Nouvelles inscriptions registre commerce CH | Zefix |
| `web_scrape` | Scrape un site web (SSRF-safe) | Fetch + ScrapingBee |

### Enrichment (3) — APIs

| Outil | Description | API |
|-------|-------------|-----|
| `email_find` | Trouve l'email d'un prospect | Hunter.io |
| `email_verify` | Verifie la delivrabilite d'un email | Hunter.io |
| `prospect_enrich` | Enrichit un prospect (LinkedIn + company) | ProxyCurl |

### Storage (2) — Supabase

| Outil | Description |
|-------|-------------|
| `lead_save` | Sauvegarde un lead enrichi dans Supabase |
| `lead_list` | Liste les leads existants (filtre par score, temperature, source) |

## 7 Prompt Templates

| Prompt | Description |
|--------|-------------|
| `marketing_audit` | Audit 8 piliers complet |
| `prospect_deep_analysis` | Brief intelligence prospect |
| `campaign_planning` | Plan campagne neurofunnel |
| `positioning_workshop` | Atelier positionnement interactif |
| `offer_builder` | Construction offre Hormozi |
| `cold_outreach_sequence` | Sequence email neuromarketing |
| `pricing_review` | Optimisation prix value-based |

## Ressources URI

| URI | Contenu |
|-----|---------|
| `milo://atoms` | Index de toutes les categories |
| `milo://atoms/{category}` | Atomes d'une categorie |
| `milo://personas/{name}` | Guide persona complet |
| `milo://sectors/{key}` | Profil secteur |
| `milo://biases/{name}` | Biais + template |
| `milo://frameworks/{name}` | Framework complet |
| `milo://dna` | Philosophie core Milo |

## Architecture

```
src/
├── index.ts                    # Entry point STDIO
├── server.ts                   # MCP server setup
├── tools/                      # 26 outils MCP
│   ├── index.ts                # Central registry
│   ├── knowledge.ts            # atoms_search, atoms_route, bias_lookup, framework_get
│   ├── analysis.ts             # prospect_analyze, funnel_diagnose, market_analyze, copy_evaluate
│   ├── strategy.ts             # strategy_recommend, campaign_plan, pricing_strategy, objection_handle
│   ├── scoring.ts              # maturity_score, offer_evaluate, positioning_evaluate
│   ├── sector.ts               # sector_guide, sector_detect, persona_guide
│   ├── discovery.ts            # prospect_search, sogc_search, web_scrape
│   ├── enrichment.ts           # email_find, email_verify, prospect_enrich
│   └── storage.ts              # lead_save, lead_list
├── apis/                       # Clients API
│   ├── api-client.ts           # Retry 3x expo backoff
│   ├── security.ts             # SSRF protection
│   ├── discovery.ts            # Bright Data + Apollo
│   ├── zefix.ts                # Zefix/SOGC
│   ├── enrichment.ts           # Hunter.io + ProxyCurl
│   ├── scraper.ts              # Web scraper SSRF-safe
│   └── supabase.ts             # Supabase client
├── resources/                  # Ressources URI browsables
├── prompts/                    # 7 prompt templates
└── knowledge/                  # Donnees pures (zero LLM)
    ├── atoms/                  # 250+ atomes en 21 categories
    ├── biases/                 # 13 biais x 6 stades + templates
    ├── personas/               # 5 personas neuromarketing
    ├── sectors/                # 10 secteurs
    ├── frameworks/             # 12 frameworks
    ├── scoring/                # Rubrics 8 piliers
    ├── dna.ts                  # Philosophie Milo
    └── router.ts               # Engram router O(1)
```

## Principes architecturaux

1. **Zero LLM interne** — Tout est deterministe. Claude Code raisonne, Milo Reach fournit les donnees
2. **Knowledge sans credentials** — Les 18 outils knowledge marchent sans aucune cle API
3. **Retours JSON structures** — Claude Code recoit des objets, pas du texte formate
4. **Connaissances en francais** — Atomes et personas en FR, noms d'outils en EN
5. **SSRF-safe** — Protection SSRF sur tous les appels reseau

## Developpement

```bash
npm run dev    # Watch mode
npm run build  # Build dist/
npm start      # Run server
```

## Licence

MIT
