import type { Course } from "@/types"

const course: Course = {
  id: "political-violence",
  title: "Political Violence & Terrorism",
  slug: "political-violence",
  description:
    "An educational examination of political violence — the IRA, ETA, Red Brigades, and Baader-Meinhof Group — their ideologies, contexts, and the long historical and political forces that produced them.",
  category: "crime",
  accentColor: "#2a2a2a",
  estimatedHours: 3,
  tags: ["political-violence", "terrorism", "ira", "history", "ideology"],
  lessons: [
    {
      id: "pv-01-origins",
      title: "Origins & Structure",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Conditions That Produce Political Violence" },
        {
          type: "paragraph",
          content:
            "Political violence does not emerge from nowhere. Its preconditions are consistent across historical cases: a legitimate grievance that has persisted across generations without political resolution; the absence or closure of democratic channels through which that grievance might be addressed; an ideological framework that legitimises violence as both necessary and morally justified; and a social network — often generational, often familial — that transmits commitment and provides mutual reinforcement.",
        },
        {
          type: "paragraph",
          content:
            "The analytic distinction between terrorism and guerrilla warfare matters: terrorism targets civilians to produce political effects (fear, overreaction, polarisation); guerrilla warfare targets military and state infrastructure. In practice, most organisations have combined both, and the labels have often been applied politically rather than analytically.",
        },
        { type: "heading", content: "The IRA: Partition as Foundational Injustice" },
        {
          type: "paragraph",
          content:
            "The Irish Republican Army's campaign of the late 20th century — the Troubles, 1968-1998 — was rooted in the 1921 partition of Ireland, which left a Catholic nationalist minority under Protestant unionist government in Northern Ireland. Fifty years of systematic discrimination in employment, housing, and political representation preceded the Troubles. The civil rights movement of the late 1960s — modelled explicitly on American civil rights — met state violence, and out of that encounter the Provisional IRA emerged as an armed response.",
        },
        { type: "heading", content: "ETA, Red Brigades, and Baader-Meinhof" },
        {
          type: "paragraph",
          content:
            "ETA (Euskadi Ta Askatasuna — Basque Homeland and Liberty) emerged from Franco's suppression of Basque language, culture, and identity during the Spanish dictatorship. The Red Brigades arose in Italy in the 1970s from the 'Years of Lead' — a period of political violence from both far-left and far-right in which the democratic process seemed to many radicals irreparably corrupt. The Baader-Meinhof Group (RAF — Red Army Faction) emerged in West Germany from the conviction that the Federal Republic was a continuation of fascism — that the Nazi generation had not been purged but had merely changed clothes.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Michael Collins: The Founder of Modern Guerrilla Warfare" },
        {
          type: "paragraph",
          content:
            "Michael Collins (1890-1922) was the military and intelligence genius of the Irish War of Independence (1919-1921). His innovation was the application of guerrilla tactics to urban intelligence warfare: using a network of informers to identify British intelligence officers, then assassinating them systematically. His Bloody Sunday (November 1920) — the assassination of 14 British intelligence agents in a single morning — demonstrated that a colonial power's intelligence apparatus could be destroyed by organised insurgent intelligence. Collins was 31 years old.",
        },
        { type: "heading", content: "Bobby Sands: Death as Political Act" },
        {
          type: "paragraph",
          content:
            "Bobby Sands (1954-1981) was an IRA prisoner who led the 1981 hunger strike in the Maze Prison, demanding recognition of IRA prisoners as political rather than criminal prisoners. He was elected to the British Parliament while on hunger strike, receiving 30,000 votes. He died after 66 days on 5 May 1981, followed by nine other hunger strikers. His death and the deaths of his companions produced a political transformation: the strategy of combining armed campaign with electoral politics — 'the Armalite and the ballot box' — emerged directly from the political mobilisation his death enabled.",
        },
        { type: "heading", content: "Ulrike Meinhof: The Intellectual's Trajectory" },
        {
          type: "paragraph",
          content:
            "Ulrike Meinhof (1934-1976) was a prominent West German journalist — a columnist for the left-wing magazine Konkret — who became co-founder of the Red Army Faction. Her trajectory from respectable intellectual to imprisoned terrorist is one of the most analysed cases in the study of political violence: how does a person who began with words move to bombs? Her writings from prison — increasingly disconnected from her earlier lucid journalism — document the psychological transformation that extreme circumstances and group dynamics produce.",
        },
        { type: "heading", content: "Aldo Moro: The Ultimate Victim" },
        {
          type: "paragraph",
          content:
            "Aldo Moro was five times Italian Prime Minister and the architect of the 'Historic Compromise' — a proposed governing alliance between the Christian Democratic and Communist parties that would have been an extraordinary political achievement. On 16 March 1978, he was kidnapped by the Red Brigades on the morning he was due to present this coalition to parliament. He was held for 55 days, during which his captors issued communiqués and the Italian state refused negotiation. He was murdered on 9 May 1978. The Red Brigades' greatest political spectacle was also the beginning of their end: the murder turned Italian public opinion decisively against them.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Ideological Frameworks That Justify Violence" },
        {
          type: "paragraph",
          content:
            "Every organisation that engages in political violence develops ideological frameworks that justify it to its own members. Three main frameworks recur across the cases in this course. Revolutionary theory holds that violence will awaken the masses — that the spectacle of violent resistance will radicalise the passive and reveal the true nature of an oppressive system. National liberation theory holds that peoples under colonial domination have an inherent right to armed resistance. Anti-fascist theory holds that when democratic institutions are themselves corrupt or continuations of fascism, democratic means are insufficient and violent resistance is the only honest response.",
        },
        { type: "heading", content: "Group Dynamics and the Maintenance of Commitment" },
        {
          type: "paragraph",
          content:
            "Research on political violence consistently identifies the group itself — not ideology — as the primary mechanism maintaining commitment to violence. Once inside an organisation, members become dependent on the group for identity, social bonds, and practical survival. Leaving requires not just abandoning a cause but abandoning the community that has become one's entire social world. Ideology provides the moral vocabulary; the group provides the motivation to continue. This is why groups that have clearly failed to achieve their stated goals — like the Red Brigades by the late 1970s — continue to exist.",
        },
        { type: "heading", content: "The Strategy of Tension" },
        {
          type: "paragraph",
          content:
            "The 'strategy of tension' — deliberately escalating violence to force a polarised reaction — was a theory pursued by multiple groups. The Red Brigades believed that spectacular violence would force the Italian state to reveal its repressive nature, radicalising the population. The RAF believed the German state's response to their actions would expose its fascist continuity. In almost every case, the theory was wrong: state overreaction, where it occurred, alienated rather than radicalised the populations the groups claimed to represent.",
        },
        { type: "heading", content: "The IRA's Cell Structure and Intelligence War" },
        {
          type: "paragraph",
          content:
            "The Provisional IRA evolved sophisticated operational security over three decades of conflict. The shift from the traditional battalion structure to small, compartmentalised cells — each cell knowing only its own members and immediate contacts — was a response to British intelligence penetration. The intelligence war between British security services and the IRA was as central to the Troubles as the violence itself: informers, double agents, and electronic surveillance all shaped the conflict's trajectory. The IRA's long survival against a far more powerful state was a testament to this operational discipline.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Battle of Algiers: The Definitive Film" },
        {
          type: "paragraph",
          content:
            "Gillo Pontecorvo's The Battle of Algiers (1966) is the most analytically important film about political violence ever made. A fictionalised account of the Algerian FLN's campaign against French colonial rule in Algiers, it presents both sides — the insurgents and the French military — with equal analytic clarity, refusing to simplify either into heroes or villains. It shows how the French military, under Colonel Mathieu, systematically dismantled the FLN network through torture and intelligence — and how this tactical success was a strategic failure that contributed to France's eventual withdrawal.",
        },
        {
          type: "paragraph",
          content:
            "The film's dual audience is historically documented: it was used as a training film by the US Army before the Iraq War, and as a tactical manual by multiple insurgent groups. This duality — the same film teaching counterinsurgency and insurgency simultaneously — captures the film's analytical neutrality perfectly.",
        },
        { type: "heading", content: "Michael Collins and The Troubles in Film" },
        {
          type: "paragraph",
          content:
            "Neil Jordan's Michael Collins (1996), starring Liam Neeson, is the most significant cinematic treatment of Irish political violence — a biopic that presents Collins as a reluctant warrior who understood that the treaty he signed was inadequate and would lead to civil war. The film's sympathy for Collins sits alongside genuine engagement with the violence he directed. Harry's Game (ITV, 1982) remains the most praised television treatment of the Troubles — a thriller about an undercover British soldier in Belfast that refuses simple moral frameworks.",
        },
        { type: "heading", content: "The Baader Meinhof Complex and Literature" },
        {
          type: "paragraph",
          content:
            "Uli Edel's The Baader Meinhof Complex (2008), based on Stefan Aust's definitive book on the RAF, is an unusually comprehensive account of a political violence organisation from recruitment to destruction. It is notable for taking seriously the question of why intelligent, educated people chose political violence without endorsing their choice. Seamus Heaney's poetry represents the finest literary engagement with the Irish Troubles — his Field Work collection and North in particular navigating the moral complexity of violence in a community he was part of without resolution.",
        },
        { type: "heading", content: "Eoin McNamee and the Literature of Violence" },
        {
          type: "paragraph",
          content:
            "Eoin McNamee's Resurrection Man (1994) — based on the Shankill Butchers, a loyalist gang that murdered Catholics at random in 1970s Belfast — is among the most disturbing literary accounts of political violence in British literature. McNamee is interested in the psychology of perpetrators: not in the ideology but in the personality types attracted to violence for its own sake, for whom the political cause is a licence rather than a motivation. It is a corrective to ideological accounts of political violence that can obscure the role of individual pathology.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The IRA: Partial Success" },
        {
          type: "paragraph",
          content:
            "The IRA is the most analytically interesting case of political violence in the 20th century because it is the clearest example of partial success. The Good Friday Agreement (1998) did not deliver a united Ireland — the IRA's stated objective — but it did deliver political power-sharing, the recognition of Irish identity in Northern Ireland, cross-border institutions, and the end of systematic discrimination. Sinn Féin is today the largest party in Northern Ireland by vote share. The IRA achieved constitutional change if not its ultimate goal.",
        },
        { type: "heading", content: "ETA: Total Failure" },
        {
          type: "paragraph",
          content:
            "ETA dissolved in 2018 after 59 years of armed activity and more than 800 deaths. It achieved nothing. Basque culture, language, and regional autonomy — the causes ETA claimed to fight for — were secured through democratic means after Franco's death in 1975, not through violence. ETA's campaign continued for decades after the political conditions that had originally generated it had been resolved. It became a self-sustaining organisation that had outlived its cause and was unable to stop.",
        },
        { type: "heading", content: "The Red Brigades and RAF: Counter-Productive Violence" },
        {
          type: "paragraph",
          content:
            "Both the Red Brigades and the RAF destroyed the causes they claimed to represent. The Red Brigades' violence — culminating in the murder of Aldo Moro — turned Italian public opinion against the far-left and made the political alliances Moro was building impossible. The RAF's campaign reinforced the German state and marginalised the left-wing movements it claimed to advance. Both cases demonstrate that political violence conducted against populations who do not support it, in pursuit of goals those populations do not share, typically strengthens what it claims to oppose.",
        },
        { type: "heading", content: "The Lesson on Political Violence and Its Effectiveness" },
        {
          type: "paragraph",
          content:
            "The comparative record on terrorism's effectiveness suggests a pattern: violence rarely achieves the stated goals of the groups that use it; it frequently damages the movements that use it more than the states it targets; it tends to be most effective when combined with political mobilisation (as the IRA demonstrated); and it tends to persist well beyond the point at which its original political conditions have been resolved. The organisations that are hardest to stop are those that have become self-sustaining communities of identity regardless of whether their cause retains relevance.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Political Violence as the Limit of Political Imagination" },
        {
          type: "paragraph",
          content:
            "Political violence is what happens when people — or a specific subset of people — believe they have no other options. This belief may be accurate (where channels for political change are genuinely closed) or it may be a misperception (where channels exist but are not recognised or trusted). In either case, the analytical task is to understand the conditions that produce this belief, not merely to condemn its consequences.",
        },
        { type: "heading", content: "The Question of Alternatives" },
        {
          type: "paragraph",
          content:
            "The most important question about any political violence is always: what was the alternative? For Catholics in Northern Ireland in 1968-1972, after peaceful civil rights marches were met with state violence and Bloody Sunday, what was the non-violent alternative? The question is not rhetorical. Understanding it requires understanding why the alternatives that might seem obvious in retrospect were not available or credible to those who chose violence. Often the answer involves state failure, betrayal, or the closure of political channels.",
        },
        { type: "heading", content: "The Follow-Up: What Made the Alternative Unavailable?" },
        {
          type: "paragraph",
          content:
            "The follow-up question is equally important: what made the alternative unavailable? In almost every case, the conditions that produced political violence include deliberate state choices — to repress civil rights movements, to ignore or deny legitimate grievances, to respond to protest with disproportionate force. The British army's actions on Bloody Sunday — killing 14 civil rights marchers — produced more IRA recruits than any propaganda operation could have. The state is rarely simply the victim of political violence; it is often a participant in creating the conditions for it.",
      },
        { type: "heading", content: "Condemning and Understanding" },
        {
          type: "paragraph",
          content:
            "The study of political violence requires holding two things simultaneously: that the acts themselves — the bombing of civilian spaces, the murder of individuals, the use of terror as a political instrument — are wrong; and that understanding why they happened requires engaging seriously with the conditions that produced them. These are not contradictory positions. Condemnation without understanding produces no insight and no capacity to prevent future violence. Understanding without condemnation loses the moral clarity that the victims of violence deserve. The two are both necessary.",
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
