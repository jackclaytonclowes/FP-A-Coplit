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
      estimatedMinutes: 8,
      blocks: [
        {
          type: "heading",
          content: "Wolfgang Tillmans (b. 1968, Remscheid, Germany)",
        },
        {
          type: "paragraph",
          content:
            "Wolfgang Tillmans was born in 1968 in Remscheid, West Germany. He grew up during the Cold War, with East Germany and its wall a daily psychological presence. This sense of borders — between public and private, between politics and personal life — would become central to his work.",
        },
        {
          type: "paragraph",
          content:
            "He began photographing at 16, initially documenting the emerging rave and club culture around him. By his early 20s he had moved to London and begun contributing to i-D magazine — images of a new youth culture that felt different from anything that had come before: intimate, non-hierarchical, uncurated.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
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
          content: "Influences",
        },
        {
          type: "paragraph",
          content:
            "Tillmans has cited Nan Goldin as a formative influence — her diary-form approach to photographing community and intimacy. He has also acknowledged the influence of conceptual art, particularly how artists like Joseph Beuys used the gallery space itself as a medium.",
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
      estimatedMinutes: 10,
      blocks: [
        {
          type: "heading",
          content: "A Style Built on Anti-Style",
        },
        {
          type: "paragraph",
          content:
            "Tillmans' visual style is famously difficult to define — and that difficulty is the point. He resists the idea of a signature look. His images range from abstract light studies to intimate portraits, from still lifes of kitchen tables to political demonstrations. Yet they are unmistakably his.",
        },
        {
          type: "heading",
          content: "Composition",
        },
        {
          type: "paragraph",
          content:
            "Tillmans frequently uses negative space with generosity — subjects often occupy a small portion of the frame, surrounded by open space that becomes charged with meaning. He avoids obvious 'rules' while demonstrating an instinctive understanding of them.",
        },
        {
          type: "heading",
          content: "Colour Treatment",
        },
        {
          type: "paragraph",
          content:
            "His colour work is notable for its honesty. He does not aggressively correct colour casts — the warm yellow of tungsten light, the cold blue of fluorescent tubes, the flat grey of overcast days are all allowed to remain. This gives his images a documentary quality even when the subject is ostensibly fashion.",
        },
        {
          type: "heading",
          content: "The Gallery Installation",
        },
        {
          type: "paragraph",
          content:
            "One of Tillmans' greatest innovations is his approach to hanging exhibitions. Rather than a linear sequence of framed works at eye height, he creates complex, multi-height installations that cover entire walls — photographs pinned directly or in frames, images of radically different sizes placed in unexpected proximity. The exhibition itself becomes the work.",
        },
        {
          type: "heading",
          content: "Darkroom Abstracts",
        },
        {
          type: "paragraph",
          content:
            "In parallel with his documentary and fashion work, Tillmans has produced a body of abstract images made in the darkroom without a camera — light-exposed paper, chemical reactions, folded prints. These 'Freischwimmer' (freestyle) images push against photography's presumed relationship with representation.",
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
      estimatedMinutes: 9,
      blocks: [
        {
          type: "heading",
          content: "Key Works & Series",
        },
        {
          type: "paragraph",
          content:
            "Tillmans has produced an enormous and diverse body of work over three decades. Rather than discrete campaigns, he works continuously — his studio is his archive, constantly reorganised and recontextualised.",
        },
        {
          type: "heading",
          content: "Burg (1992)",
        },
        {
          type: "paragraph",
          content:
            "His early club and rave photography — images of young people in ecstatic states, taken from within the scene. These were published in i-D and The Face and represented a new kind of fashion photography: not aspirational but participatory.",
        },
        {
          type: "heading",
          content: "Freischwimmer (2003–05)",
        },
        {
          type: "paragraph",
          content:
            "Abstract darkroom works made without a camera. Light played on large sheets of photographic paper in the darkroom creates forms of extraordinary beauty. These images challenged what photography was allowed to be.",
        },
        {
          type: "heading",
          content: "Lutz & Alex (1992)",
        },
        {
          type: "paragraph",
          content:
            "A series documenting his close friend Lutz and his girlfriend Alex. These intimate images of a couple's daily life are shot with matter-of-fact directness — the subjects exist as themselves, not as models.",
        },
        {
          type: "heading",
          content: "Truth Study Center (2005–ongoing)",
        },
        {
          type: "paragraph",
          content:
            "A series of table photographs showing newspaper clippings, objects, and ephemera arranged around specific themes — often political or social. These works engage directly with information and truth at a time when both were increasingly contested.",
        },
        {
          type: "heading",
          content: "Neue Welt (2012)",
        },
        {
          type: "paragraph",
          content:
            "A book of photographs taken around the world — airports, hotel rooms, clouds from plane windows — that attempts to picture the contemporary world honestly, without the sentimentality of travel photography or the aggression of photojournalism.",
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
      estimatedMinutes: 8,
      blocks: [
        {
          type: "heading",
          content: "How Tillmans Sees",
        },
        {
          type: "paragraph",
          content:
            "Understanding Tillmans' technical approach reveals why his images feel the way they do. He works quickly, often with available light, and prizes spontaneity over control. But spontaneity is not randomness — it is trained responsiveness.",
        },
        {
          type: "heading",
          content: "Available Light",
        },
        {
          type: "paragraph",
          content:
            "Tillmans almost never uses flash or artificial lighting in his personal work. He embraces whatever light exists — the flat grey of an overcast afternoon, the warmth of a bedside lamp, the blue-hour glow through a window. This commitment to available light is also a commitment to documentary truth: the image records what was there.",
        },
        {
          type: "heading",
          content: "The Unposed Pose",
        },
        {
          type: "paragraph",
          content:
            "His subjects are rarely asked to perform. They may be aware of the camera — often are — but they are not directed in the conventional sense. Tillmans photographs people in conversation, at rest, in the middle of movement. The result is images that feel stolen from life rather than staged for it.",
        },
        {
          type: "heading",
          content: "Seriality",
        },
        {
          type: "paragraph",
          content:
            "Tillmans rarely thinks in single images. He shoots extensively and thinks in series — how images will be shown together, what proximity and contrast between images creates. A single image removed from its installation context may lose much of its meaning.",
        },
        {
          type: "heading",
          content: "The Still Life",
        },
        {
          type: "paragraph",
          content:
            "His still lifes — a bowl of fruit, a pile of clothes, a window with condensation — use the same approach as his portraits: available light, minimum intervention, maximum attention. The objects are allowed to be themselves.",
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
      estimatedMinutes: 8,
      blocks: [
        {
          type: "heading",
          content: "Tillmans' Cultural Impact",
        },
        {
          type: "paragraph",
          content:
            "Few photographers have had as broad a cultural impact as Tillmans over the past three decades. He changed fashion photography, fine art photography, and the way exhibitions are made — all simultaneously.",
        },
        {
          type: "heading",
          content: "Fashion Photography",
        },
        {
          type: "paragraph",
          content:
            "His work for i-D and The Face in the early 90s created a new vocabulary for fashion photography — one that was documentary, participatory, and anti-glamour. This directly influenced a generation of photographers including Harley Weir, Juergen Teller, and Alasdair McLellan.",
        },
        {
          type: "heading",
          content: "Fine Art Photography",
        },
        {
          type: "paragraph",
          content:
            "By winning the Turner Prize and exhibiting in major museums, Tillmans helped establish photography as an unambiguously serious fine art medium at a time when this was still contested. His abstract darkroom works demonstrated that photography could be as conceptually rigorous as painting.",
        },
        {
          type: "heading",
          content: "Political Engagement",
        },
        {
          type: "paragraph",
          content:
            "Tillmans has used his public platform extensively for political causes — most notably campaigning against Brexit with large-scale poster campaigns. He believes artists have a responsibility to engage publicly with political questions.",
        },
        {
          type: "heading",
          content: "Legacy",
        },
        {
          type: "paragraph",
          content:
            "The Tillmans influence is everywhere in contemporary photography — in the aesthetic of intimacy, the embrace of the everyday, the rejection of the perfectly composed, the interest in community and belonging. His visual language has become so pervasive it is now simply how a generation of photographers sees.",
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
      estimatedMinutes: 10,
      blocks: [
        {
          type: "heading",
          content: "Practical Lessons From His Practice",
        },
        {
          type: "paragraph",
          content:
            "Studying Tillmans is not about copying his style — it is about understanding the principles beneath the surface, which can be applied to any photographic practice.",
        },
        {
          type: "heading",
          content: "1. Be Present in Your Own World",
        },
        {
          type: "paragraph",
          content:
            "Tillmans photographs his own life — his friends, his communities, his travels, his studio. The most powerful photographs are often the most proximate. You do not need to travel to find subjects worth photographing.",
        },
        {
          type: "heading",
          content: "2. Resist the Hierarchy of Subjects",
        },
        {
          type: "paragraph",
          content:
            "For Tillmans, a bowl of fruit is as worthy of sustained attention as a supermodel. The banality of the everyday is not a problem to overcome — it is the subject. Remove your assumptions about what is 'photogenic'.",
        },
        {
          type: "heading",
          content: "3. Think in Series and Installation",
        },
        {
          type: "paragraph",
          content:
            "A single image tells one story. A wall of related images tells a completely different and richer story. Begin to think about how your images relate to one another. Which images are in conversation? Which create productive tension when placed together?",
        },
        {
          type: "heading",
          content: "4. Let the Light Be What It Is",
        },
        {
          type: "paragraph",
          content:
            "Before reaching for flash or extra lighting, spend time understanding what the available light is doing. Often the most interesting light is the 'wrong' light — too warm, too blue, too flat — that carries authentic information about the moment.",
        },
        {
          type: "heading",
          content: "5. Photography Is Political",
        },
        {
          type: "paragraph",
          content:
            "Every image is an act of selection — what you choose to photograph, and what you choose not to, are political acts. Tillmans makes this explicit. Think about what your photography includes and excludes, and what those choices mean.",
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
