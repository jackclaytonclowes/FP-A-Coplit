import type { Course } from "@/types"

const course: Course = {
  id: "organised-crime-global",
  title: "Global Organised Crime",
  slug: "organised-crime-global",
  description:
    "A comparative study of global organised crime — the Yakuza, Triads, Russian organised crime, and the Camorra and 'Ndrangheta — how different criminal organisations reflect the societies that produce them.",
  category: "crime",
  accentColor: "#1a1a2a",
  estimatedHours: 3,
  tags: ["organised-crime", "yakuza", "triads", "global", "comparative"],
  lessons: [
    {
      id: "gc-01-origins",
      title: "Origins & Structure",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Crime Doesn't Emerge Randomly" },
        {
          type: "paragraph",
          content:
            "Organised crime appears where specific conditions converge: weak or corrupt states, rapid economic transition, social disruption, and populations locked out of legitimate opportunity. These aren't cultural quirks — they're structural conditions with structural responses.",
        },
        { type: "heading", content: "The Yakuza Had Business Cards" },
        {
          type: "paragraph",
          content:
            "Post-war Japan's Yakuza operated semi-openly — office signs, business cards, even disaster relief. They recruited from Japan's marginalised minorities and filled the order vacuum the shattered state left behind. Until the 1990s crackdowns, this was almost normal.",
        },
        { type: "heading", content: "Triads Started as a Political Project" },
        {
          type: "paragraph",
          content:
            "17th-century China's secret societies aimed to restore the Ming dynasty — not run drugs. When the political project failed, the oath-based structures turned criminal. Hong Kong gave them a base outside mainland jurisdiction; diaspora networks did the rest.",
        },
        { type: "heading", content: "Russia: When the State Dissolved Overnight" },
        {
          type: "paragraph",
          content:
            "The Soviet collapse in 1991 handed criminal networks an entire economy to carve up. Ex-KGB officers and prison gang leaders converged on the same opportunity simultaneously. What emerged wasn't organised crime inside a state — it was organised crime as the state.",
        },
      ],
      quiz: {
        question: "What distinguished the Yakuza from most other criminal organisations in terms of their public visibility?",
        options: [
          {
            id: "a",
            text: "They operated public-facing criminal businesses licensed by local governments",
            isCorrect: false,
          },
          {
            id: "b",
            text: "They had offices with signs and members carried business cards, operating semi-openly until 1990s crackdowns",
            isCorrect: true,
          },
          {
            id: "c",
            text: "They were listed on the Tokyo Stock Exchange through legitimate corporate subsidiaries",
            isCorrect: false,
          },
          {
            id: "d",
            text: "They published annual membership directories distributed to government agencies",
            isCorrect: false,
          },
        ],
        explanation:
          "For much of the post-war period, the Yakuza operated with a degree of openness entirely unlike Western criminal organisations. Offices had nameplates; members carried business cards identifying their gang affiliation; bosses gave media interviews. This semi-legitimate status reflected their historical role as providers of order and their integration into legitimate Japanese business and politics. The 1992 Boryokudan Countermeasures Law began the process of forcing them underground.",
      },
    },
    {
      id: "gc-02-figures",
      title: "Key Figures",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Taoka Built the Yakuza Nation" },
        {
          type: "paragraph",
          content:
            "Kazuo Taoka turned a regional gang into Japan's largest criminal organisation — the Yamaguchi-gumi — with tens of thousands of members and hundreds of affiliates. He combined extreme early violence with sophisticated political management in his later years.",
        },
        { type: "heading", content: "The Vor v Zakone: Thieves by Code" },
        {
          type: "paragraph",
          content:
            "Russia's 'thieves in law' lived by a code that forbade any cooperation with the state — no jobs, no military service, no talking to police. Post-Soviet Russia scrambled everything; by the Putin era, many vor had become indistinguishable from state intelligence assets.",
        },
        { type: "heading", content: "Mogilevich: Crime Meets Espionage" },
        {
          type: "paragraph",
          content:
            "Semion Mogilevich made the FBI's Ten Most Wanted list for arms trafficking, nuclear smuggling, and financial fraud across multiple continents. Briefly arrested in Moscow in 2008, released within months. He remains at large.",
        },
        { type: "heading", content: "The 'Ndrangheta: Blood Ties, Global Reach" },
        {
          type: "paragraph",
          content:
            "The 'Ndrangheta runs on blood-family clans — you can't betray the organisation without betraying your own relatives. That structural resistance to informers explains everything about its rise while Cosa Nostra fell.",
        },
      ],
      quiz: {
        question: "Why is the 'Ndrangheta's blood-family clan structure considered its greatest organisational strength?",
        options: [
          {
            id: "a",
            text: "Because family members share legal immunity that non-family associates do not receive",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Because betraying the organisation means betraying your own kin, making informers extremely rare",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Because Italian law prevents the use of testimony from family members against each other",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Because family structures allow wealth to be passed across generations without probate",
            isCorrect: false,
          },
        ],
        explanation:
          "The 'Ndrangheta's reliance on blood-family clans as its basic unit means that potential informers face a cost that members of other criminal organisations do not: betraying the organisation means betraying your own relatives, who will suffer the consequences. This has made the 'Ndrangheta dramatically more resistant to the informant prosecutions that devastated Cosa Nostra in the 1980s and 1990s, contributing to its rise as the most powerful Italian criminal organisation today.",
      },
    },
    {
      id: "gc-03-methods",
      title: "Methods & Operations",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Yakuza: Crime with a Corporate Veneer" },
        {
          type: "paragraph",
          content:
            "The Yakuza's historical model blended legitimate business — construction, real estate, entertainment — with criminal income. Their post-earthquake disaster relief was genuine community service and brilliant PR. The 1992 law forced everything underground.",
        },
        { type: "heading", content: "Triads: Secrecy as the Product" },
        {
          type: "paragraph",
          content:
            "Elaborate oath rituals and information compartmentalisation are the Triads' security model. Their diaspora presence in Chinese communities worldwide gives them a global distribution network for drugs, counterfeits, and people.",
        },
        { type: "heading", content: "Russia: Crime Is the State" },
        {
          type: "paragraph",
          content:
            "In Putin-era Russia, the line between intelligence services and criminal networks isn't blurred — it's gone. Criminal organisations pursue state foreign policy; the state provides criminal impunity. They serve each other.",
        },
        { type: "heading", content: "The Camorra's Toxic Legacy" },
        {
          type: "paragraph",
          content:
            "The Camorra controlled Naples' waste contracts and made southern Italy the dumping ground for industrial toxic waste from across the country. The 'Triangle of Death' — with its dramatically elevated cancer rates — is still there. The waste isn't going anywhere.",
        },
      ],
      quiz: {
        question: "What makes Russian organised crime's operational model distinct from most other criminal organisations historically?",
        options: [
          {
            id: "a",
            text: "Its use of sophisticated cyber tools pioneered criminal operations online from the 1990s",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Its deep integration with state intelligence, making the boundary between crime and state action largely notional",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Its exclusively financial focus, avoiding violent crime to maintain political protection",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Its multinational corporate structure with subsidiaries registered in legitimate jurisdictions",
            isCorrect: false,
          },
        ],
        explanation:
          "The convergence of Russian organised crime with state intelligence — sharing personnel, interests, and mutual protection — produced a hybrid that has no real parallel in the history of other criminal organisations. The Sicilian Mafia corrupted individual politicians; the American Mafia infiltrated specific industries. Russia produced something different: a fusion in which criminal networks and intelligence services became functionally inseparable, with criminal operations sometimes serving state foreign policy objectives.",
      },
    },
    {
      id: "gc-04-culture",
      title: "Cultural Representation",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Yakuza Cinema: Anti-Romantic and Chaotic" },
        {
          type: "paragraph",
          content:
            "Fukasaku's Battles Without Honour and Humanity (1973) is the definitive Yakuza film — deliberately unglamorous and chaotic. Takeshi Kitano's films add melancholy: his bosses stare into the futility of it all. Tarantino took notes.",
        },
        { type: "heading", content: "Hong Kong: Brotherhood and Betrayal in Slow Motion" },
        {
          type: "paragraph",
          content:
            "John Woo's heroic bloodshed films turned Triad loyalty and violence into operatic aesthetic spectacle. Infernal Affairs (2002) — remade by Scorsese as The Departed — is the definitive double-infiltration story.",
        },
        { type: "heading", content: "Eastern Promises: The Vor Up Close" },
        {
          type: "paragraph",
          content:
            "Cronenberg's Eastern Promises presents the Russian vor not as cartoon villain but as a man embedded in a criminal code with its own internal logic. The tattoos, the rituals, the hierarchy — unusually accurate.",
        },
        { type: "heading", content: "Gomorrah: No Honour, No Glamour" },
        {
          type: "paragraph",
          content:
            "Saviano's Gomorrah — book, film, TV series — is the most rigorously un-romanticised account of criminal life in contemporary culture. Young men dying for nothing, the organisation eating its own. Saviano still lives under police protection.",
        },
      ],
      quiz: {
        question: "What does Infernal Affairs (2002) — and Scorsese's remake The Departed — explore that distinguishes it from most crime films?",
        options: [
          {
            id: "a",
            text: "The financial structures and money-laundering operations of Triad organisations",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The psychological cost of deep undercover infiltration — when the infiltrator loses track of which side he is actually on",
            isCorrect: true,
          },
          {
            id: "c",
            text: "The political relationships between Hong Kong Triads and mainland Chinese authorities",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The generational transition from traditional criminal codes to modern corporate organised crime",
            isCorrect: false,
          },
        ],
        explanation:
          "Infernal Affairs is organised around a double-infiltration premise — a police officer inside the Triads, and a Triad mole inside the police — that forces the question of identity under sustained deception. Both men have spent years pretending to be something they are not; both have developed genuine commitments on 'the other side.' The film's power comes from this ambiguity: after years of living a cover, what are you actually? It is this psychological dimension that made Scorsese want to remake it.",
      },
    },
    {
      id: "gc-05-legacy",
      title: "Legacy & Modern Impact",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The 'Ndrangheta Won" },
        {
          type: "paragraph",
          content:
            "By most measures, the 'Ndrangheta is now the most powerful criminal organisation on earth — 3% of Italy's GDP, dominant in European cocaine, operations in 40+ countries. It won because you can't turn your family into an informant.",
        },
        { type: "heading", content: "The Yakuza Got Smaller and Quieter" },
        {
          type: "paragraph",
          content:
            "From a peak of 180,000 members in the 1960s to under 30,000 today — the Yakuza shrank under sustained legal pressure. Whether that means genuine decline or just better camouflage is genuinely debated.",
        },
        { type: "heading", content: "Russia: A Mafia State" },
        {
          type: "paragraph",
          content:
            "The Putin era completed the criminal-state fusion into what analysts call a 'mafia state' — criminal networks as instruments of state power, not parasites on it. Assassinations abroad, election interference, financial crime as foreign policy.",
        },
        { type: "heading", content: "Crime Goes Fully Global" },
        {
          type: "paragraph",
          content:
            "The 'Ndrangheta's cocaine supply chain — Colombia to West Africa to Europe — is more sophisticated than many legitimate pharmaceutical distribution networks. Globalisation didn't just help legitimate business. It supercharged criminal logistics too.",
        },
      ],
      quiz: {
        question: "What factor most explains the 'Ndrangheta's rise to become the most powerful criminal organisation in the world?",
        options: [
          {
            id: "a",
            text: "Its early adoption of cryptocurrency for money laundering ahead of other criminal organisations",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Its blood-family clan structure, which resisted the informant prosecutions that dismantled rival organisations",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Its political protection from successive Italian governments throughout the Cold War period",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Its exclusive focus on drug trafficking while competitors diversified into riskier criminal activities",
            isCorrect: false,
          },
        ],
        explanation:
          "The 'Ndrangheta's clan structure — organised around blood families rather than the territorial cosche of Cosa Nostra — proved its decisive advantage when Italian prosecutors used informants (pentiti) to dismantle Cosa Nostra in the 1980s and 1990s. 'Ndrangheta members who might consider cooperation faced the prospect of betraying their own relatives, who would suffer the consequences. This structural resistance to infiltration allowed the 'Ndrangheta to grow while Cosa Nostra contracted.",
      },
    },
    {
      id: "gc-06-reveals",
      title: "What This Reveals About Society",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Crime Mirrors Legitimate Business" },
        {
          type: "paragraph",
          content:
            "The American Mafia adopted the corporate board as American capitalism did. The Yakuza integrated into Japanese post-war growth sectors. The 'Ndrangheta built global supply chains as globalisation made them possible. Criminal organisations are always students of legitimate business.",
        },
        { type: "heading", content: "Drugs: History's Most Efficient Black Market" },
        {
          type: "paragraph",
          content:
            "The global cocaine supply chain — produced in Colombia, transited through West Africa, consumed in Europe — solves logistics, finance, and risk management challenges that defeat legitimate businesses. The drugs trade is remarkable, stripped of its moral dimension.",
        },
        { type: "heading", content: "Every Organisation Is a Distorted Reflection" },
        {
          type: "paragraph",
          content:
            "The Triads reflect overseas Chinese diaspora experience. The Yakuza reflect Japan's social exclusions. Russian organised crime reflects Soviet collapse. You cannot understand any of these organisations without understanding the society they emerged from.",
        },
        { type: "heading", content: "State Failure Is the Common Variable" },
        {
          type: "paragraph",
          content:
            "Across every case — Japan, China, Russia, Italy — organised crime fills voids states leave open: prohibited markets, excluded communities, unprotected regions. The implication is uncomfortable: to reduce organised crime, strengthen the state and make it work equitably.",
        },
      ],
      reflection: {
        prompt:
          "Every criminal organisation examined in this course is, in some sense, a distorted mirror of the legitimate economy of its society. The 'Ndrangheta mirrors global supply chains; the American Mafia mirrored American corporate capitalism; the Yakuza mirrored Japanese post-war managed capitalism. What does this tell us about the relationship between legitimate and illegitimate economies? Are they fundamentally separate, or aspects of the same thing?",
      },
    },
  ],
}

export default course
