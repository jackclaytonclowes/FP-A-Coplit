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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Irving Penn (1917–2009, Plainfield, New Jersey)" },
        {
          type: "paragraph",
          content:
            "Irving Penn was born in 1917 in Plainfield, New Jersey, and studied design under Alexey Brodovitch at the Philadelphia Museum School of Industrial Art — the same teacher who would later influence Richard Avedon. He initially wanted to be a painter, but finding success in that field elusive, turned to photography in 1943.",
        },
        {
          type: "paragraph",
          content:
            "He joined Vogue in 1943, where he would remain — with extraordinary fidelity — for the rest of his working life. His relationship with Vogue art director Alexander Liberman was one of the defining creative partnerships in magazine history. Together they produced some of the most refined fashion and portrait images ever published.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Formal Restraint" },
        {
          type: "paragraph",
          content:
            "Penn's visual style is defined by restraint. Where other photographers add — more drama, more light, more concept — Penn removes. His images are clean, considered, and formally rigorous. He works with the minimum information necessary to achieve his purpose, and no more.",
        },
        { type: "heading", content: "The Corner" },
        {
          type: "paragraph",
          content:
            "One of Penn's most distinctive techniques is photographing subjects in a corner — two walls meeting at a right angle, creating a confined space that forces the subject's body to respond to the environment. The resulting images have a peculiar intimacy and tension; subjects cannot simply pose freely but must negotiate the physical constraint.",
        },
        { type: "heading", content: "Platinum-Palladium Printing" },
        {
          type: "paragraph",
          content:
            "Penn became devoted to platinum-palladium printing — a 19th century process that produces prints of extraordinary tonal range, permanence, and surface quality, but requires enormous technical skill and expense. His platinum prints have a warmth and depth that silver-gelatin prints cannot match.",
        },
        { type: "heading", content: "Still Life Precision" },
        {
          type: "paragraph",
          content:
            "Penn's still life photography — particularly his series on everyday objects and food — demonstrates his formal training as a designer. He understood how objects could be arranged to create perfect visual tension, and how light could be used to reveal the essential character of things. Even a discarded cigarette butt became, in his hands, a form of extraordinary sculptural beauty.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Small Trades (1950–51)" },
        {
          type: "paragraph",
          content:
            "Penn photographed tradespeople — plumbers, window cleaners, bakers, street cleaners — in their work clothes and with their tools. Shot against a neutral background with the corner technique, the images treat each subject with the same formal respect as a Vogue cover star. A sustained argument for the dignity of labour.",
        },
        { type: "heading", content: "Worlds in a Small Room (1974)" },
        {
          type: "paragraph",
          content:
            "Penn travelled the world — Papua New Guinea, Dahomey, Morocco, Nepal — bringing a portable studio tent that he erected wherever he went. Inside, he photographed local people in the same controlled natural light conditions he used in New York. The democratising principle of Small Trades extended globally.",
        },
        { type: "heading", content: "Cigarettes (1972–2004)" },
        {
          type: "paragraph",
          content:
            "An ongoing series of close-up photographs of discarded cigarette butts — intimate, unflinching, formally perfect. Penn was not moralising about smoking; he was photographing objects with the attention they are rarely given. The series demonstrates that formal rigour can transform any subject.",
        },
        { type: "heading", content: "Fashion Photography for Vogue" },
        {
          type: "paragraph",
          content:
            "Penn shot for Vogue for over sixty years — an unmatched relationship in magazine history. His fashion images are distinguished by their formal clarity: clean backgrounds, precise lighting, attention to the architecture of garments. He photographed clothes as sculptural objects, not simply as things to be worn.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Natural Light as Control" },
        {
          type: "paragraph",
          content:
            "Penn preferred to work in natural light whenever possible — but natural light rigorously controlled. He worked in north-facing studios in New York that received consistent, directionless natural light throughout the day. This gave him predictability while retaining the quality of daylight.",
        },
        { type: "heading", content: "Preparatory Drawings" },
        {
          type: "paragraph",
          content:
            "Penn made detailed preparatory drawings before many of his shoots — sketching compositions, lighting arrangements, and the relationship between subject and background. This design-thinking approach, derived from his training with Brodovitch, meant that by the time the camera was raised, most decisions had already been made.",
        },
        { type: "heading", content: "Patience and Stillness" },
        {
          type: "paragraph",
          content:
            "Penn's portrait sessions were known for their stillness and patience. He was not interested in speed or spontaneity. He would wait — sometimes for hours — for a subject to arrive at the precise quality of presence he was looking for. The resulting images have a quality of duration: you sense that both photographer and subject have invested significant time.",
        },
        { type: "heading", content: "Post-Production as Craft" },
        {
          type: "paragraph",
          content:
            "Penn's devotion to platinum-palladium printing was an extension of his commitment to craft. He learned the process himself, produced his own prints, and considered the darkroom as important as the camera. He made prints slowly, in limited numbers, treating each as a unique object.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Master of Formal Photography" },
        {
          type: "paragraph",
          content:
            "Penn is the master of formal photography — photography governed by design thinking, by the relationships between forms, by the discipline of restraint. His influence is perhaps less visible than Avedon's or Newton's because it is more quiet: he teaches through precision and patience rather than energy and provocation.",
        },
        { type: "heading", content: "Still Life Photography" },
        {
          type: "paragraph",
          content:
            "Penn elevated still life photography from a commercial exercise to a fine art. His series on food, cigarettes, and everyday objects demonstrated that the most mundane things contain worlds of formal beauty if seen with sufficient attention. This gave subsequent photographers permission to make art from anything.",
        },
        { type: "heading", content: "The Dignity of Any Subject" },
        {
          type: "paragraph",
          content:
            "Penn's Small Trades and Worlds in a Small Room projects established a principle that continues to influence documentary and portrait photographers: every subject — regardless of social status, geography, or cultural prominence — deserves the same careful attention. This is photography as democratic art.",
        },
        { type: "heading", content: "Craft and Permanence" },
        {
          type: "paragraph",
          content:
            "Penn's devotion to platinum-palladium printing — a process of extraordinary permanence, with prints lasting thousands of years — was a statement about photography's relationship with time. In an era of disposable images, his commitment to permanence is a form of resistance.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From His Practice" },
        {
          type: "paragraph",
          content:
            "Penn teaches discipline, restraint, and the radical possibility of treating any subject with maximum formal attention.",
        },
        { type: "heading", content: "1. Remove, Don't Add" },
        {
          type: "paragraph",
          content:
            "Before your next shoot, ask what you can remove rather than what you can add. Fewer props, less background, simpler light. Penn's images achieve their power through what they exclude. Learn to edit before you press the shutter.",
        },
        { type: "heading", content: "2. Control Your Environment" },
        {
          type: "paragraph",
          content:
            "Penn worked in north-facing studios to get consistent natural light. Find the light in your environment that is most reliable, most consistent, most amenable to control. Then return to it repeatedly until you understand it completely.",
        },
        { type: "heading", content: "3. Photograph the Ordinary as if It Were Art" },
        {
          type: "paragraph",
          content:
            "Penn photographed cigarette butts with the same attention he gave to fashion models. Find five objects in your immediate environment that you regard as unworthy of photography. Photograph each one as if it were the most important object you have ever photographed.",
        },
        { type: "heading", content: "4. Plan Before You Shoot" },
        {
          type: "paragraph",
          content:
            "Try Penn's method: sketch your desired composition before you open the camera bag. What is the relationship between subject and background? Where is the light coming from? What is the geometric structure of the image? Planning reveals assumptions and prevents visual accidents.",
        },
        { type: "heading", content: "5. Care About the Print" },
        {
          type: "paragraph",
          content:
            "Penn spent as much time in the darkroom as behind the camera. Whether you print physically or process digitally, treat the output as carefully as the capture. The image is not complete when the shutter closes.",
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
