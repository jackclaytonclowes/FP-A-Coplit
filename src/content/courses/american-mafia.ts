import type { Course } from "@/types"

const course: Course = {
  id: "american-mafia",
  title: "The American Mafia",
  slug: "american-mafia",
  description:
    "A history of the American Mafia — from Prohibition's criminal economy through the Five Families of New York, Las Vegas, and the FBI's long war that dismantled the Commission.",
  category: "crime",
  accentColor: "#2a2a3a",
  estimatedHours: 3,
  tags: ["mafia", "american", "organised-crime", "prohibition", "new-york"],
  lessons: [
    {
      id: "am-01-origins",
      title: "Origins & Structure",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Immigration and the Black Hand" },
        {
          type: "paragraph",
          content:
            "Between the 1880s and 1920s, millions of Italians and Sicilians emigrated to the United States, settling in concentrated urban communities in New York, Chicago, and other cities. Among them came men with connections to Sicilian cosche and Neapolitan Camorra networks. The Black Hand — a form of extortion targeting Italian immigrant businesses through threatening letters — was the early predecessor of organised criminal activity in these communities.",
        },
        {
          type: "paragraph",
          content:
            "The conditions that had sustained mafia structures in Sicily were partially reproduced in American immigrant communities: ethnic exclusion from legitimate economic opportunity, distrust of police (who were often hostile to Italian immigrants), and the practical need for unofficial dispute resolution within communities that could not rely on the state.",
        },
        { type: "heading", content: "Prohibition: The Economic Foundation" },
        {
          type: "paragraph",
          content:
            "The 18th Amendment — Prohibition, 1920 to 1933 — was the event that created the modern American Mafia. By criminalising alcohol, the US government handed criminal entrepreneurs control of an industry with enormous, inelastic demand. The bootlegging empires that resulted were not small operations: Al Capone's Chicago Outfit employed hundreds of people and generated revenues estimated in the hundreds of millions of 1920s dollars. The Five Families of New York — Bonanno, Colombo, Gambino, Genovese, and Lucchese — consolidated around this wealth.",
        },
        { type: "heading", content: "The Castellammarese War and the Commission" },
        {
          type: "paragraph",
          content:
            "In 1930-31, a violent war between two Sicilian-origin factions — the Masseria and Castellammarese clans — threatened to destroy the bootlegging economy through instability. Lucky Luciano ended it by arranging the murders of both faction leaders and establishing the Commission: a governing body of the major crime families that would resolve conflicts through negotiation rather than war. The Commission was a corporate innovation — a board of directors for an industry.",
        },
      ],
      quiz: {
        question: "Why was Prohibition (1920-1933) so decisive in creating the modern American Mafia?",
        options: [
          {
            id: "a",
            text: "It created diplomatic tension with Italy that drove Italian-Americans toward criminal networks",
            isCorrect: false,
          },
          {
            id: "b",
            text: "It criminalised an industry with enormous inelastic demand, handing criminal entrepreneurs vast wealth",
            isCorrect: true,
          },
          {
            id: "c",
            text: "It allowed Italian immigrants to gain American citizenship through military service",
            isCorrect: false,
          },
          {
            id: "d",
            text: "It concentrated Italian-American communities in specific cities where mafia networks could organise",
            isCorrect: false,
          },
        ],
        explanation:
          "Prohibition turned the manufacture and sale of alcohol into a criminal enterprise while demand remained essentially unchanged. This created a massive economic opportunity for organised criminal networks willing to supply the market. The wealth generated during Prohibition — estimated in the billions of contemporary dollars — was the capital foundation of the American Mafia's subsequent power in gambling, labour racketeering, and political corruption.",
      },
    },
    {
      id: "am-02-figures",
      title: "Key Figures",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Al Capone: The Cultural Icon" },
        {
          type: "paragraph",
          content:
            "Alphonse Capone is the most famous organised crime figure in American history — a celebrity criminal who gave press interviews and attended baseball games. As boss of the Chicago Outfit through the late 1920s, he controlled gambling, bootlegging, and prostitution across the city. His Valentine's Day Massacre (1929) — the murder of seven rival gang members — made him a national figure. He was ultimately imprisoned not for any of his crimes but for tax evasion, convicted in 1931.",
        },
        { type: "heading", content: "Lucky Luciano and Meyer Lansky" },
        {
          type: "paragraph",
          content:
            "Lucky Luciano's structural innovations — the Commission, the National Crime Syndicate, the separation of violent enforcement from business management — transformed the mob from a feudal into a corporate model. His partnership with Meyer Lansky, a Jewish financier who became known as the Mob's Accountant, was foundational. Lansky's genius was for the movement and laundering of money: he pioneered the offshore banking structures that criminal organisations worldwide still use.",
        },
        { type: "heading", content: "Frank Costello: The Prime Minister" },
        {
          type: "paragraph",
          content:
            "Frank Costello — known as the 'Prime Minister of the Underworld' — was the most politically connected boss of his era, with relationships extending into Tammany Hall and beyond. He preferred diplomacy to violence and spent his career building the mob's political infrastructure. His testimony before the Kefauver Committee in 1951 — broadcast live on television, showing only his hands because he refused to be filmed — introduced American audiences to the reality of organised crime.",
        },
        { type: "heading", content: "Carlo Gambino and John Gotti" },
        {
          type: "paragraph",
          content:
            "Carlo Gambino manoeuvred through decades of internal politics to become the dominant New York boss by the 1970s — the model, it is believed, for Mario Puzo's fictional Don Corleone. His successor, eventually, was John Gotti — the 'Dapper Don,' known for his expensive suits and public flamboyance. Gotti was the last of the old-style bosses: charismatic, visible, and ultimately brought down when his underboss Sammy 'The Bull' Gravano turned government witness and testified against him in 1992.",
        },
      ],
      quiz: {
        question: "What was Al Capone ultimately imprisoned for, and why does this matter historically?",
        options: [
          {
            id: "a",
            text: "Murder, because the FBI finally proved his role in the St Valentine's Day Massacre",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Tax evasion — demonstrating that financial investigation could succeed where direct prosecution of criminal acts had failed",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Bootlegging, after a Prohibition agent infiltrated his supply chain",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Bribery of public officials, following testimony from a Chicago police chief",
            isCorrect: false,
          },
        ],
        explanation:
          "Capone's imprisonment for tax evasion — rather than for murder, bootlegging, or bribery — established a legal template that prosecutors would use against organised crime for decades: when direct prosecution of criminal acts is blocked by witnesses who will not testify, follow the money. The same approach was later formalised in the RICO Act, which allowed prosecutors to target criminal organisations through their financial structures.",
      },
    },
    {
      id: "am-03-methods",
      title: "Methods & Operations",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Commission as Conflict Resolution" },
        {
          type: "paragraph",
          content:
            "The Commission — established by Luciano in 1931 — was a standing body of the major crime family bosses that met periodically to resolve territorial disputes, approve significant criminal actions, and adjudicate internal conflicts. The 'sit-down' — a formal meeting between parties in dispute, mediated by a neutral boss — was the standard method for resolving conflicts without violence. The Commission represented the Mafia's aspiration to be a business, not merely a gang.",
        },
        { type: "heading", content: "Labour Racketeering" },
        {
          type: "paragraph",
          content:
            "The American Mafia's most durable and legitimate-appearing source of income was labour racketeering — the infiltration and control of trade unions. By controlling the Teamsters (transport), longshoremen (ports), and construction unions, the mob could extort entire industries: either through the direct theft of pension funds, or through the sale of 'labour peace' to employers who paid to avoid strikes. The Teamsters pension fund, administered for years with mob involvement, was the mob's most important bank.",
        },
        { type: "heading", content: "Las Vegas: The Legitimate Front" },
        {
          type: "paragraph",
          content:
            "Las Vegas in the 1950s and 1960s was the mob's most visible legitimate enterprise — casino hotels financed with Teamsters pension fund money, staffed with mob-connected managers, and systematically skimmed. The 'skim' was cash taken from casino revenues before it was counted and recorded, allowing it to disappear without appearing in any tax records. Las Vegas generated hundreds of millions in untaxed income for crime families across the country.",
        },
        { type: "heading", content: "Narcotics: The Reluctant Transition" },
        {
          type: "paragraph",
          content:
            "The traditional mob leadership was initially reluctant to enter narcotics trafficking — not for moral reasons but because it attracted the most severe law enforcement attention and created the most pressure on members to cooperate when arrested. Luciano's successor generation eventually abandoned this position: by the 1970s, heroin and cocaine represented the largest revenue stream for the American Mafia, as they did for criminal organisations worldwide.",
        },
      ],
      quiz: {
        question: "Why was labour racketeering considered one of the American Mafia's most effective revenue streams?",
        options: [
          {
            id: "a",
            text: "Because unions were unregulated and invisible to federal law enforcement",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Because controlling unions gave the mob leverage over entire industries through strike threats and pension fund access",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Because union members were predominantly Italian-American and culturally sympathetic",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Because labour law allowed union officials to take personal payments without criminal liability",
            isCorrect: false,
          },
        ],
        explanation:
          "By controlling major unions — the Teamsters, longshoremen, construction trades — the mob could extort entire industries. Employers paid for labour peace rather than face strikes they could not survive. Pension funds, accumulated from workers' contributions over decades, were accessible to mob-connected trustees as a de facto bank for criminal investment. The combination of ongoing income and capital access made labour racketeering central to the mob's mid-century power.",
      },
    },
    {
      id: "am-04-culture",
      title: "Cultural Representation",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Godfather: A Romance" },
        {
          type: "paragraph",
          content:
            "Francis Ford Coppola's The Godfather (1972) is one of the most successful films ever made and the defining cultural document of the American Mafia. Based on Mario Puzo's novel, it presents organised crime through the lens of family tragedy — the Corleones as immigrant success story turned corrupt by American ambition. Its central argument is elegiac: something noble and honourable is being destroyed by a more brutal modern world. This is, of course, a romance. The actual American Mafia was a criminal enterprise that destroyed neighbourhoods, corrupted institutions, and murdered rivals.",
        },
        { type: "heading", content: "Goodfellas: The More Honest Account" },
        {
          type: "paragraph",
          content:
            "Martin Scorsese's Goodfellas (1990) is generally considered the more accurate cultural account. Based on Nicholas Pileggi's Wiseguy — the story of Henry Hill, a Lucchese associate who became a government informant — it presents mob life as seductive and then annihilating. The film's great achievement is showing why the life was attractive: the money, the status, the freedom from civilian constraints. And then showing exactly how it destroys everyone it touches.",
        },
        { type: "heading", content: "Casino and The Irishman" },
        {
          type: "paragraph",
          content:
            "Scorsese's Casino (1995) tells the Las Vegas story — the mob's most ambitious legitimate enterprise and its eventual loss to corporate casino operators. The Irishman (2019), his final mob film, is elegiac in a different key from The Godfather: it is about the end, about old men in nursing homes, about what this life actually costs. Robert De Niro's Frank Sheeran — who claims to have killed Jimmy Hoffa — is the mob in twilight.",
        },
        { type: "heading", content: "The Sopranos: The Mafia in Decline" },
        {
          type: "paragraph",
          content:
            "David Chase's The Sopranos (1999-2007) is perhaps the most sophisticated cultural examination of the American Mafia — Tony Soprano as a man born into a dying institution, struggling with depression, anxiety, and the fundamental incoherence of a life built on violence and loyalty in equal measure. The show's great insight is that the mob in the late 20th century is not powerful but pathetic — still dangerous, but also irrelevant, overtaken by the very American culture it had tried to emulate.",
        },
      ],
      quiz: {
        question: "What does Goodfellas show about mob life that The Godfather largely omits?",
        options: [
          {
            id: "a",
            text: "The international connections between the American Mafia and Sicilian Cosa Nostra",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Why the life was genuinely attractive — and exactly how it destroys everyone who chooses it",
            isCorrect: true,
          },
          {
            id: "c",
            text: "The role of women in mob families and their active participation in criminal operations",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The mechanics of FBI surveillance and how it dismantled the New York families",
            isCorrect: false,
          },
        ],
        explanation:
          "Goodfellas succeeds where many crime films fail by making the seduction of mob life genuinely legible — the money, status, and freedom it offered young men excluded from conventional routes to success. The film then shows, with equal honesty, the inevitable cost: the paranoia, the murders of friends, the ultimate betrayal of everyone and everything. The Godfather's tragedy is operatic; Goodfellas' is mundane and therefore more accurate.",
      },
    },
    {
      id: "am-05-legacy",
      title: "Legacy & Modern Impact",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The RICO Act: The Legal Revolution" },
        {
          type: "paragraph",
          content:
            "The Racketeer Influenced and Corrupt Organizations Act (RICO), passed in 1970, was the legal instrument that finally made it possible to prosecute the Mafia as an organisation rather than pursuing individual members for individual crimes. Under RICO, participating in the pattern of activity of a criminal enterprise was itself a crime — meaning that bosses who ordered crimes without personally committing them could be prosecuted for those crimes. RICO transformed organised crime prosecution.",
        },
        { type: "heading", content: "The Commission Trial: 1985-86" },
        {
          type: "paragraph",
          content:
            "US Attorney Rudy Giuliani's prosecution of the Commission trial (1985-86) was the culmination of the FBI's assault on the American Mafia. Using RICO, FBI surveillance recordings, and informant testimony, Giuliani prosecuted 11 mob bosses simultaneously — including the heads of four of the Five Families. All were convicted. The sentences were so long that the bosses who received them died in prison. The Commission, as a functioning body, effectively ceased to exist.",
        },
        { type: "heading", content: "The FBI's Shift Under Reagan" },
        {
          type: "paragraph",
          content:
            "The decisive FBI commitment to dismantling organised crime came under the Reagan administration in the early 1980s. The number of agents assigned to organised crime investigations was dramatically increased; RICO prosecutions were systematically pursued; and electronic surveillance — including the bugging of mob social clubs — generated the evidence base that made mass prosecution possible. The FBI's transformation from a bureaucracy skeptical of organised crime's existence (under Hoover) to one that prioritised its dismantling was the necessary institutional precondition for the mob's defeat.",
        },
        { type: "heading", content: "What Replaced the Mob" },
        {
          type: "paragraph",
          content:
            "The vacuum left by the American Mafia's decline was filled not by a successor organisation but by more fragmented criminal networks: street gangs, motorcycle clubs, and ethnically diverse criminal enterprises without the Mafia's corporate structure. In some respects this was a regression: the Commission had suppressed the most destabilising forms of criminal violence by enforcing norms. Its absence left criminal markets more chaotic, not less dangerous.",
        },
      ],
      quiz: {
        question: "Why was the RICO Act such a fundamental legal breakthrough in prosecuting organised crime?",
        options: [
          {
            id: "a",
            text: "It created mandatory minimum sentences that made cooperation with prosecutors more attractive",
            isCorrect: false,
          },
          {
            id: "b",
            text: "It allowed prosecution of criminal organisations as entities, making bosses responsible for crimes they ordered but did not personally commit",
            isCorrect: true,
          },
          {
            id: "c",
            text: "It allowed law enforcement to seize assets before conviction, depriving the mob of operating capital",
            isCorrect: false,
          },
          {
            id: "d",
            text: "It created a federal witness protection programme that made informants willing to testify",
            isCorrect: false,
          },
        ],
        explanation:
          "Before RICO, the structural challenge in prosecuting mafia bosses was that they insulated themselves from individual criminal acts through layers of intermediaries. A boss who ordered a murder was rarely present; proving his guilt under normal criminal law was nearly impossible. RICO changed the theory: participation in the pattern of a criminal enterprise was itself the crime, allowing prosecutors to hold organisational leadership responsible for the enterprise's activities.",
      },
    },
    {
      id: "am-06-reveals",
      title: "What This Reveals About Society",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Prohibition Created the Modern Mafia" },
        {
          type: "paragraph",
          content:
            "The most important lesson of the American Mafia's history is that government policy created it. Prohibition — a well-intentioned attempt to reduce alcohol consumption — handed criminal entrepreneurs a market worth billions, the capital to build vertically integrated criminal organisations, and the political corruption infrastructure to protect them. By the time Prohibition ended in 1933, the organisations it had funded were strong enough to survive its repeal by diversifying into gambling, labour racketeering, and eventually narcotics.",
        },
        { type: "heading", content: "The Policy Question" },
        {
          type: "paragraph",
          content:
            "This raises the direct policy question that the American Mafia's history makes unavoidable: which current policies are creating the criminal economies of tomorrow? The drug war — since the 1970s the dominant US criminal justice policy — has funded drug trafficking organisations on a scale that dwarfs Prohibition-era bootlegging. The question is not whether criminal markets will be supplied; they will. The question is whether they are supplied by regulated legal businesses paying taxes or by criminal organisations generating violence.",
        },
        { type: "heading", content: "The Corporation as Criminal Model" },
        {
          type: "paragraph",
          content:
            "The American Mafia's organisational evolution — from ethnic gang to Commission to National Crime Syndicate — mirrors the development of American corporate capitalism. The mob adopted the board of directors, the franchise model, the separation of ownership from management, and the principle of limited liability (members who got caught were on their own). The Mafia is, among other things, a study in how organisational models migrate between legitimate and illegitimate spheres.",
        },
        { type: "heading", content: "The Immigrant Experience" },
        {
          type: "paragraph",
          content:
            "The American Mafia also tells a story about the immigrant experience and the limits of legitimate opportunity. The Mafia recruited from communities that were excluded from legitimate routes to wealth and status — not because of cultural pathology but because of structural discrimination. The question is not why some Italian-Americans joined criminal organisations; it is why the proportion who did was always small, and what the majority found as alternatives. The Mafia is one answer to structural exclusion; it was never the only one.",
        },
      ],
      reflection: {
        prompt:
          "Prohibition created the modern American Mafia by criminalising a market with inelastic demand. Looking at today's criminal economies — drug markets, human trafficking, illegal gambling — what does the history of Prohibition suggest about the relationship between law and the criminal organisations that form around it? What would you change, and what would the consequences be?",
      },
    },
  ],
}

export default course
