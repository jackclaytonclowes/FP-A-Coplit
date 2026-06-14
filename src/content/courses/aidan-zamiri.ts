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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "London Born, Tillmans Raised" },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Aidan_Zamiri_at_Berlinale_2026.jpg/1280px-Aidan_Zamiri_at_Berlinale_2026.jpg",
          caption: "Aidan Zamiri at the Berlin International Film Festival, 2026",
          alt: "Portrait of photographer and filmmaker Aidan Zamiri at Berlinale 2026",
        },
        {
          type: "paragraph",
          content:
            "Born in London in 1991, Zamiri came to photography through personal obsession — not fashion school. Nan Goldin and Wolfgang Tillmans were his north stars, not Vogue.",
        },
        {
          type: "paragraph",
          content:
            "He's the Instagram generation done right: instinctively understands how images travel, but never lets commerce kill the intimacy. Personal and commercial, all at once.",
        },
        {
          type: "heading",
          content: "The Rise",
        },
        {
          type: "list",
          items: [
            "2012–2015: Builds his portfolio through personal projects",
            "2015: Regular at Dazed & Confused and AnOther",
            "2017: First major fashion house commissions land",
            "Ongoing: Balances personal work and luxury advertising without losing either",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Found, Not Made" },
        {
          type: "paragraph",
          content:
            "Zamiri's images feel like they were discovered mid-moment. That's the trick — making the constructed look unconstructed is one of the hardest things in photography.",
        },
        { type: "heading", content: "Nights In, Lights Low" },
        {
          type: "paragraph",
          content:
            "His best work lives at night. Warm lamplight, dark city streets, amber glow through windows — people are more themselves after dark, and Zamiri knows it.",
        },
        { type: "heading", content: "No Extra Lights, Ever" },
        {
          type: "paragraph",
          content:
            "He shoots by the light that's already there. That constraint is the point — it locks the time, the season, the room into the image. It's documentary information, not just vibe.",
        },
        { type: "heading", content: "This World, Right Now" },
        {
          type: "paragraph",
          content:
            "Zamiri photographs a very specific London: creative, fashion-adjacent, existing between art and commerce. You couldn't fake these images — they could only be from here, and only from now.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Dazed and AnOther: His Training Ground" },
        {
          type: "paragraph",
          content:
            "These magazines exist specifically for photographers who don't fit the mainstream mould. Zamiri found his audience there — people who valued truth over polish.",
        },
        { type: "heading", content: "Fashion House Work: The Real Test" },
        {
          type: "paragraph",
          content:
            "When luxury brands came calling, the challenge was keeping his intimate aesthetic alive under commercial pressure. He pulled it off.",
        },
        { type: "heading", content: "Personal Projects: The Source" },
        {
          type: "paragraph",
          content:
            "His commercial aesthetic was built in his personal practice — photographing friends, his world, his evenings. The two are inseparable.",
        },
        { type: "heading", content: "Social Media as Publishing" },
        {
          type: "paragraph",
          content:
            "For Zamiri's generation, Instagram isn't promotion — it's a place to publish images that don't fit anywhere else. The feed is part of the body of work.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Camera as Social Object" },
        {
          type: "paragraph",
          content:
            "Zamiri photographs people he already knows, in places he already goes. The camera lives in his social life — it's not a professional tool he brings out, it's just always there.",
        },
        { type: "heading", content: "35mm: Built-In Discipline" },
        {
          type: "paragraph",
          content:
            "Thirty-six frames per roll forces you to choose. No spray-and-pray. Every frame costs something, so you actually think before you shoot.",
        },
        { type: "heading", content: "Just Wait" },
        {
          type: "paragraph",
          content:
            "His most important technique is patience — staying in a room for hours, letting it unfold naturally. The moment arrives if you're there for it.",
        },
        { type: "heading", content: "The Image Lives in the Capture" },
        {
          type: "paragraph",
          content:
            "Zamiri barely touches his images in post. He develops carefully and edits minimally — the photograph is made at the moment the shutter clicks, not later on a screen.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Generation That Blurred Everything" },
        {
          type: "paragraph",
          content:
            "For Zamiri's generation, personal and professional photography aren't separate worlds. The sensibility you develop in your own life is exactly what clients pay for.",
        },
        { type: "heading", content: "Inside London's Creative Bubble" },
        {
          type: "paragraph",
          content:
            "His work documents a specific London subculture — fashion-adjacent, resistant to the mainstream. It's a tradition: Tillmans did it with rave, Zamiri does it with now.",
        },
        { type: "heading", content: "Surviving the Noise" },
        {
          type: "paragraph",
          content:
            "Images circulate faster and compete harder than ever. Zamiri's work holds its power in that environment — which is itself an achievement worth studying.",
        },
        { type: "heading", content: "Personal IS Professional" },
        {
          type: "paragraph",
          content:
            "The old model: keep personal and commercial work separate. Zamiri's model: your personal sensibility is the product. Clients are buying your eye, not just your time.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Steal These Moves" },
        {
          type: "paragraph",
          content:
            "The most interesting photography comes from inside a world, not from outside looking in. Here's how Zamiri gets there.",
        },
        { type: "heading", content: "1. Photograph Your Own World" },
        {
          type: "paragraph",
          content:
            "Your social circle, your city, your Tuesday evenings — nobody else can photograph these with your authority. Start there.",
        },
        { type: "heading", content: "2. Be Patient" },
        {
          type: "paragraph",
          content:
            "Arrive early, stay late. The interesting moment rarely happens on schedule. Patience creates the conditions for the image.",
        },
        { type: "heading", content: "3. Learn to See in Available Light" },
        {
          type: "paragraph",
          content:
            "Leave the flash at home for one evening. Study what lamp light, window light, and street light actually look like. Most photographers never bother.",
        },
        { type: "heading", content: "4. Keep a Personal Practice" },
        {
          type: "paragraph",
          content:
            "Your commercial work will slowly go bland without it. Personal work is where your eye develops — the commercial work is where you apply it.",
        },
        { type: "heading", content: "5. Trust the Moment" },
        {
          type: "paragraph",
          content:
            "Zamiri's images feel found, not directed. That requires trusting that the moment will arrive and that you'll recognise it when it does.",
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
