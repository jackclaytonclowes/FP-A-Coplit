import type { Course } from "@/types"

const course: Course = {
  id: "modern-history",
  title: "Modern History",
  slug: "modern-history",
  description:
    "The making of the modern world — from the French Revolution through industrialisation, colonialism, the world wars, decolonisation and globalisation to the present.",
  category: "history",
  accentColor: "#555566",
  estimatedHours: 4,
  tags: ["modern", "20th-century", "revolution", "globalisation", "conflict"],
  lessons: [
    {
      id: "mh-01-origins",
      title: "Origins & Context",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The French Revolution Launched the Modern Political Vocabulary" },
        {
          type: "paragraph",
          content:
            "Liberty, equality, fraternity, citizen, nation, right — all launched in 1789. The Revolution also demonstrated how fast emancipatory politics could produce the Terror, then Napoleon: emperor, claiming to carry revolutionary principles across Europe at swordpoint.",
        },
        {
          type: "paragraph",
          content:
            "The Napoleonic Wars paradoxically spread revolutionary ideas while conquering. Nationalism — the principle that each people deserves its own state — ignited wherever French armies marched, both by inspiration and by resistance to occupation. The Congress of Vienna tried to suppress it. The 1848 revolutions showed how thoroughly it had already taken hold.",
        },
        { type: "heading", content: "Industrialisation: The Biggest Disruption Since Agriculture" },
        {
          type: "paragraph",
          content:
            "Steam power, the factory system, mechanised production — workers concentrated in cities under brutal exploitation. Child labour, twelve-hour days, slum housing. The most fundamental transformation of human labour in ten thousand years.",
        },
        {
          type: "paragraph",
          content:
            "Marx and Engels's Communist Manifesto (1848) gave this experience its most influential theoretical expression. Written during the 1848 revolutions, largely ignored at the time — its influence on the following century was incalculable.",
        },
      ],
      quiz: {
        question:
          "How did the Napoleonic Wars paradoxically spread the revolutionary ideas they were ostensibly fighting against?",
        options: [
          {
            id: "a",
            text: "Napoleon's legal reforms — the Napoleonic Code — were so superior to existing systems that conquered peoples voluntarily retained them after liberation",
            isCorrect: false,
          },
          {
            id: "b",
            text: "French armies inspired nationalism both by demonstrating the power of a citizen army and by provoking nationalist resistance to French occupation itself",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Revolutionary soldiers fraternised with local populations and directly disseminated the principles of the Declaration of the Rights of Man",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The destruction of aristocratic institutions wherever Napoleon conquered created political vacuums that nationalist movements filled",
            isCorrect: false,
          },
        ],
        explanation:
          "The paradox is twofold. First, French armies — conscript citizen armies fighting for a nation rather than a king — demonstrated that nationalism was militarily effective, inspiring imitation. Second, and more powerfully, resistance to French occupation gave birth to national consciousness in Germany, Spain, and elsewhere: people who had not previously thought of themselves as Germans or Spaniards found a national identity in opposing the French. Napoleon exported nationalism by trying to contain it, and the conservative powers who defeated him at Vienna could not put that genie back.",
      },
    },
    {
      id: "mh-02-events",
      title: "Key Events",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The 19th Century: Empires, Nations, and Crises" },
        {
          type: "paragraph",
          content:
            "The American Civil War (1861–65) settled what the Constitution had evaded: slavery. 620,000 lives. Reconstruction's promise of Black equality was betrayed within a decade — but the constitutional amendments created the foundation for civil rights struggles a century later.",
        },
        {
          type: "paragraph",
          content:
            "The Berlin Conference of 1884–85 formalised the Scramble for Africa. Europeans drew borders in straight lines reflecting negotiating convenience, not African realities. By 1914, only Ethiopia and Liberia remained independent. Those borders still shape African politics today.",
        },
        { type: "heading", content: "The 20th Century's Arc of Violence and Change" },
        {
          type: "paragraph",
          content:
            "WWI ended four empires and killed 20 million. The Bolshevik Revolution of 1917 created the first communist state and split the international left for seventy years. The Great Depression created the conditions for fascism's rise.",
        },
        {
          type: "paragraph",
          content:
            "WWII killed 70 million and left the US and USSR as the only remaining great powers. Decolonisation followed — India in 1947, most of Africa by the 1970s. The Berlin Wall fell in 1989. Then came September 11, the 2008 financial crisis, and COVID — each testing the liberal order built after 1945.",
        },
      ],
      quiz: {
        question:
          "What was the lasting structural consequence of the Berlin Conference of 1884–85 for post-colonial Africa?",
        options: [
          {
            id: "a",
            text: "It established European languages as official languages in African states, creating a lasting barrier to pan-African political unity",
            isCorrect: false,
          },
          {
            id: "b",
            text: "African borders were drawn to reflect European negotiating convenience rather than African realities, shaping political instability that persists today",
            isCorrect: true,
          },
          {
            id: "c",
            text: "It created a free-trade zone across sub-Saharan Africa that oriented African economies toward European markets permanently",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The Conference's recognition of existing treaties gave the Catholic Church legal title to large tracts of central African land",
            isCorrect: false,
          },
        ],
        explanation:
          "The Berlin Conference drew Africa's borders in straight lines that cut through ethnic groups, split traditional kingdoms, and lumped rival communities together in ways that suited European administrative convenience. When these territories became independent states in the 1950s–1970s, they inherited borders they had not drawn and could not easily redraw without risking regional instability. The principle of uti possidetis — that post-colonial states should maintain colonial borders — was adopted to prevent worse fragmentation, but it locked in the arbitrary geography of partition. The resulting ethnic, political, and economic tensions continue to shape African conflicts.",
      },
    },
    {
      id: "mh-03-figures",
      title: "Major Figures",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Napoleon: Revolution's Greatest Paradox" },
        {
          type: "paragraph",
          content:
            "He abolished feudalism across Europe while conquering it. His Napoleonic Code — equality before the law, property rights, religious toleration — outlasted his empire and still underpins legal systems across France, Belgium, Quebec, and beyond.",
        },
        {
          type: "paragraph",
          content:
            "Bismarck unified Germany through 'blood and iron' — strategic wars against Denmark, Austria, and France. His diplomatic genius in managing the rivalries he'd created died with him. The alliance system he built became the mechanism that turned a Balkan assassination into a world war.",
        },
        { type: "heading", content: "Gandhi: Non-Violence as Political Technology" },
        {
          type: "paragraph",
          content:
            "Gandhi designed non-violent resistance to force a dilemma: concede, or visibly brutalise peaceful protesters. Either way, the coloniser loses. The method was exported to the US civil rights movement, anti-apartheid, and independence movements worldwide.",
        },
        {
          type: "paragraph",
          content:
            "Roosevelt's New Deal transformed the American state's role in economic management. Mao's Great Leap Forward killed 30–45 million through famine. Mandela spent 27 years in prison and emerged without bitterness to negotiate South Africa's transition to democracy — one of the century's most remarkable acts of political reconciliation.",
        },
      ],
      quiz: {
        question:
          "What made Gandhi's non-violent resistance a politically sophisticated strategy rather than simply a moral stance?",
        options: [
          {
            id: "a",
            text: "It was designed to win international media coverage at a time when photography was making colonial violence visible globally",
            isCorrect: false,
          },
          {
            id: "b",
            text: "It was designed to expose colonial power's illegitimacy by forcing colonisers to either concede or visibly brutalise peaceful protesters",
            isCorrect: true,
          },
          {
            id: "c",
            text: "It was derived from the Hindu concept of ahimsa but adapted to impose practical costs on British commerce through boycotts",
            isCorrect: false,
          },
          {
            id: "d",
            text: "It depended on the specific vulnerability of British public opinion to Indian suffering, which would not have worked against a less democratic colonial power",
            isCorrect: false,
          },
        ],
        explanation:
          "Gandhi's insight was that non-violence placed the coloniser in a dilemma: either concede to demonstrators' demands (victory for the movement) or violently suppress them (moral and political defeat, exposing the violence that colonialism required). This dilemma was not merely moral but structural — it worked by making the cost of maintaining colonial order politically unacceptable. The strategy was exported because it is effective against any power that depends on moral legitimacy, including domestic democratic governments, which is why the civil rights movement under King adopted it. It is less effective against powers indifferent to their moral standing.",
      },
    },
    {
      id: "mh-04-turning",
      title: "Turning Points",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Industrialisation: Not an Event, a Transformation" },
        {
          type: "paragraph",
          content:
            "Steam power, mechanised production, the factory city, the wage labourer — these reshaped human life more fundamentally than anything since agriculture. Every 19th-century ideology — liberalism, socialism, nationalism, conservatism — was a response to industrialisation's disruptions.",
        },
        {
          type: "paragraph",
          content:
            "1914 ended the long 19th century. The assassination of Archduke Franz Ferdinand wasn't the cause of WWI — the alliance system, military planning that allowed no diplomatic pause, and decades of nationalism and imperialism built the pressure. The assassination just pulled the trigger.",
        },
        { type: "heading", content: "1945, 1989, 2008: Three World-Reordering Moments" },
        {
          type: "paragraph",
          content:
            "1945: nuclear threshold crossed, American hegemony established, Cold War begun, decolonisation set in motion. The post-war order — UN, NATO, Bretton Woods institutions — is modified but not replaced.",
        },
        {
          type: "paragraph",
          content:
            "1989 appeared to confirm liberal democracy had won. The 2008 financial crisis destroyed that confidence. Banks bailed out, ordinary citizens lost homes and jobs, institutional trust collapsed — and populist movements across left and right exploited the wreckage.",
        },
      ],
      quiz: {
        question:
          "Why is 1914 described as the end of the 'long 19th century' rather than simply the start of World War I?",
        options: [
          {
            id: "a",
            text: "The war's outbreak ended the international gold standard and the free-trade system that had defined 19th-century economics",
            isCorrect: false,
          },
          {
            id: "b",
            text: "1914 destroyed the European order, four empires, and the optimism of the Belle Époque — the institutional and psychological world of the 19th century ended with the war",
            isCorrect: true,
          },
          {
            id: "c",
            text: "The 19th century's ideologies — liberalism, nationalism, conservatism — were all discredited by the war's industrialised mass slaughter",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The entry of non-European powers — the United States and Japan — into the conflict transformed what had been a European pattern into a global one",
            isCorrect: false,
          },
        ],
        explanation:
          "The historian Eric Hobsbawm's periodisation — the 'long 19th century' running from the French Revolution (1789) to the outbreak of WWI (1914) — captures the coherence of the period: a European-centred world order, four multi-ethnic empires (Habsburg, Ottoman, Russian, German), the progressive extension of liberal and nationalist principles, and a broadly optimistic belief in progress. 1914 ended all of this simultaneously. The empires collapsed within four years. The optimism died on the Somme. The liberal order was replaced by ideology wars between fascism, communism, and liberal democracy. The world that emerged from 1918 was recognisably modern; the world that entered 1914 was still 19th century in its fundamental structures.",
      },
    },
    {
      id: "mh-05-legacy",
      title: "Legacy & Long-Term Impact",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Nation-State: Modernity's Primary Political Invention" },
        {
          type: "paragraph",
          content:
            "Before the French Revolution, most people lived in empires or kingdoms organised around dynastic loyalty. The nation-state system — sovereign people, shared identity, defined territory — is still the primary unit of international politics.",
        },
        {
          type: "paragraph",
          content:
            "The international institutions built after 1945 — UN, IMF, World Bank, WTO — were designed to prevent the specific failures that produced the world wars: economic nationalism, imperial competition, no forum for conflict resolution. Imperfect instruments. But no major war between great powers since 1945 — historically unprecedented.",
        },
        { type: "heading", content: "Climate Change Is Industrialisation's Accumulated Invoice" },
        {
          type: "paragraph",
          content:
            "Atmospheric carbon was 280 parts per million before industrialisation. It hit 420 ppm in 2023 and is rising. The people making decisions in 1860 couldn't have known. The people suffering the consequences in 2060 won't have made them. That temporal displacement is the central moral problem.",
        },
        { type: "heading", content: "Globalisation Lifted Hundreds of Millions — and Left Others Behind" },
        {
          type: "paragraph",
          content:
            "Trade as a share of world GDP doubled between 1990 and 2008. Hundreds of millions lifted out of poverty in China and South Asia. But wealthy countries' middle classes saw stagnant wages as manufacturing moved elsewhere. That insecurity drove the populist politics of the 2010s.",
        },
      ],
      quiz: {
        question:
          "What does climate change reveal about the relationship between the Industrial Revolution and the present day?",
        options: [
          {
            id: "a",
            text: "It demonstrates that technological solutions developed by industrialisation can be applied to the environmental problems it created",
            isCorrect: false,
          },
          {
            id: "b",
            text: "It is the accumulated consequence of industrialisation falling on generations who did not make the decisions, demonstrating path dependency on a civilisational scale",
            isCorrect: true,
          },
          {
            id: "c",
            text: "It shows that the nation-state system is inadequate for managing problems that cross borders, requiring fundamentally new international institutions",
            isCorrect: false,
          },
          {
            id: "d",
            text: "It vindicates the critics of industrialisation — from Luddites to Romantics — who argued that mechanised production was incompatible with human flourishing",
            isCorrect: false,
          },
        ],
        explanation:
          "Climate change is the defining example of what economists call 'path dependency' — when past choices constrain present options in ways that are very difficult to escape. The entire infrastructure of modern civilisation was built assuming cheap fossil fuel energy; the atmospheric carbon those fuels released accumulates over centuries. The people making decisions in 1860 could not have known the consequences; those suffering them in 2060 will not have made the decisions. This temporal displacement — the dissociation of decision and consequence across generations — is both the central moral problem of climate change and the primary reason political systems struggle to address it.",
      },
    },
    {
      id: "mh-06-today",
      title: "Why This Matters Today",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Modern History Is the Explanation for Right Now" },
        {
          type: "paragraph",
          content:
            "Why are borders where they are? Colonial powers drew them, or post-WWI peace conferences rearranged them. Why are some countries wealthy and others poor? Path dependency — institutions, infrastructure, the history of extraction, the specific decisions made at critical junctures.",
        },
        { type: "heading", content: "Today's Conflicts Have Deep Roots" },
        {
          type: "paragraph",
          content:
            "Israel-Palestine traces to the late Ottoman period, the 1917 Balfour Declaration, the Holocaust, and the 1948 war. India-Pakistan traces to the 1947 partition. China-Taiwan traces to the Chinese Civil War of 1927–49. Address symptoms without historical depth and you'll keep failing.",
        },
        { type: "heading", content: "History Shows How Systems Actually Change" },
        {
          type: "paragraph",
          content:
            "The French Revolution showed political order can transform fast under pressure. Gandhi and King showed non-violent movements can shift immovable legal structures. Gorbachev showed that attempts to reform unreformable systems can dissolve them. 2008 showed complex systems can fail rapidly when their foundational assumptions are wrong.",
        },
        { type: "heading", content: "Change Needs Structure Plus Agency" },
        {
          type: "paragraph",
          content:
            "The historical record is consistent: change requires structural conditions (an existing system under stress, credible alternatives available) and human agency (people who recognise the moment and act). Neither alone is sufficient. History is neither inevitable nor arbitrary.",
        },
      ],
      reflection: {
        prompt:
          "Choose one contemporary conflict, inequality, or political pattern in the world today and trace it back as far as you can through the modern history you have studied. At what point do the historical roots become explanatory rather than merely interesting? Now consider: knowing that history, what would a policy response that addressed root causes rather than symptoms actually look like — and what would stand in the way of it?",
      },
    },
  ],
}

export default course
