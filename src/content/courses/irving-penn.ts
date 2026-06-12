import type { Course } from "@/types"

const course: Course = {
  id: "irving-penn",
  title: "Irving Penn",
  slug: "irving-penn",
  description:
    "A study of Irving Penn — the consummate studio photographer. Penn's meticulous, formally rigorous images — whether fashion, portraiture, or still life — are among the most refined in photography's history.",
  category: "great-photographers",
  accentColor: "#d4c5b0",
  estimatedHours: 3,
  tags: ["studio", "portrait", "still-life", "fashion", "formal"],
  photographerId: "irving-penn",
  lessons: [
    {
      id: "ip-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Painter Who Became a Legend" },
        {
          type: "paragraph",
          content:
            "Irving Penn wanted to be a painter. When that didn't pan out, he picked up a camera in 1943 — and accidentally became one of photography's greatest artists.",
        },
        {
          type: "paragraph",
          content:
            "He joined Vogue that same year and stayed for the rest of his life. Six decades, one magazine, one of history's great creative partnerships.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "1943: Joins Vogue; shoots his first cover in that year",
            "1947: Begins relationship with model Lisa Fonssagrives, whom he would later marry",
            "1951: Begins platinum-palladium printing — a process he would return to throughout his career",
            "1967: 'Small Trades' series — portraits of tradespeople in their work clothes",
            "1975: 'Cigarettes' series — close-up studies of discarded cigarette butts",
            "1980s–2000s: Extensive work with Platinum printing; retrospectives worldwide",
            "2009: Dies in New York, aged 92",
          ],
        },
        {
          type: "quote",
          content: "A good photograph is one that communicates a fact, touches the heart, and leaves the viewer a changed person for having seen it.",
          author: "Irving Penn",
        },
      ],
      quiz: {
        question: "Like Richard Avedon, Irving Penn studied under which influential design teacher?",
        options: [
          { id: "a", text: "László Moholy-Nagy", isCorrect: false },
          { id: "b", text: "Alexey Brodovitch", isCorrect: true },
          { id: "c", text: "Paul Strand", isCorrect: false },
          { id: "d", text: "Berenice Abbott", isCorrect: false },
        ],
        explanation:
          "Both Penn and Avedon studied under Alexey Brodovitch — Penn at the Philadelphia Museum School of Industrial Art, Avedon at the Design Laboratory. Brodovitch's influence on both photographers is traceable in their shared commitment to formal precision and their understanding of photography as design.",
      },
    },
    {
      id: "ip-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Less Is More, Always More" },
        {
          type: "paragraph",
          content:
            "Penn's instinct was to remove, not add. Less light, less background, less clutter. The minimum information needed — and nothing else.",
        },
        { type: "heading", content: "Stuck in a Corner (On Purpose)" },
        {
          type: "paragraph",
          content:
            "Penn put his subjects in a literal corner — two walls meeting at a right angle. You can't just pose; you have to negotiate the space. The tension that creates? That's the image.",
        },
        { type: "heading", content: "Printing That Outlives Us All" },
        {
          type: "paragraph",
          content:
            "Penn used platinum-palladium printing — a 19th-century process so permanent his prints will outlast most buildings. The tones are warmer and deeper than anything silver-gelatin can offer.",
        },
        { type: "heading", content: "Beauty in a Cigarette Butt" },
        {
          type: "paragraph",
          content:
            "Penn photographed discarded cigarettes with the same care he gave Vogue covers. His designer's eye turned any object into a formal masterpiece.",
        },
        {
          type: "quote",
          content: "Often while traveling with a camera we arrive just as the sun slips over the horizon of a moment, too late to expose film, only time to expose ourselves.",
          author: "Irving Penn",
        },
      ],
      quiz: {
        question: "What was unusual about Penn's technique of photographing subjects 'in the corner'?",
        options: [
          { id: "a", text: "It used special reflective materials to create unusual lighting effects", isCorrect: false },
          { id: "b", text: "It confined subjects in a physical space, forcing their bodies to respond to the environment and creating natural tension", isCorrect: true },
          { id: "c", text: "It was a way of creating a neutral background without a studio backdrop", isCorrect: false },
          { id: "d", text: "It was a practical solution to shooting in environments without electricity", isCorrect: false },
        ],
        explanation:
          "By photographing subjects in the corner where two walls meet, Penn created a physical constraint that subjects had to negotiate. Unable to simply pose freely, they were forced to respond to their environment in ways that produced unusual and revealing postures. The corner became a psychological as well as physical space.",
      },
    },
    {
      id: "ip-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Small Trades: The Dignity Project" },
        {
          type: "paragraph",
          content:
            "Penn photographed plumbers, bakers, window cleaners — in their work clothes, with their tools, against a neutral background. Same formal respect as a Vogue cover star. That was the point.",
        },
        { type: "heading", content: "Worlds in a Small Room" },
        {
          type: "paragraph",
          content:
            "Penn packed a portable studio tent and took it to Papua New Guinea, Morocco, Nepal. Same controlled light everywhere. Every person on earth deserves the same careful attention.",
        },
        { type: "heading", content: "Cigarettes (1972–2004)" },
        {
          type: "paragraph",
          content:
            "Discarded cigarette butts, shot like sculpture. He wasn't moralising — he was paying attention to things everyone else ignored. The result is formally perfect.",
        },
        { type: "heading", content: "Six Decades of Vogue" },
        {
          type: "paragraph",
          content:
            "Penn shot for Vogue for over sixty years — an unmatched run. His fashion images treat garments as architecture: precise light, clean backgrounds, clothes as sculptural objects.",
        },
      ],
      quiz: {
        question: "What was the purpose of Penn's 'Worlds in a Small Room' project?",
        options: [
          { id: "a", text: "To photograph interiors of small apartments around the world", isCorrect: false },
          { id: "b", text: "To bring a portable studio to locations worldwide, photographing local people in controlled natural light", isCorrect: true },
          { id: "c", text: "To document traditional crafts and small-scale industries disappearing globally", isCorrect: false },
          { id: "d", text: "To create a private archive of Penn's personal travels and relationships", isCorrect: false },
        ],
        explanation:
          "Penn erected a portable studio tent wherever he travelled — Papua New Guinea, Morocco, Nepal, Dahomey — and photographed local people inside it using the same controlled natural light conditions he used in New York. The project applied his democratic visual principle globally: everyone, regardless of culture or geography, deserves the same formal attention.",
      },
    },
    {
      id: "ip-04-techniques",
      title: "Techniques & Approach",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Natural Light, Totally Controlled" },
        {
          type: "paragraph",
          content:
            "Penn used natural light — but only from north-facing studios, consistent all day, no surprises. He wanted daylight's quality with a studio's predictability.",
        },
        { type: "heading", content: "Draw It Before You Shoot It" },
        {
          type: "paragraph",
          content:
            "Penn sketched compositions before sessions — lighting, subject, background geometry all mapped in advance. By the time he picked up the camera, the image was half-made.",
        },
        { type: "heading", content: "Wait. Then Wait More." },
        {
          type: "paragraph",
          content:
            "His sessions were long and quiet. He'd wait hours for the exact quality of presence he wanted. You can feel that duration in the images — time invested, and it shows.",
        },
        { type: "heading", content: "The Darkroom as Studio" },
        {
          type: "paragraph",
          content:
            "Penn made his own platinum prints, slowly, in limited numbers. The darkroom wasn't an afterthought — it was half the work.",
        },
      ],
      quiz: {
        question: "How did Penn's background as a trained designer influence his photographic process?",
        options: [
          { id: "a", text: "He applied minimalist design principles to fashion styling and costume", isCorrect: false },
          { id: "b", text: "He made preparatory drawings before shoots, working out compositions before raising the camera", isCorrect: true },
          { id: "c", text: "He worked exclusively with graphic designers to art-direct his images", isCorrect: false },
          { id: "d", text: "He approached photography purely as commercial design rather than as fine art", isCorrect: false },
        ],
        explanation:
          "Penn's design training led him to approach photography as a designer: sketching compositions and lighting arrangements before the session began. This meant most decisions were made in advance, allowing the shooting process to be relatively controlled and deliberate.",
      },
    },
    {
      id: "ip-05-legacy",
      title: "Influence & Legacy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Quiet Power, Lasting Impact" },
        {
          type: "paragraph",
          content:
            "Penn's influence is subtler than Avedon's or Newton's — no drama, no controversy. Just precision and patience, teaching through example.",
        },
        { type: "heading", content: "He Made Still Life Fine Art" },
        {
          type: "paragraph",
          content:
            "Penn proved a cigarette butt or a pile of food could be as worthy as a model. He gave every photographer permission to make art from anything.",
        },
        { type: "heading", content: "Every Subject Deserves Your Best" },
        {
          type: "paragraph",
          content:
            "A New York plumber and a Papua New Guinea tribesman got the same careful attention from Penn. That's photography as democratic art — and it still matters.",
        },
        { type: "heading", content: "Prints That Last Millennia" },
        {
          type: "paragraph",
          content:
            "Penn's platinum-palladium prints will last thousands of years. In the age of disposable images, that commitment to permanence is genuinely radical.",
        },
      ],
      quiz: {
        question: "What principle connects Penn's 'Small Trades' (1950s New York) to 'Worlds in a Small Room' (1970s global travel)?",
        options: [
          { id: "a", text: "Both series used identical technical equipment and film stock", isCorrect: false },
          { id: "b", text: "Both applied the same careful formal attention to all subjects regardless of status or geography", isCorrect: true },
          { id: "c", text: "Both focused exclusively on working-class subjects outside the fashion world", isCorrect: false },
          { id: "d", text: "Both were commissioned by the same magazine editor", isCorrect: false },
        ],
        explanation:
          "Both series enact the same democratic principle: every subject deserves the same careful formal attention, regardless of their social position, occupation, or cultural background. Penn applied identical visual rigour to a New York plumber and a Papua New Guinea tribesman — asserting their equal worth as photographic subjects.",
      },
    },
    {
      id: "ip-06-learn",
      title: "What You Can Learn From Penn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Five Lessons Worth Stealing" },
        {
          type: "paragraph",
          content:
            "Penn teaches discipline, restraint, and the radical idea that anything — anything — deserves maximum formal attention.",
        },
        { type: "heading", content: "1. Remove, Don't Add" },
        {
          type: "paragraph",
          content:
            "Before your next shoot, ask what you can cut — not what you can add. Fewer props, less background, simpler light. Penn's images achieve power through what they leave out.",
        },
        { type: "heading", content: "2. Control Your Environment" },
        {
          type: "paragraph",
          content:
            "Find the light in your space that's most consistent and return to it until you know it completely. Mastery comes from repetition with the same conditions.",
        },
        { type: "heading", content: "3. Photograph the Ordinary as if It Were Art" },
        {
          type: "paragraph",
          content:
            "Find five objects you'd never bother photographing. Shoot each one like it's the most important thing you've ever seen. Penn did this with cigarette butts.",
        },
        { type: "heading", content: "4. Plan Before You Shoot" },
        {
          type: "paragraph",
          content:
            "Sketch your composition before you open the camera bag. Where's the light? What's the geometry? Planning reveals your assumptions and stops happy accidents masquerading as decisions.",
        },
        { type: "heading", content: "5. Care About the Print" },
        {
          type: "paragraph",
          content:
            "Penn spent as much time in the darkroom as behind the camera. Whether you print or process digitally, treat the output as carefully as the capture — the image isn't done when the shutter closes.",
        },
      ],
      reflection: {
        prompt:
          "Penn said 'a good photograph touches the heart and leaves the viewer a changed person.' Look at your recent photographs. Which one has the most potential to touch a viewer's heart? What would you need to change about it — in composition, light, or subject — to make it achieve that?",
      },
    },
  ],
}

export default course
