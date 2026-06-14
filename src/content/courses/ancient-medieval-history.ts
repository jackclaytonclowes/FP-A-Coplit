import type { Course } from "@/types"

const course: Course = {
  id: "ancient-medieval-history",
  title: "Ancient & Medieval History",
  slug: "ancient-medieval-history",
  description:
    "A survey of human civilisation from the ancient world through the medieval period — the empires, ideas, and cultural forces that shaped the foundations of the modern world.",
  category: "history",
  accentColor: "#8b6848",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/1280px-All_Gizah_Pyramids.jpg",
  estimatedHours: 4,
  tags: ["ancient", "medieval", "classical", "empire", "civilisation"],
  lessons: [
    {
      id: "am-01-origins",
      title: "Origins & Context",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Civilisation Began as an Accounting System" },
        {
          type: "paragraph",
          content:
            "The Sumerians invented writing around 3500 BCE to track grain and livestock. From that practical start came law, literature, and astronomy. Hammurabi's law code followed — punishments that varied by social class tell us as much about Babylon as the laws themselves.",
        },
        {
          type: "paragraph",
          content:
            "Ancient Egypt maintained its political and cultural form for nearly three thousand years — longer than the gap between Julius Caesar and today. The pharaoh was simultaneously king and god. Words inscribed in tombs were believed to have magical power.",
        },
        { type: "heading", content: "The Axial Age: Ideas Everywhere at Once" },
        {
          type: "paragraph",
          content:
            "The Indus Valley built grid streets and public drainage systems two thousand years before Europe caught up. China's Zhou dynasty developed the political philosophy that would culminate in Confucius.",
        },
        {
          type: "paragraph",
          content:
            "Greece developed in city-states rather than a single empire — fragmentation produced extraordinary intellectual diversity. Athens invented democracy, philosophy, and drama. Persia's Achaemenid Empire stretched from Greece to India, and its distinctive feature was tolerating subject peoples' religions and customs.",
        },
      ],
      quiz: {
        question:
          "What was the distinctive feature of the Persian Achaemenid Empire's approach to ruling its diverse subject peoples?",
        options: [
          {
            id: "a",
            text: "It imposed a uniform legal code derived from Hammurabi's laws across all conquered territories",
            isCorrect: false,
          },
          {
            id: "b",
            text: "It tolerated subject peoples' religions and local customs, offering a model of imperial administration through inclusion rather than suppression",
            isCorrect: true,
          },
          {
            id: "c",
            text: "It appointed local kings as satraps who retained complete autonomy in return for tribute and military service",
            isCorrect: false,
          },
          {
            id: "d",
            text: "It spread Zoroastrianism throughout the empire as a unifying state religion while permitting private worship",
            isCorrect: false,
          },
        ],
        explanation:
          "The Achaemenid Persian Empire's policy of religious and cultural tolerance was genuinely unusual in the ancient world. Cyrus the Great famously permitted the Jewish exiles in Babylon to return to Jerusalem and rebuild their Temple — he is one of the few non-Jewish figures celebrated in the Hebrew Bible. The policy was strategic as well as philosophical: an empire stretching from Greece to India could not be governed through cultural suppression alone. The Romans later adopted a similar approach, requiring only the performance of civic religion while permitting local practice.",
      },
    },
    {
      id: "am-02-events",
      title: "Key Events",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Marathon: Western Civilisation's Closest Call" },
        {
          type: "paragraph",
          content:
            "490 BCE: a Persian force vastly outnumbering the Athenians was defeated by better-armoured hoplites. Athens survived. Democracy, philosophy, and drama got a century to develop.",
        },
        {
          type: "paragraph",
          content:
            "Alexander the Great conquered from Egypt to India in a decade and died at 32. His empire fragmented — but his lasting achievement was cultural: Greek became the language of educated discourse across the eastern Mediterranean, the vehicle through which philosophy and Christianity would travel.",
        },
        { type: "heading", content: "Rome: From Republic to Empire to Fall" },
        {
          type: "paragraph",
          content:
            "Hannibal crossed the Alps with war elephants and came closer to ending Rome than any later crisis. Rome survived, crushed Carthage, and built an empire. Caesar crossed the Rubicon, was assassinated, and produced Augustus — who ruled for 44 years while pretending to preserve the Republic.",
        },
        {
          type: "paragraph",
          content:
            "Constantine converted to Christianity in 312 CE — within a generation, the most persecuted sect in the empire became its official church. Muhammad's migration to Medina in 622 CE marked the founding of the Muslim community. Within a century, Islam stretched from Spain to Central Asia. The Black Death (1347–51) then killed 30–60% of Europe's population in four years and dissolved feudal labour arrangements.",
        },
        {
          type: "paragraph",
          content:
            "Gutenberg's printing press (c.1440) ended the medieval information order. Within fifty years millions of books were printed. The Protestant Reformation — which depended on mass distribution of vernacular scripture — would have been impossible without it.",
        },
      ],
      quiz: {
        question:
          "What was the broader cultural significance of Alexander the Great's conquests beyond their military achievement?",
        options: [
          {
            id: "a",
            text: "They created a single administrative unit stretching from Greece to India that allowed unprecedented economic integration",
            isCorrect: false,
          },
          {
            id: "b",
            text: "They spread the Greek language as the medium of educated culture from Egypt to India, creating the Hellenistic world through which philosophy and later Christianity would travel",
            isCorrect: true,
          },
          {
            id: "c",
            text: "They destroyed the Persian Empire's administrative structures and replaced them with Greek democratic institutions",
            isCorrect: false,
          },
          {
            id: "d",
            text: "They demonstrated that a professional citizen-army was militarily superior to the larger conscript forces of Eastern empires",
            isCorrect: false,
          },
        ],
        explanation:
          "Alexander's military conquests were spectacular but temporary — his empire fragmented at his death. His lasting achievement was cultural: the Hellenistic world in which Greek was the language of educated discourse across the eastern Mediterranean and Near East. This had enormous consequences. The Hebrew scriptures were translated into Greek (the Septuagint) for Jewish communities who no longer read Hebrew. The New Testament was written in Greek. The philosophical vocabulary of Plato and Aristotle became the framework within which Christianity and Islam would develop their theology. The conquests lasted decades; the cultural effect lasted millennia.",
      },
    },
    {
      id: "am-03-figures",
      title: "Major Figures",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Socrates: Philosophy's First Martyr" },
        {
          type: "paragraph",
          content:
            "Socrates wrote nothing. He asked questions until their contradictions collapsed. Athens convicted him of impiety and corrupting youth — charges thinly veiling democratic resentment. He chose death over silence.",
        },
        {
          type: "paragraph",
          content:
            "Plato built the Theory of Forms — physical objects are shadows of ideal realities — and shaped Western metaphysics for two millennia. Aristotle rejected his teacher's idealism and built philosophy from empirical observation. His authority covered logic, biology, politics, and ethics until the Scientific Revolution.",
        },
        { type: "heading", content: "Rome's Builders and Transformers" },
        {
          type: "paragraph",
          content:
            "Julius Caesar was soldier, politician, and self-publicist — his Gallic Wars commentaries were partly a political campaign. His assassination produced not the Republic his killers sought but Augustus: effective monarchy wrapped in republican clothing, 44 years of relative stability.",
        },
        {
          type: "paragraph",
          content:
            "Constantine turned Christianity from persecuted sect to state religion in one reign. Muhammad unified Arabia and founded the world's second-largest religion. Charlemagne reunited much of Western Europe for the first time since Rome. Genghis Khan built history's largest contiguous land empire through genius and systematic terror. Aquinas reconciled Aristotle with Christian theology and dominated Catholic thought for centuries.",
        },
      ],
      quiz: {
        question:
          "What made Aristotle's intellectual contribution distinct from Plato's, and why did both remain influential for so long?",
        options: [
          {
            id: "a",
            text: "Aristotle focused on theology while Plato addressed politics, giving each influence over separate domains of medieval intellectual life",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Aristotle built systematic philosophy from empirical observation rather than abstract idealism, covering logic, biology, politics, and ethics with an authority that lasted until the Scientific Revolution",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Aristotle wrote for a general audience while Plato wrote for specialists, giving Aristotle's ideas broader circulation through the medieval period",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Aristotle's works were preserved in Arabic while Plato's were preserved in Greek, giving each influence in different cultural spheres",
            isCorrect: false,
          },
        ],
        explanation:
          "Plato was an idealist who believed true reality lay in abstract Forms, of which the physical world was only a shadow. Aristotle rejected this and built his philosophy from systematic observation of the physical world — classifying animals, analysing political constitutions, developing formal logic. His systematic comprehensiveness meant his works served as reference texts across almost every field of knowledge for nearly two thousand years. When Aquinas reconciled Aristotle with Christian theology in the 13th century, he effectively made Aristotle the philosophical authority for the Church.",
      },
    },
    {
      id: "am-04-turning",
      title: "Turning Points",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Axial Age: All the Big Ideas Arrived at Once" },
        {
          type: "paragraph",
          content:
            "Between roughly 800–300 BCE, the Buddha taught in India, Confucius taught in China, Hebrew prophets developed ethical monotheism, and Greek philosophers invented systematic inquiry. Unconnected cultures, simultaneous revolution. The moral foundations billions still live by were all laid here.",
        },
        { type: "heading", content: "Constantine's Conversion Changed Everything" },
        {
          type: "paragraph",
          content:
            "One decision — attributed to a vision before the Battle of Milvian Bridge in 312 CE — took Christianity from persecuted minority to official state religion in a single reign. The institutional church that resulted was shaped by Roman administrative structures: hierarchical, Latin-speaking, entangled with power.",
        },
        { type: "heading", content: "The Black Death Broke Feudalism" },
        {
          type: "paragraph",
          content:
            "30–60% of Europe's population dead in four years. Suddenly lords were competing for surviving workers. Feudalism's logic — a surplus of tied labour — inverted overnight. The Peasants' Revolt followed. The Church lost spiritual authority. Renaissance humanism began growing in the ruins.",
        },
        {
          type: "paragraph",
          content:
            "Gutenberg's press didn't just speed up the transmission of ideas — it changed which ideas could exist at scale. The Protestant Reformation was impossible without it. It was the internet of the 15th century.",
        },
      ],
      quiz: {
        question:
          "How did the Black Death transform European feudal economics, despite being primarily a catastrophic mortality event?",
        options: [
          {
            id: "a",
            text: "It destroyed the banking systems of Italian city-states, forcing a transition from trade-based to agricultural economics across Western Europe",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Labour scarcity following mass death gave surviving peasants unprecedented bargaining power, undermining feudalism's dependence on a surplus of tied workers",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Lords consolidated landholdings from dead families into larger estates that required less labour and could be farmed more efficiently",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Church wealth from plague bequests made it the dominant economic institution in Europe, crowding out secular commerce",
            isCorrect: false,
          },
        ],
        explanation:
          "Feudalism's economic logic depended on a labour surplus: if workers were plentiful and land was scarce, lords could impose unfavourable terms on tied serfs who had no alternatives. The Black Death inverted this ratio overnight. With perhaps half the population dead and land now relatively plentiful, lords competed for surviving workers. Peasants could demand wages, move to better lords, or leave the land for towns. The Peasants' Revolt in England (1381) and similar uprisings across Europe reflected this new confidence. Feudalism survived, but it had been fatally weakened by a demographic event rather than by political reform.",
      },
    },
    {
      id: "am-05-legacy",
      title: "Legacy & Long-Term Impact",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Roman Law Still Governs Half the World" },
        {
          type: "paragraph",
          content:
            "Roman law is the foundation of every continental European legal system — and through colonial export, of systems across Latin America, Africa, and Asia. Justinian's 6th-century compilation was rediscovered at Bologna in the 11th century and founded the Western legal academy.",
        },
        { type: "heading", content: "Athenian Democracy: Inspiring Myth as Much as Direct Inheritance" },
        {
          type: "paragraph",
          content:
            "Athenian democracy excluded women, slaves, and foreigners — the majority of the population. Two thousand years of monarchy and feudalism separate Athens from modern democracy. The American Founders studied Athens through texts, not institutions. The legacy is generative mythology as much as direct inheritance.",
        },
        {
          type: "paragraph",
          content:
            "The three Abrahamic religions provide the moral framework for roughly half of humanity. The medieval university — Bologna (1088), Oxford, Paris — institutionalised knowledge transmission in forms that persist today. Gothic cathedrals remain among the most technically ambitious structures ever built.",
        },
      ],
      quiz: {
        question:
          "Why is the Athenian democratic legacy described as partly mythological in its influence on modern democracy?",
        options: [
          {
            id: "a",
            text: "Athenian democracy was actually an oligarchy in which the wealthy controlled voting outcomes through patronage",
            isCorrect: false,
          },
          {
            id: "b",
            text: "More than two thousand years of monarchy and feudalism separate Athens from modern democracy, and Athenian practice excluded women, slaves, and foreigners",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Modern democracy was actually modelled on Roman republicanism rather than Athenian direct democracy",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Athenian democratic institutions were destroyed by Alexander the Great and not preserved for subsequent generations to study",
            isCorrect: false,
          },
        ],
        explanation:
          "The claim of direct democratic descent from Athens obscures two problems. First, Athenian democracy was substantively different from modern democracy — direct participation rather than representation, radically limited franchise, dependent on slave labour to free citizens for political participation. Second, the continuous tradition claimed from Athens to Washington runs through centuries of monarchy, aristocracy, and feudalism during which nothing resembling democracy operated anywhere in Europe. The Founders studied Athens through texts, not through institutions. The Athenian legacy was inspirational mythology as much as institutional inheritance — but that mythology has been enormously productive.",
      },
    },
    {
      id: "am-06-today",
      title: "Why This Matters Today",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Classical World Is a Political Mirror" },
        {
          type: "paragraph",
          content:
            "Every political faction invokes Rome or Athens for its own purposes. Conservatives cite Roman law. Radicals cite Athenian direct democracy. Nationalists cite Roman cultural unity. The classical world is what Western civilisation holds up to see itself — and the reflection changes with the viewer's politics.",
        },
        { type: "heading", content: "Church vs. State: A Medieval Fight Still Running" },
        {
          type: "paragraph",
          content:
            "The Investiture Controversy (11th–12th centuries) was the first sustained argument about religious vs. secular authority. The Concordat of Worms (1122) established in principle that spiritual and temporal power were distinct. That principle — now foundational to liberal political theory — was politically fought over, not philosophically discovered.",
        },
        { type: "heading", content: "The Crusades Still Shape How We Talk About Each Other" },
        {
          type: "paragraph",
          content:
            "Osama bin Laden invoked the Crusades repeatedly. Bush used the word 'crusade' after September 11 and had to retract it immediately. The period is remembered very differently in Western and Islamic traditions — and that difference in memory is itself a live political fact.",
        },
        { type: "heading", content: "Rome's Fall Warns That Complexity Isn't Permanent" },
        {
          type: "paragraph",
          content:
            "Every generation reads Rome's fall as a warning about its own anxieties — immigration, moral decline, inequality, overextension. The honest account: a combination of external pressure, political instability, fiscal crisis, and administrative collapse, over centuries. Complex civilisations are not permanent by default.",
        },
      ],
      reflection: {
        prompt:
          "Historians observe that each generation finds in Rome's fall a mirror of its own anxieties — moral decline, immigration, inequality, overextension, climate. Look at the contemporary world and identify what you think is the most useful parallel with Rome's gradual decline: which features of that decline do you see recurring, and which features of the modern world make you think the comparison is being overdrawn? What does the comparison reveal about our present moment, and what does it obscure?",
      },
    },
  ],
}

export default course
