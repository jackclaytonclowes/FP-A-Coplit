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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Robert Eggers (born 1983, New Hampshire)" },
        {
          type: "paragraph",
          content:
            "Robert Eggers was born in 1983 in New Hampshire and came to filmmaking through a background in theatre production design. He designed sets before he directed — an unusually concrete grounding in material culture that would define everything he subsequently made. A director who begins in production design thinks first about the physical world a story inhabits.",
        },
        {
          type: "paragraph",
          content:
            "His feature debut The Witch (2015), subtitled 'A New England Folktale', drew on actual historical records of witch trials and Puritan religious language to create a horror film unlike any other — one in which the supernatural threat is indistinguishable from the psychological collapse of a family under religious extremism.",
        },
        {
          type: "paragraph",
          content:
            "The Lighthouse (2019), shot in the 1.19:1 aspect ratio on black-and-white Kodak Ortho Plus film stock, is among the most formally extreme films of its decade. The Northman (2022) applied the same historical rigour to Viking mythology. Nosferatu (2024), a remake of F.W. Murnau's 1922 film, completed a cycle of primal genre reinventions.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Carl Theodor Dreyer: Scandinavian Spiritual Dread" },
        {
          type: "paragraph",
          content:
            "Dreyer's Day of Wrath and Ordet gave Eggers a model for films in which religious faith is both genuine and terrifying — where God's presence is felt not as comfort but as pressure. Dreyer's compositions, his use of light, and his refusal of narrative comfort are central influences on Eggers' work.",
        },
        { type: "heading", content: "F.W. Murnau: Expressionist Shadow" },
        {
          type: "paragraph",
          content:
            "Murnau's original Nosferatu (1922) and Faust demonstrated that horror could operate through visual metaphor — that shadow, distorted architecture, and expressionistic image-making could externalise psychological states. Eggers' affinity with Murnau deepened across his career and culminated in his remake of Nosferatu.",
        },
        { type: "heading", content: "Werner Herzog: Obsessive Historical Authenticity" },
        {
          type: "paragraph",
          content:
            "Herzog's Aguirre the Wrath of God and Fitzcarraldo showed Eggers that historical cinema could achieve something documentary and visionary simultaneously — that the obsessive pursuit of authenticity (including Herzog's literal methods, shooting in actual jungles with actual boats) produces a different quality of reality.",
        },
        { type: "heading", content: "Ingmar Bergman: Isolation and Spiritual Crisis" },
        {
          type: "paragraph",
          content:
            "Bergman's films of isolation — Winter Light, Through a Glass Darkly, The Seventh Seal — showed Eggers how to use confined space and extreme weather as psychological environments. The characters in The Lighthouse are descendants of Bergman's figures: cut off from ordinary society, unable to escape their own minds.",
        },
        { type: "heading", content: "Folk Horror: The Wicker Man, Witchfinder General, Blood on Satan's Claw" },
        {
          type: "paragraph",
          content:
            "The British folk horror tradition of the late 1960s and early 1970s was central to Eggers' development. These films understood that rural isolation, seasonal folklore, and community ritual could be more disturbing than any supernatural monster. The Witch inherits this tradition and traces it back to its historical sources.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Obsessive Historical Authenticity" },
        {
          type: "paragraph",
          content:
            "Eggers spends years on research for each film. The Witch's dialogue is drawn from actual 17th-century Puritan documents, court records, and diaries. The architecture was built from period evidence. The costumes were reconstructed from surviving garments. This level of specificity is not decoration — it is a method for reaching the psychological reality of a historical moment.",
        },
        { type: "heading", content: "Constricted Aspect Ratios" },
        {
          type: "paragraph",
          content:
            "Eggers uses Academy ratio (1.33:1) or narrower to create claustrophobia. The Lighthouse was shot in the 1.19:1 ratio — even squarer than Academy — creating a frame that feels physically constraining. The forest looms over the Puritan family in The Witch not simply because of set design but because the frame itself has no room to escape.",
        },
        { type: "heading", content: "Natural and Practical Lighting Only" },
        {
          type: "paragraph",
          content:
            "Eggers' films are lit exclusively by sources available in the period: candles, hearth fires, overcast northern skies. This restriction is both historically accurate and aesthetically radical. The Witch and The Lighthouse have the quality of old paintings — a chiaroscuro that feels excavated from the period rather than constructed for the screen.",
        },
        { type: "heading", content: "Landscape as Psychological Projection" },
        {
          type: "paragraph",
          content:
            "In Eggers' films, landscape does not illustrate a story — it embodies the psychological state of the characters. The forest surrounding the Puritan family is both literally threatening and a projection of their repressed sexuality and terror. The sea in The Lighthouse is both the physical environment of the keepers and the unconscious that they cannot escape.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Witch (2015)" },
        {
          type: "paragraph",
          content:
            "A Puritan family, banished from their plantation, attempts to farm at the edge of a New England forest. The dialogue is drawn from period documents. The supernatural threat — a witch in the forest — may or may not be real; the film is equally interested in the family's psychological dissolution under religious extremism and paranoia. Anya Taylor-Joy's debut performance as Thomasin is extraordinary.",
        },
        { type: "heading", content: "The Lighthouse (2019)" },
        {
          type: "paragraph",
          content:
            "Two lighthouse keepers — Willem Dafoe as the old salt who guards the light, Robert Pattinson as the young assistant who covets it — are stranded on a rock during an extended storm. Shot in black-and-white in the 1.19:1 ratio, the film draws on Melville, Prometheus, Proteus, and the folklore of lighthouse keepers, and becomes a study in male hierarchy, jealousy, and psychotic breakdown.",
        },
        { type: "heading", content: "The Northman (2022)" },
        {
          type: "paragraph",
          content:
            "A Viking revenge epic based on the same Norse legend that inspired Hamlet, filmed with obsessive historical accuracy on authentic locations in Iceland, Ireland, and the UK. The film refuses Hollywood Viking mythology in favour of historical specificity — the actual religious practices, material culture, and social structures of early medieval Scandinavia.",
        },
        { type: "heading", content: "Nosferatu (2024)" },
        {
          type: "paragraph",
          content:
            "A remake of Murnau's 1922 expressionist masterwork, developed over more than a decade. Eggers relocates the story to 19th-century Germany and applies his methods of historical and material authenticity to a story that Murnau told through pure visual metaphor. Bill Skarsgård's Count Orlok is among the most terrifying figures in recent horror cinema.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Faith and Its Disintegration" },
        {
          type: "paragraph",
          content:
            "Eggers' films are obsessed with religious faith and its collapse when confronted with the inexplicable. The Puritan family in The Witch believes absolutely in God's providence — and are destroyed by their inability to reconcile that belief with what happens to them. Faith, in Eggers, is not comfort; it is pressure.",
        },
        { type: "heading", content: "Isolation as Psychological Torture" },
        {
          type: "paragraph",
          content:
            "Every Eggers film is set in radical isolation — a forest clearing, a lighthouse rock, the Viking age world before modern communication. Isolation in his films is not merely a narrative device but a psychological environment: it removes the social supports that allow people to maintain their ordinary selves.",
        },
        { type: "heading", content: "Folklore as Repressed Psychological Truth" },
        {
          type: "paragraph",
          content:
            "Eggers regards folklore — witch mythology, lighthouse superstition, Viking cosmology — as the repository of repressed psychological truth. Folklore gives terrifying form to what a culture cannot say directly: its fears about sexuality, death, the body, and social transgression. His films treat folklore with the seriousness of documentary evidence.",
        },
        { type: "heading", content: "The Body's Terror at Dissolution" },
        {
          type: "paragraph",
          content:
            "A recurring preoccupation in Eggers' work is the body's vulnerability — its capacity for corruption, dissolution, and transformation. The Witch uses the body as the site of supernatural invasion. The Lighthouse is obsessed with bodily fluids, functions, and the boundary between human and animal.",
        },
        { type: "heading", content: "The Past as Closer and More Real Than the Present" },
        {
          type: "paragraph",
          content:
            "Eggers treats history not as remote and safely past but as immediate and pressing. His historical periods are chosen because they contain forces that have not been resolved — the religious extremism of Puritan New England, the violence of Viking society, the folk beliefs of pre-modern Europe. The past is not over; it is the substrate of the present.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The Research Principle" },
        {
          type: "paragraph",
          content:
            "Eggers spends years researching each film before writing a word of dialogue. For The Witch he read 17th-century Puritan diaries, court records, and theological texts. For The Northman he consulted archaeologists, historians, and Old Norse scholars. This is not academic completism — it is a creative method.",
        },
        { type: "heading", content: "What Specificity Does" },
        {
          type: "paragraph",
          content:
            "Specific historical details — the exact words people used, the actual texture of the materials they handled, the real beliefs they held — produce a different quality of reality than general historical atmosphere. The audience does not need to know that a line of dialogue is drawn from a 1662 court record to feel its truth. Specificity communicates without announcing itself.",
        },
        { type: "heading", content: "The Practical Exercise" },
        {
          type: "paragraph",
          content:
            "Before your next project — whatever its subject — spend a day in a library, an archive, or a specialist collection researching the time, place, or subject you are working with. Look for primary sources: diaries, letters, accounts written at the time rather than about it. Notice how specific historical details change the quality of your work.",
        },
        { type: "heading", content: "Research as a Creative Act" },
        {
          type: "paragraph",
          content:
            "Eggers' method suggests that research is not a preliminary to creative work but a creative act in itself. The specific historical detail that suddenly illuminates a character's inner life, or gives a scene its unexpected resonance, is a discovery rather than a fact. The archive is a place where stories are found, not just verified.",
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
