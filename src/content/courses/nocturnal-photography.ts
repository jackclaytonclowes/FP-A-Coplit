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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Brassaï and Paris de Nuit (1932)" },
        {
          type: "paragraph",
          content:
            "Gyula Halász — who adopted the name Brassaï after his birthplace of Brassó in Transylvania — arrived in Paris in 1924 and spent years documenting its nightlife before publishing Paris de Nuit in 1932. The book is the founding text of nocturnal photography: the first sustained, technically accomplished artistic engagement with the city after dark. It sold 40,000 copies in its first week and established night photography as a legitimate artistic practice.",
        },
        {
          type: "paragraph",
          content:
            "Brassaï made his night photographs using large-format cameras on tripods, with exposures of several minutes on orthochromatic film that rendered colours as unexpected tonal values. The technical difficulties were considerable: focus had to be estimated, exposure calculated without a light meter, and the subjects — prostitutes, lovers, criminals, café society — had to be persuaded to remain still or photographed without their awareness.",
        },
        {
          type: "heading",
          content: "The City at Night as Subject",
        },
        {
          type: "paragraph",
          content:
            "Before Brassaï, the city at night was largely absent from photography. Artificial light was weak and variable; the technical challenges of long exposure were formidable; and the social spaces of the night — brothels, street corners, all-night cafés — were not the spaces of respectable artistic attention. Brassaï changed all of this, establishing Paris's nocturnal social life as a subject worthy of serious photographic attention.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Brassaï (1899–1984)" },
        {
          type: "paragraph",
          content:
            "Brassaï's Paris night photographs — street scenes, cafés, brothels, lovers on park benches, homeless figures under bridges — documented a social world that the daylit city concealed. His images have both documentary specificity and a poetic quality produced by the long exposure's smoothing of time: figures blur slightly, light trails appear, water becomes silk. He is the unavoidable origin point of the entire nocturnal photography tradition.",
        },
        { type: "heading", content: "Alexey Titarenko (b. 1962)" },
        {
          type: "paragraph",
          content:
            "Titarenko's Crowd series, made in St. Petersburg in the early 1990s during the economic collapse following the Soviet Union's fall, shows crowds in public spaces as ghostly streams of blurred humanity. Long exposures transform moving figures into something between smoke and shadow. The series uses the camera's transformation of time to make a political and emotional statement about collective suffering.",
        },
        { type: "heading", content: "Todd Hido (b. 1968)" },
        {
          type: "paragraph",
          content:
            "Hido's series of suburban houses photographed at night — glowing from within, isolated by darkness, their interiors invisible but implied — are among the most influential photographs of the past three decades. The images suggest narrative (who lives here? what is happening inside?) while withholding it. The suburban house at night becomes a site of mystery, loneliness, and private life.",
        },
        { type: "heading", content: "Gregory Crewdson (b. 1962)" },
        {
          type: "paragraph",
          content:
            "Crewdson's elaborately staged nocturnal suburban tableaux — made using film-industry equipment, large crews, and multiple light sources — are among the most technically ambitious photographs ever made. His images of American suburban life are cinematic in scale and production, depicting moments of psychological crisis, loneliness, and inexplicable event. The night is his primary territory.",
        },
        { type: "heading", content: "Bill Henson (b. 1955)" },
        {
          type: "paragraph",
          content:
            "Australian photographer Bill Henson photographs adolescents in nocturnal landscapes and urban environments, creating images of extraordinary tonal beauty and psychological complexity. His work uses darkness not as concealment but as a condition that reveals — the face emerging from shadow, the figure at the threshold between light and dark.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Light Trails and the Transformation of Time" },
        {
          type: "paragraph",
          content:
            "The most immediately recognisable visual characteristic of nocturnal long-exposure photography is the light trail: moving vehicles become rivers of light, their headlights and taillights tracing paths that exist only in the camera's extended experience of time. Star trails — long exposures of the night sky — show the earth's rotation as arcs of light. The camera sees duration where the eye sees only the present moment.",
        },
        { type: "heading", content: "Colour Temperature and Artificial Light" },
        {
          type: "paragraph",
          content:
            "Different artificial light sources have very different colour temperatures: sodium vapour street lights produce the characteristic orange-amber of urban night; mercury vapour lights are cold blue-green; neon signs throw saturated colour pools; domestic tungsten light glows warm yellow from house windows. These colour variations — invisible in daylight, dominant at night — are a primary aesthetic resource for nocturnal photographers.",
        },
        { type: "heading", content: "Mystery, Isolation, and Absence" },
        {
          type: "paragraph",
          content:
            "Night photography has an inherent quality of mystery and isolation. The darkness that surrounds lit spaces becomes charged with implied presence or absence. Empty night streets carry the suggestion of activity just past or about to come. This quality — night as a space of narrative implication — is what draws photographers like Hido and Crewdson to nocturnal subjects.",
        },
        { type: "heading", content: "The Camera Sees Differently From the Eye" },
        {
          type: "paragraph",
          content:
            "The human eye adapts to darkness through pupil dilation and rod cell activation, but its experience of night is always in real time. The camera with an open shutter accumulates light over seconds or minutes, revealing a night scene with a brightness and detail that no human eye ever sees. Nocturnal photography is always, in this sense, a vision of something that has never been directly seen.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Brassaï: Paris de Nuit (1932)" },
        {
          type: "paragraph",
          content:
            "The founding work of nocturnal photography: 64 images of Paris at night, introduced by Paul Morand, documenting the city's nocturnal social world with technical precision and poetic atmosphere. Its street scenes — the reflections in wet cobblestones, the isolated figures under gas lamps, the cafés glowing in the dark — established the visual vocabulary of the night city that subsequent photography has worked within ever since.",
        },
        { type: "heading", content: "Gregory Crewdson: Beneath the Roses (2003–08)" },
        {
          type: "paragraph",
          content:
            "Crewdson's most ambitious series: large-format colour photographs of suburban American life in states of psychological crisis or inexplicable event. Made with Hollywood-scale production values — lighting rigs, cranes, closed streets, large crews — the images achieve a nocturnal atmosphere of extraordinary intensity. Each image is simultaneously a complete world and an unsolvable mystery.",
        },
        { type: "heading", content: "Todd Hido: House Hunting (1996–2000)" },
        {
          type: "paragraph",
          content:
            "Hido's series of suburban houses photographed at night — warm light leaking from windows across snow and darkness — has been enormously influential on subsequent photography and visual culture. The images are deceptively simple: a house, at night, from the street. But the warmth of the interior light against the cold exterior creates an emotional charge of longing, exclusion, and domestic mystery.",
        },
        { type: "heading", content: "Alexey Titarenko: City of Shadows (1992–94)" },
        {
          type: "paragraph",
          content:
            "Titarenko's complete St. Petersburg project — of which the Crowd series is the most famous component — documents a city in social collapse with images that transform documentary observation into something closer to elegy. The long-exposure dissolution of human figures is both a technical fact and a metaphor for social disintegration.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Rise of Astrophotography" },
        {
          type: "paragraph",
          content:
            "Astrophotography — the photography of night skies, star trails, the Milky Way — has moved from a specialist technical pursuit to a mass cultural phenomenon. Camera technology improvements (high ISO performance, fast lenses) and travel to dark-sky locations have made the night sky available to amateur photographers. The astrophotography aesthetic — Milky Way arching over a landscape — has become one of the defining visual tropes of contemporary photography.",
        },
        { type: "heading", content: "Computational Night Photography" },
        {
          type: "paragraph",
          content:
            "Smartphone computational photography has transformed the accessibility of night photography. iPhone Night Mode and Google Night Sight use multiple short exposures computationally stacked and merged to produce bright, detailed night images from a handheld device. This computational approach produces different results from traditional long exposure — sharper figures, less light trail — and represents a new aesthetic of night photography.",
        },
        { type: "heading", content: "AI Noise Reduction" },
        {
          type: "paragraph",
          content:
            "AI-powered noise reduction tools — Lightroom's Denoise, Topaz DeNoise — can remove noise from high-ISO images with a quality that was previously impossible. This allows photography at light levels that were previously unusable, opening new approaches to available-darkness photography. The aesthetic consequences are still being worked out: AI-denoised images have a characteristic quality of smooth unreality.",
        },
        { type: "heading", content: "The Nocturnal Instagram Aesthetic" },
        {
          type: "paragraph",
          content:
            "Social media has generated a specific nocturnal aesthetic: highly saturated artificial light, strong contrast between lit and dark areas, urban settings with neon reflections in wet streets. This aesthetic — descended from Brassaï via Crewdson via visual effects cinematography — has become one of Instagram's dominant visual registers.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The Practical Education of Night Photography" },
        {
          type: "paragraph",
          content:
            "Night photography is one of the most educational photographic practices: it makes the camera's mechanics visible, forces attention to light quality, and reveals how differently the camera sees from the eye. The discomforts of working in the dark are also the conditions of attention.",
        },
        { type: "heading", content: "1. The Tripod as Tool of Attention" },
        {
          type: "paragraph",
          content:
            "Working with a tripod in the dark slows photography down. Each image requires deliberate placement, careful composition, and a considered exposure decision. This enforced deliberateness is a different mode of working from handheld photography, and it produces different images — considered, still, often more formally composed.",
        },
        { type: "heading", content: "2. Colour Temperature as Palette" },
        {
          type: "paragraph",
          content:
            "Walk through an urban environment at night noticing only the colour of light sources: the orange of sodium street lamps, the blue-white of LED replacements, the warm yellow of domestic windows, the saturated colour of neon signs. Each colour temperature tells you something about the technology and the social space it serves.",
        },
        { type: "heading", content: "3. What Does the Camera Reveal?" },
        {
          type: "paragraph",
          content:
            "After making a long-exposure photograph, compare what you see in the frame with what you experienced standing at the camera during the exposure. The camera has accumulated light you didn't notice, created trails from movement you saw as momentary, and rendered colours with a saturation your eye normalised. What has it revealed that you couldn't see?",
        },
        { type: "heading", content: "4. Find Your Nocturnal Subject" },
        {
          type: "paragraph",
          content:
            "Brassaï photographed Parisian night society. Hido photographs suburban houses from the street. Crewdson stages psychological crisis. Each photographer has a nocturnal subject that generates their visual approach. What is the nocturnal subject in your environment that you can photograph with sustained attention? Not night photography in general — a specific subject.",
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
