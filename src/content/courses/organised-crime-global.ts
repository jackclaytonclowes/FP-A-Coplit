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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Why Organised Crime Emerges Where It Does" },
        {
          type: "paragraph",
          content:
            "Organised crime does not emerge randomly. It appears where specific conditions converge: state weakness or corruption, rapid economic transition that outpaces legal frameworks, social disruption that severs traditional community bonds, and the presence of populations excluded from legitimate economic opportunity. These conditions are not unique to any culture — they are structural, and criminal organisations are structural responses.",
        },
        { type: "heading", content: "The Yakuza: Post-War Japan" },
        {
          type: "paragraph",
          content:
            "Japan's Yakuza emerged from the chaos of post-World War II social disruption. Two traditional source groups — tekiya (market peddlers) and bakuto (gamblers) — provided the organisational nuclei. Crucially, the Yakuza drew heavily from Japan's marginalised minorities: Korean-Japanese and Burakumin (a hereditary outcast class), populations excluded from mainstream Japanese employment. In the post-war years the Yakuza operated semi-openly, providing order in markets and construction that the shattered Japanese state could not. Until the 1990s crackdowns, many Yakuza offices had signs outside and members carried business cards.",
        },
        { type: "heading", content: "The Triads: Chinese Secret Societies" },
        {
          type: "paragraph",
          content:
            "The Triads began not as criminal organisations but as political ones — secret societies formed in 17th and 18th-century China with the stated aim of restoring the Ming dynasty against Qing rule. The oath-based secrecy, elaborate initiation rituals, and cell structures that characterise the Triads today derive from these political origins. As the political project failed, the organisations turned toward crime. Hong Kong became their operational base under British rule, providing a political space outside mainland Chinese jurisdiction, and diaspora networks carried Triad structures to Chinese communities worldwide.",
        },
        { type: "heading", content: "Russian Organised Crime: The Soviet Collapse" },
        {
          type: "paragraph",
          content:
            "The Soviet Union's collapse in 1991 produced perhaps the most extreme example of organised crime emerging from state failure. The state that had controlled the entire economy dissolved in months. State assets — factories, resources, real estate — were privatised in a chaotic process that insiders could manipulate. The 'siloviki' — former KGB and military intelligence officers — and criminal networks formed in Soviet prisons converged on this opportunity simultaneously. What emerged was a fusion of state, organised crime, and oligarchic capital that in Russia became essentially inseparable.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Kazuo Taoka: The Yakuza's Godfather" },
        {
          type: "paragraph",
          content:
            "Kazuo Taoka, who led the Yamaguchi-gumi — Japan's largest Yakuza organisation — from 1946 until his death in 1981, is the closest figure to a unifying patriarch in Yakuza history. He transformed a regional gang into a national organisation with hundreds of affiliate groups and tens of thousands of members. His leadership style combined extreme violence in his younger years with sophisticated political management as he aged. The Yamaguchi-gumi remains Japan's largest criminal organisation, though its membership has declined significantly since its 1980s peak.",
        },
        { type: "heading", content: "The Vor v Zakone: Russian Thieves in Law" },
        {
          type: "paragraph",
          content:
            "The 'vor v zakone' — thieves in law — were the traditional leadership caste of Russian criminal culture, originating in Soviet-era prisons. Adherence to the 'thieves' code' required complete separation from the state: no cooperation with authorities, no legitimate employment, no military service. Post-Soviet Russia scrambled this code as criminal leaders entered business and politics. The vor became, in the Putin era, figures whose relationship with state intelligence was often ambiguous.",
        },
        { type: "heading", content: "Semion Mogilevich: Where Crime Meets Intelligence" },
        {
          type: "paragraph",
          content:
            "Semion Mogilevich — placed on the FBI's Ten Most Wanted list in 2009 — is the figure who most clearly embodies the convergence of Russian organised crime and state intelligence. An economist by training, he built criminal enterprises spanning arms trafficking, nuclear material smuggling, and financial fraud across multiple continents, while apparently operating with protection that suggested intelligence connections. He was briefly arrested in Moscow in 2008 but released within months. He remains at large.",
        },
        { type: "heading", content: "The 'Ndrangheta and Secondigliano Alliance" },
        {
          type: "paragraph",
          content:
            "The 'Ndrangheta — the Calabrian criminal organisation — is organised around blood family clans ('ndrine) rather than the more abstract territorial units of Cosa Nostra. This structure makes it uniquely resistant to infiltration: informers risk not just their own lives but those of their entire family networks. The Secondigliano Alliance — a coalition of powerful Camorra clans in Naples — managed the violence of the Campanian underworld in the 1990s through a brutal efficiency that Roberto Saviano documented in Gomorrah.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Yakuza: Quasi-Legal Business Structures" },
        {
          type: "paragraph",
          content:
            "The Yakuza's operational model historically involved substantial participation in legitimate business — construction, real estate, entertainment, financial services — alongside criminal income. Their public disaster-relief operations after major earthquakes were simultaneously genuine community service and sophisticated public relations. The post-1992 legal environment forced greater secrecy and created the 'front company' structure that now characterises Yakuza business operations.",
        },
        { type: "heading", content: "Triad Secrecy and Diaspora Networks" },
        {
          type: "paragraph",
          content:
            "Triad operations are characterised by elaborate oath-based secrecy inherited from their political origins, and by the use of diaspora networks in Chinese communities worldwide. Unlike the Yakuza's openness or the 'Ndrangheta's family structure, the Triads use ritual and information compartmentalisation as their primary organisational security. Their presence in Chinese communities in Europe, North America, and Southeast Asia gives them a global distribution network for narcotics, counterfeit goods, and human trafficking.",
        },
        { type: "heading", content: "Russia: Criminal-State Fusion" },
        {
          type: "paragraph",
          content:
            "The defining feature of Russian organised crime in the Putin era is not its separateness from the state but its integration with it. Criminal networks and intelligence services share personnel, share interests, and serve mutual purposes. State-connected criminal organisations can operate with impunity inside Russia while pursuing the state's foreign policy interests abroad — through assassination, cyber operations, and financial manipulation. The line between organised crime and state intelligence in Russia became, by the 2010s, largely notional.",
        },
        { type: "heading", content: "The Camorra and Toxic Waste" },
        {
          type: "paragraph",
          content:
            "The Camorra's control of Naples' waste management system — documented by Saviano in Gomorrah — is among the most damaging legacies of any criminal organisation's activity. By controlling municipal waste contracts, Camorra clans became the disposal route of choice for illegal toxic and industrial waste from across northern Italy and beyond. The 'Triangle of Death' — an area of Campania with dramatically elevated cancer rates — is the environmental consequence. The waste is still there.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Yakuza Film Tradition" },
        {
          type: "paragraph",
          content:
            "The Yakuza has produced one of cinema's most distinctive genre traditions. Kinji Fukasaku's Battles Without Honour and Humanity (1973) — based on a serialised memoir about the post-war Yakuza world — is considered the definitive account, deliberately anti-romantic and chaotic. Takeshi Kitano's films (Sonatine, Hana-Bi, Brother) present the Yakuza as both violent and melancholic, his boss figures looking inward at the futility of the life. These films shaped global cinema; Quentin Tarantino's debt to them is explicit.",
        },
        { type: "heading", content: "Triad Cinema: Hong Kong's Heroic Bloodshed" },
        {
          type: "paragraph",
          content:
            "Hong Kong's Triad-adjacent cinema produced some of the most influential action films of the 1980s and 1990s. John Woo's A Better Tomorrow (1986) and The Killer (1989) established the 'heroic bloodshed' genre — Triad members as tragic codes of honour, spectacular violence aestheticised through slow motion, brotherhood and betrayal as central themes. Andrew Lau and Alan Mak's Infernal Affairs (2002) — remade by Scorsese as The Departed — is the definitive Triad infiltration narrative.",
        },
        { type: "heading", content: "Russian Organised Crime: Eastern Promises" },
        {
          type: "paragraph",
          content:
            "David Cronenberg's Eastern Promises (2007), with Viggo Mortensen as a vor v zakone in London, is the most searching cinematic examination of the Russian criminal world in Western film. Its central achievement is portraying the vor not as a straightforwardly evil figure but as someone embedded in a cultural and criminal code with its own internal logic. The film's understanding of Russian criminal culture — the tattoos as biographical record, the initiation rituals, the hierarchy — is unusually accurate.",
        },
        { type: "heading", content: "Gomorrah: No Honour, No Glamour" },
        {
          type: "paragraph",
          content:
            "Roberto Saviano's Gomorrah, in both book (2006) and film form (Matteo Garrone, 2008), and subsequently as a long-running television series, represents the most rigorously un-romanticised account of criminal organisation in contemporary culture. The Camorra of Saviano's account is not powerful but degraded — young men dying for nothing, the organisation consuming its own, no honour, no dignity, just squalor and waste. The book's accuracy was such that Saviano has lived under police protection since its publication.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The 'Ndrangheta as the World's Most Powerful Criminal Organisation" },
        {
          type: "paragraph",
          content:
            "By most analytical assessments, the 'Ndrangheta is today the most powerful criminal organisation in the world — not the Sicilian Mafia, not the Yakuza, not the Russian mob. It controls an estimated 3% of Italy's GDP and is the dominant distributor of cocaine in Europe, with operations in more than 40 countries across five continents. Its blood-family clan structure, which made it resistant to the informant-driven prosecutions that weakened Cosa Nostra, is now the foundational advantage that has enabled its rise.",
        },
        { type: "heading", content: "The Yakuza in Decline" },
        {
          type: "paragraph",
          content:
            "The Yakuza's response to sustained legal pressure since 1992 has been a dramatic decline in official membership — from a peak of around 180,000 in the 1960s to under 30,000 today by official estimates — combined with structural adaptation. Yakuza organisations have become less visible, more corporate in their money laundering, and more willing to operate through legitimate-appearing business fronts. Whether this represents genuine weakening or merely tactical invisibility is debated among researchers.",
        },
        { type: "heading", content: "Russian Criminal-State Convergence" },
        {
          type: "paragraph",
          content:
            "The Putin era consolidated the convergence of Russian organised crime and state intelligence into what analysts have described as a 'mafia state' — a political system in which criminal networks are assets of state power rather than parasites on it. The implications extend far beyond Russia's borders: state-connected Russian criminal networks have been implicated in assassinations in the UK, election interference operations in multiple countries, and the use of financial crime as a foreign policy instrument.",
        },
        { type: "heading", content: "Global Criminal Networks Today" },
        {
          type: "paragraph",
          content:
            "The most significant development in global organised crime since the 1990s has been the full globalisation of criminal networks — mirroring the globalisation of legitimate business. Criminal organisations now operate logistics chains spanning multiple continents, with production in one region, distribution networks in another, and money laundering through a third. The 'Ndrangheta's cocaine supply chain — from Colombian producers through West African transit points to European consumers — is more sophisticated than many legitimate pharmaceutical distribution networks.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Organised Crime as a Mirror of Legitimate Business" },
        {
          type: "paragraph",
          content:
            "The most analytically interesting feature of organised crime is how precisely it mirrors the legitimate business structures of its era. The American Mafia adopted the corporate form — the board, the franchise, the separation of ownership and management — as American corporate capitalism developed. The Yakuza integrated into Japanese post-war capitalism through construction and real estate at exactly the moment those sectors were driving Japanese growth. The 'Ndrangheta built a global cocaine supply chain as globalisation created the infrastructure to support it.",
        },
        { type: "heading", content: "The Drugs Trade as Supply Chain Innovation" },
        {
          type: "paragraph",
          content:
            "The global narcotics trade is, stripped of its moral dimension, a remarkable logistical achievement. Cocaine produced in Colombia must be transported across oceans, through multiple transit countries, across numerous borders, and into consumer markets — while evading law enforcement at every stage. The organisations that manage this supply chain have solved problems in logistics, finance, and risk management that challenge legitimate businesses. The drugs trade is the most efficient black-market supply chain in history.",
        },
        { type: "heading", content: "Every Organisation Is a Distorted Reflection" },
        {
          type: "paragraph",
          content:
            "Each major criminal organisation is a distorted reflection of the legitimate economy of its society. The Triads reflect the overseas Chinese diaspora experience — the need for trust networks outside state protection in foreign environments. The Yakuza reflects Japan's managed capitalism and the social exclusion of minority populations. Russian organised crime reflects the catastrophic asset-stripping of Soviet collapse. You cannot understand any of these organisations without understanding the society they emerged from.",
        },
        { type: "heading", content: "State Failure as the Common Variable" },
        {
          type: "paragraph",
          content:
            "Across every case — Japan, China, Russia, Italy — the common variable is the same: organised crime fills voids that states leave open. The voids may be economic (markets that states prohibit but cannot suppress), social (communities that states exclude), security (regions or populations the state fails to protect), or political (populations denied legitimate channels for grievance). The implication is uncomfortable but clear: if you want to reduce organised crime, strengthen the state's capacity to perform its basic functions — and its willingness to perform them equitably.",
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
