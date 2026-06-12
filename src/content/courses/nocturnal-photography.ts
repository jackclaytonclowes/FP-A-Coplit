import type { Course } from "@/types"

const course: Course = {
  id: "nocturnal-photography",
  title: "Nocturnal Photography",
  slug: "nocturnal-photography",
  description:
    "The technical and artistic tradition of photographing at night — the specific skills, aesthetics, and possibilities unique to after-dark photography.",
  category: "style-movements",
  accentColor: "#1a1e40",
  estimatedHours: 3,
  tags: ["night", "low-light", "long-exposure", "urban", "light-painting"],
  lessons: [
    {
      id: "np-01-origins",
      title: "Origins & History",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Book That Invented Night Photography" },
        {
          type: "paragraph",
          content:
            "Brassaï arrived in Paris in 1924 and spent years working its night streets before publishing Paris de Nuit in 1932. It sold 40,000 copies in its first week. Night photography as a legitimate art form: started here.",
        },
        {
          type: "paragraph",
          content:
            "Large-format cameras on tripods. Multi-minute exposures on orthochromatic film. Focus estimated, exposure guessed without a light meter. The technical difficulties were enormous — and Brassaï solved them all.",
        },
        {
          type: "heading",
          content: "A World the Daylit City Concealed",
        },
        {
          type: "paragraph",
          content:
            "Before Brassaï, the nocturnal city barely existed in photography. Weak artificial light, formidable technical challenges, and the social spaces of night — brothels, street corners, all-night cafés — weren't considered worthy of serious artistic attention. He changed all of that.",
        },
        {
          type: "list",
          items: [
            "1924: Brassaï arrives in Paris from Transylvania",
            "1929–31: Brassaï begins systematic night photography of Paris",
            "1932: Paris de Nuit published — the founding text of nocturnal photography",
            "1940s: Brassaï documents Paris under German occupation at night",
            "1950s onwards: Available-light photography develops as a documentary tradition",
            "1970s–80s: Bill Henson, Todd Hido, Gregory Crewdson develop personal nocturnal aesthetics",
          ],
        },
        {
          type: "quote",
          content: "I invented nothing. I rediscovered things. Rediscovered them for myself.",
          author: "Brassaï",
        },
      ],
      quiz: {
        question: "What made Paris de Nuit (1932) technically groundbreaking for its time?",
        options: [
          { id: "a", text: "It was the first photography book to use colour reproduction of night scenes", isCorrect: false },
          { id: "b", text: "Brassaï made sustained, technically accomplished long-exposure photographs of the city at night using large-format cameras on tripods, at a time when such photography was considered almost impossible", isCorrect: true },
          { id: "c", text: "It used flash photography in public spaces, which had never been done before in a documentary context", isCorrect: false },
          { id: "d", text: "Brassaï developed a new film emulsion specifically for low-light photography that is still used today", isCorrect: false },
        ],
        explanation:
          "Brassaï's achievement was both technical and artistic. He solved the considerable problems of night photography — long exposures, estimated focus, variable artificial light — using available technology: large-format cameras, tripods, careful exposure calculation, and orthochromatic film. The book demonstrated that the night city was available as photographic subject, and that its social spaces — previously invisible to artistic attention — were as photographically rich as the daylit city.",
      },
    },
    {
      id: "np-02-practitioners",
      title: "Key Practitioners",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Brassaï (1899–1984)" },
        {
          type: "paragraph",
          content:
            "Street scenes, cafés, brothels, lovers on park benches, homeless figures under bridges. Brassaï documented a nocturnal social world the daylit city concealed — with both documentary specificity and the poetic blur of long exposure.",
        },
        { type: "heading", content: "Alexey Titarenko (b. 1962)" },
        {
          type: "paragraph",
          content:
            "Titarenko's Crowd series in post-Soviet St. Petersburg uses long exposures to dissolve people into ghostly streams. Individual suffering becomes collective and elemental. Technical fact becomes political statement.",
        },
        { type: "heading", content: "Todd Hido (b. 1968)" },
        {
          type: "paragraph",
          content:
            "Hido photographs suburban houses at night — glowing from within, isolated by darkness. The images suggest everything and show nothing. The suburban house becomes a site of mystery, loneliness, and private life.",
        },
        { type: "heading", content: "Gregory Crewdson (b. 1962)" },
        {
          type: "paragraph",
          content:
            "Hollywood-scale production: lighting rigs, cranes, closed streets, large crews, weeks of preparation per image. The most technically ambitious still photographs ever made. Cinematic nocturnal suburban tableaux of psychological crisis.",
        },
        { type: "heading", content: "Bill Henson (b. 1955)" },
        {
          type: "paragraph",
          content:
            "Henson uses darkness not as concealment but as a condition that reveals — the face emerging from shadow, the figure at the threshold between light and dark. Tonal beauty and psychological complexity in equal measure.",
        },
      ],
      quiz: {
        question: "What makes Alexey Titarenko's Crowd series politically and emotionally distinctive?",
        options: [
          { id: "a", text: "He used hidden cameras to photograph crowds without their knowledge, creating unposed documentary images", isCorrect: false },
          { id: "b", text: "Long exposures transform moving figures into ghostly streams of blurred humanity, making individual suffering collective and visible", isCorrect: true },
          { id: "c", text: "He photographed the same St. Petersburg locations across all four seasons to show the passage of time", isCorrect: false },
          { id: "d", text: "He printed his images at enormous scale, making the crowd literally overwhelming for gallery viewers", isCorrect: false },
        ],
        explanation:
          "Titarenko's long exposures dissolve individual figures into streams of blurred movement, transforming a crowd of people into something between smoke, shadow, and a river. Made in St. Petersburg during the chaos of the Soviet collapse, this transformation is both technical and political: it makes the suffering of individuals collective and elemental, turning historical crisis into photographic elegy.",
      },
    },
    {
      id: "np-03-characteristics",
      title: "Visual Characteristics",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Light Trails: The Camera Sees Duration" },
        {
          type: "paragraph",
          content:
            "Moving vehicles become rivers of light. Stars trace arcs across the sky as the earth rotates. The camera sees duration where the eye sees only the present moment — and makes it visible.",
        },
        { type: "heading", content: "Every Light Source Has Its Own Colour" },
        {
          type: "paragraph",
          content:
            "Sodium vapour: orange-amber. Mercury vapour: cold blue-green. Neon signs: saturated colour pools. Domestic tungsten: warm yellow. These colour temperature differences are a primary aesthetic resource — invisible in daylight, dominant at night.",
        },
        { type: "heading", content: "Night Is a Space of Narrative Implication" },
        {
          type: "paragraph",
          content:
            "Empty night streets carry the suggestion of activity just past or about to come. Lit windows imply private lives. Darkness surrounds lit spaces and charges them with implied presence. Hido and Crewdson built entire careers on this quality.",
        },
        { type: "heading", content: "The Camera Sees Something You Never Will" },
        {
          type: "paragraph",
          content:
            "Your eye adapts to darkness in real time. The camera accumulates light over seconds or minutes, revealing brightness and detail that exists only across duration — not in any single moment. Nocturnal photography always shows a vision no eye has ever seen.",
        },
      ],
      quiz: {
        question: "Why does nocturnal photography show a vision that no human eye directly sees?",
        options: [
          { id: "a", text: "Because cameras have wider dynamic range than the human eye, capturing both shadows and highlights simultaneously", isCorrect: false },
          { id: "b", text: "Because the camera's open shutter accumulates light over seconds or minutes, revealing a brightness and detail that exists only across duration, not in any single moment", isCorrect: true },
          { id: "c", text: "Because cameras are sensitive to infrared light, which is abundant at night but invisible to the human eye", isCorrect: false },
          { id: "d", text: "Because cameras can be positioned at heights and angles that a human observer cannot physically occupy", isCorrect: false },
        ],
        explanation:
          "A long-exposure nocturnal photograph accumulates the light of several seconds or minutes onto a single frame. No human eye ever sees the scene that way — our visual experience is always in the present moment. The camera's long exposure reveals light trails, star movement, and an overall brightness that represents duration rather than any single instant. It is a genuinely different kind of seeing.",
      },
    },
    {
      id: "np-04-works",
      title: "Defining Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Brassaï: Paris de Nuit (1932)" },
        {
          type: "paragraph",
          content:
            "64 images. Cobblestones reflecting gaslight. Isolated figures. Cafés glowing in the dark. The visual vocabulary of the night city that all subsequent nocturnal photography has worked within.",
        },
        { type: "heading", content: "Gregory Crewdson: Beneath the Roses (2003–08)" },
        {
          type: "paragraph",
          content:
            "New England towns closed down for weeks. Lighting trucks, cranes, actors, Hollywood production design. Each image is simultaneously a complete world and an unsolvable mystery. Nocturnal atmosphere at maximum intensity.",
        },
        { type: "heading", content: "Todd Hido: House Hunting (1996–2000)" },
        {
          type: "paragraph",
          content:
            "A house. At night. From the street. Warm light leaking through windows across snow and darkness. Enormously influential on subsequent photography and visual culture. Deceptively simple. Emotionally devastating.",
        },
        { type: "heading", content: "Alexey Titarenko: City of Shadows (1992–94)" },
        {
          type: "paragraph",
          content:
            "The complete St. Petersburg project during social collapse — documentary observation transformed into elegy. Long-exposure dissolution of human figures as both technical fact and metaphor for disintegration.",
        },
      ],
      quiz: {
        question: "What production scale does Gregory Crewdson use to make his nocturnal photographs?",
        options: [
          { id: "a", text: "He works alone with a small handheld camera, shooting quickly to avoid disturbing the scene", isCorrect: false },
          { id: "b", text: "He uses Hollywood-scale production — lighting rigs, cranes, closed streets, large crews — to construct his scenes", isCorrect: true },
          { id: "c", text: "He uses only available light and a tripod, never adding artificial lighting to his scenes", isCorrect: false },
          { id: "d", text: "He photographs real events, with a small crew of two or three assistants to handle equipment", isCorrect: false },
        ],
        explanation:
          "Crewdson's photographs are made with a scale of production more typical of film sets than photography: lighting trucks, cranes, closed streets, crews of tens of people, and weeks of preparation per image. This extreme production commitment is what allows him to achieve nocturnal atmospheres of such extraordinary precision and consistency across a series of images.",
      },
    },
    {
      id: "np-05-influence",
      title: "Modern Influence",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Astrophotography Goes Mainstream" },
        {
          type: "paragraph",
          content:
            "Better sensors, faster lenses, dark-sky travel: the Milky Way arching over a landscape became one of the defining visual tropes of contemporary photography. Night sky photography moved from specialist pursuit to mass cultural phenomenon.",
        },
        { type: "heading", content: "Your Phone Can Now Shoot at Night" },
        {
          type: "paragraph",
          content:
            "iPhone Night Mode and Google Night Sight stack multiple short exposures computationally. The result: bright, detailed handheld night images. Fewer light trails, sharper figures — a distinct new aesthetic of night photography.",
        },
        { type: "heading", content: "AI Noise Reduction Changed the Game" },
        {
          type: "paragraph",
          content:
            "Lightroom's Denoise, Topaz DeNoise — AI tools that remove noise at light levels previously unusable. New creative territory opens. The aesthetic consequence: AI-denoised images have a characteristic smooth unreality of their own.",
        },
        { type: "heading", content: "The Instagram Night Aesthetic" },
        {
          type: "paragraph",
          content:
            "Saturated artificial light, strong contrast between lit and dark, neon reflections in wet streets. Descended from Brassaï via Crewdson via visual effects cinematography — one of Instagram's dominant visual registers.",
        },
      ],
      quiz: {
        question: "How does iPhone Night Mode's computational approach differ aesthetically from traditional long-exposure night photography?",
        options: [
          { id: "a", text: "Night Mode produces images in black and white only, preserving the tonal tradition of early nocturnal photography", isCorrect: false },
          { id: "b", text: "Night Mode's stacked short exposures produce sharper figures and less light trailing than traditional long exposures, creating a different aesthetic of night", isCorrect: true },
          { id: "c", text: "Night Mode uses longer exposures than traditional tripod photography, resulting in smoother light trails", isCorrect: false },
          { id: "d", text: "Night Mode's AI processing automatically adjusts colour temperature to match daylight, eliminating the warm artificial light aesthetic", isCorrect: false },
        ],
        explanation:
          "Computational night photography stacks multiple short exposures and merges them using AI processing. Because the individual exposures are short, moving subjects are sharper and there are fewer light trails than in traditional long-exposure photography. The result is a distinctly different aesthetic: brighter, cleaner, with less of the time-accumulated atmosphere that characterises traditional nocturnal photography.",
      },
    },
    {
      id: "np-06-learn",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Night Photography Makes Camera Mechanics Visible" },
        {
          type: "paragraph",
          content:
            "Night photography forces attention to light quality, reveals how differently the camera sees from the eye, and makes every exposure a deliberate decision. The discomforts of working in the dark are the conditions of attention.",
        },
        { type: "heading", content: "1. The Tripod Slows You Down (In a Good Way)" },
        {
          type: "paragraph",
          content:
            "Each image requires deliberate placement, careful composition, a considered exposure decision. That enforced deliberateness produces different — more considered, more formally composed — images than handheld work.",
        },
        { type: "heading", content: "2. Read the Colour of Light" },
        {
          type: "paragraph",
          content:
            "Walk through an urban environment at night noticing only the colour temperature of light sources: sodium orange, LED blue-white, domestic tungsten yellow, neon saturated colour. Each tells you something about the technology and the social space it serves.",
        },
        { type: "heading", content: "3. Compare What You See With What the Camera Sees" },
        {
          type: "paragraph",
          content:
            "After making a long-exposure photograph, compare the frame with what you experienced during the exposure. The camera accumulated light you didn't notice, made trails from movement you saw as momentary. What has it revealed that you couldn't see?",
        },
        { type: "heading", content: "4. Find Your Specific Nocturnal Subject" },
        {
          type: "paragraph",
          content:
            "Brassaï had Paris night society. Hido has suburban houses from the street. Crewdson stages psychological crisis. Not night photography in general — a specific subject. What is yours?",
        },
      ],
      reflection: {
        prompt:
          "Go out at night with a tripod and make 5 long-exposure photographs. Choose a single location — a street, a car park, a park — and work it thoroughly rather than moving around. After making each photograph, stand and look at the scene with your eyes. Notice how the camera sees differently: what it reveals that you cannot see, what it transforms. What does your eye normalise that the camera makes strange?",
      },
    },
  ],
}

export default course
