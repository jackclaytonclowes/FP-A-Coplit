import type { Course } from "@/types"

const course: Course = {
  id: "annie-leibovitz",
  title: "Annie Leibovitz",
  slug: "annie-leibovitz",
  description:
    "A study of Annie Leibovitz — America's most celebrated portrait photographer. From Rolling Stone to Vanity Fair, Leibovitz created the visual grammar of celebrity portraiture.",
  category: "great-photographers",
  accentColor: "#e8b847",
  estimatedHours: 3,
  tags: ["portrait", "celebrity", "editorial", "narrative", "american"],
  photographerId: "annie-leibovitz",
  lessons: [
    {
      id: "al-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Annie Leibovitz (b. 1949, Waterbury, Connecticut)" },
        {
          type: "paragraph",
          content:
            "Annie Leibovitz was born in 1949 in Waterbury, Connecticut, the third of six children in an Air Force family that moved frequently. She studied painting at the San Francisco Art Institute, then switched to photography after taking night classes. She joined Rolling Stone as a staff photographer at 21.",
        },
        {
          type: "paragraph",
          content:
            "Her twenty-year partnership with writer Susan Sontag, who died in 2004, was one of the defining relationships of her life and influenced her thinking about photography at the deepest level. Sontag's critical intelligence gave Leibovitz a framework for thinking about what photographs mean — not just what they show.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "1970: Joins Rolling Stone magazine as a staff photographer aged 21",
            "1975: Embarks on the Rolling Stones' Tour of the Americas as the official photographer",
            "1980: Final photograph of John Lennon — shot hours before his murder",
            "1983: Moves to Vanity Fair as contributing photographer",
            "2006: Major retrospective at the Brooklyn Museum",
            "2016: Exhibits 'Women: New Portraits' at the World Economic Forum, Davos",
          ],
        },
        {
          type: "quote",
          content: "A thing that you see in my pictures is that I was not afraid to fall in love with these people.",
          author: "Annie Leibovitz",
        },
      ],
      quiz: {
        question: "How old was Annie Leibovitz when she joined Rolling Stone as a staff photographer?",
        options: [
          { id: "a", text: "18", isCorrect: false },
          { id: "b", text: "21", isCorrect: true },
          { id: "c", text: "25", isCorrect: false },
          { id: "d", text: "28", isCorrect: false },
        ],
        explanation:
          "Leibovitz joined Rolling Stone at 21, after taking a night class in photography while studying painting at the San Francisco Art Institute. She became staff photographer almost immediately, and her career at the magazine would last twenty years.",
      },
    },
    {
      id: "al-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Theatrical Intimacy" },
        {
          type: "paragraph",
          content:
            "Leibovitz's visual style combines two things that might seem contradictory: theatrical production values and genuine personal intimacy with her subjects. Her images are clearly made — lit, directed, conceived — and yet they reveal something true about the people in them. This combination is her signature achievement.",
        },
        { type: "heading", content: "Narrative Concept" },
        {
          type: "paragraph",
          content:
            "Almost every Leibovitz portrait is built around a concept — an idea that the image communicates beyond simply depicting its subject. Whoopi Goldberg bathed in milk. Demi Moore nude and pregnant on the cover of Vanity Fair. Yoko Ono curled around John Lennon. These are not just portraits; they are arguments.",
        },
        { type: "heading", content: "Studio and Location" },
        {
          type: "paragraph",
          content:
            "Leibovitz works fluidly between studio and location. Her studio work is meticulous — carefully lit, perfectly composed. Her location work is more spontaneous but no less controlled. She is known for arriving at locations early and transforming them through lighting, props, and staging.",
        },
        { type: "heading", content: "The Celebrity Portrait" },
        {
          type: "paragraph",
          content:
            "Leibovitz did not invent the celebrity portrait, but she elevated it. Before her, celebrity photography was primarily promotional — images in service of the star's public image. Leibovitz negotiated access in exchange for a different kind of image: one that served the truth rather than the brand.",
        },
      ],
      quiz: {
        question: "Which concept best describes Leibovitz's distinctive approach to portraiture?",
        options: [
          { id: "a", text: "Documentary candour — catching celebrities unaware in natural situations", isCorrect: false },
          { id: "b", text: "Theatrical intimacy — combining high production values with genuine personal connection", isCorrect: true },
          { id: "c", text: "Minimalist formalism — plain backgrounds and no props", isCorrect: false },
          { id: "d", text: "Abstract expressionism — using colour to create emotional states", isCorrect: false },
        ],
        explanation:
          "Leibovitz combines theatrical production values — careful lighting, deliberate staging, strong conceptual direction — with genuine personal intimacy with her subjects. This paradox is her signature: images that are clearly constructed but feel deeply true.",
      },
    },
    {
      id: "al-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "John Lennon and Yoko Ono (1980)" },
        {
          type: "paragraph",
          content:
            "Leibovitz's final photograph of John Lennon — naked, curled foetal-position around Yoko Ono, taken hours before his murder. Originally intended for the cover of Rolling Stone, it became one of the most discussed photographs of the 20th century. The image's intimacy — Lennon's vulnerability, Ono's stillness — captures something irreplaceable.",
        },
        { type: "heading", content: "Demi Moore — Vanity Fair (1991)" },
        {
          type: "paragraph",
          content:
            "Leibovitz's photograph of a naked, pregnant Demi Moore on the cover of Vanity Fair caused a cultural earthquake. It was the first time nudity in pregnancy had been presented as beautiful and powerful rather than hidden or shameful. Widely censored and praised simultaneously, it remains one of the most discussed magazine covers ever made.",
        },
        { type: "heading", content: "Whoopi Goldberg in a Milk Bath (1984)" },
        {
          type: "paragraph",
          content:
            "One of Leibovitz's most celebrated images: Goldberg submerged in a bathtub of milk. Playful, provocative, and deeply affectionate. It exemplifies how Leibovitz works — finding an image with her subject, not imposing one on them.",
        },
        { type: "heading", content: "Women: New Portraits (2016)" },
        {
          type: "paragraph",
          content:
            "A project photographing women across all sectors of public life — activists, scientists, athletes, politicians, artists — presented without hierarchy. The project is Leibovitz's most explicitly feminist statement, and demonstrates that her practice has always been about more than celebrity.",
        },
      ],
      quiz: {
        question: "What made Leibovitz's 1991 Demi Moore Vanity Fair cover culturally significant?",
        options: [
          { id: "a", text: "It was the first time a non-white actress had appeared on the cover", isCorrect: false },
          { id: "b", text: "It presented nude pregnancy as beautiful and powerful, challenging its previous cultural invisibility", isCorrect: true },
          { id: "c", text: "It was the highest-selling issue in Vanity Fair's history", isCorrect: false },
          { id: "d", text: "It was the first celebrity portrait ever shot in colour", isCorrect: false },
        ],
        explanation:
          "The photograph was the first to present nude pregnancy as beautiful and powerful on a mainstream magazine cover. Previously, pregnancy was hidden or presented modestly. Leibovitz and Moore's image made it visible, proud, and explicitly political.",
      },
    },
    {
      id: "al-04-techniques",
      title: "Techniques & Approach",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Building Relationships as Method" },
        {
          type: "paragraph",
          content:
            "Leibovitz's technical foundation is relationship. She has described spending hours, sometimes days, with subjects before shooting — learning their manner, their humour, what they are proud of and what they are afraid of. The image is discovered in this relationship, not imposed upon it.",
        },
        { type: "heading", content: "Lighting Architecture" },
        {
          type: "paragraph",
          content:
            "Leibovitz is a sophisticated lighting architect. She uses large soft boxes, multiple sources, and carefully placed fill to create light that feels natural but is entirely controlled. Her lighting always serves the subject — it reveals character rather than flattening it.",
        },
        { type: "heading", content: "The Conceptual Brief" },
        {
          type: "paragraph",
          content:
            "Every major Leibovitz shoot has a concept agreed with the subject. She rarely shoots without a clear idea of what the image is trying to say. This involves negotiation — celebrities are often resistant to ideas that require vulnerability — and requires enormous interpersonal skill alongside technical mastery.",
        },
        { type: "heading", content: "Scale and Production" },
        {
          type: "paragraph",
          content:
            "Leibovitz works with large production teams for her major shoots. Wardrobe, hair, make-up, lighting, props — each element is considered and controlled. The result can look spontaneous, but is almost never so. This is high-craft image-making that presents itself as documentation.",
        },
      ],
      quiz: {
        question: "What does Leibovitz identify as the true foundation of her portrait practice?",
        options: [
          { id: "a", text: "Technical mastery of lighting and camera systems", isCorrect: false },
          { id: "b", text: "Relationship and time spent with subjects before shooting", isCorrect: true },
          { id: "c", text: "An extensive conceptual brief prepared before any contact with the subject", isCorrect: false },
          { id: "d", text: "A large professional production team managing every element", isCorrect: false },
        ],
        explanation:
          "Leibovitz has described relationship as the true foundation of her practice. She spends extensive time with subjects before shooting — learning who they are, what they value, what they're afraid of. The image is discovered in this relationship, not imposed upon it from outside.",
      },
    },
    {
      id: "al-05-legacy",
      title: "Influence & Legacy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Redefining Celebrity Photography" },
        {
          type: "paragraph",
          content:
            "Before Leibovitz, celebrity photography was primarily promotional. Stars were depicted as their publicists wished. Leibovitz negotiated a different contract: access in exchange for honesty. Her images show celebrities as complex, sometimes vulnerable human beings. This is now the aspiration of celebrity portraiture; before her, it was almost unknown.",
        },
        { type: "heading", content: "Feminist Portraiture" },
        {
          type: "paragraph",
          content:
            "Leibovitz's most explicitly feminist images — the pregnant Demi Moore, the Women series — created new visual language for depicting women's experience. She did not sentimentalise or exploit; she bore witness. This made her work a touchstone for subsequent photographers interested in women's lives.",
        },
        { type: "heading", content: "Rock Photography" },
        {
          type: "paragraph",
          content:
            "Her Rolling Stone years created the visual archive of American rock music from 1970 to 1990. The images of The Rolling Stones, Bruce Springsteen, Patti Smith, and dozens of others constitute a collective cultural memory of that era. They are how we know what that music looked like.",
        },
        { type: "heading", content: "The Magazine Portrait" },
        {
          type: "paragraph",
          content:
            "The contemporary magazine portrait — big concept, high production, famous subject — was largely invented by Leibovitz in collaboration with Vanity Fair in the 1980s and 90s. Every glossy magazine cover from that era forward owes something to her template.",
        },
      ],
      quiz: {
        question: "How did Leibovitz change the fundamental contract of celebrity photography?",
        options: [
          { id: "a", text: "She gave celebrities complete control over the final images used", isCorrect: false },
          { id: "b", text: "She exchanged access for honesty, depicting celebrities as complex human beings rather than promotional images", isCorrect: true },
          { id: "c", text: "She exclusively photographed celebrities in unscripted situations without their knowledge", isCorrect: false },
          { id: "d", text: "She refused to retouch celebrity images before publication", isCorrect: false },
        ],
        explanation:
          "Leibovitz changed the celebrity photography contract by negotiating access in exchange for honesty. Rather than promotional images showing celebrities as their publicists wished, she made images showing complex, sometimes vulnerable people. This is now the aspiration of celebrity portraiture.",
      },
    },
    {
      id: "al-06-learn",
      title: "What You Can Learn From Leibovitz",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From Her Practice" },
        {
          type: "paragraph",
          content:
            "Leibovitz teaches that portraiture is fundamentally relational — and that concept and production are tools in service of that relationship, not substitutes for it.",
        },
        { type: "heading", content: "1. Know Your Subject Before You Shoot" },
        {
          type: "paragraph",
          content:
            "Before your next portrait session, learn about your subject. What are they proud of? What do they find difficult? What image of themselves would surprise them? This research shapes the session before you open the camera bag.",
        },
        { type: "heading", content: "2. Find the Concept With Your Subject, Not Before" },
        {
          type: "paragraph",
          content:
            "Leibovitz's best ideas come from conversation — the image is found with the subject, not imposed on them. Arrive with possibilities, not a predetermined plan. Listen to what emerges.",
        },
        { type: "heading", content: "3. Every Element Is a Communication" },
        {
          type: "paragraph",
          content:
            "In a Leibovitz image, the clothes, the props, the setting, and the lighting all communicate. Begin to think about your portraits holistically — not just the face, but everything around it. What does the environment say about the person?",
        },
        { type: "heading", content: "4. Scale Your Ambition" },
        {
          type: "paragraph",
          content:
            "Leibovitz's images are often technically complex and require significant resources. But the principle — that portraits deserve conceptual ambition — applies at any scale. What is the most ambitious image you could make with the resources you have?",
        },
        { type: "heading", content: "5. Read Susan Sontag" },
        {
          type: "paragraph",
          content:
            "Leibovitz credits her twenty-year partnership with Susan Sontag as fundamentally changing how she thinks about photography. 'On Photography' and 'Regarding the Pain of Others' will change how you think too. The best photographers are also the most intellectually curious.",
        },
      ],
      reflection: {
        prompt:
          "Think about a person in your life you would like to photograph — not a celebrity, but someone you know well. What concept or image might reveal something true about them that they might not reveal themselves? How would you discuss it with them before shooting?",
      },
    },
  ],
}

export default course
