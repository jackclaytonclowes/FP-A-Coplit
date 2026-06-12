import type { Course } from "@/types"

const course: Course = {
  id: "nan-goldin",
  title: "Nan Goldin",
  slug: "nan-goldin",
  description:
    "A study of Nan Goldin — the photographer who made intimacy radical. From The Ballad of Sexual Dependency to her activist work against the opioid crisis, Goldin's diary-form photography changed everything.",
  category: "great-photographers",
  accentColor: "#e87777",
  estimatedHours: 3,
  tags: ["documentary", "diary", "portrait", "underground", "intimacy"],
  photographerId: "nan-goldin",
  lessons: [
    {
      id: "ng-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "She Photographed So She Wouldn't Forget" },
        {
          type: "paragraph",
          content:
            "Goldin's older sister committed suicide when Nan was 11. That loss became a lifelong obsession: document the people you love before they disappear.",
        },
        {
          type: "paragraph",
          content:
            "At 18 she landed in New York's underground — drag queens, sex workers, artists. She photographed this world from inside it. The camera was always on.",
        },
        {
          type: "heading",
          content: "A Life Fully Lived, Fully Documented",
        },
        {
          type: "list",
          items: [
            "1973: Begins photographing Boston's drag community",
            "1979: Moves to New York City's Lower East Side",
            "1985: 'The Ballad of Sexual Dependency' slideshow premieres at New York clubs",
            "1986: 'Ballad' published as a book to international acclaim",
            "1988: Goldin nearly dies of an overdose; photographs her own recovery",
            "2017: Publicly names the Sackler family in the opioid crisis; founds P.A.I.N.",
            "2022: Biographical film 'All the Beauty and the Bloodshed' wins Golden Lion at Venice",
          ],
        },
        {
          type: "quote",
          content: "I want to show what my life actually looks like, not what I want it to look like.",
          author: "Nan Goldin",
        },
      ],
      quiz: {
        question: "What personal tragedy in Nan Goldin's childhood fundamentally shaped her obsession with photographing those she loved?",
        options: [
          { id: "a", text: "Her father left the family when she was young", isCorrect: false },
          { id: "b", text: "Her older sister committed suicide when Goldin was 11", isCorrect: true },
          { id: "c", text: "She was seriously ill throughout her childhood", isCorrect: false },
          { id: "d", text: "Her childhood home burned down, destroying family photographs", isCorrect: false },
        ],
        explanation:
          "The suicide of her sister Barbara when Goldin was 11 was the defining event of her life. It created an urgent need to document and preserve the people she loved, and a lifelong awareness of how quickly people can be lost.",
      },
    },
    {
      id: "ng-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Photography From Inside the Frame" },
        {
          type: "paragraph",
          content:
            "Goldin doesn't document her community — she is her community. This isn't journalism. It's autobiography with a camera.",
        },
        { type: "heading", content: "Flash Is a Feature, Not a Bug" },
        {
          type: "paragraph",
          content:
            "Direct on-camera flash was a technical 'mistake' in fine art photography. Goldin made it her signature. The harsh light feels like an intrusion — which is exactly right.",
        },
        { type: "heading", content: "Lurid, Oversaturated, Alive" },
        {
          type: "paragraph",
          content:
            "While everyone else shot in black and white, Goldin used colour — the feverish, over-bright colour of 35mm film and late nights.",
        },
        { type: "heading", content: "Nothing Is Off-Limits" },
        {
          type: "paragraph",
          content:
            "Sex, tenderness, grief, bruises after beatings — she photographed all of it. Including her own face after her boyfriend beat her, which she showed publicly as an act of defiance.",
        },
        {
          type: "quote",
          content: "I photograph to remember. Photography is the only language I have.",
          author: "Nan Goldin",
        },
      ],
      quiz: {
        question: "Which technical approach — often considered a flaw — became Goldin's signature?",
        options: [
          { id: "a", text: "Extreme shallow depth of field", isCorrect: false },
          { id: "b", text: "Direct on-camera flash", isCorrect: true },
          { id: "c", text: "Long exposure motion blur", isCorrect: false },
          { id: "d", text: "Infrared film", isCorrect: false },
        ],
        explanation:
          "Direct on-camera flash — considered a technical error in fine-art photography — became Goldin's defining visual signature. It creates harsh, intimate images that feel raw, immediate, and uncomfortably close to their subjects.",
      },
    },
    {
      id: "ng-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Ballad of Sexual Dependency — A Life in Slides" },
        {
          type: "paragraph",
          content:
            "700 images, music, New York clubs. Later a book, later a gallery. It documents love, sex, addiction, loss — with zero flinching.",
        },
        { type: "heading", content: "Nan One Month After Being Battered — A Self-Portrait of Defiance" },
        {
          type: "paragraph",
          content:
            "Bruised eye, red lipstick, direct gaze. Goldin photographed her own face after being beaten and showed it publicly. Both a document and an act of war.",
        },
        { type: "heading", content: "The Other Side — Before It Was Mainstream" },
        {
          type: "paragraph",
          content:
            "Goldin documented transgender and drag lives in the 1970s — with the same love she gave everyone else, decades before the culture caught up.",
        },
        { type: "heading", content: "Sisters, Saints, and Sibyls — Grief as Art" },
        {
          type: "paragraph",
          content:
            "A video triptych dedicated to her sister Barbara. Footage of saints and martyrs woven with images of Barbara's life and death. Her most personal work.",
        },
      ],
      quiz: {
        question: "Where did 'The Ballad of Sexual Dependency' originally premiere before becoming a gallery work?",
        options: [
          { id: "a", text: "The Museum of Modern Art, New York", isCorrect: false },
          { id: "b", text: "New York nightclubs including the Mudd Club", isCorrect: true },
          { id: "c", text: "The Venice Biennale", isCorrect: false },
          { id: "d", text: "A commercial gallery in SoHo", isCorrect: false },
        ],
        explanation:
          "The Ballad began as a slideshow screened at New York nightclubs — the Mudd Club, Danceteria — making it available to the community it documented. Only later did it enter the gallery and museum world, bringing with it the raw energy of its origins.",
      },
    },
    {
      id: "ng-04-techniques",
      title: "Techniques & Approach",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "You Can't Fake Being There" },
        {
          type: "paragraph",
          content:
            "Goldin lived in the world she photographed. That's not a technique — it's a commitment. But it points to a principle: real access comes from real trust.",
        },
        { type: "heading", content: "Carry Something Small" },
        {
          type: "paragraph",
          content:
            "A 35mm compact camera goes everywhere. That's the philosophy: the best camera is the one you always have. The built-in flash was a bonus she turned into an aesthetic.",
        },
        { type: "heading", content: "Think in Slideshows" },
        {
          type: "paragraph",
          content:
            "Goldin sequences images like a director cuts film. Music, pacing, juxtaposition — the Ballad is closer to cinema than to a gallery walk.",
        },
        { type: "heading", content: "The Work Belongs to the Community" },
        {
          type: "paragraph",
          content:
            "Clubs, books, film — Goldin makes her work accessible. She resists gatekeeping. The people she photographs should be able to see their own story.",
        },
      ],
      quiz: {
        question: "What type of camera did Goldin primarily use throughout her career, and why is this significant?",
        options: [
          { id: "a", text: "A large-format view camera, for maximum image quality", isCorrect: false },
          { id: "b", text: "A medium-format Hasselblad, for tonal range", isCorrect: false },
          { id: "c", text: "A 35mm compact camera — small, available, unobtrusive", isCorrect: true },
          { id: "d", text: "A professional DSLR with interchangeable lenses", isCorrect: false },
        ],
        explanation:
          "Goldin's use of a compact 35mm camera was central to her practice. Its small size meant it was always with her; its built-in flash created her signature aesthetic; and its accessibility made photography feel like writing in a diary rather than a professional act.",
      },
    },
    {
      id: "ng-05-legacy",
      title: "Influence & Legacy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "She Made Invisible Lives Visible" },
        {
          type: "paragraph",
          content:
            "Before Goldin, intimacy of this kind — sex, addiction, queer life, violence — was either invisible or scandalous in art. She made it art.",
        },
        { type: "heading", content: "The Template for Diary Photography" },
        {
          type: "paragraph",
          content:
            "Tillmans, Teller, Weir, McGinley — every photographer working in the confessional or diary mode owes a direct debt to Goldin. She invented the template.",
        },
        { type: "heading", content: "She Took On the Sacklers" },
        {
          type: "paragraph",
          content:
            "In her seventies, Goldin founded P.A.I.N. and staged die-in protests at the Louvre, the Guggenheim, the Met. Multiple institutions removed the Sackler name. Art as activism.",
        },
        { type: "heading", content: "Golden Lion — The Film World Noticed Too" },
        {
          type: "paragraph",
          content:
            "Laura Poitras' documentary about Goldin's life won the Venice Golden Lion in 2022 — the first documentary to do so in 20 years. New audience, same story.",
        },
      ],
      quiz: {
        question: "What is P.A.I.N., the organisation Goldin founded in her later career?",
        options: [
          { id: "a", text: "A photography archive preserving her complete body of work", isCorrect: false },
          { id: "b", text: "An activist group targeting the Sackler family's role in the opioid crisis", isCorrect: true },
          { id: "c", text: "A grant programme supporting emerging queer photographers", isCorrect: false },
          { id: "d", text: "An exhibition space dedicated to documentary photography", isCorrect: false },
        ],
        explanation:
          "Prescription Addiction Intervention Now (P.A.I.N.) is Goldin's activist organisation, formed after her near-fatal OxyContin addiction. It has staged protests at major museums — including the Louvre and the Guggenheim — pressuring them to sever ties with the Sackler family.",
      },
    },
    {
      id: "ng-06-learn",
      title: "What You Can Learn From Goldin",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Five Things to Steal From Goldin" },
        {
          type: "paragraph",
          content:
            "Goldin's lessons go way beyond technique. They're about commitment, proximity, and why photographs matter.",
        },
        { type: "heading", content: "1. Photograph Your Own World" },
        {
          type: "paragraph",
          content:
            "What world do you inhabit that no one else can photograph with the same authority? Start there.",
        },
        { type: "heading", content: "2. The Camera as Memory" },
        {
          type: "paragraph",
          content:
            "Goldin photographs to remember. Give your photography the same urgency — shoot like you might not get another chance.",
        },
        { type: "heading", content: "3. Embrace Technical 'Imperfection'" },
        {
          type: "paragraph",
          content:
            "Red-eye, blown highlights, harsh flash — Goldin turned 'mistakes' into signatures. What so-called flaws in your work might actually be strengths?",
        },
        { type: "heading", content: "4. Sequence and Story" },
        {
          type: "paragraph",
          content:
            "A single image is a fragment. A sequence is a life. Start thinking about how your images work together.",
        },
        { type: "heading", content: "5. Art Has Stakes" },
        {
          type: "paragraph",
          content:
            "Goldin's photography and her activism are the same practice. Let your work matter to you — and to someone else.",
        },
      ],
      reflection: {
        prompt:
          "Goldin says: 'I photograph to remember.' What in your own life are you most afraid of forgetting? What community or world do you inhabit that you could document from the inside?",
      },
    },
  ],
}

export default course
