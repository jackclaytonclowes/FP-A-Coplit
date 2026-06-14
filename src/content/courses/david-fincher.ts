import type { Course } from "@/types"

const course: Course = {
  id: "david-fincher",
  title: "David Fincher",
  slug: "david-fincher",
  description:
    "A study of David Fincher — Hollywood's most rigorous technician. Fincher's cold precision, desaturated palettes and obsessive visual control create crime dramas of extraordinary tension.",
  category: "directors",
  accentColor: "#2d4a5c",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/35mm_movie_negative.jpg/1280px-35mm_movie_negative.jpg",
  estimatedHours: 3,
  tags: ["thriller", "procedural", "dark", "technical", "american"],
  lessons: [
    {
      id: "df-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "David Fincher (Born 1962, Denver)" },
        {
          type: "paragraph",
          content:
            "Fincher never went to film school. He went to Industrial Light & Magic instead — then spent years directing commercials and music videos for Madonna, Aerosmith, and Michael Jackson. That was his education.",
        },
        {
          type: "paragraph",
          content:
            "Every frame considered. Every cut purposeful. When he moved to features, he brought all of it with him.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "1984: Joins Industrial Light & Magic as a matte photography cameraman",
            "1986–1992: Directs music videos and commercials, building his visual language",
            "1992: Alien 3 — troubled debut feature, disowned by Fincher after studio interference",
            "1995: Se7en — establishes his voice and begins his signature collaboration with cinematographer Darius Khondji",
            "1999: Fight Club — commercially divisive on release, now recognised as a defining film of its era",
            "2010: The Social Network — receives 8 Academy Award nominations, wins 3",
          ],
        },
        {
          type: "quote",
          content: "I have very specific ideas about what I want. The question is always how to execute them.",
          author: "David Fincher",
        },
      ],
      quiz: {
        question: "What was the significance of Fincher's music video and commercial career to his subsequent feature filmmaking?",
        options: [
          { id: "a", text: "It gave him access to Hollywood studio financing that film school graduates could not secure", isCorrect: false },
          { id: "b", text: "It was a graduate education in visual precision, developing the technical control he brought to every feature", isCorrect: true },
          { id: "c", text: "It allowed him to develop relationships with the actors he would later cast in his films", isCorrect: false },
          { id: "d", text: "It distanced him from Hollywood conventions and gave him an outsider's perspective on genre", isCorrect: false },
        ],
        explanation:
          "Fincher's commercial and music video work was where he became Fincher. Working on 30-second and 4-minute projects with very high budgets per second of screen time, he developed an obsessive attention to every element of the image. That precision — what one collaborator called 'making it slightly better one more time' — defines his feature work entirely.",
      },
    },
    {
      id: "df-02-influences",
      title: "Influences & Cinematic Education",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Kubrick: Cold Is Not Empty" },
        {
          type: "paragraph",
          content:
            "Kubrick convinced Fincher that technical perfection and emotional distance aren't opposites — they're complements. The coldness isn't misanthropy. It's a refusal to sentimentalise.",
        },
        { type: "heading", content: "Alan Pakula and Institutional Rot" },
        {
          type: "paragraph",
          content:
            "Klute, All the President's Men — Pakula built a template: corrupt systems, powerless individuals, truth that doesn't set anyone free. Fincher absorbed every word of it.",
        },
        { type: "heading", content: "Friedkin and the City as Threat" },
        {
          type: "paragraph",
          content:
            "Friedkin shot cities like they were dangerous. In Fincher's films, Los Angeles and San Francisco aren't backdrops — they're complicit in what happens there.",
        },
        { type: "heading", content: "The Music Video Legacy" },
        {
          type: "paragraph",
          content:
            "Every image must work. No room for the superfluous. Fincher edits thought, not just action — and that came from making four-minute films that had to nail every frame.",
        },
      ],
      quiz: {
        question: "What does Fincher share with Stanley Kubrick that most distinguishes their work from other technically precise directors?",
        options: [
          { id: "a", text: "Both refuse to cast well-known stars, preferring to work with character actors", isCorrect: false },
          { id: "b", text: "Both understand that technical perfection and emotional distance are complements, not opposites — coldness as a refusal to sentimentalise", isCorrect: true },
          { id: "c", text: "Both are known for shooting on location rather than in studio environments", isCorrect: false },
          { id: "d", text: "Both began their careers as cinematographers before moving to directing", isCorrect: false },
        ],
        explanation:
          "The coldness in both Kubrick and Fincher's work is frequently misread as emotional detachment or misanthropy. In fact it is something more demanding: a refusal to signal to the audience how they should feel, to manipulate emotion through soft light or swelling music. Their films are cold the way surgery is cold — because precision requires the exclusion of sentiment.",
      },
    },
    {
      id: "df-03-style",
      title: "Visual Style & Techniques",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "A World Drained of Warmth" },
        {
          type: "paragraph",
          content:
            "Fincher's palette is a greenish, yellowish grey. Beauty has been sapped from the world — because it should be. Colour is a moral statement, not a mood board.",
        },
        { type: "heading", content: "Shadow With Detail" },
        {
          type: "paragraph",
          content:
            "His shadows are never truly black. You can see into the dark — because evil in his films doesn't hide. It operates in plain sight. The corruption is visible to anyone willing to look.",
        },
        { type: "heading", content: "The Inhuman Camera Move" },
        {
          type: "paragraph",
          content:
            "His camera moves are too smooth for a human to execute. It doesn't behave like an observer — it behaves like a system. Because his films are about systems.",
        },
        { type: "heading", content: "Trent Reznor and the Sound of Dread" },
        {
          type: "paragraph",
          content:
            "Cold, procedural, occasionally beautiful. Reznor and Ross don't tell you how to feel — they create the environment in which feeling becomes possible.",
        },
        {
          type: "quote",
          content: "There's no such thing as a perfect take. There's only the best take you got today.",
          author: "David Fincher",
        },
      ],
      quiz: {
        question: "What is the philosophical implication of Fincher's very low contrast cinematography, in which shadows always contain detail?",
        options: [
          { id: "a", text: "It creates a documentary realism that makes the thriller elements feel more credible", isCorrect: false },
          { id: "b", text: "Evil in his films operates in plain sight — the shadows are legible because the corruption is visible, not hidden", isCorrect: true },
          { id: "c", text: "It compensates for the digital intermediate process, which loses detail in high-contrast areas", isCorrect: false },
          { id: "d", text: "It references the low-contrast look of surveillance footage, connecting his films to the CCTV aesthetic", isCorrect: false },
        ],
        explanation:
          "In conventional thriller cinematography, evil lurks in darkness — the shadow conceals the threat. Fincher reverses this: his world is entirely visible, every detail legible, and what is revealed is corruption operating in full institutional daylight. Se7en, Zodiac, Gone Girl — in each case the horror is not hidden. It is there to be seen by anyone willing to look.",
      },
    },
    {
      id: "df-04-films",
      title: "Essential Films",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Se7en (1995)" },
        {
          type: "paragraph",
          content:
            "A nameless city, permanent rain, a killer who wins. Fincher fought for that ending against every studio instinct — and it's what makes the film unforgettable.",
        },
        { type: "heading", content: "Fight Club (1999)" },
        {
          type: "paragraph",
          content:
            "Not an endorsement — a diagnosis. Masculine alienation under consumer capitalism, rendered with formal dazzle and a narrator you cannot trust.",
        },
        { type: "heading", content: "Zodiac (2007)" },
        {
          type: "paragraph",
          content:
            "His most personal film: a man who loses everything pursuing a truth that can never be proven. Fincher making a film about Fincher. Procedural in structure, devastating in implication.",
        },
        { type: "heading", content: "The Social Network (2010) and Gone Girl (2014)" },
        {
          type: "paragraph",
          content:
            "The Social Network: a film about the theft of friendship, shot at a pace no one else could handle. Gone Girl: a film about how stories are weaponised, where both people are lying and both are telling the truth.",
        },
      ],
      quiz: {
        question: "Why is Zodiac considered Fincher's most personal film, despite being based on a real unsolved murder case?",
        options: [
          { id: "a", text: "Because the Zodiac killings occurred in San Francisco, where Fincher grew up and began his career", isCorrect: false },
          { id: "b", text: "Because it is fundamentally about the cost of obsessive pursuit of an answer that cannot be proven — Fincher's own working method dramatised", isCorrect: true },
          { id: "c", text: "Because the film is based on research Fincher himself conducted rather than a pre-existing screenplay", isCorrect: false },
          { id: "d", text: "Because it contains direct autobiographical references to Fincher's time working on commercial crime reconstructions", isCorrect: false },
        ],
        explanation:
          "Zodiac is Fincher making a film about himself — about a man who cannot stop trying to solve an unsolvable problem, who sacrifices everything to the pursuit of a complete answer, and who ultimately has to accept that the truth he needs cannot be established with certainty. This is Fincher's working method — the obsessive re-shooting, the refusal to accept 'good enough' — made narrative.",
      },
    },
    {
      id: "df-05-themes",
      title: "Themes & Obsessions",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Obsession: Virtue and Disease" },
        {
          type: "paragraph",
          content:
            "His protagonists can't stop. The drive to know, complete, solve — it's heroic in Zodiac, self-destructive in Fight Club, and both at once in everything else. Fincher lives it too.",
        },
        { type: "heading", content: "Order vs. Chaos" },
        {
          type: "paragraph",
          content:
            "Rational minds facing irrational evil — and losing. Se7en, Zodiac, The Social Network: the system doesn't win. That's not nihilism. That's realism.",
        },
        { type: "heading", content: "Men and What They Can't Achieve" },
        {
          type: "paragraph",
          content:
            "Fincher's men are defined by their failures — the narrator without a self, the detective without resolution, the billionaire without friends. The system takes everything and gives receipts.",
        },
        { type: "heading", content: "Narrative as Weapon" },
        {
          type: "paragraph",
          content:
            "In Gone Girl, story is the murder weapon. In The Social Network, the truth is buried under competing accounts. Fincher knows: we live inside engineered narratives. So does cinema.",
        },
      ],
      quiz: {
        question: "What does Fincher's own working method — hundreds of takes, constant refinement — reveal about his relationship to his central theme of obsession?",
        options: [
          { id: "a", text: "That he distrusts actors and prefers to wear down their natural performance choices over many takes", isCorrect: false },
          { id: "b", text: "That he personally enacts the obsessive pursuit he dramatises in his films, living out the virtue and cost of refusing to accept 'good enough'", isCorrect: true },
          { id: "c", text: "That he learned the technique from Kubrick and uses it as a deliberate homage to his primary influence", isCorrect: false },
          { id: "d", text: "That his commercial background trained him to optimise for a single perfect version rather than accepting variation", isCorrect: false },
        ],
        explanation:
          "Fincher is an obsessive making films about obsessives. His insistence on shooting until something is not just good but precisely right — his refusal to declare a take finished when it is merely acceptable — is the same quality he dramatises in Graysmith, in Somerset, in Lisbeth Salander. He understands these characters from the inside.",
      },
    },
    {
      id: "df-06-learn",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "What Fincher Teaches" },
        {
          type: "paragraph",
          content:
            "Technical precision isn't an obstacle to emotion. Done right, it's the precondition for the kind of emotion that outlasts the cinema experience.",
        },
        { type: "heading", content: "1. Colour Is a Moral Statement" },
        {
          type: "paragraph",
          content:
            "Fincher's desaturated world makes a claim about that world. What does your colour temperature say about where your story lives? Use it deliberately — as an argument.",
        },
        { type: "heading", content: "2. Technical Perfection in Service of Story" },
        {
          type: "paragraph",
          content:
            "Every choice serves the story's argument. Don't ask 'does this look interesting?' Ask 'does this serve what the film is trying to say?' Those are different questions.",
        },
        { type: "heading", content: "3. Make Procedural Detail Riveting" },
        {
          type: "paragraph",
          content:
            "Zodiac and The Social Network prove that accumulated testimony and forensic detail can be as gripping as action — if the stakes are clear and the editing is sharp.",
        },
        { type: "heading", content: "4. Endings Must Cost Something" },
        {
          type: "paragraph",
          content:
            "Fincher fought for Se7en's ending. He fought for Gone Girl's. Resolution should feel like consequence, not relief. If it wraps up too cleanly, you've probably lied about something.",
        },
      ],
      reflection: {
        prompt:
          "Choose a scene from any film you admire — it could be your own work — and think about how you would re-shoot it if you had Fincher's level of technical control and unlimited takes. What specifically would you change about the colour, the camera movement, or the lighting? What emotional or thematic argument would those changes serve?",
      },
    },
  ],
}

export default course
