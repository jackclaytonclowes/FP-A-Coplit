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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Black Hand Came First" },
        {
          type: "paragraph",
          content:
            "Millions of Italians and Sicilians arrived in American cities between the 1880s and 1920s, and some brought criminal networks with them. The Black Hand — extortion by threatening letter — was the crude predecessor of what came next.",
        },
        {
          type: "paragraph",
          content:
            "The conditions were perfect: ethnic exclusion from legitimate work, hostile police, and communities that couldn't trust the state to settle disputes. Sound familiar? It was Sicily all over again.",
        },
        { type: "heading", content: "Prohibition Made Them Rich" },
        {
          type: "paragraph",
          content:
            "The 18th Amendment criminalised alcohol and handed criminal entrepreneurs the biggest windfall in history. Al Capone's operation generated hundreds of millions in 1920s dollars. The Five Families consolidated around that wealth.",
        },
        { type: "heading", content: "Luciano Ends the War, Builds the Board" },
        {
          type: "paragraph",
          content:
            "The 1930-31 Castellammarese War nearly destroyed everything. Luciano killed both faction leaders and established the Commission — a conflict-resolution body that ran the mob like a corporation with a board of directors.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Capone: Celebrity Criminal" },
        {
          type: "paragraph",
          content:
            "Al Capone gave press interviews, attended Cubs games, and ran a bootlegging empire worth hundreds of millions. The feds couldn't nail him for any of it — so they got him for tax evasion.",
        },
        { type: "heading", content: "Luciano and Lansky: The Brains Trust" },
        {
          type: "paragraph",
          content:
            "Luciano built the corporate mob structure; Meyer Lansky figured out how to hide the money. Lansky pioneered offshore banking for criminal organisations — a trick the financial world still uses.",
        },
        { type: "heading", content: "Costello: The Mob's Diplomat" },
        {
          type: "paragraph",
          content:
            "Frank Costello preferred deals to bullets. His 1951 Kefauver Committee testimony — shown on live TV, hands only, no face — introduced America to the real face of organised crime.",
        },
        { type: "heading", content: "Gambino to Gotti: The Final Act" },
        {
          type: "paragraph",
          content:
            "Carlo Gambino manoeuvred quietly to the top; John Gotti arrived loudly in expensive suits. Gotti's underboss Sammy 'The Bull' Gravano turned witness in 1992 and brought the whole thing down.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Commission: Crime Gets a Board Meeting" },
        {
          type: "paragraph",
          content:
            "Luciano's Commission resolved disputes without bloodshed — the 'sit-down' as formal mediation between rival bosses. It was the mob's aspiration to be a business, not just a gang.",
        },
        { type: "heading", content: "Unions: The Mob's Legitimate Bank" },
        {
          type: "paragraph",
          content:
            "Control the Teamsters, control the ports, control construction — and you can extort entire industries. The Teamsters pension fund was the mob's most important financial institution.",
        },
        { type: "heading", content: "Las Vegas: The World's Best Skimming Operation" },
        {
          type: "paragraph",
          content:
            "Casino hotels financed with Teamsters money, cash skimmed before it hit the books, untaxed income for families across the country. Las Vegas was the mob's most visible legitimate-looking enterprise.",
        },
        { type: "heading", content: "Drugs: The Reluctant Pivot" },
        {
          type: "paragraph",
          content:
            "Old-school bosses avoided narcotics — too much heat, too much pressure to cooperate when arrested. The next generation ignored that wisdom. By the 1970s, heroin and cocaine were the biggest revenue stream.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Godfather: Crime as Tragedy" },
        {
          type: "paragraph",
          content:
            "Coppola's masterpiece presents the Corleones as immigrant tragedy — noble values corrupted by American ambition. It's operatic, beautiful, and a romance. The actual mob destroyed neighbourhoods and murdered rivals.",
        },
        { type: "heading", content: "Goodfellas: The Honest Version" },
        {
          type: "paragraph",
          content:
            "Scorsese shows you why the life was genuinely seductive — the money, the status, the freedom — and then shows exactly how it annihilates everyone who chooses it. That's the more accurate story.",
        },
        { type: "heading", content: "Casino and The Irishman" },
        {
          type: "paragraph",
          content:
            "Casino tells the Las Vegas story — ambition, greed, and the mob eventually losing the casino to corporations. The Irishman is the valediction: old men in nursing homes, the twilight of an era.",
        },
        { type: "heading", content: "The Sopranos: Power Turned Pathetic" },
        {
          type: "paragraph",
          content:
            "Tony Soprano is dangerous but also irrelevant — a man born into a dying institution, seeing a therapist for panic attacks. Chase's great insight: by the late 20th century, the mob wasn't powerful. It was just left behind.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "RICO: Finally, a Law That Works" },
        {
          type: "paragraph",
          content:
            "The 1970 RICO Act made it a crime just to participate in a criminal enterprise's pattern of activity. For the first time, prosecutors could go after the boss who ordered crimes — not just the soldier who committed them.",
        },
        { type: "heading", content: "The Commission Trial: All of Them at Once" },
        {
          type: "paragraph",
          content:
            "In 1985-86, Rudy Giuliani prosecuted 11 mob bosses simultaneously using RICO and FBI surveillance recordings. All were convicted. Sentences so long they died in prison. The Commission effectively ceased to exist.",
        },
        { type: "heading", content: "Reagan's FBI Gets Serious" },
        {
          type: "paragraph",
          content:
            "Under Reagan, the FBI dramatically scaled up organised crime investigations — more agents, more RICO prosecutions, bugs in every social club. Hoover had denied the mob existed; Reagan's FBI dismantled it.",
        },
        { type: "heading", content: "What Replaced the Mob" },
        {
          type: "paragraph",
          content:
            "Street gangs, motorcycle clubs, fragmented ethnic criminal networks — the mob's collapse left markets more chaotic, not safer. The Commission had suppressed the most destabilising violence by enforcing norms. Without it, the rules disappeared.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Prohibition Built the Mob" },
        {
          type: "paragraph",
          content:
            "The most important lesson: government policy created the American Mafia. Prohibition handed criminal entrepreneurs billions in capital, political corruption infrastructure, and decades of compounding advantage.",
        },
        { type: "heading", content: "The Drug War Repeated the Mistake" },
        {
          type: "paragraph",
          content:
            "The drug war since the 1970s has funded trafficking organisations on a scale that dwarfs Prohibition-era bootlegging. Criminal markets will be supplied — the only question is whether by legal businesses or by violent criminal organisations.",
        },
        { type: "heading", content: "The Mob Copied Corporate America" },
        {
          type: "paragraph",
          content:
            "The mob adopted the board of directors, the franchise model, and the separation of ownership from management. Organised crime and American capitalism evolved the same organisational forms at the same time.",
        },
        { type: "heading", content: "Exclusion Explains Recruitment" },
        {
          type: "paragraph",
          content:
            "The Mafia recruited from communities shut out of legitimate opportunity — not from cultural pathology, but from structural discrimination. The real question is what the majority who didn't join the mob did instead.",
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
