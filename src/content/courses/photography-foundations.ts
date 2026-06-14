import type { Course } from "@/types"

const course: Course = {
  id: "photography-foundations",
  title: "Photography Foundations",
  slug: "photography-foundations",
  description:
    "Master the fundamental principles of photography — from light and composition to visual storytelling and the history of the medium.",
  category: "photography-foundations",
  accentColor: "#e8c547",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/35mm_lens_aperture.jpg/1280px-35mm_lens_aperture.jpg",
  estimatedHours: 4,
  tags: ["photography", "composition", "light", "colour", "beginner"],
  lessons: [
    {
      id: "pf-01-composition",
      title: "Composition & Framing",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        {
          type: "heading",
          content: "The Frame Is a Decision",
        },
        {
          type: "paragraph",
          content:
            "Before you press the shutter, every element in the frame is a choice — what's in, what's out, where your subject sits. Composition is the language you use to speak.",
        },
        {
          type: "heading",
          content: "Rule of Thirds: Start Here",
        },
        {
          type: "paragraph",
          content:
            "Divide your frame into a 3×3 grid. Place your subject on the lines or at their intersections — the 'power points'. Off-centre creates energy that centred almost never does.",
        },
        {
          type: "heading",
          content: "Leading Lines Pull the Eye",
        },
        {
          type: "paragraph",
          content:
            "Roads, rivers, shadows, architecture — use lines that drag the viewer's gaze toward your subject. They can be literal or implied (a gaze, a gesture).",
        },
        {
          type: "heading",
          content: "Empty Space Isn't Wasted",
        },
        {
          type: "paragraph",
          content:
            "Negative space creates mood, isolation, and scale. A small figure in a vast sky says something about loneliness that a tight crop simply cannot.",
        },
        {
          type: "quote",
          content:
            "Photography is about finding out what can happen in the frame. When you put four edges around some facts, you change those facts.",
          author: "Garry Winogrand",
        },
        {
          type: "heading",
          content: "Frame Within a Frame",
        },
        {
          type: "paragraph",
          content:
            "Doorways, windows, and arches act as secondary frames — they isolate the subject, add depth, and give the image a sense of place.",
        },
      ],
      quiz: {
        question:
          "The 'power points' in the rule of thirds are located at which positions in the frame?",
        options: [
          { id: "a", text: "The four corners of the image", isCorrect: false },
          { id: "b", text: "The intersections of the grid lines", isCorrect: true },
          { id: "c", text: "The exact centre of the frame", isCorrect: false },
          { id: "d", text: "The midpoints of each edge", isCorrect: false },
        ],
        explanation:
          "The rule of thirds divides the frame into a 3×3 grid. The four intersections where the grid lines cross are the 'power points' — positions that create natural visual energy and draw the eye.",
      },
    },
    {
      id: "pf-02-light",
      title: "Understanding Light",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        {
          type: "heading",
          content: "Light Is Your Medium, Not Just Your Tool",
        },
        {
          type: "paragraph",
          content:
            "Photography literally means 'writing with light'. Every image records how light fell at one specific moment — understanding it is the single most important skill you can build.",
        },
        {
          type: "heading",
          content: "Hard vs Soft: Know the Difference",
        },
        {
          type: "paragraph",
          content:
            "Hard light (midday sun, bare flash) creates sharp shadows and high contrast. Soft light (overcast sky, a window) creates gentle gradations that flatter skin and reveal form.",
        },
        {
          type: "heading",
          content: "Direction Changes Everything",
        },
        {
          type: "list",
          items: [
            "Front lighting: flat, even, minimal shadow — reduces texture",
            "Side lighting (Rembrandt): dramatic, reveals texture and form",
            "Back lighting: silhouettes, rim light, ethereal glow",
            "Top lighting: harsh, unflattering for portraits",
            "Under lighting: eerie, theatrical",
          ],
        },
        {
          type: "heading",
          content: "Golden Hour and Blue Hour Are Free Magic",
        },
        {
          type: "paragraph",
          content:
            "The hour after sunrise and before sunset delivers warm, directional light with long shadows. The blue hour — 20 minutes after sunset — turns city scenes luminous and deep. Lindbergh and Roversi both built careers on knowing exactly how to use dying light.",
        },
        {
          type: "heading",
          content: "Chiaroscuro: Drama from Darkness",
        },
        {
          type: "paragraph",
          content:
            "Borrowed from Renaissance painting, chiaroscuro is light sculpting a subject out of near-black shadow. Helmut Newton used it constantly — extraordinary power from contrast alone.",
        },
        {
          type: "quote",
          content: "Available light is any damn light that is available.",
          author: "W. Eugene Smith",
        },
      ],
      quiz: {
        question: "Which term describes the dramatic use of light and shadow, borrowed from Renaissance painting?",
        options: [
          { id: "a", text: "Bokeh", isCorrect: false },
          { id: "b", text: "Chiaroscuro", isCorrect: true },
          { id: "c", text: "Golden ratio", isCorrect: false },
          { id: "d", text: "Rembrandt lighting", isCorrect: false },
        ],
        explanation:
          "Chiaroscuro (Italian for 'light-dark') is a technique from Renaissance painting, adopted by photographers, that uses strong contrasts between light and shadow to give three-dimensional volume and drama to a subject.",
      },
    },
    {
      id: "pf-03-colour",
      title: "Colour Theory for Photography",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        {
          type: "heading",
          content: "Colour Is Felt Before It's Seen",
        },
        {
          type: "paragraph",
          content:
            "Before a viewer reads a single compositional element, they feel the colour temperature. Warm images feel intimate; cool images feel distant. Great photographers treat colour as intentionally as composition.",
        },
        {
          type: "heading",
          content: "Colour Temperature: Measured in Kelvin",
        },
        {
          type: "paragraph",
          content:
            "Tungsten light sits at around 2700K — warm, amber. Daylight is 5500K — neutral. Shade or overcast sky reaches 7000K — cool, blue. You can correct for these shifts or exploit them emotionally.",
        },
        {
          type: "heading",
          content: "Colour Harmony in Practice",
        },
        {
          type: "list",
          items: [
            "Complementary: colours opposite on the wheel (orange/blue, red/green) — high contrast, energetic",
            "Analogous: adjacent colours (blue, teal, green) — harmonious, calming",
            "Monochromatic: single hue in different tones — sophisticated, unified",
            "Triadic: three equidistant colours — vibrant, complex",
          ],
        },
        {
          type: "heading",
          content: "Colour as the Subject Itself",
        },
        {
          type: "paragraph",
          content:
            "Nick Knight treats colour as a character, not a backdrop. Tim Walker uses hallucinatory palettes to build fairy-tale worlds. Lindbergh does the opposite — strips colour almost entirely to force focus onto form and human truth.",
        },
        {
          type: "quote",
          content:
            "Colour is a power which directly influences the soul.",
          author: "Wassily Kandinsky",
        },
      ],
      quiz: {
        question:
          "What does 'colour temperature' measure in photography?",
        options: [
          { id: "a", text: "The physical heat produced by a light source", isCorrect: false },
          {
            id: "b",
            text: "The warmth or coolness of a light source, measured in Kelvin",
            isCorrect: true,
          },
          { id: "c", text: "The intensity (brightness) of a light source", isCorrect: false },
          { id: "d", text: "The colour of the subject being photographed", isCorrect: false },
        ],
        explanation:
          "Colour temperature is measured in Kelvin (K) and describes how warm or cool a light source appears. Lower values (2700K) are warm/amber; higher values (7000K+) are cool/blue.",
      },
    },
    {
      id: "pf-04-lens",
      title: "Lens Selection & Focal Length",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        {
          type: "heading",
          content: "Your Lens Is Your Point of View",
        },
        {
          type: "paragraph",
          content:
            "Every focal length renders the world differently — not just technically, but philosophically. Your choice determines the relationship between you, your subject, and the space between you.",
        },
        {
          type: "heading",
          content: "Wide Angle (14–35mm): Place People in Their World",
        },
        {
          type: "paragraph",
          content:
            "Wide lenses exaggerate perspective — close things loom large, distant things shrink fast. Tillmans uses them to embed people in their environment rather than isolate them from it.",
        },
        {
          type: "heading",
          content: "Standard (40–60mm): The Human Eye Equivalent",
        },
        {
          type: "paragraph",
          content:
            "The 50mm renders perspective naturally. Juergen Teller's apparently casual, intimate images often rely on standard focal lengths — they feel honest because the lens isn't doing anything strange.",
        },
        {
          type: "heading",
          content: "Telephoto (85–200mm+): Compression and Blur",
        },
        {
          type: "paragraph",
          content:
            "Longer focal lengths compress distance and produce beautiful background blur. The 85mm is revered as the portrait lens — it flatters facial proportions without distortion.",
        },
        {
          type: "heading",
          content: "Aperture Controls Depth of Field",
        },
        {
          type: "paragraph",
          content:
            "Wide apertures (f/1.4) isolate a subject in soft blur. Narrow apertures (f/8) keep everything sharp. Paolo Roversi shoots near-wide-open on large-format film — the dreamlike softness is entirely intentional.",
        },
      ],
      quiz: {
        question: "Which focal length range is typically associated with compressing background distance and creating background blur (bokeh)?",
        options: [
          { id: "a", text: "14–24mm (ultra-wide)", isCorrect: false },
          { id: "b", text: "35–50mm (standard)", isCorrect: false },
          { id: "c", text: "85–200mm (telephoto)", isCorrect: true },
          { id: "d", text: "All focal lengths equally", isCorrect: false },
        ],
        explanation:
          "Telephoto lenses (85mm+) compress perspective — making backgrounds appear closer — and produce beautiful background blur (bokeh) when used at wide apertures. The 85mm is especially beloved for portrait photography.",
      },
    },
    {
      id: "pf-05-storytelling",
      title: "Visual Storytelling",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        {
          type: "heading",
          content: "Technique Without Story Is Empty",
        },
        {
          type: "paragraph",
          content:
            "A technically perfect photograph can be completely hollow. A blurred, underexposed image can carry enormous power if it captures something true. Technical mastery serves storytelling — never the other way around.",
        },
        {
          type: "heading",
          content: "The Decisive Moment: See and Frame Simultaneously",
        },
        {
          type: "paragraph",
          content:
            "Cartier-Bresson described it as simultaneous recognition of an event's significance and the perfect formal composition to express it. You see what's happening and you frame it — in the same instant.",
        },
        {
          type: "heading",
          content: "Sequences Tell a Different Story",
        },
        {
          type: "paragraph",
          content:
            "A single image tells one story. A series tells another. When Knight creates a story for SHOWstudio, every frame builds a cumulative argument — images must work alone and together.",
        },
        {
          type: "heading",
          content: "Emotion vs. Information: Why Not Both?",
        },
        {
          type: "paragraph",
          content:
            "Documentary photographers prioritise information; fashion photographers prioritise feeling. The greatest images carry both — Lindbergh's portraits are loaded with documentary truth and fashion elegance simultaneously.",
        },
        {
          type: "quote",
          content:
            "Your first 10,000 photographs are your worst.",
          author: "Henri Cartier-Bresson",
        },
      ],
      quiz: {
        question: "Henri Cartier-Bresson's concept of 'the decisive moment' describes what?",
        options: [
          { id: "a", text: "The moment you choose which camera to use", isCorrect: false },
          {
            id: "b",
            text: "Simultaneous recognition of an event's significance and its perfect formal composition",
            isCorrect: true,
          },
          { id: "c", text: "The exact moment of peak technical exposure", isCorrect: false },
          { id: "d", text: "Choosing between colour and black & white", isCorrect: false },
        ],
        explanation:
          "Cartier-Bresson described 'the decisive moment' as the instant where seeing and composing happen simultaneously — where the subject, the light, the geometry, and the meaning align perfectly.",
      },
    },
    {
      id: "pf-06-portrait",
      title: "Portrait Photography",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        {
          type: "heading",
          content: "A Portrait Is Made, Not Taken",
        },
        {
          type: "paragraph",
          content:
            "The best portrait photographers create a space where subjects can reveal themselves. That requires trust, patience, and treating the camera as an invitation — not a weapon.",
        },
        {
          type: "heading",
          content: "Eyes: The Whole Game",
        },
        {
          type: "paragraph",
          content:
            "Direct eye contact engages the viewer in a relationship. Averted gaze creates mystery. Leibovitz knows exactly when to ask someone to look away — and why. You should too.",
        },
        {
          type: "heading",
          content: "Environmental vs Studio: Different Truths",
        },
        {
          type: "paragraph",
          content:
            "Environmental portraits reveal context — who someone is in their world. Studio portraits strip everything away, forcing focus onto the person. Avedon's bare white backgrounds made subjects confront themselves with no distraction.",
        },
        {
          type: "heading",
          content: "The Unguarded Moment Is the Real One",
        },
        {
          type: "paragraph",
          content:
            "Tillmans built his practice around what happens before and after the pose — the unguarded glance, the body at rest, the face between expressions. These moments often contain more truth than the posed image.",
        },
      ],
      quiz: {
        question: "Richard Avedon was known for his portrait style of shooting subjects against what kind of background?",
        options: [
          { id: "a", text: "Rich, textured environmental settings", isCorrect: false },
          { id: "b", text: "Stark white backgrounds", isCorrect: true },
          { id: "c", text: "Natural outdoor environments", isCorrect: false },
          { id: "d", text: "Abstract painted backdrops", isCorrect: false },
        ],
        explanation:
          "Richard Avedon was renowned for his stark white backdrop portraits that stripped away environmental context, forcing viewers to confront his subjects directly. This technique became his signature and influenced generations of portrait photographers.",
      },
    },
    {
      id: "pf-07-street",
      title: "Street Photography",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        {
          type: "heading",
          content: "The Street Asks Everything of You",
        },
        {
          type: "paragraph",
          content:
            "A camera and the willingness to be present — that's all street photography requires. And also: quick reflexes, an eye for the extraordinary in the ordinary, and the nerve to photograph strangers.",
        },
        {
          type: "heading",
          content: "A 150-Year Tradition",
        },
        {
          type: "paragraph",
          content:
            "From Atget's turn-of-the-century Paris to Vivian Maier's Chicago self-portraits to Parr's colour-saturated British seaside — street photography is social history made image.",
        },
        {
          type: "heading",
          content: "How Close? That's an Ethical Question.",
        },
        {
          type: "paragraph",
          content:
            "Bruce Gilden's flash-in-the-face approach is confrontational. Cartier-Bresson's long-lens observation is invisible. Neither is wrong — they're different relationships to the world. But consent and dignity are always present as questions.",
        },
        {
          type: "heading",
          content: "Your Eye Is What Makes It Yours",
        },
        {
          type: "paragraph",
          content:
            "The best street photographers notice what others miss. Teller's street work is unmistakably his — raw, unflattering, searching for psychological truth over beauty. What do you notice that no one else does?",
        },
      ],
      quiz: {
        question: "Which photographer is best known for their documentation of British seaside culture in vivid, often satirical colour photography?",
        options: [
          { id: "a", text: "Henri Cartier-Bresson", isCorrect: false },
          { id: "b", text: "Wolfgang Tillmans", isCorrect: false },
          { id: "c", text: "Martin Parr", isCorrect: true },
          { id: "d", text: "Nan Goldin", isCorrect: false },
        ],
        explanation:
          "Martin Parr is celebrated for his satirical, hyper-vivid documentation of British culture — particularly working-class leisure at seaside resorts. His use of garish colour and close-up flash became his unmistakable signature.",
      },
    },
    {
      id: "pf-08-documentary",
      title: "Documentary Photography",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        {
          type: "heading",
          content: "Photography as Proof That Something Happened",
        },
        {
          type: "paragraph",
          content:
            "Documentary photography operates from one belief: images can change minds, shift policy, and bear witness to events that words can't fully describe. It's photography in service of truth.",
        },
        {
          type: "heading",
          content: "The Diary Form: Nan Goldin's Gift",
        },
        {
          type: "paragraph",
          content:
            "'The Ballad of Sexual Dependency' is the defining documentary project of its era — an intimate photographic diary of her social world in New York in the 1970s and 80s. She is inside the story. There is no pretence of objectivity.",
        },
        {
          type: "heading",
          content: "Photography With a Social Responsibility",
        },
        {
          type: "paragraph",
          content:
            "Dorothea Lange, W. Eugene Smith, and Salgado all believed photography must document injustice, poverty, and the dignity of those who go unseen. Demanding work — but some of the most important images ever made came from it.",
        },
        {
          type: "heading",
          content: "Documentary Meets Fashion: Lindbergh's Crossover",
        },
        {
          type: "paragraph",
          content:
            "Lindbergh's beach sessions with supermodels in the early 90s — natural light, minimal makeup, real wind — looked more like documentary films than fashion shoots. That crossover transformed what fashion photography could be.",
        },
        {
          type: "quote",
          content: "The camera is an instrument that teaches people how to see without a camera.",
          author: "Dorothea Lange",
        },
      ],
      quiz: {
        question: "Nan Goldin's 'The Ballad of Sexual Dependency' is best described as what type of documentary project?",
        options: [
          { id: "a", text: "War photojournalism", isCorrect: false },
          { id: "b", text: "A photographic diary of her social circle", isCorrect: true },
          { id: "c", text: "A survey of New York architecture", isCorrect: false },
          { id: "d", text: "A fashion editorial campaign", isCorrect: false },
        ],
        explanation:
          "Nan Goldin's landmark work is an intimate photographic diary of her social world — friends, lovers, and herself — in New York's underground scene during the 1970s and 80s. It blurred the line between documentary and personal memoir.",
      },
    },
    {
      id: "pf-09-fashion-photo",
      title: "Fashion Photography",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        {
          type: "heading",
          content: "Commercial Pressure, Artistic Gold",
        },
        {
          type: "paragraph",
          content:
            "Fashion photography must sell clothes and create culture simultaneously. The greatest fashion photographers use that tension as fuel — the commercial constraint becomes the creative frame.",
        },
        {
          type: "heading",
          content: "Studio vs Location: Total Control vs Real World",
        },
        {
          type: "paragraph",
          content:
            "Studio fashion gives you total control — Irving Penn's seamless paper backgrounds and meticulous lighting are the gold standard. Location fashion puts the clothes in conversation with actual life.",
        },
        {
          type: "heading",
          content: "A Fashion Shoot Is a Team Sport",
        },
        {
          type: "paragraph",
          content:
            "Art director, stylist, hair, makeup, set designer, lighting team, casting director, model — the photographer orchestrates all of it. Zamiri and Knight both describe their process as deeply collaborative: the image emerges from the room.",
        },
        {
          type: "heading",
          content: "The Editorial Story Has an Arc",
        },
        {
          type: "paragraph",
          content:
            "A fashion editorial isn't a collection of individual images — it's a narrative. Establishing shot, middle, climax, resolution. Tim Walker is the supreme storyteller in this form; every editorial he makes is a complete world with its own internal logic.",
        },
        {
          type: "quote",
          content: "I want to tell a story. I'm always looking for a narrative.",
          author: "Tim Walker",
        },
      ],
      quiz: {
        question: "Irving Penn was known for his fashion photography predominantly shot in which setting?",
        options: [
          { id: "a", text: "Outdoor urban environments", isCorrect: false },
          { id: "b", text: "The controlled studio environment", isCorrect: true },
          { id: "c", text: "Exotic travel locations", isCorrect: false },
          { id: "d", text: "Backstage at fashion shows", isCorrect: false },
        ],
        explanation:
          "Irving Penn was celebrated for his precise, controlled studio work — often using simple seamless paper backgrounds and meticulous lighting arrangements. His studio portraits and still lifes are considered masterworks of the genre.",
      },
    },
    {
      id: "pf-10-history",
      title: "Photography History",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        {
          type: "heading",
          content: "Invented Multiple Times, by Different People",
        },
        {
          type: "paragraph",
          content:
            "The daguerreotype, announced in Paris in 1839, is photography's public birth. But Fox Talbot's calotype — which allowed multiple prints from a single negative — ultimately proved more important.",
        },
        {
          type: "heading",
          content: "Depression, War, and the Documentary Turn (1930s–50s)",
        },
        {
          type: "paragraph",
          content:
            "The Great Depression and World War Two pushed photography into social documentary. Lange's 'Migrant Mother', Capa's war images, and the FSA photographers created an ethical documentary tradition that still defines the field.",
        },
        {
          type: "heading",
          content: "Magazines Ruled the World (1950s–70s)",
        },
        {
          type: "paragraph",
          content:
            "Vogue, Harper's Bazaar, Life, Paris Match — these were the primary vehicles for photographic culture. Penn, Avedon, and Newton built their careers inside this system. The fashion photographer was simultaneously a tastemaker and a commercial worker.",
        },
        {
          type: "heading",
          content: "Digital Changed Everything (1990s–now)",
        },
        {
          type: "paragraph",
          content:
            "Digital photography democratised the medium completely. Anyone with a smartphone is now a photographer. Knight founded SHOWstudio in 2000 specifically to ask: what can photography become in the digital age?",
        },
        {
          type: "heading",
          content: "Photography Today Has No Single Definition",
        },
        {
          type: "paragraph",
          content:
            "Photojournalism, documentary, fashion, portrait, fine art, conceptual, social media — photography is all of these at once. Tillmans occupies a unique position: straddling galleries and popular culture, resisting every category.",
        },
        {
          type: "quote",
          content: "Photography is truth. Cinema is truth 24 frames per second.",
          author: "Jean-Luc Godard",
        },
      ],
      quiz: {
        question: "Which photographic process, announced in 1839, allowed multiple prints to be made from a single negative?",
        options: [
          { id: "a", text: "The daguerreotype (Louis Daguerre)", isCorrect: false },
          { id: "b", text: "The calotype (William Henry Fox Talbot)", isCorrect: true },
          { id: "c", text: "The ambrotype (Frederick Scott Archer)", isCorrect: false },
          { id: "d", text: "The tintype (Hamilton Smith)", isCorrect: false },
        ],
        explanation:
          "William Henry Fox Talbot's calotype process (also called the Talbotype) used a paper negative from which multiple positive prints could be made — the principle behind all film photography that followed. Daguerre's process produced a single, unique image on a metal plate.",
      },
    },
  ],
}

export default course
