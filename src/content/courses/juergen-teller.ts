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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Juergen Teller (b. 1964, Erlangen, Germany)" },
        {
          type: "paragraph",
          content:
            "Juergen Teller was born in 1964 in Erlangen, Bavaria. His father was a musician who died by suicide when Teller was nineteen — an event that shaped his relationship with vulnerability and honesty in ways that pervade his work. He studied at the Bayerische Staatslehranstalt für Photographie in Munich before moving to London in 1986.",
        },
        {
          type: "paragraph",
          content:
            "In London he began shooting for music publications — Smash Hits, then more influential titles — before entering fashion through i-D magazine. His approach was immediately polarising: raw, unflattering, using direct flash in a way that most fashion photographers considered amateurish. Fashion editors either loved it or dismissed it. The ones who loved it gave him enormous creative latitude.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The Anti-Aesthetic Aesthetic" },
        {
          type: "paragraph",
          content:
            "Teller's visual style is built around a systematic rejection of conventional fashion photography values. Where fashion photography prizes polish, he offers rawness. Where it celebrates beauty, he photographs the ugly-beautiful. Where it poses, he catches. The effect is photographs that feel like stolen moments from real life — which is exactly the point.",
        },
        { type: "heading", content: "Direct Flash" },
        {
          type: "paragraph",
          content:
            "Like Nan Goldin before him, Teller uses direct on-camera flash — the technique considered worst practice by most fashion photographers. The flash creates hard shadows, flattens skin, bleaches highlights, and creates red-eye. Teller uses all of these 'flaws' as tools: they create a quality of urgency and presence that no amount of professional lighting can replicate.",
        },
        { type: "heading", content: "Overexposure" },
        {
          type: "paragraph",
          content:
            "Teller frequently overexposes his images — letting highlights blow out completely, obliterating detail. This creates images that feel burned into reality rather than carefully recorded from it. The washed-out quality resists the luxurious perfection expected of fashion advertising.",
        },
        { type: "heading", content: "Self-Insertion" },
        {
          type: "paragraph",
          content:
            "Teller regularly inserts himself into his images — photographing himself with subjects, appearing in campaign images alongside models. This collapses the usual distance between photographer and subject, making his role in the construction of the image visible. It is both confessional and a critique of fashion photography's pretence to objectivity.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Marc Jacobs Campaigns (2000–present)" },
        {
          type: "paragraph",
          content:
            "Teller's ongoing collaboration with Marc Jacobs is the most significant long-term creative partnership in fashion photography. The campaigns feature Jacobs himself, celebrities, artists, and Teller's own family — photographed with the same raw directness he brings to everything. They have generated genuine cultural discussion and changed what luxury advertising can look like.",
        },
        { type: "heading", content: "Vivienne Westwood Campaigns" },
        {
          type: "paragraph",
          content:
            "Teller photographed Vivienne Westwood's campaigns for years, often featuring the designer herself — aged, fierce, entirely unglamorous — alongside younger models. The campaigns were deliberately anti-aspirational, celebrating personality and attitude over beauty. They remain among the most distinctive fashion campaigns of their era.",
        },
        { type: "heading", content: "Céline (2010–17)" },
        {
          type: "paragraph",
          content:
            "During Phoebe Philo's celebrated tenure at Céline, Teller shot many of the brand's campaigns. The combination of Philo's restrained, intellectual aesthetic and Teller's raw photography produced images of extraordinary power — proof that anti-fashion photography could serve the most sophisticated luxury fashion.",
        },
        { type: "heading", content: "Go-Sees (1999)" },
        {
          type: "paragraph",
          content:
            "A book of photographs taken during model 'go-sees' — the industry audition process where models present themselves to photographers and agencies. Teller photographed the models in his studio, often in un-flattering situations, with unflinching honesty. The book is both a portrait of the industry and an ethical statement about what photography owes its subjects.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Cheap Camera Philosophy" },
        {
          type: "paragraph",
          content:
            "Teller has shot much of his work on relatively modest equipment — compact cameras, disposable cameras, basic flash units. This is a deliberate philosophy: the image is not about the equipment. A cheap camera in the hands of someone who sees clearly produces better photographs than an expensive camera in the hands of someone who cannot.",
        },
        { type: "heading", content: "Minimal Production" },
        {
          type: "paragraph",
          content:
            "Where other photographers work with large production teams, Teller typically works alone or with minimal assistance. No hair, no make-up, no styling beyond what the subject brings. This is not economy — it is an artistic position. The production apparatus of fashion photography is itself a form of artifice he wants to strip away.",
        },
        { type: "heading", content: "Confessional Self-Portraiture" },
        {
          type: "paragraph",
          content:
            "Teller's self-portraiture — appearing in his own campaigns, photographing himself with subjects — makes visible the role of the photographer in constructing images. This is both honest and technically challenging: being in the frame requires the camera to operate without him behind it.",
        },
        { type: "heading", content: "Extended Relationships" },
        {
          type: "paragraph",
          content:
            "Teller's best work comes from long-term relationships — with designers, editors, and subjects he has photographed repeatedly over years. The repeated access creates trust; the trust creates honesty. Many of his most intimate images were impossible without relationships that had been built over a decade or more.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Redefining What Fashion Photography Is Allowed to Look Like" },
        {
          type: "paragraph",
          content:
            "Teller's most significant achievement is proving that anti-aesthetic photography can serve the most sophisticated ends of fashion culture. His work with Marc Jacobs, Céline, and Vivienne Westwood demonstrated that rawness and honesty were not obstacles to commercial effectiveness but were, in fact, powerful selling tools.",
        },
        { type: "heading", content: "The Ugly-Beautiful Tradition" },
        {
          type: "paragraph",
          content:
            "Teller, alongside contemporaries like Corinne Day and David Sims, established the 'ugly-beautiful' tradition in 1990s British fashion photography — a counter-movement to the aspirational perfection of mainstream fashion. This tradition has profoundly influenced contemporary photography, advertising, and social media aesthetics.",
        },
        { type: "heading", content: "Influence on Social Media Photography" },
        {
          type: "paragraph",
          content:
            "The aesthetic of contemporary social media photography — unposed, direct flash, candid, slightly unflattering — owes a significant debt to Teller (and to Goldin). The 'authentic' aesthetic that dominates Instagram was pioneered in fashion photography before it became a cultural norm.",
        },
        { type: "heading", content: "Lasting Collaboration With Luxury" },
        {
          type: "paragraph",
          content:
            "Teller's decades-long collaborations with luxury brands demonstrate that his anti-aesthetic is not incompatible with commercial luxury — it is, paradoxically, one of its most powerful expressions. The willingness to be honest is itself a form of luxury in an industry built on artifice.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From His Practice" },
        {
          type: "paragraph",
          content:
            "Teller's work teaches that the most powerful photography often comes from removing things — production, equipment, styling — rather than adding them.",
        },
        { type: "heading", content: "1. Try Direct Flash" },
        {
          type: "paragraph",
          content:
            "Spend a day shooting exclusively with a direct on-camera flash. Notice what it does: the hard shadows, the flat skin, the red-eye, the bleached highlights. Then notice the quality of presence it creates — the feeling that the image is a document rather than a production.",
        },
        { type: "heading", content: "2. Value the 'Wrong' Image" },
        {
          type: "paragraph",
          content:
            "At the end of your next shoot, look at the images you would normally discard — the blurred ones, the overexposed ones, the ones where someone's eyes are shut. Look at them seriously, for five minutes. Sometimes the 'wrong' image is actually the most honest.",
        },
        { type: "heading", content: "3. Make Yourself Visible" },
        {
          type: "paragraph",
          content:
            "Insert yourself into some of your photographs. This is uncomfortable, which is why it's interesting. It makes visible your role in constructing the image and collapses the photographer's conventional invisibility. What changes when the photographer is in the frame?",
        },
        { type: "heading", content: "4. Build Long-Term Relationships" },
        {
          type: "paragraph",
          content:
            "Commit to photographing the same person — a friend, a family member — over months or years. Return to the same subject repeatedly. Notice how the photographs change as trust deepens. The most intimate images come from relationships that have had time to mature.",
        },
        { type: "heading", content: "5. Strip Away the Apparatus" },
        {
          type: "paragraph",
          content:
            "For your next portrait, remove one element from your usual setup: the background, the lights, the styling. Each time you remove something, ask what the image gains. The minimum necessary to tell the truth is often less than you think.",
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
