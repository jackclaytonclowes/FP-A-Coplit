import type { Course } from "@/types"

const course: Course = {
  id: "wwii",
  title: "World War II",
  slug: "wwii",
  description:
    "The most destructive conflict in human history — its causes, turning points, and the world it made. From the rise of fascism to Hiroshima and the post-war order.",
  category: "history",
  accentColor: "#4a5c38",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/This_is_War%21_-_National_Archives_-_ARC_535790.jpg/1280px-This_is_War%21_-_National_Archives_-_ARC_535790.jpg",
  estimatedHours: 4,
  tags: ["wwii", "history", "europe", "conflict", "20th-century"],
  lessons: [
    {
      id: "ww-01-origins",
      title: "Origins & Context",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "WWI Created the Conditions for WWII" },
        {
          type: "paragraph",
          content:
            "The Treaty of Versailles forced Germany to accept sole guilt for WWI, pay crippling reparations, and surrender territory. Germans across the political spectrum felt humiliated — and Hitler weaponised that humiliation.",
        },
        {
          type: "paragraph",
          content:
            "The Weimar Republic — Germany's first democracy — never earned deep loyalty. When the Great Depression sent unemployment past 30%, the Republic had no credibility left to defend itself.",
        },
        { type: "heading", content: "Hitler Rose Through Democracy, Then Destroyed It" },
        {
          type: "paragraph",
          content:
            "The Nazis won seats in elections. Hindenburg appointed Hitler Chancellor in 1933, believing he could be controlled. Within months, the Reichstag fire and the Enabling Act had turned the chancellorship into a dictatorship.",
        },
        {
          type: "paragraph",
          content:
            "Mussolini had pioneered the template in Italy in 1922. Japan invaded Manchuria in 1931. Spain's Civil War became a rehearsal — Germany tested weapons, the world watched, and appeasement became the default Western response.",
        },
        {
          type: "paragraph",
          content:
            "The Munich Agreement of 1938 let Hitler annex Czechoslovakia's Sudetenland in exchange for promises. Six months later he took the rest of Czechoslovakia. By then he had concluded Britain and France would not fight.",
        },
      ],
      quiz: {
        question:
          "Which provision of the Treaty of Versailles was most significant in fuelling German resentment?",
        options: [
          {
            id: "a",
            text: "The war guilt clause, which forced Germany to accept sole responsibility for the war",
            isCorrect: true,
          },
          {
            id: "b",
            text: "The ban on Germany joining the newly formed League of Nations",
            isCorrect: false,
          },
          {
            id: "c",
            text: "The requirement to surrender its entire navy to the Royal Navy",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The forced abdication of the Kaiser and abolition of the monarchy",
            isCorrect: false,
          },
        ],
        explanation:
          "The war guilt clause (Article 231) was uniquely humiliating because it was the moral and legal foundation for every other punitive measure — reparations, territorial losses, military restrictions. Germans across the political spectrum rejected it as a lie, and Hitler's promise to repudiate Versailles was central to his appeal. The clause handed him his most powerful rhetorical weapon.",
      },
    },
    {
      id: "ww-02-events",
      title: "Key Events",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "1939–1941: Europe Falls, Then the World Joins" },
        {
          type: "paragraph",
          content:
            "Germany invaded Poland on 1 September 1939. France — expected to hold — collapsed in six weeks. The Battle of Britain stopped Hitler's advance west. He turned east.",
        },
        {
          type: "paragraph",
          content:
            "Operation Barbarossa (June 1941) was the largest military operation in history — three million troops, 2,900-kilometre front. The Soviet Union didn't collapse as Hitler predicted. By winter, the Wehrmacht was fighting a war it wasn't equipped for.",
        },
        { type: "heading", content: "Pearl Harbor Changed Everything" },
        {
          type: "paragraph",
          content:
            "Japan attacked Pearl Harbor on 7 December 1941, killing 2,400 Americans. Hitler then declared war on the United States — a decision that sealed the Axis's fate and turned a regional conflict into a world war.",
        },
        { type: "heading", content: "Stalingrad Broke the Myth of German Invincibility" },
        {
          type: "paragraph",
          content:
            "800,000 Axis soldiers killed, wounded, or captured at Stalingrad (1942–43). The German Sixth Army surrendered. The Eastern Front's strategic initiative shifted permanently to the Soviet Union.",
        },
        { type: "heading", content: "D-Day to Hiroshima: The End Game" },
        {
          type: "paragraph",
          content:
            "156,000 Allied troops landed at Normandy on 6 June 1944. Berlin fell in May 1945. On 6 August 1945, one bomb destroyed Hiroshima. Japan surrendered. The nuclear age had begun.",
        },
      ],
      quiz: {
        question:
          "Why was the Battle of Stalingrad considered the decisive turning point of the war in Europe?",
        options: [
          {
            id: "a",
            text: "It was the first engagement in which Allied forces used air superiority to win a ground battle",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The destruction of the German Sixth Army and 800,000 Axis casualties ended the Wehrmacht's reputation for invincibility",
            isCorrect: true,
          },
          {
            id: "c",
            text: "It marked the first time German forces had been stopped before reaching their strategic objective",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The Soviet counteroffensive demonstrated for the first time that the Red Army could execute complex operational manoeuvres",
            isCorrect: false,
          },
        ],
        explanation:
          "Stalingrad destroyed the myth of German military invincibility that had dominated Europe since 1939. The encirclement and destruction of an entire German army group — 800,000 Axis casualties — demonstrated that the Wehrmacht could be beaten at its own game of large-scale manoeuvre warfare. After Stalingrad, the strategic initiative on the Eastern Front shifted permanently to the Soviet Union.",
      },
    },
    {
      id: "ww-03-figures",
      title: "Major Figures",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Hitler: Brilliant Tactician, Catastrophic Strategist" },
        {
          type: "paragraph",
          content:
            "His early instincts were sometimes sharp — the Fall of France campaign was genuinely audacious. But invading the Soviet Union while still at war with Britain, and refusing strategic retreats, lost the war.",
        },
        {
          type: "paragraph",
          content:
            "Churchill became Prime Minister in May 1940 at Britain's lowest moment. His refusal to negotiate with Hitler — when voices in his own War Cabinet were urging it — may have been the most consequential decision of the entire war.",
        },
        { type: "heading", content: "Roosevelt and Stalin: The Alliance That Won" },
        {
          type: "paragraph",
          content:
            "Roosevelt supplied Britain before the US entered the war and shaped the alliance's character. Stalin's Soviet Union bore the greatest human cost — approximately 27 million dead — and ultimately destroyed the Wehrmacht.",
        },
        { type: "heading", content: "The Commanders" },
        {
          type: "paragraph",
          content:
            "Eisenhower managed the politics of Overlord. Rommel was celebrated by both sides — then implicated in the 1944 assassination plot and forced to take poison. De Gaulle used sheer political will to ensure France emerged as a major power rather than a defeated collaborator.",
        },
      ],
      quiz: {
        question:
          "What was the significance of Churchill's refusal to negotiate with Hitler in May 1940?",
        options: [
          {
            id: "a",
            text: "It freed Britain to pursue a separate peace with Italy while fighting Germany",
            isCorrect: false,
          },
          {
            id: "b",
            text: "It prevented a settlement that might have left Hitler dominant in Europe and ended British sovereignty",
            isCorrect: true,
          },
          {
            id: "c",
            text: "It triggered the formal military alliance with the United States that Roosevelt had been seeking",
            isCorrect: false,
          },
          {
            id: "d",
            text: "It allowed Britain to concentrate all military resources on the Battle of Britain",
            isCorrect: false,
          },
        ],
        explanation:
          "In May 1940, voices within Churchill's own War Cabinet — including Foreign Secretary Lord Halifax — argued for exploring peace terms through Mussolini's mediation. Churchill's refusal was not inevitable. A negotiated settlement at that moment would almost certainly have left Hitler dominant in Western Europe and stripped Britain of the independent foreign policy that ultimately enabled the alliance with the US and USSR that won the war.",
      },
    },
    {
      id: "ww-04-turning",
      title: "Turning Points",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Stalingrad: 800,000 Casualties, One Turning Point" },
        {
          type: "paragraph",
          content:
            "The Soviet Operation Uranus encircled the German Sixth Army. Hitler refused a breakout. 300,000 men died or were captured. Germany never held strategic initiative in the East again.",
        },
        {
          type: "paragraph",
          content:
            "Midway (June 1942) was the Pacific equivalent. US codebreakers ambushed the Japanese fleet. Four irreplaceable carriers sunk in hours. Japan's naval dominance ended and was never recovered.",
        },
        { type: "heading", content: "D-Day: The Second Front Stalin Had Been Demanding Since 1941" },
        {
          type: "paragraph",
          content:
            "With 156,000 troops landing at Normandy and the Red Army advancing from the east, German defeat became a matter of when, not if. Years of Allied preparation vindicated in one day.",
        },
        {
          type: "paragraph",
          content:
            "Hiroshima was not just the end of the Pacific war — it was a threshold in human history. One aircraft. One bomb. A city destroyed. Nuclear deterrence still rests on what happened that day.",
        },
      ],
      quiz: {
        question:
          "Why was the Battle of Midway in June 1942 a decisive turning point in the Pacific war?",
        options: [
          {
            id: "a",
            text: "It was the first naval battle won primarily through submarine warfare rather than surface vessels",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The destruction of four Japanese fleet carriers ended Japan's naval dominance and could not be recovered",
            isCorrect: true,
          },
          {
            id: "c",
            text: "American forces captured a strategic island base from which bombing raids on Japan could be launched",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The Japanese navy lost its experienced admirals who had planned the Pearl Harbor attack",
            isCorrect: false,
          },
        ],
        explanation:
          "Japan's four fleet carriers — Akagi, Kaga, Soryu, and Hiryu — sunk at Midway were the same carriers that had attacked Pearl Harbor. Replacing them required years Japan did not have. Naval carrier warfare had replaced battleships as the decisive instrument of Pacific power, and Japan's loss of four carriers in a single engagement permanently shifted the strategic balance. American industrial capacity could replace losses; Japan's could not.",
      },
    },
    {
      id: "ww-05-legacy",
      title: "Legacy & Long-Term Impact",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Holocaust: Bureaucratic, Deliberate, Documented" },
        {
          type: "paragraph",
          content:
            "Six million Jewish people murdered — two-thirds of European Jewry. The Holocaust was not improvised. It was coordinated across ministries, run by railways and corporations, carried out by ordinary people following orders.",
        },
        { type: "heading", content: "Nuremberg Established a New Legal Principle" },
        {
          type: "paragraph",
          content:
            "Crimes against humanity now exist above national law. Following orders is not a defence. These principles — genuinely new in 1945 — are the foundation of international humanitarian law today.",
        },
        { type: "heading", content: "The Post-War Order Was Built on WWII's Lessons" },
        {
          type: "paragraph",
          content:
            "The UN, the Marshall Plan, NATO — all designed to prevent the specific failures that produced the war: economic desperation, national humiliation, institutional collapse. The EU is WWII's most ambitious peace project.",
        },
        { type: "heading", content: "Decolonisation: The Moral Authority Evaporated" },
        {
          type: "paragraph",
          content:
            "How could colonial powers claim to be civilising the world after the Holocaust? They couldn't. India gained independence in 1947. Most of Africa followed within twenty years.",
        },
      ],
      quiz: {
        question:
          "What legal principle was established by the Nuremberg Trials that had not previously existed in international law?",
        options: [
          {
            id: "a",
            text: "That military commanders bear responsibility for actions taken by their forces in the field",
            isCorrect: false,
          },
          {
            id: "b",
            text: "That crimes against humanity exist independently of national law and following orders is not a defence",
            isCorrect: true,
          },
          {
            id: "c",
            text: "That civilian populations may not be targeted by military forces under any circumstances",
            isCorrect: false,
          },
          {
            id: "d",
            text: "That victorious powers may try the leaders of defeated nations for war crimes",
            isCorrect: false,
          },
        ],
        explanation:
          "The Nuremberg Trials created the concept of crimes against humanity as a category that exists above and beyond the laws of individual states. This was genuinely new: defendants could not argue that they had acted legally under German law. The principle that 'following orders' is not a defence for participating in atrocity became foundational to international humanitarian law and the later creation of the International Criminal Court.",
      },
    },
    {
      id: "ww-06-today",
      title: "Why This Matters Today",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "We Still Live Inside the World WWII Made" },
        {
          type: "paragraph",
          content:
            "The UN Security Council reflects 1945's victors. Nuclear deterrence still rests on Hiroshima's logic. NATO still anchors Western security. The post-war order is modified but not replaced.",
        },
        { type: "heading", content: "The EU Is a Peace Project Built on WWII's Ruins" },
        {
          type: "paragraph",
          content:
            "Jean Monnet designed European integration to make another war irrational by entangling national economies inseparably. The continent that produced two world wars has had no major war between members since 1945.",
        },
        { type: "heading", content: "The Holocaust Warning Is Not About the Past" },
        {
          type: "paragraph",
          content:
            "The Holocaust was carried out by bureaucrats, engineers, and soldiers who told themselves they were following orders. The lesson — that institutional evil requires ordinary participation and ordinary silence — is not a lesson about another time.",
        },
        { type: "heading", content: "Democracies Can Fail — Here's How" },
        {
          type: "paragraph",
          content:
            "Emergency powers. Enemies identified. Exceptional measures normalised. Institutional independence eroded. Self-censorship from those who know better. Historians of authoritarianism note the same sequence across eras.",
        },
      ],
      reflection: {
        prompt:
          "The EU was built explicitly to prevent the conditions that produced World War II — economic desperation, national humiliation, institutional failure, and the normalisation of increasingly extreme politics. Look at the political landscape of today: which of those preconditions do you see echoes of, and which of the post-war institutions designed to prevent them do you think are holding? What would you point to as evidence either way?",
      },
    },
  ],
}

export default course
