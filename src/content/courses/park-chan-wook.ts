import type { Course } from "@/types"

const course: Course = {
  id: "park-chan-wook",
  title: "Park Chan-wook",
  slug: "park-chan-wook",
  description:
    "A study of Park Chan-wook — cinema's poet of revenge and moral ambiguity. His Vengeance Trilogy and Stoker create formally gorgeous films about the impossibility of justice.",
  category: "directors",
  accentColor: "#991133",
  estimatedHours: 3,
  tags: ["revenge", "korean", "operatic", "violence", "moral-complexity"],
  lessons: [
    {
      id: "pc-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Park Chan-wook (Born 1963, Seoul, South Korea)" },
        {
          type: "paragraph",
          content:
            "Park studied aesthetics and worked as a film critic before he directed anything. He thinks in form and argument, not just story — and it shows in every frame he makes.",
        },
        {
          type: "paragraph",
          content:
            "Early commercial failures gave way to Joint Security Area (2000), a thriller on the North-South Korean border that became the highest-grossing Korean film of that year. He arrived at full speed.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "2000: Joint Security Area (JSA) — highest-grossing Korean film of the year",
            "2002: Sympathy for Mr. Vengeance — first film of the Vengeance Trilogy",
            "2003: Oldboy — Grand Prix at Cannes, international breakthrough",
            "2005: Lady Vengeance — completes the Vengeance Trilogy",
            "2013: Stoker — English-language debut with Nicole Kidman and Mia Wasikowska",
            "2016: The Handmaiden — won BAFTA for Best Film Not in the English Language",
            "2022: Decision to Leave — Cannes Best Director prize",
          ],
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/ParkChanwookCannesMay09.jpg/1280px-ParkChanwookCannesMay09.jpg",
          caption: "Park Chan-wook at the Cannes Film Festival, May 2009 — where his film Thirst won the Jury Prize",
          alt: "Park Chan-wook at Cannes Film Festival in May 2009",
        },
        {
          type: "quote",
          content: "I don't plan films with the intention of making them beautiful. The beauty is a by-product of trying to be truthful.",
          author: "Park Chan-wook",
        },
      ],
      quiz: {
        question: "What academic background did Park Chan-wook bring to filmmaking, and how does it manifest in his work?",
        options: [
          { id: "a", text: "He studied fine art, which explains his interest in colour and composition", isCorrect: false },
          { id: "b", text: "He studied aesthetics and worked as a film critic — his films are made by someone who thinks in form and argument", isCorrect: true },
          { id: "c", text: "He studied literature, which explains his interest in literary adaptation", isCorrect: false },
          { id: "d", text: "He studied architecture, which explains his use of precise production design", isCorrect: false },
        ],
        explanation:
          "Park's background in aesthetics and film criticism means he approaches filmmaking analytically — asking what formal choices mean, not just how they look. His films are not merely beautiful; they are formally argued. Every composition, colour palette, and editing choice is in service of a coherent aesthetic and moral proposition.",
      },
    },
    {
      id: "pc-02-influences",
      title: "Influences & Cinematic Education",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Hitchcock: Desire Makes Criminals of Us All" },
        {
          type: "paragraph",
          content:
            "Where Bong takes Hitchcock's mechanics, Park takes his formal precision and sexual obsession. Stoker is practically a Hitchcock exercise — guilt, complicity, desire as danger.",
        },
        { type: "heading", content: "Buñuel: Control Makes Transgression Hit Harder" },
        {
          type: "paragraph",
          content:
            "Buñuel proved that a shocking image within a precisely controlled formal structure is more disturbing than shock alone. Park's most transgressive moments gain power from the beauty surrounding them.",
        },
        { type: "heading", content: "Claude Chabrol: Beauty as Indictment" },
        {
          type: "paragraph",
          content:
            "Chabrol spent his career making elegant films about bourgeois moral rot. Park absorbed the lesson: the more gorgeous the surface, the more damning what lies beneath.",
        },
        { type: "heading", content: "Kim Ki-young: Domestic Horror, Korean Style" },
        {
          type: "paragraph",
          content:
            "The Housemaid (1960) showed that the home is a site of hidden violence — desire, class, and domestic chaos under formal control. Park's inheritance runs directly from here.",
        },
      ],
      quiz: {
        question: "What did Park Chan-wook specifically inherit from Luis Buñuel that distinguishes his work from straightforward genre filmmaking?",
        options: [
          { id: "a", text: "Buñuel's interest in Catholic guilt and religious iconography applied to Korean culture", isCorrect: false },
          { id: "b", text: "Buñuel's surrealist transgression — disturbing images made more powerful by the formal control and beauty surrounding them", isCorrect: true },
          { id: "c", text: "Buñuel's preference for non-professional actors and documentary-style realism", isCorrect: false },
          { id: "d", text: "Buñuel's political commitment to explicit left-wing social critique through allegory", isCorrect: false },
        ],
        explanation:
          "Buñuel demonstrated that formal control and transgression amplify each other. A shocking image in a chaotic film is merely shocking; the same image within a precisely controlled formal structure becomes genuinely disturbing because the control implies the director knows exactly what they are doing. Park's most violent and transgressive images gain power from exactly this contrast with his formal elegance.",
      },
    },
    {
      id: "pc-03-style",
      title: "Visual Style & Techniques",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Every Frame Is a Painting" },
        {
          type: "paragraph",
          content:
            "This isn't a metaphor — Park composes each shot so it holds as a visual composition at any freeze-frame. The rigour argues that beauty and monstrousness can share the same image.",
        },
        { type: "heading", content: "Each Film Has Its Own Colour World" },
        {
          type: "paragraph",
          content:
            "Oldboy's desaturated greens encode rot and confinement. The Handmaiden's jewel tones reflect colonial artifice. Stoker's muted blues explode into red. Colour is argument, not mood.",
        },
        { type: "heading", content: "The Long Take as Moral Witness" },
        {
          type: "paragraph",
          content:
            "Oldboy's corridor fight is a single long take — exhausting and horrible. The camera doesn't cut away. Neither does the moral universe of the film. You are required to watch.",
        },
        { type: "heading", content: "Beautiful Violence as a Trap" },
        {
          type: "paragraph",
          content:
            "Park makes violence formally gorgeous on purpose. He's not making it acceptable — he's implicating you. You found this beautiful. Now sit with what that means about you.",
        },
      ],
      quiz: {
        question: "What is the moral purpose of Park Chan-wook making scenes of violence formally beautiful?",
        options: [
          { id: "a", text: "To demonstrate his technical mastery and elevate genre filmmaking to the level of art", isCorrect: false },
          { id: "b", text: "To implicate the viewer — you have found this beautiful, and the film forces you to sit with what that means", isCorrect: true },
          { id: "c", text: "To reduce the traumatic impact of violence and make it easier for audiences to watch", isCorrect: false },
          { id: "d", text: "To satisfy the demands of Korean commercial cinema while maintaining artistic integrity", isCorrect: false },
        ],
        explanation:
          "Park's beautified violence is a trap for the viewer. By making an act of violence formally gorgeous, he forces you into complicity — you have been aesthetically pleased by something morally troubling. This is one of cinema's most honest manoeuvres: acknowledging that viewers come to violent films for something, and then making them own what that something is.",
      },
    },
    {
      id: "pc-04-films",
      title: "Essential Films",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Oldboy (2003)" },
        {
          type: "paragraph",
          content:
            "A man imprisoned for fifteen years without explanation, then released. He has ninety days to find out why. One of cinema's most formally perfect structures — and one of its most devastating revelations.",
        },
        { type: "heading", content: "The Vengeance Trilogy (2002–2005)" },
        {
          type: "paragraph",
          content:
            "Three films, one question: does revenge bring justice? Three answers: no. Revenge is a poison that destroys its seeker and creates more suffering than it resolves.",
        },
        { type: "heading", content: "The Handmaiden (2016)" },
        {
          type: "paragraph",
          content:
            "Set in Japanese-occupied Korea, adapted from Sarah Waters's Fingersmith. Three-part structure, each section revealing the previous one was incomplete. A film about who gets to tell the story.",
        },
        { type: "heading", content: "Decision to Leave (2022)" },
        {
          type: "paragraph",
          content:
            "Park's most restrained film — and possibly his most devastating. A detective falls in love with a murder suspect. What do we choose not to see when we desire someone?",
        },
      ],
      quiz: {
        question: "What single question does the Vengeance Trilogy examine across all three films, and what answer do they collectively reach?",
        options: [
          { id: "a", text: "Whether justice is possible in a corrupt state — and they conclude it requires personal rather than institutional action", isCorrect: false },
          { id: "b", text: "Whether revenge brings justice — and they collectively conclude it does not, that revenge is a poison destroying its seeker", isCorrect: true },
          { id: "c", text: "Whether violence is ever morally justified — and they conclude it can be when the original crime is severe enough", isCorrect: false },
          { id: "d", text: "Whether love and violence can coexist — and they conclude they are the same impulse expressed differently", isCorrect: false },
        ],
        explanation:
          "The Vengeance Trilogy is Park's sustained examination of revenge's moral logic — and its conclusion is consistent across all three films. Revenge does not undo the original harm; it extends the cycle of suffering. The person who seeks revenge does not achieve justice; they achieve their own destruction. The films are beautiful and horrible simultaneously because they make you feel the desire for revenge even as they demonstrate its futility.",
      },
    },
    {
      id: "pc-05-themes",
      title: "Themes & Obsessions",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Revenge Destroys Its Seeker" },
        {
          type: "paragraph",
          content:
            "Park depicts the desire for revenge with full sympathy — then shows, with rigorous consistency, that it doesn't heal the wound. It opens new ones while the old one stays raw.",
        },
        { type: "heading", content: "Violence Generates More Violence" },
        {
          type: "paragraph",
          content:
            "Sympathy for Mr. Vengeance traces how one economic injustice ramifies into a chain of killings. Everyone is justified from within their own logic. Everyone makes things worse.",
        },
        { type: "heading", content: "There Are No Villains, Just Conditions" },
        {
          type: "paragraph",
          content:
            "The factory owner who triggers tragedy isn't evil — he's responding to economic pressure. Park refuses simple culpability. The real villain, if there is one, is the system.",
        },
        { type: "heading", content: "Desire: Engine and Catastrophe" },
        {
          type: "paragraph",
          content:
            "The Handmaiden puts this most clearly: desire makes you fully alive and makes you capable of extraordinary cruelty. Both things are true. At the same time.",
        },
      ],
      quiz: {
        question: "Why does Park Chan-wook refuse to assign simple villains in films like Sympathy for Mr. Vengeance?",
        options: [
          { id: "a", text: "Because Korean censorship required sympathetic portrayals of authority figures", isCorrect: false },
          { id: "b", text: "Because his moral vision holds that people in difficult conditions harm each other without anyone being simply evil — culpability is systemic, not individual", isCorrect: true },
          { id: "c", text: "Because he believes that all characters should be morally equal to prevent the audience taking sides", isCorrect: false },
          { id: "d", text: "Because assigning villains would undermine the tension needed to sustain a thriller", isCorrect: false },
        ],
        explanation:
          "Park's refusal of simple villains is a moral position, not a storytelling strategy. His films show how economic and social conditions place people in situations where they harm each other without either party being simply evil. The factory owner who causes the tragedy in Sympathy for Mr. Vengeance is not a bad man — he is a man making rational decisions within a system that produces irrational suffering. The real villain, if there is one, is the system.",
      },
    },
    {
      id: "pc-06-learn",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "What Park Teaches" },
        {
          type: "paragraph",
          content:
            "Formal beauty amplifies moral seriousness — it doesn't distract from it. And making the audience sit with their own complicity is one of the most honest things cinema can do.",
        },
        { type: "heading", content: "1. Design a Colour World" },
        {
          type: "paragraph",
          content:
            "Before you write a scene, define your project's colour world. Three or four dominant colours. What they mean. What's forbidden. This forces you to think in argument before you think in scene.",
        },
        { type: "heading", content: "2. Ask Who Has the Right to Tell the Story" },
        {
          type: "paragraph",
          content:
            "The Handmaiden's three-part structure keeps revealing that each previous perspective was incomplete. Whose point of view are you privileging? What would the story look like from somewhere else?",
        },
        { type: "heading", content: "3. Make the Audience Complicit" },
        {
          type: "paragraph",
          content:
            "Find a moment where you can let your audience enjoy something they should be troubled by. That discomfort is honest filmmaking. Most cinema keeps viewers at a comfortable distance. Park doesn't.",
        },
        { type: "heading", content: "4. Refuse Simple Moral Arithmetic" },
        {
          type: "paragraph",
          content:
            "Try removing the villain from your next story. Replace them with conditions — economic, social, historical — that produce the harm. What do you lose? What do you gain?",
        },
      ],
      reflection: {
        prompt:
          "Watch the corridor fight scene in Oldboy — the long, uncut take of exhausted violence. Park could have edited this sequence for maximum visceral impact, but instead he holds the camera back and lets the ugliness accumulate in real time. How does the decision not to cut change what you feel during the scene? Think about a scene in something you have made or are planning to make: where might a sustained, uncut take be more honest than edited coverage?",
      },
    },
  ],
}

export default course
