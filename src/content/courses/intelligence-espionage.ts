import type { Course } from "@/types"

const course: Course = {
  id: "intelligence-espionage",
  title: "Intelligence & Espionage",
  slug: "intelligence-espionage",
  description:
    "A study of the intelligence world — MI5, MI6, the CIA, KGB and Mossad — their histories, tradecraft, significant operations, and cultural representation from le Carré to Bond.",
  category: "crime",
  accentColor: "#1a3050",
  estimatedHours: 3,
  tags: ["intelligence", "espionage", "mi6", "cia", "kgb"],
  lessons: [
    {
      id: "ie-01-origins",
      title: "Origins & Structure",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Sun Tzu Knew: Intelligence Wins Wars" },
        {
          type: "paragraph",
          content:
            "Sun Tzu devoted the final chapter of The Art of War to espionage. Intelligence is as old as conflict. What changed in the 20th century was institutionalisation — permanent bureaucracies dedicated to secret information as a tool of state power.",
        },
        { type: "heading", content: "WWII Built the Modern Agencies" },
        {
          type: "paragraph",
          content:
            "MI6 (1909), MI5, the OSS (1942, later CIA), the KGB (1954) — all found their modern form in World War II's crucible. These agencies defined the Cold War competition that followed.",
        },
        { type: "heading", content: "The Cambridge Five: Elite Betrayal" },
        {
          type: "paragraph",
          content:
            "Five Cambridge graduates — Philby, Burgess, Maclean, Blunt, Cairncross — were recruited as Soviet agents in the 1930s and spent decades at the top of British intelligence. Philby ran MI6's anti-Soviet operations while working for the KGB. The hunter was the quarry.",
        },
        { type: "heading", content: "Mossad: Founded by Survivors" },
        {
          type: "paragraph",
          content:
            "Israel's Mossad (1949) was built by Holocaust survivors and underground operatives who knew exactly what failed intelligence cost. Their 1960 capture of Adolf Eichmann in Argentina remains one of the most celebrated intelligence operations in history.",
        },
      ],
      quiz: {
        question: "What made the Cambridge Five case so particularly damaging to British intelligence?",
        options: [
          {
            id: "a",
            text: "The five men had access to nuclear weapons secrets that they passed to the Soviet Union",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Kim Philby headed MI6's anti-Soviet operations — the officer protecting Britain from the KGB was the KGB's most valuable asset",
            isCorrect: true,
          },
          {
            id: "c",
            text: "They recruited an additional network of forty agents that has never been fully identified",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Their exposure caused the permanent collapse of the Anglo-American intelligence relationship",
            isCorrect: false,
          },
        ],
        explanation:
          "Philby's position as head of MI6's anti-Soviet section — the officer responsible for British counterintelligence against the KGB — meant that for years the KGB had complete visibility into British operations against it. Every operation Philby touched was compromised from the start; Soviet agents he was supposed to be monitoring were warned; British agents he was managing were in some cases sacrificed. The structural irony — that the hunter was the quarry — is what makes the case so analytically arresting.",
      },
    },
    {
      id: "ie-02-figures",
      title: "Key Figures",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Philby: The Ultimate Double Agent" },
        {
          type: "paragraph",
          content:
            "Kim Philby was recruited as a Soviet agent at Cambridge in 1934 and rose to near the top of MI6 — expected to become its Director-General. He defected to Moscow in 1963, and spent the rest of his life there, apparently miserable. A man who had betrayed two countries and belonged to neither.",
        },
        { type: "heading", content: "Gordievsky: The KGB Spy for MI6" },
        {
          type: "paragraph",
          content:
            "Oleg Gordievsky worked for MI6 for 11 years while climbing the KGB. When a CIA mole betrayed him in 1985, MI6 smuggled him out of Moscow in a car boot across the Finnish border. He lives in England today, under a pseudonym, under threat.",
        },
        { type: "heading", content: "Ames: The CIA's Worst Nightmare" },
        {
          type: "paragraph",
          content:
            "Aldrich Ames sold Soviet assets to the KGB from 1985. At least ten CIA sources were executed. His motivation? He needed money. He drove an expensive car on a government salary for nine years before anyone checked.",
        },
        { type: "heading", content: "Angleton and Cohen: Two Kinds of Intelligence" },
        {
          type: "paragraph",
          content:
            "James Angleton's counterintelligence paranoia paralysed the CIA's Soviet operations for years — proving that suspicion taken to its logical limit becomes self-destructive. Eli Cohen went the other way: so deep undercover in Syrian high command that he became an adviser to the Defence Minister, before being publicly executed in Damascus in 1965.",
        },
      ],
      quiz: {
        question: "What does James Angleton's career as CIA counterintelligence chief reveal about the internal logic of counterintelligence work?",
        options: [
          {
            id: "a",
            text: "That counterintelligence requires technical surveillance rather than human analysis",
            isCorrect: false,
          },
          {
            id: "b",
            text: "That the logic of penetration and deception, followed without limit, eventually becomes indistinguishable from paranoia",
            isCorrect: true,
          },
          {
            id: "c",
            text: "That the CIA's Soviet operations were consistently superior to their British equivalent",
            isCorrect: false,
          },
          {
            id: "d",
            text: "That Cold War counterintelligence required political rather than analytical leadership",
            isCorrect: false,
          },
        ],
        explanation:
          "Angleton's career is a case study in the self-defeating logic of counterintelligence at its extreme. His reasoning was impeccable by its own terms: if the KGB could plant a mole as senior as Philby, any apparent success could be a deception operation, any intelligence a provocation. Followed without limit, this reasoning leads to trusting nobody — which is what happened. Angleton's suspicion paralysed the CIA's Soviet operations for years, doing more damage than many actual Soviet penetrations.",
      },
    },
    {
      id: "ie-03-methods",
      title: "Methods & Operations",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "MICE: Four Reasons People Betray Their Country" },
        {
          type: "paragraph",
          content:
            "Money, Ideology, Compromise, Ego — the four vulnerabilities intelligence officers exploit to recruit agents. Most successful recruitments use more than one. Knowing which combination applies determines the approach.",
        },
        { type: "heading", content: "Bletchley Park Changed Everything" },
        {
          type: "paragraph",
          content:
            "Alan Turing's team broke Enigma, and ULTRA intelligence is credited with shortening the war by years. Bletchley proved that signals intelligence at scale could deliver what no human network could match. It spawned GCHQ and the NSA.",
        },
        { type: "heading", content: "Tradecraft: The Timeless Toolkit" },
        {
          type: "paragraph",
          content:
            "Dead drops. Brush passes. Legends. Defectors in place. The vocabulary of espionage has barely changed since the Cold War — because the fundamental problem hasn't. How do you pass secrets without being seen?",
        },
        { type: "heading", content: "Honey Traps: More Myth Than Method" },
        {
          type: "paragraph",
          content:
            "The KGB used 'swallows' and 'ravens' to compromise targets — and it worked sometimes. But the technique burned its own assets once the target realised what had happened. Its cultural prominence far exceeds its actual effectiveness.",
        },
      ],
      quiz: {
        question: "What does the acronym MICE represent in intelligence officer training, and what does it describe?",
        options: [
          {
            id: "a",
            text: "A classification system for different categories of intelligence operations by risk level",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Money, Ideology, Compromise, Ego — the four primary motivations that can be exploited to recruit agents",
            isCorrect: true,
          },
          {
            id: "c",
            text: "A Soviet counterintelligence framework for identifying foreign intelligence officers",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The four stages of a successful long-term intelligence operation from contact to extraction",
            isCorrect: false,
          },
        ],
        explanation:
          "MICE organises the recruiter's understanding of what makes a potential agent willing to betray their country or organisation: financial need or greed (Money), political or ideological conviction (Ideology), vulnerability to blackmail (Compromise), or the desire for recognition and importance (Ego). Most successful recruitments exploit more than one factor simultaneously. Understanding which combination is present in a target determines the approach an intelligence officer will use.",
      },
    },
    {
      id: "ie-04-culture",
      title: "Cultural Representation",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Le Carré: The Real Account" },
        {
          type: "paragraph",
          content:
            "David Cornwell worked for MI5 and MI6 before becoming John le Carré. His central insight: espionage is moral ambiguity and institutional betrayal, not heroic adventure. The Spy Who Came in from the Cold ends with the protagonist realising he was the instrument of a policy he would never have chosen.",
        },
        {
          type: "paragraph",
          content:
            "Tinker Tailor Soldier Spy — recognisably based on the Cambridge Five — presents MI6 as penetrated at the top, where loyalty is impossible to establish. It's one of the great post-imperial novels wearing a thriller disguise.",
        },
        { type: "heading", content: "Bond: The Fantasy" },
        {
          type: "paragraph",
          content:
            "Fleming worked in Naval Intelligence and knew what it was actually like — so Bond is wish-fulfilment. Clear enemies, moral certainty, institutional loyalty rewarded. Bond wins. The cultural dominance of the films has arguably shaped public perception of intelligence more than any documentary.",
        },
        { type: "heading", content: "The Americans and Bridge of Spies" },
        {
          type: "paragraph",
          content:
            "The Americans — two KGB illegals as a suburban American couple — asks what happens when you've lived your cover so long you can't locate your real self. Bridge of Spies examines the ethics of treating enemy spies as humans entitled to legal representation. Both beat Bond for depth.",
        },
      ],
      quiz: {
        question: "What distinguishes le Carré's treatment of espionage from the James Bond tradition?",
        options: [
          {
            id: "a",
            text: "Le Carré focuses on technical intelligence operations while Bond emphasises the human element",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Le Carré presents espionage as moral ambiguity and institutional betrayal; Bond presents it as heroic moral clarity",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Le Carré writes about domestic counterintelligence while Bond covers foreign operations",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Le Carré's work is set in the Cold War while Bond addresses contemporary threats",
            isCorrect: false,
          },
        ],
        explanation:
          "The fundamental difference between le Carré and Fleming is epistemological and moral. In Bond's world, there are enemies worth fighting and victories worth winning; the protagonist can trust his own judgement and his institution. In le Carré's world, the institution may be the enemy, the operation may be designed to sacrifice you, and the victory — if it comes — may be ethically indefensible. Le Carré worked inside the real institution; Fleming invented an ideal version of it.",
      },
    },
    {
      id: "ie-05-legacy",
      title: "Legacy & Modern Impact",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Five Eyes: The World's Biggest Intelligence Club" },
        {
          type: "paragraph",
          content:
            "The UKUSA Agreement (1946, declassified 2010) pools signals intelligence across the US, UK, Canada, Australia, and New Zealand. Five states, one integrated network, geographic responsibilities divided between them. Non-members get intelligence on a need-to-know basis.",
        },
        { type: "heading", content: "Snowden Revealed Mass Surveillance" },
        {
          type: "paragraph",
          content:
            "Edward Snowden's 2013 disclosures showed that Five Eyes agencies had been bulk-collecting civilian communications data on a scale with no Cold War equivalent. PRISM. XKeyscore. The debate about surveillance and civil liberties that followed has not been resolved.",
        },
        { type: "heading", content: "The Two Great Failures: 9/11 and Iraq" },
        {
          type: "paragraph",
          content:
            "9/11 was an institutional failure — information existed but couldn't cross agency silos. Iraq WMD was worse: analysis bent to match a policy conclusion already reached. One is about process; the other is about integrity. Iraq did more lasting damage.",
        },
        { type: "heading", content: "Stuxnet: When Code Becomes a Weapon" },
        {
          type: "paragraph",
          content:
            "The US-Israeli Stuxnet worm physically damaged Iranian centrifuges — the first cyberweapon to produce real-world physical effects. GCHQ, NSA, and Israel's Unit 8200 now hold offensive cyber capabilities that blur the line between intelligence and warfare.",
        },
      ],
      quiz: {
        question: "What distinguished the intelligence failure on Iraq's WMD from the failure to anticipate 9/11?",
        options: [
          {
            id: "a",
            text: "The Iraq failure involved foreign intelligence services while 9/11 was a domestic intelligence failure",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The Iraq failure involved analysis shaped to match a policy conclusion; 9/11 involved institutional barriers blocking information sharing",
            isCorrect: true,
          },
          {
            id: "c",
            text: "The Iraq failure was primarily a technical intelligence failure; 9/11 was a failure of human intelligence",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The Iraq failure was acknowledged quickly while the 9/11 failure took years to investigate",
            isCorrect: false,
          },
        ],
        explanation:
          "The 9/11 failure was primarily structural: information existed within different agencies that, had it been shared, might have disrupted the plot — but institutional barriers prevented the sharing. The Iraq failure was different and more corrosive: analysts and agencies produced assessments that supported the WMD conclusion policymakers wanted because they experienced political pressure to do so. The first failure is about process; the second is about the integrity of the analytical function itself. The Iraq failure is more damaging to the long-term credibility of intelligence institutions.",
      },
    },
    {
      id: "ie-06-reveals",
      title: "What This Reveals About Society",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Intelligence Is Applied Epistemology" },
        {
          type: "paragraph",
          content:
            "At their core, intelligence agencies face one question: how do you know what's true in a world of systematic deception? Every source may be lying. Every document may be forged. Every apparent success may be a provocation.",
        },
        { type: "heading", content: "Double Uncertainty: The Analyst's Condition" },
        {
          type: "paragraph",
          content:
            "Not only may the information be false — the analyst must also wonder if their own conclusion is the result of a successful deception. Angleton's paranoia is the logical terminus of this reasoning: follow it far enough and certainty disappears entirely.",
        },
        { type: "heading", content: "Le Carré vs Bond: Two Epistemologies" },
        {
          type: "paragraph",
          content:
            "Bond operates with certainty — the enemy is clear, success is possible, the institution is trustworthy. Le Carré's Smiley operates in permanent uncertainty, where the institution may be the enemy and the colleague may be the mole. One is a fantasy about knowability; the other is fiction about not knowing.",
        },
        { type: "heading", content: "Truth Doesn't Survive Power Well" },
        {
          type: "paragraph",
          content:
            "The Iraq WMD failure reveals the final problem: analysis that contradicts what the powerful want tends to get reshaped. Intelligence is supposed to tell truth to power. Power prefers confirmation. Every intelligence failure involves this tension somewhere.",
        },
      ],
      reflection: {
        prompt:
          "John le Carré said that intelligence work is fundamentally about the difficulty of knowing — how to establish truth in a world of deception. This problem is not unique to espionage: it applies to journalism, to science, to everyday judgement. Where in your own experience have you encountered the epistemological problem the intelligence world institutionalises — the question of how you can know something is true when you know that deception is possible? How did you navigate it?",
      },
    },
  ],
}

export default course
