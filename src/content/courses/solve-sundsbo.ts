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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Sølve Sundsbø (b. 1970, Ålesund, Norway)" },
        {
          type: "paragraph",
          content:
            "Sølve Sundsbø was born in 1970 in Ålesund, Norway, and studied graphic design before discovering photography. He moved to London in the early 1990s and began assisting photographers — most significantly Nick Knight, whose SHOWstudio ethos of constant experimentation and technological curiosity shaped Sundsbø's entire approach to the medium.",
        },
        {
          type: "paragraph",
          content:
            "Sundsbø's early editorial work for magazines including Dazed & Confused and AnOther established him as one of the most technically innovative photographers of his generation. His images consistently push the boundaries of what photography can look like — not through post-production manipulation but through physical and technical experimentation during the shoot itself.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "Early 1990s: Moves to London; assists Nick Knight",
            "Late 1990s: Begins editorial career for Dazed and AnOther",
            "2000s: Regular contributor to French Vogue, W Magazine, and major fashion houses",
            "2009: Appointed to shoot Pirelli Calendar — the youngest photographer in the calendar's history at that time",
            "Ongoing: One of the most technically experimental fashion photographers working today",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Technical Ambition as Aesthetic" },
        {
          type: "paragraph",
          content:
            "Sundsbø's visual style is defined by technical ambition — each image seems to be asking 'what has never been done before?' His work is characterised by extraordinary visual complexity: bodies multiplied and fragmented, movement frozen in ways that reveal the physics of motion, light behaving as if it followed different laws.",
        },
        { type: "heading", content: "Physical Experimentation" },
        {
          type: "paragraph",
          content:
            "Where many technically ambitious photographers rely on post-production to create complexity, Sundsbø prefers physical experimentation. He uses mirrors, multiple exposures, unusual lighting setups, and camera movements during long exposures to create effects that are in-camera rather than post-produced. The images are often as complex to light and shoot as to post-process.",
        },
        { type: "heading", content: "The Sculptural Body" },
        {
          type: "paragraph",
          content:
            "Like his mentor Knight, Sundsbø treats the body as a sculptural subject — interested in its forms, its movement, and its visual possibilities as a formal object. His images often present the body in ways that reveal its geometry rather than its social identity: fragments, silhouettes, repeated motifs.",
        },
        { type: "heading", content: "Colour as Architecture" },
        {
          type: "paragraph",
          content:
            "Sundsbø's colour work is highly architectural — colours are used to create spatial depth, to separate planes, and to construct images that feel three-dimensional. His colour choices are rarely naturalistic; they are designed to serve the formal structure of the image.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Pirelli Calendar (2009)" },
        {
          type: "paragraph",
          content:
            "Sundsbø was the youngest photographer in the Pirelli Calendar's history at the time of his appointment. His calendar was technically extraordinary — using multiple exposures, unusual lighting, and physical effects to create images that felt simultaneously classical and futuristic. It demonstrated that technical ambition could serve classical beauty rather than overpower it.",
        },
        { type: "heading", content: "Work for Alexander McQueen" },
        {
          type: "paragraph",
          content:
            "Sundsbø's campaigns for Alexander McQueen are among the most technically ambitious in fashion photography. Working with McQueen's conceptual garments, he created images that matched the clothes' ambition — using technology as McQueen used pattern and material, to exceed the limits of what should be possible.",
        },
        { type: "heading", content: "Editorial for W Magazine" },
        {
          type: "paragraph",
          content:
            "Sundsbø's editorial work for W Magazine consistently demonstrates his ability to create visual spectacle within commercial constraints. W's large format and openness to visual experimentation made it a natural home for his work.",
        },
        { type: "heading", content: "Beauty and Abstraction" },
        {
          type: "paragraph",
          content:
            "Some of Sundsbø's most interesting work sits at the boundary of fashion and abstraction — images where the subject is barely identifiable as a person, where the body has become a field of light and form. These images demonstrate that his technical ambition serves a genuine interest in the limits of representation.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Research Phase" },
        {
          type: "paragraph",
          content:
            "Before each major project, Sundsbø undertakes an extensive research phase — exploring not just visual references but scientific and technical research into the effects he wants to create. He studies optics, physics, and the specific properties of materials in order to understand what is technically achievable and how to achieve it.",
        },
        { type: "heading", content: "Testing and Experimentation" },
        {
          type: "paragraph",
          content:
            "Sundsbø conducts extensive testing before his shoots — trying different combinations of technique to understand their effects before committing to a final approach. This investment in testing means that by the time the shoot begins, he has eliminated the surprises and can focus on execution.",
        },
        { type: "heading", content: "Collaboration With Post-Production" },
        {
          type: "paragraph",
          content:
            "Though he prefers in-camera effects, Sundsbø works closely with post-production artists — treating the digital darkroom as a continuation of the shoot rather than a separate process. This collaboration is creative, not corrective: post-production artists are asked to contribute to the image, not simply to clean it up.",
        },
        { type: "heading", content: "The Technical Brief" },
        {
          type: "paragraph",
          content:
            "Sundsbø provides detailed technical briefs — not just visual references but precise descriptions of the effects he wants to achieve and his theories about how to achieve them. These briefs are working documents, not presentations; they evolve through the research and testing phase.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Technical Innovation as Creative Language" },
        {
          type: "paragraph",
          content:
            "Sundsbø's most significant contribution is demonstrating that technical innovation can be a genuine creative language — not a gimmick, but a way of seeing and expressing ideas that no other approach can achieve. He has expanded the vocabulary of fashion photography in ways that will be drawn on for decades.",
        },
        { type: "heading", content: "The SHOWstudio Generation" },
        {
          type: "paragraph",
          content:
            "Sundsbø is part of a generation of photographers who came through the SHOWstudio environment and share its ethos: constant experimentation, interdisciplinary practice, technology as tool. This generation's influence on contemporary fashion photography is significant and growing.",
        },
        { type: "heading", content: "Graphic Design Background" },
        {
          type: "paragraph",
          content:
            "Sundsbø's graphic design background gives his work a formal sophistication that purely photographic training rarely produces. His understanding of composition, typography, and visual communication theory is traceable in the structural rigour of his images.",
        },
        { type: "heading", content: "The Next Generation" },
        {
          type: "paragraph",
          content:
            "As AI and computational photography transform what is technically possible, Sundsbø's approach — treating every new technology as a potential creative tool — positions him well to work with whatever comes next. His practice is a methodology rather than a fixed aesthetic.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From His Practice" },
        {
          type: "paragraph",
          content:
            "Sundsbø teaches curiosity, research, and the creative possibilities of technical ambition.",
        },
        { type: "heading", content: "1. Research Before You Shoot" },
        {
          type: "paragraph",
          content:
            "Before your next technically ambitious project, research the physics of what you're trying to achieve. What does long exposure actually do to moving light? How does a mirror create a specific kind of reflection? Understanding the principles makes the experimentation more efficient.",
        },
        { type: "heading", content: "2. Test Extensively" },
        {
          type: "paragraph",
          content:
            "Invest in a testing session before important shoots. Spend a day experimenting with the effects, lighting setups, or techniques you want to use. The testing session costs time but saves the shoot — by the time the actual session begins, you've eliminated the surprises.",
        },
        { type: "heading", content: "3. Try In-Camera Effects" },
        {
          type: "paragraph",
          content:
            "Before reaching for Photoshop, try to create the effect you want in camera: multiple exposures, long exposures, mirrors, gels, physical movement. In-camera effects have a quality that digital effects rarely match, and the process of achieving them teaches you something that applying a filter never does.",
        },
        { type: "heading", content: "4. Learn a Related Discipline" },
        {
          type: "paragraph",
          content:
            "Sundsbø's graphic design background gives his photography a formal dimension that pure photography training lacks. Study an adjacent discipline — film, graphic design, fine art, architecture. The cross-disciplinary knowledge will distinguish your work.",
        },
        { type: "heading", content: "5. Embrace Every New Tool" },
        {
          type: "paragraph",
          content:
            "Rather than resisting new technologies, approach each one as Sundsbø does: with curiosity about what it makes possible. What can AI photography do that camera photography cannot? What does computational imaging enable that was previously impossible? Ask these questions before forming opinions.",
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
