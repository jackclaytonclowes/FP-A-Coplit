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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Staff Photographer at 21. Yes, Really." },
        {
          type: "paragraph",
          content:
            "Born in Connecticut in 1949, raised in an Air Force family that never stayed put — Leibovitz was studying painting in San Francisco when a night photography class changed everything. She joined Rolling Stone at 21.",
        },
        {
          type: "paragraph",
          content:
            "Her twenty-year partnership with writer Susan Sontag — who died in 2004 — changed how she thought about photographs at the deepest level. Not just what they show, but what they mean.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "1970: Joins Rolling Stone at 21",
            "1975: Official photographer on the Rolling Stones' Tour of the Americas",
            "1980: Final photograph of John Lennon — taken hours before his murder",
            "1983: Moves to Vanity Fair",
            "2006: Major retrospective at the Brooklyn Museum",
            "2016: 'Women: New Portraits' shown at the World Economic Forum, Davos",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Theatrical and Intimate — at the Same Time" },
        {
          type: "paragraph",
          content:
            "Leibovitz's images are clearly made — lit, directed, conceived — and yet they reveal something true. That combination of high production and genuine intimacy is her signature achievement.",
        },
        { type: "heading", content: "Every Portrait Has an Argument" },
        {
          type: "paragraph",
          content:
            "Whoopi Goldberg in a milk bath. Demi Moore nude and pregnant. Yoko Ono curled around Lennon. These aren't portraits — they're positions. She builds arguments, not just images.",
        },
        { type: "heading", content: "Studio and Location, Equally Controlled" },
        {
          type: "paragraph",
          content:
            "She works fluidly between studio precision and location spontaneity — but arrives early everywhere, transforming whatever space she finds through lighting, props, and staging.",
        },
        { type: "heading", content: "She Reinvented Celebrity Photography" },
        {
          type: "paragraph",
          content:
            "Before Leibovitz, celebrity photos served publicists. She negotiated a different deal: access in exchange for honesty. She showed celebrities as complex, sometimes vulnerable humans — which was almost unknown.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "John Lennon and Yoko Ono (1980)" },
        {
          type: "paragraph",
          content:
            "Naked, curled foetal-position around Yoko Ono — taken hours before his murder. It became one of the most discussed photographs of the 20th century. The intimacy is irreplaceable.",
        },
        { type: "heading", content: "Demi Moore — Vanity Fair (1991)" },
        {
          type: "paragraph",
          content:
            "Naked and heavily pregnant on the cover of Vanity Fair — the first time nude pregnancy had been presented as beautiful and powerful in mainstream media. Widely censored. Widely praised. Never forgotten.",
        },
        { type: "heading", content: "Whoopi Goldberg in a Milk Bath (1984)" },
        {
          type: "paragraph",
          content:
            "Playful, provocative, deeply affectionate. Leibovitz found this image with Goldberg — it wasn't imposed. That's the difference between her portraits and everyone else's.",
        },
        { type: "heading", content: "Women: New Portraits (2016)" },
        {
          type: "paragraph",
          content:
            "Activists, scientists, athletes, politicians, artists — all documented without hierarchy. Her most explicitly feminist work, and proof her practice was always about more than celebrity.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Relationship Is the Technique" },
        {
          type: "paragraph",
          content:
            "She spends hours — sometimes days — with subjects before shooting. Learning their manner, their humour, their fears. The image is discovered in that relationship, not imposed on it.",
        },
        { type: "heading", content: "Light That Reveals Character" },
        {
          type: "paragraph",
          content:
            "Large soft boxes, multiple sources, precisely placed fill — her lighting looks natural but is fully controlled. It always serves the subject; it never flattens them.",
        },
        { type: "heading", content: "The Concept Is Negotiated" },
        {
          type: "paragraph",
          content:
            "Every major shoot has a concept agreed with the subject. Getting celebrities to accept vulnerability requires enormous interpersonal skill — that skill is as important as any camera technique.",
        },
        { type: "heading", content: "Big Teams, Invisible Results" },
        {
          type: "paragraph",
          content:
            "Wardrobe, hair, makeup, lighting, props — all controlled, all considered. The result often looks spontaneous. That's the craft: high-production image-making that presents itself as documentary.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "She Changed What Celebrity Photography Is" },
        {
          type: "paragraph",
          content:
            "Before her, stars were shown as publicists wished. Leibovitz traded access for honesty and got celebrities to show up as complex humans. That is now the aspiration of the entire industry.",
        },
        { type: "heading", content: "Feminist Portraiture That Actually Works" },
        {
          type: "paragraph",
          content:
            "The pregnant Demi Moore. The Women series. She didn't sentimentalise or exploit — she bore witness. Her images became touchstones for every photographer interested in women's lives.",
        },
        { type: "heading", content: "The Visual Archive of Rock" },
        {
          type: "paragraph",
          content:
            "Her Rolling Stone years are the visual record of American rock music from 1970 to 1990. The Stones, Springsteen, Patti Smith — this is how we know what that music looked like.",
        },
        { type: "heading", content: "She Invented the Modern Magazine Portrait" },
        {
          type: "paragraph",
          content:
            "Big concept, high production, famous subject — Leibovitz and Vanity Fair built this template in the 1980s and 90s. Every glossy cover since owes her something.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Portraiture Is a Relationship, Not a Session" },
        {
          type: "paragraph",
          content:
            "Leibovitz teaches that concept and production serve the relationship with the subject — not the other way around. Here's how to apply that.",
        },
        { type: "heading", content: "1. Know Your Subject Before You Shoot" },
        {
          type: "paragraph",
          content:
            "Research the person before you open the camera bag. What are they proud of? What surprises them about themselves? That knowledge shapes everything.",
        },
        { type: "heading", content: "2. Find the Concept With Your Subject, Not Before" },
        {
          type: "paragraph",
          content:
            "Arrive with possibilities, not a fixed plan. Leibovitz's best ideas come from conversation. Listen to what emerges in the room.",
        },
        { type: "heading", content: "3. Every Element Is a Communication" },
        {
          type: "paragraph",
          content:
            "Clothes, props, setting, lighting — they all say something. Think about your portraits holistically. What does everything around the face say about the person?",
        },
        { type: "heading", content: "4. Scale Your Ambition" },
        {
          type: "paragraph",
          content:
            "Leibovitz works with big teams and big budgets. But conceptual ambition doesn't require either. What's the most ambitious image you can make with what you have?",
        },
        { type: "heading", content: "5. Read Susan Sontag" },
        {
          type: "paragraph",
          content:
            "Leibovitz credits Sontag with fundamentally changing how she thinks about photography. 'On Photography' will do the same for you. The best photographers are the most intellectually curious.",
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
