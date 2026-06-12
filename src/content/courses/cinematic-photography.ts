import type { Course } from "@/types"

const course: Course = {
  id: "cinematic-photography",
  title: "Cinematic Photography",
  slug: "cinematic-photography",
  description:
    "Photography that draws deliberately on cinematic language — widescreen composition, film grain, narrative staging, and the colour vocabulary of cinema.",
  category: "style-movements",
  accentColor: "#c84730",
  estimatedHours: 3,
  tags: ["cinematic", "widescreen", "narrative", "film-influenced", "atmospheric"],
  lessons: [
    {
      id: "cp-01-origins",
      title: "Origins & History",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Cinema Taught Photography to Stage a Story" },
        {
          type: "paragraph",
          content:
            "Cinema and photography shared technical ancestry from the start. Film stills blurred the boundary between moving sequence and single image. Photographers absorbed cinema's widescreen frame, its depth-of-field management, its way of staging figures in space.",
        },
        {
          type: "paragraph",
          content:
            "Film noir — hard shadows, low angles, psychological atmosphere, moral ambiguity made visible through light — crossed from Hollywood into photography and never left. From Weegee to Viviane Sassen, the debt is obvious.",
        },
        {
          type: "heading",
          content: "Cindy Sherman Changes Everything",
        },
        {
          type: "paragraph",
          content:
            "Sherman's Untitled Film Stills (1977–80): 69 black-and-white photographs of herself as the protagonist of films that don't exist. Each looked unmistakably like a still from a specific genre. The realisation: cinema had taught us these visual codes so thoroughly we already knew the film.",
        },
        {
          type: "list",
          items: [
            "1940s–50s: Film noir cinematography establishes a visual vocabulary photographers will draw on for decades",
            "1977–80: Cindy Sherman's Untitled Film Stills — the founding text of deliberate cinematic photography",
            "1990s: Philip-Lorca diCorcia develops flash-lit street photography with a film-still quality",
            "2000s: Gregory Crewdson reaches Hollywood-scale cinematic production in still photography",
            "2000s: Alex Prager and Hannah Starkey develop personal cinematic vocabularies",
            "2010s onwards: Widescreen photography becomes the dominant mode in editorial and fashion",
          ],
        },
        {
          type: "quote",
          content: "I did not photograph myself. I photographed a character.",
          author: "Cindy Sherman",
        },
      ],
      quiz: {
        question: "What fundamental question did Cindy Sherman's Untitled Film Stills raise about cinema and photography?",
        options: [
          { id: "a", text: "Whether photography could achieve the same emotional impact as moving images when viewed in sequence", isCorrect: false },
          { id: "b", text: "How cinema had shaped our understanding of women, narrative, and the meaning of the single still image", isCorrect: true },
          { id: "c", text: "Whether digital photography would eventually replace film as the dominant medium for cinematic production", isCorrect: false },
          { id: "d", text: "Whether photographs made on film sets could be considered fine art rather than commercial production material", isCorrect: false },
        ],
        explanation:
          "Sherman's Untitled Film Stills works by making visible the degree to which cinematic convention has shaped how we read images of women. Each photograph looks like a film still from a recognisable genre — but no such film exists. The images reveal that we already know what the 'film' is, because cinema has taught us these visual codes so thoroughly. This is the series' central critical insight.",
      },
    },
    {
      id: "cp-02-practitioners",
      title: "Key Practitioners",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Cindy Sherman (b. 1954)" },
        {
          type: "paragraph",
          content:
            "Subject, director, costume designer, set designer — all Sherman, all at once. Each Untitled Film Still positions her-as-character in a scene with specific cinematic grammar. The question of who the 'real' Cindy Sherman is underneath all the performances is itself part of the work.",
        },
        { type: "heading", content: "Gregory Crewdson (b. 1962)" },
        {
          type: "paragraph",
          content:
            "Film crew, closed streets, elaborate lighting rigs, directed actors. Crewdson takes cinematic production values to their logical extreme in still photography. The result looks like a frame from a Spielberg or Lynch film — American suburban life in states of psychological crisis.",
        },
        { type: "heading", content: "Philip-Lorca diCorcia (b. 1951)" },
        {
          type: "paragraph",
          content:
            "DiCorcia hid strobe lights on scaffolding that fire when strangers pass through the frame. Real, unposed people — documentary truth — lit with dramatic artificial light. The collision of chance and staging is the whole technique.",
        },
        { type: "heading", content: "Alex Prager (b. 1979) and Hannah Starkey (b. 1971)" },
        {
          type: "paragraph",
          content:
            "Prager's crowd scenes — dozens of extras, Hitchcockian collective unease, 1950s Technicolor palette — are obsessive productions. Starkey's quieter images of women waiting and looking have the composed, narratively incomplete quality of European art cinema stills.",
        },
      ],
      quiz: {
        question: "How does Philip-Lorca diCorcia achieve the film-still quality of his street photographs?",
        options: [
          { id: "a", text: "He photographs film sets in between shooting days, when actors are in position but cameras are not rolling", isCorrect: false },
          { id: "b", text: "He uses hidden strobe lights mounted on scaffolding that fire when strangers pass through the frame, creating dramatic artificial light on unposed subjects", isCorrect: true },
          { id: "c", text: "He asks subjects to hold perfectly still for long exposures, then adds background blurring in post-production", isCorrect: false },
          { id: "d", text: "He works with professional actors directed to behave naturally in public spaces without signalling they are being photographed", isCorrect: false },
        ],
        explanation:
          "DiCorcia's hidden strobe technique is what creates his distinctive quality: real, unposed strangers (documentary truth) lit by dramatic artificial light (cinematic staging). The subjects are genuine — they did not know they were being photographed — but the light they are in is the same light a film director of photography would use for a character in a state of dramatic intensity. The collision of documentary chance and cinematic staging is the technique's subject.",
      },
    },
    {
      id: "cp-03-characteristics",
      title: "Visual Characteristics",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Wide Frames, Cinematic Thinking" },
        {
          type: "paragraph",
          content:
            "16:9, 2.39:1, 2.35:1 — cinematic photography favours widescreen ratios over photography's squarer formats. The wide frame privileges horizontal relationships, environments that surround figures, landscapes that read as stages. The format alone signals intent.",
        },
        { type: "heading", content: "Cinema's Colour Vocabulary Is Now Photography's Too" },
        {
          type: "paragraph",
          content:
            "Teal-and-orange, bleach bypass, cross-processing — these colour treatments originated with Hollywood's directors of photography. Now available as Lightroom presets. The vocabulary is borrowed; the emotional registers are real.",
        },
        { type: "heading", content: "A Story Implied, Not Told" },
        {
          type: "paragraph",
          content:
            "The defining characteristic: a frozen moment that contains a story. Something happened before, something will happen after. The figures are positioned as if in the middle of an event. The photograph is a frame from a film that doesn't exist.",
        },
        { type: "heading", content: "Production Design and a Specific Kind of Loneliness" },
        {
          type: "paragraph",
          content:
            "Crewdson, Prager, and Sherman all share attention to production design — costume, setting, prop — borrowed from cinema, not photography. And across cinematic photography, a recurring emotion: a specific loneliness cinema taught us to feel.",
        },
      ],
      quiz: {
        question: "What is the central narrative characteristic that defines cinematic photography?",
        options: [
          { id: "a", text: "Images are always presented in sequences that tell a complete story from beginning to end", isCorrect: false },
          { id: "b", text: "The frozen moment implies a story — something happened before and will happen after — making the photograph a frame from a film that doesn't exist", isCorrect: true },
          { id: "c", text: "Cinematic photographs always include identifiable actors or celebrities in staged scenarios", isCorrect: false },
          { id: "d", text: "The images use text captions or titles to explain the narrative context of each scene", isCorrect: false },
        ],
        explanation:
          "Cinematic photography's defining characteristic is narrative implication rather than narrative completion. Unlike a film, which shows what happens before and after, a cinematic photograph shows a single frozen moment — but that moment is staged or chosen to carry the weight of an implied story. This is what Sherman discovered with the Untitled Film Stills: you can make an image that feels like a film still without any film.",
      },
    },
    {
      id: "cp-04-works",
      title: "Defining Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Cindy Sherman: Untitled Film Stills (1977–80)" },
        {
          type: "paragraph",
          content:
            "69 black-and-white photographs. Non-existent films from recognisable genres. The most influential work at the intersection of cinema and photography. MoMA bought the complete series for over one million dollars in 1995.",
        },
        { type: "heading", content: "Gregory Crewdson: Twilight and Beneath the Roses" },
        {
          type: "paragraph",
          content:
            "Beneath the Roses in particular — closed-down New England towns, suburban interiors, nocturnal production-design precision — is the fullest expression of what happens when a photographer applies Hollywood's resources to a still image.",
        },
        { type: "heading", content: "Philip-Lorca diCorcia: Hustlers (1990–92)" },
        {
          type: "paragraph",
          content:
            "Male sex workers in motel rooms, street corners, and domestic interiors, lit with cinematographer's precision. Each image is a character study: a specific person at a specific psychological moment, in a specific environment that tells his story.",
        },
        { type: "heading", content: "Alex Prager: Face in the Crowd (2013)" },
        {
          type: "paragraph",
          content:
            "Dozens of extras. Airports, cinemas, beaches. Hitchcockian collective anxiety, Technicolor saturation, compositional intelligence managing every figure. The fullest expression of her obsessive production design approach.",
        },
      ],
      quiz: {
        question: "At what price did MoMA acquire Cindy Sherman's complete Untitled Film Stills series in 1995?",
        options: [
          { id: "a", text: "Approximately $250,000, which was then a record price for a photography acquisition", isCorrect: false },
          { id: "b", text: "Over one million dollars, establishing the series as one of the most valuable photography acquisitions in museum history", isCorrect: true },
          { id: "c", text: "The series was donated by Sherman herself, with no money changing hands", isCorrect: false },
          { id: "d", text: "Approximately $500,000, acquired as part of a larger group of Sherman works", isCorrect: false },
        ],
        explanation:
          "MoMA's acquisition of the complete Untitled Film Stills for over one million dollars in 1995 was a landmark: it established the series as one of the most institutionally valued artworks of its era, and confirmed conceptual photography's position within the fine art canon. The acquisition price reflected both the series' art-historical importance and the growing market for photography as a major collecting category.",
      },
    },
    {
      id: "cp-05-influence",
      title: "Modern Influence",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Widescreen Is Now the Default" },
        {
          type: "paragraph",
          content:
            "The shift from 4:3 to 16:9 screens pulled photography toward cinema's proportions without requiring a deliberate choice. Widescreen now carries cinematic associations automatically — the format does the work before the content does.",
        },
        { type: "heading", content: "Film-Look Presets Made It Accessible" },
        {
          type: "paragraph",
          content:
            "VSCO's Kodak Portra simulations, Lightroom's cinematic grades, the teal-and-orange look as a one-click choice. Hollywood's cinematographic vocabulary is now standard in any amateur's workflow. Borrowed. Democratised.",
        },
        { type: "heading", content: "Fashion Became a Film" },
        {
          type: "paragraph",
          content:
            "Campaigns styled as film stills. Look books as storyboards. Instagram grids as sequential narratives. The most influential fashion photographers — Lachlan Bailey, Harley Weir, Jackie Nickerson — work in a cinematic register that owes more to European art cinema than to studio photography.",
        },
        { type: "heading", content: "Anamorphic Lenses for Still Photographers" },
        {
          type: "paragraph",
          content:
            "Oval bokeh, horizontal lens flare, widescreen compression: the anamorphic look is now accessible for DSLR and mirrorless cameras. Cinema's most distinctive optical signature, now available to still photographers.",
        },
      ],
      quiz: {
        question: "What has driven the shift toward widescreen aspect ratios as the default in contemporary photography?",
        options: [
          { id: "a", text: "Camera manufacturers began producing sensors in widescreen proportions, making square and 4:3 formats technically obsolete", isCorrect: false },
          { id: "b", text: "The shift from 4:3 to 16:9 as the dominant screen format has pulled photography toward cinema's proportions, making widescreen the default without deliberate choice", isCorrect: true },
          { id: "c", text: "Social media platforms began preferring widescreen formats for display, forcing photographers to adapt their compositions", isCorrect: false },
          { id: "d", text: "Widescreen printing became significantly cheaper than square formats, making it economically dominant", isCorrect: false },
        ],
        explanation:
          "The dominant screens we view photography on — laptop screens, televisions, phone screens in landscape orientation — are all 16:9 widescreen. Photography viewed on these screens looks 'right' in widescreen proportions and slightly wrong in square or portrait proportions. This has pulled contemporary photography toward cinematic aspect ratios as a practical default, regardless of deliberate artistic choice.",
      },
    },
    {
      id: "cp-06-learn",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "How to Make a Still That Implies a Film" },
        {
          type: "paragraph",
          content:
            "Cinematic photography teaches narrative implication: a single image carrying the weight of a story it doesn't tell. Different from documentary (shows what happened) or portraiture (reveals who someone is). This is the filmmaker's single frame.",
        },
        { type: "heading", content: "1. Think Like a Production Designer" },
        {
          type: "paragraph",
          content:
            "Before shooting: what does this location say about the character? What does the costume communicate? What emotional quality does the light source create? Crewdson spends weeks on these questions before making a single exposure.",
        },
        { type: "heading", content: "2. Crop to Widescreen and See What Changes" },
        {
          type: "paragraph",
          content:
            "Crop an existing image to 2.39:1 — the anamorphic ratio. Notice how it changes the relationship between figure and environment, how horizontal movement is emphasised, how a different kind of space is created. Then make a new image specifically for that format.",
        },
        { type: "heading", content: "3. Study the Frozen Frame" },
        {
          type: "paragraph",
          content:
            "Pause a film you know well at random moments. Notice which frames work as images and which only make sense in motion. What makes the good ones work: composition, light, expression, the relationship between figures?",
        },
        { type: "heading", content: "4. Imply, Don't Show" },
        {
          type: "paragraph",
          content:
            "Sherman's Film Stills imply films that don't exist. Partial revelation: enough detail to generate a story in the viewer's imagination, not enough to close it down. Practise withholding. What can the viewer supply themselves?",
        },
      ],
      reflection: {
        prompt:
          "Make a photograph that implies a story — something happened before this moment, and something will happen after it. Stage it deliberately: choose the location for what it says, design the costume for what it communicates, and think about the light for what emotion it creates. Then look at the finished image and ask: whose film is this a still from? What genre? What happens next?",
      },
    },
  ],
}

export default course
