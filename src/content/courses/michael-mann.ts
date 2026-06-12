import type { Course } from "@/types"

const course: Course = {
  id: "michael-mann",
  title: "Michael Mann",
  slug: "michael-mann",
  description:
    "A study of Michael Mann — cinema's poet of professional obsession. Mann's nocturnal urban cinematography and deeply researched characters define the modern crime film.",
  category: "directors",
  accentColor: "#1a8899",
  estimatedHours: 3,
  tags: ["crime", "procedural", "male-obsession", "digital", "nocturnal"],
  lessons: [
    {
      id: "mm-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Michael Mann (b. 1943)" },
        {
          type: "paragraph",
          content:
            "Michael Mann was born in 1943 in Chicago — a city whose geography, social landscape, and masculine mythology run through his entire body of work. He studied film at the London Film School in the late 1960s, where he absorbed the British documentary tradition and the social realism of the British New Wave. This documentary instinct — the drive to ground fiction in the specificity of how things actually work — would become the defining characteristic of his approach.",
        },
        {
          type: "paragraph",
          content:
            "Mann's television work in the 1970s and early 80s — culminating in his creation of Miami Vice — developed his signature visual style before he applied it to features. Miami Vice's pastel colours, no-socks aesthetic, and synthesiser score were cultural phenomena, but Mann's deeper innovation was the show's willingness to take criminals seriously as professionals, and to treat the procedural detail of crime and law enforcement as dramatically central rather than decorative.",
        },
        {
          type: "heading",
          content: "Career Timeline",
        },
        {
          type: "list",
          items: [
            "1943: Born in Chicago, Illinois",
            "Late 1960s: Film studies at London Film School",
            "1970s: Television work including Police Story, Starsky and Hutch episodes",
            "1984: Creates Miami Vice TV series — career-defining cultural phenomenon",
            "1981: Thief — feature debut, establishing the Mann protagonist",
            "1986: Manhunter — the first Hannibal Lecter film, underrated on release",
            "1992: The Last of the Mohicans — unexpected departure, major commercial success",
            "1995: Heat — the definitive American crime film",
            "1999: The Insider — his most underrated masterwork",
            "2004: Collateral — Sony HDV and Tom Cruise, digital's cinematic coming-of-age",
            "2006: Miami Vice feature — late style in its purest form",
            "2009: Public Enemies — digital period crime film",
            "2023: Ferrari — late-career return",
          ],
        },
        {
          type: "quote",
          content: "I'm interested in people who are dedicated professionals. People who are very, very good at what they do.",
          author: "Michael Mann",
        },
      ],
      quiz: {
        question: "What did Mann's London Film School education contribute to his approach to fiction filmmaking?",
        options: [
          { id: "a", text: "It gave him technical training in widescreen cinematography that he applied immediately to his television work", isCorrect: false },
          { id: "b", text: "He absorbed the British documentary tradition and social realism, giving him a drive to ground fiction in the specificity of how things actually work", isCorrect: true },
          { id: "c", text: "It connected him with European art cinema directors whose influence is visible in his non-linear narrative structures", isCorrect: false },
          { id: "d", text: "He developed his signature approach to colour and visual design through the school's graphic arts programme", isCorrect: false },
        ],
        explanation:
          "Mann's documentary-inflected approach — the obsessive research, the procedural specificity, the sense that his characters' professional lives are shown with genuine accuracy — comes from his formation in the British documentary tradition at the London Film School. He carries a documentary filmmaker's commitment to authenticity into genre fiction: the guns, the techniques, the professional rituals are shown as they actually are.",
      },
    },
    {
      id: "mm-02-influences",
      title: "Influences & Cinematic Education",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Jean-Pierre Melville and Professional Crime" },
        {
          type: "paragraph",
          content:
            "The French director Jean-Pierre Melville's crime films — Le Samourai (1967), Le Cercle Rouge (1970), Un Flic (1972) — are the single most important influence on Mann's cinema. Melville's criminals are cool, disciplined professionals operating under a personal code; they exist in a world of moral clarity defined by professional commitment rather than conventional ethics. This is the world Mann inhabits in Thief, Heat, and Collateral.",
        },
        { type: "heading", content: "The French New Wave's Documentary Impulse" },
        {
          type: "paragraph",
          content:
            "Godard and Truffaut's use of real locations, available light, and documentary visual techniques in genre films showed Mann that authenticity and genre were compatible — that a crime film could be shot on the actual streets where crime occurs, with the actual quality of light those streets have, rather than on a studio backlot. Mann took this lesson further than either Godard or Truffaut: his location research is legendary in its depth.",
        },
        { type: "heading", content: "Chicago Writers and Masculine Isolation" },
        {
          type: "paragraph",
          content:
            "Mann's Chicago origins connect him to a tradition of American writing about masculine isolation and professional dedication — Hemingway's code heroes, Saul Bellow's urban loners, the city as a landscape of solitude and ambition. His characters share this tradition: they are men for whom professional excellence has become the whole of identity, at the cost of everything else.",
        },
        { type: "heading", content: "Documentary Cinematography and Available Light" },
        {
          type: "paragraph",
          content:
            "Mann's early television work trained him in the use of available light and real locations rather than constructed studio environments. His preference for authentic locations — the real streets of Los Angeles, the real offices of a tobacco company — and his evolution from stylised neon (Thief) through to Sony HDV digital realism (Collateral) reflects a career-long drive toward a specific kind of photographic truthfulness.",
        },
      ],
      quiz: {
        question: "What specifically does Jean-Pierre Melville contribute to Mann's conception of his criminal characters?",
        options: [
          { id: "a", text: "Melville's slow, contemplative pacing — long takes and minimal dialogue — which Mann adopted as a way of creating tension", isCorrect: false },
          { id: "b", text: "The model of criminals as cool, disciplined professionals operating under a personal code, where moral clarity comes from professional commitment rather than conventional ethics", isCorrect: true },
          { id: "c", text: "Melville's use of jazz soundtracks, which Mann adapted as synthesiser scores for the contemporary urban environment", isCorrect: false },
          { id: "d", text: "The structural device of parallel editing between investigator and criminal, which Melville pioneered and Mann extended", isCorrect: false },
        ],
        explanation:
          "Melville's contribution to Mann is not primarily technical but philosophical: the idea that a criminal's code of professional conduct can be a form of moral seriousness. Melville's thieves and assassins are not glamourised but genuinely respected for their discipline and commitment. Mann takes this further: his criminals in Thief and Heat are professionals first, and the film's moral imagination is organised around professional excellence rather than conventional heroism or villainy.",
      },
    },
    {
      id: "mm-03-style",
      title: "Visual Style & Techniques",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Evolution From Neon to Digital Realism" },
        {
          type: "paragraph",
          content:
            "Mann's career describes a consistent trajectory from stylised artifice toward tactile authenticity. Thief (1981) is photographed by Donald Thorin in rich, neon-saturated colours against which the characters appear as figures in a painting. Heat (1995), shot by Dante Spinotti, begins this shift toward photographic naturalism — Los Angeles rendered as it actually looks at different hours. Collateral (2004), shot partly on Sony HDV, is the logical endpoint: digital video's grain and immediacy, the city as texture rather than backdrop.",
        },
        { type: "heading", content: "Extreme Close-Ups of Hands at Work" },
        {
          type: "paragraph",
          content:
            "Mann's films consistently return to the close-up of hands performing skilled actions: Frank in Thief cutting a safe, the various craftsmen and professionals in Heat executing their disciplines, Vincent in Collateral drawing and holstering his weapon with practised efficiency. These close-ups are not decorative — they establish character through competence and communicate that Mann has researched how these things are actually done.",
        },
        { type: "heading", content: "Nocturnal Los Angeles as Spiritual Landscape" },
        {
          type: "paragraph",
          content:
            "Mann's Los Angeles — particularly in Heat, Collateral, and Miami Vice (2006) — is a nocturnal city of extraordinary visual beauty: freeway light trails, glass towers reflecting the city back at itself, the ocean at night, the specific quality of Los Angeles air at 2am. The city is not a backdrop but a character with its own emotional weather, and Mann photographs it with the attentiveness of a landscape photographer.",
        },
        { type: "heading", content: "The Gunfight as Ritual With Specific Physics" },
        {
          type: "paragraph",
          content:
            "Mann consulted with technical advisers and SWAT team members to choreograph gunfights with documentary accuracy: how professionals actually move, take cover, reload, and fire under extreme stress. The result — most famously in Heat's bank robbery sequence — is action that creates tension through procedural authenticity rather than stylised choreography. You believe these people know exactly what they are doing.",
        },
      ],
      quiz: {
        question: "What career-long visual trajectory does Mann's cinematography describe, from Thief (1981) to Collateral (2004)?",
        options: [
          { id: "a", text: "From black-and-white expressionism toward vivid Technicolor saturation as digital colour technology improved", isCorrect: false },
          { id: "b", text: "From stylised neon artifice toward tactile digital realism — a drive toward photographic authenticity and the specific texture of real locations", isCorrect: true },
          { id: "c", text: "From wide-angle location photography toward intimate telephoto close-ups as his interest moved from environment to character", isCorrect: false },
          { id: "d", text: "From available-light documentary realism toward increasingly elaborate studio-constructed environments", isCorrect: false },
        ],
        explanation:
          "Mann's visual evolution is one of the most coherent trajectories in American cinema: from Thief's lush neon stylisation — beautiful, artificial, painting-like — through Heat's more naturalistic rendering of Los Angeles, to Collateral's Sony HDV, with its digital grain, its immediacy, and its ability to capture the actual quality of light in the city at night. Each film moves further from studio artifice and closer to the specific texture of the real world.",
      },
    },
    {
      id: "mm-04-films",
      title: "Essential Films",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Thief (1981)" },
        {
          type: "paragraph",
          content:
            "Mann's debut feature establishes every element of his mature work: the professional criminal with a personal code, the meticulous depiction of expertise (the safe-cracking sequences were supervised by real thieves), the nocturnal Chicago locations, the synthesiser score, and the question of whether a life of total professional commitment can be compatible with personal connection. James Caan's Frank is the ur-Mann protagonist.",
        },
        { type: "heading", content: "Heat (1995)" },
        {
          type: "paragraph",
          content:
            "Heat is the definitive American crime film and Mann's masterpiece. Al Pacino's detective Vincent and Robert De Niro's thief McCauley are mirror images — equally committed, equally isolated, equally defined by their work — who spend the film moving toward each other across the city. The coffee shop scene, in which they sit across a table and speak honestly to each other for the only time, is one of the great scenes in American cinema.",
        },
        { type: "heading", content: "The Insider (1999)" },
        {
          type: "paragraph",
          content:
            "Mann's most underrated film: Russell Crowe as Jeffrey Wigand, the tobacco industry whistleblower, and Al Pacino as Lowell Bergman, the 60 Minutes producer who protects him. A film about corporate power, journalistic integrity, and personal courage that moves with the same procedural intensity as Mann's crime films. The thriller is the legal and institutional machinery that grinds against a man trying to tell the truth.",
        },
        { type: "heading", content: "Collateral (2004) and Miami Vice (2006)" },
        {
          type: "paragraph",
          content:
            "Collateral is Tom Cruise as a contract killer, Jamie Foxx as the cab driver who drives him through the night. Shot partially on Sony HDV — then an unconventional choice for a major studio film — its digital texture gave Los Angeles at night a tactile immediacy no film stock had achieved. Miami Vice (2006) extends this digital realism to Mann's own earlier creation, stripping the pastel glamour of the TV series and replacing it with the grey-blue grain of digital video.",
      },
      },
      quiz: {
        question: "What makes the coffee shop scene in Heat (1995) cinematically significant?",
        options: [
          { id: "a", text: "It is the film's only action sequence set in a public space, contrasting the private violence of the rest of the film", isCorrect: false },
          { id: "b", text: "It is the only moment when the film's mirror-image protagonists meet and speak honestly to each other, creating tension between equals through eyelines and silence rather than action", isCorrect: true },
          { id: "c", text: "It was the first scene in American cinema to use a two-camera setup for an intimate conversation, allowing genuine spontaneous reaction", isCorrect: false },
          { id: "d", text: "The scene was entirely improvised by Pacino and De Niro without a written script, making it unique in Mann's otherwise tightly controlled productions", isCorrect: false },
        ],
        explanation:
          "The coffee shop scene is significant because it brings the film's two principals — who have been moving toward each other throughout — into the same frame for the only time before the film's end. Two men who are mirror images, who understand each other completely, who respect each other as professionals: the scene's tension comes from this mutual recognition, and from the fact that they know their relationship must end violently. Mann shoots it simply — eyelines, cuts, silence — which is exactly right.",
      },
    },
    {
      id: "mm-05-themes",
      title: "Themes & Obsessions",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Professionalism as Existential Code" },
        {
          type: "paragraph",
          content:
            "Mann's deepest subject is the man for whom professional excellence has become the whole of identity. Frank in Thief, McCauley in Heat, Wigand in The Insider, Vincent in Collateral: all are defined entirely by their professional commitments. This is both admirable — the discipline, the mastery, the dedication — and catastrophic: it leaves no room for the personal connections that make a life liveable. Mann presents this not as a flaw to be corrected but as a condition to be understood.",
        },
        { type: "heading", content: "The Mirror Image: Cop and Criminal" },
        {
          type: "paragraph",
          content:
            "Heat's central conceit — the detective and the thief as mirror images, each the other's double — is Mann's most explicit statement of a theme that runs through all his work. The law and crime are not moral opposites in Mann's cinema but professional alternatives: both require the same qualities of discipline, intelligence, and commitment. The moral distinction is secondary to the professional identity.",
        },
        { type: "heading", content: "Urban Loneliness and Neon, Glass, and Mortality" },
        {
          type: "paragraph",
          content:
            "Mann's Los Angeles is one of cinema's great urban landscapes: a city of extraordinary physical beauty — the freeways at night, the glass towers, the ocean — in which human beings are profoundly alone. His characters move through this beauty in isolation; they cannot connect, because connection would compromise the professional detachment their work requires. The city's beauty and the characters' loneliness are inseparable.",
        },
        { type: "heading", content: "Masculinity as Discipline and Sacrifice" },
        {
          type: "paragraph",
          content:
            "Mann's films constitute one of the most sustained explorations of masculinity in American cinema: what it costs to be a certain kind of man, what it destroys, what it makes possible. His heroes are not glamourised but genuinely admired for specific qualities — mastery, courage, commitment — while the films are clear-eyed about what those qualities cost in terms of human connection and ordinary life.",
        },
      ],
      quiz: {
        question: "What does Mann's presentation of cop and criminal as mirror images argue about the moral structure of his films?",
        options: [
          { id: "a", text: "That crime and law enforcement are morally equivalent and that the distinction between them is arbitrary", isCorrect: false },
          { id: "b", text: "That moral distinction between law and crime is secondary to professional identity — both require the same discipline and commitment, and the films' moral imagination is organised around excellence rather than legality", isCorrect: true },
          { id: "c", text: "That criminals are ultimately superior to law enforcement because they operate without institutional constraints", isCorrect: false },
          { id: "d", text: "That the American legal system is so corrupt that there is no genuine moral difference between those within and outside it", isCorrect: false },
        ],
        explanation:
          "Mann's mirror-image structure — most explicit in Heat, present throughout his work — argues that professional identity precedes and shapes moral identity. McCauley and Vincent are not presented as good and evil but as two men of comparable discipline and commitment who have chosen different professional paths. The film respects both equally, and its emotional power comes from this equal respect — the tragedy is not that one is good and one is evil, but that two comparable men must destroy each other.",
      },
    },
    {
      id: "mm-06-learn",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Mann's Lessons for Filmmakers" },
        {
          type: "paragraph",
          content:
            "Mann teaches that procedural authenticity — showing how things actually work — is one of cinema's most powerful tools for creating tension and investment. He also teaches that the environment can be a character, that digital's grain and immediacy have aesthetic possibilities that film's polish cannot replicate, and that style can be a form of moral seriousness.",
        },
        { type: "heading", content: "1. Research as Respect" },
        {
          type: "paragraph",
          content:
            "Mann's research is legendary: he employs real professionals to advise on procedure, visits the actual locations he will film, and requires his actors to train in the specific skills their characters possess. This research is not window dressing — it communicates respect for the subject and creates the authenticity that generates audience trust. Notice how procedural accuracy changes your investment in a scene.",
        },
        { type: "heading", content: "2. The Environment as Character" },
        {
          type: "paragraph",
          content:
            "Mann's Los Angeles is not a backdrop — it is a condition that shapes the characters who live in it. Study how he uses the city's geography, architecture, and light as psychological information. The glass towers, the freeways, the ocean: each location tells you something about the characters who inhabit it. How do the environments in your own work communicate character?",
        },
        { type: "heading", content: "3. Tension Through Procedure, Not Spectacle" },
        {
          type: "paragraph",
          content:
            "Heat's bank robbery and gunfight sequences are tense not because of stylised action choreography but because the procedure is shown accurately. Professional people doing their jobs under extreme pressure, making competent decisions: this is more frightening than spectacular violence. The procedural detail — how they move, take cover, communicate — is the source of tension.",
        },
        { type: "heading", content: "4. The Close-Up as Characterisation" },
        {
          type: "paragraph",
          content:
            "Mann's extreme close-ups of hands at work — safe-cutting, weapon-handling, the small rituals of professional life — characterise without dialogue. The way a person handles their tools tells you who they are. In your own work, look for the gestures and actions that reveal character through competence.",
        },
      ],
      reflection: {
        prompt:
          "Find the coffee shop scene in Heat (1995) — two men talking, no action, no violence. Study how Mann uses eyelines, cutting rhythm, and silence to generate tension between two men who understand each other completely. Notice what information is communicated without dialogue. Then watch the bank robbery and subsequent street gunfight from the same film: notice how the procedural accuracy — the way the men move and communicate like trained professionals — creates more genuine tension than spectacle could. What does authenticity do that choreography cannot?",
      },
    },
  ],
}

export default course
