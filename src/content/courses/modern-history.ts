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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Revolution and Its Consequences" },
        {
          type: "paragraph",
          content:
            "The French Revolution of 1789 launched the modern political vocabulary: liberty, equality, fraternity, citizen, nation, right. The Declaration of the Rights of Man and of the Citizen proclaimed principles that undermined every existing monarchical and aristocratic order in Europe. But the Revolution also demonstrated how quickly emancipatory politics could produce the Terror — the systematic execution of thousands in the name of revolutionary purity — and ultimately Napoleon Bonaparte, a military genius who became emperor while claiming to carry revolutionary principles across Europe.",
        },
        {
          type: "paragraph",
          content:
            "The Napoleonic Wars (1803–1815) had the paradoxical effect of spreading revolutionary ideas even as Napoleon's armies conquered. Nationalism — the political principle that each 'people' sharing language, culture, and history deserves its own state — was ignited wherever French armies marched, both by inspiration and by reaction against French occupation. The Congress of Vienna (1815) attempted to restore the conservative order and suppress nationalism; the revolutions of 1848 — the 'Spring of Nations', in which nationalist and liberal uprisings swept through France, the German states, the Austrian Empire, and Italy — demonstrated how thoroughly nationalism had already taken hold.",
        },
        { type: "heading", content: "Industrialisation and Its Discontents" },
        {
          type: "paragraph",
          content:
            "The Industrial Revolution, beginning in Britain in the 1760s and spreading to continental Europe and North America through the 19th century, was the most fundamental transformation of human labour and living conditions since the Agricultural Revolution ten thousand years earlier. Steam power, mechanised production, and the factory system concentrated workers in cities in conditions of often brutal exploitation — child labour, twelve-hour days, slum housing, no safety regulations.",
        },
        {
          type: "paragraph",
          content:
            "Karl Marx and Friedrich Engels's Communist Manifesto (1848) gave this experience its most influential theoretical expression: history as class struggle, capitalism as a system that creates the conditions for its own overthrow, and the proletariat as the historical agent of transformation. Written during the 1848 revolutions, it was largely ignored at the time. Its influence on the following century was incalculable.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The 19th Century: Empire, Nation, and Crisis" },
        {
          type: "paragraph",
          content:
            "The American Civil War (1861–65) settled by force the question that the Constitution had evaded: whether the United States would be a free nation or a slaveholding one. The war cost 620,000 lives — more Americans than any other conflict — and ended chattel slavery in the United States. Reconstruction's promise of Black political equality was betrayed within a decade, but the constitutional amendments that abolished slavery and guaranteed equal protection created the legal foundation for the civil rights struggles of the following century.",
        },
        {
          type: "paragraph",
          content:
            "The Berlin Conference of 1884–85, convened by Bismarck, formalised the Scramble for Africa in which European powers partitioned the continent among themselves. Africa was divided into states whose borders reflected European negotiating convenience rather than African ethnic, linguistic, or political realities. By 1914, only Ethiopia and Liberia remained nominally independent. The colonial systems established — extractive, racially hierarchical, structurally dependent — shaped African economies and politics in ways that persist today.",
        },
        { type: "heading", content: "The 20th Century's Arc of Violence and Change" },
        {
          type: "paragraph",
          content:
            "World War I (1914–18) ended four empires — the Ottoman, Austro-Hungarian, Russian, and German — and killed approximately 20 million people. The Bolshevik Revolution of 1917, seizing power in the chaos of Russia's defeat, created the first communist state and split the international left for the following seventy years. The Great Depression, beginning with the Wall Street Crash of October 1929, destroyed the liberal economic order and created the conditions for fascism's rise.",
        },
        {
          type: "paragraph",
          content:
            "World War II (1939–45) killed approximately 70 million people and ended with the United States and Soviet Union as the only remaining great powers. The subsequent Cold War, decolonisation wave, and the creation of international institutions — the UN, IMF, World Bank — defined the post-war order. India's independence in 1947, quickly followed by most of Africa and Asia through the 1950s–1970s, ended the European colonial system. The fall of the Berlin Wall in 1989 and the Soviet Union's dissolution in 1991 opened a brief unipolar moment. September 11, 2001, the 2008 financial crisis, and the COVID-19 pandemic of 2020 each in their way tested the resilience of the liberal order built after 1945.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Revolutionaries and Reformers" },
        {
          type: "paragraph",
          content:
            "Napoleon Bonaparte (1769–1821) is modernity's first great paradox: a revolutionary general who became an emperor, who abolished feudalism across Europe while conquering it, who codified revolutionary legal principles in the Napoleonic Code while suppressing political liberty. The Code Napoleon — establishing equality before the law, property rights, religious toleration, and the abolition of feudal privilege — outlasted his empire and remains the basis of legal systems across France, Belgium, Louisiana, Quebec, and much of the world that French colonialism reached.",
        },
        {
          type: "paragraph",
          content:
            "Otto von Bismarck (1815–1898) unified the German states through 'blood and iron' — strategic wars against Denmark, Austria, and France — and in doing so created the most powerful state in Europe and fundamentally destabilised the continental balance of power. His diplomatic genius in managing the rivalries he had created died with him; the alliance system he built became the mechanism that turned a Balkan assassination into a world war. Karl Marx (1818–1883), whose Capital provided the theoretical architecture for socialist and communist movements worldwide, spent much of his life as a refugee in London writing in the British Museum library.",
        },
        { type: "heading", content: "The 20th Century's Defining Leaders" },
        {
          type: "paragraph",
          content:
            "Mahatma Gandhi (1869–1948) developed non-violent resistance as a political technology with global consequences. His methods — civil disobedience, non-cooperation, the strategic acceptance of imprisonment — were consciously designed to expose the moral illegitimacy of colonial power and force the coloniser to either concede or reveal its violence to the world. The model was exported to the American civil rights movement, the anti-apartheid struggle, and independence movements across Asia and Africa.",
        },
        {
          type: "paragraph",
          content:
            "Franklin Roosevelt (1882–1945) responded to the Great Depression with the New Deal — a transformation of American government's role in economic management whose legacy still shapes the argument about the state's economic responsibilities. His wartime leadership forged the alliance that defeated the Axis. Mao Zedong (1893–1976) led the Chinese Communist revolution that created the People's Republic in 1949, and then launched the Great Leap Forward (1958–62) — a forced industrialisation and collectivisation programme that caused a famine killing 30–45 million people — and the Cultural Revolution (1966–76) that destroyed China's cultural heritage and persecuted millions of intellectuals. Nelson Mandela (1918–2013) spent 27 years in prison for his resistance to apartheid and emerged without bitterness to negotiate and lead South Africa's transition to democracy — one of the 20th century's most remarkable acts of political and personal reconciliation.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Moments That Made the Modern World" },
        {
          type: "paragraph",
          content:
            "The Industrial Revolution was the first turning point — not a single event but a decades-long transformation that changed the material basis of human life more fundamentally than anything since agriculture. Steam power, mechanised production, global trade networks, the factory city, and the wage labourer all emerged from this transformation. The political ideologies of the 19th and 20th centuries — liberalism, socialism, conservatism, nationalism, communism, fascism — were all responses to industrialisation's disruptions.",
        },
        {
          type: "paragraph",
          content:
            "1914 is the end of the long 19th century — the moment when the European optimism of the Belle Époque, the international order built since Vienna, and four empires all began to collapse. The assassination of Archduke Franz Ferdinand in Sarajevo on June 28, 1914, was not the cause of the war — the cause was the system of alliances, the military planning that allowed no diplomatic pause, the nationalism that made mobilisation popular, and the imperialism that had been building tensions for decades. But it was the trigger, and what it triggered was the destruction of the world that had existed.",
        },
        { type: "heading", content: "1945, 1989, and 2008" },
        {
          type: "paragraph",
          content:
            "1945 was the hinge of the modern world: the nuclear threshold was crossed, American hegemony was established, the United Nations was founded, the Cold War began, and the decolonisation wave was set in motion. The post-war order — Bretton Woods institutions, NATO, the UN Security Council, nuclear deterrence — remains the framework within which international politics operates, modified but not replaced.",
        },
        {
          type: "paragraph",
          content:
            "The fall of the Berlin Wall in 1989 and the Soviet dissolution in 1991 appeared to confirm liberal democracy and market capitalism as the terminus of political evolution. The 2008 financial crisis destroyed that confidence. The collapse of major financial institutions, the bailouts of banks while ordinary citizens lost homes and jobs, and the revelation that the financial system's complexity had outrun regulators' ability to understand it — all produced a loss of institutional trust that populist movements across left and right exploited through the following decade.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Nation-State and the International Order" },
        {
          type: "paragraph",
          content:
            "The nation-state — the unit of political organisation in which a sovereign people with a shared identity governs a defined territory — is modernity's primary political invention. Before the French Revolution, most people lived in empires, kingdoms, or city-states organised around dynastic loyalty rather than national identity. The nation-state system formalised at Westphalia (1648) and extended through 19th-century nationalism is still the primary unit of international politics: states have sovereignty, states sign treaties, states are UN members.",
        },
        {
          type: "paragraph",
          content:
            "The international institutions created after 1945 — the United Nations, the International Monetary Fund, the World Bank, the General Agreement on Tariffs and Trade (later the WTO) — were designed to prevent the specific failures that had produced the World Wars: economic nationalism, imperial competition, and the absence of a forum for conflict resolution. They have been imperfect instruments, but the world since 1945 has not seen a major war between great powers — a fact with no precedent in the previous two centuries.",
        },
        { type: "heading", content: "The Carbon Economy" },
        {
          type: "paragraph",
          content:
            "The Industrial Revolution's defining legacy is the carbon economy: the burning of fossil fuels as the primary energy source for human civilisation. The atmospheric carbon concentration that was 280 parts per million before industrialisation reached 420 parts per million in 2023 and is rising. Climate change is the Industrial Revolution's accumulated invoice — a consequence so delayed that it falls on generations who did not make the decisions. The path dependency is severe: the entire infrastructure of modern civilisation — power grids, transport, heating, food systems — was built on fossil fuels, and transitioning away requires changes of comparable scale to industrialisation itself.",
        },
        { type: "heading", content: "Globalisation and Its Discontents" },
        {
          type: "paragraph",
          content:
            "Globalisation — the increasing integration of economies, cultures, and information across national borders — accelerated dramatically after 1989. Global trade as a share of world GDP roughly doubled between 1990 and 2008. Hundreds of millions of people were lifted out of poverty, primarily in China and South Asia. But the gains were distributed unequally: the middle classes of wealthy countries found their wages stagnant as manufacturing moved to lower-wage economies, and the sense of insecurity this produced drove the populist politics of the 2010s. Globalisation's fragility was exposed by the COVID pandemic and the supply chain disruptions it caused.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "How We Got Here" },
        {
          type: "paragraph",
          content:
            "Modern history is the explanation for the world's present configuration. Why are borders where they are? Because colonial powers drew them, or because post-WWI peace conferences rearranged Europe on national lines, or because 19th-century nationalist movements achieved states. Why are some countries wealthy and others poor? Because of path dependency — the institutions, infrastructure, and human capital built up over generations — combined with the history of colonial extraction, resource endowments, and the specific decisions made at critical junctures.",
        },
        { type: "heading", content: "Why Conflicts Keep Recurring" },
        {
          type: "paragraph",
          content:
            "The conflicts that dominate news today are mostly not new. The Israel-Palestine conflict has roots in the late Ottoman period, the Balfour Declaration of 1917, the Holocaust's creation of existential urgency for Zionism, and the 1948 war. The India-Pakistan conflict over Kashmir is rooted in the 1947 partition — itself a rushed solution to the British inability to resolve competing claims. The tensions between China and Taiwan derive from the Chinese Civil War of 1927–49. Understanding current conflicts without their historical depth produces policy responses that address symptoms rather than causes.",
        },
        { type: "heading", content: "How Systems Change" },
        {
          type: "paragraph",
          content:
            "Modern history is a long study in how systems change — and what makes change possible. The French Revolution showed that political order could be transformed quickly under pressure. The Industrial Revolution showed that economic transformation reshapes political structures slowly but fundamentally. Gandhi and King showed that non-violent movements could move formal legal structures that seemed immovable. Gorbachev showed that attempts to reform unreformable systems can dissolve them entirely. The 2008 financial crisis and COVID showed that complex systems can fail rapidly when the assumptions underlying them are wrong.",
        },
        { type: "heading", content: "What Makes Change Possible" },
        {
          type: "paragraph",
          content:
            "The historian's question — why did change happen here and not there, then and not before? — is also the activist's, the entrepreneur's, and the policymaker's question. The historical record suggests that change typically requires a combination of structural conditions (the existing system is under stress, a crisis has revealed its failures, alternatives are available) and human agency (people who recognise the moment and act on it). Neither structural conditions alone nor individual will alone is sufficient. History is neither inevitable nor arbitrary.",
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
