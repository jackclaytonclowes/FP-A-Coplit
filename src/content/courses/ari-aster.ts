import type { Course } from "@/types"

const course: Course = {
  id: "ari-aster",
  title: "Ari Aster",
  slug: "ari-aster",
  description:
    "A study of Ari Aster — horror cinema's most formally ambitious new voice. Hereditary and Midsommar use the horror genre to excavate grief, family trauma, and spiritual yearning with devastating precision.",
  category: "directors",
  accentColor: "#8b6914",
  estimatedHours: 3,
  tags: ["horror", "grief", "family", "folk-horror", "psychological"],
  lessons: [
    {
      id: "aa-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Ari Aster (born 1986)" },
        {
          type: "paragraph",
          content:
            "Ari Aster was born in 1986 and studied film at the AFI Conservatory in Los Angeles, where he developed an early reputation for formally precise, emotionally extreme work. His short films — particularly The Strange Thing About the Johnsons and Munchausen — demonstrated a willingness to engage with deeply uncomfortable subject matter that most filmmakers avoid.",
        },
        {
          type: "paragraph",
          content:
            "His feature debut Hereditary (2018), starring Toni Collette in one of the decade's great performances, announced him immediately as a major talent. Critics and audiences recognised it as something more than a horror film — a devastating excavation of grief, inherited trauma, and family dysfunction that used horror conventions to go further than drama alone could.",
        },
        {
          type: "paragraph",
          content:
            "Midsommar (2019) broke radically from the genre's visual codes by setting a folk-horror narrative almost entirely in broad Swedish daylight. Beau Is Afraid (2023), a three-hour surrealist odyssey starring Joaquin Phoenix, confirmed Aster as a filmmaker willing to follow his visions wherever they lead, regardless of commercial convention.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "2011: The Strange Thing About the Johnsons — short film causes controversy at film festivals",
            "2013: Munchausen — short film further establishes his voice",
            "2018: Hereditary — feature debut with A24, Toni Collette's performance receives awards recognition",
            "2019: Midsommar — folk horror in perpetual sunlight, extended director's cut released",
            "2023: Beau Is Afraid — three-hour surrealist feature with Joaquin Phoenix",
          ],
        },
        {
          type: "quote",
          content:
            "I want to make films that are about something, and I find that genre is a wonderful Trojan horse for that.",
          author: "Ari Aster",
        },
      ],
      quiz: {
        question: "What was significant about Aster's feature debut Hereditary (2018) within the horror genre?",
        options: [
          {
            id: "a",
            text: "It was the highest-grossing horror film of that year",
            isCorrect: false,
          },
          {
            id: "b",
            text: "It used horror conventions to excavate grief, family trauma, and inherited dysfunction with dramatic seriousness",
            isCorrect: true,
          },
          {
            id: "c",
            text: "It was the first horror film to receive an Academy Award nomination for Best Picture",
            isCorrect: false,
          },
          {
            id: "d",
            text: "It revived the found-footage format that had fallen out of fashion",
            isCorrect: false,
          },
        ],
        explanation:
          "Hereditary was immediately recognised as more than a conventional horror film. Critics noted that it used horror's formal conventions — dread, supernatural threat, shocking violence — as a vehicle for exploring grief and family dysfunction with a seriousness usually reserved for literary drama. The horror was earned by the emotional truth that preceded it.",
      },
    },
    {
      id: "aa-02-influences",
      title: "Influences & Cinematic Education",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Roman Polanski: Psychological Horror and Paranoid Space" },
        {
          type: "paragraph",
          content:
            "Polanski's apartment trilogy — Repulsion, Rosemary's Baby, The Tenant — taught Aster that horror can be entirely psychological and entirely domestic. The apartment becomes a projection of mental state; the ordinary space turns slowly wrong. Aster uses domestic spaces in precisely this way: the family home in Hereditary is as much a psychological trap as a physical one.",
        },
        { type: "heading", content: "Ingmar Bergman: Family Dysfunction and Existential Dread" },
        {
          type: "paragraph",
          content:
            "Bergman's Scenes from a Marriage, Cries and Whispers, and Fanny and Alexander gave Aster a model for exploring family dynamics with unflinching honesty. Bergman understood that the family is the primary arena of human suffering — that the wounds inflicted in childhood reverberate across a life. Aster pursues this insight through genre.",
        },
        { type: "heading", content: "Stanley Kubrick: Formal Precision and Dread Through Control" },
        {
          type: "paragraph",
          content:
            "Kubrick showed that dread could be produced through formal perfection — that the most frightening spaces are often the most symmetrical and controlled. The Shining's corridors create unease precisely because they are too precise. Aster's carefully composed frames work on the same principle.",
        },
        { type: "heading", content: "The Wicker Man and Folk Horror" },
        {
          type: "paragraph",
          content:
            "The British folk horror tradition — The Wicker Man, Witchfinder General, Blood on Satan's Claw — demonstrated that horror rooted in community ritual and seasonal folklore could be more disturbing than supernatural threat. Midsommar is a direct engagement with this tradition, transposed to Scandinavia and flooded with light.",
        },
        { type: "heading", content: "John Cassavetes: Raw Performance and Domestic Horror" },
        {
          type: "paragraph",
          content:
            "Cassavetes taught Aster that domestic scenes could be unbearable without any supernatural element — that a family dinner, a marriage argument, a moment of parental frustration could be as harrowing as anything in conventional horror. Aster uses this to establish dread before the genre elements arrive.",
        },
      ],
      quiz: {
        question: "Which filmmaker most directly influenced Midsommar's setting of folk horror in perpetual daylight?",
        options: [
          {
            id: "a",
            text: "Ingmar Bergman's exploration of Scandinavian spiritual crisis",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The British folk horror tradition, particularly The Wicker Man, which Aster transposed to Scandinavia",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Roman Polanski's apartment trilogy and its use of confined domestic space",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Stanley Kubrick's formal precision in The Shining",
            isCorrect: false,
          },
        ],
        explanation:
          "Midsommar is a direct engagement with the British folk horror tradition — The Wicker Man in particular — transposed to a Swedish Midsommar festival. Where The Wicker Man uses the Scottish countryside and pagan ritual, Aster takes the same structure and floods it with perpetual Scandinavian sunlight, inverting the genre's typical reliance on darkness.",
      },
    },
    {
      id: "aa-03-style",
      title: "Visual Style & Techniques",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Symmetrical Composition as Unease" },
        {
          type: "paragraph",
          content:
            "Aster's compositions are often strikingly symmetrical — figures centred in frame, rooms perfectly balanced, architectural space rendered with geometric precision. This formal perfection creates unease rather than beauty. We sense, without being able to say why, that something is wrong with a world this controlled.",
        },
        { type: "heading", content: "The Overhead Dollhouse Shot" },
        {
          type: "paragraph",
          content:
            "One of Aster's most distinctive recurring techniques is a high overhead shot that reveals a domestic space as if from God's perspective — or from the perspective of someone watching and controlling the action from above. These shots appear at key moments in Hereditary, recalling the miniature dollhouses that Annie Graham builds and suggesting that the family's suffering is itself a kind of arranged performance.",
        },
        { type: "heading", content: "The Slow Creeping Camera in Ordinary Space" },
        {
          type: "paragraph",
          content:
            "Aster uses slow, deliberate camera movement through ordinary domestic spaces — a camera pushing gently down a hallway, drifting toward a corner, moving through a room toward a closed door. This movement treats the familiar as unknown territory, suggesting that something may be found in the ordinary space that cannot be unseen.",
        },
        { type: "heading", content: "Natural Practical Lighting" },
        {
          type: "paragraph",
          content:
            "Aster refuses the stylised lighting of conventional horror — the blue moonlight, the gothic shadow. His cinematographers light with practical sources: lamps, fires, the Swedish midnight sun. This naturalism makes the horror more disturbing because there is no visual signal that we are in a horror film. Reality simply develops, without warning, into nightmare.",
        },
        { type: "heading", content: "Sound Design: Silence as Dread" },
        {
          type: "paragraph",
          content:
            "Aster's sound design uses silence as a primary instrument of dread. The absence of score at key moments — the sudden dropping of ambient sound before something terrible — creates a vacuum that the viewer's anxiety fills. His collaborator Colin Stetson's score for Hereditary uses breath and reed instruments to create sounds that feel biological and involuntary.",
        },
      ],
      quiz: {
        question: "What is the purpose of Aster's recurring high overhead 'dollhouse' shots in Hereditary?",
        options: [
          {
            id: "a",
            text: "To disorient the audience by disrupting their spatial understanding of the house",
            isCorrect: false,
          },
          {
            id: "b",
            text: "To suggest that the family's suffering is arranged and observed from above, echoing Annie's miniature-making",
            isCorrect: true,
          },
          {
            id: "c",
            text: "To allow the audience to see multiple rooms of the house simultaneously",
            isCorrect: false,
          },
          {
            id: "d",
            text: "To reference the overhead shots in Kubrick's The Shining",
            isCorrect: false,
          },
        ],
        explanation:
          "The overhead dollhouse shots in Hereditary do double thematic work: they echo Annie Graham's profession as a miniature artist (suggesting the family may be figures arranged in her dollhouses) and they imply divine or demonic observation — the sense that something is watching the family's suffering from a position of control. The shot makes the viewer complicit in that observation.",
      },
    },
    {
      id: "aa-04-films",
      title: "Essential Films",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Hereditary (2018)" },
        {
          type: "paragraph",
          content:
            "Grief as the engine of horror. The film begins at a funeral — the death of Annie Graham's mother — and every subsequent event grows out of the family's inability to process loss. Toni Collette's performance is one of the defining achievements of contemporary horror: a study in a mother's grief becoming indistinguishable from madness. The horror is earned by the drama that precedes it.",
        },
        { type: "heading", content: "Midsommar (2019)" },
        {
          type: "paragraph",
          content:
            "Folk horror in pure sunlight. Where conventional horror uses darkness as its visual language, Midsommar is set during a Swedish midsummer festival where the sun never sets. The film uses the horror genre as a framework for a relationship breakdown — Dani's grief and her toxic relationship with Christian playing out against increasingly disturbing folk ritual. The extended director's cut adds thirty minutes and deepens the character work.",
        },
        { type: "heading", content: "Beau Is Afraid (2023)" },
        {
          type: "paragraph",
          content:
            "A three-hour surrealist odyssey in which Beau, played by Joaquin Phoenix, attempts to travel to his mother's house and encounters a series of escalating nightmares that may or may not be real. The film is Aster's most personal and most extreme work — a dark comedy about maternal anxiety, guilt, and the impossibility of separating from a suffocating parent.",
        },
        {
          type: "quote",
          content:
            "Hereditary is ultimately a film about grief — and grief is the engine that drives everything. The horror is just the genre.",
          author: "Ari Aster",
        },
      ],
      quiz: {
        question: "What does Midsommar invert about conventional horror's visual language?",
        options: [
          {
            id: "a",
            text: "It replaces supernatural threat with realistic psychological menace",
            isCorrect: false,
          },
          {
            id: "b",
            text: "It sets its horror entirely in perpetual daylight, refusing the genre's traditional reliance on darkness",
            isCorrect: true,
          },
          {
            id: "c",
            text: "It uses comedy to undercut horror at every moment of tension",
            isCorrect: false,
          },
          {
            id: "d",
            text: "It shoots entirely on location rather than in constructed sets",
            isCorrect: false,
          },
        ],
        explanation:
          "Midsommar's radical formal gesture is setting folk horror in perpetual Swedish midsummer sunlight. Horror traditionally uses darkness, shadow, and night as its visual grammar. By flooding every frame with bright summer light, Aster removes the viewer's conventional safety signal — darkness means danger — and forces us to find the horror in what is openly visible, which is far more disturbing.",
      },
    },
    {
      id: "aa-05-themes",
      title: "Themes & Obsessions",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Grief as the Motor of Horror" },
        {
          type: "paragraph",
          content:
            "Hereditary opens at a funeral. Midsommar opens with a family tragedy. Grief is not merely a subject for Aster — it is the mechanism by which the horror is generated. Characters in crisis, stripped of their ordinary defences by loss, become vulnerable to the extraordinary. Horror arrives when the psychological wounds are already open.",
        },
        { type: "heading", content: "The Family as the First and Most Permanent Wound" },
        {
          type: "paragraph",
          content:
            "Aster's films treat the family as the site of the deepest and most lasting damage. The wounds parents inflict on children — through neglect, cruelty, expectation, or simply the weight of their own unresolved grief — become the template for everything that follows. Horror is the form these wounds take when they can no longer be contained.",
        },
        { type: "heading", content: "Inherited Trauma" },
        {
          type: "paragraph",
          content:
            "A recurring concern in Aster's work is what passes from parents to children: the patterns of behaviour, the psychological vulnerabilities, the literal or metaphorical curses that move across generations. In Hereditary this is rendered literally — a supernatural inheritance — but the metaphorical dimension is equally present.",
        },
        { type: "heading", content: "Community, Belonging, and Their Danger" },
        {
          type: "paragraph",
          content:
            "Midsommar shows a character whose existing relationships have failed finding temporary belonging within a community — and the horror of what that community demands in return. Aster explores the human need for belonging and the danger of finding it in a community that has its own agenda for you.",
        },
        { type: "heading", content: "Horror as Emotional Truth" },
        {
          type: "paragraph",
          content:
            "Aster regards the horror genre as a vehicle for emotional truth — a Trojan horse that can deliver insights about grief, family, and psychological damage that might be intolerable in a straightforwardly realistic form. The genre provides a container for feelings that are otherwise too large.",
        },
      ],
      quiz: {
        question: "In Aster's films, what is the relationship between grief and horror?",
        options: [
          {
            id: "a",
            text: "Grief is a consequence of horror — the horror arrives first and produces grief in the survivors",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Grief is the mechanism that generates horror — characters made vulnerable by loss become susceptible to extraordinary threat",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Grief and horror are separate narrative threads that Aster interweaves without direct connection",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Grief is a backdrop that makes the horror more emotionally resonant without being causally connected",
            isCorrect: false,
          },
        ],
        explanation:
          "In Aster's films, grief is the engine that drives the horror. Characters stripped of their ordinary defences by loss become psychologically vulnerable — and horror arrives through these open wounds. Hereditary begins at a funeral; Midsommar begins with a family tragedy. The supernatural or extreme events that follow are generated by the emotional devastation that precedes them.",
      },
    },
    {
      id: "aa-06-learn",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Dread Without Horror" },
        {
          type: "paragraph",
          content:
            "Watch the first thirty minutes of Hereditary. In that time, Aster shows you almost nothing that could be called a horror element: no monster, no supernatural event, no shock. What you see is a family grieving — uncomfortably, imperfectly, in ways that feel too familiar. And yet the dread is present from the first frame.",
        },
        { type: "heading", content: "The Lesson: Horror Is Emotional Preparation" },
        {
          type: "paragraph",
          content:
            "Aster understands that horror — or any extreme emotional response — must be earned by the work that precedes it. The first act of Hereditary is about a family that cannot talk to each other, cannot grieve together, cannot connect. By the time the horror arrives, we have been made helpless by our understanding of these people. The genre delivers what the drama has earned.",
        },
        { type: "heading", content: "The Practical Exercise" },
        {
          type: "paragraph",
          content:
            "In your own work, identify the emotional situation you want your audience to feel. Now ask: what would need to be true about these characters, before the plot event, for that emotion to land with full force? Build that foundation first. The 'event' — whatever genre you're working in — is only as powerful as the emotional preparation that precedes it.",
        },
        { type: "heading", content: "Genre as a Trojan Horse" },
        {
          type: "paragraph",
          content:
            "Aster's other major lesson is that genre conventions can carry difficult truths into mainstream audiences who might otherwise resist them. The horror genre gives audiences permission to feel extreme emotions — it promises that experience. Aster uses that permission to deliver grief, family horror, and psychological damage that straight drama rarely achieves.",
        },
      ],
      reflection: {
        prompt:
          "Watch the first 30 minutes of Hereditary. Write down every moment that creates discomfort or unease — without any supernatural element being present. What is Aster doing to create that dread? How could you apply the same principle to your own work: establishing emotional stakes so thoroughly that when the central event arrives, it carries the full weight of what came before?",
      },
    },
  ],
}

export default course
