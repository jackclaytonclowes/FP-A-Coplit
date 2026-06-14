import type { Course } from "@/types"

const course: Course = {
  id: "documentary-photography",
  title: "Documentary Photography",
  slug: "documentary-photography",
  description:
    "Documentary photography as a sustained practice — the project as form, the long-term engagement as method, and the ethical obligations that distinguish serious documentary work from photojournalism. From the FSA to Magnum to the contemporary long-form project.",
  category: "style-movements",
  accentColor: "#6a6a6a",
  estimatedHours: 3,
  tags: ["documentary", "photojournalism", "social", "narrative", "truth"],
  lessons: [
    {
      id: "dp-01",
      title: "Origins & History",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Tradition That Said: Just Show It" },
        {
          type: "paragraph",
          content:
            "Documentary photography didn't start with a manifesto — it started with photographers carrying cameras into places polite society looked away from. Civil War battlefields. New York slums. British factories.",
        },
        {
          type: "paragraph",
          content:
            "The word 'documentary' came from film first — John Grierson used it in 1926. Photographers borrowed it to describe something specific: sustained, intentional work that went beyond a single news image.",
        },
        { type: "heading", content: "The FSA: Photography With a Mission" },
        {
          type: "paragraph",
          content:
            "Roy Stryker's Farm Security Administration project (1935–1944) sent Lange, Evans, Parks, and others across Depression-era America with one job: document poverty. 175,000 images later, the documentary project was photography's most serious form.",
        },
        { type: "heading", content: "Life Magazine and the Picture Essay" },
        {
          type: "paragraph",
          content:
            "Life magazine (founded 1936) brought documentary photography to millions. The picture essay — photographs plus text telling a story across multiple pages — became the defining format. W. Eugene Smith basically perfected it.",
        },
        { type: "heading", content: "Magnum: Photographers Take Control" },
        {
          type: "paragraph",
          content:
            "Cartier-Bresson, Capa, Rodger, and Seymour founded Magnum in 1947. A photographer-owned cooperative meant members kept their negatives and pursued their own projects. Revolutionary then. Still unusual now.",
        },
        {
          type: "quote",
          content: "Photography is the simultaneous recognition, in a fraction of a second, of the significance of an event as well as of a precise organisation of forms which give that event its proper expression.",
          author: "Henri Cartier-Bresson",
        },
      ],
      quiz: {
        question: "What made Magnum Photos a revolution in documentary photography when it was founded in 1947?",
        options: [
          { id: "a", text: "It was the first photography agency to use 35mm cameras rather than large-format equipment", isCorrect: false },
          { id: "b", text: "As a photographer-owned cooperative, it gave members control over their negatives and the ability to pursue their own projects", isCorrect: true },
          { id: "c", text: "It was the first agency to exclusively represent photographers working in the documentary tradition", isCorrect: false },
          { id: "d", text: "It guaranteed photographers a minimum income regardless of editorial assignments", isCorrect: false },
        ],
        explanation:
          "The revolutionary aspect of Magnum was ownership and control. Before Magnum, photographers who worked for magazines and agencies typically surrendered their negatives and had little control over how their work was used. Magnum's cooperative structure meant photographers owned their negatives, controlled their archives, and could pursue personal projects — a fundamental shift in the status and autonomy of documentary photographers.",
      },
    },
    {
      id: "dp-02",
      title: "Key Practitioners",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Henri Cartier-Bresson (1908–2004)" },
        {
          type: "paragraph",
          content:
            "The decisive moment: form and content converging in a single perfect instant. Cartier-Bresson chased it through public spaces with a Leica and an invisible presence. His 1952 book is still the most influential photography book ever published.",
        },
        { type: "heading", content: "Robert Frank (1924–2019)" },
        {
          type: "paragraph",
          content:
            "The Americans (1958) broke everything. Dark, blurred, off-angle, emotionally raw — Frank drove across America and made photographs that said: this place is not what it thinks it is. American publishers rejected it. France published it first.",
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Walker_Evans,_Penny_picture_displays,_Birmingham,_Alabama,_1936.jpg/1280px-Walker_Evans,_Penny_picture_displays,_Birmingham,_Alabama,_1936.jpg",
          caption: "Walker Evans, Penny Picture Displays, Birmingham, Alabama, 1936 — FSA documentary photograph of portrait studio display boards (Library of Congress / Farm Security Administration)",
          alt: "Walker Evans FSA documentary photograph showing rows of penny portrait photographs displayed on a shop front in Birmingham Alabama, 1936",
        },
        { type: "heading", content: "W. Eugene Smith (1918–1978)" },
        {
          type: "paragraph",
          content:
            "Smith invented the picture essay as art form. Three weeks with a rural Colorado doctor. Months in a Japanese fishing village poisoned by mercury. Immersive, relentless, and emotionally devastating.",
        },
        { type: "heading", content: "Diane Arbus (1923–1971)" },
        {
          type: "paragraph",
          content:
            "Arbus photographed people on society's margins — nudists, twins, carnival performers — with a flash-lit directness that was empathetic and confrontational at the same time. Her posthumous monograph was a sensation.",
        },
        { type: "heading", content: "Mary Ellen Mark (1940–2015)" },
        {
          type: "paragraph",
          content:
            "Mark believed documentary photography required real relationship — not observation at a distance. She spent months and years with her subjects. That's the only way to earn the images she made.",
        },
        {
          type: "quote",
          content: "I want to photograph people living on the edges of society. I want to document people who have been ignored.",
          author: "Mary Ellen Mark",
        },
      ],
      quiz: {
        question: "What made Robert Frank's The Americans a rupture in the documentary tradition?",
        options: [
          { id: "a", text: "It was the first documentary project to be published as a book rather than in a magazine format", isCorrect: false },
          { id: "b", text: "Frank introduced a subjective, personal, emotionally weighted approach that challenged documentary's claims to objectivity", isCorrect: true },
          { id: "c", text: "Frank's use of colour photography was unprecedented in serious documentary work at the time", isCorrect: false },
          { id: "d", text: "The project was the first to document American culture from the perspective of an outsider", isCorrect: false },
        ],
        explanation:
          "The Americans broke with documentary photography's tradition of apparent objectivity — the sense that the photographer was recording events as they actually were. Frank's photographs were visibly personal: dark, off-kilter, blurred, emotionally charged. They showed America not as it presented itself but as Frank felt it to be. This subjective turn was controversial and enormously influential, opening documentary photography to approaches that previous traditions had excluded.",
      },
    },
    {
      id: "dp-03",
      title: "Visual Characteristics",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Decisive Moment: Form Meets Content" },
        {
          type: "paragraph",
          content:
            "Cartier-Bresson's idea: the precise instant when the geometry of the frame and the significance of the event click together perfectly. Not the peak of action — the moment of visual completion.",
        },
        { type: "heading", content: "Series Beat Singles Every Time" },
        {
          type: "paragraph",
          content:
            "One great photograph is a photograph. Twenty great photographs that belong together are a documentary project. Smith's picture essays worked by accumulation — each image adds something the others can't carry alone.",
        },
        { type: "heading", content: "Time Is the Real Tool" },
        {
          type: "paragraph",
          content:
            "One afternoon of photographs looks like one afternoon. Months of presence looks like a life. People stop performing. They reveal things. They let you in. You can't rush that.",
        },
        { type: "heading", content: "A Project Has a Shape" },
        {
          type: "paragraph",
          content:
            "A documentary project isn't just a pile of photographs from the same place. It has a beginning, a development, and a culmination — a world the viewer can enter. That requires editorial intelligence, not just shooting skill.",
        },
        {
          type: "quote",
          content: "The camera is an instrument that teaches people how to see without a camera.",
          author: "Dorothea Lange",
        },
      ],
      quiz: {
        question: "What distinguishes a documentary project from a collection of photographs taken in the same location?",
        options: [
          { id: "a", text: "A documentary project uses only black-and-white photography while a collection may use colour", isCorrect: false },
          { id: "b", text: "A documentary project has narrative coherence — a structured sequence that creates a world the viewer can enter and understand", isCorrect: true },
          { id: "c", text: "A documentary project must include a minimum number of photographs to qualify", isCorrect: false },
          { id: "d", text: "A documentary project requires the photographer to be physically present for at least one year", isCorrect: false },
        ],
        explanation:
          "The distinction between a documentary project and a mere collection of photographs from the same place is narrative coherence — the sense that the images together create something larger than their sum. A project has structure: it enters a world, explores it, and produces understanding. This requires editorial intelligence about selection and sequence, not just photographic skill. It is a compositional act at the scale of the book or exhibition.",
      },
    },
    {
      id: "dp-04",
      title: "Defining Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Americans — Robert Frank (1958)" },
        {
          type: "paragraph",
          content:
            "83 photographs. Jukeboxes, diners, parades, funerals, the American flag as recurring ironic punchline. Rejected by American publishers. Now it's the photographer's bible.",
        },
        { type: "heading", content: "Country Doctor — W. Eugene Smith (1948)" },
        {
          type: "paragraph",
          content:
            "Three weeks with Dr. Ernest Ceriani — sole doctor for 2,000 people in rural Colorado. Twenty-two pages in Life magazine. The picture essay as short story, and still the best example of the form.",
        },
        { type: "heading", content: "Diane Arbus Monograph (1972)" },
        {
          type: "paragraph",
          content:
            "Published a year after her death. Sold out immediately. Square-format, flash-lit portraits of people on social margins that made you confront your own act of looking. Still debated today.",
        },
        { type: "heading", content: "Streetwise — Mary Ellen Mark (1988)" },
        {
          type: "paragraph",
          content:
            "A magazine assignment that became a years-long project about homeless teenagers in Seattle. The depth of access — especially with Tiny and Rat — only came from sustained relationship. That's the whole lesson.",
        },
      ],
      quiz: {
        question: "Why was W. Eugene Smith's Country Doctor significant for the picture essay form?",
        options: [
          { id: "a", text: "It was the first picture essay to use colour photography in a major magazine publication", isCorrect: false },
          { id: "b", text: "It demonstrated that sustained, intimate engagement with a single subject over time could produce narrative depth comparable to written journalism", isCorrect: true },
          { id: "c", text: "It was the first picture essay to take a political position rather than simply documenting its subject", isCorrect: false },
          { id: "d", text: "It proved that documentary photography could reach a larger audience than written reportage on the same subject", isCorrect: false },
        ],
        explanation:
          "Country Doctor was significant because it proved what the picture essay could achieve through sustained engagement. Smith spent three weeks with Dr. Ceriani, producing an essay with narrative arc, emotional depth, and structural integrity that single-day coverage could never have achieved. It became the template for serious picture-essay work — the demonstration that documentary photography's most powerful form required time, relationship, and editorial intelligence, not just skill with a camera.",
      },
    },
    {
      id: "dp-05",
      title: "Modern Influence",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Long-Form Project Is Still Alive" },
        {
          type: "paragraph",
          content:
            "Alec Soth, Jim Goldberg, Taryn Simon — they're still doing it. Books and gallery shows instead of Life magazine, but the same commitment: go deep, stay long, tell the story right.",
        },
        { type: "heading", content: "Instagram: Distribution Win, Format Problem" },
        {
          type: "paragraph",
          content:
            "Instagram let photographers bypass every gatekeeper. That's huge. But it rewards single images and engagement metrics — the opposite of what documentary photography actually needs.",
        },
        { type: "heading", content: "Ethics Got More Complicated" },
        {
          type: "paragraph",
          content:
            "Consent, representation, power — these were always documentary's tensions. Now add global digital distribution and heightened awareness of who controls whose image. Photographers like Zanele Muholi make the ethics the work itself.",
        },
        { type: "heading", content: "When Documentary Meets Fiction" },
        {
          type: "paragraph",
          content:
            "Gregory Crewdson, Jeff Wall, Anna Gaskell construct elaborate staged scenes that look documentary. The resulting tension — constructed image pretending to be found — is one of contemporary photography's most productive arguments.",
        },
      ],
      quiz: {
        question: "How has Instagram both helped and challenged contemporary documentary photography?",
        options: [
          { id: "a", text: "Instagram has improved documentary photography technically but reduced its commercial value", isCorrect: false },
          { id: "b", text: "Instagram enables direct global distribution but its emphasis on single images works against documentary's project-based, serial form", isCorrect: true },
          { id: "c", text: "Instagram has made documentary photography more accessible to working-class communities but harder to sell to galleries", isCorrect: false },
          { id: "d", text: "Instagram has replaced magazines as the primary venue for documentary photography without significant trade-offs", isCorrect: false },
        ],
        explanation:
          "Instagram has created genuine democratic access to distribution for documentary photographers, eliminating the previous gatekeeping role of magazines and agencies. But its platform mechanics — the single image, the scroll, engagement optimisation — work against documentary photography's most important formal characteristic: the series and the project as the essential unit of meaning. This tension is not resolved; it is one of the defining problems for contemporary documentary practitioners.",
      },
    },
    {
      id: "dp-06",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Documentary's Real Lessons" },
        {
          type: "paragraph",
          content:
            "Documentary photography teaches you how to work, not just how to shoot. Methodology, relationships, ethics — all of it matters as much as aperture.",
        },
        { type: "heading", content: "1. Return to the Same Subject" },
        {
          type: "paragraph",
          content:
            "Go back. Keep going back. Your tenth visit produces photographs your first visit never could. Access opens slowly — and only if you show up consistently.",
        },
        { type: "heading", content: "2. Think in Sequences, Not Singles" },
        {
          type: "paragraph",
          content:
            "After every shoot, sequence your images. Ask: what does this sequence say that no individual photograph can? What's missing? The sequence is the unit. Everything else is a test frame.",
        },
        { type: "heading", content: "3. Study the Masters as Editors" },
        {
          type: "paragraph",
          content:
            "Read Country Doctor, The Americans, and Streetwise as editorial constructions. Watch the sequence. See the rhythm. The editorial intelligence that builds a documentary project is a skill you can learn.",
        },
        { type: "heading", content: "4. Ask the Ethical Questions First" },
        {
          type: "paragraph",
          content:
            "What is my relationship to this subject? What does being photographed cost them? These aren't obstacles — they're what make documentary photography serious rather than extractive.",
        },
        { type: "heading", content: "5. The Camera Teaches You to See" },
        {
          type: "paragraph",
          content:
            "Lange said the camera teaches you to see without a camera. Show up to the same place repeatedly. Watch what changes. Watch what doesn't. The photographs are the product; the attention is the practice.",
        },
      ],
      reflection: {
        prompt:
          "W. Eugene Smith spent three weeks with a rural doctor to produce Country Doctor. Think about a subject in your own life — a person, a community, a recurring event — that you could return to over an extended period. What would you need to do to earn the kind of access that produces genuinely intimate documentary photographs? What would change between your first visit and your tenth? Write a one-paragraph documentary project proposal, then go and make the first six photographs.",
      },
    },
  ],
}

export default course
