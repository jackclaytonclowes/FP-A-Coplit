import type { Course } from "@/types"

const course: Course = {
  id: "ancient-medieval-history",
  title: "Ancient & Medieval History",
  slug: "ancient-medieval-history",
  description:
    "A survey of human civilisation from the ancient world through the medieval period — the empires, ideas, and cultural forces that shaped the foundations of the modern world.",
  category: "history",
  accentColor: "#8b6848",
  estimatedHours: 4,
  tags: ["ancient", "medieval", "classical", "empire", "civilisation"],
  lessons: [
    {
      id: "am-01-origins",
      title: "Origins & Context",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The First Cities and Empires" },
        {
          type: "paragraph",
          content:
            "Human civilisation — organised urban life, writing, law, long-distance trade — emerged first in Mesopotamia, the land between the Tigris and Euphrates rivers in what is now Iraq, around 3500 BCE. The Sumerians built the first cities: Uruk, Ur, Eridu. They developed cuneiform writing — originally an accounting system, marks pressed into clay tablets to record grain and livestock — that became the medium for law, literature, and astronomy. Hammurabi's law code (c.1754 BCE) was among the earliest written legal systems, codifying punishments that varied by social class in ways that tell us as much about Babylonian society as the laws themselves.",
        },
        {
          type: "paragraph",
          content:
            "Ancient Egypt, sustained by the Nile's annual floods depositing fertile silt, maintained a remarkable continuity of political and cultural form for nearly three thousand years — longer than the gap between Julius Caesar and today. The pharaoh was simultaneously king and god, and monumental architecture — the pyramids, the temples at Karnak — was the expression of state power made permanent in stone. Hieroglyphics, developed around 3200 BCE, served not just communication but ritual: inscribed in tombs, the words themselves were believed to have magical efficacy.",
        },
        { type: "heading", content: "Greece, Persia, and the Axial Age" },
        {
          type: "paragraph",
          content:
            "The Indus Valley civilisation (Harappa and Mohenjo-daro, 2600–1900 BCE) showed sophisticated urban planning — grid streets, standardised brick sizes, public drainage systems — that was not matched in Europe for another two thousand years. Ancient China's Shang and Zhou dynasties developed ancestor worship, bronze casting, and the political philosophy that would culminate in Confucius.",
        },
        {
          type: "paragraph",
          content:
            "Ancient Greece developed in city-states — poleis — rather than a single empire, and this fragmentation produced extraordinary intellectual and political diversity. Athens developed democracy (however limited by exclusion of women and slaves), philosophy as systematic inquiry, drama, and the Olympic games as a Pan-Hellenic institution. Persia's Achaemenid Empire (550–330 BCE), the first world empire, stretched from Greece to India. Its distinctive feature was tolerance of subject peoples' religions and local customs — a model of imperial administration that the Romans would later refine.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Greece, Rome, and the Ancient World" },
        {
          type: "paragraph",
          content:
            "The Battle of Marathon (490 BCE) is one of history's most consequential military engagements. A Persian force that vastly outnumbered the Athenians was defeated on the plain of Marathon by a smaller but better-armoured hoplite force. Athens's survival preserved the Greek experiment — democracy, philosophy, drama — for the century that followed. Herodotus treated it as the moment Western civilisation was saved from Eastern despotism; modern historians are more cautious, but the psychological impact on both sides was enormous.",
        },
        {
          type: "paragraph",
          content:
            "Alexander the Great's conquests (334–323 BCE) spread Greek language and culture — Hellenism — from Egypt to the borders of India in little over a decade. He died at 32 in Babylon, and his empire fragmented among his generals. But the Hellenistic world he created — where Greek was the language of educated people from Alexandria to Antioch — became the cultural medium through which philosophy, science, and eventually Christianity would travel.",
        },
        { type: "heading", content: "Rome's Rise and the Empire's Arc" },
        {
          type: "paragraph",
          content:
            "The Punic Wars (264–146 BCE) were Rome's existential struggle with Carthage for Mediterranean dominance. The Second Punic War, in which Hannibal crossed the Alps with war elephants and defeated Roman armies at Lake Trasimene and Cannae, came closer to ending Rome than any subsequent crisis. Rome's ultimate victory eliminated its last peer rival and set the course for Mediterranean empire. Julius Caesar's Gallic Wars (58–50 BCE) added a vast territory to Rome's dominion; his crossing of the Rubicon in 49 BCE with an army — illegal under Roman law — precipitated the civil wars that ended the Republic. His assassination in 44 BCE did not restore the Republic but produced Augustus, the first emperor, who ruled for 44 years.",
        },
        {
          type: "paragraph",
          content:
            "Constantine's conversion to Christianity in 312 CE — followed by the Edict of Milan giving Christians toleration, and eventually the adoption of Christianity as the state religion — transformed the most persecuted sect in the empire into its official church within a generation. The destruction of Jerusalem and its Temple by Titus in 70 CE dispersed the Jewish population and shaped the development of both Judaism (without the Temple, now centred on Torah study and synagogue) and nascent Christianity. The Fall of Western Rome in 476 CE ended the ancient world as an institutional fact, though 'fall' overstates the abruptness of a process that took centuries.",
        },
        {
          type: "paragraph",
          content:
            "Muhammad's Hijra — migration from Mecca to Medina in 622 CE, the first year of the Islamic calendar — marks the founding of the Muslim community. Within a century, Islam had spread from Arabia to Spain, Persia, and Central Asia. The Crusades (1095–1291), called by Pope Urban II to recapture Jerusalem, reshaped relations between Christianity and Islam across the Mediterranean for centuries. The Black Death (1347–51), carried by fleas on rats aboard trading ships from Central Asia, killed 30–60% of Europe's population in four years — a demographic catastrophe that dissolved feudal labour arrangements and hastened the end of the medieval economic order.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Greek Philosophers" },
        {
          type: "paragraph",
          content:
            "Socrates (469–399 BCE) wrote nothing — everything we know of him comes through others, primarily Plato. His method was interrogation: the Socratic method of questioning assumptions until their internal contradictions were revealed. He was tried and executed by Athens for impiety and corrupting the youth — the charges thinly veiling democratic resentment of a man who had embarrassed too many powerful people by showing them they did not know what they claimed to know. His willingness to die rather than stop philosophising made him philosophy's first martyr.",
        },
        {
          type: "paragraph",
          content:
            "Plato (428–348 BCE) systematised Socrates's insights and added his own. His theory of Forms — that the objects of the physical world are imperfect shadows of ideal Forms existing in a higher reality — shaped Western metaphysics for two millennia. His Republic proposed a society governed by philosopher-kings, trained through decades of philosophical education to grasp truth rather than merely opinion. Aristotle (384–322 BCE), Plato's student and the tutor of Alexander the Great, rejected his teacher's idealism and built systematic philosophy from careful empirical observation. His works on logic, biology, politics, poetics, and ethics remained authoritative for Western thought from his death until the Scientific Revolution.",
        },
        { type: "heading", content: "Rome and the Medieval World" },
        {
          type: "paragraph",
          content:
            "Julius Caesar (100–44 BCE) combined military genius with political brilliance and a gift for self-publicity — his Gallic Wars commentaries are among the finest military memoirs in any language, written partly to build his political reputation in Rome. His assassination by senators who feared his monarchical ambitions produced not the Republic they sought to save but a dynasty. Augustus (63 BCE – 14 CE), Caesar's heir, achieved what his adoptive father could not: he accumulated effective monarchical power while preserving republican forms, and ruled for 44 years of relative stability.",
        },
        {
          type: "paragraph",
          content:
            "Constantine (272–337 CE) transformed Christianity from a persecuted sect to the state religion of the Roman Empire — a transformation so rapid and total that the historian Edward Gibbon blamed Christianity for weakening Rome. Muhammad (570–632 CE) unified the Arabian Peninsula and founded the world's second-largest religion. Charlemagne (747–814 CE), King of the Franks and Holy Roman Emperor, reunited much of Western Europe under a single political authority for the first time since Rome, presiding over a brief cultural renaissance. Genghis Khan (1162–1227 CE) built the largest contiguous land empire in history, from China to Eastern Europe, through military genius and systematic terror. Thomas Aquinas (1225–1274 CE) reconciled Aristotle's philosophy — recovered for Western Europe through Arabic translations — with Christian theology, creating the synthesis that dominated Catholic thought for centuries.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Axial Age" },
        {
          type: "paragraph",
          content:
            "The philosopher Karl Jaspers coined the term 'Axial Age' for the period roughly 800–300 BCE, in which an extraordinary philosophical revolution occurred simultaneously across unconnected cultures. The Buddha was teaching in northern India; Confucius was teaching in China; the Hebrew prophets were developing ethical monotheism; the Greek philosophers were founding philosophy as systematic inquiry. Why this convergence happened — and whether it is even as simultaneous as it appears — is debated. What is not debated is the consequence: the philosophical foundations on which billions of people still organise their moral lives were all laid in this period.",
        },
        { type: "heading", content: "Constantine's Conversion" },
        {
          type: "paragraph",
          content:
            "Constantine's conversion in 312 CE is one of history's most consequential single decisions — or at least, a decision attributed to a single moment (the vision of a cross before the Battle of Milvian Bridge) that reflected a longer process. Christianity went from a persecuted minority religion to the favoured and eventually official religion of the Roman Empire within Constantine's reign. The institutional church that resulted — with its bishops, councils, creeds, and ultimately the papacy — was shaped by its adoption of Roman administrative structures. The Christianity that spread through Europe was Roman Christianity: organised, hierarchical, Latin-speaking, and entangled with political power.",
        },
        { type: "heading", content: "The Black Death" },
        {
          type: "paragraph",
          content:
            "The Black Death (1347–51) killed between 30% and 60% of Europe's population within four years. Its demographic consequences were staggering, but its economic and social consequences were at least as significant. The sudden labour scarcity gave surviving peasants bargaining power they had never previously possessed: lords competing for workers had to offer better terms. The rigid hierarchy of feudalism — which depended on a surplus of tied labour — was undermined. The Church, which had no adequate spiritual explanation for why the devout died alongside the sinful, lost authority. The trauma of mass death accelerated artistic and philosophical engagement with mortality — the danse macabre, the ars moriendi — that would feed into Renaissance humanism.",
        },
        {
          type: "paragraph",
          content:
            "Gutenberg's printing press (c.1440), while technically a medieval invention, ended the medieval information order: a world in which knowledge was reproduced by hand in monasteries and universities at immense cost, making books rare and literacy uncommon. Within fifty years of the press's invention, millions of books had been printed. The Protestant Reformation — which depended on mass distribution of vernacular scripture — would have been impossible without it. The printing press was the internet of its age: it did not just accelerate the transmission of existing ideas but changed which ideas could exist at scale.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Roman Law and Its Descendants" },
        {
          type: "paragraph",
          content:
            "Roman law is the foundation of every continental European legal system and, through colonial export, of legal systems across Latin America, Africa, and Asia. The distinction between civil law systems (derived from Roman law, operating through comprehensive legal codes) and common law systems (derived from English precedent, operating through accumulated judicial decisions) is the primary fault line in global legal practice today. Justinian's Corpus Juris Civilis (529–534 CE), the great compilation of Roman law, was rediscovered and taught at Bologna in the 11th century — founding the Western legal academy.",
        },
        { type: "heading", content: "Greek Democracy and Its Ideological Afterlife" },
        {
          type: "paragraph",
          content:
            "Athenian democracy was in practice highly restricted — citizens excluded women, slaves, and foreigners, who together constituted the majority of the population. Yet its ideological legacy has been the primary vocabulary through which modern democracies understand themselves. The American Founders, designing a republic, studied Athenian democracy and Roman republicanism. The French Revolutionaries dressed themselves in Roman republican clothing. The claim that Western democracy descends from Athens is partly mythological — more than two thousand years of monarchy, feudalism, and oligarchy separate them — but the myth has been generative.",
        },
        {
          type: "paragraph",
          content:
            "The three Abrahamic religions — Judaism, Christianity, and Islam — between them provide the moral and metaphysical framework for roughly half of humanity. They share scriptures, prophets, and ethical principles, and have spent most of their history in conflict over the differences. The university system, founded in the medieval period — Bologna (1088), Oxford (c.1096), Paris (c.1150) — institutionalised the transmission of knowledge in forms that persist today. Gothic architecture, developed in France in the 12th century, produced cathedrals that remain among the most technically and aesthetically ambitious structures ever built.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The Classical World as Political Mirror" },
        {
          type: "paragraph",
          content:
            "Appeals to the classical world are a constant feature of Western political argument. Conservatives invoke Roman law and constitutional precedent. Radicals invoke Athenian direct democracy against representative oligarchy. Religious figures invoke the early Church against its institutional successor. Nationalists invoke Rome's cultural unity against cosmopolitan diversity. The classical world is the mirror Western civilisation holds up to itself — and what it sees in that mirror changes with the politics of the viewer.",
        },
        { type: "heading", content: "Medieval Church-State Conflict as Template" },
        {
          type: "paragraph",
          content:
            "The Investiture Controversy of the 11th and 12th centuries — the conflict between popes and Holy Roman Emperors over who had the right to appoint bishops — is the first sustained argument about the separation of religious and secular authority in Western history. The Concordat of Worms (1122) that settled it established in principle that spiritual and temporal authority were distinct, even if the boundary remained contested. The separation of church and state, now foundational to liberal political theory, was not philosophically discovered but politically fought over, and the medieval precedents are still invoked in contemporary arguments about religious authority in public life.",
        },
        { type: "heading", content: "The Crusades and the Long Memory" },
        {
          type: "paragraph",
          content:
            "The Crusades — Christian military campaigns to capture and hold Jerusalem from Muslim control between 1095 and 1291 — remain active in collective memory in ways that their medieval participants could not have anticipated. Osama bin Laden repeatedly invoked the Crusades in framing Al-Qaeda's campaign against the West. George W. Bush's use of the word 'crusade' in the immediate aftermath of September 11 required rapid retraction. The period is remembered very differently in Western and Islamic historical traditions, and that difference in memory is itself a political fact.",
        },
        { type: "heading", content: "Rome and the Fragility of Complex Civilisations" },
        {
          type: "paragraph",
          content:
            "The fall of Rome has been interpreted in every generation as a warning applicable to that generation's anxieties. Gibbon blamed Christianity. Others have blamed moral decline, lead pipes, economic inequality, military overextension, climate change, or pandemic disease. The most historically defensible account is that the Western Empire was destroyed by a combination of factors — external pressure from migrations, internal political instability, fiscal crisis, and loss of administrative coherence — over several centuries, not in a single moment. What makes Rome's fall permanently instructive is not any single cause but the reminder that complex, technically sophisticated civilisations are not permanent by default.",
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
