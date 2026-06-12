import type { Course } from "@/types"

const course: Course = {
  id: "crime-in-film",
  title: "Crime in Film & Culture",
  slug: "crime-in-film",
  description:
    "How crime has been represented in cinema — from the Production Code to the New Hollywood crime film to The Sopranos. The Godfather, Goodfellas, Gomorrah, City of God, and Heat.",
  category: "crime",
  accentColor: "#c83020",
  estimatedHours: 3,
  tags: ["crime-film", "cinema", "godfather", "goodfellas", "cultural"],
  lessons: [
    {
      id: "cf-01-origins",
      title: "The Crime Film: Origins",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Gangster Film Was Born American" },
        {
          type: "paragraph",
          content:
            "Not adapted from European literary tradition — native to American urban experience. Public Enemy, Scarface, Little Caesar (all 1931-32) set the template: immigrant outsider, spectacular rise through violence, inevitable fall, and an audience that couldn't quite decide whether to cheer or condemn.",
        },
        { type: "heading", content: "The Production Code: Crime Must Not Pay" },
        {
          type: "paragraph",
          content:
            "The Hays Code (enforced 1934) required criminals to be punished and crime not to pay. Every crime film for three decades had to conclude with the criminal's defeat. This forced constraint produced remarkable ingenuity — filmmakers found ways to generate real sympathy for characters they were also required to condemn.",
        },
        { type: "heading", content: "Film Noir: The Great Mutation" },
        {
          type: "paragraph",
          content:
            "French critics named a cycle of American films from roughly 1941-1958 that changed the crime film forever. Low-key lighting, rain-slicked streets, protagonists trapped by desire, women who weaponised male weakness — influenced by German Expressionism and American hard-boiled fiction.",
        },
        {
          type: "paragraph",
          content:
            "Double Indemnity, The Maltese Falcon, Out of the Past — the canonical texts. Humphrey Bogart defined the noir detective: cynical, competent, ultimately ethical in a world that rewarded neither. Film noir slipped moral ambiguity past the Code.",
        },
      ],
      quiz: {
        question: "What did the Production Code (Hays Code) require of crime films, and how did this shape the genre?",
        options: [
          {
            id: "a",
            text: "It required crime films to portray law enforcement sympathetically and show police procedures accurately",
            isCorrect: false,
          },
          {
            id: "b",
            text: "It required criminals to be punished and crime not to pay, forcing filmmakers to generate sympathy while also condemning the characters they created",
            isCorrect: true,
          },
          {
            id: "c",
            text: "It prohibited the depiction of violence entirely, forcing crime films to show only its consequences",
            isCorrect: false,
          },
          {
            id: "d",
            text: "It required all crime films to be based on documented historical events to prevent glorification of fictional criminals",
            isCorrect: false,
          },
        ],
        explanation:
          "The Production Code's moral requirement — crime must not pay, criminals must be punished — created a structural tension at the heart of the crime film: generate enough sympathy and excitement to draw audiences, while ensuring moral condemnation at the close. The best Hollywood crime films of the 1930s-1950s worked brilliantly within this tension, finding ways to make audiences root for characters they knew were doomed. The Code's collapse in the 1960s freed filmmakers from the mandatory punishment but also removed the productive constraint that had generated much of the genre's ingenuity.",
      },
    },
    {
      id: "cf-02-hollywood",
      title: "The New Hollywood Crime Film",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Code Collapsed — and Hollywood Got Dark" },
        {
          type: "paragraph",
          content:
            "The 1968 MPAA rating system killed the Hays Code. A new generation of directors, influenced by Godard and Truffaut, made crime films without mandatory moral closure — morally ambiguous, stylistically adventurous, cynical about institutions, especially law enforcement.",
        },
        { type: "heading", content: "The Godfather Changed What Hollywood Believed It Could Do" },
        {
          type: "paragraph",
          content:
            "Coppola's 1972 masterpiece got the best reviews of any crime film in history, won Best Picture, and became the highest-grossing film ever made. It proved crime cinema could achieve the seriousness of literary art — and unlocked the investment that made New Hollywood possible.",
        },
        {
          type: "paragraph",
          content:
            "Chinatown (1974) ended without justice. Dog Day Afternoon (1975) made crime a desperate act of exclusion. Taxi Driver (1976) made the vigilante the protagonist. The Code was dead — and the genre exploded.",
        },
        { type: "heading", content: "Scorsese: The Crime Film's Greatest Champion" },
        {
          type: "paragraph",
          content:
            "Mean Streets through The Irishman — Scorsese treated crime as Catholic moral drama, formal experiment, and social analysis simultaneously. Goodfellas remains the benchmark: seductive, annihilating, formally innovative, emotionally exhausting.",
        },
      ],
      quiz: {
        question: "Why was The Godfather's success in 1972 significant beyond its box office performance?",
        options: [
          {
            id: "a",
            text: "It was the first crime film to receive an X-rating, demonstrating that adult content could be commercially viable",
            isCorrect: false,
          },
          {
            id: "b",
            text: "It demonstrated that crime cinema could achieve the formal seriousness of literary art, changing what Hollywood would invest in",
            isCorrect: true,
          },
          {
            id: "c",
            text: "It established the template for sequels and franchises that defines the modern studio system",
            isCorrect: false,
          },
          {
            id: "d",
            text: "It was the first studio film to be made with complete creative control given to its director",
            isCorrect: false,
          },
        ],
        explanation:
          "The Godfather's critical reception — not just its commercial success — was what changed Hollywood. Here was a crime film praised by serious critics as a major artistic achievement on the level of the literary novel, winning the industry's highest awards. It proved that crime was not a disreputable genre requiring apology but a subject capable of sustaining work of the highest ambition. This legitimisation unlocked the investment and critical seriousness that made the subsequent decade of New Hollywood crime cinema possible.",
      },
    },
    {
      id: "cf-03-visual",
      title: "Visual Language of the Crime Film",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Darkness Is a Moral Statement" },
        {
          type: "paragraph",
          content:
            "Low-key lighting — high contrast, deep blacks, faces half-illuminated — isn't just aesthetic. Darkness maps moral ambiguity, concealment, and the unknown. The crime film's long association with shadow reflects its subject: the world operating outside legitimate society's lit spaces.",
        },
        { type: "heading", content: "Confined Spaces Mirror Criminal Life" },
        {
          type: "paragraph",
          content:
            "Basements, car back seats, restaurant booths — crime films are characteristically claustrophobic. The spatial grammar mirrors the reality: constant proximity to violence, no exit, the world contracted to the immediate group.",
        },
        { type: "heading", content: "The Meal: Where Two Worlds Collide" },
        {
          type: "paragraph",
          content:
            "No genre uses food as consistently as crime cinema. The Godfather's Sunday dinners counterpoint the violence they frame. Goodfellas has Henry Hill cooking for his family while coordinating a cocaine shipment. The meal is where legitimate and criminal worlds are held in tension.",
        },
        { type: "heading", content: "The Long Take as Seduction" },
        {
          type: "paragraph",
          content:
            "The steadicam enabled extended following shots — and Scorsese's Copacabana sequence in Goodfellas used it brilliantly. A single two-and-a-half-minute take following Henry and Karen through the club replicates the momentum of the life itself: everything flowing, the world opening up, no obvious moment to stop.",
        },
      ],
      quiz: {
        question: "What does the Copacabana tracking shot in Goodfellas achieve that editing the same sequence could not?",
        options: [
          {
            id: "a",
            text: "It shows the geography of the club in a way that establishes the action sequences that follow",
            isCorrect: false,
          },
          {
            id: "b",
            text: "It creates immersive complicity in the seduction of mob life — the viewer cannot cut away from the momentum any more than Karen can",
            isCorrect: true,
          },
          {
            id: "c",
            text: "It demonstrates Scorsese's technical mastery in a way that establishes his authority over the rest of the film",
            isCorrect: false,
          },
          {
            id: "d",
            text: "It compresses narrative time efficiently, showing Henry's status in a single sequence without expository dialogue",
            isCorrect: false,
          },
        ],
        explanation:
          "The Copacabana sequence is designed to make the viewer complicit in the seduction it depicts. As Karen — and the audience — are swept through the kitchen, past smiling staff, through the packed club to a front-row table, the continuous take prevents the emotional distance that a cut would provide. We cannot step back; we are inside the momentum. This formal choice reproduces the experience of being drawn into the life: it feels effortless, it feels like privilege, and there is no obvious moment to stop.",
      },
    },
    {
      id: "cf-04-films",
      title: "Essential Films",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Canon: Four Films You Need" },
        {
          type: "paragraph",
          content:
            "The Godfather (1972): operatic, tragic, formally immaculate — the genre's defining achievement. Chinatown (1974): the definitive neo-noir, ending without justice. Goodfellas (1990): most formally inventive mob film, most honest about the actual texture of the life. Heat (1995): the supreme procedural — police and criminal as perfect mirrors.",
        },
        { type: "heading", content: "The 1990s and 2000s Raised the Bar" },
        {
          type: "paragraph",
          content:
            "Fargo revealed that most crime is stupid and poorly planned — a corrective to mob-film sophistication. L.A. Confidential restored period noir. The Departed won Best Picture. No Country for Old Men presented crime as entropy — Chigurh as impersonal force, not villain.",
        },
        { type: "heading", content: "Gomorrah: No Suits, No Respect, No Code" },
        {
          type: "paragraph",
          content:
            "Garrone's Gomorrah (2008) — shot on Camorra estates with non-professional actors — presents five interlocking stories of people caught in the organisation's orbit. None of them are powerful. All of them are damaged. It is the most rigorous anti-glamour crime film ever made.",
        },
        { type: "heading", content: "Sicario: The State Becomes the Criminal" },
        {
          type: "paragraph",
          content:
            "Villeneuve's Sicario (2015) makes its FBI agent protagonist a point-of-view character precisely because she cannot understand what she's been recruited into. The film's argument: the war on drugs requires methods that transform its practitioners into what they're fighting.",
        },
      ],
      quiz: {
        question: "What does Fargo contribute to crime cinema that the predominantly urban American tradition had largely missed?",
        options: [
          {
            id: "a",
            text: "A feminist perspective on crime, centring a female law enforcement protagonist for the first time",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The observation that most crime is stupid, mundane, and poorly planned — not the organised sophistication of the urban mob film",
            isCorrect: true,
          },
          {
            id: "c",
            text: "The use of real locations and non-professional actors to achieve documentary realism in crime depiction",
            isCorrect: false,
          },
          {
            id: "d",
            text: "An account of rural poverty as the root cause of criminal behaviour in non-urban America",
            isCorrect: false,
          },
        ],
        explanation:
          "Fargo's crime — a husband who hires two criminals to kidnap his own wife for the insurance money — goes catastrophically wrong from the start because the criminals are incompetent and the planning is delusional. The Coen Brothers use this against the genre's tendency to glamorise criminal competence: most actual crime is banal, improvised, and self-defeating. The contrast with Goodfellas' slick organisation or Heat's meticulous preparation is deliberate — and the Cargo criminals are no less threatening for their stupidity, which is itself a different kind of horror.",
      },
    },
    {
      id: "cf-05-global",
      title: "Crime Cinema Beyond Hollywood",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "City of God: Crime From the Inside" },
        {
          type: "paragraph",
          content:
            "Meirelles and Lund's City of God (2002) — shot handheld in Rio's Cidade de Deus with non-professional actors from the favelas — presents the drug economy from the perspective of those for whom it is the only visible economic structure. Formally revolutionary; internationally influential.",
        },
        { type: "heading", content: "A Prophet: The Prison as France" },
        {
          type: "paragraph",
          content:
            "Audiard's A Prophet (2009) follows Malik — Arab-French, illiterate, nobody — as he learns to read, survive, and accumulate power inside a French prison. The prison is a microcosm of French society's stratifications of race, class, and criminality. The European crime film of its generation.",
        },
        { type: "heading", content: "British Crime: Bleak, Morally Void, Excellent" },
        {
          type: "paragraph",
          content:
            "Get Carter (1971) established the British tradition — bleaker than anything Hollywood produced, a moral void at its centre. The Long Good Friday presented the criminal class attempting legitimacy at the exact moment the IRA disrupted it. Sexy Beast inverted the genre: a retired gangster who just wants to be left alone.",
        },
        { type: "heading", content: "Korea: Crime Without Resolution" },
        {
          type: "paragraph",
          content:
            "Bong Joon-ho's Memories of Murder ends without identifying the killer — unthinkable in Hollywood. Parasite reconfigured crime as class analysis: infiltration as heist, inequality as the true subject. Korean cinema found angles Hollywood couldn't.",
        },
      ],
      quiz: {
        question: "What formal innovations in City of God made it so influential on crime cinema internationally?",
        options: [
          {
            id: "a",
            text: "Its use of a single extended take, without editing, to follow its protagonist through a criminal operation",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Its handheld kinetic energy, non-professional cast, and inside perspective on a criminal economy from within the community it served",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Its use of surveillance camera footage and documentary material alongside fictional reconstruction",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Its unprecedented length — running over four hours — which allowed criminal organisation to be shown in complete operational detail",
            isCorrect: false,
          },
        ],
        explanation:
          "City of God's formal revolution was the combination of handheld immediacy, music-video editing rhythms, and an insider perspective — both socially (the community depicted) and narratively (the protagonist is a photographer who documents what he sees). The non-professional cast, many of them from the actual Cidade de Deus, brought an authenticity that professional actors could not have produced. The film's influence can be traced in the crime cinema of virtually every country that followed it: the inside perspective, the non-professional cast, the kinetic visual language.",
      },
    },
    {
      id: "cf-06-reveals",
      title: "What Crime Films Tell Us",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Crime Films Are Never Just About Crime" },
        {
          type: "paragraph",
          content:
            "Every great crime film is, at a deeper level, about the society its criminals inhabit. The criminal reveals what legitimate life conceals: the violence underlying property, the arbitrary line between the corporate raider and the racketeer, the exclusions that make crime rational.",
        },
        { type: "heading", content: "The Godfather Is an Immigrant Epic" },
        {
          type: "paragraph",
          content:
            "The Corleones built what they have through methods the legitimate economy wouldn't permit them — because it wouldn't have them. Michael's tragedy is the second generation's tragedy: all the right credentials, still pulled back into the family business. Coppola mourns something that was never admirable.",
        },
        { type: "heading", content: "Goodfellas Is a Status Story" },
        {
          type: "paragraph",
          content:
            "Henry Hill was a nobody — the mob gave him money, respect, and consequence that the legitimate world withheld. Goodfellas takes this seriously, doesn't condescend to it. Then it shows exactly what that status costs. It's as much about legitimate society as about crime.",
        },
        { type: "heading", content: "City of God Is Structural Poverty on Screen" },
        {
          type: "paragraph",
          content:
            "The film refuses the psychological explanation for crime. The drug economy of the Cidade de Deus exists because no other economy is accessible to its residents. Crime isn't a choice in any meaningful sense — it's the visible economy of structural exclusion.",
        },
        { type: "heading", content: "The Mirror at an Angle" },
        {
          type: "paragraph",
          content:
            "The crime film reflects legitimate society at a tilt that reveals what a straight reflection would hide: the violence underlying property, the blurred line between the Wall Street trader and the racketeer, the status hierarchies that drive both. These aren't radical insights. The crime film just makes them visible.",
        },
      ],
      reflection: {
        prompt:
          "The crime film is described here as a mirror held at an angle — reflecting legitimate society at a tilt that reveals what a straight reflection conceals. Think of a crime film you have seen. What did it reveal about the legitimate society its characters inhabit — its exclusions, its contradictions, its desires? And was that revelation something the film was conscious of, or something that emerged despite itself?",
      },
    },
  ],
}

export default course
