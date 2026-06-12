import type { Course } from "@/types"

const course: Course = {
  id: "cold-war",
  title: "The Cold War",
  slug: "cold-war",
  description:
    "The ideological and geopolitical struggle between the US and Soviet Union that shaped the world from 1947 to 1991 — its crises, proxy wars, cultural dimensions, and consequences.",
  category: "history",
  accentColor: "#444e5c",
  estimatedHours: 4,
  tags: ["cold-war", "geopolitics", "nuclear", "ideology", "20th-century"],
  lessons: [
    {
      id: "cw-01-origins",
      title: "Origins & Context",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "An Alliance That Never Trusted Itself" },
        {
          type: "paragraph",
          content:
            "The Cold War was visible in the cracks of the wartime alliance before Germany had surrendered. At Yalta in February 1945, Churchill, Roosevelt, and Stalin agreed on the outlines of post-war Europe — free elections in liberated countries, Soviet security interests acknowledged — but each party understood the agreement differently. Roosevelt hoped Soviet cooperation in the Pacific war and the new United Nations could sustain the partnership; Churchill was under no illusions, having already made his 'percentages agreement' with Stalin in October 1944 carving up Eastern Europe into spheres of influence on a piece of paper passed across a table.",
        },
        {
          type: "paragraph",
          content:
            "The Potsdam Conference in July 1945 introduced a new variable: Harry Truman, who had not been told about the atomic bomb programme before Roosevelt's death, and who received confirmation of a successful test during the conference. His manner toward Stalin shifted. The Soviet leader — who had his own intelligence network inside the Manhattan Project — already knew.",
        },
        { type: "heading", content: "The Iron Curtain Descends" },
        {
          type: "paragraph",
          content:
            "Soviet expansion into Eastern Europe proceeded rapidly after 1945. In Poland, Romania, Bulgaria, Hungary, and Czechoslovakia, communist governments — sometimes through elections, sometimes through coup — replaced the provisional governments that had emerged from liberation. Churchill's Iron Curtain speech at Fulton, Missouri in March 1946 named the reality: a division of Europe from Stettin to Trieste, behind which Soviet power was consolidating.",
        },
        {
          type: "paragraph",
          content:
            "The Truman Doctrine (March 1947) formally committed the United States to supporting any country resisting Soviet-backed subversion — the immediate context was Greece and Turkey. The Marshall Plan (June 1947) offered $13 billion in American aid to reconstruct Europe's economies, explicitly designed to prevent the economic desperation that had enabled fascism and might now enable communism. The Soviet Union declined participation and required its Eastern European satellites to do the same. The Berlin Blockade (June 1948 – May 1949) — Soviet attempt to cut off West Berlin by road and rail — was answered by a Western airlift that flew over 200,000 sorties. The Soviets backed down.",
        },
      ],
      quiz: {
        question:
          "What was the strategic purpose of the Marshall Plan beyond simple economic reconstruction?",
        options: [
          {
            id: "a",
            text: "To bind Western European economies so closely to the United States that any future war would be mutually destructive",
            isCorrect: false,
          },
          {
            id: "b",
            text: "To prevent the economic desperation that had enabled fascism from enabling communism instead",
            isCorrect: true,
          },
          {
            id: "c",
            text: "To create the economic surplus that would fund American military bases in Western Europe",
            isCorrect: false,
          },
          {
            id: "d",
            text: "To demonstrate American economic superiority over the Soviet planned economy as ideological proof",
            isCorrect: false,
          },
        ],
        explanation:
          "American policymakers had drawn the explicit lesson from the inter-war period that economic ruin was the precondition for political extremism. Weimar Germany's hyperinflation and Depression-era unemployment had enabled Hitler; similar desperation in post-war Western Europe might enable communist parties that were already strong in France and Italy. The Marshall Plan was geopolitical strategy dressed in humanitarian clothes — and it worked. Western European communist parties' electoral support declined as economies recovered.",
      },
    },
    {
      id: "cw-02-events",
      title: "Key Events",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The Early Cold War: 1949–1962" },
        {
          type: "paragraph",
          content:
            "1949 was a year of shocks for the West: the Soviet Union tested its first atomic bomb in August, ending the American nuclear monopoly four years ahead of most intelligence estimates, and Mao Zedong's Communist Party completed its victory in the Chinese Civil War in October. McCarthy-era America responded to these setbacks with a Red Scare that destroyed careers and chilled political debate. The Korean War (1950–53), in which American-led UN forces defended South Korea against a North Korean invasion backed by China and the Soviet Union, ended in armistice along roughly the pre-war boundary. It was the first hot war of the Cold War and established the principle that conflicts between the superpowers would be fought through proxies.",
        },
        {
          type: "paragraph",
          content:
            "The Hungarian Uprising of 1956 — a genuine popular revolution against Soviet control, briefly encouraged by US radio broadcasts before being crushed by Soviet tanks — revealed the limits of 'rollback' rhetoric: the US would not risk war to liberate Eastern Europe. The same year, Khrushchev's Secret Speech to the Soviet Communist Party denouncing Stalin's crimes confirmed the ideological fissures within the communist world.",
        },
        { type: "heading", content: "The Cuban Missile Crisis" },
        {
          type: "paragraph",
          content:
            "The Cuban Missile Crisis of October 1962 was the closest humanity has come to nuclear war. Soviet Premier Khrushchev had placed nuclear missiles in Cuba, 90 miles from Florida, in part to compensate for American nuclear superiority and in part to deter a second US invasion attempt after the Bay of Pigs fiasco. President Kennedy imposed a naval blockade and demanded removal of the missiles. For thirteen days, the world waited. A Soviet submarine carrying nuclear torpedoes, cut off from communication, was nearly fired upon; its commander Vasily Arkhipov refused to authorise a nuclear response, possibly preventing global catastrophe. The crisis was resolved through back-channel negotiation: Soviet missiles removed from Cuba, American missiles quietly removed from Turkey.",
        },
        { type: "heading", content: "Vietnam, Détente, and Collapse" },
        {
          type: "paragraph",
          content:
            "The Vietnam War (US combat involvement 1964–1975) cost 58,000 American lives, killed millions of Vietnamese, and destroyed American public trust in its government and military leadership. The Prague Spring of 1968 — a Czechoslovak experiment in 'socialism with a human face' — was crushed by Soviet and Warsaw Pact forces within months. Nixon and Kissinger's détente (1972) — including the opening to China — briefly reduced Cold War tensions. The Soviet invasion of Afghanistan in 1979 ended détente. Reagan's massive arms buildup and Strategic Defence Initiative ('Star Wars') escalated the arms race beyond what the Soviet economy could match. Solidarity's resistance in Poland from 1980, Gorbachev's reform programme from 1985, and the chain reaction of 1989 revolutions brought the Berlin Wall down on November 9, 1989. The Soviet Union formally dissolved on December 25, 1991.",
        },
      ],
      quiz: {
        question:
          "How was the Cuban Missile Crisis ultimately resolved, and why was the resolution significant?",
        options: [
          {
            id: "a",
            text: "The United States threatened an air strike on Cuban missile sites, forcing Khrushchev to back down unconditionally",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Back-channel negotiation produced a mutual concession — Soviet missiles from Cuba, American missiles from Turkey — allowing both sides to claim they had not capitulated",
            isCorrect: true,
          },
          {
            id: "c",
            text: "UN Secretary-General U Thant mediated a ceasefire agreement under which both superpowers agreed to mutual nuclear reductions",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Khrushchev unilaterally removed the missiles after Kennedy agreed to a public statement guaranteeing Cuba's sovereignty",
            isCorrect: false,
          },
        ],
        explanation:
          "The public resolution — Soviet missiles removed from Cuba in exchange for an American non-invasion pledge — concealed the private deal: American Jupiter missiles in Turkey, which Kennedy had actually ordered removed months earlier but which bureaucratic inertia had left in place, were quietly withdrawn. Both leaders could present the outcome to their domestic audiences as a form of victory. This face-saving architecture — allowing both sides to back down without appearing to capitulate — became a model for how nuclear crises could be managed without catastrophe.",
      },
    },
    {
      id: "cw-03-figures",
      title: "Major Figures",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The American Presidents" },
        {
          type: "paragraph",
          content:
            "Harry Truman established the two instruments that defined American Cold War strategy: the Truman Doctrine (resist Soviet expansion everywhere) and the Marshall Plan (economic reconstruction as ideological defence). His decision to drop the atomic bombs on Japan, made without full Cabinet deliberation, set the precedent for presidential control of nuclear weapons. Dwight Eisenhower, in his farewell address, warned of the 'military-industrial complex' — a permanent war economy fusing military and corporate interests — as a danger to American democracy. The warning was ignored.",
        },
        {
          type: "paragraph",
          content:
            "John Kennedy's handling of the Cuban Missile Crisis — choosing blockade over air strike against the advice of many military advisers — is credited with preventing nuclear war. His willingness to consider the Soviet perspective, and to leave Khrushchev a face-saving exit, was more sophisticated than the hawkish advisers urging direct military action. Richard Nixon and Henry Kissinger's détente — including the opening of China as a counterweight to the Soviet Union — was realpolitik of high sophistication. Ronald Reagan's characterisation of the Soviet Union as an 'Evil Empire' and his massive arms buildup are credited by some with forcing the Soviet collapse; others argue Gorbachev's reforms would have happened regardless.",
        },
        { type: "heading", content: "The Soviet Leaders" },
        {
          type: "paragraph",
          content:
            "Stalin consolidated Eastern European control in the early Cold War and launched Soviet nuclear and space programmes. Nikita Khrushchev's Secret Speech (1956) denouncing Stalin's cult of personality was the first crack in Soviet ideological certainty. His 1962 overreach in Cuba, and the humiliation of its resolution, contributed to his removal in 1964. Leonid Brezhnev articulated the Brezhnev Doctrine — the Soviet right to intervene in any socialist state threatening to leave the bloc — and exercised it in Czechoslovakia. Mikhail Gorbachev's glasnost (openness) and perestroika (restructuring) were intended to save the Soviet system by reforming it. Instead, by releasing forces the system could not contain, they ended it.",
        },
      ],
      quiz: {
        question:
          "What was the unintended consequence of Gorbachev's glasnost and perestroika reforms?",
        options: [
          {
            id: "a",
            text: "They provoked a hardline coup that temporarily removed Gorbachev from power and reversed all reforms",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Intended to save the Soviet system through reform, they instead released forces the system could not contain and ended it",
            isCorrect: true,
          },
          {
            id: "c",
            text: "They convinced Eastern European satellite states to remain within the Soviet sphere voluntarily rather than by coercion",
            isCorrect: false,
          },
          {
            id: "d",
            text: "They reduced military spending sufficiently to allow economic recovery but created a political vacuum that nationalist parties filled",
            isCorrect: false,
          },
        ],
        explanation:
          "Gorbachev was not trying to end the Soviet Union — he was trying to save it. Glasnost, by allowing open discussion of Soviet history including Stalin's crimes and the system's failures, destroyed the ideological legitimacy the state depended on. Perestroika, by loosening economic controls without establishing functioning market mechanisms, produced scarcity and dysfunction. When the Brezhnev Doctrine was abandoned and Soviet forces did not intervene in the 1989 revolutions, the cascade was unstoppable. Gorbachev's tragedy was that he understood the Soviet system needed to change but underestimated how fragile it was.",
      },
    },
    {
      id: "cw-04-turning",
      title: "Turning Points",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Moments That Changed the Cold War's Course" },
        {
          type: "paragraph",
          content:
            "The Cuban Missile Crisis (October 1962) was the Cold War's most dangerous moment and, paradoxically, one of its most constructive. Both Kennedy and Khrushchev were shaken by how close the world had come to nuclear war through miscommunication, accident, and the fog of crisis. The direct hotline between Washington and Moscow — the 'red telephone' — was installed in 1963. The Limited Test Ban Treaty followed the same year. The crisis demonstrated that nuclear war could arrive through accident as much as intention, and accelerated arms control efforts that, however inadequate, reduced the risks.",
        },
        {
          type: "paragraph",
          content:
            "American defeat in Vietnam (1975) was the Cold War's most significant psychological turning point for the United States. The fall of Saigon — US Embassy personnel evacuated by helicopter from the rooftop as South Vietnamese allies were left behind — destroyed the credibility of the domino theory, exposed the limits of American military power against guerrilla forces with popular support, and created a 'Vietnam syndrome' that constrained American military intervention for a generation.",
        },
        { type: "heading", content: "Afghanistan and Solidarity" },
        {
          type: "paragraph",
          content:
            "The Soviet invasion of Afghanistan in December 1979 was the Soviet Union's Vietnam. The insurgency, funded and armed by the CIA and Pakistan — with weapons including the Stinger missile that neutralised the Soviet air advantage — proved impossible to suppress. The war cost 15,000 Soviet lives and an estimated one million Afghan lives, drained Soviet resources, and discredited the Soviet military and leadership at home. The Mujahideen the CIA funded included the networks that would later become the Taliban and shelter Al-Qaeda.",
        },
        {
          type: "paragraph",
          content:
            "Solidarity, the Polish trade union movement led by Lech Wałęsa, from its founding in 1980 demonstrated that civil society could organise beyond the state's control in a Soviet bloc country. The Polish government's imposition of martial law in 1981 suppressed but did not destroy it. Solidarity's survival proved that Soviet-style systems could neither fully reform nor permanently suppress organised dissent — a contradiction that Gorbachev's reforms later made terminal.",
        },
      ],
      quiz: {
        question:
          "What unintended strategic consequence emerged from CIA support for the Afghan Mujahideen in the 1980s?",
        options: [
          {
            id: "a",
            text: "Pakistan's ISI used American funding to develop its own nuclear programme independently of CIA oversight",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The armed networks the CIA funded — including those linked to Osama bin Laden — became the Taliban and provided shelter to Al-Qaeda",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Soviet withdrawal created a power vacuum that China moved to fill, strengthening its regional influence at America's expense",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The success of the Stinger missile programme convinced the Soviet Union to accelerate its own man-portable air defence systems",
            isCorrect: false,
          },
        ],
        explanation:
          "The CIA's Operation Cyclone, which funded and armed Afghan fighters resisting the Soviet occupation, was one of the largest covert operations in its history. It succeeded in its immediate aim — making Afghanistan costly for the Soviet Union. But the networks built, armed, and given sanctuary by Pakistan's ISI (a CIA partner in the operation) did not dissolve with the Soviet withdrawal. They regrouped, some becoming the Taliban regime that took power in 1996. Al-Qaeda, led by Saudi jihadist Osama bin Laden who had fought in Afghanistan, was sheltered by that regime. The September 11 attacks were, in a direct line, a consequence of Cold War strategy.",
      },
    },
    {
      id: "cw-05-legacy",
      title: "Legacy & Long-Term Impact",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Nuclear Arsenals and Arms Control" },
        {
          type: "paragraph",
          content:
            "The United States and Russia each retain approximately 5,000 nuclear warheads — enough to destroy human civilisation many times over. The Cold War's arms control architecture — SALT I and II, the INF Treaty, START — reduced arsenals from their Cold War peaks but did not eliminate them. The INF Treaty, which eliminated an entire class of intermediate-range nuclear missiles, was withdrawn from by the United States in 2019 over Russian violations. New START, the last remaining US-Russia nuclear arms control agreement, was suspended by Russia in 2023. The infrastructure of nuclear restraint built during the Cold War is now substantially dismantled.",
        },
        { type: "heading", content: "The Third World as Battlefield" },
        {
          type: "paragraph",
          content:
            "The Cold War's most destructive dimension for actual human lives was not the nuclear standoff in Europe but the proxy wars fought in Asia, Africa, and Latin America. Angola, Mozambique, Nicaragua, Guatemala, Chile, Iran, Indonesia — in each, American and Soviet interests funded, armed, and sometimes directly organised violence that killed hundreds of thousands and destroyed development. In Chile, the CIA backed the 1973 coup that overthrew the democratically elected Salvador Allende and installed Pinochet's military dictatorship. In Guatemala, a CIA-engineered coup in 1954 preceded decades of civil war that killed 200,000 people. The Cold War's human cost was overwhelmingly borne by people who had not chosen either side.",
        },
        { type: "heading", content: "The 'End of History' Illusion" },
        {
          type: "paragraph",
          content:
            "Francis Fukuyama's 1989 essay 'The End of History?' argued that liberal democracy had triumphed ideologically — that the great argument between political systems was over. NATO expanded eastward, incorporating former Warsaw Pact states. Russia, humiliated and economically chaotic through the 1990s, was expected to converge toward liberal democracy. The illusion lasted until the early 2000s. China remained authoritarian and grew to become the world's second-largest economy. Russia's democratic experiment ended with Vladimir Putin. The great-power competition the Cold War represented did not end in 1991 — it rested.",
        },
      ],
      quiz: {
        question:
          "Why did the 'end of history' thesis that liberal democracy had permanently triumphed prove to be an illusion?",
        options: [
          {
            id: "a",
            text: "The thesis underestimated the appeal of nationalist and religious ideologies that liberal democracy had suppressed rather than defeated",
            isCorrect: false,
          },
          {
            id: "b",
            text: "China remained authoritarian and grew to rival US power while Russia's democratic experiment ended under Putin, demonstrating great-power competition had only paused",
            isCorrect: true,
          },
          {
            id: "c",
            text: "NATO's eastward expansion provoked a Russian military response that liberal democratic theory had not anticipated",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The economic failures of the Washington Consensus in former Soviet states discredited liberal economics alongside liberal politics",
            isCorrect: false,
          },
        ],
        explanation:
          "Fukuyama's thesis was not about whether liberal democracy had won every current battle but whether it was the terminal point of political evolution — no coherent alternative ideology had survived. The problem was that China demonstrated an authoritarian state could achieve sustained economic development without political liberalisation, and that this model was attractive to many governments. Russia demonstrated that democratic institutions could be dismantled from within through legal means. The 1990s proved to be an interlude in great-power competition, not its conclusion.",
      },
    },
    {
      id: "cw-06-today",
      title: "Why This Matters Today",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The Cold War Resumed" },
        {
          type: "paragraph",
          content:
            "The Russian invasion of Ukraine in 2022 is the most visible evidence that the Cold War's fundamental dynamic — Russian sphere of influence versus Western institutions — did not end in 1991 but was suspended. NATO's eastward expansion, which Russia had consistently objected to as a violation of commitments made at the end of the Cold War (commitments whose precise content is disputed), provided the context for Putin's invasion. Whether the Cold War framing is the right one for the Ukraine conflict — it differs in important ways, including that it involves direct military aggression rather than proxy war — the pattern of a revisionist power challenging Western institutions is unmistakable.",
        },
        { type: "heading", content: "The Nuclear Risk" },
        {
          type: "paragraph",
          content:
            "Expert consensus holds that the nuclear risk is currently higher than at any point since the Cuban Missile Crisis. The arms control architecture is largely dismantled. Russia has explicitly raised nuclear threats in the context of Ukraine. The number of nuclear-armed states has grown since the Cold War: nine countries now have nuclear weapons compared to five during most of the Cold War period. The logic of deterrence — that mutual assured destruction makes nuclear use irrational — has not failed yet, but it depends on rationality under pressure and clear communication, both of which have been strained.",
        },
        { type: "heading", content: "China, Taiwan, and the Second Cold War" },
        {
          type: "paragraph",
          content:
            "The US-China competition is structurally similar to the original Cold War: two great powers with incompatible political systems, competing for influence across the developing world, with a potential flashpoint — Taiwan — where miscalculation could trigger military conflict. The arms control lesson from the Cold War is relevant: the US and Soviet Union, despite deep mutual hostility, negotiated agreements that reduced the risk of accidental war. Whether equivalent agreements are possible with China — which has historically refused to include its relatively small arsenal in arms control discussions — is an open question.",
        },
        { type: "heading", content: "What Arms Control History Teaches" },
        {
          type: "paragraph",
          content:
            "The Cold War produced genuine progress in managing nuclear risk — the hotline, the test ban treaties, SALT, INF, START. This progress was achieved not through trust or ideological convergence but through the recognition by both superpowers that nuclear war was an outcome neither could survive. The lesson is not that rivals become friends but that shared existential interests can produce cooperation between adversaries. The infrastructure of that cooperation — which took decades to build — has been largely dismantled in the past decade. Rebuilding it, in a more complex multi-polar nuclear environment, is one of the defining strategic challenges of the coming decades.",
        },
      ],
      reflection: {
        prompt:
          "The Cold War produced a paradox: two heavily armed adversaries with deep mutual hostility who nonetheless built a framework of agreements — hotlines, arms control treaties, back-channel communication — to reduce the risk of accidental nuclear war. What does this history suggest about what is and isn't possible between adversaries today? Looking at current great-power tensions, which elements of the Cold War's risk-reduction architecture do you think are most urgently needed, and what would it take to build them?",
      },
    },
  ],
}

export default course
