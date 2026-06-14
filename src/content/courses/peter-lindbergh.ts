import type { Course } from "@/types"

const course: Course = {
  id: "peter-lindbergh",
  title: "Peter Lindbergh",
  slug: "peter-lindbergh",
  description:
    "A study of Peter Lindbergh — the photographer who stripped fashion of artifice and gave us women as they actually are. Discover the man who launched the supermodel era and changed the grammar of fashion photography.",
  category: "great-photographers",
  accentColor: "#a0a0a0",
  estimatedHours: 3,
  tags: ["fashion", "documentary", "black-and-white", "natural", "portrait"],
  photographerId: "peter-lindbergh",
  lessons: [
    {
      id: "pl-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Painter, Window Dresser, Most In-Demand Photographer in the World" },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Peter_Lindbergh_by_Stefan_Rappo_2015_(cropped).jpg/1280px-Peter_Lindbergh_by_Stefan_Rappo_2015_(cropped).jpg",
          caption: "Peter Lindbergh, photographed by Stefan Rappo, 2015",
          alt: "Portrait of fashion photographer Peter Lindbergh, 2015",
        },
        {
          type: "paragraph",
          content:
            "Lindbergh studied painting before he ever touched a camera. That background gave him an unusual eye for light, shadow, and emotional register that purely photographic training rarely delivers.",
        },
        {
          type: "paragraph",
          content:
            "He moved to Paris in 1978 and started shooting French Vogue. Within years he was the first photographer Anna Wintour called. He spent his career being ambivalent about that fame.",
        },
        {
          type: "heading",
          content: "The Key Moments",
        },
        {
          type: "list",
          items: [
            "1978: Moves to Paris; begins shooting for French Vogue",
            "1988: Shoots 'The New Supermodels' campaign — Crawford, Campbell, Turlington, Schiffer, MacPherson and others together for the first time",
            "1990: Shoots iconic British Vogue cover — the first issue under Anna Wintour's era — on a Malibu beach, launching the supermodel era",
            "1999: Documents Karl Lagerfeld's Chanel retrospective",
            "2017: Curates the Pirelli Calendar, choosing 'natural beauty' as his guiding principle",
            "2019: Dies in Paris, aged 74",
          ],
        },
        {
          type: "quote",
          content: "It's the photographer's responsibility to free women from the terror of youth and perfection.",
          author: "Peter Lindbergh",
        },
      ],
      quiz: {
        question: "Before becoming a photographer, Peter Lindbergh trained in which discipline?",
        options: [
          { id: "a", text: "Architecture", isCorrect: false },
          { id: "b", text: "Painting at the Kunstakademie Krefeld", isCorrect: true },
          { id: "c", text: "Cinema and film direction", isCorrect: false },
          { id: "d", text: "Graphic design", isCorrect: false },
        ],
        explanation:
          "Lindbergh studied painting before turning to photography. This background shaped his approach to composition and light, giving his images a pictorial quality distinct from photographers who came up through the fashion system.",
      },
    },
    {
      id: "pl-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Most In-Demand Fashion Photographer Who Hated Fashion Photography" },
        {
          type: "paragraph",
          content:
            "Lindbergh's whole project was an argument against the industry that paid him. No retouching. Minimal make-up. Natural light. Women as themselves.",
        },
        { type: "heading", content: "Black and White Cuts Straight to the Emotion" },
        {
          type: "paragraph",
          content:
            "Colour distracts. Remove it and the eye goes straight to expression, gesture, and light. Lindbergh's monochrome was never flat — it was deeply modulated, rich in shadow.",
        },
        { type: "heading", content: "Fashion in Front of a Steel Factory" },
        {
          type: "paragraph",
          content:
            "Warehouses, wastelands, beaches at dawn — Lindbergh loved the tension between haute couture and raw, unglamorous environments. For him, that tension was honesty.",
        },
        { type: "heading", content: "Lines and Pores Are Not Problems" },
        {
          type: "paragraph",
          content:
            "Lindbergh refused to erase what made his subjects human. Age, texture, asymmetry — left alone. His late portraits of older women are some of the most moving photographs in contemporary fashion.",
        },
        {
          type: "quote",
          content: "The most important thing is to bring out the truth of the person in front of you.",
          author: "Peter Lindbergh",
        },
      ],
      quiz: {
        question: "What is Peter Lindbergh's most consistent ethical position regarding his subjects' appearance?",
        options: [
          { id: "a", text: "He believed in heavy retouching to create an ideal beauty", isCorrect: false },
          { id: "b", text: "He insisted on natural appearance and minimal retouching", isCorrect: true },
          { id: "c", text: "He used only professional models with specific physical criteria", isCorrect: false },
          { id: "d", text: "He avoided photographing women entirely in later career", isCorrect: false },
        ],
        explanation:
          "Lindbergh's most consistent ethical position was against retouching. He believed fashion's demand for artificial perfection was harmful, and made it a condition of his work that images would not be excessively manipulated. He called this freeing women 'from the terror of youth and perfection.'",
      },
    },
    {
      id: "pl-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Malibu Supermodels — The Shot That Started an Era" },
        {
          type: "paragraph",
          content:
            "Cindy, Naomi, Linda, Tatjana, and Christy. Jeans and white shirts. Hair blowing at dawn. The image launched the supermodel era and inspired the 'Freedom '90' video.",
        },
        { type: "heading", content: "Stories of the Sahara — Small People, Vast World" },
        {
          type: "paragraph",
          content:
            "Women in couture against the Tunisian desert. An almost melancholy confrontation between luxury and scale. Clothes dwarfed by the landscape — and not diminished by it.",
        },
        { type: "heading", content: "Untold Stories — Portraits That Reveal, Not Sell" },
        {
          type: "paragraph",
          content:
            "Plain backgrounds, no fashion context — just faces. The psychological intensity belongs to portraiture, not fashion photography.",
        },
        { type: "heading", content: "Pirelli Calendar 2017 — A Manifesto in Print" },
        {
          type: "paragraph",
          content:
            "Nicole Kidman, Julianne Moore, Patti Smith. Natural, unstyled, unretouched. A deliberate argument against everything the Pirelli Calendar had traditionally stood for.",
        },
      ],
      quiz: {
        question: "Which video director used the iconic Malibu supermodel image as direct inspiration for a famous 1990s music video?",
        options: [
          { id: "a", text: "Michel Gondry for Björk", isCorrect: false },
          { id: "b", text: "Spike Jonze for Weezer", isCorrect: false },
          { id: "c", text: "David Fincher for George Michael's 'Freedom '90'", isCorrect: true },
          { id: "d", text: "Anton Corbijn for Depeche Mode", isCorrect: false },
        ],
        explanation:
          "David Fincher directed George Michael's 'Freedom '90' video, which featured the same five supermodels from Lindbergh's Malibu shoot — Crawford, Campbell, Evangelista, Patitz, and Turlington — cementing the image's place in cultural history.",
      },
    },
    {
      id: "pl-04-techniques",
      title: "Techniques & Approach",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Natural Light Is an Ethical Choice" },
        {
          type: "paragraph",
          content:
            "Lindbergh believed natural light respects its subject — it illuminates rather than transforms. He shot at dawn, at dusk, in open shade. Patience and planning over control.",
        },
        { type: "heading", content: "He Referenced Bergman, Not Photographers" },
        {
          type: "paragraph",
          content:
            "Bergman, Wenders, Cassavetes — filmmakers, not photographers. Lindbergh was after emotional truth: the face caught between expressions, the moment just before the obvious one.",
        },
        { type: "heading", content: "Small Teams, Real Trust" },
        {
          type: "paragraph",
          content:
            "Lindbergh's shoots were conversations. Crawford, Campbell, Evangelista all said he was the photographer with whom they felt most themselves. That trust is visible in every image.",
        },
        { type: "heading", content: "He Made Images That Were Meant to Last" },
        {
          type: "paragraph",
          content:
            "Fashion serves the season. Lindbergh resisted that entirely. He wasn't interested in trend. He asked: what's essential, permanent, and true about these people in these clothes?",
        },
      ],
      quiz: {
        question: "Which art form most directly influenced Lindbergh's approach to capturing emotion in his photographs?",
        options: [
          { id: "a", text: "Classical painting, particularly the Old Masters", isCorrect: false },
          { id: "b", text: "Cinema, particularly the work of Bergman and Wenders", isCorrect: true },
          { id: "c", text: "Street photography, particularly the New York school", isCorrect: false },
          { id: "d", text: "Architectural photography", isCorrect: false },
        ],
        explanation:
          "Lindbergh's primary references were filmmakers rather than photographers — Bergman, Wenders, Cassavetes. He was interested in the emotional truth of cinema: faces between expressions, the moment before and after the obvious one. His images often read as stills from imaginary films.",
      },
    },
    {
      id: "pl-05-legacy",
      title: "Influence & Legacy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Commercial Success Doesn't Require Erasing Humanity" },
        {
          type: "paragraph",
          content:
            "Lindbergh's most significant argument — made through decades of work — is that fashion images can be commercially successful and emotionally honest at the same time.",
        },
        { type: "heading", content: "He Created the Supermodel Era and Was Ambivalent About It" },
        {
          type: "paragraph",
          content:
            "His images gave Crawford, Campbell, and Evangelista individual identities — faces, not mannequins. He helped create a celebrity culture he found deeply uncomfortable.",
        },
        { type: "heading", content: "Documentary Fashion — A Whole New Aesthetic" },
        {
          type: "paragraph",
          content:
            "Candid, unposed, location-shot with available light — Corinne Day, Harley Weir, Theo Wenner all work in traditions Lindbergh helped establish.",
        },
        { type: "heading", content: "Against Digital Perfection — Still Relevant" },
        {
          type: "paragraph",
          content:
            "Lindbergh argued against airbrushing in the 1980s. In the age of Facetune and AI retouching, his position sounds more urgent than ever.",
        },
      ],
      quiz: {
        question: "Lindbergh's work helped create the 'supermodel era' — but how did he personally view this outcome?",
        options: [
          { id: "a", text: "He was proud to have elevated models to celebrity status", isCorrect: false },
          { id: "b", text: "He viewed it with ambivalence — it was counter to his values around human truth", isCorrect: true },
          { id: "c", text: "He actively promoted celebrity culture throughout his career", isCorrect: false },
          { id: "d", text: "He considered it irrelevant to his photographic project", isCorrect: false },
        ],
        explanation:
          "Though his images helped create the supermodel era, Lindbergh viewed celebrity culture with ambivalence. His project was always about human truth and emotional honesty — the opposite of the spectacle that surrounded the models he photographed.",
      },
    },
    {
      id: "pl-06-learn",
      title: "What You Can Learn From Lindbergh",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Five Things to Steal From Lindbergh" },
        {
          type: "paragraph",
          content:
            "Lindbergh's philosophy runs counter to most of the industry's values. That's exactly why it's worth studying.",
        },
        { type: "heading", content: "1. Commit to Natural Light" },
        {
          type: "paragraph",
          content:
            "Shoot only in natural light for a month. Dawn, overcast, golden hour, open shade — learn what each does to a face. The 'wrong' light is often the most interesting.",
        },
        { type: "heading", content: "2. Resist the Healing Brush" },
        {
          type: "paragraph",
          content:
            "Before you remove a 'flaw,' ask if it's actually information. Lines, texture, asymmetry tell you who someone is. Decide consciously what you erase and why.",
        },
        { type: "heading", content: "3. Watch More Films" },
        {
          type: "paragraph",
          content:
            "Lindbergh learned emotion from Bergman and Wenders, not other photographers. What can cinema teach you about light, framing, and the face between expressions?",
        },
        { type: "heading", content: "4. Build Real Relationships First" },
        {
          type: "paragraph",
          content:
            "Talk before you shoot. Learn about your subject. The moment someone forgets there's a camera is often the most valuable moment in the whole session.",
        },
        { type: "heading", content: "5. Photograph Against the Trend" },
        {
          type: "paragraph",
          content:
            "Lindbergh was always slightly behind or ahead of fashion's current moment — on purpose. The images that age best are often the ones that looked 'too simple' when they were made.",
        },
      ],
      reflection: {
        prompt:
          "Lindbergh said his greatest responsibility was 'to free women from the terror of youth and perfection.' What standards of perfection do you apply to your own photography — in your subjects, in your technique, in your editing — that might be worth questioning?",
      },
    },
  ],
}

export default course
