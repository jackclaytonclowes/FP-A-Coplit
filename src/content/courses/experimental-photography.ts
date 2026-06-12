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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Photography Without a Camera? Yes." },
        {
          type: "paragraph",
          content:
            "Experimental photography begins with a simple recognition: the camera is not the medium. Light and photosensitive material are. Fox Talbot proved it in 1834 by placing leaves and lace on sensitised paper — images without a camera, before cameras were even common.",
        },
        {
          type: "paragraph",
          content:
            "By the 1920s, Christian Schad's schadographs and Man Ray's rayographs arrived independently at the same conclusion: place objects on paper, expose to light, make an image. The camera is optional.",
        },
        {
          type: "heading",
          content: "The Bauhaus as Research Lab",
        },
        {
          type: "paragraph",
          content:
            "Moholy-Nagy treated photography at the Bauhaus not as documentation but as visual research. What does this material do? What does this process reveal? What is photography, essentially? Questions, not conventions.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Man Ray (1890–1976)" },
        {
          type: "paragraph",
          content:
            "Rayographs — objects on sensitised paper — and solarisation discovered by accident with Lee Miller. Man Ray's experimental techniques were inseparable from his surrealist commitments: each was a tool for accessing the irrational.",
        },
        { type: "heading", content: "László Moholy-Nagy (1895–1946)" },
        {
          type: "paragraph",
          content:
            "Moholy-Nagy's photograms went far beyond Man Ray's in compositional ambition. His Light-Space Modulator — a kinetic sculpture photographed over time with a moving light source — extended the photogram concept into sculptural and temporal dimensions.",
        },
        { type: "heading", content: "Floris Neusüss (b. 1937) and Marco Breuer (b. 1955)" },
        {
          type: "paragraph",
          content:
            "Neusüss made large-scale life-size body photograms. Breuer went further: he scratches, burns, and abrades film and paper directly. No camera, no darkroom enlarger — only light and physical force applied to the material itself.",
        },
        { type: "heading", content: "Idris Khan (b. 1978) and Barbara Kasten (b. 1936)" },
        {
          type: "paragraph",
          content:
            "Khan layers every image from a Becher typology into one dense composite — all water towers at once, simultaneously present and invisible. Kasten builds geometric light constructions in the studio that exist only as photographs.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Photograms: Both Documentary and Abstract" },
        {
          type: "paragraph",
          content:
            "Place an object on light-sensitive paper, expose to light, get a photogram. It's a trace of a real object (documentary) that shows only light and opacity, not appearance (abstract). Both things simultaneously.",
        },
        { type: "heading", content: "Multiple Exposure: Density and Accumulation" },
        {
          type: "paragraph",
          content:
            "Expose the same frame or sheet twice or more. Individual subjects lose distinctness. A new composite subject emerges. Analogue does it in camera or darkroom; digital does it in layers. The aesthetic: dense, interpenetrating, accumulated.",
        },
        { type: "heading", content: "Solarisation: The Accident Made Technique" },
        {
          type: "paragraph",
          content:
            "Expose a developing print to light briefly and tonal values reverse at the edges of forms — halos of opposite tone appear. The image is simultaneously normal and inverted, with a quality of x-ray vision or aura.",
        },
        { type: "heading", content: "The Process Is the Subject" },
        {
          type: "paragraph",
          content:
            "What unifies experimental photography: the process itself is visible in the image. Unlike conventional photography — where the process is meant to disappear — experimental photography makes chemistry, physical manipulation, and light-on-material legible.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Man Ray: Dust Breeding (1920)" },
        {
          type: "paragraph",
          content:
            "Months of dust on Duchamp's Large Glass, photographed from directly above. It looks like an aerial landscape. It's domestic debris. Scale collapses. Framing transforms everything into something else.",
        },
        { type: "heading", content: "Moholy-Nagy: Photograms (1922–43)" },
        {
          type: "paragraph",
          content:
            "Overlapping transparent and opaque forms, full tonal range from deep black to pure white, spatial intelligence across the entire composition. Among the most formally accomplished cameraless photographs ever made.",
        },
        { type: "heading", content: "Idris Khan: Every... Bernd and Hilla Becher (2004)" },
        {
          type: "paragraph",
          content:
            "Every photograph from the Bechers' water tower typology layered into one image: dense architectural ghosts containing all instances without showing any distinctly. About photography and about architecture simultaneously.",
        },
        { type: "heading", content: "Barbara Kasten: Constructs (1979–86)" },
        {
          type: "paragraph",
          content:
            "Geometric arrangements of Plexiglas, mirrors, and coloured gels — built specifically to be photographed, then dismantled. The photograph isn't a record of the construction. It's the only form in which the construction exists.",
        },
        { type: "heading", content: "Man Ray: Le Violon d'Ingres (1924)" },
        {
          type: "paragraph",
          content:
            "F-holes painted on a nude back — a darkroom addition to a documentary photograph, creating a new composite meaning. Even a conventional camera photograph can be made experimental through subsequent physical intervention.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Alternative Processes Are Back" },
        {
          type: "paragraph",
          content:
            "Wet plate collodion, cyanotype, platinum-palladium, gum bichromate — all experiencing significant revival since the 2000s. Photographers seek visible chemistry and material specificity as a reaction against digital photography's immateriality.",
        },
        { type: "heading", content: "Glitch Art and Data Bending" },
        {
          type: "paragraph",
          content:
            "Deliberately corrupt an image file. Open it in a text editor and change the data. Open it in an audio application. The experimental tradition extends into digital materials — treating the file as physical material to manipulate.",
        },
        { type: "heading", content: "Material Has Value When Nothing Is Material" },
        {
          type: "paragraph",
          content:
            "When any image can be made and infinitely duplicated without a physical substrate, a photograph with a unique physical body — a wet plate, a one-off photogram — acquires value that's partly aesthetic and partly existential. The material photograph cannot be perfectly copied.",
        },
        { type: "heading", content: "AI as the Latest Experimental Tool" },
        {
          type: "paragraph",
          content:
            "Unusual prompts, feeding output back as input, working with the system's failures. Artists using AI experimentally are working in the same spirit as Moholy-Nagy placing objects on sensitised paper: exploring what the process does, not what you expected.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Ask What the Process Does, Not What You Want" },
        {
          type: "paragraph",
          content:
            "Experimental photography reorients you completely. Instead of 'what am I photographing?', you ask 'what is this process doing? What does this material want to do?' The camera disappears. The chemistry appears.",
        },
        { type: "heading", content: "1. Make a Photogram" },
        {
          type: "paragraph",
          content:
            "The simplest exercise: place objects on light-sensitive paper in the darkroom and expose to light. No camera. No lens. Just objects and their relationship to light. Notice how the photogram of an object differs from a photograph of the same object.",
        },
        { type: "heading", content: "2. Break the Camera's Intention" },
        {
          type: "paragraph",
          content:
            "Do one thing you're not supposed to do: open the camera in light (with film), shoot through a damaged lens, put vaseline on the front element, use wrong exposure by many stops. Examine what the process produces when you override its design.",
        },
        { type: "heading", content: "3. Work With the Accident" },
        {
          type: "paragraph",
          content:
            "When something goes wrong — a development error, a light leak, a processing mistake — don't discard it. Examine it. Man Ray discovered solarisation by accident. Lee Miller made it a technique. The accident is data about what the process can do.",
        },
        { type: "heading", content: "4. Trace vs Photograph" },
        {
          type: "paragraph",
          content:
            "Moholy-Nagy's key insight: a photogram is the trace of an object, not its photograph. A photograph shows how an object reflects light. A photogram shows how an object blocks light. These are different kinds of information. Which are you making?",
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
