import type { Course } from "@/types"

const course: Course = {
  id: "nick-knight",
  title: "Nick Knight",
  slug: "nick-knight",
  description:
    "A study of Nick Knight — fashion photography's most restless experimenter. From iconic campaigns to SHOWstudio, Knight has continually pushed what a fashion image can be.",
  category: "great-photographers",
  accentColor: "#47b8e8",
  estimatedHours: 3,
  tags: ["fashion", "digital", "experimental", "conceptual", "editorial"],
  photographerId: "nick-knight",
  lessons: [
    {
      id: "nk-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Nick Knight (b. 1958, London)" },
        {
          type: "paragraph",
          content:
            "Nick Knight was born in 1958 in London. He studied photography at Bournemouth and Poole College of Art, graduating in 1982 with a degree and with his first major project already made: a documentation of 100 skinheads in Bournemouth that became a book. The project showed his early interest in communities existing outside mainstream culture.",
        },
        {
          type: "paragraph",
          content:
            "By the mid-1980s Knight was shooting regularly for i-D magazine. His work attracted the attention of Yohji Yamamoto, who commissioned him for his 1986 catalogue — a collaboration that would prove seminal, establishing a template for intellectually rigorous fashion photography where garment and concept were inseparable.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "1982: Graduates with '100 Skinheads' project",
            "1986: Yohji Yamamoto A/W catalogue — a turning point in fashion photography",
            "1992: Appointed creative director of Tank magazine",
            "2000: Founds SHOWstudio, the world's first fashion film website",
            "2010: First fashion photographer to be appointed OBE",
            "2016: Collaborates with Lady Gaga on 'Applause' — fashion photography as moving image",
          ],
        },
        {
          type: "quote",
          content: "I want to make images that have never been seen before. If I'm repeating myself, I've failed.",
          author: "Nick Knight",
        },
      ],
      quiz: {
        question: "What was the subject of Nick Knight's graduation project, and why was it significant?",
        options: [
          { id: "a", text: "A documentation of 100 drag queens in London's West End", isCorrect: false },
          { id: "b", text: "A documentation of 100 skinheads in Bournemouth", isCorrect: true },
          { id: "c", text: "A series of fashion portraits for British Vogue", isCorrect: false },
          { id: "d", text: "Architectural photographs of Brutalist buildings", isCorrect: false },
        ],
        explanation:
          "Knight's graduation project documented 100 skinheads in Bournemouth. It revealed his early interest in subcultures outside the mainstream — a theme that would persist in his fashion work — and was published as a book, marking an early commercial and critical success.",
      },
    },
    {
      id: "nk-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Concept as Image" },
        {
          type: "paragraph",
          content:
            "Nick Knight's visual style is defined by one consistent principle: the image must embody an idea. Unlike photographers who develop a recognisable aesthetic, Knight's work looks radically different from decade to decade. What is consistent is conceptual ambition — the sense that every image has been thought about deeply before it is made.",
        },
        { type: "heading", content: "Colour as Concept" },
        {
          type: "paragraph",
          content:
            "Knight uses colour with unusual deliberateness. His colour work is never naturalistic — colours are heightened, shifted, and made strange. A face might be entirely cyan. A background might be a single field of vivid red. Colour in Knight's images is not a record of reality but a tool for creating emotional and conceptual states.",
        },
        { type: "heading", content: "Digital Manipulation" },
        {
          type: "paragraph",
          content:
            "Knight was among the first fashion photographers to embrace digital manipulation fully — not as retouching but as an expressive medium. He works extensively with post-production, sometimes creating images that bear little resemblance to what was in front of the camera. He sees no fundamental difference between photography and painting in the digital age.",
        },
        { type: "heading", content: "Collaborations With Designers" },
        {
          type: "paragraph",
          content:
            "Knight's deepest collaborations have been with designers who share his conceptual ambition: Yohji Yamamoto, Alexander McQueen, John Galliano, Rei Kawakubo. These collaborations produced work where fashion and photography were genuinely inseparable — neither served the other; both served the idea.",
        },
        {
          type: "quote",
          content: "Fashion photography has always been about the future. It shows us what we could be.",
          author: "Nick Knight",
        },
      ],
      quiz: {
        question: "How does Nick Knight use colour differently from most fashion photographers?",
        options: [
          { id: "a", text: "He always works in black and white to avoid colour distraction", isCorrect: false },
          { id: "b", text: "He uses naturalistic colour to document subjects truthfully", isCorrect: false },
          { id: "c", text: "He uses colour as a conceptual tool, heightening and shifting it to create ideas not record reality", isCorrect: true },
          { id: "d", text: "He relies entirely on in-camera colour profiles without post-processing", isCorrect: false },
        ],
        explanation:
          "Knight treats colour as an expressive and conceptual tool. Faces might be entirely one colour; backgrounds become fields of vivid hue. His colour is never simply a record of what was there — it is a choice made to produce a specific emotional or conceptual effect.",
      },
    },
    {
      id: "nk-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Yohji Yamamoto A/W 1986 Catalogue" },
        {
          type: "paragraph",
          content:
            "Considered one of the most influential fashion photography catalogues ever made. Knight photographed Yamamoto's deconstructed, anti-fashion garments with the same intellectual rigour the designer brought to their creation. The images were stark, graphic, and entirely unlike anything else in fashion at the time.",
        },
        { type: "heading", content: "Alexander McQueen: No. 13 (1999)" },
        {
          type: "paragraph",
          content:
            "Knight documented McQueen's seminal show No. 13, which ended with model Shalom Harlow being spray-painted by two industrial robots while wearing a white tutu. The images Knight made of this moment are among the most celebrated in fashion history — a perfect collision of performance, technology, and beauty.",
        },
        { type: "heading", content: "Roses (2007)" },
        {
          type: "paragraph",
          content:
            "A photographic still life series in which Knight scanned flowers at extremely high resolution on a flatbed scanner, then digitally manipulated the results. The images hover between photography and painting, between the clinical and the transcendent. Published as a book with an introduction by Damon Albarn.",
        },
        { type: "heading", content: "SHOWstudio" },
        {
          type: "paragraph",
          content:
            "Founded in 2000, SHOWstudio was the world's first fashion film website — live streaming fashion shows, making behind-the-scenes film, and experimenting with fashion as a moving image. It was a complete reinvention of how fashion images are made, distributed, and consumed.",
        },
      ],
      quiz: {
        question: "What happened at the climax of the Alexander McQueen show 'No. 13' that Knight documented?",
        options: [
          { id: "a", text: "A live painting was executed on a canvas by the designer himself", isCorrect: false },
          { id: "b", text: "Model Shalom Harlow was spray-painted by two industrial robots", isCorrect: true },
          { id: "c", text: "The collection was set on fire at the end of the runway", isCorrect: false },
          { id: "d", text: "A hologram of Isabella Blow appeared at the finale", isCorrect: false },
        ],
        explanation:
          "The climax of McQueen's No. 13 show featured model Shalom Harlow in a white tutu being spray-painted by two industrial robots. It was a perfect intersection of fashion, performance, and technology — one of the most celebrated moments in fashion show history.",
      },
    },
    {
      id: "nk-04-techniques",
      title: "Techniques & Approach",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Brief as Starting Point" },
        {
          type: "paragraph",
          content:
            "Knight always begins with the idea, not the camera. He writes briefs — sometimes elaborate conceptual documents — before any shooting takes place. This means his work always has a purposeful quality, a sense of direction, even when the final image is arrived at through experiment.",
        },
        { type: "heading", content: "Technology as Collaborator" },
        {
          type: "paragraph",
          content:
            "Knight actively seeks out new technologies — flatbed scanners, motion capture, digital painting, AI — not as gimmicks but as genuine collaborators. He asks: what can this tool do that a camera cannot? What new image does this technology make possible? This keeps his work perpetually at the edge of what is possible.",
        },
        { type: "heading", content: "Fashion Film" },
        {
          type: "paragraph",
          content:
            "Through SHOWstudio, Knight became a pioneer of fashion film — short films in which fashion is not documented but activated through movement, music, and narrative. He saw early that fashion's future was moving image, and spent decades developing a grammar for the form.",
        },
        { type: "heading", content: "Collaborating With Artists" },
        {
          type: "paragraph",
          content:
            "Knight frequently works with artists outside fashion — musicians, fine artists, technologists. He sees no boundary between fashion photography and art photography. His most ambitious work exists in the space between these worlds.",
        },
      ],
      quiz: {
        question: "What did Knight found in 2000 that revolutionised how fashion images were distributed?",
        options: [
          { id: "a", text: "A print magazine dedicated to experimental fashion photography", isCorrect: false },
          { id: "b", text: "SHOWstudio — the world's first fashion film website", isCorrect: true },
          { id: "c", text: "A photography school in London focused on fashion", isCorrect: false },
          { id: "d", text: "An AI company developing tools for fashion design", isCorrect: false },
        ],
        explanation:
          "SHOWstudio, founded in 2000, was the world's first fashion film website. It revolutionised fashion image-making by streaming shows live, creating fashion films, and treating fashion as a time-based medium — years before this became standard industry practice.",
      },
    },
    {
      id: "nk-05-legacy",
      title: "Influence & Legacy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Fashion Photography's Most Restless Mind" },
        {
          type: "paragraph",
          content:
            "Nick Knight's legacy is inseparable from his perpetual dissatisfaction with the status quo. Where most photographers find their visual language and refine it over decades, Knight continually abandons and rebuilds his. This has made him genuinely difficult to categorise — and genuinely irreplaceable.",
        },
        { type: "heading", content: "Digital Fashion Photography" },
        {
          type: "paragraph",
          content:
            "Knight proved that digital manipulation was not a debasement of photography but a legitimate extension of it. He gave permission to a generation of photographers to use post-production as expressively as they used a camera. Every heavily manipulated fashion image owes something to his willingness to break the documentary compact.",
        },
        { type: "heading", content: "Fashion Film" },
        {
          type: "paragraph",
          content:
            "The now-ubiquitous fashion film — a staple of every major brand's content strategy — was anticipated and largely invented by Knight through SHOWstudio. He saw that fashion needed time as well as space, and that the grammar of film offered tools photography never could.",
        },
        { type: "heading", content: "Mentorship" },
        {
          type: "paragraph",
          content:
            "Through SHOWstudio, Knight has given platforms to hundreds of emerging photographers, stylists, and filmmakers. He is known for his generosity with emerging talent and his belief that fashion's future depends on experimental thinking at every level.",
        },
      ],
      quiz: {
        question: "What permission did Knight give to subsequent generations of fashion photographers through his work?",
        options: [
          { id: "a", text: "Permission to shoot entirely on film and resist digital workflows", isCorrect: false },
          { id: "b", text: "Permission to use post-production and digital manipulation as expressive tools, not just retouching", isCorrect: true },
          { id: "c", text: "Permission to refuse all commercial assignments and only make personal work", isCorrect: false },
          { id: "d", text: "Permission to exclusively photograph subcultures rather than mainstream fashion", isCorrect: false },
        ],
        explanation:
          "Knight demonstrated that digital manipulation was a legitimate expressive medium — not a debasement of photography. He gave subsequent photographers permission to treat post-production as creatively as they treated the camera, opening up new possibilities for what fashion images could look like.",
      },
    },
    {
      id: "nk-06-learn",
      title: "What You Can Learn From Knight",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From His Practice" },
        {
          type: "paragraph",
          content:
            "Knight's work challenges photographers to think more expansively about what an image is and what technology is for.",
        },
        { type: "heading", content: "1. Begin With the Idea, Not the Camera" },
        {
          type: "paragraph",
          content:
            "Before you shoot, write down what the image is meant to communicate. What feeling, idea, or argument should it make? Images with clear conceptual intention — even when the concept is simple — tend to be stronger than images made instinctively without preparation.",
        },
        { type: "heading", content: "2. See Technology as a Creative Tool" },
        {
          type: "paragraph",
          content:
            "Every tool available to you — from a phone camera to AI generation to flatbed scanning — is a legitimate creative medium. Ask not 'is this proper photography?' but 'what does this tool make possible that other tools do not?'",
        },
        { type: "heading", content: "3. Embrace Reinvention" },
        {
          type: "paragraph",
          content:
            "Knight has never allowed himself to repeat himself. He finds a visual language, exploits it, and moves on. Consider deliberately making work that looks nothing like your previous work. What do you learn when you destabilise your own aesthetic?",
        },
        { type: "heading", content: "4. Collaborate Across Disciplines" },
        {
          type: "paragraph",
          content:
            "Knight's best work happens in collaboration — with designers, musicians, artists, technologists. Seek collaborators outside photography. What can a graphic designer, a filmmaker, a coder bring to your photographic practice?",
        },
        { type: "heading", content: "5. Consider Time as Well as Space" },
        {
          type: "paragraph",
          content:
            "Knight's move into fashion film recognised that a still image can only tell part of a story. Consider what your images would look like as moving images, as sequences, as films. How does time change what you're trying to say?",
        },
      ],
      reflection: {
        prompt:
          "Knight never repeats himself. Look at your last 20 photographs. What visual habits have you developed that might be limiting you? What would happen if you tried to make images that looked nothing like your usual work?",
      },
    },
  ],
}

export default course
