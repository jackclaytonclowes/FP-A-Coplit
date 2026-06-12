import type { Course } from "@/types"

const course: Course = {
  id: "tim-walker",
  title: "Tim Walker",
  slug: "tim-walker",
  description:
    "A study of Tim Walker — fashion photography's greatest storyteller. Walker builds entire worlds for his images, drawing on fairy tales, surrealism, and a very British sense of beautiful absurdity.",
  category: "great-photographers",
  accentColor: "#e8a447",
  estimatedHours: 3,
  tags: ["fashion", "surrealist", "fantasy", "editorial", "storytelling"],
  photographerId: "tim-walker",
  lessons: [
    {
      id: "tw-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Tim Walker (b. 1970, Guildford, England)" },
        {
          type: "paragraph",
          content:
            "Tim Walker grew up in Guildford, Surrey, and studied photography at Exeter College of Art and Design. After graduating in 1994 he spent a year as an assistant at Richard Avedon's studio in New York — an experience he has described as formative in understanding the scale of ambition available to a photographer.",
        },
        {
          type: "paragraph",
          content:
            "He returned to the UK and began shooting for British Vogue in 1995, aged 25 — a relationship that would last three decades. His images were immediately unlike anything else the magazine published: theatrical, literary, in love with the strange. By the early 2000s he was one of the most celebrated photographers in the world.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "1994: Graduates; works as assistant to Richard Avedon",
            "1995: First shoot for British Vogue",
            "2008: Retrospective book 'Pictures' published",
            "2012: Shoots 'Wonderful Things' campaign for Louis Vuitton",
            "2016: Documents V&A 'Undressed' exhibition",
            "2019: Major retrospective 'Story Teller' at the Victoria and Albert Museum, London",
          ],
        },
        {
          type: "quote",
          content: "I want to create images that are completely impossible but completely believable.",
          author: "Tim Walker",
        },
      ],
      quiz: {
        question: "Which legendary photographer did Tim Walker work as an assistant for after graduating?",
        options: [
          { id: "a", text: "Helmut Newton in Monaco", isCorrect: false },
          { id: "b", text: "Richard Avedon in New York", isCorrect: true },
          { id: "c", text: "Irving Penn in New York", isCorrect: false },
          { id: "d", text: "Peter Lindbergh in Paris", isCorrect: false },
        ],
        explanation:
          "After graduating in 1994, Walker spent a year as an assistant at Richard Avedon's studio in New York. He has described this as formative — seeing the scale of ambition and production that a photographer could bring to an image.",
      },
    },
    {
      id: "tw-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Fashion Photography as Fiction" },
        {
          type: "paragraph",
          content:
            "Tim Walker makes images that are self-consciously fictional. Where many fashion photographers present an aspirational version of real life, Walker presents something entirely different: a parallel world governed by different physical and logical laws, in which everything is beautiful and nothing is impossible.",
        },
        { type: "heading", content: "The Surrealist Inheritance" },
        {
          type: "paragraph",
          content:
            "Walker's work draws deeply on the European Surrealist tradition — Magritte, Dalí, Carroll — and on the British tradition of literary fantasy. Giants and dwarves, impossible scale, objects behaving unexpectedly: Walker's visual vocabulary comes from literature and dreamwork as much as from photography's history.",
        },
        { type: "heading", content: "Elaborate Sets" },
        {
          type: "paragraph",
          content:
            "Walker is famous for constructing elaborate sets for his shoots — sets that are often destroyed immediately after. Giant papier-mâché animals, rooms filled with flowers, entire architectures built for a single image. This is fashion photography as theatre, and the set is as important as the clothes or the model.",
        },
        { type: "heading", content: "Colour and Light" },
        {
          type: "paragraph",
          content:
            "Walker's colour palette is lush and saturated without being garish. He tends towards warm, golden tones that make everything glow from within. His lighting is careful and theatrical — often simulating natural light even when the set is entirely artificial. Everything in a Walker image seems lit by a light that doesn't exist in nature but should.",
        },
        {
          type: "quote",
          content: "The fairy tale isn't an escape from reality. It's a way of seeing reality more clearly.",
          author: "Tim Walker",
        },
      ],
      quiz: {
        question: "Which artistic movement most directly influences Walker's visual language?",
        options: [
          { id: "a", text: "Brutalism and Modernist architecture", isCorrect: false },
          { id: "b", text: "Surrealism and British literary fantasy", isCorrect: true },
          { id: "c", text: "Impressionism and Pointillism", isCorrect: false },
          { id: "d", text: "Street photography and Social Realism", isCorrect: false },
        ],
        explanation:
          "Walker draws heavily on European Surrealism — Magritte, Dalí, Carroll — and British literary fantasy. His images share with these traditions a love of dreamlike logic, impossible scale, and the beautiful strangeness of the everyday transformed.",
      },
    },
    {
      id: "tw-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "British Vogue, 2001–present" },
        {
          type: "paragraph",
          content:
            "Walker's thirty-year relationship with British Vogue has produced some of the most celebrated fashion editorial images ever published. His December issues in particular have become annual events — elaborate fairy-tale narratives shot in English country houses, on Devon beaches, in Scottish castles.",
        },
        { type: "heading", content: "Alexander McQueen: Savage Beauty (2011)" },
        {
          type: "paragraph",
          content:
            "Walker was appointed to create images for the Metropolitan Museum's landmark McQueen retrospective. Working closely with the late designer's archive, he created new images that honoured the work while interpreting it through his own lens.",
        },
        { type: "heading", content: "Story Teller — Victoria and Albert Museum (2019)" },
        {
          type: "paragraph",
          content:
            "A major retrospective at the V&A in London. The exhibition recreated several of Walker's most elaborate sets at scale — a vindication of his belief that fashion photography belongs in a museum. One of the most visited shows in the V&A's recent history.",
        },
        { type: "heading", content: "Capsule Collections for Fashion Houses" },
        {
          type: "paragraph",
          content:
            "Walker's campaign work for houses including Louis Vuitton, Valentino, and Comme des Garçons demonstrated that his approach — theatrical, literary, anti-commercial in feel — could serve commercial purposes. The best commercial art makes you forget it is advertising.",
        },
      ],
      quiz: {
        question: "Where was Walker's 2019 major retrospective held?",
        options: [
          { id: "a", text: "The Metropolitan Museum of Art, New York", isCorrect: false },
          { id: "b", text: "The Victoria and Albert Museum, London", isCorrect: true },
          { id: "c", text: "The Louvre, Paris", isCorrect: false },
          { id: "d", text: "Tate Modern, London", isCorrect: false },
        ],
        explanation:
          "Walker's 2019 retrospective 'Story Teller' was held at the Victoria and Albert Museum in London. It recreated several of his most elaborate sets at full scale and was one of the most visited exhibitions in the museum's recent history.",
      },
    },
    {
      id: "tw-04-techniques",
      title: "Techniques & Approach",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Pre-Production as Art" },
        {
          type: "paragraph",
          content:
            "Walker's images are planned in extraordinary detail before any shooting takes place. He works with a consistent team of set builders, prop makers, and costume designers. The moodboard for a Walker shoot is itself a work of art — dozens of literary references, art historical touchstones, fabric swatches, architectural drawings.",
        },
        { type: "heading", content: "Large Format Film" },
        {
          type: "paragraph",
          content:
            "Walker shoots on large format film — often 8x10 — rather than digital. This is both an aesthetic choice (the tonal range and resolution of large format is unmatched) and a philosophical one: large format slows everything down, demands precision, makes the act of taking a photograph deliberate rather than reflexive.",
        },
        { type: "heading", content: "Working With Non-Models" },
        {
          type: "paragraph",
          content:
            "Walker frequently casts non-professional models alongside professional ones — children, elderly people, people with unusual physical characteristics. This gives his images a human quality that purely professional casts rarely have: you cannot tell who is the 'real' model, which is exactly the point.",
        },
        { type: "heading", content: "On-Location Shooting" },
        {
          type: "paragraph",
          content:
            "Despite his reputation for elaborate constructed sets, Walker also shoots extensively on location — English countryside, Scottish Highlands, the Devon coast. He uses real environments with the same theatrical sensibility he brings to sets: every location is a stage.",
        },
      ],
      quiz: {
        question: "Why does Walker prefer large format film over digital for his shoots?",
        options: [
          { id: "a", text: "It is cheaper and more portable than digital equipment", isCorrect: false },
          { id: "b", text: "It forces deliberateness — slowing down and demanding precision — as well as providing superior tonal range", isCorrect: true },
          { id: "c", text: "It allows instant image review between shots", isCorrect: false },
          { id: "d", text: "It is the only format that can capture his elaborate sets accurately", isCorrect: false },
        ],
        explanation:
          "Walker shoots large format film for both aesthetic and philosophical reasons. The tonal range and resolution are unmatched. But equally important is the slow, deliberate process it demands — every frame is considered, every composition thought through before the shutter opens.",
      },
    },
    {
      id: "tw-05-legacy",
      title: "Influence & Legacy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Narrative Fashion Photography" },
        {
          type: "paragraph",
          content:
            "Walker's most significant contribution has been to demonstrate that fashion photography can tell stories — complex, literary, emotionally resonant stories — without sacrificing its commercial function. Every photographer who constructs a narrative scenario for a fashion shoot works in a tradition he helped create.",
        },
        { type: "heading", content: "The Set as Artwork" },
        {
          type: "paragraph",
          content:
            "Walker elevated the fashion set from backdrop to artwork. His sets are sometimes more photographically interesting than the clothes they display. This raised the status of set design within fashion and created a new kind of collaboration between photographers and makers.",
        },
        { type: "heading", content: "Literary Fashion" },
        {
          type: "paragraph",
          content:
            "Walker gave fashion photography a literary sensibility — an interest in character, narrative, atmosphere, and meaning. His images don't just show clothes; they tell stories. This has been enormously influential on subsequent editorial photography, particularly in the UK.",
        },
        { type: "heading", content: "Celebrating British Eccentricity" },
        {
          type: "paragraph",
          content:
            "Walker's work is deeply, specifically British in its sensibility — its love of the countryside, its celebration of eccentricity, its use of literary and historical reference. He made a virtue of a specifically national character that fashion's international market often demands be suppressed.",
        },
      ],
      quiz: {
        question: "What is Walker's most significant contribution to fashion photography's broader language?",
        options: [
          { id: "a", text: "Introducing digital manipulation as a mainstream tool", isCorrect: false },
          { id: "b", text: "Demonstrating that fashion photography can tell complex literary stories without losing commercial purpose", isCorrect: true },
          { id: "c", text: "Establishing black and white as the dominant fashion aesthetic", isCorrect: false },
          { id: "d", text: "Pioneering the use of street locations rather than studio settings", isCorrect: false },
        ],
        explanation:
          "Walker's most significant contribution is demonstrating that fashion photography can be genuinely narrative — telling complex, literary, emotionally resonant stories — while remaining commercially viable. This gave subsequent photographers permission to bring storytelling ambition to editorial work.",
      },
    },
    {
      id: "tw-06-learn",
      title: "What You Can Learn From Walker",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From His Practice" },
        {
          type: "paragraph",
          content:
            "Walker's work teaches that photography is a narrative art, and that the story begins long before the camera is raised.",
        },
        { type: "heading", content: "1. Build Your Visual World Before You Shoot" },
        {
          type: "paragraph",
          content:
            "Create moodboards before every significant shoot. Gather references from literature, art history, cinema, architecture. Know what world your image inhabits before you begin making it.",
        },
        { type: "heading", content: "2. Think in Stories, Not Single Images" },
        {
          type: "paragraph",
          content:
            "Before shooting, ask: what is happening in this image? What happened just before? What happens next? Characters in a Walker image have histories and futures, even if none of this is visible. This thinking gives images depth.",
        },
        { type: "heading", content: "3. Slow Down Your Process" },
        {
          type: "paragraph",
          content:
            "Whether or not you shoot on film, try slowing down. Limit yourself to a fixed number of exposures. Compose carefully before you shoot. The discipline of large format thinking — precision, deliberateness — is available to anyone with any camera.",
        },
        { type: "heading", content: "4. Celebrate Your Environment" },
        {
          type: "paragraph",
          content:
            "Walker made his British environment a subject, not a limitation. What is specific about where you live — its light, its architecture, its culture, its seasons — that could become a photographic resource rather than an obstacle?",
        },
        { type: "heading", content: "5. Read More" },
        {
          type: "paragraph",
          content:
            "Walker's images come from literature as much as from photography. Read the books your favourite photographers read. Lewis Carroll, Angela Carter, A.S. Byatt — Walker's visual imagination is inseparable from his literary imagination. Expand yours.",
        },
      ],
      reflection: {
        prompt:
          "Walker says 'I want to create images that are completely impossible but completely believable.' What impossible but believable world would you build if you had unlimited budget and production support? Describe it in as much detail as you can.",
      },
    },
  ],
}

export default course
