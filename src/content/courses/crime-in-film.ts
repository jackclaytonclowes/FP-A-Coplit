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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Gangster Film as Early Hollywood Genre" },
        {
          type: "paragraph",
          content:
            "The gangster film was among the first distinctly American genres — not adapted from European literary tradition but native to American urban experience. Public Enemy (1931, William Wellman), Scarface (1932, Howard Hawks), and Little Caesar (1931, Mervyn LeRoy) established the genre's conventions: the immigrant outsider who achieves spectacular success through violence, the rise and inevitable fall, the ambivalence between moral condemnation and visceral admiration. James Cagney's Tom Powers in Public Enemy — shoving a grapefruit into Mae Clarke's face, dying in the final shot — was the model.",
        },
        { type: "heading", content: "The Production Code: Crime Must Be Punished" },
        {
          type: "paragraph",
          content:
            "The Production Code (Hays Code), formally enforced from 1934, imposed a rigid moral structure on Hollywood crime films: crime could not pay, criminals must be punished, sympathy for lawbreakers must be balanced by moral condemnation. Every crime film made between 1934 and the Code's effective collapse in the mid-1960s was required to conclude with the criminal's defeat — death, arrest, repentance. This forced narrative structure produced films of remarkable ingenuity, as filmmakers found ways to generate sympathy for characters they were also required to condemn.",
        },
        { type: "heading", content: "Film Noir: Crime as Stylistic Revolution" },
        {
          type: "paragraph",
          content:
            "Film noir — a term applied by French critics to a cycle of American films made between roughly 1941 and 1958 — was the crime film's greatest aesthetic mutation. Influenced by German Expressionist cinema (many noir directors were European émigrés) and American hard-boiled fiction (Chandler, Hammett, James M. Cain), noir defined a visual and narrative vocabulary: low-key lighting with deep shadows, night exteriors slicked with rain, protagonists trapped by circumstances or desire, femmes fatales who weaponised male weakness.",
        },
        {
          type: "paragraph",
          content:
            "Double Indemnity (1944, Wilder), The Maltese Falcon (1941, Huston), and Out of the Past (1947, Tourneur) are the canonical texts. Humphrey Bogart — in The Maltese Falcon and The Big Sleep — defined the noir detective: cynical, competent, ultimately ethical in a world where ethics required constant compromise. Film noir introduced moral ambiguity to mainstream American cinema in ways the Production Code could not entirely suppress.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The Collapse of the Code and New Hollywood" },
        {
          type: "paragraph",
          content:
            "The Production Code's effective collapse — driven by the 1968 introduction of the MPAA rating system — freed American filmmakers from mandatory moral closure. A new generation of directors, influenced by European art cinema (Godard, Fellini, Truffaut), began making crime films without the requirement that crime be punished. The resulting work was the core of New Hollywood: morally ambiguous, stylistically adventurous, often cynical about institutions — including law enforcement.",
        },
        { type: "heading", content: "The Godfather: The Legitimisation of Crime Cinema" },
        {
          type: "paragraph",
          content:
            "Francis Ford Coppola's The Godfather (1972) was the cultural event that legitimised the crime film as serious art. Adapted from Mario Puzo's bestselling novel, it received the best reviews of any crime film in history, won three Academy Awards including Best Picture, and became the highest-grossing film ever made at the time of its release. It demonstrated that crime cinema could achieve the formal and emotional seriousness of the great literary novels — and in doing so, it changed what Hollywood studios believed they could invest in.",
        },
        {
          type: "paragraph",
          content:
            "Chinatown (1974, Polanski) extended the tradition into neo-noir — a contemporary crime investigation set in 1930s Los Angeles that ends without resolution or justice. Dog Day Afternoon (1975, Lumet) based on a real bank robbery, presented crime as the desperate act of a man excluded from the American mainstream. Taxi Driver (1976, Scorsese) made the disturbed urban vigilante its protagonist.",
        },
        { type: "heading", content: "Scorsese: The Great Crime Filmmaker" },
        {
          type: "paragraph",
          content:
            "Martin Scorsese is the central figure in American crime cinema's second half-century. Mean Streets (1973) — his breakthrough film — presented crime as a Catholic moral drama: guilt, honour, violence, and damnation in Little Italy. Goodfellas (1990) is widely considered his masterpiece: a two-and-a-half-hour account of mob life that is both seductive and annihilating, formally innovative (the voice-over, the tracking shot, the freeze frames) and emotionally exhausting. Casino (1995) told the Las Vegas story. The Departed (2006) brought the intelligence-infiltration narrative to Boston organised crime. The Irishman (2019) was his valediction — three and a half hours of twilight.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Low-Key Lighting: The Noir Inheritance" },
        {
          type: "paragraph",
          content:
            "The visual signature of the crime film — and of film noir specifically — is low-key lighting: high contrast between light and shadow, deep blacks, faces half-illuminated. This is not merely aesthetic. Darkness as a visual metaphor for moral ambiguity, concealment, and the unknown is one of cinema's oldest and most reliable resources. The crime film's long association with this visual grammar reflects the genre's subject matter: the world that operates outside the lit spaces of legitimate society.",
        },
        { type: "heading", content: "Confined Spaces and Criminal Claustrophobia" },
        {
          type: "paragraph",
          content:
            "Crime films are characteristically set in confined, enclosed spaces — the basement, the car, the back booth of a restaurant. This spatial grammar mirrors the criminal world's reality: the constant proximity of violence, the impossibility of escape, the world contracted to the immediate group. The Sopranos' recurring scenes at the Bada Bing club and in Tony's car replicate the claustrophobic intimacy that is one of mob life's defining features.",
        },
        { type: "heading", content: "The Meal Scene as Ritual" },
        {
          type: "paragraph",
          content:
            "Few narrative films use food as consistently and significantly as crime films. The Godfather's Sunday dinner scenes — warm, domestic, crowded — are the counterpoint to the violence they frame; the horse's head is a meal-time intrusion. The Sopranos turns the Sunday dinner into an ongoing performance of family normality against a background of constant threat. Goodfellas has Henry Hill cooking for the family while coordinating a cocaine shipment. The meal in these films is where legitimate and criminal worlds are held in tension.",
        },
        { type: "heading", content: "The Steadicam and the Long Take" },
        {
          type: "paragraph",
          content:
            "Two technical innovations shaped New Hollywood crime cinema's visual vocabulary. The steadicam — developed in the 1970s — allowed extended following shots with the fluidity of handheld and the stability of a dolly. Scorsese's Copacabana sequence in Goodfellas — a single two-and-a-half-minute take following Henry and Karen through the back entrance of the club — uses the steadicam to replicate the seductive momentum of the life itself: everything flowing, the world opening up, the crowd parting. The extended single take in crime films — from Touch of Evil's opening to the Copacabana — creates an immersive complicity that editing would disrupt.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Essential Canon" },
        {
          type: "paragraph",
          content:
            "Any serious engagement with crime cinema requires familiarity with a core canon. The Godfather (1972, Coppola) remains the genre's defining achievement — operatic, tragic, formally immaculate. Chinatown (1974, Polanski) is the definitive neo-noir: an investigation into institutional corruption with no resolution. Goodfellas (1990, Scorsese) is the most formally inventive mob film and the most honest about the life's actual texture. Heat (1995, Michael Mann) is the supreme procedural — police and criminal as mirror images, the longest preparation for the briefest contact.",
        },
        { type: "heading", content: "The 1990s and 2000s" },
        {
          type: "paragraph",
          content:
            "Fargo (1996, Coen Brothers) introduced regional American crime — the midwest, the snow, the banal brutality of small-scale criminals — with dark comedy that revealed something the urban crime film missed: most crime is stupid, mundane, and poorly planned. L.A. Confidential (1997, Curtis Hanson) restored the noir tradition with period precision. The Departed (2006, Scorsese) — his remake of Infernal Affairs — won the Academy Award for Best Picture and is the definitive Hollywood treatment of the double-infiltration narrative. No Country for Old Men (2007, Coen Brothers) presents crime as entropy — the Chigurh figure as impersonal force rather than villain.",
        },
        { type: "heading", content: "Gomorrah and the Anti-Glamour" },
        {
          type: "paragraph",
          content:
            "Matteo Garrone's Gomorrah (2008), based on Roberto Saviano's book, is the most rigorous anti-glamour crime film in the international canon. Shot in and around the Camorra estates of Naples with a predominantly non-professional cast, it presents five interlocking stories of people caught in the Camorra's orbit — none of them powerful, all of them damaged. There are no suits, no respect, no code. There is only the mechanism: the estate, the contract, the body.",
        },
        { type: "heading", content: "Sicario: The Institution as Criminal" },
        {
          type: "paragraph",
          content:
            "Denis Villeneuve's Sicario (2015) occupies a distinctive position in contemporary crime cinema: a film in which the criminal organisation and the state apparatus fighting it become morally indistinguishable. Emily Blunt's FBI agent is the point-of-view character precisely because she cannot understand what she is part of — she is used as legal cover for operations that violate everything her training tells her is permissible. The film argues that the war on drugs requires methods that transform its practitioners into what they are fighting.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "City of God: The Inside Account" },
        {
          type: "paragraph",
          content:
            "Fernando Meirelles and Kátia Lund's City of God (2002) — based on Paulo Lins' novel about the Cidade de Deus housing project in Rio de Janeiro — is perhaps the most formally revolutionary crime film of the 21st century. Shot with handheld cameras, a kinetic editing style influenced by music video, and a predominantly Black cast including non-professional actors from the favelas, it presents the drug economy from inside: from the perspective of those for whom it is the only visible economic structure, the only path to the status that the wider society denies them.",
        },
        { type: "heading", content: "A Prophet and the European Prison Epic" },
        {
          type: "paragraph",
          content:
            "Jacques Audiard's A Prophet (2009) — the story of Malik, an Arab-French man who enters prison uneducated and illiterate and navigates his way through the Corsican and Arab criminal worlds within it — is the European crime film of its generation. Its subject is education in the most extreme sense: learning how to survive, learning how to read, learning how to accumulate power in a closed system. The prison is a microcosm of French society's stratifications of race, class, and criminality.",
        },
        { type: "heading", content: "British Crime Cinema: Get Carter to Sexy Beast" },
        {
          type: "paragraph",
          content:
            "British crime cinema has its own tradition, distinct from Hollywood's. Get Carter (1971, Mike Hodges) — Michael Caine as a London gangster returning to Newcastle — is the foundational text: bleaker than anything Hollywood produced at the same time, with a moral void at its centre. The Long Good Friday (1980, John Mackenzie) presents the British criminal class attempting to legitimise itself through property development at the exact moment the IRA disrupts its plans. Jonathan Glazer's Sexy Beast (2000) inverts the genre — a retired gangster who just wants to be left alone, pursued by a figure (Ben Kingsley) who is terrifying not through physical menace but through the relentlessness of his will.",
        },
        { type: "heading", content: "Memories of Murder and Korean Crime Cinema" },
        {
          type: "paragraph",
          content:
            "Bong Joon-ho's Memories of Murder (2003) — based on South Korea's first serial murder case — uses the crime investigation as a vehicle for examining the inadequacy of state institutions: underfunded, under-trained police in a country still emerging from military dictatorship. The film ends without resolution, the murderer unidentified — an ending that would be unthinkable in Hollywood crime cinema, where the mystery must be solved. Parasite (2019) reconfigured crime as class analysis: the Kim family's infiltration of the Park household as a heist film about the extremities of South Korean inequality.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Crime Films Are Always About Legitimate Society" },
        {
          type: "paragraph",
          content:
            "The crime film's paradox is that it is never simply about crime. It is about the society that produces crime — what it excludes, what it rewards, what desires it generates that it cannot satisfy through legitimate means. Every great crime film is, at a deeper level, a film about the society its criminals inhabit. The criminal is a figure who reveals what the legitimate world conceals: the violence underlying property relationships, the arbitrariness of the line between legitimate and illegitimate business, the structural exclusions that make crime rational.",
        },
        { type: "heading", content: "The Godfather as Immigrant Epic" },
        {
          type: "paragraph",
          content:
            "The Godfather is, at its deepest level, a film about the American immigrant experience and its ambivalent relationship to American capitalism. The Corleones are a family that built what they have through methods the legitimate economy would not permit them to use — because the legitimate economy would not have them. Michael Corleone's tragedy is the second generation's tragedy: born into opportunity, educated at Ivy League institutions, a war hero — and yet returned to the family business because the legitimate world offered him no equivalent power. The film's elegiac quality comes from this: Coppola mourns something that was never, in fact, admirable.",
        },
        { type: "heading", content: "Goodfellas as Status Story" },
        {
          type: "paragraph",
          content:
            "Goodfellas is a film about what it feels like to have status when you are otherwise without it. Henry Hill is a nobody — half-Irish, half-Italian, ineligible for full membership in either the mob or the American mainstream. The mob gives him what the legitimate world cannot: money, respect, the feeling of consequence. The film takes this seriously, does not condescend to it. Then it shows what that status costs. The story is not about the immorality of crime but about the economics and psychology of status — which makes it as much about legitimate society as about criminal life.",
        },
        { type: "heading", content: "City of God as Structural Poverty" },
        {
          type: "paragraph",
          content:
            "City of God refuses the psychological explanation for crime — the bad character, the damaged childhood, the individual moral failure. Its drug economy is structural: it exists because no other economy is accessible to the people of the Cidade de Deus. The film's narrator, Rocket, wants to be a photographer — a legitimate, aspirational career. The film's interest is in how that aspiration survives in conditions designed to extinguish it, and what it costs. Crime in City of God is not a choice in any meaningful sense; it is the visible economy of structural exclusion.",
        },
        { type: "heading", content: "The Mirror at an Angle" },
        {
          type: "paragraph",
          content:
            "The crime film is a mirror held at an angle — it reflects legitimate society, but at a tilt that reveals what a straight reflection would conceal. The violence that underlies property relationships. The arbitrary distinction between the corporate raider and the racketeer. The status hierarchies that drive both Wall Street and the mob. The exclusions that make criminal markets the most accessible economic opportunity for large portions of every society. These are not radical insights in themselves; the crime film is the genre that makes them visible.",
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
