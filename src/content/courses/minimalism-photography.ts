import type { Course } from "@/types"

const course: Course = {
  id: "minimalism-photography",
  title: "Minimalism in Photography",
  slug: "minimalism-photography",
  description:
    "A study of the minimalist tradition in photography — reduction as both aesthetic choice and philosophical position. From Bauhaus influence to Hiroshi Sugimoto's theatres and Michael Kenna's industrial landscapes, minimalism treats absence as meaning and the frame as pure formal composition.",
  category: "style-movements",
  accentColor: "#b0b0b0",
  estimatedHours: 3,
  tags: ["minimalism", "space", "reduction", "formal", "negative-space"],
  lessons: [
    {
      id: "mn-01",
      title: "Origins & History",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Roots of Photographic Minimalism" },
        {
          type: "paragraph",
          content:
            "Minimalism in photography did not emerge from a single moment but from a confluence of ideas in the early twentieth century. The Bauhaus school, founded in 1919, taught that form should follow function and that visual excess was a kind of dishonesty. Its photography workshops — led by László Moholy-Nagy — trained students to see the photograph as a formal arrangement of tones and shapes rather than a record of the world's clutter.",
        },
        {
          type: "paragraph",
          content:
            "Edward Weston's shell and vegetable still lifes of the 1920s and 1930s demonstrated that extreme simplification of subject could produce images of remarkable power. By isolating a single object against a neutral ground, Weston made photographs that were simultaneously about the specific object and about the formal possibilities of tonal gradation and three-dimensional form on a flat surface.",
        },
        { type: "heading", content: "From Modernism to Contemporary Practice" },
        {
          type: "paragraph",
          content:
            "The minimalist art movement of the 1960s — Donald Judd, Robert Morris, Dan Flavin — filtered into photography through the work of photographers who were equally engaged with fine art discourse. By the 1980s, a distinct photographic minimalism had crystallised: long exposures that smoothed water to silk, landscapes emptied of human presence, compositions organised around the logic of negative space rather than pictorial narrative.",
        },
        {
          type: "list",
          items: [
            "1919: Bauhaus founded — formal reduction becomes pedagogical principle",
            "1920s–30s: Edward Weston's shell and pepper studies — object as pure form",
            "1960s: Minimalist art movement in the US and Europe",
            "1980s: Michael Kenna begins long-exposure industrial landscape work",
            "1990s: Hiroshi Sugimoto's Theatre series achieves international recognition",
            "2000s: Scandinavian photography absorbs minimalist aesthetics",
            "2010s: Reaction against visual noise on social media accelerates minimalist photography",
          ],
        },
        {
          type: "quote",
          content: "The camera is a machine that makes the world legible by stripping it of its noise.",
          author: "László Moholy-Nagy",
        },
      ],
      quiz: {
        question: "What did the Bauhaus school teach about visual excess that directly influenced photographic minimalism?",
        options: [
          { id: "a", text: "That visual excess was a sign of technical mastery and should be celebrated", isCorrect: false },
          { id: "b", text: "That form should follow function and visual excess was a form of dishonesty", isCorrect: true },
          { id: "c", text: "That photography could not achieve the reduction of painting and should compensate with richness", isCorrect: false },
          { id: "d", text: "That monochrome was the only honest mode because colour added visual excess", isCorrect: false },
        ],
        explanation:
          "The Bauhaus taught that form should follow function and that decoration or visual complexity without purpose was dishonest design. Applied to photography, this became a principle that the frame should contain only what is necessary — that surplus visual information weakens rather than enriches the image. This idea became foundational to photographic minimalism.",
      },
    },
    {
      id: "mn-02",
      title: "Key Practitioners",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Michael Kenna (b. 1953)" },
        {
          type: "paragraph",
          content:
            "Michael Kenna's long-exposure landscapes — made at dawn or dusk across industrial England, Japan, and France — are among the defining works of photographic minimalism. His square-format black-and-white prints reduce the landscape to its essential geometry: a single tree, a line of pylons, a harbour wall. Long exposures transform moving water into mist and clouds into streaks of silver, creating images of profound stillness.",
        },
        { type: "heading", content: "Hiroshi Sugimoto (b. 1948)" },
        {
          type: "paragraph",
          content:
            "Sugimoto's practice spans multiple series, each a meditation on time, perception, and reduction. His Theatre series — in which he set up a large-format camera in old movie theatres and exposed a single frame for the duration of a film — produces images of extraordinary minimalist power: a glowing rectangle of pure white light surrounded by the ornate darkness of the cinema interior. His Seascapes reduce the world to two horizontal bands of tone.",
        },
        { type: "heading", content: "Fan Ho (1931–2016)" },
        {
          type: "paragraph",
          content:
            "Fan Ho's black-and-white street photographs of 1950s and 1960s Hong Kong achieve minimalism not through empty spaces but through precise geometric control. A shaft of light cutting across a cobbled street, a single figure silhouetted against a white wall: his images are full of urban life yet composed with the formal discipline of abstract painting.",
        },
        { type: "heading", content: "Rinko Kawauchi (b. 1972)" },
        {
          type: "paragraph",
          content:
            "Kawauchi brings a Japanese aesthetic sensibility — influenced by wabi-sabi, the beauty of incompleteness and transience — to colour minimalism. Her photographs of small domestic subjects lit by diffused natural light achieve a quality of hushed attention. The subject is rarely grand; the formal control is absolute.",
        },
        { type: "heading", content: "Mario Giacomelli (1925–2000)" },
        {
          type: "paragraph",
          content:
            "The Italian photographer Giacomelli worked in extreme contrast, creating landscapes and figure studies that reduce the visual field to stark black-and-white patterns. His aerial views of the Italian countryside — ploughed fields photographed from above — become abstract compositions of extraordinary graphic power.",
        },
      ],
      quiz: {
        question: "How did Hiroshi Sugimoto create the glowing white screen in his Theatre series?",
        options: [
          { id: "a", text: "He lit the screen with a continuous light source during a long exposure of the empty theatre", isCorrect: false },
          { id: "b", text: "He exposed a single frame of large-format film for the entire duration of a film screening", isCorrect: true },
          { id: "c", text: "He composited multiple frames of the screen at its brightest moments in the darkroom", isCorrect: false },
          { id: "d", text: "He photographed the screen with a ring flash immediately after the film ended", isCorrect: false },
        ],
        explanation:
          "Sugimoto opened the shutter at the beginning of a film and closed it at the end — exposing the film to the light from every frame of the movie simultaneously. Because the film averages all that light, the screen becomes pure white. The ornate theatre interior, receiving only ambient reflected light, renders as a dark, detailed surround. It is a photograph of time collapsed into a single exposure.",
      },
    },
    {
      id: "mn-03",
      title: "Visual Characteristics",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Negative Space as Meaning" },
        {
          type: "paragraph",
          content:
            "In minimalist photography, the empty areas of the frame are not voids to be filled but active elements that carry meaning. A small figure against an expanse of fog does not disappear into emptiness; the emptiness amplifies the figure's presence, creating a meditation on solitude or scale. The photographer's decision about how much space to give to absence is as considered as any other compositional choice.",
        },
        { type: "heading", content: "Monochrome and Tonal Control" },
        {
          type: "paragraph",
          content:
            "Much minimalist photography works in black and white, not from nostalgia but because monochrome reduces the image to its formal essentials. Colour adds information — information that may distract from the formal relationships the photographer is constructing. When colour is used in minimalist photography, it tends to be muted, carefully controlled, and often tonally close: a palette of greys and creams, or a single accent colour against near-neutral surroundings.",
        },
        { type: "heading", content: "Geometric Simplicity" },
        {
          type: "paragraph",
          content:
            "Minimalist photographers are drawn to subjects that can be reduced to clean geometric forms: horizons, architectural lines, the arc of a wave, the vertical of a single tree. The composition is often based on division of the frame into simple proportional relationships. The horizon at one third. A single vertical element at the edge. A square format that imposes bilateral equilibrium.",
        },
        { type: "heading", content: "Long Exposure and Temporal Reduction" },
        {
          type: "paragraph",
          content:
            "Long exposure is a tool of temporal minimalism: it averages movement over time, smoothing away the specificity of individual moments into a continuous tone. Water becomes silk, clouds become streaks, pedestrians disappear entirely. The long exposure creates a world emptied of contingency — a world seen from outside time.",
        },
        { type: "heading", content: "The Frame as Pure Formal Composition" },
        {
          type: "paragraph",
          content:
            "Minimalist photographers treat the frame not as a window onto a subject but as a compositional field to be organised. The question is not 'what is this a photograph of?' but 'how do these tones and shapes relate to each other?' This is a conceptual shift that aligns photographic minimalism with abstraction in painting.",
        },
      ],
      quiz: {
        question: "Why do many minimalist photographers prefer black and white over colour?",
        options: [
          { id: "a", text: "Black and white equipment is more affordable, making it accessible to minimalist photographers who resist luxury", isCorrect: false },
          { id: "b", text: "Monochrome removes colour information, reducing the image to formal tonal and geometric relationships the photographer wishes to control", isCorrect: true },
          { id: "c", text: "Black and white prints last longer than colour prints and suit the minimalist desire for permanence", isCorrect: false },
          { id: "d", text: "Colour photography is associated with commercial advertising, which minimalism philosophically opposes", isCorrect: false },
        ],
        explanation:
          "Colour carries information — associations, emotions, cultural meanings — that can distract from the formal relationships the minimalist photographer is constructing. By working in monochrome, the photographer reduces the image to tone, shape, and line: the pure formal elements. The absence of colour is itself a form of reduction, consistent with minimalism's core principle that surplus information weakens the image.",
      },
    },
    {
      id: "mn-04",
      title: "Defining Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Hiroshi Sugimoto — Theatres (1978–ongoing)" },
        {
          type: "paragraph",
          content:
            "Sugimoto's Theatre series is arguably the purest statement of minimalist photography's ambitions. Each image reduces the cinema to two elements: the glowing white rectangle of the screen and the ornate darkness that surrounds it. The work is simultaneously about architecture, time, light, and the nature of cinema itself. It is made with extreme technical precision using an 8x10 large-format camera, and the prints are of exquisite quality.",
        },
        { type: "heading", content: "Michael Kenna — Industrial Landscapes (1980s–present)" },
        {
          type: "paragraph",
          content:
            "Kenna's photographs of power stations, harbours, and industrial sites in northern England — made during his 'Ratcliffe-on-Soar Power Station' series and its successors — established his reputation as the foremost practitioner of minimalist landscape photography. Long exposures made before dawn reduce industrial structures to their geometric silhouettes against smooth skies, creating images that are both documentary and lyrical.",
        },
        { type: "heading", content: "Fan Ho — Hong Kong Street Photography (1950s–60s)" },
        {
          type: "paragraph",
          content:
            "Fan Ho's images of colonial Hong Kong are constructed around shafts of light and geometric shadow in a way that gives street photography the formal rigour of studio work. His image 'Approaching Shadow' — a figure walking toward a diagonal line of cast shadow — is among the most reproduced images of geometric street photography and demonstrates how minimalist principles can operate within the chaos of street photography.",
        },
        { type: "heading", content: "Hiroshi Sugimoto — Seascapes (1980–ongoing)" },
        {
          type: "paragraph",
          content:
            "Sugimoto's Seascapes — a single horizon line dividing the frame into two bands of tone — represent the logical limit of photographic minimalism. Every image in the series is formally identical: sea below, sky above, a horizon at the midpoint. The variations are entirely tonal: the quality of light, the texture of the water, the tone of the sky. The series asks what difference is left when you remove everything but the essential.",
        },
      ],
      quiz: {
        question: "What formal principle unifies every image in Sugimoto's Seascapes series?",
        options: [
          { id: "a", text: "Every image is made at sunrise, creating a consistent quality of golden light across the series", isCorrect: false },
          { id: "b", text: "A single horizon line divides the frame into two tonal bands, with all variation in tone and texture rather than composition", isCorrect: true },
          { id: "c", text: "Every image includes a single boat or vessel as a reference to human presence in the seascape", isCorrect: false },
          { id: "d", text: "Every image is made using a long exposure that transforms the sea surface into a uniform smooth tone", isCorrect: false },
        ],
        explanation:
          "The Seascapes are formally identical in composition: horizon at mid-frame, sea below, sky above. The series demonstrates that minimalist reduction can go almost infinitely far while still producing images with profound visual and emotional variation. The difference between images is entirely tonal — the quality of light, the texture of water, the luminosity of sky — which means the series becomes a meditation on perception itself.",
      },
    },
    {
      id: "mn-05",
      title: "Modern Influence",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Scandinavian Aesthetic" },
        {
          type: "paragraph",
          content:
            "Scandinavian design and visual culture absorbed minimalist principles earlier and more thoroughly than most. In photography, this produced a recognisable aesthetic: muted colour palettes, empty interiors, figures alone in large landscapes, a philosophy that treated negative space as positive value. Swedish and Norwegian photographers working in the 1990s and 2000s established a Scandinavian minimalism that has been enormously influential globally.",
        },
        { type: "heading", content: "Contemporary Commercial Minimalism" },
        {
          type: "paragraph",
          content:
            "Minimalist aesthetics entered commercial photography — advertising, product photography, editorial — with particular force in the 2010s. Apple's product photography, with its white backgrounds, single objects, and precise tonal control, became a global template. The minimalist aesthetic signalled quality, calm, and seriousness in contrast to the visual noise of competitor brands. Commercial minimalism is now so pervasive that it has itself become a convention to react against.",
        },
        { type: "heading", content: "Reaction Against Visual Noise on Social Media" },
        {
          type: "paragraph",
          content:
            "The emergence of social media photography — dense with filters, text, collage, visual noise — created a reaction that manifested as intentional minimalism. Photographers who wanted to differentiate themselves from the visual cacophony of Instagram turned to reduction: plain backgrounds, single subjects, muted tones. What had been an art practice became a visual identity strategy.",
        },
        { type: "heading", content: "Astrophotography and the Empty Landscape" },
        {
          type: "paragraph",
          content:
            "Contemporary astrophotography — night landscapes with star trails or Milky Way backgrounds — inherits the minimalist landscape tradition while extending it into new technical territory. The images share minimalism's core formal vocabulary: a single line of horizon, vast dark skies, a landscape reduced to its essential geometry. The technical requirements of astrophotography have brought many photographers to minimalist formal thinking.",
        },
      ],
      quiz: {
        question: "How did Apple's product photography influence contemporary commercial minimalism?",
        options: [
          { id: "a", text: "It demonstrated that colour photography could be as formally rigorous as black and white", isCorrect: false },
          { id: "b", text: "It established white backgrounds and single-object compositions as a global commercial template signalling quality and calm", isCorrect: true },
          { id: "c", text: "It proved that minimalist photography could only succeed in fine art contexts, not commercial ones", isCorrect: false },
          { id: "d", text: "It revived interest in large-format film photography within commercial studios", isCorrect: false },
        ],
        explanation:
          "Apple's product photography — white backgrounds, single objects, precise tonal control, no visual surplus — became a global commercial template because it communicated quality, calm, and seriousness at a glance. The minimalist aesthetic was read as a contrast to the visual noise of cheaper or less confident brands. This commercial deployment of minimalist principles has been so successful that minimalism is now a default language of premium branding.",
      },
    },
    {
      id: "mn-06",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From Minimalist Photography" },
        {
          type: "paragraph",
          content:
            "Minimalism teaches you to subtract rather than add — a discipline that runs counter to most photographers' instinct to include more, not less.",
        },
        { type: "heading", content: "1. Remove Before You Shoot" },
        {
          type: "paragraph",
          content:
            "Before pressing the shutter, ask what you can remove from the frame. Move physically to exclude distracting elements. Change your angle to place the subject against a cleaner ground. The best minimalist photographs often require significant physical repositioning to find the angle at which the world simplifies itself.",
        },
        { type: "heading", content: "2. Work With Negative Space Intentionally" },
        {
          type: "paragraph",
          content:
            "Give your subject room to breathe. Place a small figure in a large expanse of sky or water and notice how the relationship changes the image's emotional register. Negative space is not empty: it is active, pressured, meaningful. Experiment with how much space the subject needs before it feels isolated rather than composed.",
        },
        { type: "heading", content: "3. Try a Long Exposure" },
        {
          type: "paragraph",
          content:
            "A long exposure — 30 seconds, several minutes — transforms moving elements into continuous tone. Water becomes silk, clouds become streaks, people disappear. Notice what disappears and what remains: what is left when contingency is averaged away is the essential structure of the scene.",
        },
        { type: "heading", content: "4. Commit to a Single Subject" },
        {
          type: "paragraph",
          content:
            "Choose a single object, form, or tonal relationship and build the entire image around it. Resist the temptation to include context, narrative, or supporting elements. What is the least you need in the frame for the image to work? Find that point and stop.",
        },
        { type: "heading", content: "5. Photograph the Same Subject Repeatedly" },
        {
          type: "paragraph",
          content:
            "Sugimoto's Seascapes work because of the variation within constraint. Choose a single subject — a horizon, a window, a bare wall — and photograph it many times under different conditions. The discipline of constraint produces discoveries that open subjects never reveal.",
        },
      ],
      reflection: {
        prompt:
          "Look at your last ten photographs and ask: what could you remove from each one without losing the image's essential meaning? Choose one and reimagine it as a minimalist photograph. What would you exclude? How would the composition change? What would the resulting image say that the original did not — and what would it lose?",
      },
    },
  ],
}

export default course
