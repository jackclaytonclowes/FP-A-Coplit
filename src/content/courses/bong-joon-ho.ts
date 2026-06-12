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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Bong Joon-ho (Born 1969, Daegu, South Korea)" },
        {
          type: "paragraph",
          content:
            "Bong studied sociology at Yonsei University before film training — and it shows. His cinema is sociology expressed through genre. Class isn't a theme; it's the engine.",
        },
        {
          type: "paragraph",
          content:
            "He entered the industry during the Korean New Wave, trained at the Korean Academy of Film Arts, and arrived with his tonal range already fully loaded: funny, devastating, often at the same time.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Hitchcock's Toolkit, Redirected" },
        {
          type: "paragraph",
          content:
            "From Hitchcock, Bong took suspense, misdirection, the delayed revelation. But where Hitchcock explores bourgeois guilt, Bong exposes class immobility and institutional failure.",
        },
        { type: "heading", content: "The Korean New Wave" },
        {
          type: "paragraph",
          content:
            "Park Chan-wook, Kim Jee-woon, Lee Chang-dong — they proved Korean cinema could be locally exact and globally resonant at the same time. Bong had permission from the start.",
        },
        { type: "heading", content: "Asian Social Realism" },
        {
          type: "paragraph",
          content:
            "Edward Yang and Hou Hsiao-hsien showed that domestic and social spaces could carry the full weight of economic history. Bong absorbed this and added genre mechanics.",
        },
        { type: "heading", content: "Hong Sang-soo and Tonal Range" },
        {
          type: "paragraph",
          content:
            "Hong's dry comedies of intellectual failure taught Bong how to hold comedy and despair in the same frame. You laugh, then you feel guilty for laughing. That's the move.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Genre Mixing as Method" },
        {
          type: "paragraph",
          content:
            "The Host is a monster movie, then a family drama, then political satire, then tragedy — all in one film. The shifts aren't inconsistencies. They're how Bong stops genre from protecting you.",
        },
        { type: "heading", content: "He Draws Every Shot First" },
        {
          type: "paragraph",
          content:
            "Bong storyboards obsessively — and his boards look like the finished film. That preparation isn't about control; it frees the set for performance and nuance instead of figuring out the camera.",
        },
        { type: "heading", content: "Up Is Rich, Down Is Precarious" },
        {
          type: "paragraph",
          content:
            "Parasite's geography is literal ideology: hilltop house, semi-basement apartment. Going down in a Bong film means entrapment. The architecture argues his politics without a word of dialogue.",
        },
        { type: "heading", content: "Tone Shifts Without World Breaks" },
        {
          type: "paragraph",
          content:
            "Comedy to horror to tragedy — Bong shifts emotional registers without breaking the rules of his fictional world. It requires extraordinary precision in writing, performance, editing, and score.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Memories of Murder (2003)" },
        {
          type: "paragraph",
          content:
            "Based on South Korea's first documented serial murder case. Two detectives, one instinctive and brutal, one systematic and obsessive — and no answer at the end. The final shot is devastating.",
        },
        { type: "heading", content: "The Host (2006)" },
        {
          type: "paragraph",
          content:
            "A monster from the Han River takes a girl. Her dysfunctional family goes after it. The monster is literally spawned from American military chemicals — and the government makes everything worse.",
        },
        { type: "heading", content: "Snowpiercer (2013)" },
        {
          type: "paragraph",
          content:
            "Post-apocalypse on a train. Front carriages: the elite. Tail section: the poor. Class mobility is literally movement through space. Bong doesn't do subtle, and he doesn't need to.",
        },
        { type: "heading", content: "Parasite (2019)" },
        {
          type: "paragraph",
          content:
            "Comedy to thriller to horror to tragedy — and every transition is earned. The fullest expression of everything Bong built: spatial symbolism, genre migration, tonal precision, sociological clarity.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Class Is Embodied, Not Just Economic" },
        {
          type: "paragraph",
          content:
            "In Parasite, the Parks notice the Kims smell like the subway. Class operates through space, through smell, through who can look whom in the eye. Bong shows you the texture of it.",
        },
        { type: "heading", content: "Comfort Is Built on Something Concealed" },
        {
          type: "paragraph",
          content:
            "In Parasite there's literally a man living under the basement. In Snowpiercer the elite paradise runs on the exploitation of the tail. The privilege and the suffering are the same system.",
        },
        { type: "heading", content: "Family Love Under Economic Pressure" },
        {
          type: "paragraph",
          content:
            "Bong's families genuinely love each other — that's what separates him from nihilism. But love under precarity gets expressed as deception, violence, and catastrophic risk. It doesn't solve the material conditions.",
        },
        { type: "heading", content: "Genre as Trojan Horse" },
        {
          type: "paragraph",
          content:
            "You sit down for a monster movie and find yourself watching a critique of American foreign policy. Genre is the vehicle. Critique is the payload. The audience's guard is already down.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "What Bong Teaches" },
        {
          type: "paragraph",
          content:
            "Genre is a tool, not a constraint. And the physical spaces in a story can do the ideological work that dialogue would otherwise have to carry.",
        },
        { type: "heading", content: "1. Use Genre to Deliver Your Real Subject" },
        {
          type: "paragraph",
          content:
            "Pick a genre that gets your real subject closest to an audience. The monster movie can carry political critique. The heist comedy can carry an argument about class. What's yours?",
        },
        { type: "heading", content: "2. Make Space Do Ideological Work" },
        {
          type: "paragraph",
          content:
            "Is there a spatial relationship in your story — up/down, inside/outside — that could embody the power dynamic you're depicting? If so, you don't need to state it in dialogue.",
        },
        { type: "heading", content: "3. Hold Multiple Tones Without Choosing" },
        {
          type: "paragraph",
          content:
            "Write a scene that's genuinely comic and genuinely sad at the same time. Don't let either undercut the other. The audience should laugh and feel guilty for laughing.",
        },
        { type: "heading", content: "4. Storyboard Before You Shoot" },
        {
          type: "paragraph",
          content:
            "Bong's pre-visualisation moves creative decisions to the stage where you have the most time and freedom. Know what you're building before you build it. Then the building is execution, not discovery under pressure.",
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
