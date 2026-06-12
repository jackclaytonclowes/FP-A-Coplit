import type { Course } from "@/types"

const course: Course = {
  id: "photography-foundations",
  title: "Photography Foundations",
  slug: "photography-foundations",
  description:
    "Master the fundamental principles of photography — from light and composition to visual storytelling and the history of the medium.",
  category: "photography-foundations",
  accentColor: "#e8c547",
  estimatedHours: 4,
  tags: ["photography", "composition", "light", "colour", "beginner"],
  lessons: [
    {
      id: "pf-01-composition",
      title: "Composition & Framing",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        {
          type: "heading",
          content: "The Grammar of the Frame",
        },
        {
          type: "paragraph",
          content:
            "Composition is the language through which a photographer speaks. Before you press the shutter, every element within the frame is a decision: what to include, what to exclude, where to place your subject, and how the eye will travel through the image.",
        },
        {
          type: "heading",
          content: "Rule of Thirds",
        },
        {
          type: "paragraph",
          content:
            "Divide your frame into a 3×3 grid. Place your subject along the grid lines or at their intersections — the 'power points'. This creates visual tension and energy that a centred subject often lacks.",
        },
        {
          type: "heading",
          content: "Leading Lines",
        },
        {
          type: "paragraph",
          content:
            "Roads, rivers, shadows, architecture — lines that draw the viewer's eye through the frame. The strongest leading lines direct attention toward the subject. They can be literal (a road) or implied (a gaze, a gesture).",
        },
        {
          type: "heading",
          content: "Negative Space",
        },
        {
          type: "paragraph",
          content:
            "The empty area around a subject is not wasted space — it is active. Wolfgang Tillmans understood this intuitively: negative space creates mood, isolation, scale. A small figure in a vast sky says something about loneliness that a tight crop cannot.",
        },
        {
          type: "quote",
          content:
            "Photography is about finding out what can happen in the frame. When you put four edges around some facts, you change those facts.",
          author: "Garry Winogrand",
        },
        {
          type: "heading",
          content: "Framing Within the Frame",
        },
        {
          type: "paragraph",
          content:
            "Doorways, windows, arches, and natural openings act as secondary frames that isolate and elevate a subject. The inner frame draws the eye and adds depth and context.",
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
      estimatedMinutes: 10,
      blocks: [
        {
          type: "heading",
          content: "Light Is Everything",
        },
        {
          type: "paragraph",
          content:
            "Photography literally means 'writing with light'. Every photograph is a record of how light fell at a specific moment. Understanding light — its quality, direction, colour, and intensity — is the single most important skill in photography.",
        },
        {
          type: "heading",
          content: "Hard vs Soft Light",
        },
        {
          type: "paragraph",
          content:
            "Hard light comes from a small, distant source — the midday sun, a bare flashgun. It creates sharp, defined shadows and high contrast. Soft light comes from a large source relative to the subject — an overcast sky, a window, a softbox. It creates gentle, gradual shadows that are flattering for skin.",
        },
        {
          type: "heading",
          content: "Direction of Light",
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
          content: "Golden Hour & Blue Hour",
        },
        {
          type: "paragraph",
          content:
            "The hour after sunrise and before sunset bathes scenes in warm, directional light with long shadows. The blue hour — the 20-minute window after sunset — gives city scenes their signature deep blue, luminous quality. Peter Lindbergh and Paolo Roversi both understood how to use the dying light of day to create something ineffable.",
        },
        {
          type: "heading",
          content: "Chiaroscuro",
        },
        {
          type: "paragraph",
          content:
            "Borrowed from Renaissance painting, chiaroscuro is the dramatic interplay of light and deep shadow. Helmut Newton used it frequently — subjects sculpted by light against near-black backgrounds, creating images of extraordinary power and contrast.",
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
      estimatedMinutes: 9,
      blocks: [
        {
          type: "heading",
          content: "Why Colour Matters",
        },
        {
          type: "paragraph",
          content:
            "Colour is emotional. Before a viewer reads a single compositional element, they feel the colour temperature of an image. Warm images feel intimate, energetic, or nostalgic. Cool images feel distant, melancholic, or modern. Great photographers treat colour with the same intentionality as composition.",
        },
        {
          type: "heading",
          content: "Colour Temperature",
        },
        {
          type: "paragraph",
          content:
            "Light has temperature measured in Kelvin. Tungsten light (candles, old bulbs) sits around 2700K — warm, amber. Daylight is 5500K — neutral. Shade or overcast sky reaches 7000K — cool, blue. White balance settings allow you to either correct for these shifts or exploit them emotionally.",
        },
        {
          type: "heading",
          content: "Colour Harmony",
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
          content: "Colour in Fashion Photography",
        },
        {
          type: "paragraph",
          content:
            "Nick Knight is a master of colour as concept. His images often treat colour as the subject itself — a character rather than a backdrop. Tim Walker uses hyper-saturated, almost hallucinatory palettes to create fairy-tale worlds. Contrast this with Peter Lindbergh's near-monochrome aesthetic — often stripping colour almost entirely to force the viewer to focus on form and human truth.",
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
      estimatedMinutes: 8,
      blocks: [
        {
          type: "heading",
          content: "The Lens as a Point of View",
        },
        {
          type: "paragraph",
          content:
            "Every focal length renders the world differently. This is not just a technical choice — it is a philosophical one. The focal length you choose determines the relationship between you, your subject, and the space between you.",
        },
        {
          type: "heading",
          content: "Wide Angle (14–35mm)",
        },
        {
          type: "paragraph",
          content:
            "Wide lenses exaggerate perspective — things close to the lens appear large, things further away shrink rapidly. They place the subject in their environment. Wolfgang Tillmans often shoots with wide lenses to embed people in their world rather than isolate them from it.",
        },
        {
          type: "heading",
          content: "Standard (40–60mm)",
        },
        {
          type: "paragraph",
          content:
            "The 50mm lens is considered the 'human eye' equivalent. It renders perspective naturally, without distortion. Juergen Teller's intimate, apparently casual images often use standard focal lengths to produce images that feel honest and unmanipulated.",
        },
        {
          type: "heading",
          content: "Telephoto (85–200mm+)",
        },
        {
          type: "paragraph",
          content:
            "Longer focal lengths compress distance — the background appears closer to the subject. They create beautiful background blur (bokeh) and allow photographers to work at a distance, capturing subjects unaware. The 85mm is revered as the portrait lens — it flatters facial proportions without distortion.",
        },
        {
          type: "heading",
          content: "Depth of Field",
        },
        {
          type: "paragraph",
          content:
            "Wide apertures (f/1.4, f/1.8) create shallow depth of field — only a thin plane is in focus, the rest dissolves into blur. Narrow apertures (f/8, f/11) bring everything into focus. Paolo Roversi shoots with near-wide-open apertures on large-format film, creating images of extraordinary softness and dreamlike focus.",
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
      estimatedMinutes: 10,
      blocks: [
        {
          type: "heading",
          content: "Every Image Is a Story",
        },
        {
          type: "paragraph",
          content:
            "The most technically perfect photograph can still be empty if it has nothing to say. Conversely, a blurred, underexposed image can carry enormous emotional power if it captures something true. Technical mastery is in service of storytelling — never the other way around.",
        },
        {
          type: "heading",
          content: "The Decisive Moment",
        },
        {
          type: "paragraph",
          content:
            "Henri Cartier-Bresson described the decisive moment as the simultaneous recognition of the significance of an event and the precise organisation of forms to give it proper expression. You must see what is happening and know how to frame it — in the same instant.",
        },
        {
          type: "heading",
          content: "Narrative Through Sequence",
        },
        {
          type: "paragraph",
          content:
            "A single image tells one story. A series tells another. Editorial photography is inherently sequential — images must work individually and together. When Nick Knight creates a story for SHOWstudio or Dazed, every frame is chosen to build a cumulative visual argument.",
        },
        {
          type: "heading",
          content: "Emotion vs. Information",
        },
        {
          type: "paragraph",
          content:
            "Documentary photographers like Martin Parr prioritise information — what is happening, where, who is there. Fashion photographers often prioritise emotion — how does this image make you feel. The greatest images carry both. Peter Lindbergh's portraits of women are loaded with documentary truth and fashion elegance simultaneously.",
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
      estimatedMinutes: 8,
      blocks: [
        {
          type: "heading",
          content: "The Portrait as Collaboration",
        },
        {
          type: "paragraph",
          content:
            "A portrait is not taken — it is made. The best portrait photographers create a space in which their subjects can reveal themselves. This requires trust, patience, and an understanding that the camera is not a weapon but an invitation.",
        },
        {
          type: "heading",
          content: "Eyes & Connection",
        },
        {
          type: "paragraph",
          content:
            "The eyes are the centre of gravity in any portrait. When eyes look directly into the lens, they engage the viewer in a direct relationship. When the gaze is averted, they create mystery and introspection. Annie Leibovitz knows exactly when to ask a subject to look away — and why.",
        },
        {
          type: "heading",
          content: "Environmental vs Studio",
        },
        {
          type: "paragraph",
          content:
            "Environmental portraits place subjects in their world — home, workspace, natural habitat. They reveal context. Studio portraits strip away context, forcing focus onto the person. Both traditions have produced great work: Richard Avedon's spare white backgrounds forced viewers to confront his subjects' humanity with no distraction.",
        },
        {
          type: "heading",
          content: "The Unguarded Moment",
        },
        {
          type: "paragraph",
          content:
            "Wolfgang Tillmans built his practice around what happens before and after the posed moment — the unguarded glance, the body in repose, the face between expressions. These moments often contain more truth than the posed image.",
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
      estimatedMinutes: 8,
      blocks: [
        {
          type: "heading",
          content: "The Street as Studio",
        },
        {
          type: "paragraph",
          content:
            "Street photography is the oldest and most democratic form of the medium. It requires nothing more than a camera and the willingness to be present in the world. Yet it demands everything: quick reflexes, an eye for the extraordinary within the ordinary, and the courage to photograph strangers.",
        },
        {
          type: "heading",
          content: "The Tradition",
        },
        {
          type: "paragraph",
          content:
            "From Eugène Atget's turn-of-the-century Paris to Vivian Maier's self-portraits in Chicago to Martin Parr's colour-saturated documentation of British seaside resorts, street photography is a form of social history made image.",
        },
        {
          type: "heading",
          content: "Approach & Ethics",
        },
        {
          type: "paragraph",
          content:
            "Close-range street photography (Bruce Gilden's flash work) is confrontational and aggressive. Long-lens observation (Henri Cartier-Bresson) is more invisible. Neither approach is wrong — they are different relationships to the world. But the ethics of consent and dignity are always present.",
        },
        {
          type: "heading",
          content: "Finding Your Eye",
        },
        {
          type: "paragraph",
          content:
            "The best street photographers have a distinctive vision of what the world looks like — what they notice that others miss. Juergen Teller's work on the street is unmistakably his: raw, often unflattering, searching for psychological truth rather than beauty.",
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
      estimatedMinutes: 9,
      blocks: [
        {
          type: "heading",
          content: "Photography as Witness",
        },
        {
          type: "paragraph",
          content:
            "Documentary photography operates from a fundamental belief: the image can change minds, shift policy, and bear witness to events that words alone cannot adequately describe. It is photography in service of truth, however uncomfortable.",
        },
        {
          type: "heading",
          content: "The Diary Form",
        },
        {
          type: "paragraph",
          content:
            "Nan Goldin's 'The Ballad of Sexual Dependency' is perhaps the defining documentary project of its era — a photographic diary of her social world in New York in the 1970s and 80s. It is intimate, raw, and unflinching. There is no pretence of objectivity: she is inside the story, documenting her own life.",
        },
        {
          type: "heading",
          content: "Social Documentary",
        },
        {
          type: "paragraph",
          content:
            "Dorothea Lange, W. Eugene Smith, and Sebastião Salgado all worked in the tradition that believes photography has a social responsibility — to document injustice, poverty, labour, and the dignity of those who go unseen. This tradition is demanding and emotionally heavy, but has produced some of the most important images ever made.",
        },
        {
          type: "heading",
          content: "Documentary Fashion",
        },
        {
          type: "paragraph",
          content:
            "Peter Lindbergh uniquely merged documentary truth with fashion imagery. His beach sessions with supermodels in the early 90s — shot in natural light with minimal makeup — looked more like documentary films than fashion shoots. This crossover transformed what fashion photography could look like.",
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
      estimatedMinutes: 10,
      blocks: [
        {
          type: "heading",
          content: "Fashion Photography as Art",
        },
        {
          type: "paragraph",
          content:
            "Fashion photography sits at an intersection: it is commercial (it must sell clothes, a brand, an idea) and it is artistic (it must do so in a way that creates culture, meaning, desire). The greatest fashion photographers have used this tension productively — the commercial constraint becomes the creative frame.",
        },
        {
          type: "heading",
          content: "The Studio vs Location",
        },
        {
          type: "paragraph",
          content:
            "Studio fashion gives the photographer total control over light, environment, and background. Irving Penn's studio work — with seamless paper backgrounds and meticulous lighting — is definitive. Location fashion puts the clothes (and the photographer's eye) into conversation with the world.",
        },
        {
          type: "heading",
          content: "The Collaboration",
        },
        {
          type: "paragraph",
          content:
            "A fashion shoot is never just photographer and subject. It involves: art director, stylist, hair and makeup, set designer, lighting team, casting director, and model. The photographer orchestrates all of these creative forces into a single image. Aidan Zamiri and Nick Knight both describe their working process as deeply collaborative — the image emerges from the room.",
        },
        {
          type: "heading",
          content: "The Editorial Story",
        },
        {
          type: "paragraph",
          content:
            "A fashion editorial is not a collection of individual images — it is a narrative arc. Each image must work in sequence: establishing shot, middle, climax, resolution. Tim Walker is the supreme storyteller in this form — every editorial is a complete world with its own internal logic.",
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
      estimatedMinutes: 12,
      blocks: [
        {
          type: "heading",
          content: "A Brief History of Photography",
        },
        {
          type: "paragraph",
          content:
            "Photography was invented not once but several times, by different people working independently. The daguerreotype, announced in Paris in 1839, is commonly taken as the public birth of the medium — though William Henry Fox Talbot's calotype process, which allowed multiple prints from a negative, ultimately proved more important.",
        },
        {
          type: "heading",
          content: "The Documentary Turn (1930s–50s)",
        },
        {
          type: "paragraph",
          content:
            "The Great Depression and World War Two pushed photography into the service of social documentary. Dorothea Lange's 'Migrant Mother', Robert Capa's war images, and the work of the Farm Security Administration photographers created a tradition of engaged, ethical documentary photography that still defines the field.",
        },
        {
          type: "heading",
          content: "The Golden Age of Magazine Photography (1950s–70s)",
        },
        {
          type: "paragraph",
          content:
            "Vogue, Harper's Bazaar, Life, Paris Match — magazines of this era were the primary medium for photographic culture. Irving Penn, Richard Avedon, and Helmut Newton built their careers within this system. The fashion photographer was simultaneously a cultural tastemaker and a commercial worker.",
        },
        {
          type: "heading",
          content: "The Digital Revolution (1990s–present)",
        },
        {
          type: "paragraph",
          content:
            "Digital photography democratised the medium radically. Anyone with a smartphone is now a photographer. This has not diminished the medium — it has expanded what photography means and who can practice it. Nick Knight founded SHOWstudio in 2000 specifically to explore what photography could become in the digital age.",
        },
        {
          type: "heading",
          content: "Photography Today",
        },
        {
          type: "paragraph",
          content:
            "Contemporary photography is no longer a single medium. It encompasses: photojournalism, documentary, fashion, portrait, fine art, conceptual photography, and the vast expanding field of image-making on social media. Wolfgang Tillmans occupies a unique position — straddling fine art galleries and popular culture, making photographs that resist easy categorisation.",
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
