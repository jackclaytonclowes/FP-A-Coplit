import type { Course } from "@/types"

const course: Course = {
  id: "david-fincher",
  title: "David Fincher",
  slug: "david-fincher",
  description:
    "A study of David Fincher — Hollywood's most rigorous technician. Fincher's cold precision, desaturated palettes and obsessive visual control create crime dramas of extraordinary tension.",
  category: "directors",
  accentColor: "#2d4a5c",
  estimatedHours: 3,
  tags: ["thriller", "procedural", "dark", "technical", "american"],
  lessons: [
    {
      id: "df-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "David Fincher (Born 1962, Denver)" },
        {
          type: "paragraph",
          content:
            "David Fincher was born in 1962 in Denver, Colorado, and grew up in Marin County, California, where George Lucas lived nearby. He began making films with an 8mm camera as a child and by his mid-teens had a clear conviction that cinema was what he was for. He never went to film school. Instead he apprenticed himself to the industrial process of image-making: he went to work at Industrial Light & Magic, then built a career as a director of commercials and music videos.",
        },
        {
          type: "paragraph",
          content:
            "The music video and commercial work was not a detour from filmmaking — it was a graduate education in visual precision. Directing for Madonna, Aerosmith, the Rolling Stones, and Michael Jackson, Fincher developed an approach to the moving image that prioritised technical control above all else. Every frame was considered. Every cut was purposeful. When he moved to features, he brought that rigour with him.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Stanley Kubrick: Obsessive Control and Cold Precision" },
        {
          type: "paragraph",
          content:
            "Kubrick is the most evident formal influence on Fincher's cinema — specifically Kubrick's conviction that technical perfection and emotional distance are not opposites but complements. Like Kubrick, Fincher shoots enormous numbers of takes not because he is dissatisfied with performance but because he is searching for a version of reality slightly more real than what occurs naturally. The coldness in both directors' work is not emptiness — it is a refusal to sentimentalise.",
        },
        { type: "heading", content: "Alan Pakula and the Paranoid Thriller" },
        {
          type: "paragraph",
          content:
            "Alan Pakula's paranoid thrillers of the 1970s — Klute, The Parallax View, All the President's Men — established a template for films in which institutional systems are corrupt, individuals are powerless against them, and the truth, when it is found, does not set anyone free. Fincher absorbed this worldview entirely. His films are fundamentally about the failure of institutions to contain or reveal evil.",
        },
        { type: "heading", content: "William Friedkin and Gritty Urban Realism" },
        {
          type: "paragraph",
          content:
            "Friedkin's ability to shoot cities as genuinely threatening environments — where the camera itself seems to be in danger — influenced Fincher's treatment of urban space. The Los Angeles and San Francisco of Fincher's films are not atmospheric backdrops but active menacing presences. The city is complicit in what happens there.",
        },
        { type: "heading", content: "The Music Video Legacy" },
        {
          type: "paragraph",
          content:
            "Fincher was one of the directors who proved that music video was a serious formal discipline. The compression of visual storytelling required by the form — every image must work, there is no room for anything superfluous — directly shaped his approach to feature filmmaking. He edits thought, not just action.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Desaturated Palette" },
        {
          type: "paragraph",
          content:
            "Fincher's films exist in a world drained of colour. His signature palette — a greenish or yellowish grey, with detail preserved in shadows rather than highlights — creates an environment where beauty has been sapped from the world and only function remains. Working with cinematographers Darius Khondji, Jeff Cronenweth, and Eigil Bryld, he developed colour as a moral statement: this world is not appealing because it should not be.",
        },
        { type: "heading", content: "Shadow With Detail" },
        {
          type: "paragraph",
          content:
            "Fincher shoots at very low contrast — shadows are never truly black, highlights are never truly white. The result is that information is preserved throughout the image: you can see into the darkness. This technical choice is also a philosophical one. In Fincher's world, evil is not hidden in darkness — it operates in plain sight. The shadows are legible because the corruption is visible.",
        },
        { type: "heading", content: "The Inhuman Camera Move" },
        {
          type: "paragraph",
          content:
            "Fincher's camera moves are precisely motivated and executed with a smoothness that exceeds human capability — achieved through motion control and digital intermediate work. The camera in a Fincher film does not behave like a human observer; it behaves like a system observing. This is thematically consistent: his films are about systems, institutions, and processes, and the camera reflects that point of view.",
        },
        { type: "heading", content: "Trent Reznor and the Sound of Dread" },
        {
          type: "paragraph",
          content:
            "From The Social Network onward, Fincher has worked with Trent Reznor and Atticus Ross on his scores. Their electronic textures — cold, procedural, occasionally beautiful — create an audio equivalent of his visual palette. Music in a Fincher film does not tell you how to feel; it creates the environment in which feeling becomes possible.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Se7en (1995)" },
        {
          type: "paragraph",
          content:
            "The film that established Fincher's voice. Two detectives in a nameless city of permanent rain pursue a killer using the seven deadly sins as a framework. The city is never identified, the rain never stops, and the resolution — in which the killer achieves his goal despite the detectives' best efforts — is one of the most uncompromising endings in mainstream American cinema. Andrew Kevin Walker's screenplay gave Fincher the material he needed; Fincher's insistence on the ending made it the film it is.",
        },
        { type: "heading", content: "Fight Club (1999)" },
        {
          type: "paragraph",
          content:
            "A nameless narrator, sleepless and alienated, meets the charismatic Tyler Durden and together they build an underground fighting network that evolves into something far more dangerous. Commercially divisive on release — many audiences and critics were disturbed by its apparent endorsement of violence and nihilism — it has since been understood as a diagnosis of masculine alienation under consumer capitalism, not a prescription. Formally dazzling, narratively unreliable.",
        },
        { type: "heading", content: "Zodiac (2007)" },
        {
          type: "paragraph",
          content:
            "Fincher's masterpiece and possibly his most personal film. An investigation into the Zodiac killings in late 1960s and 1970s San Francisco, built around the obsessive pursuit of an answer that never comes. The film is about what obsession costs — how a man can lose everything in pursuit of a truth that ultimately cannot be proven. Procedural in structure, devastating in implication. The Zodiac is never caught because he cannot be caught: the system cannot contain this kind of evil.",
        },
        { type: "heading", content: "The Social Network (2010) and Gone Girl (2014)" },
        {
          type: "paragraph",
          content:
            "The Social Network is Fincher's most formally perfect film — Aaron Sorkin's screenplay delivered at a pace and density that no other director could have handled. It is also, beneath the surface, a film about the theft of friendship and the hollowness of achievement. Gone Girl is his most controlled examination of narrative manipulation: a film about how stories are constructed, how media amplifies fiction, and how two people can each be lying while both, in some sense, are telling the truth.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Obsession as Both Virtue and Disease" },
        {
          type: "paragraph",
          content:
            "Fincher's protagonists are almost always obsessives — people in whom the drive to know, to complete, to solve has become consuming. In some films this is portrayed as heroic (Zodiac's Robert Graysmith pursuing the truth), in others as self-destructive (Fight Club's narrator inventing a more vital version of himself), in others as both simultaneously. Fincher clearly identifies with obsession: his own working method — hundreds of takes, constant refinement — is the same quality in a different key.",
        },
        { type: "heading", content: "The Systematic Mind Confronting Chaos" },
        {
          type: "paragraph",
          content:
            "His films repeatedly stage the encounter between a rational, systematic intelligence and a form of chaos or evil that exceeds systematisation. The detectives in Se7en, the investigators in Zodiac, the lawyer in The Social Network — all are people trying to apply procedural logic to phenomena that resist it. The system does not ultimately win. This is not nihilism but realism.",
        },
        { type: "heading", content: "Masculinity and Its Discontents" },
        {
          type: "paragraph",
          content:
            "Fight Club is the most explicit treatment, but all of Fincher's films are portraits of men failing to become what they intended: the narrator without a self, the detectives without resolution, the billionaire without friends, the husband without innocence. Fincher's men are defined by what they cannot achieve, what they lose in the pursuit, what the system extracts from them in exchange for admission.",
        },
        { type: "heading", content: "Media and Narrative Manipulation" },
        {
          type: "paragraph",
          content:
            "Gone Girl and The Social Network are both, among other things, films about how stories are constructed and weaponised. In Gone Girl, narrative is the actual murder weapon. In The Social Network, the story of Facebook's founding has been so thoroughly mediated by competing accounts that the truth is unreachable. Fincher understands that we live inside narratives that have been engineered, and that cinema is itself such a narrative.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Lessons From Fincher's Cinema" },
        {
          type: "paragraph",
          content:
            "Fincher teaches that technical precision is not an obstacle to emotion — it is the precondition for the kind of emotion that outlasts the cinema experience.",
        },
        { type: "heading", content: "1. Colour Is a Moral Statement" },
        {
          type: "paragraph",
          content:
            "Fincher's desaturated palette is not aesthetic preference — it is a statement about the world his films inhabit. Think about what the colour temperature and saturation of your images says about the world you are depicting. A world drained of warmth makes a claim about that world. Use colour deliberately, as an argument.",
        },
        { type: "heading", content: "2. Technical Perfection in Service of Story" },
        {
          type: "paragraph",
          content:
            "Fincher's obsessive control of every technical element — camera placement, lighting ratio, colour grade, sound design — is never for its own sake. Every choice serves the story's emotional and thematic argument. The question to ask of any technical decision is not 'does this look interesting?' but 'does this serve what the film is trying to say?'",
        },
        { type: "heading", content: "3. Make Procedural Detail Cinematically Riveting" },
        {
          type: "paragraph",
          content:
            "Zodiac and The Social Network demonstrate that the accumulation of procedural detail — testimony, deposition, document, forensic report — can be as gripping as any action sequence if the stakes are clear and the editing is precise. Do not assume that slow accumulation of information is inherently undramatic. The drama is in what the information means.",
        },
        { type: "heading", content: "4. Endings Must Cost Something" },
        {
          type: "paragraph",
          content:
            "Fincher fought for the ending of Se7en against every studio instinct. He fought for the ending of Gone Girl. His instinct was always that the resolution should feel like a consequence, not a release. What does your story actually cost its characters? If the ending resolves too cleanly, you have probably lied about something.",
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
