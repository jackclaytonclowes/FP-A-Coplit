import type { Course } from "@/types"

const course: Course = {
  id: "wolfgang-tillmans",
  title: "Wolfgang Tillmans",
  slug: "wolfgang-tillmans",
  description:
    "An immersive study of Wolfgang Tillmans — the photographer who redefined what a photograph could be. From rave culture to gallery walls, from fashion to abstract light studies.",
  category: "great-photographers",
  accentColor: "#c4a4e8",
  estimatedHours: 3,
  tags: ["photography", "contemporary", "documentary", "fashion", "culture"],
  photographerId: "wolfgang-tillmans",
  lessons: [
    {
      id: "wt-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        {
          type: "heading",
          content: "Rave Kid Turned Turner Prize Winner",
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Re_publica_faces_2019_(47797688941).jpg/1280px-Re_publica_faces_2019_(47797688941).jpg",
          caption: "Wolfgang Tillmans at re:publica, Berlin, 2019",
          alt: "Portrait of photographer Wolfgang Tillmans at re:publica 2019",
        },
        {
          type: "paragraph",
          content:
            "Tillmans grew up in West Germany with the Berlin Wall as psychological wallpaper. He picked up a camera at 16 and started photographing rave culture — from the inside.",
        },
        {
          type: "paragraph",
          content:
            "By his early 20s he was in London, shooting for i-D magazine. His images felt different: intimate, non-hierarchical, honest. Fashion that didn't feel like fashion.",
        },
        {
          type: "heading",
          content: "The Milestones",
        },
        {
          type: "list",
          items: [
            "1989: Moves to Bournemouth, England; begins contributing to i-D magazine",
            "1992: First solo exhibition in Hamburg",
            "1993: Begins contributing to The Face magazine",
            "2000: Wins Turner Prize — the first photographer and first non-British artist to win",
            "2017: Opens Between Bridges, his non-profit exhibition space",
            "2021: Retrospective 'To Look Without Fear' at MoMA, New York",
          ],
        },
        {
          type: "heading",
          content: "Who He Was Looking At",
        },
        {
          type: "paragraph",
          content:
            "Tillmans was shaped by Nan Goldin's diary-form intimacy and by conceptual artists like Joseph Beuys, who treated the gallery itself as a medium.",
        },
      ],
      quiz: {
        question: "Wolfgang Tillmans was the first photographer to win which prestigious UK art prize?",
        options: [
          { id: "a", text: "The Booker Prize", isCorrect: false },
          { id: "b", text: "The Turner Prize", isCorrect: true },
          { id: "c", text: "The Stirling Prize", isCorrect: false },
          { id: "d", text: "The BP Portrait Award", isCorrect: false },
        ],
        explanation:
          "In 2000, Wolfgang Tillmans became the first photographer — and first non-British artist — to win the Turner Prize. This cemented photography's place within the contemporary fine art conversation in the UK.",
      },
    },
    {
      id: "wt-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        {
          type: "heading",
          content: "His Style Is: No Style",
        },
        {
          type: "paragraph",
          content:
            "Tillmans resists a signature look — on purpose. Portraits, abstracts, still lifes, political images. Yet you always know it's him.",
        },
        {
          type: "heading",
          content: "Space Is Part of the Image",
        },
        {
          type: "paragraph",
          content:
            "Subjects often sit in a corner of the frame, surrounded by open space that hums with meaning. He ignores compositional rules while somehow obeying all of them.",
        },
        {
          type: "heading",
          content: "Colour as Truth",
        },
        {
          type: "paragraph",
          content:
            "Tungsten warmth, fluorescent blue, flat grey overcast — Tillmans leaves the colour cast alone. The 'wrong' light is often the honest light.",
        },
        {
          type: "heading",
          content: "The Wall Is the Work",
        },
        {
          type: "paragraph",
          content:
            "Forget linear hang at eye height. Tillmans covers entire walls — mixed sizes, pinned and framed, wildly different scales. The installation is the artwork.",
        },
        {
          type: "heading",
          content: "Photos Without a Camera",
        },
        {
          type: "paragraph",
          content:
            "His 'Freischwimmer' abstracts are made by exposing photographic paper to light in the darkroom — no camera involved. Photography doesn't need to represent anything.",
        },
        {
          type: "quote",
          content:
            "I'm interested in the in-between moments — the moments that happen between the moment everybody's focused on.",
          author: "Wolfgang Tillmans",
        },
      ],
      quiz: {
        question:
          "What is distinctive about how Tillmans hangs his gallery exhibitions compared to conventional photography shows?",
        options: [
          { id: "a", text: "He only shows works in chronological order", isCorrect: false },
          {
            id: "b",
            text: "He creates complex multi-height installations with mixed sizes, treating the whole wall as the work",
            isCorrect: true,
          },
          { id: "c", text: "He uses only digital projection rather than prints", isCorrect: false },
          { id: "d", text: "He always shows images in identical large format frames", isCorrect: false },
        ],
        explanation:
          "Tillmans is celebrated for his radical exhibition installations — photographs at multiple heights, in multiple sizes, pinned and framed across entire walls. The arrangement creates meaning through proximity and contrast, making the installation itself an artwork.",
      },
    },
    {
      id: "wt-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        {
          type: "heading",
          content: "Three Decades, No Repeats",
        },
        {
          type: "paragraph",
          content:
            "Tillmans works continuously — his studio is a living archive, always being reorganised and recontextualised. No discrete campaigns, just constant seeing.",
        },
        {
          type: "heading",
          content: "Burg (1992) — Fashion From the Inside",
        },
        {
          type: "paragraph",
          content:
            "Club kids, ravers, ecstatic faces. Shot from within the scene for i-D and The Face. Not aspirational — participatory.",
        },
        {
          type: "heading",
          content: "Freischwimmer (2003–05) — No Camera Required",
        },
        {
          type: "paragraph",
          content:
            "Light on large sheets of photo paper in a darkroom. The results are staggeringly beautiful — and completely camera-free.",
        },
        {
          type: "heading",
          content: "Lutz & Alex (1992) — Just Two People",
        },
        {
          type: "paragraph",
          content:
            "A series about his friend and girlfriend, shot with matter-of-fact directness. They're subjects, not models.",
        },
        {
          type: "heading",
          content: "Truth Study Center (2005–ongoing) — Politics on a Table",
        },
        {
          type: "paragraph",
          content:
            "Newspaper clippings and objects arranged around contested themes. Art that grapples directly with facts and who controls them.",
        },
        {
          type: "heading",
          content: "Neue Welt (2012) — The World Without Sentimentality",
        },
        {
          type: "paragraph",
          content:
            "Airports, hotel rooms, clouds from plane windows. A honest picture of the contemporary world — no nostalgia, no aggression.",
        },
      ],
      quiz: {
        question: "Tillmans' 'Freischwimmer' series was made without a camera. How were these images created?",
        options: [
          { id: "a", text: "Using AI image generation", isCorrect: false },
          { id: "b", text: "By exposing photographic paper to light directly in the darkroom", isCorrect: true },
          { id: "c", text: "By scanning and digitally manipulating existing photographs", isCorrect: false },
          { id: "d", text: "Using a pinhole camera without a lens", isCorrect: false },
        ],
        explanation:
          "The Freischwimmer series was made in the darkroom by exposing large sheets of photographic paper directly to light without using a camera. The resulting abstract images explore photography's relationship with representation and materiality.",
      },
    },
    {
      id: "wt-04-techniques",
      title: "Compositional Techniques",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        {
          type: "heading",
          content: "Fast Eye, Trained Instincts",
        },
        {
          type: "paragraph",
          content:
            "Tillmans works quickly with available light. Spontaneity isn't chaos — it's a trained eye responding faster than thought.",
        },
        {
          type: "heading",
          content: "Use the Light That's There",
        },
        {
          type: "paragraph",
          content:
            "No flash. No reflectors. Just whatever light exists — bedside lamp, grey afternoon, blue-hour window. That's the truth of the moment.",
        },
        {
          type: "heading",
          content: "Don't Ask, Don't Direct",
        },
        {
          type: "paragraph",
          content:
            "His subjects aren't posed — they're living. Aware of the camera, sure, but not performing for it. The images feel stolen from real life.",
        },
        {
          type: "heading",
          content: "Think in Series",
        },
        {
          type: "paragraph",
          content:
            "Tillmans rarely makes one-off images. He shoots in volume and thinks about how images work together. One image alone can miss the point.",
        },
        {
          type: "heading",
          content: "Objects Matter Too",
        },
        {
          type: "paragraph",
          content:
            "His still lifes — fruit, clothes, condensation on glass — get the same treatment as portraits. Available light, minimum fuss, maximum attention.",
        },
      ],
      quiz: {
        question: "Which of the following best describes Tillmans' approach to directing his subjects?",
        options: [
          { id: "a", text: "Highly choreographed and directed", isCorrect: false },
          { id: "b", text: "Minimal direction, allowing subjects to be themselves", isCorrect: true },
          { id: "c", text: "Always using professional models in formal poses", isCorrect: false },
          { id: "d", text: "Always using non-human subjects (objects, landscapes)", isCorrect: false },
        ],
        explanation:
          "Tillmans is known for minimal direction — he photographs people as they are, allowing subjects to exist naturally in front of the lens. This approach produces images that feel candid and true, even when the subject is aware of the camera.",
      },
    },
    {
      id: "wt-05-legacy",
      title: "Influence & Legacy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        {
          type: "heading",
          content: "He Changed Three Things at Once",
        },
        {
          type: "paragraph",
          content:
            "Fashion photography, fine art photography, exhibition-making — Tillmans reshaped all three simultaneously. Few photographers can claim one.",
        },
        {
          type: "heading",
          content: "Fashion Without Glamour",
        },
        {
          type: "paragraph",
          content:
            "His i-D and The Face work rewrote fashion photography as documentary and anti-glamour. Harley Weir, Juergen Teller, Alasdair McLellan all came after.",
        },
        {
          type: "heading",
          content: "Photography Belongs in a Museum",
        },
        {
          type: "paragraph",
          content:
            "Winning the Turner Prize settled an old argument. Photography is fine art, full stop. His darkroom abstracts proved it could be as conceptually rigorous as painting.",
        },
        {
          type: "heading",
          content: "Art Has to Show Up",
        },
        {
          type: "paragraph",
          content:
            "Tillmans campaigned hard against Brexit with poster campaigns and public statements. He believes artists have a responsibility to engage with politics directly.",
        },
        {
          type: "heading",
          content: "The Tillmans Effect",
        },
        {
          type: "paragraph",
          content:
            "Intimacy, the everyday, the imperfect, the communal — his visual language is now so pervasive it's just how a generation of photographers sees.",
        },
      ],
      quiz: {
        question: "Which publication(s) is Tillmans most associated with launching his fashion photography career in the early 1990s?",
        options: [
          { id: "a", text: "Vogue and Harper's Bazaar", isCorrect: false },
          { id: "b", text: "i-D and The Face", isCorrect: true },
          { id: "c", text: "Dazed & Confused and AnOther", isCorrect: false },
          { id: "d", text: "Interview and Purple", isCorrect: false },
        ],
        explanation:
          "Tillmans' fashion career began with contributions to i-D and The Face — two British magazines that championed youth culture and gave photographers unusual creative freedom. These publications were the perfect platform for his anti-fashion approach to fashion photography.",
      },
    },
    {
      id: "wt-06-learn",
      title: "What You Can Learn From Tillmans",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        {
          type: "heading",
          content: "Five Things to Steal From Tillmans",
        },
        {
          type: "paragraph",
          content:
            "Don't copy his style — understand what's underneath it. These principles work for any kind of photography.",
        },
        {
          type: "heading",
          content: "1. Be Present in Your Own World",
        },
        {
          type: "paragraph",
          content:
            "Tillmans photographs his own life — his friends, his travels, his studio. You don't need to go anywhere. Start where you are.",
        },
        {
          type: "heading",
          content: "2. Nothing Is Too Ordinary",
        },
        {
          type: "paragraph",
          content:
            "A bowl of fruit deserves the same attention as a supermodel. Drop your assumptions about what's worth photographing.",
        },
        {
          type: "heading",
          content: "3. Think in Series and Installation",
        },
        {
          type: "paragraph",
          content:
            "One image tells one story. A wall of images tells a richer one. Which of your photos are in conversation? Put them together and find out.",
        },
        {
          type: "heading",
          content: "4. Let the Light Be What It Is",
        },
        {
          type: "paragraph",
          content:
            "Before you reach for a flash, sit with the available light. The 'wrong' light — too warm, too blue, too flat — often carries the most information.",
        },
        {
          type: "heading",
          content: "5. Photography Is Political",
        },
        {
          type: "paragraph",
          content:
            "What you choose to photograph — and what you ignore — are political decisions. Own them.",
        },
      ],
      reflection: {
        prompt:
          "Think about your own daily environment — your home, your community, your daily routine. What would a Tillmans-style series of images from your life look like? What subjects are you overlooking as 'uninteresting' that might actually be worth sustained photographic attention?",
      },
    },
  ],
}

export default course
