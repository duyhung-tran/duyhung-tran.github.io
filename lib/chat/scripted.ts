import type { ChatEngine, ChatReply } from "./types";

// Scripted answers for Mr. Fork, the side chatbot. Mr. Fork talks about Hung
// in the third person. Edit the wording here.
// Each intent is matched when a typed message contains one of its keywords;
// the suggested prompts match their intent exactly.

type Intent = {
  id: string;
  prompt?: string; // the canonical prompt shown as a suggestion chip
  keywords: string[];
  reply: ChatReply;
};

export const SUGGESTIONS = {
  b2b: "Show me Hung's B2B experiences",
  b2c: "Show me Hung's B2C experiences",
  person: "What is Hung like as a person?",
  knoxManage: "Tell me about Knox Manage",
  knoxAgent: "Tell me about Knox AI agent",
  health: "Tell me about Samsung Health",
  organizations: "Tell me about Knox Manage organizations",
  team: "Tell me about Samsung Canada",
  geofence: "Tell me about geofence creation",
  me: "Tell me more about Hung",
  knox: "Tell me about Knox Manage",
  fraser: "Tell me about Fraser Health",
  douglas: "Tell me about Douglas College",
  cardio: "Tell me about card.io",
  contact: "How can I reach Hung?",
};

export const STARTER_SUGGESTIONS = [SUGGESTIONS.b2b, SUGGESTIONS.b2c, SUGGESTIONS.person];

const intents: Intent[] = [
  {
    id: "b2b",
    prompt: SUGGESTIONS.b2b,
    keywords: ["b2b", "enterprise", "business"],
    reply: {
      paragraphs: [
        "Here is one of Hung's B2B projects for Knox Manage - Samsung's B2B device management solution that allows IT admins to remotely control corporate devices.",
        "His project aims to **visualize how settings are inherited across nested levels**.",
      ],
      project: "organizations",
      suggestions: [SUGGESTIONS.knoxManage, SUGGESTIONS.b2c],
    },
  },
  {
    id: "b2c",
    prompt: SUGGESTIONS.b2c,
    keywords: ["b2c", "consumer"],
    reply: {
      paragraphs: [
        "Here is one of Hung's B2C projects: research initiatives for Samsung Health.",
        "His project explores how to **support people on a healthy weight journey**.",
      ],
      project: "health",
      suggestions: [SUGGESTIONS.b2b, SUGGESTIONS.person],
    },
  },
  {
    id: "person",
    prompt: SUGGESTIONS.person,
    keywords: ["person", "personality", "like as", "who is hung", "about hung", "story", "hobby", "hobbies"],
    reply: {
      paragraphs: [
        "Born and raised in Vietnam, Hung was a curious kid with a mind full of bold ideas, trapped inside the body of a shy, reserved boy.",
        "Growing up as one of those quiet kids, he learned to **read rooms rather than dominate them**. In UX, that turns into a way of designing that prioritizes care, empathy and intention.",
        "He's also a firm believer that everything happens for a reason - so if you're here, say hi to him :)",
      ],
      suggestions: [SUGGESTIONS.contact, SUGGESTIONS.b2b],
    },
  },
  {
    id: "knoxManage",
    prompt: SUGGESTIONS.knoxManage,
    keywords: ["knox manage", "geofence", "geo", "device management", "mdm"],
    reply: {
      paragraphs: [
        "Knox Manage is Samsung's cloud-based device management solution. IT admins use it to remotely configure, secure and monitor the devices their company owns.",
        "One of Hung's projects there is **geofence creation**, which lets admins manage devices based on where they are.",
      ],
      project: "geofence",
      suggestions: [SUGGESTIONS.organizations, SUGGESTIONS.knoxAgent],
    },
  },
  {
    id: "organizations",
    prompt: SUGGESTIONS.organizations,
    keywords: ["organization", "organisations", "organizations", "inherit", "nested", "table"],
    reply: {
      paragraphs: [
        "The organizations table in Knox Manage shows how companies are nested inside each other.",
        "Hung's work there helps admins **see how settings are inherited across nested levels** before they change anything.",
      ],
      project: "organizations",
      suggestions: [SUGGESTIONS.knoxManage, SUGGESTIONS.knoxAgent],
    },
  },
  {
    id: "knoxAgent",
    prompt: SUGGESTIONS.knoxAgent,
    keywords: ["agent", "ai", "assistant", "chatbot", "widget", "knox cloud"],
    reply: {
      paragraphs: [
        "At [Samsung Canada](https://research.samsung.com/srca), Hung shapes AI agent experiences for Knox Cloud Services.",
        "His project designs **interactive widgets for the in-console AI assistant**, so admins can review and act on what the agent created without leaving the chat.",
      ],
      project: "knoxagent",
      suggestions: [SUGGESTIONS.knoxManage, SUGGESTIONS.b2c],
    },
  },
  {
    // Wording taken from the old card.io case study page
    id: "cardio",
    prompt: SUGGESTIONS.cardio,
    keywords: ["card io", "cardio", "playlist", "playlists", "treadmill", "running", "music"],
    reply: {
      paragraphs: [
        "card.io is Hung's concept app for the fitness community that aims to **improve the cardio running experience with personalized music**.",
        "It grew out of the cardio playlist trend on TikTok and Instagram: the faster the song, the faster the treadmill. After interviewing 5 fitness enthusiasts, he found that influencer-made playlists are a good starting point, but **personal customization is what makes a good cardio playlist**.",
        "So card.io builds colour-coded playlists from your music taste and body, suggests songs in the right BPM range, and shows a real-time report while you run.",
      ],
      suggestions: [SUGGESTIONS.b2c, SUGGESTIONS.person],
    },
  },
  {
    id: "health",
    prompt: SUGGESTIONS.health,
    keywords: ["health", "weight", "samsung health", "fitness", "research"],
    reply: {
      paragraphs: [
        "With Samsung Health, Hung worked on research initiatives around **supporting a healthy weight journey**.",
      ],
      project: "health",
      suggestions: [SUGGESTIONS.b2b, SUGGESTIONS.person],
    },
  },
  {
    id: "team",
    prompt: SUGGESTIONS.team,
    // Two-word keywords score higher, so "Fraser Health" beats the health intent
    keywords: ["samsung canada", "team", "job", "work at", "current", "role", "experience", "fraser health", "douglas college", "greenwich", "visual designer"],
    reply: {
      paragraphs: [
        "Hung is a UX designer and engineer at [Samsung Canada](https://research.samsung.com/srca), shaping AI experiences for Samsung's B2B products.",
        "Before that, he was a visual designer at [Fraser Health](https://www.fraserhealth.ca/), [Douglas College](https://www.douglascollegeroyals.ca/landing/index) and the [University of Greenwich](https://greenwich.edu.vn/en/about-greenwich-vietnam/).",
      ],
      suggestions: [SUGGESTIONS.b2b, SUGGESTIONS.knoxAgent],
    },
  },
  {
    id: "contact",
    prompt: SUGGESTIONS.contact,
    keywords: ["contact", "email", "reach", "hire", "linkedin", "resume", "cv"],
    reply: {
      paragraphs: [
        "The best way to reach Hung is by email at [d.hungtran12@gmail.com](mailto:d.hungtran12@gmail.com), or say hi to him on [LinkedIn](https://www.linkedin.com/in/hung-tran-profile/).",
        "You can also check out his [resume](https://drive.google.com/file/d/1JYPJBnjpH8uPTDL_dIxU2rgNodNIwsK1/view?usp=sharing).",
      ],
      suggestions: [SUGGESTIONS.b2b, SUGGESTIONS.person],
    },
  },
  {
    id: "fork",
    keywords: ["who are you", "yourself", "mr fork", "fork"],
    reply: {
      paragraphs: [
        "I'm **Mr. Fork**. I was found in the kitchen, and now I live in Hung's portfolio as his virtual assistant.",
        "Ask me about Hung's work, his background, or how to reach him.",
      ],
      suggestions: STARTER_SUGGESTIONS,
    },
  },
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "yo", "sup"],
    reply: {
      paragraphs: ["Hi there! Ask me anything about Hung and his work, or pick one of these to get started."],
      suggestions: STARTER_SUGGESTIONS,
    },
  },
];

const fallback: ChatReply = {
  paragraphs: [
    "Good question! I'm just a fork, so I only know a few things about Hung for now. Try one of these, or [email him](mailto:d.hungtran12@gmail.com) and the real Hung will reply.",
  ],
  suggestions: STARTER_SUGGESTIONS,
};

function normalize(text: string) {
  return ` ${text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim()} `;
}

export function matchIntent(message: string): ChatReply {
  const exact = intents.find((i) => i.prompt === message);
  if (exact) return exact.reply;

  const text = normalize(message);
  let best: { intent: Intent; score: number } | null = null;
  for (const intent of intents) {
    // Whole-word match, and longer keywords count for more
    const score = intent.keywords.reduce(
      (sum, k) => (text.includes(` ${k} `) ? sum + k.split(" ").length : sum),
      0,
    );
    if (score > 0 && (!best || score > best.score)) best = { intent, score };
  }
  return best ? best.intent.reply : fallback;
}

export const scriptedEngine: ChatEngine = {
  async reply(message) {
    // Short pause so the "Thinking..." state from the design is visible
    await new Promise((r) => setTimeout(r, 700));
    return matchIntent(message);
  },
};
