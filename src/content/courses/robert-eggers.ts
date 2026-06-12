import type { Course } from "@/types"

const course: Course = {
  id: "robert-eggers",
  title: "Robert Eggers",
  slug: "robert-eggers",
  description:
    "A study of Robert Eggers — cinema's most rigorous historical researcher. The Witch, The Lighthouse, and The Northman use period authenticity to unlock primal psychological terror.",
  category: "directors",
  accentColor: "#556066",
  estimatedHours: 3,
  tags: ["folk-horror", "period", "historical", "atmosphere", "dread"],
  lessons: [
    {
      id: "re-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Robert Eggers (born 1983, New Hampshire)" },
        {
          type: "paragraph",
          content:
            "Eggers designed theatre sets before he directed anything. A director who starts in production design thinks first about the physical world a story inhabits — the materials, textures, and objects that make a period feel real.",
        },
        {
          type: "paragraph",
          content:
            "The Witch (2015) drew on actual Puritan court records and diaries. The Lighthouse (2019) was shot in 1.19:1 on black-and-white Kodak Ortho Plus. He doesn't compromise on the specifics — ever.",
        },
        {
          type: "paragraph",
          content:
            "The Northman applied the same rigour to Viking mythology. Nosferatu (2024) completed a decade-long project to remake Murnau's 1922 expressionist masterwork. Each film is years of research first.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "Early career: Theatre production design in New England",
            "2015: The Witch — premiered at Sundance, acquired by A24",
            "2019: The Lighthouse — shot in 1.19:1 black-and-white on Kodak Ortho Plus, Willem Dafoe and Robert Pattinson",
            "2022: The Northman — Viking epic with Alexander Skarsgård and Anya Taylor-Joy",
            "2024: Nosferatu — remake of Murnau's 1922 expressionist masterwork",
          ],
        },
        {
          type: "quote",
          content:
            "I want the audience to feel that this world really existed — that we are looking through a window at something true.",
          author: "Robert Eggers",
        },
      ],
      quiz: {
        question: "What professional background before filmmaking most shaped Eggers' approach to historical authenticity?",
        options: [
          {
            id: "a",
            text: "Academic study of medieval and early modern history at university",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Theatre production design — building sets before directing gave him a concrete grounding in material culture",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Work as a documentary filmmaker recording historical re-enactment communities",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Apprenticeship under Werner Herzog on historical films",
            isCorrect: false,
          },
        ],
        explanation:
          "Eggers trained as a theatre production designer before becoming a director. A director who begins in production design thinks first about the physical world a story inhabits — the materials, textures, objects, and spaces that make a period real. This foundation explains why Eggers' films feel physically authentic in a way that purely historically researched films often do not.",
      },
    },
    {
      id: "re-02-influences",
      title: "Influences & Cinematic Education",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Dreyer: Faith as Pressure, Not Comfort" },
        {
          type: "paragraph",
          content:
            "Day of Wrath, Ordet — Dreyer made films where God's presence is felt as weight, not reassurance. Eggers' Puritan characters experience their faith the same way.",
        },
        { type: "heading", content: "Murnau: Shadow as Psychological Map" },
        {
          type: "paragraph",
          content:
            "The original Nosferatu proved horror could operate through visual metaphor alone. Eggers' affinity with Murnau deepened across his career and ended in a remake. It was always coming.",
        },
        { type: "heading", content: "Herzog: Obsessive Authenticity Produces Real Images" },
        {
          type: "paragraph",
          content:
            "Filming in actual jungles with actual boats produces a quality of reality that constructed sets cannot match. Eggers absorbed this lesson and applies it to every period, every material, every word.",
        },
        { type: "heading", content: "Bergman: Isolation as Psychological Environment" },
        {
          type: "paragraph",
          content:
            "Winter Light, Through a Glass Darkly — characters cut off from society, unable to escape their own minds. The Lighthouse keepers are Bergman figures trapped in a different century.",
        },
        { type: "heading", content: "British Folk Horror: Community Ritual as Dread" },
        {
          type: "paragraph",
          content:
            "The Wicker Man, Witchfinder General — rural isolation and seasonal folklore are more disturbing than any supernatural monster. The Witch traces this tradition back to its historical sources.",
        },
      ],
      quiz: {
        question: "What did Werner Herzog's approach to historical filmmaking demonstrate to Eggers?",
        options: [
          {
            id: "a",
            text: "That period films work best with entirely non-professional casts from the relevant communities",
            isCorrect: false,
          },
          {
            id: "b",
            text: "That obsessive authenticity — even literal, physical methods — produces a quality of reality that studied reconstruction cannot achieve",
            isCorrect: true,
          },
          {
            id: "c",
            text: "That documentary techniques should be applied to all historical subjects",
            isCorrect: false,
          },
          {
            id: "d",
            text: "That European art cinema provides the only valid framework for serious historical subjects",
            isCorrect: false,
          },
        ],
        explanation:
          "Herzog's Aguirre and Fitzcarraldo are films in which the director's obsession with authentic physical reality — actually filming in jungles, actually moving boats — produces a documentary quality of environment that constructed sets cannot match. Eggers absorbed this lesson: the obsessive pursuit of historical accuracy in materials, language, and setting produces images that feel genuinely inhabited by their period.",
      },
    },
    {
      id: "re-03-style",
      title: "Visual Style & Techniques",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Years of Research Before a Word of Dialogue" },
        {
          type: "paragraph",
          content:
            "The Witch's dialogue comes from actual Puritan court records. The architecture was built from period evidence. The costumes were reconstructed from surviving garments. Specificity is the method.",
        },
        { type: "heading", content: "The Frame That Presses In" },
        {
          type: "paragraph",
          content:
            "The Lighthouse was shot in 1.19:1 — even squarer than Academy ratio. The nearly square frame has no room to escape. It traps the characters visually the way the rock traps them physically.",
        },
        { type: "heading", content: "Period Light Only" },
        {
          type: "paragraph",
          content:
            "Candles, hearth fires, overcast northern skies — Eggers' films are lit exclusively by sources available in the period. The result looks like old paintings. It feels excavated, not constructed.",
        },
        { type: "heading", content: "Landscape as Psychological Projection" },
        {
          type: "paragraph",
          content:
            "The forest in The Witch isn't just threatening — it's a projection of the family's repressed sexuality and terror. The sea in The Lighthouse is the unconscious these men can't escape.",
        },
      ],
      quiz: {
        question: "Why does Eggers use constricted aspect ratios like 1.19:1 in The Lighthouse?",
        options: [
          {
            id: "a",
            text: "To recreate the aspect ratio of early 20th-century films as an homage to silent cinema",
            isCorrect: false,
          },
          {
            id: "b",
            text: "To create physical claustrophobia in the frame itself, leaving characters no visual room to escape",
            isCorrect: true,
          },
          {
            id: "c",
            text: "To reduce production costs by using a smaller camera format",
            isCorrect: false,
          },
          {
            id: "d",
            text: "To allow the film to be projected in older theatres without modification",
            isCorrect: false,
          },
        ],
        explanation:
          "The 1.19:1 aspect ratio of The Lighthouse is a formal choice that produces psychological claustrophobia. The nearly square frame has no widescreen escape — it presses in on the characters from left and right, trapping them within the frame as they are trapped on the rock. Eggers understands that the shape of the image is as much a tool as anything within it.",
      },
    },
    {
      id: "re-04-films",
      title: "Essential Films",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Witch (2015)" },
        {
          type: "paragraph",
          content:
            "A Puritan family at the edge of a New England forest. The dialogue is drawn from period documents. The witch may or may not be real — the psychological dissolution is absolutely real. Anya Taylor-Joy's debut.",
        },
        { type: "heading", content: "The Lighthouse (2019)" },
        {
          type: "paragraph",
          content:
            "Two men, one light, one rock, an extended storm. Black-and-white, 1.19:1, Melville and Prometheus and lighthouse folklore all at once. Male hierarchy, jealousy, and psychotic breakdown.",
        },
        { type: "heading", content: "The Northman (2022)" },
        {
          type: "paragraph",
          content:
            "The Norse legend behind Hamlet, filmed with obsessive historical accuracy in Iceland, Ireland, and the UK. No Hollywood Vikings — actual religious practices, material culture, social structures.",
        },
        { type: "heading", content: "Nosferatu (2024)" },
        {
          type: "paragraph",
          content:
            "Eggers remakes Murnau after more than a decade of development. Relocated to 19th-century Germany, with full historical and material authenticity applied to a story Murnau told through pure visual metaphor.",
        },
      ],
      quiz: {
        question: "What dual reading does The Witch deliberately maintain throughout the film?",
        options: [
          {
            id: "a",
            text: "The film can be read as either a period drama or a contemporary allegory for political persecution",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The supernatural threat may be real or may be a projection of the family's psychological dissolution under religious extremism",
            isCorrect: true,
          },
          {
            id: "c",
            text: "The story can be read as either a feminist allegory or a straightforward genre horror film",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The film may be set in 17th-century New England or in a timeless mythological space",
            isCorrect: false,
          },
        ],
        explanation:
          "The Witch maintains a productive ambiguity throughout: is the witch in the forest real, or is she a projection of the family's collective paranoia and repressed sexuality under Puritan religious extremism? Eggers leaves both readings available. The historical accuracy of the period's religious psychology makes the supernatural reading no less plausible — Puritan New England was a world in which witches were real.",
      },
    },
    {
      id: "re-05-themes",
      title: "Themes & Obsessions",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Faith Collapses Under the Inexplicable" },
        {
          type: "paragraph",
          content:
            "Eggers' characters believe absolutely — then can't reconcile their faith with what happens to them. Faith in his films isn't comfort. It's a pressure that builds until something breaks.",
        },
        { type: "heading", content: "Isolation as Psychological Torture" },
        {
          type: "paragraph",
          content:
            "Every Eggers film is set in radical isolation. Cut off from ordinary society, his characters lose the social supports that allow people to maintain their ordinary selves. Then things get worse.",
        },
        { type: "heading", content: "Folklore Is Repressed Psychological Truth" },
        {
          type: "paragraph",
          content:
            "Witch mythology, lighthouse superstition, Viking cosmology — folklore gives terrifying form to what a culture can't say directly. Eggers treats it like documentary evidence. He's right to.",
        },
        { type: "heading", content: "The Body's Vulnerability" },
        {
          type: "paragraph",
          content:
            "The Witch uses the body as the site of supernatural invasion. The Lighthouse is obsessed with bodily fluids and the boundary between human and animal. Bodies fail. Bodies transform. Bodies betray.",
        },
        { type: "heading", content: "The Past Is Not Over" },
        {
          type: "paragraph",
          content:
            "Eggers picks historical periods because they contain forces that haven't been resolved. Puritan religious extremism, Viking violence, pre-modern folk belief — the past is the substrate of the present.",
        },
      ],
      quiz: {
        question: "How does Eggers treat folklore in his films, and why?",
        options: [
          {
            id: "a",
            text: "As decorative local colour that makes historical settings feel specific and credible",
            isCorrect: false,
          },
          {
            id: "b",
            text: "As the repository of repressed psychological truth — the form a culture gives to fears it cannot express directly",
            isCorrect: true,
          },
          {
            id: "c",
            text: "As a source of narrative plot devices that produce suspense without requiring realistic motivation",
            isCorrect: false,
          },
          {
            id: "d",
            text: "As evidence of historical superstition that his films then rationally expose",
            isCorrect: false,
          },
        ],
        explanation:
          "Eggers regards folklore with documentary seriousness: not as quaint superstition but as the form cultures use to express fears — about the body, sexuality, death, transgression — that cannot be stated directly. Witch mythology, lighthouse superstitions, Viking cosmology all encode genuine psychological content. By treating this material seriously, Eggers' films gain access to primal anxieties that more realistic films cannot touch.",
      },
    },
    {
      id: "re-06-learn",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Research Principle" },
        {
          type: "paragraph",
          content:
            "Eggers spends years researching each film before writing a word of dialogue. Puritan diaries, court records, Old Norse scholars, archaeologists. This isn't academic completism — it's a creative method.",
        },
        { type: "heading", content: "What Specificity Does" },
        {
          type: "paragraph",
          content:
            "Specific historical details — exact words, actual textures, real beliefs — produce a different quality of reality than general atmosphere. Audiences feel truth without knowing why. Specificity communicates without announcing itself.",
        },
        { type: "heading", content: "Spend a Day in a Primary Source" },
        {
          type: "paragraph",
          content:
            "Before your next project, spend a day in a library or archive with primary sources — diaries, letters, accounts written at the time, not about it. Notice what a general history would never contain.",
        },
        { type: "heading", content: "Research as a Creative Act" },
        {
          type: "paragraph",
          content:
            "The specific historical detail that illuminates a character's inner life is a discovery, not a fact. The archive is a place where stories are found. Eggers knows this. Go find yours.",
        },
      ],
      reflection: {
        prompt:
          "Choose a subject, period, or place relevant to a project you are working on or planning. Spend two hours with primary sources — letters, diaries, contemporary accounts, material records — rather than secondary histories. What specific details do you find that a general historical account would not contain? How do those details change the way you imagine your subject?",
      },
    },
  ],
}

export default course
