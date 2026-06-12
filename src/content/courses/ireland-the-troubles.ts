import type { Course } from "@/types"

const course: Course = {
  id: "ireland-the-troubles",
  title: "Ireland & The Troubles",
  slug: "ireland-the-troubles",
  description:
    "The history of Ireland's partition and the thirty-year conflict known as The Troubles — its origins in British colonialism, its violent decades, and the fragile peace of the Good Friday Agreement.",
  category: "history",
  accentColor: "#1a4a2a",
  estimatedHours: 3,
  tags: ["ireland", "conflict", "partition", "republican", "british"],
  lessons: [
    {
      id: "it-01-origins",
      title: "Origins & Context",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Fault Line Was Built in 1610" },
        {
          type: "paragraph",
          content:
            "The Plantation of Ulster under James I confiscated Catholic land and handed it to Protestant settlers from England and Scotland. That demographic and religious division became the fault line around which every subsequent conflict organised itself.",
        },
        {
          type: "paragraph",
          content:
            "The Great Famine of 1845–52 killed one million and drove out another million. For many Irish nationalists, British laissez-faire ideology that prevented intervention wasn't a policy failure — it was deliberate neglect.",
        },
        { type: "heading", content: "A Military Failure That Became a Political Triumph" },
        {
          type: "paragraph",
          content:
            "The Easter Rising of 1916 was crushed within a week. Then the British executed fifteen leaders over ten days and created republican martyrs. Irish public opinion radicalised overnight.",
        },
        {
          type: "paragraph",
          content:
            "The 1921 Anglo-Irish Treaty gave 26 counties independence. Six Ulster counties stayed British. Nobody was satisfied. A bitter civil war followed in the south, and the seeds of The Troubles were planted.",
        },
      ],
      quiz: {
        question:
          "Why did the Easter Rising of 1916 succeed politically even though it was suppressed militarily within a week?",
        options: [
          {
            id: "a",
            text: "The rebels secured international recognition from Germany and the United States before surrendering",
            isCorrect: false,
          },
          {
            id: "b",
            text: "British execution of the rebel leaders turned them into martyrs and radicalised Irish public opinion",
            isCorrect: true,
          },
          {
            id: "c",
            text: "The Rising demonstrated that Irish forces could hold Dublin against professional British troops",
            isCorrect: false,
          },
          {
            id: "d",
            text: "It forced the British government to begin immediate negotiations on Irish independence",
            isCorrect: false,
          },
        ],
        explanation:
          "The Rising was militarily crushed in days, and its leaders were initially unpopular with many Dubliners whose city had been damaged in the fighting. The British response — executing fifteen leaders over ten days — transformed unpopular rebels into republican saints. Pearse and Connolly became martyrs, and the political landscape shifted decisively toward republicanism. The lesson — that British overreaction was the rebels' most powerful recruiting tool — would recur throughout the following century.",
      },
    },
    {
      id: "it-02-events",
      title: "Key Events",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Civil Rights First, Then Armed Conflict" },
        {
          type: "paragraph",
          content:
            "The Northern Ireland Civil Rights Movement demanded equal voting rights, fair housing, and an end to job discrimination — not a united Ireland, just equal citizenship. Marches were attacked. Police complied. British troops arrived.",
        },
        {
          type: "paragraph",
          content:
            "Catholics initially welcomed the Army as protection from loyalist violence. Within years, that relationship had inverted completely.",
        },
        { type: "heading", content: "Internment and Bloody Sunday: Two Radicalising Events" },
        {
          type: "paragraph",
          content:
            "Internment without trial (1971) locked up mostly innocent Catholics and radicalised the community it was meant to suppress. Then on 30 January 1972, British paratroopers shot 26 unarmed civilians in Derry, killing fourteen.",
        },
        {
          type: "paragraph",
          content:
            "IRA recruitment surged. The British Embassy in Dublin was burned. The Saville Inquiry in 2010 — 38 years later — finally confirmed the killings were unjustified.",
        },
        { type: "heading", content: "Bobby Sands and the Hunger Strikes" },
        {
          type: "paragraph",
          content:
            "Republican prisoners demanded political status in 1981. Bobby Sands was elected to Parliament while on hunger strike, then died after 66 days. Nine more followed. The ballot box suddenly looked as powerful as the Armalite.",
        },
      ],
      quiz: {
        question:
          "What was the political consequence of the 1981 IRA hunger strikes beyond the immediate crisis?",
        options: [
          {
            id: "a",
            text: "The British government agreed to grant political status to all republican prisoners",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Bobby Sands's election to Parliament demonstrated electoral viability and gave birth to Sinn Féin's political strategy",
            isCorrect: true,
          },
          {
            id: "c",
            text: "International pressure forced the United States to suspend military aid to Britain",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The IRA declared a ceasefire recognising that military tactics had failed to achieve political goals",
            isCorrect: false,
          },
        ],
        explanation:
          "Bobby Sands's election to Westminster as an MP while on hunger strike — and the enormous public support for the hunger strikers internationally — showed republican strategists that electoral politics could achieve what the armed campaign could not. The phrase attributed to Sinn Féin strategist Danny Morrison — 'with a ballot paper in this hand and an Armalite in this other' — captured the dual-track approach. The hunger strikes were the origin of Sinn Féin's transformation from political wing of the IRA to a major electoral party.",
      },
    },
    {
      id: "it-03-figures",
      title: "Major Figures",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Michael Collins: Genius, Negotiator, Killed at 31" },
        {
          type: "paragraph",
          content:
            "Collins built an intelligence network inside Dublin Castle — British HQ — that made British rule untenable. He negotiated the 1921 Treaty. His old comrades shot him dead in a Cork ambush eight months later.",
        },
        {
          type: "paragraph",
          content:
            "Éamon de Valera, who rejected the Treaty as betrayal, survived to dominate Irish politics for fifty years. His Catholic, rural, self-sufficient vision of Ireland shaped the Republic until the 1960s.",
        },
        { type: "heading", content: "The Peace Architects: Former Enemies at One Table" },
        {
          type: "paragraph",
          content:
            "Gerry Adams and Martin McGuinness led Sinn Féin through the extraordinary internal work of convincing the republican movement that negotiation wasn't surrender. McGuinness — an IRA commander during Bloody Sunday — ended his life shaking Queen Elizabeth's hand.",
        },
        {
          type: "paragraph",
          content:
            "Ian Paisley spent fifty years saying 'Never, Never, Never.' In 2007, now in his eighties, he became First Minister in a power-sharing government with Martin McGuinness. John Hume and David Trimble won the Nobel Prize. Blair and Ahern drove the final deal.",
        },
      ],
      quiz: {
        question:
          "What made Michael Collins's role in the Anglo-Irish Treaty negotiations so politically devastating within the republican movement?",
        options: [
          {
            id: "a",
            text: "He accepted terms that left the Irish Free State as a dominion under the British Crown rather than a fully independent republic",
            isCorrect: true,
          },
          {
            id: "b",
            text: "He agreed to dissolve the IRA before British forces had withdrawn from Irish soil",
            isCorrect: false,
          },
          {
            id: "c",
            text: "He accepted partition without requiring a referendum in the six northern counties",
            isCorrect: false,
          },
          {
            id: "d",
            text: "He signed without consulting Éamon de Valera, who had sent him as a negotiating representative",
            isCorrect: false,
          },
        ],
        explanation:
          "The Treaty created an Irish Free State — not a republic — as a dominion within the British Commonwealth, with members of the Dáil required to swear an oath of allegiance to the Crown. For republicans who had fought and died for an Irish Republic, this was a fundamental betrayal of the cause. Collins argued it was a 'stepping stone' to full independence; de Valera and others rejected it absolutely. The resulting civil war split the republican movement along lines that shaped Irish politics for generations.",
      },
    },
    {
      id: "it-04-turning",
      title: "Turning Points",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Bloody Sunday: The Radicalising Event" },
        {
          type: "paragraph",
          content:
            "Fourteen unarmed civilians shot dead at a civil rights march. IRA recruitment hit levels political argument never achieved. The initial Widgery cover-up compounded the damage. Britain didn't formally apologise until 2010.",
        },
        { type: "heading", content: "The Anglo-Irish Agreement: An Irish Dimension Acknowledged" },
        {
          type: "paragraph",
          content:
            "Thatcher's 1985 agreement gave Dublin a formal consultative role in Northern Irish affairs. Unionists were furious. But the precedent was set: the Irish dimension of Northern Irish politics was now officially real.",
        },
        {
          type: "paragraph",
          content:
            "By the late 1980s, back channels between British intelligence and the IRA leadership had reached the same conclusion: neither side could win militarily. That mutual recognition of stalemate was the precondition for negotiation.",
        },
        { type: "heading", content: "Good Friday, 10 April 1998" },
        {
          type: "paragraph",
          content:
            "Power-sharing. North-South bodies. Decommissioning. Early prisoner release. The Republic dropped its territorial claim. Both sides voted yes. A fragile peace became a real one.",
        },
      ],
      quiz: {
        question:
          "What mutual recognition made IRA-British government negotiations possible in the early 1990s?",
        options: [
          {
            id: "a",
            text: "Both sides acknowledged that the 1985 Anglo-Irish Agreement had created a framework for a political settlement",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Both sides recognised a military stalemate — the IRA could not defeat the Army, and Britain could not eliminate the IRA",
            isCorrect: true,
          },
          {
            id: "c",
            text: "American diplomatic pressure following IRA fundraising in the United States created an incentive for both sides to negotiate",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The Irish government's back-channel communications had persuaded the IRA leadership that a political settlement was achievable",
            isCorrect: false,
          },
        ],
        explanation:
          "The concept of 'hurting stalemate' — when both sides in a conflict recognise they cannot win militarily — is a precondition for successful peace negotiations. By the late 1980s, IRA leaders including Gerry Adams and Martin McGuinness had concluded that the 'long war' strategy could sustain the conflict indefinitely but could not deliver a united Ireland. British security officials had reached the equivalent conclusion. This mutual recognition of stalemate, not moral conversion or external pressure, is what made the eventual negotiation possible.",
      },
    },
    {
      id: "it-05-legacy",
      title: "Legacy & Long-Term Impact",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "3,500 Dead. Thousands More Wounded. Trauma Still Processing." },
        {
          type: "paragraph",
          content:
            "The IRA killed approximately 1,800 people. Loyalist paramilitaries killed approximately 1,000. British security forces killed approximately 360. The trauma in both communities remains only partially addressed.",
        },
        { type: "heading", content: "Power-Sharing Works — Slowly and Imperfectly" },
        {
          type: "paragraph",
          content:
            "The Assembly requires cross-community cooperation. It collapsed multiple times in its first decades. IRA weapons were decommissioned in 2005. Loyalists moved more slowly. The structures hold, barely.",
        },
        {
          type: "paragraph",
          content:
            "The constitutional question wasn't resolved — it was managed. A border poll is now a live political question, not a theoretical one. Northern Ireland's Catholic population is approaching a majority for the first time.",
        },
        { type: "heading", content: "Brexit Ripped Open the Agreement's Foundations" },
        {
          type: "paragraph",
          content:
            "The invisible Irish border was a cornerstone of the Good Friday Agreement. Brexit threatened to restore it. The Windsor Framework put a regulatory border in the Irish Sea instead — satisfying nobody fully. The constitutional question is more live than at any point since 1998.",
        },
      ],
      quiz: {
        question:
          "How did Brexit threaten the foundations of the Good Friday Agreement?",
        options: [
          {
            id: "a",
            text: "It required both Ireland and the UK to renegotiate the Agreement's terms under new EU trade rules",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Leaving the EU threatened to restore a hard border between Northern Ireland and the Republic, undermining a cornerstone of the peace settlement",
            isCorrect: true,
          },
          {
            id: "c",
            text: "It ended the EU funding programmes that had supported cross-community initiatives in Northern Ireland",
            isCorrect: false,
          },
          {
            id: "d",
            text: "It gave unionist parties the constitutional justification to withdraw from the power-sharing Executive",
            isCorrect: false,
          },
        ],
        explanation:
          "The free movement of people and goods across the Irish border was not incidental to the Good Friday Agreement — it was structural. Communities that had been divided by the conflict were reconnected by the removal of border infrastructure. Economic integration between north and south developed. Brexit's requirement for a trade border somewhere — either between Northern Ireland and the Republic or between Northern Ireland and Great Britain — forced a choice the Agreement had been designed to avoid. The resulting Windsor Framework placed a regulatory border in the Irish Sea, satisfying neither side fully.",
      },
    },
    {
      id: "it-06-today",
      title: "Why This Matters Today",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "A Conflict That Never Quite Ended" },
        {
          type: "paragraph",
          content:
            "The Good Friday Agreement stopped the killing — it didn't answer the question. Is Northern Ireland British or Irish? Demographic change is bringing that question to a head faster than anyone expected in 1998.",
        },
        { type: "heading", content: "Back-Channel Diplomacy: The Template That Works" },
        {
          type: "paragraph",
          content:
            "The official process — which required all parties to be seen not talking to terrorists — only worked because an unofficial process was resolving the real disagreements. Wherever entrenched conflicts resist direct engagement, this model is relevant.",
        },
        { type: "heading", content: "Peace Needs Face-Saving Architecture" },
        {
          type: "paragraph",
          content:
            "The Agreement let every party claim partial victory. The IRA didn't surrender — it reached a settlement. Unionists kept Northern Ireland British. Successful negotiations rarely require admission of defeat. They require creative ambiguity.",
        },
        { type: "heading", content: "Political Peace Arrives Before Community Peace Does" },
        {
          type: "paragraph",
          content:
            "Belfast's city centre is transformed. But the peace walls dividing communities are higher and more numerous than in 1998. Political actors make peace first. Communities take longer. The slow work of reconciliation is still underway.",
        },
      ],
      reflection: {
        prompt:
          "The Good Friday Agreement succeeded partly through deliberate ambiguity — different parties could interpret the same text as validating their position. Think about a conflict in your own context, whether in an organisation, a community, or the wider world, where a 'face-saving' framework might allow entrenched parties to step back without admitting defeat. What would creative ambiguity look like in that situation, and what are the risks of it?",
      },
    },
  ],
}

export default course
