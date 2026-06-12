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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Cross-Pollination of Film and Photography" },
        {
          type: "paragraph",
          content:
            "Cinema and photography have shared technical ancestry and artistic vocabulary since cinema's invention in the 1890s. Film stills — photographs made on set for promotional purposes — created a visual language that blurred the boundary between the single image and the moving sequence. Throughout the 20th century, photographers absorbed the compositional language of widescreen cinema: the long horizontal frame, the depth-of-field management, the staging of figures in space.",
        },
        {
          type: "paragraph",
          content:
            "Film noir cinematography — developed in Hollywood in the 1940s and 50s — had a particular influence: its use of shadow, low angles, dramatic artificial light, and psychological atmosphere created a visual vocabulary that photographers from Weegee to Viviane Sassen have drawn on. The noir frame implied danger, moral ambiguity, and a world in which the darkness was as important as the light.",
        },
        {
          type: "heading",
          content: "Cindy Sherman and the Untitled Film Stills",
        },
        {
          type: "paragraph",
          content:
            "The founding text of deliberate cinematic photography is Cindy Sherman's Untitled Film Stills (1977–80): 69 black-and-white photographs in which Sherman staged herself as the protagonist of films that do not exist. Each image looked unmistakably like a still from a specific kind of film — European art cinema, film noir, women's pictures — yet no such film existed. The series raised fundamental questions about how cinema had shaped our understanding of women, narrative, and the single image.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Cindy Sherman (b. 1954)" },
        {
          type: "paragraph",
          content:
            "Sherman's Untitled Film Stills remain the most influential deployment of cinematic language in photography. Each image positions Sherman-as-character in a scene with a specific cinematic grammar: the angle, the light, the setting, the costume, and the expression all signal genre. She is at once subject, director, costume designer, and set designer — and the question of who the 'real' Cindy Sherman is behind all these performances is itself a subject of the work.",
        },
        { type: "heading", content: "Gregory Crewdson (b. 1962)" },
        {
          type: "paragraph",
          content:
            "Crewdson's work takes cinematic production values to their logical extreme in still photography: he hires film crews, closes streets, rigs elaborate lighting systems, and directs actors in carefully scripted scenarios. The results are large-format photographs that have the visual quality of frames from a Spielberg or Lynch film — suburban American life in states of psychological crisis, photographed with production design of extraordinary precision.",
        },
        { type: "heading", content: "Philip-Lorca diCorcia (b. 1951)" },
        {
          type: "paragraph",
          content:
            "DiCorcia photographs strangers on the street using hidden strobe lights mounted on scaffolding, which fire when subjects pass through the frame. The result is street photography that has the quality of film stills: figures are frozen in pools of dramatic artificial light, surrounded by the ambient urban world, their expressions and gestures caught at moments that imply complex inner lives. His Hustlers series — photographs of male prostitutes in their private spaces — combines documentary specificity with cinematic staging.",
        },
        { type: "heading", content: "Alex Prager (b. 1979) and Hannah Starkey (b. 1971)" },
        {
          type: "paragraph",
          content:
            "Prager's crowd scenes — dozens of extras staged in airports, cinemas, and public spaces with a Hitchcockian quality of collective unease — achieve their effect through obsessive production design and a colour palette that references 1950s Technicolor. Starkey's quieter images of women in public and private spaces — waiting, looking, being still — have the quality of European art cinema stills: composed, psychologically present, and narratively incomplete.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Widescreen Aspect Ratios" },
        {
          type: "paragraph",
          content:
            "Cinematic photography typically favours widescreen aspect ratios — 16:9 (video/HD), 2.39:1 (anamorphic), or the classic 2.35:1 — rather than the squarer formats of standard photography. The wide frame privileges horizontal relationships: figures placed at different depths, environments that surround and dwarf human subjects, landscapes that read as stages. This formal choice alone signals cinematic intent.",
        },
        { type: "heading", content: "Filmic Colour Grading" },
        {
          type: "paragraph",
          content:
            "Contemporary cinematic photography borrows cinema's colour grading vocabulary: teal-and-orange (warm skin tones, cool shadows), bleach bypass (desaturated highlights, retained grain), cross-processing effects. These colour treatments are now available as Lightroom presets and camera profiles, but their origin is in the work of Hollywood's directors of photography, who developed them to create specific emotional registers.",
        },
        { type: "heading", content: "Staged Narrative Implication" },
        {
          type: "paragraph",
          content:
            "The central characteristic of cinematic photography is narrative implication: the frozen moment that contains a story. The figures are positioned as if something has just happened or is about to happen; the setting has been designed to suggest context; the expression or gesture carries emotional weight that implies the invisible events around it. The photograph is a frame from a film that doesn't exist.",
        },
        { type: "heading", content: "Production Design and the Quality of Loneliness" },
        {
          type: "paragraph",
          content:
            "Crewdson, Prager, and Sherman all share an attention to production design — costume, setting, prop — that is cinematic rather than photographic in origin. And across cinematic photography there is a recurring emotional quality: a specific kind of loneliness that cinema has made available. The figure in the diner, the woman in the motel room, the man on the empty street — these are images cinema has taught us to feel, and photography borrows their emotional charge.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Cindy Sherman: Untitled Film Stills (1977–80)" },
        {
          type: "paragraph",
          content:
            "Sixty-nine black-and-white photographs in which Sherman staged herself as the protagonist of non-existent films. The series is the single most important work in the intersection of cinema and photography, and one of the most influential artworks of the 20th century. It is the founding document of cinematic photography as a deliberate practice. MoMA acquired the complete series for over one million dollars in 1995.",
        },
        { type: "heading", content: "Gregory Crewdson: Twilight and Beneath the Roses" },
        {
          type: "paragraph",
          content:
            "Crewdson's two major series — Twilight (1998–2002) and Beneath the Roses (2003–08) — define the ambitions of cinematic still photography. Beneath the Roses in particular, with its closed-down New England towns, its figures frozen in suburban interiors, and its nocturnal production-design precision, is the fullest expression of what happens when a photographer applies Hollywood's resources to a still image.",
        },
        { type: "heading", content: "Philip-Lorca diCorcia: Hustlers (1990–92)" },
        {
          type: "paragraph",
          content:
            "DiCorcia's Hustlers series photographs male sex workers in their private spaces — motel rooms, street corners, domestic interiors — lit with the dramatic precision of a cinematographer working on a film set. The images have a quality of cinematic character study: each subject is seen at a specific moment of psychological complexity, in a specific environment that tells his story.",
        },
        { type: "heading", content: "Alex Prager: Face in the Crowd (2013)" },
        {
          type: "paragraph",
          content:
            "Prager's large-scale crowd scenes — dozens of extras in airports, cinemas, and beaches, each with a specific expression and costume — achieve a collective quality of anxiety and unease that references Hitchcock's crowd sequences. Face in the Crowd is the fullest expression of her approach: elaborate production design, Technicolor saturation, and a compositional intelligence that manages dozens of figures without losing a single one.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Widescreen as Contemporary Editorial Default" },
        {
          type: "paragraph",
          content:
            "Widescreen aspect ratios have become the default format for editorial photography, fashion campaigns, and much fine art photography. The shift from 4:3 to 16:9 as the dominant screen format has pulled photography toward cinema's proportions. Contemporary photographers rarely discuss aspect ratio — it has become a default that carries cinematic associations without requiring deliberate choice.",
        },
        { type: "heading", content: "Film-Look Presets and VSCO" },
        {
          type: "paragraph",
          content:
            "VSCO's film simulation presets — Kodak Portra, Fuji Velvia, Ilford HP5 — and Lightroom's cinematic colour grading profiles have made the visual vocabulary of cinema and analogue photography available as one-click choices for any photographer. The teal-and-orange grade, the bleach-bypass look, the film grain filter: all are now standard tools in the amateur photographer's workflow, descended from Hollywood's cinematographers.",
        },
        { type: "heading", content: "Narrative Fashion Editorial" },
        {
          type: "paragraph",
          content:
            "Contemporary fashion photography has almost entirely absorbed the cinematic aesthetic: campaigns are styled as film stills, look books as storyboards, Instagram grids as sequential narratives. The most influential fashion photographers — Lachlan Bailey, Harley Weir, Jackie Nickerson — work in a cinematic register that owes more to European art cinema than to the studio photography tradition.",
        },
        { type: "heading", content: "Anamorphic Lenses for Photography" },
        {
          type: "paragraph",
          content:
            "Anamorphic lenses — designed for widescreen cinema — are increasingly used for still photography. They produce characteristic oval bokeh, horizontal lens flare, and a specific quality of widescreen compression that is immediately recognisable as cinematic. Their growing availability for DSLR and mirrorless cameras has made the anamorphic look — previously achievable only with expensive cinema equipment — accessible to photographers.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Making Photographs That Imply Stories" },
        {
          type: "paragraph",
          content:
            "Cinematic photography teaches the discipline of narrative implication: making a single image carry the weight of a story it doesn't tell. This is a different skill from documentary photography (which shows what happened) or portrait photography (which reveals who someone is). It is the skill of the filmmaker's single frame.",
        },
        { type: "heading", content: "1. Think in Production Design" },
        {
          type: "paragraph",
          content:
            "Before you photograph a staged scene, think about each element as a production designer would: what does this location say about the character? What does the costume communicate? What is the light source and what emotional quality does it create? Crewdson spends weeks on these questions before making a single exposure.",
        },
        { type: "heading", content: "2. Choose Your Aspect Ratio Deliberately" },
        {
          type: "paragraph",
          content:
            "Crop one of your existing images to 2.39:1 — the anamorphic widescreen ratio. Notice what the format does to the image's meaning: how it changes the relationship between figure and environment, how it emphasises horizontal movement, how it creates a different kind of space. Then make a new image specifically for that format.",
        },
        { type: "heading", content: "3. Study the Frozen Frame" },
        {
          type: "paragraph",
          content:
            "Choose a film you know well and pause it at random moments. Notice which frames contain complete images and which are only comprehensible in motion. The frames that work as images are the ones a film photographer would keep. Study what makes them work: the composition, the light, the expression, the relationship between figures.",
        },
        { type: "heading", content: "4. Imply Rather Than Show" },
        {
          type: "paragraph",
          content:
            "Sherman's Film Stills imply films that don't exist. The technique is one of partial revelation: enough detail to generate a story in the viewer's imagination, but not enough to close it down. Practise withholding: what can you leave out of the frame that the viewer will supply themselves?",
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
