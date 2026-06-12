import type { Course } from "@/types"

const course: Course = {
  id: "sicilian-mafia",
  title: "The Sicilian Mafia",
  slug: "sicilian-mafia",
  description:
    "A historical study of the Sicilian Mafia — from its 19th-century origins as a rural power structure to its post-war industrial and political corruption, and the anti-mafia movement's long struggle.",
  category: "crime",
  accentColor: "#7a1515",
  estimatedHours: 3,
  tags: ["mafia", "sicily", "organised-crime", "history", "italy"],
  lessons: [
    {
      id: "sm-01-origins",
      title: "Origins & Structure",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "19th-Century Sicily Under Bourbon Rule" },
        {
          type: "paragraph",
          content:
            "The Sicilian Mafia was not founded — it evolved. In the mid-19th century, Sicily existed under weak Bourbon governance, with vast feudal estates, absentee landlords, and a state apparatus too distant and corrupt to enforce contracts or guarantee security. In this vacuum, parallel power structures emerged.",
        },
        {
          type: "paragraph",
          content:
            "The gabellotti — estate managers who administered the great latifundia on behalf of absentee nobles — were proto-mafia figures. They hired armed men to protect crops, settle disputes, and collect debts. Their authority derived not from the state but from the credible threat of violence. As these networks consolidated, they became the cosca: the clan, the basic unit of what would become Cosa Nostra.",
        },
        { type: "heading", content: "Not Founded But Evolved" },
        {
          type: "paragraph",
          content:
            "A persistent myth holds that the Mafia was founded as a secret society in a specific year, perhaps to resist foreign domination. Historians reject this. The Mafia emerged gradually from the structural conditions of Sicilian rural life — the weakness of the state, the concentration of land, the absence of legitimate mechanisms for contract enforcement. Where the state cannot guarantee your agreements, you find someone who can.",
        },
        { type: "heading", content: "Cosa Nostra, Camorra, and 'Ndrangheta" },
        {
          type: "paragraph",
          content:
            "The Sicilian Mafia — Cosa Nostra — is one of three major Italian criminal organisations. The Camorra is based in Naples and Campania, historically operating in urban markets, waste management, and construction. The 'Ndrangheta is based in Calabria, the toe of Italy's boot, and is today considered the most powerful of the three, with global cocaine distribution networks that reach every continent. These three organisations share cultural roots but are structurally distinct and have often been rivals.",
        },
        { type: "heading", content: "US Emigration and the American Branch" },
        {
          type: "paragraph",
          content:
            "Between the 1880s and 1920s, mass emigration from southern Italy and Sicily carried mafia structures to New York, Chicago, and other American cities. Men who had been members or associates of Sicilian cosche arrived in immigrant communities where the same conditions — weak state authority, ethnic exclusion from legitimate opportunity, distrust of police — reproduced the conditions for mafia organisation. The American Mafia grew from this transplant.",
        },
      ],
      quiz: {
        question: "What were the gabellotti, and why are they considered proto-mafia figures?",
        options: [
          {
            id: "a",
            text: "Police agents who switched sides and joined criminal networks",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Estate managers who used armed men to enforce contracts in the absence of state authority",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Bourbon tax collectors who extorted rural communities",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Sicilian nationalist politicians who organised resistance to foreign rule",
            isCorrect: false,
          },
        ],
        explanation:
          "The gabellotti were estate managers who administered large Sicilian landholdings for absentee nobles. In the absence of reliable state authority, they maintained order through private force — hiring armed men, settling disputes, and enforcing agreements. This model — authority derived from the credible threat of violence, not from the state — is the foundational pattern of the Mafia.",
      },
    },
    {
      id: "sm-02-figures",
      title: "Key Figures",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Lucky Luciano and the Modernisation of the Mob" },
        {
          type: "paragraph",
          content:
            "Charles 'Lucky' Luciano, born in Sicily and raised in New York, transformed both the American and Sicilian mafia in the 1930s. He established the Commission — a conflict-resolution body for the major American crime families — bringing rational structure to what had been a chaotic, violent competition. Luciano's vision was corporate: the mob as a business, violence as a last resort rather than a first.",
        },
        { type: "heading", content: "The New York Families" },
        {
          type: "paragraph",
          content:
            "Vito Genovese and Joe Bonanno were central figures in the American branch's mid-century history. Bonanno's ambition triggered the Banana War — an internal conflict in the 1960s that destabilised the New York Commission. Carlo Gambino manoeuvred through these conflicts to become the most powerful boss in New York by the 1970s, the model for The Godfather's fictional Don Corleone.",
        },
        { type: "heading", content: "Totò Riina: The Most Violent Don" },
        {
          type: "paragraph",
          content:
            "In Sicily, the defining figure of the late 20th century was Salvatore 'Totò' Riina, boss of the Corleonesi clan. Riina broke with the traditional mafia preference for discretion and pursued a strategy of open, spectacular violence — against rival clans, against politicians, and ultimately against the Italian state itself. He ordered the assassinations of judges Giovanni Falcone and Paolo Borsellino in 1992, bombings that killed both men along with their police escorts.",
        },
        {
          type: "paragraph",
          content:
            "Riina lived as a fugitive in Sicily for 23 years, hiding in plain sight in Palermo, before his capture in January 1993. He died in prison in 2017, never having shown remorse.",
        },
        { type: "heading", content: "Bernardo Provenzano: The Accountant" },
        {
          type: "paragraph",
          content:
            "Riina's successor as Cosa Nostra boss was Bernardo Provenzano, who survived as a fugitive for an extraordinary 43 years — from 1963 to 2006. Where Riina was violent, Provenzano was strategic. He pulled the Mafia back from confrontation with the state, preferring corruption and infiltration to bombs. He communicated with his lieutenants via pizzini — tiny handwritten notes passed through intermediaries — to avoid electronic surveillance. Captured in 2006, he died in custody in 2016.",
        },
      ],
      quiz: {
        question: "What strategy distinguished Totò Riina's leadership of Cosa Nostra from traditional mafia practice?",
        options: [
          {
            id: "a",
            text: "He prioritised financial crime and money laundering over street-level violence",
            isCorrect: false,
          },
          {
            id: "b",
            text: "He pursued open, spectacular violence against the Italian state itself, including killing judges",
            isCorrect: true,
          },
          {
            id: "c",
            text: "He sought alliances with the Italian Communist Party to resist the Christian Democrats",
            isCorrect: false,
          },
          {
            id: "d",
            text: "He expanded Cosa Nostra into North Africa and the Middle East",
            isCorrect: false,
          },
        ],
        explanation:
          "Traditional mafia doctrine held that attacking the state directly — killing judges, politicians, police chiefs — was strategically self-defeating. It would bring overwhelming retaliation. Riina broke this code deliberately, assassinating judges Falcone and Borsellino in 1992. The strategy backfired catastrophically: the public outrage that followed accelerated the political will to dismantle Cosa Nostra, leading to Riina's own capture in 1993.",
      },
    },
    {
      id: "sm-03-methods",
      title: "Methods & Operations",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Omertà: The Code of Silence" },
        {
          type: "paragraph",
          content:
            "The foundation of mafia operational security is omertà — the code of silence. Members are expected never to cooperate with authorities, never to speak about mafia affairs to outsiders, and to accept punishment rather than testify. This norm is enforced not only by the threat of violence but by deep cultural roots in Sicilian distrust of the state. For generations, talking to the police was culturally coded as shameful regardless of the topic.",
        },
        { type: "heading", content: "The Cosca: Clan as Business Unit" },
        {
          type: "paragraph",
          content:
            "The basic operational unit of Cosa Nostra is the cosca — the clan, literally meaning 'artichoke' (a plant that bundles tightly together). Each cosca controls a specific territory and derives income from that territory through a combination of protection rackets, construction contracts, political corruption, and, from the 1970s, drug trafficking. The cosca is simultaneously a family, a business, and a military unit.",
        },
        { type: "heading", content: "Violence as Last Resort" },
        {
          type: "paragraph",
          content:
            "Contrary to popular representation, the traditional Sicilian Mafia used violence sparingly. Murder attracted attention, generated enemies, and risked retaliation. The preferred instrument was the implicit threat — everyone knew what the cosca could do, and that knowledge was sufficient. Violence was preserved for moments when its symbolic impact would be maximised: the elimination of a rival who had grown too powerful, the punishment of betrayal.",
        },
        { type: "heading", content: "Construction and Political Corruption" },
        {
          type: "paragraph",
          content:
            "The post-war economic boom and the reconstruction of Italian cities created the foundation of modern mafia wealth. Construction contracts — awarded by politicians, built with mafia-connected firms, financed through kickbacks — became the primary engine of accumulation. The relationship between Cosa Nostra and the Christian Democratic Party in Sicily was symbiotic: votes and order in exchange for contracts and protection.",
        },
        { type: "heading", content: "The French Connection" },
        {
          type: "paragraph",
          content:
            "From the 1950s through the 1970s, Sicilian mafia networks partnered with Corsican criminals to run heroin from Turkish opium through processing laboratories in Marseille and on to US markets. This was the 'French Connection' — a supply chain that flooded American cities with heroin and generated profits that transformed the Mafia from a regional criminal organisation into an international one.",
        },
      ],
      quiz: {
        question: "Why did the traditional Sicilian Mafia use violence sparingly, reserving it for specific moments?",
        options: [
          {
            id: "a",
            text: "Because Sicilian culture considered violence dishonourable except in formal duels",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Because frequent violence attracted state attention and generated enemies, reducing its strategic value",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Because the Catholic Church exerted moral authority over mafia members",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Because American mafia partners demanded less violent methods for joint operations",
            isCorrect: false,
          },
        ],
        explanation:
          "The traditional mafia understanding was that violence was most powerful as a latent threat. Every business owner in a cosca's territory knew what could happen — and that knowledge enforced compliance without requiring constant bloodshed. Frequent murder attracted police scrutiny, destabilised business relationships, and invited retaliation from rivals. Violence was a tool to be used precisely, not routinely.",
      },
    },
    {
      id: "sm-04-culture",
      title: "Cultural Representation",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Godfather: The Romanticised Account" },
        {
          type: "paragraph",
          content:
            "Francis Ford Coppola's Godfather trilogy (1972, 1974, 1990) is the defining cultural representation of the Mafia in the English-speaking world. Based on Mario Puzo's novel, it presents the Corleone family as tragic figures navigating between Old World honour codes and American ambition. The films are extraordinarily beautiful and psychologically rich — and they are also a romance. The Mafia is depicted as a world of loyalty, family, and dignity, with violence as a regrettable necessity.",
        },
        {
          type: "paragraph",
          content:
            "The Godfather shaped how multiple generations understood organised crime — and, according to many accounts, shaped how the actual Mafia understood itself. FBI surveillance recordings in the 1980s captured mafia bosses quoting the film and adopting its vocabulary.",
        },
        { type: "heading", content: "Gomorrah: The Counter-Narrative" },
        {
          type: "paragraph",
          content:
            "Roberto Saviano's 2006 book Gomorrah, and Paolo Sorrentino's subsequent film, presents a deliberately counter-Godfather account of the Camorra in Naples. There is no honour, no dignity, no tragic grandeur — only squalor, stupidity, and waste. Young men die for nothing; the organisation eats its own. Saviano's account was so accurate and so damaging that he has lived under police protection since 2006, unable to return to normal life.",
        },
        { type: "heading", content: "Goodfellas and the American Branch" },
        {
          type: "paragraph",
          content:
            "Martin Scorsese's Goodfellas (1990), based on Nicholas Pileggi's account of Henry Hill's life in the Lucchese crime family, is generally considered the most accurate cultural representation of the American Mafia — its appeal, its mundane brutality, its ultimate self-destruction. Where The Godfather is operatic, Goodfellas is observational: this is what it was actually like.",
        },
        { type: "heading", content: "The Sopranos and Italian Documentaries" },
        {
          type: "paragraph",
          content:
            "David Chase's The Sopranos (1999-2007) is the story of the Mafia in decline — Tony Soprano as a man born into a dying institution, suffering panic attacks and existential crisis. Italian documentary and journalistic traditions have produced rigorous accounts: the work of journalists like Attilio Bolzoni at La Repubblica, and documentaries exploring the anti-mafia movement's civil society roots.",
        },
      ],
      quiz: {
        question: "What does Roberto Saviano's Gomorrah deliberately set out to challenge?",
        options: [
          {
            id: "a",
            text: "The legal framework for prosecuting organised crime in Italian courts",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The romanticised Godfather account of mafia life as dignified, honourable, and tragic",
            isCorrect: true,
          },
          {
            id: "c",
            text: "The Italian government's claim that the Camorra had been successfully dismantled",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Scorsese's depiction of Italian-Americans in Goodfellas as stereotypical",
            isCorrect: false,
          },
        ],
        explanation:
          "Saviano's Gomorrah is an explicit counter-narrative to the Godfather tradition of mafia-as-tragic-honour. In Saviano's account of the Camorra, there is no loyalty, no dignity, no code — only waste, stupidity, and futility. Young men die for nothing. The book was so unflinching that it made Saviano's continued life in Italy impossible; he has lived under armed guard since its publication.",
      },
    },
    {
      id: "sm-05-legacy",
      title: "Legacy & Modern Impact",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Judge Falcone and the Maxi-Trials" },
        {
          type: "paragraph",
          content:
            "The decisive turning point in the Italian state's war against Cosa Nostra came through the work of judge Giovanni Falcone and his colleague Paolo Borsellino. Through painstaking analysis of financial records, turncoat testimony, and organisational charts, Falcone built the legal architecture for prosecuting the Mafia as a criminal organisation rather than pursuing individual members. The result was the Palermo maxi-trial of 1986-87, in which 475 mafiosi were convicted.",
        },
        { type: "heading", content: "The 1992 Assassinations" },
        {
          type: "paragraph",
          content:
            "In May 1992, Falcone was killed by a bomb planted under the Capaci motorway — a massive explosion that killed him, his wife, and three bodyguards. Two months later, Borsellino was killed by a car bomb outside his mother's apartment in Palermo. The assassinations were ordered by Riina. They were a tactical catastrophe for Cosa Nostra: the public outrage they generated in Italy was unlike anything that had come before, producing the political will for aggressive action.",
        },
        { type: "heading", content: "The Collapse of Cosa Nostra" },
        {
          type: "paragraph",
          content:
            "Riina was captured in January 1993. Provenzano in 2006. The senior leadership of Cosa Nostra was systematically imprisoned, and the pentiti — informers — who broke omertà provided evidence that dismantled the organisation's inner workings. Cosa Nostra in Sicily is today significantly weakened compared to its peak in the 1970s and 1980s.",
        },
        { type: "heading", content: "The 'Ndrangheta's Rise" },
        {
          type: "paragraph",
          content:
            "While Cosa Nostra declined, the 'Ndrangheta of Calabria grew more powerful. Organised around blood families rather than the more abstract cosca structure, it proved more resistant to infiltration by informers — you cannot easily betray your own kin. The 'Ndrangheta today controls an estimated 3% of Italy's GDP and is the dominant distributor of cocaine in Europe, with operations in 40+ countries.",
        },
        { type: "heading", content: "Anti-Mafia Civil Society" },
        {
          type: "paragraph",
          content:
            "The anti-mafia movement — associations like Libera, founded in 1995 by priest Don Luigi Ciotti — represents perhaps the most significant legacy of Falcone and Borsellino. Libera coordinates hundreds of civil society organisations, runs agricultural cooperatives on confiscated mafia land, and maintains the names of mafia victims in public memory. The movement demonstrates that civil society can be the most durable weapon against organised crime.",
        },
      ],
      quiz: {
        question: "Why did the assassinations of Falcone and Borsellino in 1992 prove to be a strategic catastrophe for Cosa Nostra?",
        options: [
          {
            id: "a",
            text: "Because the bombings destroyed key mafia infrastructure and killed several bosses",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Because the public outrage generated unprecedented political will to dismantle the organisation",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Because they triggered American pressure on the Italian government through diplomatic channels",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Because Falcone had already completed his legal work before his death",
            isCorrect: false,
          },
        ],
        explanation:
          "The murder of two of Italy's most respected judges — with their spouses and bodyguards, in massive public bombings — created a national trauma unlike anything the mafia wars had previously generated. The Italian public demanded action. The political will that had always been insufficient suddenly materialised, leading directly to Riina's capture seven months later and the aggressive dismantling of Cosa Nostra's leadership throughout the 1990s.",
      },
    },
    {
      id: "sm-06-reveals",
      title: "What This Reveals About Society",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The Mafia as a Response to State Failure" },
        {
          type: "paragraph",
          content:
            "The most important analytical insight about the Sicilian Mafia is also the simplest: it emerged where the state could not perform its basic functions. In 19th-century Sicily, the state could not reliably enforce contracts, guarantee property rights, protect citizens from violence, or deliver justice. Where the state fails to perform these functions, someone else will — and they will charge for the service.",
        },
        { type: "heading", content: "The Universal Pattern" },
        {
          type: "paragraph",
          content:
            "This pattern — parallel power filling the vacuum of state failure — is universal and recurrent. The Mafia in 1860s Sicily. The warlords of 1990s Somalia. The drug cartels of 1980s Medellín. The militias of contemporary Libya. In every case, the same logic: legitimate grievances, absent state, someone willing to provide order at a price. Understanding the Mafia means understanding the conditions that produce it, not simply condemning the outcome.",
        },
        { type: "heading", content: "The Question of the Vacuum" },
        {
          type: "paragraph",
          content:
            "The analytical question is always: who fills the vacuum, and why? When a state withdraws — through weakness, corruption, or deliberate policy — something takes its place. Criminal organisations, militias, warlords, or informal community structures. The vacuum will be filled. The relevant question is what determines which kind of organisation fills it, and what conditions allow legitimate state authority to reassert itself.",
        },
        { type: "heading", content: "Collusion and the State Within the State" },
        {
          type: "paragraph",
          content:
            "The relationship between the Sicilian Mafia and the Italian political system was not simply criminal parasitism — it was structural collusion. For decades, the Christian Democratic Party in Sicily used the Mafia to deliver votes; the Mafia used the party to secure contracts and protection from prosecution. This was a system, not a series of individual crimes. It suggests that organised crime at its most sophisticated becomes indistinguishable from a particular form of governance.",
        },
      ],
      reflection: {
        prompt:
          "The Sicilian Mafia emerged where the state could not enforce contracts, guarantee security, or deliver justice — and a parallel structure filled the vacuum. Where else, historically or today, do you see this pattern? What does it tell us about what states are actually for, and what happens when they fail to provide it?",
      },
    },
  ],
}

export default course
