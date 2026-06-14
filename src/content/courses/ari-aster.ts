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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Ari Aster (born 1986)" },
        {
          type: "paragraph",
          content:
            "Aster trained at the AFI Conservatory in LA, where he built a reputation for formally precise, emotionally extreme short films — including The Strange Thing About the Johnsons, which caused controversy at festivals and announced his willingness to go further than most.",
        },
        {
          type: "paragraph",
          content:
            "Hereditary (2018) wasn't just a horror film — it was a devastating excavation of grief using horror as the vehicle. Critics noticed immediately. Then came Midsommar, Beau Is Afraid, and no signs of slowing down.",
        },
        {
          type: "paragraph",
          content:
            "Midsommar set folk horror in perpetual Swedish daylight — a formal inversion that changed what the genre could look like. Beau Is Afraid went further still: three hours of surrealist maternal anxiety with Joaquin Phoenix.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Polanski: The Home as Psychological Trap" },
        {
          type: "paragraph",
          content:
            "Repulsion, Rosemary's Baby, The Tenant — Polanski taught Aster that horror can be entirely domestic. The ordinary space turns slowly wrong. The family home in Hereditary works exactly this way.",
        },
        { type: "heading", content: "Bergman: Family Is Where the Wounds Are" },
        {
          type: "paragraph",
          content:
            "Scenes from a Marriage, Cries and Whispers — Bergman understood the family as the primary arena of human suffering. Aster pursues this insight through genre instead of chamber drama.",
        },
        { type: "heading", content: "Kubrick: Dread Through Symmetry" },
        {
          type: "paragraph",
          content:
            "The Shining's corridors create unease because they're too perfect. Aster's carefully composed, symmetrical frames work on the same principle: control itself becomes threatening.",
        },
        { type: "heading", content: "The Wicker Man and Folk Horror" },
        {
          type: "paragraph",
          content:
            "Community ritual and seasonal folklore can be more disturbing than any monster. Midsommar is a direct engagement with this tradition — transposed to Scandinavia and flooded with light.",
        },
        { type: "heading", content: "Cassavetes: Domestic Scenes Without Relief" },
        {
          type: "paragraph",
          content:
            "Cassavetes proved that a family dinner could be as harrowing as any horror scene. Aster uses this to establish dread before a single genre element has appeared.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Symmetry That Unsettles" },
        {
          type: "paragraph",
          content:
            "Aster's frames are often strikingly symmetrical — and that's what makes them wrong. A world this controlled implies something watching it. Something that arranged it.",
        },
        { type: "heading", content: "The Overhead Dollhouse Shot" },
        {
          type: "paragraph",
          content:
            "High overhead shots reveal domestic space as if observed from above — from God's perspective, or from whatever is controlling the action. In Hereditary, they echo Annie's miniature-making.",
        },
        { type: "heading", content: "The Slow Creeping Camera" },
        {
          type: "paragraph",
          content:
            "A gentle push down a hallway toward a closed door. The camera treats the familiar as unknown territory. Something may be found there that cannot be unseen.",
        },
        { type: "heading", content: "No Horror Lighting — Just Natural Light" },
        {
          type: "paragraph",
          content:
            "No blue moonlight. No gothic shadow. Just lamps, fires, and the Swedish midnight sun. Reality develops, without warning, into nightmare. That's more disturbing than any atmosphere.",
        },
        { type: "heading", content: "Silence as the Main Instrument of Dread" },
        {
          type: "paragraph",
          content:
            "Aster drops ambient sound before something terrible happens — creating a vacuum your anxiety fills. Colin Stetson's score for Hereditary uses breath and reeds to sound biological, involuntary.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Hereditary (2018)" },
        {
          type: "paragraph",
          content:
            "Grief as horror engine. Every event grows from a family's inability to process loss. Toni Collette's performance is one of the decade's great achievements — a mother's grief becoming indistinguishable from madness.",
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Hereditary_Director_Ari_Aster_with_Toni_Collette.jpg/1280px-Hereditary_Director_Ari_Aster_with_Toni_Collette.jpg",
          caption: "Director Ari Aster with Toni Collette during the promotion of Hereditary (2018)",
          alt: "Ari Aster and Toni Collette promoting Hereditary",
        },
        { type: "heading", content: "Midsommar (2019)" },
        {
          type: "paragraph",
          content:
            "Folk horror in pure sunlight. The darkness isn't in the shadows — it's in what's openly visible and cheerfully performed. A relationship breakdown played out against increasingly disturbing ritual.",
        },
        { type: "heading", content: "Beau Is Afraid (2023)" },
        {
          type: "paragraph",
          content:
            "Three hours, Joaquin Phoenix, a series of escalating nightmares on the way to his mother's house. Aster's most personal and most extreme work — a dark comedy about maternal anxiety and the impossibility of separation.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Grief Opens the Door" },
        {
          type: "paragraph",
          content:
            "Hereditary opens at a funeral. Midsommar opens with family tragedy. Grief isn't just a subject — it's the mechanism. Characters stripped of their defences by loss become vulnerable to the extraordinary.",
        },
        { type: "heading", content: "Family Is the First and Deepest Wound" },
        {
          type: "paragraph",
          content:
            "Parents wound children. Children inherit the wound. Horror is the form those wounds take when they can no longer be contained. Aster treats the family as the origin of everything frightening.",
        },
        { type: "heading", content: "Inherited Trauma" },
        {
          type: "paragraph",
          content:
            "Patterns of behaviour pass from parents to children — literally in Hereditary (a supernatural inheritance), metaphorically everywhere else. You don't escape your lineage. It finds you.",
        },
        { type: "heading", content: "Belonging and Its Price" },
        {
          type: "paragraph",
          content:
            "Midsommar's Dani finds temporary belonging in a community whose existing relationships have failed her. Aster shows what that community demands in return. Belonging always has conditions.",
        },
        { type: "heading", content: "Horror as Emotional Truth" },
        {
          type: "paragraph",
          content:
            "Genre is a container for feelings too large to deliver straight. The horror form gives audiences permission to feel extreme emotions — and Aster loads it with grief, trauma, and damage that drama rarely touches.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Dread Without Horror" },
        {
          type: "paragraph",
          content:
            "The first thirty minutes of Hereditary contain almost no horror elements — no monster, no shock, no supernatural event. Just a family grieving badly. And yet the dread is there from the first frame.",
        },
        { type: "heading", content: "Horror Is Emotional Preparation" },
        {
          type: "paragraph",
          content:
            "Aster earns his genre moments with the drama that precedes them. By the time the horror arrives, you're helpless — because you understand these people. The genre delivers what the drama earned.",
        },
        { type: "heading", content: "Build the Foundation First" },
        {
          type: "paragraph",
          content:
            "Ask: what would need to be true about these characters, before the plot event, for that emotion to land with full force? Build that foundation. The event is only as powerful as the preparation before it.",
        },
        { type: "heading", content: "Genre as a Trojan Horse" },
        {
          type: "paragraph",
          content:
            "Horror gives audiences permission to feel extreme emotions. Aster uses that permission to deliver grief, family damage, and psychological horror that straight drama rarely achieves. Pick your genre. Load it.",
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
