import type { Course } from "@/types"

const course: Course = {
  id: "solve-sundsbo",
  title: "Sølve Sundsbø",
  slug: "solve-sundsbo",
  description:
    "A study of Sølve Sundsbø — fashion photography's most technically innovative contemporary practitioner. Sundsbø uses digital technology and physical experimentation to create images of extraordinary visual complexity.",
  category: "great-photographers",
  accentColor: "#78c8e8",
  estimatedHours: 3,
  tags: ["fashion", "digital", "contemporary", "technical", "conceptual"],
  photographerId: "solve-sundsbo",
  lessons: [
    {
      id: "ss-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "From Norwegian Graphic Design to Fashion's Frontier" },
        {
          type: "paragraph",
          content:
            "Born in Ålesund, Norway in 1970, Sundsbø studied graphic design before photography found him. He moved to London, started assisting — and landed with Nick Knight.",
        },
        {
          type: "paragraph",
          content:
            "Knight's SHOWstudio ethos — experiment constantly, treat technology as creative material — became Sundsbø's operating system. He's been pushing what a fashion image can look like ever since.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "Early 1990s: Arrives in London; assists Nick Knight",
            "Late 1990s: Editorial work begins for Dazed and AnOther",
            "2000s: Regular contributor to French Vogue, W Magazine, and major fashion houses",
            "2009: Shoots the Pirelli Calendar — youngest photographer in the project's history at that time",
            "Ongoing: Fashion photography's most technically restless practitioner",
          ],
        },
        {
          type: "quote",
          content: "I'm interested in images that couldn't have been made any other way. If I can imagine it, I have to find the technique to make it.",
          author: "Sølve Sundsbø",
        },
      ],
      quiz: {
        question: "Which photographer most influenced Sundsbø's approach to technical experimentation?",
        options: [
          { id: "a", text: "Richard Avedon, through his psychological approach to portraiture", isCorrect: false },
          { id: "b", text: "Nick Knight, through the SHOWstudio ethos of constant experimentation", isCorrect: true },
          { id: "c", text: "Helmut Newton, through his use of directional lighting", isCorrect: false },
          { id: "d", text: "Wolfgang Tillmans, through his documentary approach to contemporary culture", isCorrect: false },
        ],
        explanation:
          "Sundsbø assisted Nick Knight and absorbed the SHOWstudio ethos: constant experimentation, technology as creative tool, the belief that fashion photography should push relentlessly at what is technically possible. This shaped every aspect of his subsequent practice.",
      },
    },
    {
      id: "ss-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "What Has Never Been Done Before?" },
        {
          type: "paragraph",
          content:
            "That's the question Sundsbø asks every project. Bodies multiplied, motion revealed, light behaving impossibly — his images always feel like they shouldn't exist.",
        },
        { type: "heading", content: "In-Camera, Not Post-Production" },
        {
          type: "paragraph",
          content:
            "While others reach for Photoshop, Sundsbø reaches for mirrors, multiple exposures, and unusual light setups. The complexity is built on set, not on screen.",
        },
        { type: "heading", content: "The Body as Geometry" },
        {
          type: "paragraph",
          content:
            "Like Knight, he treats the body as a sculptural object — interested in its forms and visual possibilities, not just its social identity. Fragments, silhouettes, repeated motifs.",
        },
        { type: "heading", content: "Colour That Builds Space" },
        {
          type: "paragraph",
          content:
            "Sundsbø's colour choices create depth and separate planes — they're architectural, not decorative. His images feel three-dimensional because colour does structural work.",
        },
        {
          type: "quote",
          content: "The best image is the one that looks like it was impossible to make.",
          author: "Sølve Sundsbø",
        },
      ],
      quiz: {
        question: "What distinguishes Sundsbø's technical approach from photographers who rely primarily on post-production?",
        options: [
          { id: "a", text: "He refuses to use any post-production or digital processing in his work", isCorrect: false },
          { id: "b", text: "He prefers in-camera physical experimentation — mirrors, multiple exposures, unusual lighting — over post-production effects", isCorrect: true },
          { id: "c", text: "He uses exclusively analogue film techniques with no digital capture", isCorrect: false },
          { id: "d", text: "His technical complexity comes from extensive location scouting rather than in-studio techniques", isCorrect: false },
        ],
        explanation:
          "Sundsbø's preference for in-camera techniques — physical experimentation with mirrors, multiple exposures, unusual lighting setups, and camera movement — means his images are often as complex to shoot as to post-process. This gives them a physical quality that purely post-produced complexity lacks.",
      },
    },
    {
      id: "ss-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Pirelli Calendar (2009)" },
        {
          type: "paragraph",
          content:
            "The youngest photographer in Pirelli's history at the time. His calendar was technically extraordinary — simultaneously classical and futuristic. Technical ambition served beauty rather than overpowering it.",
        },
        { type: "heading", content: "Alexander McQueen Campaigns" },
        {
          type: "paragraph",
          content:
            "Working with McQueen's conceptual garments, Sundsbø matched the clothes' own ambition image for image. His technology met McQueen's pattern-cutting at the same radical extreme.",
        },
        { type: "heading", content: "W Magazine Editorials" },
        {
          type: "paragraph",
          content:
            "W's large format and appetite for experimentation made it his natural home. These spreads consistently demonstrate visual spectacle within commercial limits.",
        },
        { type: "heading", content: "Where Fashion Meets Abstraction" },
        {
          type: "paragraph",
          content:
            "Some of his most interesting work is barely recognisable as photography — the body becomes a field of light and form. These images show his technical ambition serves a genuine question: how far can representation go?",
        },
      ],
      quiz: {
        question: "What achievement did Sundsbø's Pirelli Calendar appointment in 2009 represent?",
        options: [
          { id: "a", text: "The first time a non-Italian photographer had been appointed", isCorrect: false },
          { id: "b", text: "He was the youngest photographer in the Pirelli Calendar's history at the time", isCorrect: true },
          { id: "c", text: "The first calendar to be shot entirely on digital equipment", isCorrect: false },
          { id: "d", text: "The highest-circulation calendar in the project's history", isCorrect: false },
        ],
        explanation:
          "At the time of his appointment, Sundsbø was the youngest photographer to shoot the Pirelli Calendar. This recognition confirmed his status as one of the leading fashion photographers of his generation and demonstrated that technical innovation was valued at the highest levels of commercial photography.",
      },
    },
    {
      id: "ss-04-techniques",
      title: "Techniques & Approach",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Research Before You Touch the Camera" },
        {
          type: "paragraph",
          content:
            "Before each project, Sundsbø digs into optics, physics, and materials science. He wants to know exactly what's achievable before he tries to achieve it.",
        },
        { type: "heading", content: "Test Until There Are No Surprises" },
        {
          type: "paragraph",
          content:
            "He spends serious time testing before the actual shoot — trying technique combinations until he understands their effects cold. By shoot day, the experiments are done.",
        },
        { type: "heading", content: "Post-Production as Co-Creation" },
        {
          type: "paragraph",
          content:
            "Sundsbø treats post-production artists as collaborators, not fixers. They're asked to contribute creative ideas — the digital darkroom is an extension of the shoot, not a cleanup operation.",
        },
        { type: "heading", content: "The Brief Is a Working Document" },
        {
          type: "paragraph",
          content:
            "His technical briefs aren't presentations — they're living documents that evolve through research and testing, full of theories about how to achieve specific effects.",
        },
      ],
      quiz: {
        question: "What distinguishes Sundsbø's use of post-production from a corrective approach?",
        options: [
          { id: "a", text: "He uses post-production exclusively for colour grading, not for compositional changes", isCorrect: false },
          { id: "b", text: "Post-production is treated as a continuation of the creative process, with artists asked to contribute rather than simply correct", isCorrect: true },
          { id: "c", text: "He always shows subjects the post-produced images and allows them to request changes", isCorrect: false },
          { id: "d", text: "Post-production is kept to a minimum to preserve the in-camera effects he creates", isCorrect: false },
        ],
        explanation:
          "Sundsbø treats post-production as a continuation of the creative process — a second shoot that extends and develops the images made in camera. Post-production artists are collaborators contributing creative ideas, not technicians correcting problems. This makes his final images the product of multiple creative conversations.",
      },
    },
    {
      id: "ss-05-legacy",
      title: "Influence & Legacy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Technical Innovation IS a Creative Language" },
        {
          type: "paragraph",
          content:
            "Sundsbø proved that technical ambition isn't a gimmick — it's a genuine way of seeing. He's expanded what fashion photography can say, and that vocabulary will be borrowed for decades.",
        },
        { type: "heading", content: "The SHOWstudio Generation" },
        {
          type: "paragraph",
          content:
            "He's part of a cohort shaped by Knight's lab: experiment constantly, cross disciplines, treat technology as creative material. Their influence on contemporary fashion photography is still growing.",
        },
        { type: "heading", content: "Graphic Design Made Him Better" },
        {
          type: "paragraph",
          content:
            "His design background gives his work a structural rigour that pure photography training rarely produces. You can see the composition theory in every frame.",
        },
        { type: "heading", content: "Built for Whatever Comes Next" },
        {
          type: "paragraph",
          content:
            "As AI reshapes what's technically possible, Sundsbø's methodology — treat every new tool as a creative opportunity — means he's already positioned for it. His practice is a mindset, not a fixed technique.",
        },
      ],
      quiz: {
        question: "Why does Sundsbø's practice position him well for the future of AI-assisted photography?",
        options: [
          { id: "a", text: "He has already invested heavily in AI photography companies", isCorrect: false },
          { id: "b", text: "His methodology — treating every new technology as a creative tool — is inherently adaptable to any new technology", isCorrect: true },
          { id: "c", text: "AI produces the specific kind of visual effects he has been trying to achieve manually", isCorrect: false },
          { id: "d", text: "He employs computer scientists on his creative team who will adapt quickly", isCorrect: false },
        ],
        explanation:
          "Sundsbø's approach is a methodology, not a fixed aesthetic: he treats every new technology as a potential creative tool and asks what it makes possible. This curiosity and adaptability means that as AI transforms photography's technical possibilities, his instinct to engage and experiment rather than resist will serve him well.",
      },
    },
    {
      id: "ss-06-learn",
      title: "What You Can Learn From Sundsbø",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Curiosity as Creative Method" },
        {
          type: "paragraph",
          content:
            "Sundsbø teaches that research, testing, and relentless curiosity are not pre-work — they are the work. Here's how to apply that to your own practice.",
        },
        { type: "heading", content: "1. Research Before You Shoot" },
        {
          type: "paragraph",
          content:
            "What does long exposure actually do to moving light? How does a mirror create a specific reflection? Understanding the physics makes your experimentation faster and smarter.",
        },
        { type: "heading", content: "2. Test Extensively" },
        {
          type: "paragraph",
          content:
            "Book a testing day before important shoots. Try the effects and techniques you plan to use. Eliminate the surprises before the real session begins.",
        },
        { type: "heading", content: "3. Try In-Camera Effects First" },
        {
          type: "paragraph",
          content:
            "Before opening Photoshop, try creating the effect in camera — multiple exposures, mirrors, gels, physical movement. In-camera effects have a physicality that filters don't.",
        },
        { type: "heading", content: "4. Learn a Related Discipline" },
        {
          type: "paragraph",
          content:
            "Sundsbø's graphic design background sets his work apart. Study film, design, fine art, or architecture. Cross-disciplinary knowledge is a competitive advantage.",
        },
        { type: "heading", content: "5. Embrace Every New Tool" },
        {
          type: "paragraph",
          content:
            "Don't form opinions about new technology before you've asked what it makes possible. AI, computational imaging, whatever comes next — curiosity first, judgment later.",
        },
      ],
      reflection: {
        prompt:
          "Sundsbø asks 'what has never been done before?' in every project. Looking at your own photographic practice, what technical limitation do you accept that you have never tried to overcome? What effect or image quality have you wished you could achieve but assumed was impossible? What would you need to research to try?",
      },
    },
  ],
}

export default course
