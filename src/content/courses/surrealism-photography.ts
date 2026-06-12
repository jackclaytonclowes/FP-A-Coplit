import type { Course } from "@/types"

const course: Course = {
  id: "surrealism-photography",
  title: "Surrealism in Photography",
  slug: "surrealism-photography",
  description:
    "A study of Surrealism's relationship with photography — from Man Ray and Lee Miller through to contemporary photographers who work in a surrealist register.",
  category: "style-movements",
  accentColor: "#7847c8",
  estimatedHours: 3,
  tags: ["surrealism", "conceptual", "dream", "experimental", "dada"],
  lessons: [
    {
      id: "sp-01-origins",
      title: "Origins & History",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Surrealist Manifesto and Photography" },
        {
          type: "paragraph",
          content:
            "André Breton's Surrealist Manifesto of 1924 declared the movement's commitment to unlocking the unconscious mind — to bypassing rational control in favour of dream logic, chance, and the irrational. Photography, the surrealists quickly recognised, was uniquely suited to this project. Unlike painting, it operated automatically: the camera recorded whatever was in front of it without conscious intervention, making it a kind of mechanical unconscious.",
        },
        {
          type: "paragraph",
          content:
            "The connection to Dada was immediate and personal. Man Ray had arrived in Paris from New York in 1921, already experimenting with cameraless photographs he called rayographs. He found in the surrealist circle — Breton, Paul Éluard, Louis Aragon — a theoretical framework for what he was already doing intuitively. Surrealism needed photography; photography needed surrealism.",
        },
        {
          type: "heading",
          content: "Automatism and Chance",
        },
        {
          type: "paragraph",
          content:
            "Surrealist automatism — producing images or text without conscious control — found its photographic expression in multiple techniques: cameraless images made by placing objects directly on photosensitive paper, solarisation achieved through accidental exposure, double exposures and montage that combined images into illogical wholes. The 'mistake' became a method.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Man Ray (1890–1976)" },
        {
          type: "paragraph",
          content:
            "Man Ray was the central figure of surrealist photography and its most inventive technician. His rayographs — objects placed directly on photosensitive paper and exposed to light — created ghostly silhouettes that were simultaneously documentary (the object's shadow) and abstract. His solarisation technique, which he developed with Lee Miller, created halos of reversed tone around forms. Together these techniques became the visual vocabulary of surrealist photography.",
        },
        { type: "heading", content: "Lee Miller (1907–1977)" },
        {
          type: "paragraph",
          content:
            "Lee Miller began as Man Ray's muse and lover before becoming his equal and eventually surpassing him as a photographer. The discovery of solarisation — achieved when Miller accidentally switched on the darkroom light during an exposure — became their shared technique, though Miller made it her own. Her own portraits and self-portraits have a surrealist strangeness and psychological depth that Man Ray's work often lacks. She later became a celebrated war correspondent.",
        },
        { type: "heading", content: "Dora Maar (1907–1997)" },
        {
          type: "paragraph",
          content:
            "Known primarily as Picasso's lover and subject, Dora Maar was herself an accomplished surrealist photographer and photomontage artist whose work had political dimensions — combining documentary photography with surrealist manipulation to create images of social commentary. Her series 29 rue d'Astorg documented a disabled girl on the streets of Barcelona with surrealist intensity.",
        },
        { type: "heading", content: "Hans Bellmer (1902–1975) and Claude Cahun (1894–1954)" },
        {
          type: "paragraph",
          content:
            "Bellmer's photographs of La Poupée — an articulated doll he constructed and photographed in disturbingly erotic configurations — represent the darkest expression of surrealist body fragmentation. Claude Cahun's theatrical self-portraits, in which the artist assumed multiple disguised and androgynous identities, explored gender, identity, and performance in ways that anticipate contemporary photography by half a century.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Dream Logic and Non-Sequitur Juxtaposition" },
        {
          type: "paragraph",
          content:
            "The central visual logic of surrealist photography is the non-sequitur: elements placed together that have no rational relationship, creating an associative or emotional connection in place of a logical one. This is borrowed directly from dream experience, where the bizarre adjacency of unrelated things produces a charged, uncanny atmosphere.",
        },
        { type: "heading", content: "The Uncanny: Familiar Made Strange" },
        {
          type: "paragraph",
          content:
            "Freud's concept of the unheimlich — the uncanny, or the familiar made strange — is the emotional territory surrealist photography occupies. The most disturbing surrealist images take ordinary things (a body, a violin, a doll) and make them strange through unexpected context, scale, or treatment. The strangeness is heightened precisely because the original is familiar.",
        },
        { type: "heading", content: "Body Distortion and Fragmentation" },
        {
          type: "paragraph",
          content:
            "Surrealist photography repeatedly returns to the body as site of distortion: doubled, fragmented, juxtaposed with objects, rendered inhuman by solarisation. Bellmer's doll photographs are the extreme expression, but the motif runs through Man Ray's torso studies and Lee Miller's solarised portraits. The body is never simply the body — it becomes a landscape, an object, a dream.",
        },
        { type: "heading", content: "Scale Disruption and Double Exposure" },
        {
          type: "paragraph",
          content:
            "Unexpected scale relationships — a giant object beside a tiny figure, or vice versa — create the spatial illogic of dreams. Double exposure, which layers two images onto a single frame, operates as a visual metaphor for the layering of dream and reality, present and memory. Both techniques were central to the surrealist photographic vocabulary.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Man Ray: Le Violon d'Ingres (1924)" },
        {
          type: "paragraph",
          content:
            "The most famous image in surrealist photography: Kiki de Montparnasse photographed from behind, her nude back transformed by the addition of two painted f-holes into a violin. The pun on Ingres — who was both a classical painter of the nude and an amateur violinist — is characteristically surrealist: intellectual, erotic, and absurd simultaneously. The image transforms the body into an object and an object into an artwork.",
        },
        { type: "heading", content: "Man Ray: Dust Breeding (1920)" },
        {
          type: "paragraph",
          content:
            "A top-down photograph of dust accumulated on Marcel Duchamp's Large Glass over a period of months. What appears to be an aerial landscape photograph is revealed to be mundane domestic debris. The image collapses scale, plays on perspective, and demonstrates how photography's framing transforms anything into something else. Duchamp and Man Ray co-credited it, indicating its status as a collaborative conceptual object.",
        },
        { type: "heading", content: "Lee Miller: Solarised Portraits" },
        {
          type: "paragraph",
          content:
            "Miller's solarised portraits — of herself, of friends, of Picasso — have a quality of psychological revelation that her straightforward portraits lack. The reversal of tonal values at the edges of forms creates the sense of an aura, or a shadow made of light, that suggests an inner life made visible. The technique transforms documentation into something closer to vision.",
        },
        { type: "heading", content: "Hans Bellmer: La Poupée (1934–38)" },
        {
          type: "paragraph",
          content:
            "Bellmer's photographs of an articulated doll he constructed — photographed in distorted, fragmented configurations, often outdoors — are among the most disturbing images in photographic history. They use surrealism's body-distortion vocabulary to its most extreme conclusion. The doll series was hugely influential on subsequent artists engaging with questions of representation, the body, and desire.",
        },
        { type: "heading", content: "Claude Cahun: Theatrical Self-Portraits (1920s–40s)" },
        {
          type: "paragraph",
          content:
            "Cahun's self-portraits — made with her partner Marcel Moore — show the artist in multiple disguised identities: androgynous, costumed, masked, multiplied. They preceded by decades the conceptual self-portraiture of Cindy Sherman and the identity explorations of later artists. They are also extraordinary photographs: technically accomplished, compositionally inventive, and psychologically complex.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Tim Walker's Surrealist Fashion" },
        {
          type: "paragraph",
          content:
            "Tim Walker's fashion photographs — elaborate sets built specifically for single images, with impossible scale relationships, fairy-tale colour, and dream logic — are direct descendants of surrealist photography. Walker works with the same non-sequitur juxtaposition, the same transformation of the body through unexpected context, and the same commitment to photography as a space where normal physical laws need not apply.",
        },
        { type: "heading", content: "Erik Johansson and Digital Compositing" },
        {
          type: "paragraph",
          content:
            "Swedish photographer Erik Johansson creates seamlessly composited images that make physically impossible scenes look photographically real. His work — roads that unfold like rugs, buildings that grow from fields — updates the surrealist tradition of visual impossibility for the digital era, using Photoshop compositing where Man Ray used darkroom manipulation.",
        },
        { type: "heading", content: "AI Image Generation" },
        {
          type: "paragraph",
          content:
            "AI image generation — Midjourney, DALL-E, Stable Diffusion — may be the most purely surrealist photographic tool yet invented. Its outputs are genuinely automatic (the artist describes rather than controls), combine elements without logical constraint, and produce images with the distinctive visual texture of dreams: almost-real, almost-correct, slightly wrong in ways that create unease. Breton would have recognised it immediately.",
        },
        { type: "heading", content: "Advertising Surrealism" },
        {
          type: "paragraph",
          content:
            "The advertising industry absorbed surrealism almost immediately — the movement's visual vocabulary of desire, transformation, and non-sequitur was perfectly suited to selling things. Contemporary advertising continues to use surrealist visual logic: scale disruption, unexpected juxtaposition, body transformation. The subversive has been thoroughly domesticated.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Lessons From the Surrealist Tradition" },
        {
          type: "paragraph",
          content:
            "Surrealist photography teaches the power of the irrational — of making images that operate on associative and emotional logic rather than documentary logic. The lesson is not to document the world as it is but to reveal how it feels, or how it appears in the space between waking and sleep.",
        },
        { type: "heading", content: "1. Break One Physical Law" },
        {
          type: "paragraph",
          content:
            "The simplest surrealist photographic exercise: make a photograph that violates one physical law. Scale is the easiest (use perspective to make a small object appear enormous). Gravity is more challenging (careful staging, wires, a decisive moment of a thrown object). Material properties (making something look liquid that is solid, or vice versa) require the most invention.",
        },
        { type: "heading", content: "2. Use Accident as Method" },
        {
          type: "paragraph",
          content:
            "Lee Miller discovered solarisation by accident. Man Ray made rayographs by placing objects randomly on paper. Make a set of photographs using a process you cannot fully control — multiple exposures without planning, objects placed on a scanner at random — and examine what the process produces. What does the accident reveal that intention would have suppressed?",
        },
        { type: "heading", content: "3. Transform the Familiar" },
        {
          type: "paragraph",
          content:
            "Photograph a familiar object — your hand, a household item, a face you know well — in a way that makes it strange. Change the scale, the context, the lighting, or the perspective radically enough that the familiar becomes uncanny. This is the unheimlich in practice.",
        },
        { type: "heading", content: "4. Work Without CGI" },
        {
          type: "paragraph",
          content:
            "The contemporary temptation is to composite in post-production. But the surrealists — who had no such tools — found physical and optical solutions: building sets, using darkroom chemistry, staging impossible scenes with care. The constraint of making impossibility in-camera produces a different quality of image from compositing, with a physical reality that digital manipulation cannot replicate.",
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
