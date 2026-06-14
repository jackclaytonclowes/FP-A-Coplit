import type { Course } from "@/types"

const course: Course = {
  id: "midnight-aesthetics",
  title: "Midnight Aesthetics",
  slug: "midnight-aesthetics",
  description:
    "The aesthetic of darkness and the night in photography and visual culture — not merely a technical challenge but a whole visual philosophy that prizes shadow, mystery, and the unseen. From Brassaï's Paris de nuit to Bill Henson's dark portraits, this is photography that treats darkness as its primary material.",
  category: "style-movements",
  accentColor: "#1a2a50",
  estimatedHours: 3,
  tags: ["nocturnal", "dark", "atmospheric", "mood", "chiaroscuro"],
  lessons: [
    {
      id: "ma-01",
      title: "Origins & History",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Darkness as a Material, Not a Problem" },
        {
          type: "paragraph",
          content:
            "Before photography, painters had already mastered darkness as substance — Caravaggio's violent contrasts, Rembrandt's figures emerging from brown obscurity. When photography arrived, night was initially just a technical obstacle. It took decades for photographers to treat it as the point.",
        },
        {
          type: "paragraph",
          content:
            "Film noir's shadow-heavy streets and morally ambiguous darkness created a visual vocabulary for the night that crossed straight into photography. Night as a time when the social order relaxes and something darker emerges.",
        },
        { type: "heading", content: "Brassaï Invented the Nocturnal City" },
        {
          type: "paragraph",
          content:
            "Brassaï spent years on Paris streets from midnight to dawn, documenting prostitutes, lovers, criminals, and street cleaners. His 1933 book Paris de nuit didn't just photograph the night — it established darkness itself as the subject.",
        },
        {
          type: "list",
          items: [
            "1930s: Film noir cinematography develops its shadow-heavy visual language",
            "1933: Brassaï publishes Paris de nuit — the foundational text of nocturnal photography",
            "1950s: Beat Generation writers and photographers embrace the night as artistic territory",
            "1970s–80s: Anders Petersen and Antoine d'Agata develop extreme nocturnal documentary",
            "1990s: Bill Henson's dark portraits achieve international recognition and controversy",
            "2000s: Fashion photography's nocturnal turn — dark editorial as premium signifier",
            "2010s: The dark Instagram aesthetic emerges as a distinct visual movement",
          ],
        },
        {
          type: "quote",
          content: "For me the night was never ordinary darkness. It was always a presence, a material thing with weight and texture.",
          author: "Brassaï",
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Los_Angeles_at_Night%2C_2011.jpg/1280px-Los_Angeles_at_Night%2C_2011.jpg",
          caption: "The nocturnal city: artificial light pools, glowing windows, and the darkness that defines them",
          alt: "Los Angeles at night seen from above, city lights spread across the dark landscape",
        },
      ],
      quiz: {
        question: "What made film noir cinematography significant for the development of midnight aesthetics in photography?",
        options: [
          { id: "a", text: "It proved that night scenes could be lit artificially to look exactly like daylight", isCorrect: false },
          { id: "b", text: "It created a visual vocabulary for darkness as moral and psychological ambiguity that crossed into photographic practice", isCorrect: true },
          { id: "c", text: "It developed the technical innovations in film sensitivity that enabled night photography for the first time", isCorrect: false },
          { id: "d", text: "It established that only black-and-white photography could render night scenes with appropriate gravity", isCorrect: false },
        ],
        explanation:
          "Film noir developed a visual language in which darkness was not an absence of light but a presence — a carrier of moral ambiguity, threat, and transgression. This language — hard shadows, glistening wet streets, figures half-dissolved in darkness — crossed from cinema into photography and gave photographers a vocabulary for treating the night as an aesthetic and philosophical subject rather than merely a technical challenge.",
      },
    },
    {
      id: "ma-02",
      title: "Key Practitioners",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Brassaï (1899–1984)" },
        {
          type: "paragraph",
          content:
            "Long exposures on glass plates. Careful use of existing gaslight and electric light. Brassaï moved freely through the nocturnal underworld of Paris, making images of atmospheric density that had never been achieved before.",
        },
        { type: "heading", content: "Antoine d'Agata (b. 1961)" },
        {
          type: "paragraph",
          content:
            "d'Agata doesn't photograph from safety — he's a participant in the situations he shoots. Brothels, street corners, extreme margins. Deliberately degraded images. He implicates himself in the darkness he documents.",
        },
        { type: "heading", content: "Anders Petersen (b. 1944)" },
        {
          type: "paragraph",
          content:
            "Petersen spent years as a regular at Café Lehmitz in Hamburg before making photographs. The resulting series — dark, grainy, intimate, shot close without flash — is the definitive work of intimate nocturnal photography.",
        },
        { type: "heading", content: "Daido Moriyama (b. 1938)" },
        {
          type: "paragraph",
          content:
            "Moriyama's Tokyo street work pushes shadows toward pure black. His 'are, bure, boke' aesthetic — rough, blurred, out-of-focus — doesn't correct darkness; it amplifies it until it becomes a visual correlate of urban alienation.",
        },
        { type: "heading", content: "Bill Henson (b. 1955)" },
        {
          type: "paragraph",
          content:
            "Henson's large-scale dark portraits — single directional light, adolescent figures emerging from velvet darkness — recall old-master painting more than photography. Consistently controversial in Australia. Consistently extraordinary.",
        },
      ],
      quiz: {
        question: "What distinguishes Antoine d'Agata's approach to nocturnal documentary from Brassaï's?",
        options: [
          { id: "a", text: "d'Agata uses large-format cameras and long exposures while Brassaï used 35mm and available light", isCorrect: false },
          { id: "b", text: "d'Agata positions himself as a participant rather than an observer, implicating himself in the situations he photographs", isCorrect: true },
          { id: "c", text: "d'Agata works exclusively in colour while Brassaï worked in black and white", isCorrect: false },
          { id: "d", text: "d'Agata photographs only in studio conditions recreating the night, while Brassaï worked on actual streets", isCorrect: false },
        ],
        explanation:
          "Where Brassaï moved through nocturnal Paris as an observer with access — a journalist of the night — d'Agata's approach is one of participation. He implicates himself as a participant in the situations he photographs, blurring the distinction between documentary photographer and subject. This ethical and methodological distinction is one of the central debates in extreme nocturnal documentary practice.",
      },
    },
    {
      id: "ma-03",
      title: "Visual Characteristics",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Chiaroscuro: Managing Darkness, Not Light" },
        {
          type: "paragraph",
          content:
            "Daytime photography manages light. Nocturnal photography manages darkness. The key decision: what to leave dark. Which parts of the face dissolve into black. Darkness is not absence — it is material.",
        },
        { type: "heading", content: "Available Darkness: A Deliberate Choice" },
        {
          type: "paragraph",
          content:
            "By analogy with available light: use the darkness that's already there. Don't fill the shadows with flash. Don't supplement the night. The midnight aesthetic resists illumination because darkness is the subject.",
        },
        { type: "heading", content: "Grain Is Not a Flaw — It's a Texture" },
        {
          type: "paragraph",
          content:
            "High-speed film pushed hard in development. High ISO with deliberate noise. The grain that comes from nocturnal shooting gives images physical tactility that smooth digital files lack. Embrace it.",
        },
        { type: "heading", content: "Extreme Contrast: U-Shaped Histogram" },
        {
          type: "paragraph",
          content:
            "Deep blocked-up blacks against isolated bright elements. Most tones at the extremes — midrange largely empty. The eye finds the isolated light; the surrounding darkness charges it with meaning.",
        },
        { type: "heading", content: "The City After Dark Has Different Rules" },
        {
          type: "paragraph",
          content:
            "Wet pavements, neon reflections, lamplight pools, long shadows. Different populations, different transactions, different norms. That social specificity gives nocturnal urban photography its documentary charge.",
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Abandoned_factory.jpg/1280px-Abandoned_factory.jpg",
          caption: "Industrial darkness: the chiaroscuro of shadow against isolated light sources, where darkness is the primary material",
          alt: "Abandoned factory interior with dramatic light and shadow contrast",
        },
      ],
      quiz: {
        question: "What does the concept of 'available darkness' mean in nocturnal photography practice?",
        options: [
          { id: "a", text: "The use of darkroom chemicals that increase image darkness during development", isCorrect: false },
          { id: "b", text: "The deliberate choice to use existing darkness rather than correcting or filling it with additional lighting", isCorrect: true },
          { id: "c", text: "The measurement of available light levels at night to determine correct exposure settings", isCorrect: false },
          { id: "d", text: "The technique of underexposing by several stops to create a darker overall image", isCorrect: false },
        ],
        explanation:
          "Available darkness, by analogy with available light, means using the darkness that is already there rather than adding light to correct or illuminate it. The midnight aesthetic practitioner chooses not to fill the shadows with flash or additional lighting because those shadows are the subject. This is a deliberate aesthetic and ethical choice — to let things remain dark, to allow the unseen to remain unseen.",
      },
    },
    {
      id: "ma-04",
      title: "Defining Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Brassaï — Paris de nuit (1933)" },
        {
          type: "paragraph",
          content:
            "The book that created nocturnal photography as a tradition. Years of nightly wandering — from monuments to brothels, street cleaners to lovers under bridges. The language it established is still in use.",
        },
        { type: "heading", content: "Bill Henson — Dark Portraits (1990s–present)" },
        {
          type: "paragraph",
          content:
            "Large-scale prints. Dense, rich blacks. Young figures emerging from velvet darkness with a tonal quality that gives them the weight of painting. Caravaggio-level chiaroscuro in photographic form.",
        },
        { type: "heading", content: "Antoine d'Agata — Vortex (2003) and subsequent work" },
        {
          type: "paragraph",
          content:
            "Blurred, grainy, underexposed, barely legible. d'Agata's books document extreme urban margins from the inside. The degradation isn't aesthetic failure — it's an ethical statement. He doesn't stand back.",
        },
        { type: "heading", content: "Anders Petersen — Café Lehmitz (1978)" },
        {
          type: "paragraph",
          content:
            "Years as a regular before a single photograph was made. The warmth and directness that resulted is what distinguishes this from darkness for its own sake. Human connection as the actual subject.",
        },
      ],
      quiz: {
        question: "Why is Brassaï's Paris de nuit (1933) considered a foundational work for nocturnal photography?",
        options: [
          { id: "a", text: "It was the first book to demonstrate that night photography was technically possible using available light", isCorrect: false },
          { id: "b", text: "It established the nocturnal city as a distinct world with its own language, population, and geography that photography could document", isCorrect: true },
          { id: "c", text: "It introduced the use of flash photography on Paris streets, which was previously prohibited by city ordinance", isCorrect: false },
          { id: "d", text: "It was the first photography book to use photogravure printing, which gave night images their characteristic density", isCorrect: false },
        ],
        explanation:
          "Paris de nuit was not merely a technical achievement — Brassaï documenting that night photography was possible — but a conceptual one. It treated the nocturnal city as a distinct world, with its own social geography, population, and set of transactions, that only became visible after midnight. This conceptual framing — night as alternative world rather than darkened version of day — established the language and approach of nocturnal photography.",
      },
    },
    {
      id: "ma-05",
      title: "Modern Influence",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Fashion Went Dark — On Purpose" },
        {
          type: "paragraph",
          content:
            "From the 1990s onward, dark high-contrast imagery became a premium brand signifier. Mario Sorrenti, Mert and Marcus — commercial visual languages derived from the documentary nocturnal tradition, applied to luxury.",
        },
        { type: "heading", content: "Dark Editorial = Cultural Seriousness" },
        {
          type: "paragraph",
          content:
            "i-D, Dazed, various fashion supplements adopted nocturnal aesthetics as shorthand for knowing, culturally sophisticated photography. The dark editorial cited Petersen and Moriyama without naming them.",
        },
        { type: "heading", content: "The Dark Instagram Aesthetic" },
        {
          type: "paragraph",
          content:
            "Desaturated palettes, heavy shadows, moody atmospheric lighting, urban solitude. A whole visual register on Instagram in the 2010s, descending from Moriyama without most users knowing his name.",
        },
        { type: "heading", content: "Music Visual Culture Is Midnight's Home" },
        {
          type: "paragraph",
          content:
            "Album art, music videos, artist portraiture — from Joy Division's sleeves to contemporary dark pop. Midnight aesthetics carry specific cultural meaning: seriousness, depth, emotional range. Music got there early.",
        },
      ],
      quiz: {
        question: "How did fashion photography use midnight aesthetics as a commercial signifier in the 1990s and beyond?",
        options: [
          { id: "a", text: "To reduce studio lighting costs by shooting on location at night rather than building expensive sets", isCorrect: false },
          { id: "b", text: "As a marker of premium or transgressive brand identity that distinguished luxury brands from mass-market brightness", isCorrect: true },
          { id: "c", text: "To create images that would reproduce better on the lower-quality paper used in fashion magazines", isCorrect: false },
          { id: "d", text: "In response to legal requirements that certain advertising images not show identifiable faces clearly", isCorrect: false },
        ],
        explanation:
          "Fashion photography adopted midnight aesthetics because darkness carried cultural meaning — seriousness, transgression, premium identity — that clean, bright photography did not. The dark, high-contrast image communicated that this brand was not for everyone, that it occupied a knowing, culturally sophisticated position. The nocturnal aesthetic was a marker of distinction in Bourdieu's sense: it required cultural capital to decode and appreciate.",
      },
    },
    {
      id: "ma-06",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Darkness Is a Tool, Not a Problem" },
        {
          type: "paragraph",
          content:
            "The midnight aesthetic teaches you to think about darkness as material — something to shape and use rather than correct. That requires a fundamental shift in how you approach exposure.",
        },
        { type: "heading", content: "1. Stop Filling the Shadows" },
        {
          type: "paragraph",
          content:
            "The instinct in low light: add more light. Resist it. Let shadows stay dark. Decide what remains in darkness as a positive compositional choice — not a technical compromise.",
        },
        { type: "heading", content: "2. One Light Source. That's It." },
        {
          type: "paragraph",
          content:
            "Find a single strong source — a street lamp, a window, a doorway — and place your subject in relation to it. The drama almost always comes from the relationship between one light and the surrounding darkness.",
        },
        { type: "heading", content: "3. Push Contrast in Processing" },
        {
          type: "paragraph",
          content:
            "Push the blacks deeper, not lighter. Use curves to block up shadows while maintaining detail in lit areas. The histogram should be weighted left — most tonal information in deep shadow and dark midtones.",
        },
        { type: "heading", content: "4. Stay Somewhere for a Long Time" },
        {
          type: "paragraph",
          content:
            "Brassaï and Petersen worked their subjects over years. Spend a whole night in one location instead of moving between locations chasing visual interest. Depth comes from duration.",
        },
        { type: "heading", content: "5. Let the Grain Work" },
        {
          type: "paragraph",
          content:
            "Embrace the noise from high ISO shooting. Add grain if your sensor produces clean files. The texture of grain gives dark images a physical, material quality that smooth noise reduction destroys.",
        },
      ],
      reflection: {
        prompt:
          "Think about a place you know well in daylight — a street, a room, a public space. Imagine it at 2am. What would remain? What social activities, what populations, what transactions would be visible that are invisible in daylight? What would the darkness make possible or necessary to look at? Write about what you would photograph and why — and what you would deliberately leave in darkness.",
      },
    },
  ],
}

export default course
