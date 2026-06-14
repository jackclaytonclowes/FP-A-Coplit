import type { Course } from "@/types"

const course: Course = {
  id: "korean-cinema",
  title: "Korean Cinema",
  slug: "korean-cinema",
  description:
    "A guide to Korean cinema — from the New Wave of the late 1990s to global domination. The directors, movements, and films that make Korean cinema the world's most vital national cinema.",
  category: "film",
  accentColor: "#8b1414",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Seoul_at_night.jpg/1280px-Seoul_at_night.jpg",
  estimatedHours: 3,
  tags: ["korean", "new-wave", "genre", "social-critique", "asia"],
  lessons: [
    {
      id: "kc-01-origins",
      title: "The Korean New Wave: Origins",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Freedom Arrived, Then the Economy Collapsed" },
        {
          type: "paragraph",
          content:
            "South Korea democratised in 1987 — ending authoritarian censorship overnight. A generation of filmmakers came of age exactly when they were finally allowed to say anything.",
        },
        {
          type: "paragraph",
          content:
            "Then the 1997 IMF crisis hit. The economic miracle cracked, inequality became undeniable, and class anxiety became the generation's defining subject. Korean cinema got both freedom and something urgent to say.",
        },
        { type: "heading", content: "Censorship Gone, Genre Arrived" },
        {
          type: "paragraph",
          content:
            "Post-censorship, filmmakers could address political violence, corruption, and inequality for the first time. Chaebol-backed multiplex chains created an industrial infrastructure for serious commercial cinema. The conditions were perfect.",
        },
        { type: "heading", content: "A Generation Explodes Onto Screen" },
        {
          type: "paragraph",
          content:
            "Bong Joon-ho, Park Chan-wook, Kim Jee-woon, Lee Chang-dong — all arrived simultaneously. They had genre as a vehicle and creative freedom as fuel. The result was unlike any national cinema before or since.",
        },
      ],
      quiz: {
        question: "What two political and economic events were most formative for the Korean New Wave generation?",
        options: [
          {
            id: "a",
            text: "The Korean War's end and the country's subsequent industrialisation under Park Chung-hee",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The democratic transition of 1987 and the IMF financial crisis of 1997–98",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Government investment in cinema and the construction of multiplex chains by chaebol conglomerates",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The end of Japanese colonial cultural influence and the development of a distinct Korean national identity",
            isCorrect: false,
          },
        ],
        explanation:
          "The New Wave generation were shaped by two defining events: the 1987 democratic transition that ended authoritarian censorship and gave filmmakers freedom to address previously forbidden subjects; and the 1997–98 IMF crisis that collapsed the economic miracle and made class inequality, fragile prosperity, and economic anxiety the generation's dominant themes. Together these events produced both the political freedom and the subject matter that define Korean cinema's New Wave.",
      },
    },
    {
      id: "kc-02-directors",
      title: "The Directors",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Bong Joon-ho: Genre Is a Trojan Horse" },
        {
          type: "paragraph",
          content:
            "Memories of Murder, The Host, Parasite — each uses thriller or monster-movie conventions to smuggle in class critique. He's the most internationally recognised Korean filmmaker, and the first non-English film to win Best Picture.",
        },
        { type: "heading", content: "Park Chan-wook: Beautiful and Morally Disturbing" },
        {
          type: "paragraph",
          content:
            "The Vengeance Trilogy is a study in revenge's logic and futility — shot with visual beauty that makes the violence seductive and troubling at once. The Handmaiden and Decision to Leave extended his range further.",
        },
        { type: "heading", content: "Kim Jee-woon: Horror Made Precise" },
        {
          type: "paragraph",
          content:
            "A Tale of Two Sisters is among the finest horror films of its decade — psychologically complex, formally exact. I Saw the Devil pushed revenge cinema to its absolute limit.",
        },
        { type: "heading", content: "Lee Chang-dong: Quiet, Dense, Devastating" },
        {
          type: "paragraph",
          content:
            "Poetry, Burning, Secret Sunshine — literary cinema that attends to lives society ignores. Burning delivers its horror almost imperceptibly. His restraint hits harder than most filmmakers' explosions.",
        },
        { type: "heading", content: "Na Hong-jin and Hong Sang-soo: The Extremes" },
        {
          type: "paragraph",
          content:
            "Na Hong-jin's The Wailing offers cosmic horror with no rational explanation — overwhelming and irreducible. Hong Sang-soo works the opposite register: intimate, talky, Rohmer-esque. Korean cinema holds both.",
        },
      ],
      quiz: {
        question: "What distinguishes Lee Chang-dong's approach to social critique from Bong Joon-ho's?",
        options: [
          {
            id: "a",
            text: "Lee Chang-dong works in documentary, while Bong Joon-ho works in fiction",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Lee Chang-dong uses literary restraint and quiet humanism, while Bong embeds critique within genre convention",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Lee Chang-dong focuses on historical periods, while Bong addresses contemporary subjects",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Lee Chang-dong is primarily a horror director, while Bong works across multiple genres",
            isCorrect: false,
          },
        ],
        explanation:
          "Bong Joon-ho uses genre — thriller, monster movie, horror — as a vehicle for class critique, deploying popular genre conventions to deliver social commentary to a wide audience. Lee Chang-dong works in a literary register: quiet, dense, attentive to ordinary lives, building to emotional and psychological revelations through restraint rather than genre. Burning delivers its horror almost imperceptibly. Both filmmakers critique Korean society; the formal methods are entirely different.",
      },
    },
    {
      id: "kc-03-genre",
      title: "Genre Mastery: How Korea Reinvented the Thriller",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Korean Cinema Ignores Genre Boundaries" },
        {
          type: "paragraph",
          content:
            "Hollywood commits to a single register. Korean films mix tones without apology — Memories of Murder is a procedural, a dark comedy, and a tragedy simultaneously. This isn't confusion; it's a tradition.",
        },
        { type: "heading", content: "Pansori: Comedy and Tragedy Were Always the Same Thing" },
        {
          type: "paragraph",
          content:
            "Traditional Korean pansori storytelling mixes comedy and grief as a principle — each deepens the other. Korean cinema inherits this. The laughter in a Bong film makes the horror land harder.",
        },
        { type: "heading", content: "Memories of Murder Refuses to Resolve" },
        {
          type: "paragraph",
          content:
            "American procedurals promise a solution. Memories of Murder is based on an unsolved case — and it refuses the genre's basic promise. No killer caught. No order restored. Just incompetence and loss.",
        },
        { type: "heading", content: "Oldboy Argues Against Its Own Genre" },
        {
          type: "paragraph",
          content:
            "Conventional revenge films reward the protagonist's violence with catharsis. Oldboy's revenge logic is designed to produce catastrophe. Park Chan-wook built a trilogy to refute the pleasures of revenge cinema.",
        },
      ],
      quiz: {
        question: "How does Memories of Murder subvert the conventions of the American crime procedural?",
        options: [
          {
            id: "a",
            text: "It follows female detectives rather than the male protagonists typical of the American genre",
            isCorrect: false,
          },
          {
            id: "b",
            text: "It refuses the genre's promise of resolution — the case is never solved, and the film critiques the society conducting the investigation",
            isCorrect: true,
          },
          {
            id: "c",
            text: "It uses documentary footage of the actual crime scenes to create authenticity the American genre lacks",
            isCorrect: false,
          },
          {
            id: "d",
            text: "It focuses on the killer's perspective rather than the investigators, creating moral complexity",
            isCorrect: false,
          },
        ],
        explanation:
          "American crime procedurals typically promise resolution: the crime will be solved, the criminal caught, the social order restored. Memories of Murder, based on South Korea's first documented serial murder case, deliberately withholds this promise. The killer was never identified. The film ends with the lead detective — now a civilian — revisiting the culvert where the first body was found, and staring into the camera. There is no resolution. The genre's basic promise is refused.",
      },
    },
    {
      id: "kc-04-films",
      title: "Essential Films",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Two Decades, Dozens of Masterworks" },
        {
          type: "paragraph",
          content:
            "Korean cinema produced an extraordinary concentration of essential films post-democratisation. These aren't just the best-known — they're the ones that most reward close attention.",
        },
        {
          type: "list",
          items: [
            "Memories of Murder (2003) — Bong Joon-ho; the unsolvable case",
            "Oldboy (2003) — Park Chan-wook; revenge as catastrophe",
            "A Tale of Two Sisters (2003) — Kim Jee-woon; formal horror",
            "3-Iron (2004) — Kim Ki-duk; silence and intimate space",
            "The Host (2006) — Bong Joon-ho; monster film as family drama",
            "Mother (2009) — Bong Joon-ho; maternal love and moral horror",
            "Poetry (2010) — Lee Chang-dong; an elderly woman learning to see",
            "The Wailing (2016) — Na Hong-jin; cosmic horror without explanation",
            "The Handmaiden (2016) — Park Chan-wook; desire and deception",
            "Burning (2018) — Lee Chang-dong; class resentment and disappearance",
            "Parasite (2019) — Bong Joon-ho; the best-known Korean film globally",
            "Decision to Leave (2022) — Park Chan-wook; romantic obsession",
          ],
        },
        {
          type: "quote",
          content:
            "Once you overcome the one-inch-tall barrier of subtitles, you will be introduced to so many more amazing films.",
          author: "Bong Joon-ho",
        },
      ],
      quiz: {
        question: "Which year saw the release of Memories of Murder, Oldboy, and A Tale of Two Sisters — and why was this significant?",
        options: [
          {
            id: "a",
            text: "2003; it demonstrated the depth of talent in the New Wave generation arriving simultaneously",
            isCorrect: true,
          },
          {
            id: "b",
            text: "2006; the year Korean cinema first received major international festival recognition",
            isCorrect: false,
          },
          {
            id: "c",
            text: "1999; the year Korean cinema was formally supported by the government cultural export programme",
            isCorrect: false,
          },
          {
            id: "d",
            text: "2010; the year Parasite's success brought Korean cinema to global mainstream attention",
            isCorrect: false,
          },
        ],
        explanation:
          "2003 produced three of the most important Korean films ever made — Memories of Murder, Oldboy, and A Tale of Two Sisters — from three different directors working independently. That a national cinema could produce three masterworks in a single year from three directors none of whom was yet globally famous demonstrated the extraordinary depth of creative talent the New Wave had generated. It remains one of the most remarkable single years in any national cinema's history.",
      },
    },
    {
      id: "kc-05-society",
      title: "Korean Society as Subject",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Korea Is Divided, Militarised, and Economically Explosive" },
        {
          type: "paragraph",
          content:
            "The Korean War never officially ended — just an armistice. The DMZ cuts the peninsula in two. Mandatory military service shapes every man's life. Korean cinema processes all of this — loudly.",
        },
        { type: "heading", content: "Confucian Hierarchy Meets Modern Individualism" },
        {
          type: "paragraph",
          content:
            "Obligations to parents, employers, and teachers run deep — and clash constantly with capitalist individualism. That tension drives Park Chan-wook's family dynamics and traps Lee Chang-dong's characters.",
        },
        { type: "heading", content: "The Chaebol Economy Makes Class Visible" },
        {
          type: "paragraph",
          content:
            "Samsung, Hyundai, LG — a handful of family conglomerates dominate the economy and concentrate wealth at the top. Parasite's sub-basement family and penthouse employers aren't metaphors. They're real.",
        },
        { type: "heading", content: "Gender Inequality Gets Its Cinema" },
        {
          type: "paragraph",
          content:
            "The Handmaiden, A Tale of Two Sisters, Lady Vengeance — all centre women's confinement and resistance. Recent Korean films by women directors address gender inequality with increasing directness.",
        },
      ],
      quiz: {
        question: "What does Parasite's architecture — the below-ground family vs. the above-ground employer household — represent in the context of South Korean society?",
        options: [
          {
            id: "a",
            text: "A metaphor for the relationship between traditional Korean culture and western modernity",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The literal economic reality of South Korea's chaebol-dominated class structure and its spatial consequences",
            isCorrect: true,
          },
          {
            id: "c",
            text: "The psychological distance between generations in a rapidly modernising society",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The contrast between rural poverty and urban wealth following South Korea's industrialisation",
            isCorrect: false,
          },
        ],
        explanation:
          "Parasite's spatial hierarchy — the Kim family in their semi-basement, the Parks in their architect-designed house above ground — is not merely symbolic. It describes a real condition of South Korean society: the extreme class inequality produced by a chaebol-dominated economy in which wealth is concentrated in a small number of family-controlled conglomerates. The film's basement revelation makes the spatial metaphor physical and literal: class is not just an economic condition but an architectural one.",
      },
    },
    {
      id: "kc-06-learn",
      title: "Where to Start",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Pick Your Entry Point by What You Already Love" },
        {
          type: "paragraph",
          content:
            "Korean cinema's range is wide. Start with the film that matches your existing taste — give yourself the best chance of falling in love before tackling the demanding work.",
        },
        { type: "heading", content: "For Everyone: Parasite (2019)" },
        {
          type: "paragraph",
          content:
            "Parasite is the ideal first film — globally accessible, tonally vast (comedy, thriller, tragedy), and structurally surprising. It shows you what Korean cinema does that Hollywood won't.",
        },
        { type: "heading", content: "For Thriller Lovers: Memories of Murder (2003)" },
        {
          type: "paragraph",
          content:
            "If you love crime procedurals, Memories of Murder will systematically dismantle what you know while remaining completely gripping. Its ending is unlike anything in the American genre.",
        },
        { type: "heading", content: "For Art Cinema Fans: Burning or Poetry" },
        {
          type: "paragraph",
          content:
            "Burning rewards lovers of slow, literary ambiguity. Poetry is humanist cinema at the level of the European masters. Both films reward patience with something close to irreversible.",
        },
        { type: "heading", content: "For Horror Audiences: The Wailing (2016)" },
        {
          type: "paragraph",
          content:
            "Cosmic evil, no rational explanation, no reassuring resolution. Not the easiest entry point — but among the most overwhelming cinematic experiences of the past decade.",
        },
        { type: "heading", content: "Build Toward the Demanding Films" },
        {
          type: "paragraph",
          content:
            "After your gateway: Oldboy, A Tale of Two Sisters, The Handmaiden in any order. Then Mother, Burning, Poetry. The Wailing last — its tonal extremity makes more sense with context.",
        },
      ],
      reflection: {
        prompt:
          "Choose the gateway film that matches your tastes — Parasite, Memories of Murder, Burning, or The Wailing. After watching, write answers to these three questions: What did the film do that a film from your home country or Hollywood would not do? At what moment did the film surprise you most, and why? What does the film reveal about Korean society that you did not know before watching it? Then choose your second Korean film from the list and notice how your understanding of the first film changes after watching the second.",
      },
    },
  ],
}

export default course
