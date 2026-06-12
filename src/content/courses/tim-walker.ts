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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "From Avedon's Studio to British Vogue at 25" },
        {
          type: "paragraph",
          content:
            "Walker studied in Exeter, then spent a year as Avedon's assistant in New York — watching what serious photographic ambition actually looks like.",
        },
        {
          type: "paragraph",
          content:
            "He returned to the UK and started shooting for British Vogue at 25. His images were immediately unlike anything else — theatrical, literary, strange. The world noticed.",
        },
        {
          type: "heading",
          content: "A Career Built on Impossible Images",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "This Isn't Reality. It's Better." },
        {
          type: "paragraph",
          content:
            "Walker doesn't show an aspirational version of real life — he builds a parallel world where the physical laws are different and everything is beautiful.",
        },
        { type: "heading", content: "Dalí, Magritte, and Lewis Carroll Walk Into a Shoot" },
        {
          type: "paragraph",
          content:
            "Surrealism, British literary fantasy, dreamwork — Walker's visual vocabulary comes from literature and art history as much as from photography.",
        },
        { type: "heading", content: "The Set Is Half the Image" },
        {
          type: "paragraph",
          content:
            "Giant papier-mâché animals. Rooms full of flowers. Entire architectures built for one shot, then destroyed. This is fashion photography as theatre.",
        },
        { type: "heading", content: "Golden Light That Doesn't Exist in Nature" },
        {
          type: "paragraph",
          content:
            "Walker's warm, saturated palette makes everything glow from within. His lighting is careful and theatrical — simulating a natural light that nature never quite manages.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "British Vogue — Thirty Years of December Magic" },
        {
          type: "paragraph",
          content:
            "English country houses, Devon beaches, Scottish castles — Walker's December issues have become annual events. Fairy-tale narratives that readers wait for all year.",
        },
        { type: "heading", content: "McQueen: Savage Beauty — Honouring the Archive" },
        {
          type: "paragraph",
          content:
            "The Met commissioned Walker to create new images for the landmark McQueen retrospective. He honoured the work while making it entirely his own.",
        },
        { type: "heading", content: "Story Teller at the V&A — Fashion Photography in a Museum" },
        {
          type: "paragraph",
          content:
            "His 2019 V&A retrospective recreated his most elaborate sets at full scale. One of the museum's most visited shows. Fashion photography earned its museum wall.",
        },
        { type: "heading", content: "Campaign Work — The Best Advertising Forgets It's Advertising" },
        {
          type: "paragraph",
          content:
            "Louis Vuitton, Valentino, Comme des Garçons — Walker proved theatrical and literary could serve commercial purposes. When it works, you forget you're looking at an ad.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Moodboard Is Already a Work of Art" },
        {
          type: "paragraph",
          content:
            "Dozens of literary references, art historical touchstones, fabric swatches, architectural drawings — before anyone touches a camera, Walker knows exactly what world he's building.",
        },
        { type: "heading", content: "Large Format Film — Slow by Design" },
        {
          type: "paragraph",
          content:
            "8x10 film demands precision and deliberateness. Every frame costs something. That constraint produces images that are thought through rather than reflexively taken.",
        },
        { type: "heading", content: "Real People Make It Human" },
        {
          type: "paragraph",
          content:
            "Walker casts children, elderly people, and non-professionals alongside models. You can't tell who the 'real' model is — which is exactly the point.",
        },
        { type: "heading", content: "Every Location Is a Stage" },
        {
          type: "paragraph",
          content:
            "Even when shooting on location — Scottish Highlands, Devon coast — Walker brings the same theatrical sensibility. Real places, treated like sets.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Fashion Photography Can Tell Stories" },
        {
          type: "paragraph",
          content:
            "Walker proved that complex, literary, emotionally resonant narratives work in fashion photography — without killing its commercial function. Every narrative editorial owes him a nod.",
        },
        { type: "heading", content: "The Set Became Art" },
        {
          type: "paragraph",
          content:
            "Walker's sets are sometimes more interesting than the clothes they display. He elevated set design from backdrop to co-author.",
        },
        { type: "heading", content: "Fashion Got a Literary Sensibility" },
        {
          type: "paragraph",
          content:
            "Character, atmosphere, narrative, meaning — Walker gave fashion photography a reason to read. His influence on UK editorial photography is enormous.",
        },
        { type: "heading", content: "British Weirdness as a Superpower" },
        {
          type: "paragraph",
          content:
            "Walker's work is deeply, specifically British — countryside, eccentricity, literary and historical reference. He made national character into a photographic strength, not a limitation.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Five Things to Steal From Walker" },
        {
          type: "paragraph",
          content:
            "Walker's lesson: photography is a narrative art. The story starts long before you raise the camera.",
        },
        { type: "heading", content: "1. Build Your World Before You Shoot" },
        {
          type: "paragraph",
          content:
            "Make moodboards before every significant shoot. Gather references from literature, art, cinema. Know what world you're entering before you step in.",
        },
        { type: "heading", content: "2. Think in Stories, Not Single Images" },
        {
          type: "paragraph",
          content:
            "What happened just before this image? What happens next? Characters in a Walker image have histories and futures. That thinking gives images depth.",
        },
        { type: "heading", content: "3. Slow Down Your Process" },
        {
          type: "paragraph",
          content:
            "Limit yourself to a fixed number of exposures. Compose carefully before you shoot. Large format discipline is available to anyone with any camera.",
        },
        { type: "heading", content: "4. Your Environment Is a Resource" },
        {
          type: "paragraph",
          content:
            "Walker made his British surroundings a subject, not a limitation. What's specific about where you live — its light, its seasons, its culture — that you could use?",
        },
        { type: "heading", content: "5. Read More" },
        {
          type: "paragraph",
          content:
            "Walker's visual imagination comes from Lewis Carroll, Angela Carter, A.S. Byatt as much as from photography. Expand your literary references and your images will follow.",
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
