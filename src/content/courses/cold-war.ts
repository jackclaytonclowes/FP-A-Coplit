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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Alliance That Never Trusted Itself" },
        {
          type: "paragraph",
          content:
            "The Cold War was visible in the cracks of the wartime alliance before Germany surrendered. At Yalta, Churchill, Roosevelt, and Stalin agreed on the outlines of post-war Europe — but each party understood the agreement differently.",
        },
        {
          type: "paragraph",
          content:
            "At Potsdam, Truman received news of a successful atomic test and shifted his manner toward Stalin. The Soviet leader already knew — he had intelligence inside the Manhattan Project.",
        },
        { type: "heading", content: "The Iron Curtain Descended Fast" },
        {
          type: "paragraph",
          content:
            "By 1948, communist governments had replaced provisional ones across Eastern Europe — sometimes through elections, sometimes through coup. Churchill named the reality: a division of Europe from Stettin to Trieste.",
        },
        {
          type: "paragraph",
          content:
            "The Truman Doctrine (1947) committed the US to resisting Soviet expansion everywhere. The Marshall Plan ($13 billion) rebuilt Western European economies to prevent the desperation that enabled fascism from enabling communism. The Berlin Blockade tested the West — an airlift answered it.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "1949: A Year of Shocks" },
        {
          type: "paragraph",
          content:
            "The Soviets tested their first atom bomb — four years ahead of Western estimates. Mao's Communist Party won the Chinese Civil War. The US responded with a Red Scare that destroyed careers and chilled debate for years.",
        },
        {
          type: "paragraph",
          content:
            "Hungary 1956: a genuine popular revolution, briefly encouraged by US radio broadcasts, crushed by Soviet tanks. The US would not risk war to liberate Eastern Europe. 'Rollback' was just rhetoric.",
        },
        { type: "heading", content: "Thirteen Days in October 1962" },
        {
          type: "paragraph",
          content:
            "Soviet missiles in Cuba, 90 miles from Florida. Kennedy imposed a naval blockade. A Soviet submarine nearly fired nuclear torpedoes — its commander refused. The crisis was resolved through back channels: Soviet missiles out of Cuba, American missiles quietly out of Turkey.",
        },
        { type: "heading", content: "Vietnam, Détente, and the Long Unravelling" },
        {
          type: "paragraph",
          content:
            "Vietnam cost 58,000 American lives, destroyed public trust in government, and proved the limits of American military power. The Soviet invasion of Afghanistan in 1979 became their Vietnam. Reagan's arms buildup bankrupted the competition. The Berlin Wall fell on 9 November 1989. The Soviet Union dissolved on 25 December 1991.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The American Presidents Who Shaped the Cold War" },
        {
          type: "paragraph",
          content:
            "Truman created the doctrine and the Marshall Plan. Eisenhower warned of the military-industrial complex in his farewell address — then everyone ignored him. Kennedy chose blockade over air strike at Cuba and probably prevented nuclear war.",
        },
        {
          type: "paragraph",
          content:
            "Nixon and Kissinger's opening to China as a Soviet counterweight was realpolitik of high sophistication. Reagan's arms buildup and 'Evil Empire' framing are credited by some with forcing Soviet collapse — others argue Gorbachev would have happened regardless.",
        },
        { type: "heading", content: "The Soviet Leaders: Consolidators, Reformers, Enders" },
        {
          type: "paragraph",
          content:
            "Stalin locked in Eastern Europe and launched the nuclear programme. Khrushchev's Secret Speech cracked Soviet ideological certainty. Brezhnev exercised the right to crush any socialist state trying to leave the bloc. Gorbachev tried to reform the system — and accidentally ended it.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Missile Crisis Built Safeguards Because It Terrified Both Sides" },
        {
          type: "paragraph",
          content:
            "Kennedy and Khrushchev were both shaken by how close accident and miscommunication had come to catastrophe. The Moscow-Washington hotline was installed in 1963. The Limited Test Ban Treaty followed. Crisis as catalyst for arms control.",
        },
        {
          type: "paragraph",
          content:
            "The fall of Saigon in 1975 — US Embassy staff evacuated by helicopter as allies were left behind — destroyed the domino theory and created a Vietnam syndrome that constrained American military intervention for a generation.",
        },
        { type: "heading", content: "Afghanistan: The Soviet Union's Vietnam" },
        {
          type: "paragraph",
          content:
            "The Soviet invasion of Afghanistan (1979) proved impossible to suppress. 15,000 Soviet deaths. One million Afghan deaths. The CIA funded the Mujahideen — including the networks that became the Taliban and sheltered Al-Qaeda.",
        },
        {
          type: "paragraph",
          content:
            "Solidarity in Poland, from 1980, proved civil society could organise beyond the state's control in the Soviet bloc. Martial law suppressed it but didn't destroy it. That survival was a preview of 1989.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Arsenals Are Still There" },
        {
          type: "paragraph",
          content:
            "The US and Russia each retain around 5,000 nuclear warheads. The Cold War arms control architecture — SALT, INF, START — has been substantially dismantled. The INF Treaty is gone. New START was suspended by Russia in 2023.",
        },
        { type: "heading", content: "The Third World Paid the Real Cost" },
        {
          type: "paragraph",
          content:
            "Angola, Chile, Guatemala, Nicaragua, Indonesia — the Cold War's most destructive dimension was proxy wars fought by people who hadn't chosen either superpower. The CIA backed Pinochet's 1973 coup. A Guatemala coup in 1954 preceded decades of civil war killing 200,000.",
        },
        { type: "heading", content: "The 'End of History' Was an Illusion" },
        {
          type: "paragraph",
          content:
            "Fukuyama declared liberal democracy had permanently won. China remained authoritarian and became the world's second-largest economy. Russia's democratic experiment ended under Putin. Great-power competition didn't end in 1991 — it rested.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Cold War Resumed — With Different Names" },
        {
          type: "paragraph",
          content:
            "Russia's 2022 invasion of Ukraine shows that the Cold War's fundamental dynamic — Russian sphere vs. Western institutions — wasn't resolved in 1991. It was suspended. The pattern of a revisionist power challenging Western institutions is unmistakable.",
        },
        { type: "heading", content: "Nuclear Risk Is Higher Than Since the Missile Crisis" },
        {
          type: "paragraph",
          content:
            "Expert consensus: nuclear risk is now at its highest since 1962. Arms control architecture largely dismantled. Russia has explicitly raised nuclear threats. Nine countries now have nuclear weapons. Deterrence still depends on rationality under pressure.",
        },
        { type: "heading", content: "China, Taiwan, and Cold War 2.0" },
        {
          type: "paragraph",
          content:
            "Two great powers with incompatible systems, competing for global influence, with Taiwan as the potential flashpoint. The arms control lesson from the original Cold War is directly relevant — adversaries can cooperate on existential risks without becoming friends.",
        },
        { type: "heading", content: "Arms Control Takes Decades to Build — and Days to Dismantle" },
        {
          type: "paragraph",
          content:
            "The Cold War produced hotlines, test bans, SALT, INF, START — not through trust, but through shared recognition that nuclear war was unsurvivable. That infrastructure has been largely dismantled in a decade. Rebuilding it in a multipolar world is one of the defining challenges ahead.",
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
