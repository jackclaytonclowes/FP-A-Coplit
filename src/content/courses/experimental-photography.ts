import type { Course } from "@/types"

const course: Course = {
  id: "experimental-photography",
  title: "Experimental Photography",
  slug: "experimental-photography",
  description:
    "Photography that treats the medium as material to be manipulated — cameraless photography, darkroom experimentation, alternative processes, and digital abstraction.",
  category: "style-movements",
  accentColor: "#47c878",
  estimatedHours: 3,
  tags: ["experimental", "process", "alternative", "abstract", "avant-garde"],
  lessons: [
    {
      id: "ex-01-origins",
      title: "Origins & History",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Photography as Visual Research" },
        {
          type: "paragraph",
          content:
            "Experimental photography begins with the recognition that the camera is not photography's only tool — that photosensitive materials, light, time, and chemistry are the real medium, and that images can be made by any combination of these that produces a result. This recognition arrived almost as soon as photography itself: William Henry Fox Talbot's photogenic drawings (1834) placed leaves and lace on sensitised paper to make images without a camera.",
        },
        {
          type: "paragraph",
          content:
            "The systematic artistic practice of experimental photography developed in the 1920s through the Bauhaus school and its associated figures. László Moholy-Nagy articulated a theory of photography as light-writing — Lichtgestaltung — in which the camera was only one possible tool for manipulating light on a surface. Christian Schad's schadographs (1918) and Man Ray's rayographs (1921) were cameraless photographs made independently, both arrived at by placing objects on sensitised paper.",
        },
        {
          type: "heading",
          content: "The Bauhaus Tradition",
        },
        {
          type: "paragraph",
          content:
            "The Bauhaus school treated photography not as a documentation device but as a visual research tool: a way of investigating the properties of light, material, and visual perception. Moholy-Nagy's courses at the Bauhaus established a tradition of experimental photographic practice that influenced subsequent generations worldwide. The Bauhaus approach was systematic and analytical: what does this material do? What does this process reveal? What is photography, essentially?",
        },
        {
          type: "list",
          items: [
            "1834: Fox Talbot's photogenic drawings — cameraless photography predates the camera",
            "1918: Christian Schad makes schadographs in Geneva",
            "1921: Man Ray makes his first rayographs in Paris",
            "1923: László Moholy-Nagy joins the Bauhaus, develops photogram practice",
            "1925: Moholy-Nagy's Painting, Photography, Film — the theoretical statement of the movement",
            "1930s onwards: Bauhaus experimental tradition spreads globally via emigré teachers",
          ],
        },
        {
          type: "quote",
          content: "The enemy of photography is the convention, the fixed rules of 'how to do it'. Everything new is developed from the ruins of the old.",
          author: "László Moholy-Nagy",
        },
      ],
      quiz: {
        question: "What did László Moholy-Nagy mean by Lichtgestaltung — 'light-writing' or light-design?",
        options: [
          { id: "a", text: "The practice of using artificial lighting rigs to illuminate photographic subjects in a controlled studio environment", isCorrect: false },
          { id: "b", text: "A theory of photography as the manipulation of light on a surface, in which the camera was only one possible tool among many", isCorrect: true },
          { id: "c", text: "The technique of using long exposures to create light trails and light-painting effects in photographs", isCorrect: false },
          { id: "d", text: "A method of developing photographic prints that emphasised tonal gradation from light to dark", isCorrect: false },
        ],
        explanation:
          "Moholy-Nagy's concept of Lichtgestaltung — light-design or light-writing — reframed photography as fundamentally a process of manipulating light on a photosensitive surface. From this perspective, cameraless photography (photograms, schadographs) was as valid as camera photography, because both involved the same essential operation. The camera was a convenience, not the medium's definition.",
      },
    },
    {
      id: "ex-02-practitioners",
      title: "Key Practitioners",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Man Ray (1890–1976)" },
        {
          type: "paragraph",
          content:
            "Man Ray's experimental contributions span rayographs — objects placed on sensitised paper to create cameraless silhouette images — and solarisation, which he developed with Lee Miller by accidentally over-exposing prints during development. His photographic experiments were inseparable from his broader artistic practice: each technique was a tool for accessing the irrational and the unconscious, consistent with his surrealist commitments.",
        },
        { type: "heading", content: "László Moholy-Nagy (1895–1946)" },
        {
          type: "paragraph",
          content:
            "Moholy-Nagy's photograms — complex compositions of transparent and opaque objects placed on sensitised paper — went far beyond Man Ray's simpler rayographs in compositional ambition. His Light-Space Modulator, a kinetic sculpture photographed over time using a moving light source, extended the photogram concept into temporal and sculptural dimensions. He also wrote the most important theoretical texts of the experimental photography tradition.",
        },
        { type: "heading", content: "Floris Neusüss (b. 1937) and Marco Breuer (b. 1955)" },
        {
          type: "paragraph",
          content:
            "Neusüss revived and extended the photogram tradition in the postwar period, making large-scale life-size photograms of bodies and objects — works of considerable physical scale and presence. Marco Breuer's practice is radically material: he scratches, burns, abrades, and chemically attacks film and paper directly, creating images in which the photographic material's physical surface is the subject. No camera, no darkroom enlarger — only light and violence applied to the material itself.",
        },
        { type: "heading", content: "Idris Khan (b. 1978) and Barbara Kasten (b. 1936)" },
        {
          type: "paragraph",
          content:
            "Idris Khan's layered multiple-exposure photographs — in which every page of a Beethoven score or every image from a Bernd and Hilla Becher typology is overlaid into a single image — use digital layering to create dense, almost-abstract composites. Barbara Kasten's geometric light constructions — Plexiglas, mirrors, coloured gels photographed in the studio — use photography to document arrangements of light that exist only as photographs.",
        },
      ],
      quiz: {
        question: "What distinguishes Marco Breuer's experimental practice from photogram-based cameraless photography?",
        options: [
          { id: "a", text: "Breuer uses digital processes rather than traditional darkroom chemistry in his work", isCorrect: false },
          { id: "b", text: "Breuer scratches, burns, and abrades film and paper directly — no camera or darkroom enlarger is used, only physical force and light applied to the material itself", isCorrect: true },
          { id: "c", text: "Breuer makes camera-based photographs and then physically manipulates the final prints", isCorrect: false },
          { id: "d", text: "Breuer's practice uses the camera but removes the lens, photographing pure light directly onto film", isCorrect: false },
        ],
        explanation:
          "Breuer takes cameraless photography to its logical extreme by removing even the enlarger and the chemical darkroom process. He works directly on the surface of film and photographic paper with physical means — scratching, burning, abrasion, chemical attack. The photographs are not of anything; they are records of physical processes applied to photosensitive materials.",
      },
    },
    {
      id: "ex-03-characteristics",
      title: "Visual Characteristics",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Cameraless Images: Photograms and Chemigrams" },
        {
          type: "paragraph",
          content:
            "Photograms — images made by placing objects on light-sensitive paper and exposing to light — produce silhouettes and semi-transparent forms that are simultaneously documentary (the shadow of an actual object) and abstract (the relationship between light and opacity, not the object's appearance). Chemigrams use chemistry rather than light: chemicals applied directly to paper produce patterns through the chemistry's own spatial logic.",
        },
        { type: "heading", content: "Multiple Exposure and Layering" },
        {
          type: "paragraph",
          content:
            "Multiple exposure — exposing the same frame of film or sheet of paper to two or more images — creates layered, interpenetrating forms in which individual subjects lose their distinctness and a new composite subject emerges. In analogue photography, multiple exposure was achieved in the camera or darkroom; in digital photography, through layer compositing. The aesthetic is of density and accumulation.",
        },
        { type: "heading", content: "Solarisation and Tonal Reversal" },
        {
          type: "paragraph",
          content:
            "Solarisation — achieved by briefly exposing a developing print or negative to light — reverses tonal values at the edges of forms, creating halos of opposite tone. The result is an image that is simultaneously normal and inverted, with a quality of x-ray vision or aura that makes the visible strange.",
        },
        { type: "heading", content: "The Process as Visible Subject" },
        {
          type: "paragraph",
          content:
            "The unifying characteristic of experimental photography is that the process itself is the subject: the image is inseparable from how it was made. Unlike conventional photography, which aims for the process to be invisible (the image should look as if reality were simply recorded), experimental photography makes the process legible. You can see the chemistry, the physical manipulation, the effects of light on material.",
        },
      ],
      quiz: {
        question: "What makes photograms simultaneously documentary and abstract?",
        options: [
          { id: "a", text: "They document real objects with the same tonal accuracy as conventional photography, but without depth or perspective", isCorrect: false },
          { id: "b", text: "They are shadows of real objects (documentary) but show only the relationship between light and opacity rather than the object's appearance (abstract)", isCorrect: true },
          { id: "c", text: "They use abstract objects — geometric forms without specific identity — photographed with extreme precision", isCorrect: false },
          { id: "d", text: "They document the chemical process of photographic development rather than any external subject", isCorrect: false },
        ],
        explanation:
          "A photogram records the actual shadow of a real object on light-sensitive paper — in this sense it is more directly documentary than a camera photograph, because the object was physically present on the paper. But it shows only the object's relationship to light and opacity, not its appearance as we normally see it. The result is both a trace of something real and an abstract composition of light and dark forms.",
      },
    },
    {
      id: "ex-04-works",
      title: "Defining Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Man Ray: Dust Breeding (1920)" },
        {
          type: "paragraph",
          content:
            "Co-credited with Marcel Duchamp, this photograph of dust accumulated over months on Duchamp's Large Glass appears to be an aerial landscape but reveals itself as a close-up of domestic debris. It collapses scale, plays on the documentary authority of photography, and demonstrates how framing and context transform any subject into any other subject. It is both an experimental photograph and a conceptual artwork.",
        },
        { type: "heading", content: "Moholy-Nagy: Photograms (1922–43)" },
        {
          type: "paragraph",
          content:
            "Moholy-Nagy's photograms — made throughout his career from his Bauhaus period through his years at the Institute of Design in Chicago — are among the most formally accomplished cameraless photographs ever made. The compositions of overlapping transparent and opaque forms, the range of tonal gradation from deep black through multiple greys to white, and the spatial intelligence of the arrangements give the photograms an authority as visual art beyond their historical significance.",
        },
        { type: "heading", content: "Idris Khan: Every... Bernd and Hilla Becher (2004)" },
        {
          type: "paragraph",
          content:
            "Khan's early series layering every photograph from the Bechers' typology books — water towers, blast furnaces, coal bunkers — into single images creates dense architectural ghosts that contain all the individual instances without showing any of them distinctly. The images are both about photography (what happens when all the photographs are combined?) and about architecture (what is the essential form of a water tower?).",
        },
        { type: "heading", content: "Barbara Kasten: Constructs (1979–86)" },
        {
          type: "paragraph",
          content:
            "Kasten's studio constructions — geometric arrangements of Plexiglas, mirrors, and coloured gels, photographed with large-format film — exist only as photographs. The constructions were built specifically to be photographed and then dismantled. The photographs are their only record, but they are also their only form: the arrangement of light and material has no existence except as an image.",
        },
        { type: "heading", content: "Man Ray: Le Violon d'Ingres (1924)" },
        {
          type: "paragraph",
          content:
            "Man Ray's most famous image connects experimental and surrealist photography: the painted f-holes on the female nude are a darkroom addition — a physical alteration of a documentary photograph to produce a new, composite meaning. The image demonstrates how even a conventional camera photograph can be made experimental through subsequent physical intervention.",
        },
      ],
      quiz: {
        question: "Why do Barbara Kasten's Constructs photographs have a unique relationship to their subject matter?",
        options: [
          { id: "a", text: "The constructions were built in public spaces and photographed by multiple photographers simultaneously", isCorrect: false },
          { id: "b", text: "The constructions existed only to be photographed — built specifically for the camera and then dismantled, so the photographs are their only form", isCorrect: true },
          { id: "c", text: "The constructions were made from photographic materials — film, paper, and chemistry — rather than standard building materials", isCorrect: false },
          { id: "d", text: "Kasten constructed the arrangements directly on the surface of the photographic paper without a camera", isCorrect: false },
        ],
        explanation:
          "Kasten's Constructs are built specifically to be photographed: the arrangements of Plexiglas, mirrors, and gels are not sculptures with independent existence but subjects created for the camera. Once photographed, they are dismantled. This means the photograph is not a record of a thing that existed — it is the only form in which the thing exists. The photograph is not secondary to the construction; it is the work.",
      },
    },
    {
      id: "ex-05-influence",
      title: "Modern Influence",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Alternative Processes Revival" },
        {
          type: "paragraph",
          content:
            "Alternative photographic processes — wet plate collodion, cyanotype, platinum-palladium printing, gum bichromate, salt printing — have experienced a significant revival since the 2000s. Photographers seek the material specificity and the visible chemistry of these processes as a reaction against digital photography's immateriality. The wet plate practitioner works with silver nitrate, potassium iodide, and cadmium compounds; the cyanotype maker with iron salts; each process makes the chemistry of photography physically present.",
        },
        { type: "heading", content: "Glitch Art and Data Bending" },
        {
          type: "paragraph",
          content:
            "Digital experimental photography includes glitch art — the deliberate corruption of image files to produce unexpected visual results — and data bending, the opening of image files in text editors or audio applications and editing the raw data. These practices extend the experimental tradition into digital materials: treating the file as physical material to be manipulated, discovering the aesthetics of the machine's errors.",
        },
        { type: "heading", content: "The Return to Materiality" },
        {
          type: "paragraph",
          content:
            "The most significant cultural force driving experimental photography's revival is a reaction against digital photography's dematerialisation. When any image can be made and infinitely duplicated without physical substrate, the photograph that has a unique physical body — a wet plate, a unique photogram, a physically manipulated print — acquires a value that is partly aesthetic and partly existential. The material photograph cannot be copied without loss.",
        },
        { type: "heading", content: "Generative AI as Experimental Tool" },
        {
          type: "paragraph",
          content:
            "AI image generation continues the experimental tradition in digital form: it produces images through processes that are not fully controlled or understood, generating unexpected results from parametric input. Artists using AI experimentally — providing unusual prompts, feeding the output back as input, working with the system's failures rather than its successes — are working in the same spirit as Moholy-Nagy placing objects on sensitised paper: exploring what the process does, rather than what you expected.",
        },
      ],
      quiz: {
        question: "What cultural force is primarily driving the revival of alternative photographic processes such as wet plate and cyanotype?",
        options: [
          { id: "a", text: "The lower cost of alternative process materials compared to digital camera equipment", isCorrect: false },
          { id: "b", text: "A reaction against digital photography's dematerialisation — seeking the material specificity and visible chemistry of processes that produce unique physical objects", isCorrect: true },
          { id: "c", text: "Art schools introducing alternative processes as mandatory curriculum requirements for photography students", isCorrect: false },
          { id: "d", text: "Social media platforms' preference for the distinctive visual aesthetics of alternative processes", isCorrect: false },
        ],
        explanation:
          "The alternative processes revival is fundamentally a reaction against digital photography's immateriality. When a digital photograph has no physical body — it is data, infinitely copyable and perfectly reproducible — photographers seeking uniqueness, physical presence, and visible process turn to alternatives that make the chemistry of photography visible and the resulting object irreducibly physical. A wet plate portrait is a unique object; a JPEG is not.",
      },
    },
    {
      id: "ex-06-learn",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The Education of Experimental Practice" },
        {
          type: "paragraph",
          content:
            "Experimental photography teaches the photographer to treat the medium as material rather than as a transparent window on the world. This is a fundamental reorientation: instead of asking 'what am I photographing?', you ask 'what is this process doing? What does this material want to do?' The camera disappears and the chemistry appears.",
        },
        { type: "heading", content: "1. Make a Photogram" },
        {
          type: "paragraph",
          content:
            "The simplest experimental photographic exercise: place objects on light-sensitive paper in the darkroom and expose to light. No camera, no lens — only objects and their relationship to light. Notice how the photogram of an object differs from a photograph of the same object: what does the shadow reveal that the reflected image conceals?",
        },
        { type: "heading", content: "2. Break the Camera's Intention" },
        {
          type: "paragraph",
          content:
            "Choose one thing you are not supposed to do with your camera: open it in light (with film), shoot through a damaged lens, put vaseline on the front element, use extremely wrong exposure. Notice what the process produces when you override its design. Some of the most important experimental techniques were discovered this way.",
        },
        { type: "heading", content: "3. Work With the Accident" },
        {
          type: "paragraph",
          content:
            "When something goes wrong — a development error, a light leak, a processing mistake — instead of discarding the result, examine it carefully. What did the accident produce? Man Ray discovered solarisation by accident. Lee Miller made it a technique. The accident is not a failure; it is data about what the process can do.",
        },
        { type: "heading", content: "4. The Trace Is Not the Photograph" },
        {
          type: "paragraph",
          content:
            "Moholy-Nagy's insight: a photogram is the trace of an object, not its photograph. A photograph shows how an object reflects light; a photogram shows how an object blocks or modifies light. These are different kinds of information. Think about what kind of image you are making: representation, or trace?",
        },
      ],
      reflection: {
        prompt:
          "Make a photogram: place objects on light-sensitive paper — or use a digital scanning bed in a darkened room as a substitute darkroom — and expose to light. Choose objects for their relationship to light: transparent, translucent, opaque, textured, flat. After making the photogram, look carefully at the image and compare it to a conventional photograph of the same objects. What does the trace reveal that the reflected image conceals? What has no shadow revealed?",
      },
    },
  ],
}

export default course
