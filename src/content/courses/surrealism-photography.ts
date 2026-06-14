import type { Course } from "@/types"

const course: Course = {
  id: "surrealism-photography",
  title: "Surrealism in Photography",
  slug: "surrealism-photography",
  description:
    "A study of Surrealism's relationship with photography — from Man Ray and Lee Miller through to contemporary photographers who work in a surrealist register.",
  category: "style-movements",
  accentColor: "#7847c8",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Dali_Atomicus_%281948%29_by_Philippe_Halsman.jpg/1280px-Dali_Atomicus_%281948%29_by_Philippe_Halsman.jpg",
  estimatedHours: 3,
  tags: ["surrealism", "conceptual", "dream", "experimental", "dada"],
  lessons: [
    {
      id: "sp-01-origins",
      title: "Origins & History",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Camera as Mechanical Unconscious" },
        {
          type: "paragraph",
          content:
            "Breton's 1924 Surrealist Manifesto wanted images from the unconscious — bypassing rational control entirely. The camera was perfect: it records without thinking. A mechanical unconscious.",
        },
        {
          type: "paragraph",
          content:
            "Man Ray arrived in Paris in 1921 already making cameraless photographs he called rayographs. He found in the surrealist circle the theoretical framework for what he was doing intuitively. Surrealism needed photography. Photography needed surrealism.",
        },
        {
          type: "heading",
          content: "The Happy Accident Becomes Method",
        },
        {
          type: "paragraph",
          content:
            "Automatism — producing images without conscious control — found its photographic form in cameraless images, solarisation, double exposures, and montage. The 'mistake' wasn't a failure; it was a technique.",
        },
        {
          type: "list",
          items: [
            "1924: Breton's Surrealist Manifesto published in Paris",
            "1921: Man Ray arrives in Paris, begins rayograph experiments",
            "1924: Man Ray's Le Violon d'Ingres — the movement's iconic image",
            "1929: Lee Miller discovers solarisation by accident in Man Ray's darkroom",
            "1930s: Dora Maar, Hans Bellmer, Claude Cahun expand surrealist photography",
            "1936: International Surrealist Exhibition in London brings movement to Britain",
          ],
        },
        {
          type: "quote",
          content: "Photography is not taken, it is made.",
          author: "Man Ray",
        },
      ],
      quiz: {
        question: "Why did the surrealists consider photography uniquely suited to their aims?",
        options: [
          { id: "a", text: "Because photography was technically difficult and required intense concentration to master", isCorrect: false },
          { id: "b", text: "Because the camera's automatic, mechanical recording bypassed conscious control, making it a kind of mechanical unconscious", isCorrect: true },
          { id: "c", text: "Because photographs could be printed in large editions and distributed widely as political material", isCorrect: false },
          { id: "d", text: "Because photography's realism made it more shocking than painting when depicting disturbing content", isCorrect: false },
        ],
        explanation:
          "The surrealists valued photography's automatism — its mechanical, non-intentional quality. Unlike painting, where every mark is a conscious decision, photography records whatever is in front of it. This made the camera seem like a tool that could access reality beneath conscious perception, a mechanical version of the automatic writing the surrealists used to access the unconscious.",
      },
    },
    {
      id: "sp-02-practitioners",
      title: "Key Practitioners",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Man Ray (1890–1976)" },
        {
          type: "paragraph",
          content:
            "Rayographs. Solarisation. Objects on sensitised paper exposed to light. Man Ray's techniques became the visual vocabulary of surrealist photography — ghostly, reversed, simultaneously real and abstract.",
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Man_Ray_Salvador_Dali.jpg/1280px-Man_Ray_Salvador_Dali.jpg",
          caption: "Man Ray, Portrait of Salvador Dalí — Man Ray's portraiture extended his experimental practice; he photographed the leading surrealist figures of Paris",
          alt: "Man Ray's portrait photograph of Salvador Dalí",
        },
        { type: "heading", content: "Lee Miller (1907–1977)" },
        {
          type: "paragraph",
          content:
            "Started as Man Ray's muse. Ended up surpassing him. She accidentally switched on the darkroom light mid-exposure and discovered solarisation. Her portraits have a psychological depth his often lack.",
        },
        { type: "heading", content: "Dora Maar (1907–1997)" },
        {
          type: "paragraph",
          content:
            "Known primarily as Picasso's lover — but Maar was a serious surrealist photographer in her own right. Her photomontages had political teeth, combining documentary and manipulation to create social commentary.",
        },
        { type: "heading", content: "Hans Bellmer (1902–1975) and Claude Cahun (1894–1954)" },
        {
          type: "paragraph",
          content:
            "Bellmer's doll photographs — distorted, fragmented, deeply disturbing — are surrealism's darkest corner. Cahun's androgynous self-portraits explored gender and identity decades before the conversation existed.",
        },
        {
          type: "quote",
          content: "I am not a Surrealist. I am the Surrealist.",
          author: "Man Ray",
        },
      ],
      quiz: {
        question: "How was solarisation discovered by Lee Miller?",
        options: [
          { id: "a", text: "She developed a new chemical formula for the developer solution that reversed tonal values", isCorrect: false },
          { id: "b", text: "She accidentally switched on the darkroom light during a print exposure, creating halos of reversed tone around forms", isCorrect: true },
          { id: "c", text: "She discovered it by studying early photographic experiments from the 1800s", isCorrect: false },
          { id: "d", text: "She found that overexposing negatives by several stops created a similar tonal reversal effect", isCorrect: false },
        ],
        explanation:
          "The discovery of solarisation is one of photography's great happy accidents. Miller switched on the darkroom light while a print was still developing. The sudden additional exposure reversed the tonal values at the edges of forms, creating a distinctive halo. Man Ray and Miller recognised the effect's surrealist potential and developed it into a systematic technique.",
      },
    },
    {
      id: "sp-03-characteristics",
      title: "Visual Characteristics",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Dream Logic: Put Unrelated Things Together" },
        {
          type: "paragraph",
          content:
            "The central surrealist move is the non-sequitur: elements with no rational relationship placed together. The result is associative, emotional, charged — just like dreams.",
        },
        { type: "heading", content: "Make the Familiar Weird" },
        {
          type: "paragraph",
          content:
            "Freud called it the unheimlich — the uncanny. The most disturbing surrealist images take ordinary things and make them strange through unexpected context or treatment. The strangeness works because the familiar was real first.",
        },
        { type: "heading", content: "The Body as Landscape, Object, Dream" },
        {
          type: "paragraph",
          content:
            "Surrealist photography returns obsessively to body distortion: doubled, fragmented, solarised into something inhuman. The body is never just a body — it becomes material for transformation.",
        },
        { type: "heading", content: "Scale Disruption and Double Exposure" },
        {
          type: "paragraph",
          content:
            "A giant object next to a tiny figure. Two images layered on one frame. Scale disruption creates spatial illogic; double exposure layers dream onto reality. Both were core surrealist tools.",
        },
      ],
      quiz: {
        question: "What Freudian concept describes the central emotional territory of surrealist photography?",
        options: [
          { id: "a", text: "The id — the unconscious repository of primitive desires suppressed by civilization", isCorrect: false },
          { id: "b", text: "The unheimlich — the uncanny, or the familiar made strange", isCorrect: true },
          { id: "c", text: "Displacement — transferring emotional significance from one object to an unrelated substitute", isCorrect: false },
          { id: "d", text: "Condensation — compressing multiple ideas into a single dream image", isCorrect: false },
        ],
        explanation:
          "Freud's unheimlich describes the disturbing sensation of encountering something familiar in a strange context, or finding the familiar itself suddenly strange. This is the territory surrealist photography occupies most powerfully: taking recognisable things — human bodies, domestic objects — and making them strange through juxtaposition, distortion, or unexpected treatment. The disturbance is proportional to the original familiarity.",
      },
    },
    {
      id: "sp-04-works",
      title: "Defining Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Man Ray: Le Violon d'Ingres (1924)" },
        {
          type: "paragraph",
          content:
            "Kiki de Montparnasse's nude back, two f-holes painted on — a woman turned into a violin. The pun on Ingres (painter of nudes, amateur violinist) is intellectual, erotic, and absurd all at once.",
        },
        { type: "heading", content: "Man Ray: Dust Breeding (1920)" },
        {
          type: "paragraph",
          content:
            "Top-down photograph of dust on Duchamp's Large Glass — months of accumulation. It looks like an aerial landscape. It's domestic debris. Scale collapses. Framing transforms everything.",
        },
        { type: "heading", content: "Lee Miller: Solarised Portraits" },
        {
          type: "paragraph",
          content:
            "Miller's solarised portraits — reversed tones at the edges of forms, creating light-halos — suggest an inner life made visible. Documentation transformed into something closer to vision.",
        },
        { type: "heading", content: "Hans Bellmer: La Poupée (1934–38)" },
        {
          type: "paragraph",
          content:
            "An articulated doll, distorted and fragmented, photographed outdoors. Among the most disturbing images in photographic history. Surrealism's body-distortion vocabulary taken to its absolute limit.",
        },
        { type: "heading", content: "Claude Cahun: Theatrical Self-Portraits (1920s–40s)" },
        {
          type: "paragraph",
          content:
            "Multiple disguised identities, androgynous and masked, documented in extraordinary self-portraits made with partner Marcel Moore. They anticipated Cindy Sherman by decades.",
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Claude_Cahun_-_I_Am_in_Training_Don't_Kiss_Me.jpg/1280px-Claude_Cahun_-_I_Am_in_Training_Don't_Kiss_Me.jpg",
          caption: "Claude Cahun, I Am in Training Don't Kiss Me, c.1927 — a characteristic self-portrait in which Cahun performs an invented identity with text inscribed on the body",
          alt: "Claude Cahun self-portrait with text reading I Am in Training Don't Kiss Me inscribed across the chest, c.1927",
        },
      ],
      quiz: {
        question: "What double meaning does Man Ray's Le Violon d'Ingres exploit?",
        options: [
          { id: "a", text: "Jean-Auguste-Dominique Ingres was both a painter of classical nudes and an amateur violinist — the image puns on both", isCorrect: true },
          { id: "b", text: "The violin is both a musical instrument and a traditional symbol of feminine beauty in French culture", isCorrect: false },
          { id: "c", text: "The f-holes simultaneously reference violins and the letter F, Man Ray's initial in French", isCorrect: false },
          { id: "d", text: "Kiki de Montparnasse was both Man Ray's model and a trained classical musician", isCorrect: false },
        ],
        explanation:
          "The title and image exploit Ingres on two levels: he was a major neoclassical painter famous for his odalisques and female nudes, and he was also a devoted amateur violinist — playing the violin was described as his 'violin d'Ingres', a French idiom for a hobby. Man Ray's image thus puns on Ingres as painter-of-the-nude (the female back) and Ingres-as-violinist (the f-holes), while transforming the body into an object.",
      },
    },
    {
      id: "sp-05-influence",
      title: "Modern Influence",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Tim Walker: Surrealism With a Budget" },
        {
          type: "paragraph",
          content:
            "Tim Walker builds impossible scale relationships and fairy-tale environments for single fashion photographs. Non-sequitur juxtaposition, dream logic, bodies transformed by unexpected context — Man Ray's toolkit, massive production values.",
        },
        { type: "heading", content: "Erik Johansson: Digital Impossibility" },
        {
          type: "paragraph",
          content:
            "Roads that unfold like rugs. Buildings growing from fields. Johansson creates physically impossible scenes that look photographically real — the surrealist tradition of visual impossibility, now executed in Photoshop.",
        },
        { type: "heading", content: "AI Is Basically Automatic Surrealism" },
        {
          type: "paragraph",
          content:
            "Midjourney, DALL-E, Stable Diffusion — genuinely automatic, logically unconstrained, almost-real-but-slightly-wrong. Breton would have recognised it immediately. The machine's unconscious, finally.",
        },
        { type: "heading", content: "Advertising Ate Surrealism" },
        {
          type: "paragraph",
          content:
            "The ad industry absorbed surrealism's visual vocabulary almost immediately — scale disruption, unexpected juxtaposition, body transformation. All now standard tools for selling things. The subversive got domesticated.",
        },
      ],
      quiz: {
        question: "Why might AI image generation be considered the most purely surrealist photographic tool yet invented?",
        options: [
          { id: "a", text: "Because AI can generate images faster than any human photographer, removing the time constraint from image making", isCorrect: false },
          { id: "b", text: "Because its outputs are genuinely automatic, combine elements without logical constraint, and produce dream-textured images with the quality of the unconscious", isCorrect: true },
          { id: "c", text: "Because AI images can be made at any scale and resolution, removing the physical limitations of traditional photography", isCorrect: false },
          { id: "d", text: "Because AI image generation was explicitly developed using surrealist paintings as training data", isCorrect: false },
        ],
        explanation:
          "AI image generation aligns with surrealism's core principles: automatism (the artist describes but does not consciously control each element), illogical combination (anything can be placed next to anything), and the texture of dreams (almost-real, slightly-wrong, uncanny). The surrealists valued photography for its automatic quality — AI takes that automatism several steps further.",
      },
    },
    {
      id: "sp-06-learn",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "What Surrealism Actually Teaches" },
        {
          type: "paragraph",
          content:
            "Surrealism teaches the power of irrational logic — images that operate on associative and emotional truth rather than documentary truth. Don't document how the world is. Reveal how it feels.",
        },
        { type: "heading", content: "1. Break One Physical Law" },
        {
          type: "paragraph",
          content:
            "Scale is the easiest: use perspective to make a small object look enormous. Gravity is harder: wires, careful staging, a decisive moment of a thrown object. Pick one law and violate it.",
        },
        { type: "heading", content: "2. Use Accident as Method" },
        {
          type: "paragraph",
          content:
            "Make photographs using a process you can't fully control — multiple exposures without planning, objects on a scanner at random. Examine what the accident produces. What did intention suppress?",
        },
        { type: "heading", content: "3. Transform the Familiar" },
        {
          type: "paragraph",
          content:
            "Take something you know intimately — your hand, a kitchen object, a face — and make it strange. Change scale, context, lighting, or perspective until the familiar becomes uncanny. That's the unheimlich in practice.",
        },
        { type: "heading", content: "4. Work Without CGI" },
        {
          type: "paragraph",
          content:
            "Compositing is the easy answer. But the surrealists solved impossibility in-camera — building sets, using darkroom chemistry, careful staging. The physical constraint produces a different quality of image. Try it.",
        },
      ],
      reflection: {
        prompt:
          "Try making a photograph that violates one physical law — scale, gravity, or material properties — using only in-camera or darkroom techniques, no CGI or compositing. Stage it, construct it, or find it in the world. What physical ingenuity does the constraint force? And how does the image feel different from a digitally composited surrealist image you admire?",
      },
    },
  ],
}

export default course
