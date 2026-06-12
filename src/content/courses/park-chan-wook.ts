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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Park Chan-wook (Born 1963, Seoul, South Korea)" },
        {
          type: "paragraph",
          content:
            "Park Chan-wook was born in 1963 in Seoul. He studied aesthetics at Sogang University, an unusually philosophical foundation for a filmmaker, and came to cinema through criticism rather than production — he worked as a film critic in the late 1980s before turning to directing. This critical background is visible in his films: they are made by someone who thinks in terms of form and argument, not just story.",
        },
        {
          type: "paragraph",
          content:
            "His early directorial career was commercially unsuccessful. The Moon Is the Sun's Dream (1992) and Trio (1997) both failed at the box office. He turned to genre with Joint Security Area (JSA) in 2000 — a thriller set on the border between North and South Korea — and the film became the highest-grossing Korean film of that year. JSA announced a filmmaker working at the highest level.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Alfred Hitchcock" },
        {
          type: "paragraph",
          content:
            "Like Bong Joon-ho, Park draws heavily on Hitchcock — but where Bong takes the genre mechanics, Park takes the formal precision and the sexual obsession. Hitchcock's interest in guilt, complicity, and the way desire makes criminals of us all runs through every Park film. Stoker in particular reads as a direct Hitchcockian exercise, structured like a Hitchcock thriller and shot with his characteristic spatial elegance.",
        },
        { type: "heading", content: "Luis Buñuel" },
        {
          type: "paragraph",
          content:
            "Buñuel's surrealist transgression — the willingness to place shocking, grotesque, or darkly comic images alongside everyday bourgeois life — is a clear presence in Park's work. Buñuel showed that cinema could be both formally controlled and viscerally disturbing, that the transgressive image gains power precisely from the control and beauty surrounding it.",
        },
        { type: "heading", content: "Claude Chabrol" },
        {
          type: "paragraph",
          content:
            "The French New Wave director Claude Chabrol spent much of his career making elegant, cold-eyed films about the moral corruption of the French bourgeoisie. Park absorbed from Chabrol the idea that formal beauty applied to middle-class life can function as a form of indictment — that the more gorgeous the surface, the more damning the revelation of what lies beneath.",
        },
        { type: "heading", content: "Kim Ki-young" },
        {
          type: "paragraph",
          content:
            "Kim Ki-young's The Housemaid (1960) is the great precursor of Korean melodrama — a film of extraordinary formal control and disturbing content about desire, class, and domestic violence. Park's interest in the domestic space as a site of hidden horror, and his willingness to use melodramatic intensity for serious purposes, comes partly from this tradition.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Formalist Precision" },
        {
          type: "paragraph",
          content:
            "Park composes each shot as a painting. This is not a metaphor — he works with his cinematographers to ensure that every frame, stopped at any moment, would be a coherent and beautiful visual composition. The rigour is not decorative: it is an argument that the beautiful and the monstrous can inhabit the same frame, that formal beauty does not cleanse the images of their moral weight.",
        },
        { type: "heading", content: "Deliberate Colour Palettes Per Film" },
        {
          type: "paragraph",
          content:
            "Each Park film has a defined and coherent colour world. Oldboy's desaturated greens and browns encode its world of rot and confinement. The Handmaiden's jewel-toned colours reflect the elaborate artificiality of its Japanese-occupied Korean setting. Stoker's muted blues and greys give way to sudden bursts of red. Colour is not mood-setting; it is argument.",
        },
        { type: "heading", content: "The Long Take as Revelation" },
        {
          type: "paragraph",
          content:
            "Park uses the long take strategically — not as an aesthetic preference but as a revelatory device. The corridor fight in Oldboy, shot in a single long take, turns what could have been action spectacle into something exhausting and horrible. The camera does not cut away from the violence; neither does the moral universe of the film. You are required to watch.",
        },
        { type: "heading", content: "Beauty in Scenes of Violence" },
        {
          type: "paragraph",
          content:
            "Park's willingness to make violence formally beautiful is deliberately uncomfortable. He never aestheticises violence to make it acceptable — rather, the beauty implicates the viewer. You have found this beautiful. What does that mean about you? This is the question his films persistently ask, and it is one of the most honest things cinema can do.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Oldboy (2003)" },
        {
          type: "paragraph",
          content:
            "A man is imprisoned without explanation for fifteen years, then released. He has ninety days to discover who imprisoned him and why. Oldboy is one of cinema's most formally perfect films — its structure is as airtight as its content is extreme. The revelation is one of cinema's most devastating, not because of shock alone but because of what it means about the nature of revenge and the impossibility of undoing the past.",
        },
        { type: "heading", content: "The Vengeance Trilogy (2002–2005)" },
        {
          type: "paragraph",
          content:
            "Sympathy for Mr. Vengeance, Oldboy, and Lady Vengeance are not sequels but thematic variations on a single question: does revenge bring justice? Each film approaches the question from a different angle and arrives at the same answer. The trilogy is the clearest statement of Park's moral philosophy: revenge is a poison that destroys the person who seeks it and creates more suffering than it resolves.",
        },
        { type: "heading", content: "The Handmaiden (2016)" },
        {
          type: "paragraph",
          content:
            "Set in Japanese-occupied Korea, The Handmaiden is adapted from Sarah Waters's novel Fingersmith and relocated to a period of colonial complicity and cultural suppression. A con artist poses as a handmaiden to a Japanese heiress. The film unfolds in three parts, each revealing that the previous part's perspective was incomplete. It is a film about the power of narrative, the erotics of reading, and who gets to tell a story.",
        },
        { type: "heading", content: "Decision to Leave (2022)" },
        {
          type: "paragraph",
          content:
            "A detective investigates the death of a hiker and falls in love with the dead man's wife. Decision to Leave is Park's most restrained film, and in many ways his most emotionally devastating. It is a Hitchcockian romantic thriller that asks what we are willing to not-see when we desire someone, and what the cost of that selective blindness is.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Revenge as Moral Poison" },
        {
          type: "paragraph",
          content:
            "Park's central moral proposition, stated and restated across his career, is that revenge destroys its seeker. The films are not against the desire for revenge — he depicts it with full sympathy and understanding. But they show, with rigorous consistency, that the act of revenge does not heal the original wound; it opens new wounds while the old one remains unaddressed.",
        },
        { type: "heading", content: "Violence as Self-Perpetuating Cycle" },
        {
          type: "paragraph",
          content:
            "In Park's films, every act of violence generates more violence. The cycle is the moral trap. Sympathy for Mr. Vengeance traces how a single economic injustice ramifies into a chain of killings, each one justified from within the logic of the person committing it, each one making things worse. The film's title is almost ironic: everyone in it deserves our sympathy, and everyone in it does terrible things.",
        },
        { type: "heading", content: "The Ambiguity of Culpability" },
        {
          type: "paragraph",
          content:
            "Park resists assigning simple moral responsibility. In Sympathy for Mr. Vengeance the factory owner who fires the protagonist is not a villain — he is responding reasonably to economic pressure. The protagonist is not a villain either. There is no villain. There are only people in conditions that grind them together with tragic results. This refusal of simple culpability is more honest than most cinema's moral bookkeeping.",
        },
        { type: "heading", content: "Desire as Beautiful and Destructive" },
        {
          type: "paragraph",
          content:
            "Across Park's filmography, desire — sexual, familial, economic — is presented as both the engine of life and the source of catastrophe. The Handmaiden is his most explicit treatment: a film about erotic desire, narrative desire, and the desire for freedom, in which desire is simultaneously what makes the characters fully alive and what makes them capable of extraordinary cruelty.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From His Practice" },
        {
          type: "paragraph",
          content:
            "Park teaches that formal beauty is not a distraction from moral seriousness — it is its amplification. And that the most honest thing cinema can do is make the audience sit with their own complicity.",
        },
        { type: "heading", content: "1. Design a Colour World" },
        {
          type: "paragraph",
          content:
            "Before shooting or writing your next project, define its colour world. What three or four colours will dominate? What do they mean? What colours are forbidden in this world? This exercise forces you to think about the emotional and ideological argument of your work before you make a single scene-level decision.",
        },
        { type: "heading", content: "2. Ask Who Has the Right to Tell the Story" },
        {
          type: "paragraph",
          content:
            "The Handmaiden's three-part structure, in which each section reveals the previous section's perspective to be incomplete, is a lesson in narrative epistemology. Whose perspective are you privileging? What would the story look like from a different character's point of view? Would it be the same story at all?",
        },
        { type: "heading", content: "3. Make the Audience Complicit" },
        {
          type: "paragraph",
          content:
            "Identify a moment in your story where you could create audience complicity — where you let them enjoy something they should be troubled by, or desire something they should resist. This is uncomfortable filmmaking, but it is honest filmmaking. Most cinema lets audiences maintain comfortable distance from their own responses. Park does not.",
        },
        { type: "heading", content: "4. Refuse Simple Moral Arithmetic" },
        {
          type: "paragraph",
          content:
            "In your next story, try removing the villain. Replace the villain with conditions — economic, social, historical — that produce the harm. See if the story becomes more or less honest. What do you lose? What do you gain? Park's refusal of simple culpability is not cynicism; it is an insistence that human beings deserve a more complex moral accounting than genre usually provides.",
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
