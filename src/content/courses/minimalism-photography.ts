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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Less Isn't Less. Less Is Everything." },
        {
          type: "paragraph",
          content:
            "The Bauhaus school (founded 1919) taught that form follows function and visual excess is a kind of dishonesty. Its photography workshops trained students to see the image as formal arrangement, not world-record.",
        },
        {
          type: "paragraph",
          content:
            "Edward Weston's shell and vegetable still lifes of the 1920s proved it: isolate one object against a neutral ground and you get formal power you can't achieve any other way.",
        },
        { type: "heading", content: "From Modernism to Now" },
        {
          type: "paragraph",
          content:
            "The minimalist art movement of the 1960s — Judd, Morris, Flavin — filtered into photography. By the 1980s, a distinct photographic minimalism had crystallised: long exposures, empty landscapes, compositions built around negative space.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Michael Kenna (b. 1953)" },
        {
          type: "paragraph",
          content:
            "Kenna's square-format black-and-white landscapes reduce everything to essential geometry: a single tree, a line of pylons, a harbour wall. Long exposures turn water to mist and clouds to silver streaks. Profound stillness.",
        },
        { type: "heading", content: "Hiroshi Sugimoto (b. 1948)" },
        {
          type: "paragraph",
          content:
            "Sugimoto exposed a single frame for the entire duration of a film. The screen became pure white. The ornate theatre became deep darkness. His Seascapes reduce the world to two horizontal tonal bands. That's it.",
        },
        { type: "heading", content: "Fan Ho (1931–2016)" },
        {
          type: "paragraph",
          content:
            "Fan Ho achieved minimalism in Hong Kong's urban chaos — shafts of light, single silhouetted figures, geometric shadows. Street photography with the formal discipline of abstract painting.",
        },
        { type: "heading", content: "Rinko Kawauchi (b. 1972)" },
        {
          type: "paragraph",
          content:
            "Kawauchi brings Japanese wabi-sabi sensibility to colour minimalism. Small domestic subjects, diffused natural light, hushed attention. The subject is never grand. The formal control is absolute.",
        },
        { type: "heading", content: "Mario Giacomelli (1925–2000)" },
        {
          type: "paragraph",
          content:
            "Extreme contrast, aerial views of Italian farmland reduced to stark black-and-white patterns. Giacomelli made landscapes into abstract compositions through graphic violence alone.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Negative Space Isn't Empty — It's Active" },
        {
          type: "paragraph",
          content:
            "A small figure against an expanse of fog doesn't disappear. The emptiness amplifies the figure — creates a meditation on solitude or scale. The decision about how much space to give absence is as considered as any other compositional choice.",
        },
        { type: "heading", content: "Monochrome Strips Away Distraction" },
        {
          type: "paragraph",
          content:
            "Colour carries information — associations, emotions, cultural meaning — that can distract from the formal relationships you're constructing. Monochrome reduces the image to its pure formal essentials: tone, shape, line.",
        },
        { type: "heading", content: "Clean Geometry, Clean Thinking" },
        {
          type: "paragraph",
          content:
            "Horizons, architectural lines, the arc of a wave, a single tree. Minimalist photographers are drawn to subjects reducible to clean geometric forms — the horizon at one third, a vertical element at the edge.",
        },
        { type: "heading", content: "Long Exposure: Time Becomes Tone" },
        {
          type: "paragraph",
          content:
            "Long exposure averages movement over time. Water becomes silk. Clouds become streaks. People disappear. What remains when contingency is averaged away is the essential structure of the scene.",
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Long_Exposure_Example.jpg/1280px-Long_Exposure_Example.jpg",
          caption: "Long-exposure photography of a road at night — vehicle light trails reduce moving traffic to pure geometric lines of light against a dark ground, demonstrating how duration becomes tonal minimalism",
          alt: "Long exposure night photograph showing car light trails as continuous streaks of red and white light along a highway",
        },
        { type: "heading", content: "The Frame as Composition, Not Window" },
        {
          type: "paragraph",
          content:
            "Minimalist photographers don't ask 'what is this a photograph of?' They ask 'how do these tones and shapes relate to each other?' That shift aligns photographic minimalism with painting abstraction.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Hiroshi Sugimoto — Theatres (1978–ongoing)" },
        {
          type: "paragraph",
          content:
            "Two elements: a glowing white screen and the ornate darkness surrounding it. Technically extraordinary, conceptually pure. Simultaneously about architecture, time, light, and cinema. The purest minimalism in photography.",
        },
        { type: "heading", content: "Michael Kenna — Industrial Landscapes (1980s–present)" },
        {
          type: "paragraph",
          content:
            "Power stations and harbours in pre-dawn northern England, reduced to geometric silhouettes against smooth skies. Documentary and lyrical simultaneously — that's the feat.",
        },
        { type: "heading", content: "Fan Ho — Hong Kong Street Photography (1950s–60s)" },
        {
          type: "paragraph",
          content:
            "'Approaching Shadow' — a figure walking toward a diagonal cast shadow — is among the most reproduced images of geometric street photography. Minimalist principles operating in urban chaos.",
        },
        { type: "heading", content: "Hiroshi Sugimoto — Seascapes (1980–ongoing)" },
        {
          type: "paragraph",
          content:
            "Every image: sea below, sky above, horizon at mid-frame. Compositionally identical. All variation is tonal. The series asks what difference remains when you remove everything but the essential.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Scandinavia Had It First" },
        {
          type: "paragraph",
          content:
            "Muted palettes, empty interiors, figures alone in vast landscapes — Scandinavian design absorbed minimalist principles early and thoroughly. Their photographers exported the aesthetic globally through the 1990s and 2000s.",
        },
        { type: "heading", content: "Apple Made It Commercial Default" },
        {
          type: "paragraph",
          content:
            "Apple's product photography — white backgrounds, single objects, precise tonal control — became a global template for premium brand aesthetics. So successful that minimalism is now the convention everyone reacts against.",
        },
        { type: "heading", content: "Minimalism as Instagram Escape Hatch" },
        {
          type: "paragraph",
          content:
            "Instagram's visual cacophony — filters, collage, noise — created a reaction. Photographers seeking differentiation turned to reduction: plain backgrounds, single subjects, muted tones. An art practice became a visual identity strategy.",
        },
        { type: "heading", content: "Astrophotography's Minimalist Landscape" },
        {
          type: "paragraph",
          content:
            "A single horizon, vast dark sky, landscape reduced to essential geometry. Astrophotography inherits the minimalist landscape tradition while taking it into genuinely new technical territory.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Minimalism Teaches Subtraction" },
        {
          type: "paragraph",
          content:
            "Most photographers instinctively add more. Minimalism runs the opposite direction — subtract until you find the essential. That discipline is harder than it sounds.",
        },
        { type: "heading", content: "1. Remove Before You Shoot" },
        {
          type: "paragraph",
          content:
            "Before pressing the shutter, ask: what can I remove from the frame? Move physically to exclude distracting elements. Find the angle at which the world simplifies itself.",
        },
        { type: "heading", content: "2. Give Your Subject Room" },
        {
          type: "paragraph",
          content:
            "Place a small figure in a large expanse of sky or water. Notice how the relationship changes the emotional register. Negative space is active, pressured, meaningful — not filler.",
        },
        { type: "heading", content: "3. Try a Long Exposure" },
        {
          type: "paragraph",
          content:
            "30 seconds. Several minutes. Watch what disappears and what remains. What's left when contingency is averaged away is the essential structure of the scene. That's what you were photographing all along.",
        },
        { type: "heading", content: "4. Commit to One Subject" },
        {
          type: "paragraph",
          content:
            "Build the entire image around a single object, form, or tonal relationship. Resist context. Resist narrative. Find the minimum the image needs to work — and stop there.",
        },
        { type: "heading", content: "5. Photograph the Same Subject Repeatedly" },
        {
          type: "paragraph",
          content:
            "Sugimoto's Seascapes work because of variation within strict constraint. Choose a single subject and photograph it many times under different conditions. Constraint produces discoveries open subjects never reveal.",
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
