import type { Course } from "@/types"

const course: Course = {
  id: "juergen-teller",
  title: "Juergen Teller",
  slug: "juergen-teller",
  description:
    "A study of Juergen Teller — fashion photography's great anti-aesthete. Teller's raw, deliberately 'ugly' flash photography upended the industry's conventions and created an entirely new visual language.",
  category: "great-photographers",
  accentColor: "#f0e060",
  estimatedHours: 3,
  tags: ["fashion", "anti-aesthetic", "flash", "confessional", "contemporary"],
  photographerId: "juergen-teller",
  lessons: [
    {
      id: "jt-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Bavaria to London, Rules Optional" },
        {
          type: "paragraph",
          content:
            "Juergen Teller grew up in Erlangen, Bavaria, moved to London in 1986, and immediately started doing everything fashion photography said you shouldn't do.",
        },
        {
          type: "paragraph",
          content:
            "He shot for music press, landed at i-D, and divided the industry: editors either loved his raw direct flash or dismissed it as amateur. The ones who loved it gave him everything.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "1986: Moves to London; begins shooting for music press",
            "1988: Begins contributing to i-D magazine",
            "1993: Shoots Nirvana — defining images of the grunge generation",
            "2000: Begins long collaboration with Marc Jacobs, shooting all major campaigns",
            "2002: Begins working with Céline under Phoebe Philo",
            "2015: ICP Infinity Award for Fashion and Beauty Photography",
          ],
        },
        {
          type: "quote",
          content: "I want to make photographs that are honest. Not pretty. Honest.",
          author: "Juergen Teller",
        },
      ],
      quiz: {
        question: "Which music photography assignment helped establish Teller's career and is now considered iconic?",
        options: [
          { id: "a", text: "Photographing Oasis for Definitely Maybe's album cover", isCorrect: false },
          { id: "b", text: "Photographing Nirvana in the grunge era", isCorrect: true },
          { id: "c", text: "Photographing The Stone Roses at Spike Island", isCorrect: false },
          { id: "d", text: "Photographing Björk for Post's promotion", isCorrect: false },
        ],
        explanation:
          "Teller's photographs of Nirvana in the early 1990s are among the defining images of the grunge era. His raw, direct approach matched the music perfectly — and demonstrated to fashion editors that his anti-aesthetic had cultural currency far beyond the music world.",
      },
    },
    {
      id: "jt-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Wrong on Purpose" },
        {
          type: "paragraph",
          content:
            "Teller systematically rejects every fashion photography convention — polish, beauty, controlled poses. The result feels like a stolen moment from someone's actual life.",
        },
        { type: "heading", content: "Flash: Fashion's Forbidden Tool" },
        {
          type: "paragraph",
          content:
            "Direct on-camera flash is the thing every photography teacher tells you to avoid. Teller built a career on it — hard shadows, bleached highlights, red-eye and all.",
        },
        { type: "heading", content: "Burn It Out" },
        {
          type: "paragraph",
          content:
            "He regularly blows out the highlights completely. The washed-out result resists luxury perfection — it looks found, not made.",
        },
        { type: "heading", content: "The Photographer in the Frame" },
        {
          type: "paragraph",
          content:
            "Teller puts himself in his own images — campaigns, editorials, everything. He makes the photographer's role visible and collapses any pretence that the camera is objective.",
        },
        {
          type: "quote",
          content: "The pictures I admire have an element of wrongness to them. If everything is right, nothing is interesting.",
          author: "Juergen Teller",
        },
      ],
      quiz: {
        question: "What does Teller's use of direct flash and deliberate overexposure achieve?",
        options: [
          { id: "a", text: "Technical efficiency — flash is the quickest lighting solution available", isCorrect: false },
          { id: "b", text: "A quality of urgency and presence that resists fashion photography's conventional polish", isCorrect: true },
          { id: "c", text: "The appearance of being shot outdoors in bright sunlight", isCorrect: false },
          { id: "d", text: "Cost savings — flash is cheaper than professional studio lighting rigs", isCorrect: false },
        ],
        explanation:
          "Direct flash and overexposure create qualities — urgency, rawness, the feeling of a moment stolen from real life — that professional fashion lighting cannot replicate. These 'mistakes' are tools for Teller, producing images that feel like photographs rather than productions.",
      },
    },
    {
      id: "jt-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Marc Jacobs: The Never-Ending Campaign" },
        {
          type: "paragraph",
          content:
            "Teller's decades-long Marc Jacobs collaboration features the designer himself, celebrities, artists, and Teller's own family — all photographed with unfiltered directness. It changed what luxury ads are allowed to look like.",
        },
        { type: "heading", content: "Vivienne Westwood: Anti-Aspirational Icons" },
        {
          type: "paragraph",
          content:
            "He photographed Westwood herself — fierce, aged, entirely unglamorous — alongside younger models. The campaigns celebrated personality over beauty. Nobody else would have dared.",
        },
        { type: "heading", content: "Céline: Raw Meets Restrained" },
        {
          type: "paragraph",
          content:
            "Teller's Céline work under Phoebe Philo was a perfect collision: her intellectual minimalism, his raw photography. Proof that anti-fashion can serve the most sophisticated luxury brands.",
        },
        { type: "heading", content: "Go-Sees: The Industry Exposed" },
        {
          type: "paragraph",
          content:
            "He photographed models during their industry auditions — unflinchingly honest. The book is both a portrait of fashion's machinery and an ethical statement about what photography owes its subjects.",
        },
      ],
      quiz: {
        question: "Why are Teller's Marc Jacobs campaigns considered significant beyond their commercial function?",
        options: [
          { id: "a", text: "They are the most expensive fashion campaigns ever produced", isCorrect: false },
          { id: "b", text: "They changed what luxury advertising can look like, generating genuine cultural discussion", isCorrect: true },
          { id: "c", text: "They were the first campaigns to feature the designer himself as model", isCorrect: false },
          { id: "d", text: "They were exclusively distributed through social media channels", isCorrect: false },
        ],
        explanation:
          "The Marc Jacobs campaigns, which feature celebrities, artists, Jacobs himself, and Teller's own family photographed with raw directness, changed what luxury advertising was allowed to look like. They proved that anti-aesthetic photography could serve commercial luxury fashion — generating cultural discussion beyond the fashion industry.",
      },
    },
    {
      id: "jt-04-techniques",
      title: "Techniques & Approach",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Cheap Camera, Clear Eyes" },
        {
          type: "paragraph",
          content:
            "Teller shoots on modest equipment — compact cameras, basic flash. It's a philosophy: if you see clearly, any camera works. Gear is not the point.",
        },
        { type: "heading", content: "Strip the Set" },
        {
          type: "paragraph",
          content:
            "No hair, no make-up, no styling beyond what the subject brought. The fashion industry's production apparatus is itself a form of artifice — Teller strips it away.",
        },
        { type: "heading", content: "Be in the Picture" },
        {
          type: "paragraph",
          content:
            "Putting himself in the frame is honest and technically awkward — he can't be behind the camera if he's in front of it. He figures it out every time.",
        },
        { type: "heading", content: "Trust Built Over Years" },
        {
          type: "paragraph",
          content:
            "Teller's most intimate images come from relationships built over a decade or more. You can't rush the kind of access that produces his best work.",
        },
      ],
      quiz: {
        question: "What does Teller's preference for minimal production equipment represent philosophically?",
        options: [
          { id: "a", text: "A cost-saving approach to fashion photography budgets", isCorrect: false },
          { id: "b", text: "The position that seeing clearly matters more than equipment, and that production apparatus is a form of artifice", isCorrect: true },
          { id: "c", text: "A technical limitation from his early career that became habit", isCorrect: false },
          { id: "d", text: "The belief that digital photography has made professional equipment redundant", isCorrect: false },
        ],
        explanation:
          "Teller's minimal production is an artistic position: the elaborate apparatus of fashion photography — hair, make-up, styling, lighting rigs — is itself a form of artifice that distances the image from truth. By stripping it away, he creates photographs that feel found rather than made.",
      },
    },
    {
      id: "jt-05-legacy",
      title: "Influence & Legacy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "He Proved Ugly Can Sell Luxury" },
        {
          type: "paragraph",
          content:
            "Rawness and honesty as selling tools — that's Teller's proof of concept. Marc Jacobs, Céline, Westwood all trusted him. The work sold.",
        },
        { type: "heading", content: "The Ugly-Beautiful Tradition" },
        {
          type: "paragraph",
          content:
            "Alongside Corinne Day and David Sims, Teller built the 1990s British counter-movement to aspirational perfection. You can trace its DNA straight to contemporary photography.",
        },
        { type: "heading", content: "He Invented Your Instagram Aesthetic" },
        {
          type: "paragraph",
          content:
            "Unposed, direct flash, slightly unflattering, candid — the 'authentic' aesthetic that dominates social media? Teller (and Goldin) did it first, in fashion, decades ago.",
        },
        { type: "heading", content: "Honesty as Luxury" },
        {
          type: "paragraph",
          content:
            "In an industry built on artifice, being genuinely raw is its own form of luxury. That's the paradox Teller proved — and it's still working.",
        },
      ],
      quiz: {
        question: "How has Teller's anti-aesthetic photography paradoxically made it one of the most effective tools for luxury fashion communication?",
        options: [
          { id: "a", text: "By making luxury brands appear more affordable and accessible", isCorrect: false },
          { id: "b", text: "Honesty itself becomes a luxury — the willingness to be raw in an industry built on artifice creates a powerful form of trust", isCorrect: true },
          { id: "c", text: "By deliberately contrasting the ugliness of the photography with the beauty of the clothes", isCorrect: false },
          { id: "d", text: "By reducing production costs dramatically and passing savings to the customer", isCorrect: false },
        ],
        explanation:
          "Teller's rawness is paradoxically effective for luxury brands because honesty is itself a form of luxury. In a market saturated with polished aspiration, an image that feels real and unmanipulated creates a different — and often more powerful — form of trust and desire.",
      },
    },
    {
      id: "jt-06-learn",
      title: "What You Can Learn From Teller",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Five Lessons Worth Stealing" },
        {
          type: "paragraph",
          content:
            "Teller's work proves the most powerful photography often comes from removing things, not adding them.",
        },
        { type: "heading", content: "1. Try Direct Flash" },
        {
          type: "paragraph",
          content:
            "Spend a day shooting only with on-camera flash. Notice the hard shadows, the bleached skin, the urgency. Then decide if that's a mistake or a tool.",
        },
        { type: "heading", content: "2. Value the 'Wrong' Image" },
        {
          type: "paragraph",
          content:
            "At your next shoot, look seriously at the rejects — blurred, overexposed, eyes closed. Sometimes the 'wrong' image is the honest one.",
        },
        { type: "heading", content: "3. Make Yourself Visible" },
        {
          type: "paragraph",
          content:
            "Put yourself in some of your photographs. It's uncomfortable — which is exactly why it's worth doing. What changes when the photographer is in the frame?",
        },
        { type: "heading", content: "4. Build Long-Term Relationships" },
        {
          type: "paragraph",
          content:
            "Commit to photographing the same person over months or years. The most intimate images need time to become possible.",
        },
        { type: "heading", content: "5. Strip Away the Apparatus" },
        {
          type: "paragraph",
          content:
            "For your next portrait, remove one element from your usual setup. Ask what the image gains. The minimum you need to tell the truth is often less than you think.",
        },
      ],
      reflection: {
        prompt:
          "Teller says he wants photographs that are honest, not pretty. Looking at your own work, where have you sacrificed honesty for prettiness? What would the honest version of your most recent portrait session look like?",
      },
    },
  ],
}

export default course
