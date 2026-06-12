import type { Course } from "@/types"

const course: Course = {
  id: "bong-joon-ho",
  title: "Bong Joon-ho",
  slug: "bong-joon-ho",
  description:
    "A study of Bong Joon-ho — cinema's master of genre subversion and class critique. From Memories of Murder to Parasite, Bong blends thriller mechanics with devastating social observation.",
  category: "directors",
  accentColor: "#cc2222",
  estimatedHours: 3,
  tags: ["korean", "class", "genre-mixing", "satire", "social-commentary"],
  lessons: [
    {
      id: "bj-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Bong Joon-ho (Born 1969, Daegu, South Korea)" },
        {
          type: "paragraph",
          content:
            "Bong Joon-ho was born in 1969 in Daegu, South Korea, into a family with a strong artistic lineage — his maternal grandfather was the celebrated novelist and screenwriter Park Tae-won. He grew up consuming film voraciously, and enrolled to study sociology at Yonsei University in Seoul, an education that would permanently shape how he thought about cinema and class.",
        },
        {
          type: "paragraph",
          content:
            "After Yonsei he trained at the Korean Academy of Film Arts, entering the industry at the moment the Korean New Wave was transforming what Korean cinema could be. His early career included the short film Incoherence (1994) and then his feature debut Barking Dogs Never Bite (2000), a dark comedy about an apartment complex that established his characteristic mixture of tones.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "2000: Feature debut Barking Dogs Never Bite",
            "2003: Memories of Murder — breakout film, based on South Korea's first documented serial murder case",
            "2006: The Host — international breakthrough, monster movie as political satire",
            "2009: Mother — stripped-down psychological thriller",
            "2013: Snowpiercer — first English-language film, international co-production",
            "2019: Parasite — Palme d'Or at Cannes; Academy Award for Best Picture, the first non-English-language film to win",
          ],
        },
        {
          type: "quote",
          content: "Once you overcome the one-inch-tall barrier of subtitles, you will be introduced to so many more amazing films.",
          author: "Bong Joon-ho",
        },
      ],
      quiz: {
        question: "What academic background shaped Bong Joon-ho's persistent focus on class and social systems?",
        options: [
          { id: "a", text: "He studied film theory at the Korean Academy of Film Arts", isCorrect: false },
          { id: "b", text: "He studied sociology at Yonsei University before film training", isCorrect: true },
          { id: "c", text: "He studied economics at Seoul National University", isCorrect: false },
          { id: "d", text: "He studied literature under his grandfather's influence at a private academy", isCorrect: false },
        ],
        explanation:
          "Bong studied sociology at Yonsei University, an education that gave him a systematic, analytical framework for understanding class and social structure. This is not incidental to his films — it is the engine of them. His cinema is sociology expressed through genre.",
      },
    },
    {
      id: "bj-02-influences",
      title: "Influences & Cinematic Education",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Alfred Hitchcock" },
        {
          type: "paragraph",
          content:
            "Hitchcock is Bong's most frequently cited influence, and the debt is structural. From Hitchcock he learned how to use genre mechanics — suspense, misdirection, the delayed revelation — to manipulate audience emotion. But where Hitchcock's moral universe is often conservative, Bong redirects those same mechanics toward social critique.",
        },
        { type: "heading", content: "The Korean New Wave" },
        {
          type: "paragraph",
          content:
            "Coming of age during the Korean New Wave meant Bong absorbed a generation of directors — Kim Jee-woon, Park Chan-wook, Lee Chang-dong — who were demonstrating that Korean cinema could operate at the highest international level while remaining rooted in Korean specificity. The New Wave gave Bong permission to be locally exact and globally resonant simultaneously.",
        },
        { type: "heading", content: "Asian Social Realism" },
        {
          type: "paragraph",
          content:
            "The Taiwanese New Wave directors Edward Yang and Hou Hsiao-hsien showed Bong how to use domestic and social spaces as documents of historical and economic forces. Yang's Yi Yi and Hou's films about Taiwan's modernisation proved that cinema could carry the full weight of sociological observation without losing its humanity.",
        },
        { type: "heading", content: "Hong Sang-soo and Tonal Range" },
        {
          type: "paragraph",
          content:
            "Hong Sang-soo's dry, recursive comedies about intellectual and romantic failure taught Bong something about tone — specifically how to hold comedy and despair in the same frame without one cancelling the other. Bong's tonal range, the ability to make you laugh and then devastate you immediately, is one of his defining qualities.",
        },
        {
          type: "quote",
          content: "The film I most want to make is the one where I honestly don't know what will happen at the end.",
          author: "Bong Joon-ho",
        },
      ],
      quiz: {
        question: "What did Bong Joon-ho inherit from Alfred Hitchcock, and how did he transform it?",
        options: [
          { id: "a", text: "He inherited Hitchcock's interest in female psychology and applied it to Korean domestic spaces", isCorrect: false },
          { id: "b", text: "He inherited Hitchcock's genre mechanics — suspense and misdirection — and redirected them toward social critique", isCorrect: true },
          { id: "c", text: "He inherited Hitchcock's use of black-and-white cinematography and naturalistic sound design", isCorrect: false },
          { id: "d", text: "He inherited Hitchcock's preference for working from his own original screenplays", isCorrect: false },
        ],
        explanation:
          "Bong took Hitchcock's toolkit — genre mechanics, suspense engineering, the delayed revelation — and redirected the energy. Where Hitchcock used these tools to explore sexual obsession and bourgeois guilt, Bong uses them to expose class immobility, institutional failure, and the violence hidden beneath polite society.",
      },
    },
    {
      id: "bj-03-style",
      title: "Visual Style & Techniques",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Genre Mixing as Structural Method" },
        {
          type: "paragraph",
          content:
            "Bong's films do not occupy single genres — they migrate between them within a single film, and often within a single scene. The Host begins as a monster movie, becomes a family drama, pivots into political satire, and ends in tragedy. These shifts are not accidental or inconsistent; they are how Bong refuses to let genre conventions insulate the audience from the film's real subject.",
        },
        { type: "heading", content: "Precise Storyboarding" },
        {
          type: "paragraph",
          content:
            "Bong is one of cinema's most exacting storyboard artists. He draws every shot before production begins, and his boards are remarkably close to what appears on screen. This pre-visualisation is not about control for its own sake — it means that on set, creative energy goes into performance and nuance rather than figuring out the camera. The preparation is in service of spontaneity.",
        },
        { type: "heading", content: "Vertical Spatial Symbolism" },
        {
          type: "paragraph",
          content:
            "Across his films, Bong uses vertical geography as a literal map of class hierarchy. In Parasite the Parks live in a glass house at the top of a hill while the Kims live in a semi-basement below street level. Going up in a Bong film means moving toward wealth and power; going down means precarity and concealment. The architecture is ideology made spatial.",
        },
        { type: "heading", content: "Tonal Shifts Without Breaking the World" },
        {
          type: "paragraph",
          content:
            "Perhaps Bong's most difficult technical achievement is moving between radically different tones — comedy to horror, farce to grief — without ever making the audience feel that the world has changed. The rules of the fictional world remain consistent; only the emotional register shifts. This requires extraordinary precision in writing, performance, editing, and score.",
        },
      ],
      quiz: {
        question: "What does Bong Joon-ho's use of vertical space — upstairs versus downstairs — represent in films like Parasite?",
        options: [
          { id: "a", text: "It reflects his theatre background and the conventions of Korean stage design", isCorrect: false },
          { id: "b", text: "It is a literal spatial embodiment of class hierarchy — elevation equals wealth and power", isCorrect: true },
          { id: "c", text: "It is borrowed directly from German Expressionism's use of staircase imagery", isCorrect: false },
          { id: "d", text: "It reflects his interest in architecture as a subject independent of social meaning", isCorrect: false },
        ],
        explanation:
          "In Bong's films, vertical geography is ideology made concrete. The Parks' hilltop house and the Kims' semi-basement in Parasite are not merely settings — they are the film's argument about class, made spatially legible. Going down in a Bong film means precarity, concealment, and entrapment. Going up means privilege, exposure, and comfort.",
      },
    },
    {
      id: "bj-04-films",
      title: "Essential Films",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Memories of Murder (2003)" },
        {
          type: "paragraph",
          content:
            "Based on South Korea's first documented serial murder case, Memories of Murder is one of the finest crime films ever made. Two detectives — one instinctive and brutal, one systematic and obsessive — investigate murders in a provincial town in the 1980s. The film is simultaneously a thriller, a study in institutional incompetence, a portrait of a society under authoritarian rule, and a meditation on the limits of human knowledge. The final shot is devastating.",
        },
        { type: "heading", content: "The Host (2006)" },
        {
          type: "paragraph",
          content:
            "A monster emerges from the Han River and takes a young girl. Her dysfunctional family pursues it. The Host uses the monster-movie frame to deliver a precise critique of American military presence in South Korea, governmental incompetence, media hysteria, and the resilience of the family unit against institutions that fail them utterly. It was the highest-grossing Korean film ever at the time of release.",
        },
        { type: "heading", content: "Snowpiercer (2013)" },
        {
          type: "paragraph",
          content:
            "Bong's first English-language film takes place entirely aboard a train carrying humanity's survivors after a climate catastrophe. The train's class compartments — from the front-of-train elite to the tail-section poor — are among cinema's most explicit spatial metaphors for capitalism. Bong uses the train's linear geography to literalise class mobility as a movement through space.",
        },
        { type: "heading", content: "Parasite (2019)" },
        {
          type: "paragraph",
          content:
            "Bong's masterpiece. The Kim family, unemployed and living in a semi-basement, insinuate themselves one by one into the household of the wealthy Park family. What begins as a comedy of social climbing becomes a thriller, then a horror film, then a tragedy. Parasite is the fullest expression of every technique and theme Bong had developed across his career — the spatial symbolism, the genre migration, the tonal precision, the sociological clarity.",
        },
      ],
      quiz: {
        question: "What institutional critique is embedded in The Host's monster-movie narrative?",
        options: [
          { id: "a", text: "A critique of Korea's education system and its pressure on young people", isCorrect: false },
          { id: "b", text: "A critique of American military presence in South Korea and governmental incompetence in the face of crisis", isCorrect: true },
          { id: "c", text: "A critique of South Korea's rapid industrialisation and its environmental consequences", isCorrect: false },
          { id: "d", text: "A critique of Korean family structure and its suppression of individual ambition", isCorrect: false },
        ],
        explanation:
          "The monster in The Host is literally spawned from chemicals illegally dumped into the Han River by an American military base — an actual historical incident. The film then shows the South Korean government's response as entirely shaped by American pressure and media management rather than concern for citizens. The family must save their own because the institutions will not.",
      },
    },
    {
      id: "bj-05-themes",
      title: "Themes & Obsessions",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Class Hierarchy and Social Immobility" },
        {
          type: "paragraph",
          content:
            "Every Bong film is, at its core, about the violence of class. This is not merely an abstract political concern — Bong shows class operating through space, through smell, through who can look whom in the eye. In Parasite the Parks notice that the Kims smell like the subway. The detail is precise: class is embodied, not merely economic.",
        },
        { type: "heading", content: "The Brutality Beneath Bourgeois Comfort" },
        {
          type: "paragraph",
          content:
            "Bourgeois comfort in Bong's films always rests on something concealed. In Parasite there is literally a man living beneath the basement. In Snowpiercer the front-of-train paradise is maintained by the exploitation of the tail section. Bong repeatedly shows that the comfort of the privileged is not separate from the suffering of others — it is built on it.",
        },
        { type: "heading", content: "Family as Both Love and Horror" },
        {
          type: "paragraph",
          content:
            "Bong's families are genuinely loving — this is what separates him from nihilism. The Kims in Parasite, the family in The Host, the mother in Mother — these people love each other. But Bong shows how family love, under conditions of economic precarity and social pressure, can be expressed as violence, deception, and catastrophic risk. Love does not solve the material conditions.",
        },
        { type: "heading", content: "Genre as Social Critique Delivery System" },
        {
          type: "paragraph",
          content:
            "Genre, for Bong, is not decoration — it is a mechanism for delivering social critique past the audience's defences. People sit down to watch a monster movie and find themselves watching a critique of American foreign policy. They sit down to watch a heist comedy and find themselves watching a film about the impossibility of class mobility. Genre is the vehicle; critique is the payload.",
        },
      ],
      quiz: {
        question: "Why does Bong Joon-ho use genre conventions rather than straightforward social realism to make his social critiques?",
        options: [
          { id: "a", text: "Because genre films attract larger budgets that allow him to work at the scale he requires", isCorrect: false },
          { id: "b", text: "Because genre delivers social critique past the audience's defences — they sit down for entertainment and encounter the argument", isCorrect: true },
          { id: "c", text: "Because pure social realism is restricted by Korean censorship laws", isCorrect: false },
          { id: "d", text: "Because he considers social realism an artistically exhausted mode that cannot reach contemporary audiences", isCorrect: false },
        ],
        explanation:
          "Genre functions, for Bong, as a Trojan horse. Audiences accept the genre contract — monster movie, thriller, heist film — and this lowers their ideological guard. The social critique arrives while they are enjoying themselves. By the time the film reveals its full argument, they are already implicated in what they have been watching.",
      },
    },
    {
      id: "bj-06-learn",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From His Practice" },
        {
          type: "paragraph",
          content:
            "Bong teaches that genre is a tool, not a constraint — and that the physical spaces in a story can do the ideological work that dialogue would otherwise have to carry.",
        },
        { type: "heading", content: "1. Use Genre to Deliver Your Real Subject" },
        {
          type: "paragraph",
          content:
            "Identify the genre conventions your story uses, then ask what social or psychological truth you could smuggle through that genre frame. The monster movie can carry political critique. The romantic comedy can carry economic analysis. The thriller can carry an argument about institutional failure. Pick one real-world subject and find the genre that gets it closest to an audience.",
        },
        { type: "heading", content: "2. Make Space Do Ideological Work" },
        {
          type: "paragraph",
          content:
            "Look at a scene you are writing or a sequence you are designing. Is there a spatial relationship — upstairs/downstairs, inside/outside, centre/periphery — that could embody the power dynamic you are depicting? Physical geography that encodes abstract ideas frees you from having to state those ideas in dialogue.",
        },
        { type: "heading", content: "3. Hold Multiple Tones Without Choosing" },
        {
          type: "paragraph",
          content:
            "Bong refuses to choose between funny and devastating, between genre entertainment and social critique. Practice holding two emotional registers simultaneously by writing a scene that is genuinely comic and genuinely sad. Do not let either register undercut the other. The audience should laugh and feel guilty for laughing.",
        },
        { type: "heading", content: "4. Storyboard Before You Shoot" },
        {
          type: "paragraph",
          content:
            "Bong's precise pre-visualisation is not about limiting spontaneity — it is about moving the creative decisions to the stage where you have the most time and freedom to make them. If you know exactly what you are building before you build it, the building becomes execution of vision rather than search for vision under pressure.",
        },
      ],
      reflection: {
        prompt:
          "Watch the famous 'stairs' sequence in Parasite — the long walk up and down the hill between the Parks' house and the Kims' neighbourhood. How does Bong use physical geography to make an argument without a word of dialogue? Then identify a space in your own life, neighbourhood, or community where physical geography encodes social hierarchy. How would you film it?",
      },
    },
  ],
}

export default course
