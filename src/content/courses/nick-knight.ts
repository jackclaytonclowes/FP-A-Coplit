import type { Course } from "@/types"

const course: Course = {
  id: "nick-knight",
  title: "Nick Knight",
  slug: "nick-knight",
  description:
    "A study of Nick Knight — fashion photography's most restless experimenter. From iconic campaigns to SHOWstudio, Knight has continually pushed what a fashion image can be.",
  category: "great-photographers",
  accentColor: "#47b8e8",
  estimatedHours: 3,
  tags: ["fashion", "digital", "experimental", "conceptual", "editorial"],
  photographerId: "nick-knight",
  lessons: [
    {
      id: "nk-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Started With Skinheads, Ended Up Everywhere" },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nick_Knight.jpg/1280px-Nick_Knight.jpg",
          caption: "Nick Knight, fashion photographer and founder of SHOWstudio",
          alt: "Portrait of British fashion photographer Nick Knight",
        },
        {
          type: "paragraph",
          content:
            "Knight graduated in 1982 with a book about 100 skinheads in Bournemouth. It announced his interest in communities outside the mainstream — and it's never left him.",
        },
        {
          type: "paragraph",
          content:
            "By the mid-80s he was shooting i-D, then Yohji Yamamoto came calling. That 1986 catalogue changed fashion photography permanently.",
        },
        {
          type: "heading",
          content: "Never the Same Photographer Twice",
        },
        {
          type: "list",
          items: [
            "1982: Graduates with '100 Skinheads' project",
            "1986: Yohji Yamamoto A/W catalogue — a turning point in fashion photography",
            "1992: Appointed creative director of Tank magazine",
            "2000: Founds SHOWstudio, the world's first fashion film website",
            "2010: First fashion photographer to be appointed OBE",
            "2016: Collaborates with Lady Gaga on 'Applause' — fashion photography as moving image",
          ],
        },
        {
          type: "quote",
          content: "I want to make images that have never been seen before. If I'm repeating myself, I've failed.",
          author: "Nick Knight",
        },
      ],
      quiz: {
        question: "What was the subject of Nick Knight's graduation project, and why was it significant?",
        options: [
          { id: "a", text: "A documentation of 100 drag queens in London's West End", isCorrect: false },
          { id: "b", text: "A documentation of 100 skinheads in Bournemouth", isCorrect: true },
          { id: "c", text: "A series of fashion portraits for British Vogue", isCorrect: false },
          { id: "d", text: "Architectural photographs of Brutalist buildings", isCorrect: false },
        ],
        explanation:
          "Knight's graduation project documented 100 skinheads in Bournemouth. It revealed his early interest in subcultures outside the mainstream — a theme that would persist in his fashion work — and was published as a book, marking an early commercial and critical success.",
      },
    },
    {
      id: "nk-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Every Image Has an Idea Behind It" },
        {
          type: "paragraph",
          content:
            "Knight's work looks radically different decade to decade. What's consistent is conceptual ambition — every image has been deeply thought through before it's made.",
        },
        { type: "heading", content: "Colour Is a Weapon" },
        {
          type: "paragraph",
          content:
            "A face might be entirely cyan. A background might be one field of vivid red. Knight's colour isn't a record of reality — it's a tool for producing emotional states.",
        },
        { type: "heading", content: "Post-Production Is Part of the Image" },
        {
          type: "paragraph",
          content:
            "Knight was among the first to treat digital manipulation as an expressive medium, not just retouching. He sees no fundamental difference between photography and painting.",
        },
        { type: "heading", content: "The Best Collaborators Think Like Him" },
        {
          type: "paragraph",
          content:
            "Yamamoto, McQueen, Galliano, Kawakubo — Knight's deepest collaborations are with designers who share his conceptual hunger. Fashion and photography serving the same idea.",
        },
        {
          type: "quote",
          content: "Fashion photography has always been about the future. It shows us what we could be.",
          author: "Nick Knight",
        },
      ],
      quiz: {
        question: "How does Nick Knight use colour differently from most fashion photographers?",
        options: [
          { id: "a", text: "He always works in black and white to avoid colour distraction", isCorrect: false },
          { id: "b", text: "He uses naturalistic colour to document subjects truthfully", isCorrect: false },
          { id: "c", text: "He uses colour as a conceptual tool, heightening and shifting it to create ideas not record reality", isCorrect: true },
          { id: "d", text: "He relies entirely on in-camera colour profiles without post-processing", isCorrect: false },
        ],
        explanation:
          "Knight treats colour as an expressive and conceptual tool. Faces might be entirely one colour; backgrounds become fields of vivid hue. His colour is never simply a record of what was there — it is a choice made to produce a specific emotional or conceptual effect.",
      },
    },
    {
      id: "nk-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Yohji Yamamoto A/W 1986 — Fashion Gets Serious" },
        {
          type: "paragraph",
          content:
            "Stark, graphic, unlike anything else in fashion at the time. Knight matched Yamamoto's intellectual rigour shot for shot. One of the most influential catalogues ever made.",
        },
        { type: "heading", content: "McQueen: No. 13 — Two Robots, One White Tutu" },
        {
          type: "paragraph",
          content:
            "Model Shalom Harlow being spray-painted by industrial robots at the show's finale. Knight documented it. Fashion, performance, and technology colliding at full speed.",
        },
        { type: "heading", content: "Roses (2007) — Scanner as Camera" },
        {
          type: "paragraph",
          content:
            "Flowers scanned at ultra-high resolution, then manipulated. The results hover between photography and painting, between the clinical and the transcendent.",
        },
        { type: "heading", content: "SHOWstudio — The Internet Before Fashion Knew It Needed One" },
        {
          type: "paragraph",
          content:
            "Founded in 2000, the world's first fashion film website. Live streaming, behind-the-scenes film, fashion as moving image. He saw the future early.",
        },
      ],
      quiz: {
        question: "What happened at the climax of the Alexander McQueen show 'No. 13' that Knight documented?",
        options: [
          { id: "a", text: "A live painting was executed on a canvas by the designer himself", isCorrect: false },
          { id: "b", text: "Model Shalom Harlow was spray-painted by two industrial robots", isCorrect: true },
          { id: "c", text: "The collection was set on fire at the end of the runway", isCorrect: false },
          { id: "d", text: "A hologram of Isabella Blow appeared at the finale", isCorrect: false },
        ],
        explanation:
          "The climax of McQueen's No. 13 show featured model Shalom Harlow in a white tutu being spray-painted by two industrial robots. It was a perfect intersection of fashion, performance, and technology — one of the most celebrated moments in fashion show history.",
      },
    },
    {
      id: "nk-04-techniques",
      title: "Techniques & Approach",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Idea First, Camera Second" },
        {
          type: "paragraph",
          content:
            "Knight writes briefs — sometimes elaborate conceptual documents — before any shooting starts. The camera is just the tool to execute the thinking.",
        },
        { type: "heading", content: "New Tech Is a Creative Partner" },
        {
          type: "paragraph",
          content:
            "Flatbed scanners, motion capture, AI — Knight asks: what can this do that a camera can't? He keeps working at the edge of what's technically possible.",
        },
        { type: "heading", content: "Fashion Film Wasn't an Afterthought" },
        {
          type: "paragraph",
          content:
            "Through SHOWstudio, Knight pioneered fashion film decades before brands made it standard. He understood fashion needed time as well as space.",
        },
        { type: "heading", content: "No Boundaries Between Art Worlds" },
        {
          type: "paragraph",
          content:
            "Knight works with musicians, fine artists, technologists. He sees no border between fashion photography and art photography. His best work lives in between.",
        },
      ],
      quiz: {
        question: "What did Knight found in 2000 that revolutionised how fashion images were distributed?",
        options: [
          { id: "a", text: "A print magazine dedicated to experimental fashion photography", isCorrect: false },
          { id: "b", text: "SHOWstudio — the world's first fashion film website", isCorrect: true },
          { id: "c", text: "A photography school in London focused on fashion", isCorrect: false },
          { id: "d", text: "An AI company developing tools for fashion design", isCorrect: false },
        ],
        explanation:
          "SHOWstudio, founded in 2000, was the world's first fashion film website. It revolutionised fashion image-making by streaming shows live, creating fashion films, and treating fashion as a time-based medium — years before this became standard industry practice.",
      },
    },
    {
      id: "nk-05-legacy",
      title: "Influence & Legacy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Impossible to Categorise. Impossible to Replace." },
        {
          type: "paragraph",
          content:
            "Most photographers find a visual language and refine it. Knight finds one, exploits it, and abandons it. That restlessness is his whole point.",
        },
        { type: "heading", content: "He Made Manipulation Legitimate" },
        {
          type: "paragraph",
          content:
            "Knight proved that heavy digital post-production isn't a cheat — it's a medium. Every heavily manipulated fashion image owes something to him.",
        },
        { type: "heading", content: "He Invented Fashion Film" },
        {
          type: "paragraph",
          content:
            "The ubiquitous fashion film — every brand's content strategy staple — was anticipated and largely invented by Knight through SHOWstudio. Fashion needs time as well as space.",
        },
        { type: "heading", content: "He Brings Others With Him" },
        {
          type: "paragraph",
          content:
            "Through SHOWstudio, Knight has platformed hundreds of emerging photographers and filmmakers. He believes fashion's future depends on experimental thinking at every level.",
        },
      ],
      quiz: {
        question: "What permission did Knight give to subsequent generations of fashion photographers through his work?",
        options: [
          { id: "a", text: "Permission to shoot entirely on film and resist digital workflows", isCorrect: false },
          { id: "b", text: "Permission to use post-production and digital manipulation as expressive tools, not just retouching", isCorrect: true },
          { id: "c", text: "Permission to refuse all commercial assignments and only make personal work", isCorrect: false },
          { id: "d", text: "Permission to exclusively photograph subcultures rather than mainstream fashion", isCorrect: false },
        ],
        explanation:
          "Knight demonstrated that digital manipulation was a legitimate expressive medium — not a debasement of photography. He gave subsequent photographers permission to treat post-production as creatively as they treated the camera, opening up new possibilities for what fashion images could look like.",
      },
    },
    {
      id: "nk-06-learn",
      title: "What You Can Learn From Knight",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Five Things to Steal From Knight" },
        {
          type: "paragraph",
          content:
            "Knight's work challenges you to think more expansively about what an image is and what technology is actually for.",
        },
        { type: "heading", content: "1. Begin With the Idea, Not the Camera" },
        {
          type: "paragraph",
          content:
            "Before you shoot, write down what the image is meant to communicate. Even a simple concept makes the image stronger.",
        },
        { type: "heading", content: "2. Every Tool Is a Creative Medium" },
        {
          type: "paragraph",
          content:
            "Phone camera, flatbed scanner, AI generation — ask not 'is this proper photography?' but 'what does this make possible that nothing else does?'",
        },
        { type: "heading", content: "3. Reinvent Yourself on Purpose" },
        {
          type: "paragraph",
          content:
            "Knight never lets himself repeat himself. Try making work that looks nothing like your previous work. What do you learn when you destabilise your own aesthetic?",
        },
        { type: "heading", content: "4. Collaborate Outside Your World" },
        {
          type: "paragraph",
          content:
            "Knight's best work is collaborative. What can a graphic designer, filmmaker, or coder bring to your photography that another photographer can't?",
        },
        { type: "heading", content: "5. Add Time to the Story" },
        {
          type: "paragraph",
          content:
            "Knight moved into fashion film because still images can only tell part of a story. What would your images look like as moving sequences? How does time change what you're saying?",
        },
      ],
      reflection: {
        prompt:
          "Knight never repeats himself. Look at your last 20 photographs. What visual habits have you developed that might be limiting you? What would happen if you tried to make images that looked nothing like your usual work?",
      },
    },
  ],
}

export default course
