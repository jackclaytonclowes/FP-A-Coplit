import type { Course } from "@/types"

const course: Course = {
  id: "political-violence",
  title: "Political Violence & Terrorism",
  slug: "political-violence",
  description:
    "An educational examination of political violence — the IRA, ETA, Red Brigades, and Baader-Meinhof Group — their ideologies, contexts, and the long historical and political forces that produced them.",
  category: "crime",
  accentColor: "#2a2a2a",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Belfast_murals.jpg/1280px-Belfast_murals.jpg",
  estimatedHours: 3,
  tags: ["political-violence", "terrorism", "ira", "history", "ideology"],
  lessons: [
    {
      id: "pv-01-origins",
      title: "Origins & Structure",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Political Violence Doesn't Come From Nowhere" },
        {
          type: "paragraph",
          content:
            "The preconditions are consistent: a legitimate grievance unresolved for generations, no democratic channel to address it, an ideology that justifies force, and a social network that reinforces commitment. Absent any one of these, political violence rarely takes hold.",
        },
        {
          type: "paragraph",
          content:
            "Terrorism targets civilians to produce fear and polarisation; guerrilla warfare targets military and state infrastructure. In practice, most organisations combined both — and the labels were often applied politically, not analytically.",
        },
        { type: "heading", content: "The IRA: Fifty Years of Discrimination First" },
        {
          type: "paragraph",
          content:
            "Northern Ireland's Catholic nationalist minority lived under Protestant unionist rule from 1921 to the late 1960s — with systematic discrimination in jobs, housing, and politics. A civil rights movement modelled on America's met state violence, and the Provisional IRA emerged from that encounter.",
        },
        { type: "heading", content: "ETA, Red Brigades, Baader-Meinhof: Three Origins" },
        {
          type: "paragraph",
          content:
            "ETA arose from Franco's suppression of Basque identity. The Red Brigades grew from Italy's 'Years of Lead' — a decade when democratic politics seemed irreparably corrupt. The RAF believed West Germany was just fascism in a new suit.",
        },
      ],
      quiz: {
        question: "What specific historical conditions preceded and gave rise to the Provisional IRA's campaign in Northern Ireland?",
        options: [
          {
            id: "a",
            text: "The IRA was founded in direct response to British military conscription of Irish citizens",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Fifty years of systematic discrimination following partition, then state violence against the civil rights movement in the late 1960s",
            isCorrect: true,
          },
          {
            id: "c",
            text: "The British government's refusal to negotiate Irish reunification following World War II",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Economic inequality between Ireland and Britain that left Northern Ireland disproportionately poor",
            isCorrect: false,
          },
        ],
        explanation:
          "The Provisional IRA emerged from a specific sequence: partition in 1921 created a Catholic nationalist minority under Protestant unionist government; systematic discrimination in employment, housing, and political representation followed for fifty years; a civil rights movement modelled on American civil rights in the late 1960s challenged this system; state violence against civil rights marchers — most dramatically on Bloody Sunday in January 1972 — discredited constitutional approaches and drove recruitment to armed republicanism.",
      },
    },
    {
      id: "pv-02-figures",
      title: "Key Figures",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Collins: Guerrilla Genius at 31" },
        {
          type: "paragraph",
          content:
            "Michael Collins invented the model for modern urban insurgency — using informer networks to identify and systematically assassinate British intelligence officers. His Bloody Sunday (1920) wiped out 14 agents in a single morning. He was 31.",
        },
        { type: "heading", content: "Bobby Sands: Death as Politics" },
        {
          type: "paragraph",
          content:
            "Bobby Sands was elected to the British Parliament while on hunger strike in the Maze Prison. He died after 66 days. Nine others followed. His death didn't win political status for prisoners — but it revealed that electoral politics could amplify the armed campaign.",
        },
        { type: "heading", content: "Ulrike Meinhof: The Journalist Who Chose Bombs" },
        {
          type: "paragraph",
          content:
            "Meinhof moved from respected left-wing columnist to RAF co-founder — one of the most studied trajectories in the literature of political violence. Her prison writings document how extreme circumstances and group dynamics transform a person's thinking.",
        },
        { type: "heading", content: "Aldo Moro: The Worst Possible Target" },
        {
          type: "paragraph",
          content:
            "The Red Brigades kidnapped Italy's five-time Prime Minister on the morning he was due to present a historic coalition to parliament. After 55 days and no negotiation, they murdered him. The spectacle turned Italian public opinion permanently against them.",
        },
      ],
      quiz: {
        question: "Why was Bobby Sands' hunger strike and death politically transformative for Irish republicanism?",
        options: [
          {
            id: "a",
            text: "Because it secured the release of IRA prisoners and the recognition of political status in British law",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Because the political mobilisation it generated showed that electoral politics could complement armed campaign, opening the strategy of the Armalite and the ballot box",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Because it produced an immediate change in British government policy on Northern Ireland",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Because it persuaded the United States to withdraw financial support from loyalist organisations",
            isCorrect: false,
          },
        ],
        explanation:
          "The hunger strikes did not achieve their immediate objective — Thatcher refused to grant political status. But Sands' election to Westminster during the hunger strike, and the 100,000 people who attended his funeral, demonstrated a political mobilisation that the IRA's leadership recognised. The lesson was that political and military strategies were not alternatives but complements. Sinn Féin's subsequent entry into electoral politics — which eventually led to the Good Friday Agreement — traces directly to what the hunger strikes revealed.",
      },
    },
    {
      id: "pv-03-methods",
      title: "Methods & Operations",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Three Frameworks That Justify Violence" },
        {
          type: "paragraph",
          content:
            "Revolutionary theory: violence awakens the masses and reveals state oppression. National liberation theory: colonised peoples have an inherent right to armed resistance. Anti-fascist theory: when democracy is a lie, democratic means are insufficient. All three appear repeatedly across the cases in this course.",
        },
        { type: "heading", content: "The Group Keeps You In" },
        {
          type: "paragraph",
          content:
            "Research consistently finds that ideology recruits people but the group retains them. Leaving an organisation means abandoning your entire social world, not just a cause. This explains why groups like the Red Brigades continued long after their strategy had clearly failed.",
        },
        { type: "heading", content: "The Strategy of Tension Always Backfired" },
        {
          type: "paragraph",
          content:
            "The Red Brigades and RAF both believed spectacular violence would force states to reveal their repressive nature and radicalise ordinary people. In almost every case, the opposite happened: state overreaction generated sympathy for victims, not recruits.",
        },
        { type: "heading", content: "The IRA's Intelligence War" },
        {
          type: "paragraph",
          content:
            "The Provisional IRA evolved from battalion structures to small compartmentalised cells precisely because British intelligence kept infiltrating them. Three decades of survival against a far more powerful state is a testament to that operational discipline.",
        },
      ],
      quiz: {
        question: "Why did the 'strategy of tension' — provoking state overreaction to radicalise the population — almost always fail in practice?",
        options: [
          {
            id: "a",
            text: "Because democratic states were legally prohibited from overreacting to political violence",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Because state overreaction, where it occurred, alienated rather than radicalised the populations the groups claimed to represent",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Because media coverage of political violence consistently framed groups as criminals rather than revolutionaries",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Because Western democratic states had learned from colonial experience not to escalate against insurgents",
            isCorrect: false,
          },
        ],
        explanation:
          "The strategy of tension assumes that populations are latent revolutionaries waiting to be awakened by the spectacle of state violence. The Red Brigades, the RAF, and others all operated on this theory. In practice, ordinary people watching violence escalate around them rarely concluded that what was needed was more violence — they wanted order and safety. State overreaction generated sympathy for victims, not recruits for the cause. The murder of Aldo Moro, intended to expose the Italian state, instead turned public opinion against the Red Brigades permanently.",
      },
    },
    {
      id: "pv-04-culture",
      title: "Cultural Representation",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Battle of Algiers: Both Sides, No Villains" },
        {
          type: "paragraph",
          content:
            "Pontecorvo's 1966 film presents the FLN insurgency and French military counterinsurgency with equal analytical clarity — neither side simplified into heroes or villains. It shows how tactical success (dismantling the FLN network through torture) can be a strategic failure that accelerates withdrawal.",
        },
        {
          type: "paragraph",
          content:
            "The US Army used it as a training film before Iraq. Multiple insurgent groups used it as a tactical manual. The same film, teaching both sides simultaneously — that's how analytically neutral it is.",
        },
        { type: "heading", content: "Collins, Harry's Game, and the Troubles" },
        {
          type: "paragraph",
          content:
            "Neil Jordan's Michael Collins presents a reluctant warrior who knew the treaty he signed would lead to civil war. Harry's Game (ITV, 1982) — an undercover British soldier in Belfast — remains the most praised TV treatment of the Troubles, refusing simple moral frameworks.",
        },
        { type: "heading", content: "The Baader Meinhof Complex and Heaney" },
        {
          type: "paragraph",
          content:
            "Uli Edel's film takes seriously the question of why intelligent people chose political violence without endorsing the choice. Seamus Heaney's poetry — Field Work and North especially — navigates the moral complexity of violence in a community he was part of, without resolution.",
        },
        { type: "heading", content: "McNamee: When Violence Is Just a Licence" },
        {
          type: "paragraph",
          content:
            "Eoin McNamee's Resurrection Man — based on the Shankill Butchers — asks what happens when the political cause is just a cover for personalities attracted to violence for its own sake. It's a corrective to every ideological account that ignores individual pathology.",
        },
      ],
      quiz: {
        question: "Why is The Battle of Algiers considered the most analytically serious film about political violence?",
        options: [
          {
            id: "a",
            text: "Because it was made with the cooperation of surviving FLN fighters who verified its accuracy",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Because it presents both insurgents and counterinsurgents with analytical clarity, showing how tactical success can be strategic failure",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Because it was the first film to use documentary techniques to depict political violence realistically",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Because its accurate portrayal of torture led directly to changes in French military law",
            isCorrect: false,
          },
        ],
        explanation:
          "The Battle of Algiers refuses the simplification that most films about political violence require. Colonel Mathieu — the French military officer who dismantles the FLN network — is presented as intelligent, disciplined, and analytically honest about what he is doing, including the torture. The film's central insight is that France could win the battle (dismantling the FLN network in Algiers) while losing the war (the political struggle for Algerian independence). This distinction between tactical and strategic success remains the most important analytical contribution any film has made to the study of counterinsurgency.",
      },
    },
    {
      id: "pv-05-legacy",
      title: "Legacy & Modern Impact",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The IRA: Partial Win" },
        {
          type: "paragraph",
          content:
            "The Good Friday Agreement (1998) didn't deliver a united Ireland — but it delivered power-sharing, recognition of Irish identity, cross-border institutions, and the end of systematic discrimination. Sinn Féin is now the largest party in Northern Ireland by vote share.",
        },
        { type: "heading", content: "ETA: Total Failure" },
        {
          type: "paragraph",
          content:
            "ETA dissolved in 2018 after 59 years and 800+ deaths. It achieved nothing. Basque autonomy and cultural recognition were delivered through democracy after Franco — not through ETA's violence. It spent four decades fighting for a cause that had already been won.",
        },
        { type: "heading", content: "Red Brigades and RAF: Counter-Productive" },
        {
          type: "paragraph",
          content:
            "Both organisations destroyed the causes they claimed to represent. The Red Brigades' murder of Aldo Moro made the political alliances Moro was building impossible. The RAF reinforced the German state. Violence conducted against populations who don't support it typically strengthens what it opposes.",
        },
        { type: "heading", content: "The Pattern on Effectiveness" },
        {
          type: "paragraph",
          content:
            "Violence rarely achieves stated goals. It frequently damages the movements that use it more than the states it targets. It's most effective when combined with political mobilisation — and it tends to outlast its original political conditions by decades.",
        },
      ],
      quiz: {
        question: "Why is ETA's dissolution in 2018 considered an example of total political failure?",
        options: [
          {
            id: "a",
            text: "Because ETA's final surrender was accompanied by a Spanish government rejection of Basque autonomy",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Because Basque autonomy and cultural recognition were secured through democracy after Franco, not through ETA's violence",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Because ETA's leadership was entirely imprisoned before it could negotiate any political settlement",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Because ETA achieved independence for the Basque region only briefly before Spain reasserted control",
            isCorrect: false,
          },
        ],
        explanation:
          "ETA's failure is analytically interesting because the cause it claimed to fight for — Basque cultural identity, language, and regional autonomy — was substantially achieved through democratic means following Franco's death in 1975. Spain's transition to democracy granted the Basque Country the most extensive regional autonomy in Europe. ETA's armed campaign continued for four more decades, killing hundreds of people, in pursuit of goals that had already been substantially delivered by other means. The violence had no political justification left — it had become self-perpetuating.",
      },
    },
    {
      id: "pv-06-reveals",
      title: "What This Reveals About Society",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Political Violence Is a Failure of Imagination" },
        {
          type: "paragraph",
          content:
            "Political violence is what happens when people believe they have no other options. That belief may be accurate or a misperception — but either way, the analytical task is understanding the conditions that produced it, not just condemning the outcome.",
        },
        { type: "heading", content: "Always Ask: What Was the Alternative?" },
        {
          type: "paragraph",
          content:
            "For Catholics in Northern Ireland after Bloody Sunday, what was the non-violent alternative? The question isn't rhetorical. Understanding why the alternatives weren't available or credible requires understanding state failure, betrayal, and the closure of political channels.",
        },
        { type: "heading", content: "States Create the Conditions Too" },
        {
          type: "paragraph",
          content:
            "Bloody Sunday generated more IRA recruits than any propaganda operation. States are rarely simply the victims of political violence — they are often participants in creating the conditions for it. This is uncomfortable but analytically essential.",
        },
        { type: "heading", content: "Condemn and Understand — Both Are Required" },
        {
          type: "paragraph",
          content:
            "The bombing of civilian spaces is wrong. Understanding why it happened requires engaging seriously with the conditions that produced it. These aren't contradictory positions. Condemnation without understanding changes nothing. Understanding without condemnation betrays the victims.",
        },
      ],
      reflection: {
        prompt:
          "Political violence emerges where people believe they have no other options. The IRA emerged after Bloody Sunday; the Red Brigades after years of political deadlock; the RAF from a generation that felt democracy was a lie. In each case, the question is what made the peaceful alternative unavailable or incredible. Think of a political context — historical or contemporary — where political violence has emerged or is threatening to emerge. What closed the peaceful alternatives? And what would it take to reopen them?",
      },
    },
  ],
}

export default course
