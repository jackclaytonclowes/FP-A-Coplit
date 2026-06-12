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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Nan Goldin (b. 1953, Washington D.C.)" },
        {
          type: "paragraph",
          content:
            "Nan Goldin was born in 1953 in Washington D.C. Her childhood was defined by trauma — her older sister Barbara committed suicide when Nan was 11, an event that would haunt her work and fuel her lifelong obsession with documenting the people she loved before they disappeared.",
        },
        {
          type: "paragraph",
          content:
            "At 18 she moved to Boston, then to New York, falling into the underground world of drag queens, sex workers, and artists in the late 1970s. She photographed this community from inside it — not as a documentarian but as a participant. Her camera was always with her, always on.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Photography From Inside the Frame" },
        {
          type: "paragraph",
          content:
            "Goldin's visual style is inseparable from her biography. She photographs her own life — her lovers, friends, community — from within. This is not journalism or documentary in the traditional sense; it is a form of visual diary, closer to autobiography than reportage.",
        },
        { type: "heading", content: "Flash Photography" },
        {
          type: "paragraph",
          content:
            "Goldin's signature technique is direct flash — typically an on-camera flash that creates harsh shadows, blown-out highlights, and red-eye. This was considered a technical 'mistake' by fine-art photography standards. Goldin made it her signature. The flash collapses distance; it makes images feel immediate and slightly uncomfortable, like an intrusion into private space.",
        },
        { type: "heading", content: "Colour and Rawness" },
        {
          type: "paragraph",
          content:
            "Where most photographers of her generation were working in black and white, Goldin used colour — often the lurid, oversaturated colour of a 35mm point-and-shoot. Skin tones are warm, shadows are deep, and everything carries the slightly feverish quality of late nights and cheap film.",
        },
        { type: "heading", content: "Intimacy as Subject" },
        {
          type: "paragraph",
          content:
            "The subject matter of her work is intimacy in all its forms: sex, tenderness, violence, grief, joy. She photographs couples in bed, friends after arguments, bruises after beatings. Nothing is off-limits — including her own face after being beaten by her then-boyfriend, an image she made deliberately and showed publicly.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Ballad of Sexual Dependency (1986)" },
        {
          type: "paragraph",
          content:
            "Goldin's masterwork: a slideshow of 700 images set to music, chronicling her social world from the 1970s to mid-80s. Originally screened at New York clubs — including the Mudd Club and Danceteria — it was later shown in galleries and published as a book. The Ballad documents love, sex, violence, addiction, and loss with unflinching candour.",
        },
        { type: "heading", content: "Nan One Month After Being Battered (1984)" },
        {
          type: "paragraph",
          content:
            "One of the most discussed photographs of the 20th century. Goldin's self-portrait, taken one month after her then-boyfriend Brian beat her severely. Showing bruised eye, red lipstick, direct gaze into the camera. It is both a document and an act of defiance.",
        },
        { type: "heading", content: "The Other Side (1992)" },
        {
          type: "paragraph",
          content:
            "A series documenting the transgender and drag communities Goldin had been part of since the 1970s. Made with the same intimacy and love as the Ballad, these images helped bring transgender lives into mainstream photographic discourse decades before it became culturally common.",
        },
        { type: "heading", content: "Sisters, Saints, and Sibyls (2004)" },
        {
          type: "paragraph",
          content:
            "A triptych video installation dedicated to her sister Barbara. It weaves together footage of saints and martyrs with images of Barbara's life and death. Goldin's most explicitly autobiographical and grief-driven work.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Photographing From Within" },
        {
          type: "paragraph",
          content:
            "The most important thing Goldin does technically is also the hardest: she is a genuine participant in the world she photographs. She was not visiting New York's underground — she lived in it. This is not a technique you can fake, but it points to a principle: the best documentary photography comes from proximity and trust.",
        },
        { type: "heading", content: "The Compact Camera" },
        {
          type: "paragraph",
          content:
            "For most of her career Goldin used a 35mm compact camera — small, unobtrusive, always available. This is a practical philosophy: the best camera is the one you have. The compact camera forced her to work with available light plus flash, which became her aesthetic.",
        },
        { type: "heading", content: "The Slideshow Format" },
        {
          type: "paragraph",
          content:
            "Goldin thinks in sequences and slideshows, not single images. The pairing and sequencing of images creates meaning that single images cannot. Music, pacing, and the juxtaposition of images in the Ballad creates an experience closer to cinema than to a gallery walk.",
        },
        { type: "heading", content: "Publishing as Practice" },
        {
          type: "paragraph",
          content:
            "Goldin has always believed in making her work accessible — through clubs, books, and now film. She resists the gatekeeping of the gallery world. The work belongs to the community it documents.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Goldin's Cultural Impact" },
        {
          type: "paragraph",
          content:
            "Nan Goldin fundamentally changed what photography was allowed to show. Before her work, the intimacy she depicted — sex, addiction, violence, queer life — was either invisible or treated as scandal. She made it art.",
        },
        { type: "heading", content: "Influence on Photography" },
        {
          type: "paragraph",
          content:
            "Virtually every photographer working in the 'confessional' or 'diary' mode — Wolfgang Tillmans, Juergen Teller, Harley Weir, Ryan McGinley — owes a direct debt to Goldin. She created the template for photography as personal testimony.",
        },
        { type: "heading", content: "The Opioid Activism" },
        {
          type: "paragraph",
          content:
            "In her seventies, Goldin became a prominent activist against the opioid crisis and the Sackler family, who funded many museums through profits from OxyContin. Her organisation P.A.I.N. staged die-in protests at the Louvre, the Guggenheim, and the Metropolitan Museum. Several major institutions subsequently removed the Sackler name from their buildings.",
        },
        { type: "heading", content: "All the Beauty and the Bloodshed (2022)" },
        {
          type: "paragraph",
          content:
            "Laura Poitras' documentary film about Goldin's life and activism won the Golden Lion at the Venice Film Festival — the first documentary to do so in 20 years. It brought her work and activism to a new global audience.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From Her Practice" },
        {
          type: "paragraph",
          content:
            "Goldin's work teaches lessons that go beyond technique. They are lessons about commitment, proximity, and the ethics of looking.",
        },
        { type: "heading", content: "1. Photograph Your Own World" },
        {
          type: "paragraph",
          content:
            "Goldin's most radical move was to photograph her own community from within it. The resulting intimacy is impossible to fake. Ask yourself: what world do you inhabit that no one else can photograph with the same authority?",
        },
        { type: "heading", content: "2. The Camera as Memory" },
        {
          type: "paragraph",
          content:
            "Goldin photographs to remember. She is explicit about this: photographs are a hedge against loss. This gives her work an urgency that more casual photography lacks. Photograph with that same sense of stakes.",
        },
        { type: "heading", content: "3. Embrace Technical 'Imperfection'" },
        {
          type: "paragraph",
          content:
            "Direct flash, red-eye, blown highlights — these were considered mistakes that Goldin turned into signatures. What 'imperfections' in your own work might actually be strengths you're suppressing?",
        },
        { type: "heading", content: "4. Sequence and Story" },
        {
          type: "paragraph",
          content:
            "Goldin thinks in series and slideshows. A single image is a fragment; a sequence is a life. Begin to think about how your images relate to one another and what new meaning their proximity creates.",
        },
        { type: "heading", content: "5. Art Has Stakes" },
        {
          type: "paragraph",
          content:
            "Goldin's life shows that photography is not separate from life — it is part of it. Her work on the opioid crisis, her grief, her joy: all are part of the same practice. Let your photography matter to you.",
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
