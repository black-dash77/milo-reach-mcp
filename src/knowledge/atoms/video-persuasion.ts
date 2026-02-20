import type { BrainAtom } from "./types.js";

/**
 * VIDEO PERSUASION — 12 atoms on visual content psychology.
 * Hooks, scripts, formats, and video marketing strategy for freelancers.
 */
export const VIDEO_PERSUASION_ATOMS: BrainAtom[] = [
  {
    id: "vid-001",
    category: "video_persuasion",
    principle:
      "Le hook de 3 secondes decide tout. Le cerveau humain decide de rester ou scroller en 2.7 secondes. Commence par un chiffre choquant, une question provocante, ou un visuel inattendu. 'J'ai perdu 50K CHF avant de comprendre cette erreur' capte 10x plus que 'Bonjour, je suis consultant en...'.",
    application:
      "Ecris 5 variantes de hook pour chaque video et teste les plus provocantes. Le hook doit creer un 'gap de curiosite' impossible a ignorer.",
    triggers: ["hook", "accroche", "debut video", "premiere seconde", "attention", "scroll"],
    personaAffinity: ["Writer"],
    maturityRange: [10, 80],
    weight: 9,
  },
  {
    id: "vid-002",
    category: "video_persuasion",
    principle:
      "La psychologie du thumbnail : le visage humain avec une emotion forte (surprise, choc, joie) augmente le CTR de 30%. Ajoute un texte court (3-5 mots max) en contraste fort. Le thumbnail est la pub de ta video — 90% des videos a succes ont un thumbnail soigneusement concu, pas auto-genere.",
    application:
      "Cree des thumbnails avec un visage expressif, un texte court en couleur contrastante, et teste 2-3 variantes par video.",
    triggers: ["thumbnail", "miniature", "vignette", "clic", "ctr", "image video"],
    personaAffinity: ["Writer", "Analyst"],
    maturityRange: [10, 70],
    weight: 7,
  },
  {
    id: "vid-003",
    category: "video_persuasion",
    principle:
      "La structure HPAS-CTA : Hook (captiver en 3s), Probleme (douleur du spectateur), Agitate (amplifier les consequences), Solution (ta methode), CTA (action claire). Cette structure suit le cycle neurologique attention → douleur → desir → action. Chaque section a un role precis dans le parcours emotionnel.",
    application:
      "Redige chaque script video en suivant HPAS-CTA avec un timing precis : Hook (0-5s), Probleme (5-30s), Agitate (30-60s), Solution (60-180s), CTA (dernieres 15s).",
    triggers: ["script", "structure", "plan video", "scenario", "contenu video", "rediger"],
    personaAffinity: ["Writer"],
    maturityRange: [10, 80],
    weight: 8,
  },
  {
    id: "vid-004",
    category: "video_persuasion",
    principle:
      "Talking head vs screenshare : le visage cree la connexion emotionnelle (confiance +40%), le screenshare cree la valeur concrete (retention +25%). L'ideal est de mixer les deux : talking head pour les transitions et le storytelling, screenshare pour les demonstrations. Le spectateur doit voir un humain, pas juste un ecran.",
    application:
      "Alterne entre talking head (30% du temps) pour les messages cles et screenshare (70%) pour les demonstrations concretes.",
    triggers: ["talking head", "camera", "screenshare", "format video", "face cam", "partage ecran"],
    personaAffinity: ["Writer"],
    maturityRange: [10, 60],
    weight: 6,
  },
  {
    id: "vid-005",
    category: "video_persuasion",
    principle:
      "L'optimisation de la duree : YouTube favorise le watch time total, pas le pourcentage. Une video de 12 min regardee en moyenne 6 min (50%) bat une video de 3 min regardee 2 min (66%) pour l'algorithme. Mais pour les reseaux sociaux (LinkedIn, Instagram), le court (60-90s) performe mieux car la retention complete booste la distribution.",
    application:
      "YouTube : vise 8-15 min pour le contenu educatif. LinkedIn/Instagram : reste sous 90 secondes. TikTok : 30-60 secondes max.",
    triggers: ["duree", "longueur video", "combien de temps", "court", "long", "minutes"],
    personaAffinity: ["Strategist", "Analyst"],
    maturityRange: [10, 70],
    weight: 7,
  },
  {
    id: "vid-006",
    category: "video_persuasion",
    principle:
      "La video temoignage client est l'arme de conversion la plus puissante. Un prospect qui voit un pair decrire sa transformation a un taux de conversion 2-3x superieur. Le format ideal : situation avant (douleur), processus (comment ca s'est passe), resultat (chiffres concrets), emotion (ce que ca a change).",
    application:
      "Collecte systematiquement des temoignages video clients en guidant le client avec 4 questions : avant, pendant, apres, emotion.",
    triggers: ["temoignage", "client", "avis", "preuve sociale", "video client", "case study"],
    personaAffinity: ["Writer", "Prospector"],
    maturityRange: [20, 90],
    weight: 9,
  },
  {
    id: "vid-007",
    category: "video_persuasion",
    principle:
      "Le behind-the-scenes humanise et cree la proximite. Montrer son process de travail, ses outils, ses reflexions en cours de projet construit l'autorite par la transparence. Les freelances qui montrent les coulisses ont un taux d'engagement 2x superieur — le spectateur se sent 'initie'.",
    application:
      "Publie un contenu behind-the-scenes par semaine : process de travail, outil decouvert, reflexion sur un projet (anonymise).",
    triggers: ["coulisses", "behind the scenes", "process", "transparence", "quotidien", "montrer"],
    personaAffinity: ["Writer"],
    maturityRange: [10, 60],
    weight: 6,
  },
  {
    id: "vid-008",
    category: "video_persuasion",
    principle:
      "Live vs enregistre : le live cree l'urgence et l'interaction (engagement 3x superieur), l'enregistre cree la qualite et la perennite. Strategie hybride : fais des lives pour la connexion, puis re-edite les meilleurs moments en contenu enregistre. Un live est un investissement double — contenu immediat + matiere premiere.",
    application:
      "Planifie un live mensuel sur un sujet chaud, puis decoupe les meilleurs segments en 3-5 clips courts pour les reseaux sociaux.",
    triggers: ["live", "direct", "streaming", "en direct", "webinaire", "interaction"],
    personaAffinity: ["Writer", "Strategist"],
    maturityRange: [20, 80],
    weight: 6,
  },
  {
    id: "vid-009",
    category: "video_persuasion",
    principle:
      "L'adaptation short-form : une video longue de 10 min contient 3-5 moments forts qui font chacun un short parfait. Le 'content repurposing' maximal : 1 video longue → 5 shorts + 3 posts texte + 1 carousel + 1 article. Le freelance qui ne repurpose pas perd 80% de la valeur de son contenu.",
    application:
      "Identifie les 3-5 moments les plus percutants de chaque video longue et transforme-les en shorts autonomes avec hook propre.",
    triggers: ["short", "reels", "tiktok", "clip", "repurpose", "recycler", "decouper"],
    personaAffinity: ["Writer", "Automator"],
    maturityRange: [10, 70],
    weight: 7,
  },
  {
    id: "vid-010",
    category: "video_persuasion",
    principle:
      "Le framework de repurposing systematique : Video → Audio (podcast) → Texte (article/newsletter) → Visuel (carousel/infographie) → Micro (quotes/stats). Une seule session de creation alimente 5+ canaux pendant 2 semaines. Le contenu cree une seule fois doit travailler pour toi partout et longtemps.",
    application:
      "Apres chaque video, declenche un workflow de repurposing en 5 formats differents pour maximiser la distribution.",
    triggers: ["repurposing", "recycler", "reutiliser", "multi-canal", "distribution", "multiplier"],
    personaAffinity: ["Automator", "Writer"],
    maturityRange: [20, 80],
    weight: 7,
  },
  {
    id: "vid-011",
    category: "video_persuasion",
    principle:
      "Le portfolio video bat le portfolio statique a tous les niveaux. Montrer le avant/apres en mouvement, naviguer dans un projet en live, commenter ses choix — ca demontre l'expertise mieux que 100 screenshots. Un freelance avec une video de 2 min montrant un projet inspire 5x plus confiance qu'un PDF.",
    application:
      "Cree une video portfolio de 2-3 min par projet cle, montrant le probleme initial, le process et le resultat final en mouvement.",
    triggers: ["portfolio", "projet", "montrer travail", "showcase", "demo", "presentation"],
    personaAffinity: ["Writer", "Prospector"],
    maturityRange: [10, 70],
    weight: 7,
  },
  {
    id: "vid-012",
    category: "video_persuasion",
    principle:
      "L'optimisation de l'enregistrement webinaire : le replay doit etre edite, pas brut. Coupe les temps morts, ajoute des chapitres, insere des slides cles en overlay, et place un CTA toutes les 10 minutes. Un replay edite a un taux de completion 2x superieur au replay brut — et c'est le replay qui genere 60% des conversions.",
    application:
      "Edite les replays webinaires en ajoutant chapitres, coupes des temps morts, overlays de slides cles et CTAs toutes les 10 minutes.",
    triggers: ["webinaire", "replay", "enregistrement", "optimiser", "post-production", "edit"],
    personaAffinity: ["Writer", "Automator"],
    maturityRange: [30, 90],
    weight: 6,
  },
];
