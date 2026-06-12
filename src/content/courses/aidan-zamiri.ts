import type { Course } from "@/types"

const course: Course = {
  id: "aidan-zamiri",
  title: "Aidan Zamiri",
  slug: "aidan-zamiri",
  description:
    "A study of Aidan Zamiri — one of Britain's most compelling contemporary voices in fashion and editorial photography. Zamiri's naturalistic, intimate work has appeared in AnOther, Dazed, and for major fashion houses.",
  category: "great-photographers",
  accentColor: "#7ba88c",
  estimatedHours: 3,
  tags: ["contemporary", "editorial", "naturalistic", "fashion", "portrait"],
  photographerId: "aidan-zamiri",
  lessons: [
    {
      id: "az-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Aidan Zamiri (b. 1991, London)" },
        {
          type: "paragraph",
          content:
            "Aidan Zamiri was born in 1991 in London. He came to photography through a personal interest in documenting his own life and circle, influenced by the confessional photography traditions of Nan Goldin and Wolfgang Tillmans rather than the more formal traditions of fashion photography. His entry into fashion was through editorial work for the magazines that prized this sensibility — Dazed, AnOther, and i-D.",
        },
        {
          type: "paragraph",
          content:
            "Zamiri represents a new generation of fashion photographers who came of age in the social media era, with an instinctive understanding of how images circulate and what gives them cultural traction. His work is simultaneously deeply personal and commercially aware — intimate without being confessional, naturalistic without being documentary.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "2012–2015: Builds editorial portfolio through independent projects",
            "2015: Regular contributor to Dazed & Confused and AnOther",
            "2017: First major fashion house commissions",
            "Ongoing: Continues to balance personal and commercial work, bridging editorial and luxury advertising",
          ],
        },
        {
          type: "quote",
          content: "I'm most interested in the moment just before someone becomes aware of being photographed.",
          author: "Aidan Zamiri",
        },
      ],
      quiz: {
        question: "Which photographers' traditions most directly influenced Zamiri's entry into photography?",
        options: [
          { id: "a", text: "Irving Penn and Richard Avedon — the formal studio portrait tradition", isCorrect: false },
          { id: "b", text: "Nan Goldin and Wolfgang Tillmans — the confessional and documentary personal photography tradition", isCorrect: true },
          { id: "c", text: "Nick Knight and Steven Meisel — the technically sophisticated fashion photography tradition", isCorrect: false },
          { id: "d", text: "Helmut Newton and Guy Bourdin — the provocateur tradition of fashion photography", isCorrect: false },
        ],
        explanation:
          "Zamiri came to photography through the confessional traditions of Goldin and Tillmans rather than formal fashion photography. This shaped his approach — intimate, naturalistic, drawn from real life — and positioned him within the alternative fashion photography tradition rather than the mainstream of the industry.",
      },
    },
    {
      id: "az-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Naturalistic Intimacy" },
        {
          type: "paragraph",
          content:
            "Zamiri's visual style is built around a quality of naturalistic intimacy — images that feel found rather than made, spontaneous rather than staged. This is, of course, an aesthetic construction as deliberate as any other, but the craft of making the constructed look unconstructed is one of the most sophisticated in contemporary photography.",
        },
        { type: "heading", content: "Nocturnal Aesthetics" },
        {
          type: "paragraph",
          content:
            "Much of Zamiri's most celebrated work is set at night or in the interiors of evening — the warm available light of a room at night, the blue-black of a city street after dark, the amber of a lamp against darkness. This nocturnal quality gives his images a particular kind of intimacy; people are more themselves at night.",
        },
        { type: "heading", content: "The Available Light Commitment" },
        {
          type: "paragraph",
          content:
            "Like Tillmans before him, Zamiri is committed to available light. He photographs by the light that exists rather than the light he brings. This practical constraint produces images with a specific quality of authenticity — the light tells you what time it was, what season, what kind of room. It is documentary information, not just aesthetics.",
        },
        { type: "heading", content: "Contemporary Subjects" },
        {
          type: "paragraph",
          content:
            "Zamiri photographs a specific contemporary world — the creative milieu of contemporary London, the fashion industry's edges and margins, the people who occupy the space between art and commerce. His images have a quality of cultural specificity: they could only be from now, and they could only be from here.",
        },
        {
          type: "quote",
          content: "The best photographs are the ones where you can feel the temperature of the room.",
          author: "Aidan Zamiri",
        },
      ],
      quiz: {
        question: "What does Zamiri's commitment to available light contribute beyond aesthetics?",
        options: [
          { id: "a", text: "Cost savings — no lighting equipment needs to be hired or transported", isCorrect: false },
          { id: "b", text: "Documentary information — the light tells you the time, season, and nature of the space", isCorrect: true },
          { id: "c", text: "Consistency — natural light creates the same quality across different sessions", isCorrect: false },
          { id: "d", text: "Speed — no lighting setup means sessions can begin immediately", isCorrect: false },
        ],
        explanation:
          "Available light is not just an aesthetic choice but a documentary one. The quality of light in a room at different times, in different seasons, tells the viewer something specific about when and where an image was made. This grounding in real conditions is part of what gives Zamiri's images their quality of truthfulness.",
      },
    },
    {
      id: "az-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Editorial Work for Dazed and AnOther" },
        {
          type: "paragraph",
          content:
            "Zamiri's editorial work for Dazed and AnOther established his aesthetic and demonstrated its cultural relevance. These publications have historically been important platforms for photographers who resist mainstream fashion photography's conventions, and Zamiri found in them an audience that valued his naturalistic approach.",
        },
        { type: "heading", content: "Fashion House Campaigns" },
        {
          type: "paragraph",
          content:
            "His transition into major fashion house work — campaigns for labels that value his intimate aesthetic over the more produced look of mainstream fashion advertising — demonstrates his commercial value. The challenge, as always for photographers with distinctive personal aesthetics, is retaining that aesthetic when commercial constraints are applied.",
        },
        { type: "heading", content: "Personal Projects" },
        {
          type: "paragraph",
          content:
            "Zamiri maintains a significant personal practice — photographing his own world, his friends, the environments he inhabits. These images are the base of his commercial work: the aesthetic he brings to fashion houses has been developed and refined in his personal photography. The personal and the commercial are continuous.",
        },
        { type: "heading", content: "The Social Media Archive" },
        {
          type: "paragraph",
          content:
            "Like many photographers of his generation, Zamiri uses social media as part of his practice — not simply as promotion but as a way of publishing images that wouldn't find a home in commercial publications. The social media archive is part of the photographic body of work, not separate from it.",
        },
      ],
      quiz: {
        question: "Why are publications like Dazed and AnOther important platforms for photographers like Zamiri?",
        options: [
          { id: "a", text: "They pay higher rates than mainstream fashion publications", isCorrect: false },
          { id: "b", text: "They have historically valued photographers who resist mainstream conventions and prioritise personal aesthetics", isCorrect: true },
          { id: "c", text: "They publish exclusively in print, which suits Zamiri's analogue practice", isCorrect: false },
          { id: "d", text: "They provide complete creative control without any editorial direction", isCorrect: false },
        ],
        explanation:
          "Dazed, AnOther, and similar publications have historically been important alternative platforms — they commission photographers whose work doesn't fit the mainstream fashion photography template. For photographers with unconventional personal aesthetics, these publications provide audiences and cultural context for work that mainstream magazines might not use.",
      },
    },
    {
      id: "az-04-techniques",
      title: "Techniques & Approach",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Social Photograph" },
        {
          type: "paragraph",
          content:
            "Zamiri's approach to photography is fundamentally social. He photographs people he knows, in environments he inhabits, during evenings and occasions he participates in. The camera is a presence in his social life, not a tool he deploys for professional purposes. This social approach produces images with a quality of participation that outsider photography rarely achieves.",
        },
        { type: "heading", content: "35mm Film" },
        {
          type: "paragraph",
          content:
            "Zamiri works extensively with 35mm film — both for its aesthetic qualities (grain, colour rendering, tonal response) and for the constraint it imposes. Thirty-six frames per roll requires selection; the limit focuses attention on the moments worth capturing and away from the reflex shooting that digital can encourage.",
        },
        { type: "heading", content: "Patience" },
        {
          type: "paragraph",
          content:
            "Perhaps the most important element of Zamiri's technique is patience — the willingness to be present in a situation for hours, allowing it to unfold naturally, and photographing the moments that emerge rather than directing them. This requires physical and psychological endurance, and a deep trust that the moment will arrive.",
        },
        { type: "heading", content: "Post-Production Restraint" },
        {
          type: "paragraph",
          content:
            "Zamiri's post-production is restrained — he develops his film carefully and edits minimally, preserving the qualities that the original capture contains. He is not interested in post-production as an expressive tool; for him, the image is made at the moment of capture.",
        },
      ],
      quiz: {
        question: "How does Zamiri's social approach to photography differ from a more professional, outsider approach?",
        options: [
          { id: "a", text: "Social photography is always less formally sophisticated than professional photography", isCorrect: false },
          { id: "b", text: "He photographs from inside the situations he documents, as a participant rather than an observer, creating impossible-to-replicate intimacy", isCorrect: true },
          { id: "c", text: "Social photography relies on the subjects' willingness to perform for the camera", isCorrect: false },
          { id: "d", text: "He only photographs close personal friends, limiting his subject range", isCorrect: false },
        ],
        explanation:
          "Photographing from inside a social situation — as a participant, not an observer — creates a quality of intimacy that is not achievable by someone arriving as a professional photographer. Subjects behave differently around people they know and trust, and this difference is visible in the resulting images.",
      },
    },
    {
      id: "az-05-legacy",
      title: "Influence & Context",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "A New Generation" },
        {
          type: "paragraph",
          content:
            "Zamiri represents a generation of photographers who have come of age in the social media era and for whom the boundaries between personal photography, editorial work, and commercial practice are more porous than they were for previous generations. For this generation, personal photography and professional photography are part of the same continuum.",
        },
        { type: "heading", content: "The Contemporary London Scene" },
        {
          type: "paragraph",
          content:
            "His work documents a specific creative milieu in contemporary London — one that is fashion-adjacent, culturally sophisticated, and resistant to the mainstream. This is a tradition in British photography: the documentation of a specific subculture from within it. Zamiri continues a lineage that runs through Tillmans' rave photographs and Don McCullin's Soho images.",
        },
        { type: "heading", content: "The Influence of Social Media" },
        {
          type: "paragraph",
          content:
            "Photographers of Zamiri's generation have had to develop their practice in the context of social media — where images circulate faster, are seen by more people, and compete with more noise than at any previous point in photography's history. His ability to create images that retain their power in this environment is itself a kind of achievement.",
        },
        { type: "heading", content: "The Personal as Professional" },
        {
          type: "paragraph",
          content:
            "Zamiri's practice embodies a contemporary approach where the personal is the professional: the sensibility developed in personal photography is the commodity that commercial clients are buying. This inverts the conventional model of professional photography where personal work is separate from commercial practice.",
        },
      ],
      quiz: {
        question: "How does Zamiri's generation differ from previous generations of fashion photographers in terms of the personal/professional divide?",
        options: [
          { id: "a", text: "His generation is less commercially motivated and more focused on personal expression", isCorrect: false },
          { id: "b", text: "The boundaries are more porous — personal photography and commercial work exist on the same continuum, and personal sensibility is the commercial commodity", isCorrect: true },
          { id: "c", text: "His generation uses digital tools exclusively, making the personal/professional distinction technically irrelevant", isCorrect: false },
          { id: "d", text: "Social media has eliminated commercial photography entirely for younger photographers", isCorrect: false },
        ],
        explanation:
          "For Zamiri's generation, personal and professional photography are part of the same practice. The sensibility developed through personal work is precisely what commercial clients purchase. This inverts the model where professional work was distinct from personal expression.",
      },
    },
    {
      id: "az-06-learn",
      title: "What You Can Learn From Zamiri",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From His Practice" },
        {
          type: "paragraph",
          content:
            "Zamiri's work teaches that the most interesting photography often comes from inside a world, not from outside looking in.",
        },
        { type: "heading", content: "1. Photograph Your Own World" },
        {
          type: "paragraph",
          content:
            "The world you inhabit — your social circle, your city, your evenings — is your most available and most authentic subject. What is specific about your world that no one else can photograph with the same authority? Begin there.",
        },
        { type: "heading", content: "2. Be Patient" },
        {
          type: "paragraph",
          content:
            "Arrive early and stay late. The interesting moments rarely happen at the obvious time. Be willing to be present for hours without making a single image. The patience creates the conditions for the image.",
        },
        { type: "heading", content: "3. Learn to See in Available Light" },
        {
          type: "paragraph",
          content:
            "Spend an evening without artificial lighting equipment. Learn what different rooms look like in lamp light, in blue-hour window light, in the amber of a street light through a window. This is the light most of life happens in, and most photographers never learn to see it properly.",
        },
        { type: "heading", content: "4. Keep a Personal Practice" },
        {
          type: "paragraph",
          content:
            "Whatever commercial work you do, maintain a personal practice. The personal work is where your sensibility develops; the commercial work is where it is applied. If you stop making personal work, your commercial work will slowly lose its distinctiveness.",
        },
        { type: "heading", content: "5. Trust the Moment" },
        {
          type: "paragraph",
          content:
            "Zamiri's images feel found rather than made. This requires trust — that the moment will arrive, that you'll recognise it, that the image you've been waiting for is worth the patience. Develop the ability to wait and to be ready.",
        },
      ],
      reflection: {
        prompt:
          "Zamiri says the best photographs are 'the ones where you can feel the temperature of the room.' Looking at your own photographs, which ones have that quality — where you can feel the atmosphere of the moment? What conditions created that atmosphere, and how could you create it more deliberately?",
      },
    },
  ],
}

export default course
