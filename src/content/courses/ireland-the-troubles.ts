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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Colonialism, Plantation, and Famine" },
        {
          type: "paragraph",
          content:
            "Ireland's modern political conflict has roots stretching back centuries. The Norman invasion of 1169 began the long entanglement with English power, but the decisive rupture came with the Plantation of Ulster in 1610. Under James I, large tracts of land in the north of Ireland were confiscated from native Catholic owners and settled by Protestant planters from England and Scotland. The demographic and religious division this created — between a Protestant settler class with economic and political privileges and a dispossessed Catholic native population — became the fault line around which subsequent centuries of conflict organised themselves.",
        },
        {
          type: "paragraph",
          content:
            "The Penal Laws restricted Catholic rights to own property, practise their religion, and participate in public life. The Great Famine of 1845–52 became the defining wound in Irish national memory: one million dead, one million emigrated, and a British government whose laissez-faire ideology prevented the intervention that might have saved lives. The population of Ireland, over eight million before the famine, never recovered. For many Irish nationalists, the famine was not a failure of policy but evidence of deliberate neglect — even genocide.",
        },
        { type: "heading", content: "Revolution and Partition" },
        {
          type: "paragraph",
          content:
            "The Easter Rising of 1916 — a rebellion launched in Dublin at Easter by Irish republicans including Patrick Pearse and James Connolly — was militarily a failure, suppressed within a week. But the British execution of its leaders transformed them into martyrs and radicalised Irish public opinion. The Irish War of Independence (1919–21), fought as a guerrilla campaign by the Irish Republican Army under Michael Collins, ended with the Anglo-Irish Treaty of 1921.",
        },
        {
          type: "paragraph",
          content:
            "The Treaty granted independence to 26 of Ireland's 32 counties. The six Ulster counties with Protestant majorities remained British — Northern Ireland. This partition satisfied neither unionists, who feared absorption into a Catholic state, nor nationalists, who had fought for a united Ireland. It triggered a bitter civil war in the south between pro-Treaty and anti-Treaty republicans, and planted the seeds of the conflict that would become The Troubles fifty years later.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Civil Rights to Armed Conflict" },
        {
          type: "paragraph",
          content:
            "The conflict known as The Troubles is conventionally dated from 1969, but its immediate precursor was the Northern Ireland Civil Rights Movement of the late 1960s, inspired by the American civil rights movement. The Northern Ireland Civil Rights Association (NICRA) demanded equal voting rights (Catholic areas were systematically gerrymandered), equal access to public housing, and an end to discrimination in employment. These were demands within the existing constitutional order — not for a united Ireland but for equal citizenship within Northern Ireland.",
        },
        {
          type: "paragraph",
          content:
            "The marches were attacked by loyalist counter-demonstrators, sometimes with police complicity. The Battle of the Bogside in August 1969 — three days of sustained street fighting between Catholic residents of Derry and the Royal Ulster Constabulary — led to the deployment of British Army troops. Initially, many Catholics welcomed the Army as protection from loyalist attacks. Within years, that relationship had transformed entirely.",
        },
        { type: "heading", content: "Bloody Sunday and Internment" },
        {
          type: "paragraph",
          content:
            "Internment without trial — the imprisonment of suspected republicans without charge or conviction — was introduced in August 1971. The policy was poorly targeted, mostly affected innocent Catholics, and radicalised the community it was meant to suppress. On January 30, 1972 — Bloody Sunday — British paratroopers shot twenty-six unarmed civilian protesters on the streets of Derry, killing fourteen. The paratroopers claimed they had been fired upon; subsequent investigations, including the Saville Inquiry (2010), found that the victims were innocent and unjustified, and that the killings were unjustified.",
        },
        {
          type: "paragraph",
          content:
            "Bloody Sunday was the single most consequential event of The Troubles. IRA recruitment surged. The British Embassy in Dublin was burned. The moral and political damage to Britain internationally was severe and lasting. The event confirmed for a generation of nationalists that peaceful protest within the constitutional framework would not be protected.",
        },
        { type: "heading", content: "The Hunger Strikes" },
        {
          type: "paragraph",
          content:
            "In 1981, republican prisoners in the Maze prison, led by Bobby Sands, began a hunger strike demanding to be treated as political prisoners rather than criminals. Sands was elected to the British Parliament while on hunger strike. He died on May 5, 1981, after 66 days without food. Nine more prisoners died before the strike was called off. The strikes created a template for Sinn Féin's subsequent electoral politics and demonstrated the power of the ballot box alongside the armed campaign.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Founding Generation" },
        {
          type: "paragraph",
          content:
            "Michael Collins was the military and intelligence genius of the Irish War of Independence. As director of intelligence for the IRA, he built a network of informants inside Dublin Castle — British intelligence's own headquarters — that made the British position in Ireland increasingly untenable. He negotiated the Anglo-Irish Treaty in London in 1921, accepting partition as a stepping stone rather than a final settlement. His old comrades who rejected the Treaty as a betrayal shot him dead in an ambush in County Cork in August 1922. He was 31.",
        },
        {
          type: "paragraph",
          content:
            "Éamon de Valera, who had opposed the Treaty, survived the civil war and dominated Irish politics for the following fifty years as Taoiseach and President. His vision of Ireland — Catholic, rural, self-sufficient — shaped the Republic until the 1960s, and his constitutional claim to the whole island of Ireland remained in place until the Good Friday Agreement.",
        },
        { type: "heading", content: "The Peace Architects" },
        {
          type: "paragraph",
          content:
            "Gerry Adams and Martin McGuinness led the Sinn Féin leadership through the political transition from military to electoral strategy. Both denied IRA membership for decades — an open secret — while managing the extraordinarily difficult internal process of convincing the republican movement that negotiation was not surrender. McGuinness, who had been an IRA commander in Derry during Bloody Sunday, ended his life as Deputy First Minister of Northern Ireland, shaking the hand of Queen Elizabeth II.",
        },
        {
          type: "paragraph",
          content:
            "Ian Paisley spent fifty years as the loudest voice against any accommodation with republicanism, founding the Democratic Unionist Party and the Free Presbyterian Church of Ulster. His 'Never, Never, Never' speech rejecting the Anglo-Irish Agreement became a symbol of unionist intransigence. Yet in 2007, now in his eighties, he became First Minister in a power-sharing government with Martin McGuinness — sitting side by side with his most bitter enemy. John Hume of the SDLP, who had argued for constitutional politics throughout the violence, was awarded the Nobel Peace Prize in 1998 alongside Ulster Unionist leader David Trimble. Tony Blair and Irish Taoiseach Bertie Ahern drove the final negotiations of the Good Friday Agreement.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Events That Changed the Conflict's Direction" },
        {
          type: "paragraph",
          content:
            "Bloody Sunday (January 30, 1972) was the defining radicalising event of The Troubles. The killing of fourteen unarmed civilians by British paratroopers at a civil rights march in Derry destroyed the credibility of peaceful protest and drove thousands toward the IRA. IRA recruitment reached levels it had never achieved through purely political argument. The British government's initial cover-up — the Widgery Tribunal largely exonerated the paratroopers — compounded the damage. The British government did not formally acknowledge the killings were unjustified until David Cameron's apology following the Saville Inquiry in 2010, thirty-eight years later.",
        },
        { type: "heading", content: "The Anglo-Irish Agreement and Back-Channel Talks" },
        {
          type: "paragraph",
          content:
            "The Anglo-Irish Agreement of 1985, signed by Margaret Thatcher and Irish Taoiseach Garret FitzGerald, gave the Irish government a formal consultative role in Northern Irish affairs for the first time. Unionists were furious — Paisley's 'Ulster Says No' campaign drew 500,000 signatories. But the Agreement established a precedent: the Irish dimension of Northern Irish politics had been acknowledged by both governments.",
        },
        {
          type: "paragraph",
          content:
            "Throughout the late 1980s and early 1990s, back-channel communications between the British government and the IRA leadership were developing in parallel with the official political process. Both sides knew a military solution was impossible: the IRA could not defeat the British Army, but Britain could not eliminate the IRA. This mutual recognition of stalemate was a precondition for negotiation. The IRA ceasefire of August 1994 opened the path. When the IRA broke the ceasefire with the Canary Wharf bombing of February 1996, killing two people, it demonstrated how fragile the process remained — but the ceasefire was restored, and the talks continued.",
        },
        { type: "heading", content: "Good Friday" },
        {
          type: "paragraph",
          content:
            "The Good Friday Agreement of April 10, 1998, established power-sharing between unionists and nationalists in a new Northern Ireland Assembly, created North-South bodies linking the two parts of Ireland, established a British-Irish Intergovernmental Conference, required decommissioning of paramilitary weapons, and led to the early release of paramilitary prisoners. The Republic of Ireland amended its constitution to remove the territorial claim to Northern Ireland. It was approved by referendums on both sides of the border.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Cost of The Troubles" },
        {
          type: "paragraph",
          content:
            "Approximately 3,500 people were killed during The Troubles between 1969 and 1998. The IRA was responsible for approximately 1,800 deaths; loyalist paramilitaries for approximately 1,000; British security forces for approximately 360. Many thousands more were injured, and many thousands more were displaced from their communities. The trauma — in both communities, and among those caught between them — remains only partially processed.",
        },
        { type: "heading", content: "The Good Friday Agreement's Structures" },
        {
          type: "paragraph",
          content:
            "The Agreement's power-sharing Executive requires that the First Minister and Deputy First Minister come from the largest unionist and nationalist parties respectively, meaning government requires cross-community cooperation. This made politics more stable but also gave small parties veto power over the Assembly's operation — and the Executive collapsed multiple times in its first decades. The decommissioning of IRA weapons was completed in 2005. Loyalist paramilitaries decommissioned more slowly and incompletely.",
        },
        {
          type: "paragraph",
          content:
            "The constitutional question the Agreement addressed — Northern Ireland's status — was not settled but managed. Northern Ireland remains part of the United Kingdom unless a majority votes otherwise in a border poll. The possibility of such a poll — in which, for the first time, Northern Ireland's Catholic population is approaching a majority — has moved from theoretical to live political question.",
        },
        { type: "heading", content: "The Unresolved Question" },
        {
          type: "paragraph",
          content:
            "Brexit forced open the contradictions the Good Friday Agreement had papered over. The Agreement's invisible Irish border was one of its cornerstones — people and goods moving freely between the Republic and Northern Ireland as both were EU members. Brexit threatened to restore a hard border. The resulting Northern Ireland Protocol — and its successor, the Windsor Framework — created trade barriers between Northern Ireland and Great Britain instead, generating unionist fury. The constitutional question is more live than at any time since 1998.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "A Conflict That Never Quite Ended" },
        {
          type: "paragraph",
          content:
            "The Good Friday Agreement ended large-scale political violence, but it did not resolve the underlying question: is Northern Ireland British or Irish? That question is now closer to an answer — through democratic means — than at any point since partition. Demographic change, the Catholic population's growth, and the alienation of many young people from both traditional identities have made a future border poll plausible in a way it was not in 1998.",
        },
        { type: "heading", content: "What The Troubles Teaches About Back-Channel Diplomacy" },
        {
          type: "paragraph",
          content:
            "The peace process worked in part because of communication channels that operated outside the public political process. British intelligence and IRA leadership communicated through intermediaries for years before formal negotiations. The official political process — which required all parties to be seen not to be talking to terrorists — would have been impossible without the unofficial process that was actually resolving the core disagreements. This model of back-channel diplomacy as the enabler of official negotiation is relevant wherever entrenched conflicts resist direct engagement.",
        },
        { type: "heading", content: "Political Off-Ramps and the Necessity of Face-Saving" },
        {
          type: "paragraph",
          content:
            "One reason the peace process eventually succeeded is that it gave all parties — IRA, loyalists, unionists, nationalists — something they could present to their own constituencies as a form of victory. The IRA could argue it had not surrendered; it had achieved a settlement. Unionists could argue Northern Ireland remained British. Nationalists could argue the all-Ireland dimension had been formally recognised. Successful peace negotiations rarely require one side to admit complete defeat; they require creative ambiguity that allows all parties to claim partial vindication.",
        },
        { type: "heading", content: "The Slow Work of Peace" },
        {
          type: "paragraph",
          content:
            "Belfast today is visibly different from Belfast in 1990 — investment, tourism, a transformed city centre, a culture of creative energy. But the peace walls dividing Catholic and Protestant communities in some areas are higher and more numerous than they were when the Agreement was signed. Political violence has greatly reduced; social segregation has not. Peace between political actors arrives faster than peace between communities. The slow work of reconciliation — education, shared spaces, dealing with the past — is still underway.",
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
