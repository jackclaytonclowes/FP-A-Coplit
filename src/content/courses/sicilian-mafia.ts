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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Nobody Founded the Mafia" },
        {
          type: "paragraph",
          content:
            "Nobody founded the Mafia. It evolved where the state was weak — estate managers filling a power vacuum and never giving it back.",
        },
        {
          type: "paragraph",
          content:
            "These estate managers — gabellotti — hired armed men to enforce deals the government wouldn't. Their networks hardened into clans, and the clans became Cosa Nostra.",
        },
        { type: "heading", content: "The Myth of the Secret Founding" },
        {
          type: "paragraph",
          content:
            "There was no founding year, no secret ceremony, no manifesto. The Mafia grew from the structural rot of Sicilian rural life — absentee landlords, a useless state, and someone always willing to enforce your contract for a fee.",
        },
        { type: "heading", content: "Three Organisations, One Boot" },
        {
          type: "paragraph",
          content:
            "Cosa Nostra (Sicily), Camorra (Naples), 'Ndrangheta (Calabria) — same cultural roots, very different structures. Today the 'Ndrangheta runs cocaine across 40+ countries and makes the others look small.",
        },
        { type: "heading", content: "Emigration Exports the Model" },
        {
          type: "paragraph",
          content:
            "Between the 1880s and 1920s, Sicilian emigrants brought mafia structures to New York and Chicago. The same conditions — weak policing, ethnic exclusion, distrust of authority — made the transplant take root.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Luciano Turned the Mob Corporate" },
        {
          type: "paragraph",
          content:
            "Lucky Luciano built the Commission — a board of directors for the American mob — and made violence a last resort rather than a first instinct. He ran the Mafia like a business because that's what it was.",
        },
        { type: "heading", content: "Banana Wars and Power Plays" },
        {
          type: "paragraph",
          content:
            "Bonanno's ambition triggered the Banana War in the 1960s, destabilising New York. Carlo Gambino quietly manoeuvred through the chaos to become the most powerful boss in the city — the real-life Don Corleone.",
        },
        { type: "heading", content: "Riina: The Don Who Declared War on the State" },
        {
          type: "paragraph",
          content:
            "Totò Riina broke every rule — he went after judges, politicians, and eventually the Italian state itself. He ordered the 1992 bombings that killed Falcone and Borsellino, and triggered his own downfall.",
        },
        {
          type: "paragraph",
          content:
            "Riina hid in plain sight in Palermo for 23 years before his capture in 1993. He died in prison in 2017, unrepentant to the end.",
        },
        { type: "heading", content: "Provenzano: The Quiet Successor" },
        {
          type: "paragraph",
          content:
            "Bernardo Provenzano stayed underground for 43 years. Where Riina used bombs, Provenzano used tiny handwritten notes — pizzini — passed through intermediaries. He pulled the Mafia back from the brink, preferring corruption to confrontation.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Omertà: Don't Talk. Ever." },
        {
          type: "paragraph",
          content:
            "The code of silence wasn't just a rule — it was a culture. Talking to police wasn't just dangerous; it was shameful. Generations of Sicilians absorbed this long before the Mafia ever knocked on their door.",
        },
        { type: "heading", content: "The Cosca: Clan, Business, Army" },
        {
          type: "paragraph",
          content:
            "Each cosca controls a territory and milks it — protection rackets, construction contracts, political favours, drugs. It's a family, a firm, and a militia all at once.",
        },
        { type: "heading", content: "Violence: Use It Rarely, Make It Count" },
        {
          type: "paragraph",
          content:
            "Murder attracts attention. The traditional Mafia preferred the implicit threat — everyone knew what could happen, and that was enough. Violence was saved for moments of maximum symbolic impact.",
        },
        { type: "heading", content: "Contracts and Kickbacks" },
        {
          type: "paragraph",
          content:
            "Post-war reconstruction handed the Mafia its golden era. Construction contracts, political kickbacks, and Christian Democratic votes created a self-sustaining loop of mutual corruption.",
        },
        { type: "heading", content: "The French Connection" },
        {
          type: "paragraph",
          content:
            "Sicilian networks partnered with Corsican criminals to run heroin from Turkey through Marseille to American cities. The profits transformed Cosa Nostra from a regional racket into a global enterprise.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Godfather Is a Beautiful Lie" },
        {
          type: "paragraph",
          content:
            "Coppola's trilogy is gorgeous, psychologically rich, and deeply romantic. It presents the Mafia as a world of loyalty and tragic honour — which is exactly what it wasn't.",
        },
        {
          type: "paragraph",
          content:
            "FBI recordings from the 1980s caught actual mafia bosses quoting the film. The Godfather didn't just reflect the Mafia — it helped shape how the Mafia saw itself.",
        },
        { type: "heading", content: "Gomorrah: No Honour, Just Waste" },
        {
          type: "paragraph",
          content:
            "Saviano's Gomorrah is the counter-Godfather: no dignity, no code, just young men dying for nothing. It was so accurate that Saviano has lived under police protection ever since.",
        },
        { type: "heading", content: "Goodfellas Gets It Right" },
        {
          type: "paragraph",
          content:
            "Scorsese's Goodfellas shows both why the life was genuinely attractive and exactly how it destroys everyone it touches. Operatic it isn't — but honest it is.",
        },
        { type: "heading", content: "The Sopranos: The Mafia in Decay" },
        {
          type: "paragraph",
          content:
            "Tony Soprano is a man born into a dying institution, having panic attacks and therapy sessions. Chase's great insight: by the late 20th century, the mob wasn't powerful — it was just sad.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Falcone Built the Legal Weapon" },
        {
          type: "paragraph",
          content:
            "Judge Falcone invented a new way to fight the Mafia — treating it as an organisation, not a collection of individuals. The 1986-87 Palermo maxi-trial convicted 475 people. It was a blueprint.",
        },
        { type: "heading", content: "The 1992 Bombings Backfired Spectacularly" },
        {
          type: "paragraph",
          content:
            "Riina killed Falcone and Borsellino in massive public bombings. The public outrage that followed was unlike anything Italy had seen — and it handed the state the political will it had always lacked.",
        },
        { type: "heading", content: "Cosa Nostra Collapses" },
        {
          type: "paragraph",
          content:
            "Riina was arrested in 1993. Provenzano in 2006. Informers broke omertà and dismantled what violence couldn't. Cosa Nostra today is a shadow of what it was.",
        },
        { type: "heading", content: "The 'Ndrangheta Takes Over" },
        {
          type: "paragraph",
          content:
            "While Cosa Nostra fell, the 'Ndrangheta rose. Built on blood families — harder to infiltrate, impossible to betray — it now controls 3% of Italy's GDP and dominates European cocaine distribution.",
        },
        { type: "heading", content: "Civil Society Fights Back" },
        {
          type: "paragraph",
          content:
            "Libera — founded in 1995 by Don Luigi Ciotti — runs cooperatives on confiscated mafia land and keeps the victims' names alive. Civil society turned out to be the Mafia's most durable enemy.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Mafia Is a State Failure Story" },
        {
          type: "paragraph",
          content:
            "The Mafia emerged because the state couldn't enforce contracts, protect citizens, or deliver justice. When the state won't do the job, someone else will — and they'll charge for it.",
        },
        { type: "heading", content: "This Pattern Is Everywhere" },
        {
          type: "paragraph",
          content:
            "1860s Sicily. 1990s Somalia. 1980s Medellín. Contemporary Libya. Same logic every time: legitimate grievances, absent state, someone willing to provide order at a price.",
        },
        { type: "heading", content: "Who Fills the Vacuum?" },
        {
          type: "paragraph",
          content:
            "The real question isn't why criminal organisations exist — it's what determines which kind fills the void, and what conditions let the state eventually reclaim authority.",
        },
        { type: "heading", content: "When Crime Becomes Governance" },
        {
          type: "paragraph",
          content:
            "Cosa Nostra and the Christian Democrats weren't just corrupt — they were symbiotic. Votes for contracts, protection for loyalty. At its most sophisticated, organised crime stops being parasitism and starts being a form of government.",
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
