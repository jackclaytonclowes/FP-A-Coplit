import type { Course } from "@/types"

const course: Course = {
  id: "wwii",
  title: "World War II",
  slug: "wwii",
  description:
    "The most destructive conflict in human history — its causes, turning points, and the world it made. From the rise of fascism to Hiroshima and the post-war order.",
  category: "history",
  accentColor: "#4a5c38",
  estimatedHours: 4,
  tags: ["wwii", "history", "europe", "conflict", "20th-century"],
  lessons: [
    {
      id: "ww-01-origins",
      title: "Origins & Context",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The World That Made the War" },
        {
          type: "paragraph",
          content:
            "The origins of World War II lie in the settlement that ended World War I. The Treaty of Versailles (1919) imposed the war guilt clause on Germany, demanding it accept sole responsibility for the conflict. With that guilt came crushing reparations, the loss of territory including Alsace-Lorraine to France and the Polish Corridor dividing East Prussia from the rest of Germany, and strict limits on its military. The humiliation was felt by Germans across the political spectrum.",
        },
        {
          type: "paragraph",
          content:
            "The Weimar Republic, Germany's first democratic government, was born amid defeat and never shed the stigma. It survived a series of political crises, hyperinflation in 1923 that destroyed savings overnight, and never earned the deep loyalty of the German establishment. When the Great Depression arrived after 1929 — collapsing trade, sending unemployment to over 30% — the Republic had little credibility left with which to defend itself.",
        },
        { type: "heading", content: "The Rise of Fascism" },
        {
          type: "paragraph",
          content:
            "Adolf Hitler came to power not through a coup but through democratic means — the Nazi Party won seats in elections, and Hitler was appointed Chancellor by President Hindenburg in January 1933, who believed he could be controlled. Within months, the Reichstag fire and the Enabling Act had turned the chancellorship into a dictatorship. Nazi ideology combined extreme nationalism, racial hierarchy with Aryan supremacy at its apex, antisemitism as its organizing principle, and expansionist ambition framed as recovering German greatness.",
        },
        {
          type: "paragraph",
          content:
            "Benito Mussolini had pioneered a template in Italy, coming to power in 1922 and demonstrating that fascism could seize a modern state. Imperial Japan's military expansion into Manchuria (1931) and China (1937) added a Pacific dimension to a growing pattern of aggressive revisionist powers. In Spain, the Civil War (1936-39) served as a rehearsal — German and Italian forces tested weapons and tactics, the world watched, and appeasement became the dominant Western response.",
        },
        {
          type: "paragraph",
          content:
            "The Munich Agreement of September 1938, in which Britain and France allowed Hitler to annex Czechoslovakia's Sudetenland in exchange for promises of no further demands, is the defining symbol of appeasement's failure. Less than six months later, Germany occupied the rest of Czechoslovakia. By the time Britain and France resolved to resist, Hitler had concluded they would not fight.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The War Begins: 1939–1941" },
        {
          type: "paragraph",
          content:
            "On September 1, 1939, Germany invaded Poland. Two days later, Britain and France declared war. The Polish campaign was over within weeks, and after a period of relative quiet on the Western Front — the 'Phoney War' — Germany struck west in May 1940. France, expected to hold firm behind the Maginot Line, collapsed in six weeks. The Fall of France in June 1940 was a shock that reordered the entire European strategic situation.",
        },
        {
          type: "paragraph",
          content:
            "The Battle of Britain (summer 1940) was Hitler's attempt to destroy the RAF and establish air superiority for an invasion. The RAF held. It was the first defeat of the war for Germany and demonstrated that Britain would not be conquered quickly. Churchill's refusal to negotiate proved decisive — Hitler turned east.",
        },
        { type: "heading", content: "The War Becomes Global: 1941" },
        {
          type: "paragraph",
          content:
            "Operation Barbarossa, launched on June 22, 1941, was the largest military operation in history — over three million German troops crossing into the Soviet Union on a front nearly 2,900 kilometres wide. Initial German advances were spectacular, with hundreds of thousands of Soviet troops encircled and captured. But the Soviet Union did not collapse as Hitler had predicted, and the Wehrmacht found itself fighting a war it was not equipped for by winter.",
        },
        {
          type: "paragraph",
          content:
            "On December 7, 1941, Japanese carrier aircraft attacked the US Pacific Fleet at Pearl Harbor, killing over 2,400 Americans. The following day, the United States declared war on Japan. Hitler then declared war on the United States — a decision that transformed a European and Pacific conflict into a true world war and ultimately sealed the Axis's fate.",
        },
        { type: "heading", content: "Turning the Tide: 1942–1944" },
        {
          type: "paragraph",
          content:
            "The Battle of Stalingrad (August 1942 – February 1943) was among the bloodiest battles in history. German forces drove deep into the Soviet city, fighting street by street. A Soviet counteroffensive encircled the German Sixth Army. When Field Marshal Paulus surrendered in February 1943, 800,000 Axis soldiers had been killed, wounded, or captured. The Wehrmacht's aura of invincibility was destroyed.",
        },
        { type: "heading", content: "Liberation and Destruction: 1944–1945" },
        {
          type: "paragraph",
          content:
            "D-Day, June 6, 1944, saw the largest amphibious operation in history — over 156,000 Allied troops landed on the Normandy beaches. Paris was liberated in August. Germany launched a final offensive at the Battle of the Bulge (December 1944) that briefly alarmed Allied commanders but ultimately consumed Germany's last strategic reserve. Berlin fell in May 1945.",
        },
        {
          type: "paragraph",
          content:
            "In the Pacific, American forces had been island-hopping toward Japan. On August 6, 1945, the United States dropped an atomic bomb on Hiroshima; on August 9, a second bomb destroyed Nagasaki. Japan surrendered on August 15. The nuclear age had begun.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Leaders Who Shaped the War" },
        {
          type: "paragraph",
          content:
            "Adolf Hitler was both the war's architect and, ultimately, its author of defeat. His early tactical instincts were sometimes brilliant — the audacity of the Fall of France campaign came largely from his support for the Manstein Plan when his generals were cautious — but his strategic decisions became increasingly erratic and catastrophic. His insistence on fighting for every inch of ground, his refusal to allow strategic retreats, and the decision to invade the Soviet Union while still at war with Britain were the errors that lost the war.",
        },
        {
          type: "paragraph",
          content:
            "Winston Churchill became Prime Minister in May 1940, at the moment of maximum British peril. His speeches — 'I have nothing to offer but blood, toil, tears and sweat' — communicated not false comfort but unflinching resolve. His refusal to negotiate with Hitler in May 1940, when there were voices in the War Cabinet for a settlement, may have been the most consequential decision of the war.",
        },
        { type: "heading", content: "Roosevelt and Stalin" },
        {
          type: "paragraph",
          content:
            "Franklin Roosevelt's decision to supply Britain through the Lend-Lease programme before the US was formally at war, and his Atlantic Charter with Churchill declaring a vision for the post-war world, shaped the alliance's character. Roosevelt died in April 1945, weeks before Germany's surrender, leaving Truman to face the atomic decision. Joseph Stalin's Soviet Union bore the greatest human cost of the war — approximately 27 million dead, roughly half of all Allied deaths — and Stalin's strategic direction, despite catastrophic early failures, ultimately produced the military machine that destroyed the Wehrmacht.",
        },
        { type: "heading", content: "The Military Commanders" },
        {
          type: "paragraph",
          content:
            "Dwight Eisenhower commanded Operation Overlord, the Normandy invasion, and managed the complex politics of an alliance among strong personalities. Erwin Rommel — the Desert Fox — was Germany's most famous general, celebrated in both Axis and Allied press for his conduct in North Africa. His relationship with Nazism was more ambiguous than his reputation: he was implicated in the July 1944 plot to assassinate Hitler and was forced to take poison. Bernard Montgomery led British forces with a caution that sometimes frustrated Allied commanders but usually kept casualties down. Charles de Gaulle, commander of the Free French in exile, used political will to ensure France emerged from liberation as a major power rather than a defeated collaborator.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Moments That Decided the War" },
        {
          type: "paragraph",
          content:
            "The Battle of Stalingrad (November 1942 – February 1943) was the largest land battle in the European war and its most consequential turning point. The Soviet Operation Uranus encircled the German Sixth Army; Hitler's refusal to allow a breakout doomed 300,000 men to death or captivity. From this moment, German forces in the East were in strategic retreat for the remainder of the war.",
        },
        {
          type: "paragraph",
          content:
            "The Battle of Midway (June 1942) was its Pacific equivalent. US codebreakers had determined the Japanese were attacking Midway atoll, and American carriers lay in ambush. In a few hours, Japan lost four fleet carriers — irreplaceable vessels that had attacked Pearl Harbor. Japanese naval dominance in the Pacific ended and was never recovered. The island-hopping campaign that would eventually reach Japan's doorstep became possible.",
        },
        { type: "heading", content: "D-Day and the Atomic Bomb" },
        {
          type: "paragraph",
          content:
            "D-Day, June 6, 1944, was the second front that the Soviet Union had been demanding since 1941. With Allied forces breaking out from Normandy and the Red Army advancing from the east, German defeat became a matter of time rather than possibility. The operation's success vindicated years of Allied preparation and planning, and Churchill's insistence on strategic patience rather than premature landings.",
        },
        {
          type: "paragraph",
          content:
            "The atomic bombing of Hiroshima on August 6, 1945, was not just the weapon that ended the war in the Pacific — it was a threshold in human history. A single aircraft, a single bomb, a city destroyed. The decision to use it remains disputed: was the invasion of Japan it was meant to prevent so costly it justified the deaths of over 100,000 civilians? What is not disputed is its strategic consequence: the nuclear age began, and warfare between great powers has never been the same since.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Holocaust" },
        {
          type: "paragraph",
          content:
            "The Holocaust was the systematic murder of six million Jewish people — two-thirds of European Jewry — by the Nazi state and its collaborators. Including Roma, disabled people, Soviet prisoners of war, political prisoners, and others, the total number of victims reaches 11 million. The Holocaust was not an improvised atrocity but a bureaucratic project: coordinated across government ministries, facilitated by railways and corporations, carried out by ordinary people. Its documentation in the Nuremberg Trials established a new principle in international law: that crimes against humanity exist independently of national law, and that following orders is not a defence.",
        },
        { type: "heading", content: "The New World Order" },
        {
          type: "paragraph",
          content:
            "The United Nations was founded in San Francisco in 1945 with the explicit aim of preventing another world war. The Marshall Plan committed $13 billion in American aid to rebuild Western Europe — an act of strategic generosity unprecedented in history, explicitly designed to prevent the economic desperation that had enabled fascism. NATO, founded in 1949, formalised the American commitment to European defence.",
        },
        {
          type: "paragraph",
          content:
            "The Iron Curtain that Churchill described in his 1946 Fulton speech divided Europe along the lines where Soviet and Western armies had met in 1945. Eastern Europe's liberation from Nazi occupation became occupation by Soviet-backed communist governments. The Cold War that defined the next forty years began not in 1947 but the day the guns fell silent in Europe.",
        },
        { type: "heading", content: "Decolonisation" },
        {
          type: "paragraph",
          content:
            "The war accelerated the end of European empires. Britain, France, and the Netherlands emerged from the war exhausted and indebted. The moral authority that imperial powers had invoked — bringing civilisation to less developed peoples — had been destroyed by the behaviour of the most 'civilised' nation in Europe. Independence movements across Asia and Africa found their moment. India gained independence in 1947; the majority of African states within twenty years.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The War We Still Live Inside" },
        {
          type: "paragraph",
          content:
            "The world order that emerged from World War II remains, with modifications, the world order of today. The United Nations Security Council still reflects the victors of 1945. Nuclear deterrence still rests on the logic of Hiroshima — that the threat of mutual destruction is more stable than the pursuit of victory. NATO, founded to prevent another European war, is still the primary security institution of the Western world.",
        },
        { type: "heading", content: "The European Union as WWII Peace Project" },
        {
          type: "paragraph",
          content:
            "The European Union was explicitly conceived as a structure to make another European war impossible by making European economies and fates inseparable. Jean Monnet, one of its founding architects, saw economic integration not as an end but as a means — the progressive entanglement of national interests until war became irrational. The EU is, in this reading, the most successful peace project in history: the continent that produced two world wars has not had a major war between its members since 1945.",
        },
        { type: "heading", content: "Holocaust Memory and the Warning It Carries" },
        {
          type: "paragraph",
          content:
            "Holocaust memory is not merely historical — it is the central warning about what modern states are capable of when they define groups of people as subhuman. The Holocaust was not carried out by monsters but by bureaucrats, engineers, railway administrators, and soldiers who told themselves they were following orders. The lesson that institutional evil requires ordinary participation — and is enabled by ordinary silence — is not a lesson about another time.",
        },
        { type: "heading", content: "How Democracies Fail" },
        {
          type: "paragraph",
          content:
            "The Nazi seizure of power is studied not because it was unique but because of how recognisable its steps are: the emergency powers, the identification of enemies, the normalisation of exceptional measures, the gradual erosion of institutional independence, the self-censorship of those who knew better. Historians of authoritarianism note the same sequence in different settings in different eras.",
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
