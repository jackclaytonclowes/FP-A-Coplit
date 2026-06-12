import type { Course } from "@/types"

const course: Course = {
  id: "korean-cinema",
  title: "Korean Cinema",
  slug: "korean-cinema",
  description:
    "A guide to Korean cinema — from the New Wave of the late 1990s to global domination. The directors, movements, and films that make Korean cinema the world's most vital national cinema.",
  category: "film",
  accentColor: "#8b1414",
  estimatedHours: 3,
  tags: ["korean", "new-wave", "genre", "social-critique", "asia"],
  lessons: [
    {
      id: "kc-01-origins",
      title: "The Korean New Wave: Origins",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Political and Cultural Context" },
        {
          type: "paragraph",
          content:
            "Korean cinema's New Wave did not emerge from nowhere. South Korea's rapid industrialisation from the 1960s onward had produced an economic miracle alongside political authoritarianism. The democratic transition of 1987 — following mass popular protests — was the foundational political event of a generation of filmmakers. They came of age at the moment South Korea became free.",
        },
        {
          type: "paragraph",
          content:
            "The end of strict film censorship after democratisation gave filmmakers freedom to address subjects — political violence, state corruption, social inequality — that had been forbidden. Simultaneously, government investment in cinema as a cultural export, and the emergence of the chaebol-backed multiplex chains, created an industrial infrastructure for serious commercial cinema that had not previously existed.",
        },
        { type: "heading", content: "The IMF Crisis as Generational Crucible" },
        {
          type: "paragraph",
          content:
            "The IMF financial crisis of 1997–98 — in which South Korea required an International Monetary Fund bailout and underwent severe economic restructuring — was a second formative event. The crisis collapsed the myth of the economic miracle and revealed the fragility of the prosperity that rapid industrialisation had produced. Economic anxiety, class consciousness, and the costs of growth became the generation's dominant subjects.",
        },
        { type: "heading", content: "The New Wave Emerges" },
        {
          type: "paragraph",
          content:
            "From this context emerged a generation of filmmakers who combined political freedom with economic anxiety: Bong Joon-ho, Park Chan-wook, Kim Jee-woon, Lee Chang-dong. These filmmakers had access to genre — the thriller, the horror film, the melodrama — as a vehicle for social critique, and the creative freedom to use it without restriction. The result was a national cinema unlike any other.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Bong Joon-ho: Class Critique and Genre Subversion" },
        {
          type: "paragraph",
          content:
            "Bong Joon-ho is the most internationally recognised Korean filmmaker — his Parasite (2019) became the first non-English-language film to win the Academy Award for Best Picture. His work — Memories of Murder, The Host, Mother, Snowpiercer, Okja — uses genre conventions as Trojan horses for social critique, particularly of class inequality. He works at the intersection of thriller, horror, and dark comedy with extraordinary formal control.",
        },
        { type: "heading", content: "Park Chan-wook: Revenge, Formal Beauty, and Moral Ambiguity" },
        {
          type: "paragraph",
          content:
            "Park Chan-wook's Vengeance Trilogy — Sympathy for Mr. Vengeance (2002), Oldboy (2003), Lady Vengeance (2005) — established him as Korean cinema's most formally distinctive voice. His films are studies in the logic and futility of revenge, executed with a visual beauty that makes their violence aesthetically seductive and morally disturbing simultaneously. The Handmaiden (2016) and Decision to Leave (2022) extended his range.",
        },
        { type: "heading", content: "Kim Jee-woon: Horror and Genre Mastery" },
        {
          type: "paragraph",
          content:
            "Kim Jee-woon's A Tale of Two Sisters (2003) is among the finest horror films of its decade: formally precise, psychologically complex, and devastating in its emotional impact. I Saw the Devil (2010) pushed revenge cinema to its extreme limit. His range across genre — horror, action, western — reflects Korean cinema's characteristic freedom from genre boundaries.",
        },
        { type: "heading", content: "Lee Chang-dong: Humanism and the Weight of History" },
        {
          type: "paragraph",
          content:
            "Lee Chang-dong's films — Oasis (2002), Secret Sunshine (2007), Poetry (2010), Burning (2018) — are the most literary of the New Wave generation: dense, quiet, attentive to the lives of people society ignores. Burning, based on a Haruki Murakami story, is a psychological thriller about class resentment and disappearance told with such restraint that its horror arrives almost imperceptibly.",
        },
        { type: "heading", content: "Na Hong-jin and Hong Sang-soo" },
        {
          type: "paragraph",
          content:
            "Na Hong-jin's The Wailing (2016) is Korean horror at its most extreme and cosmically terrifying: a film about evil that offers no rational explanation. Hong Sang-soo works in an entirely different register — intimate, talky, Rohmer-esque films about love, drink, and the passage of time that are as far from the thriller tradition as Korean cinema reaches.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Freedom from Genre Boundaries" },
        {
          type: "paragraph",
          content:
            "Korean cinema's most distinctive formal characteristic is its freedom from genre conventions. Hollywood genre films are typically committed to a single register: the thriller is thrilling; the comedy is funny; the horror film is scary. Korean films mix tones without conventional apology — Memories of Murder is simultaneously a procedural thriller, a dark comedy, and a tragedy; Parasite begins as comedy and ends as horror.",
        },
        { type: "heading", content: "The Pansori Tradition" },
        {
          type: "paragraph",
          content:
            "This tonal freedom has a cultural context: pansori, the traditional Korean performance art of storytelling through song, mixes comedy and tragedy as a matter of principle. Grief and laughter are not opposed in the pansori tradition but complementary — the comedy making the tragedy more bearable, the tragedy giving the comedy its depth. Korean cinema inherits this sensibility.",
        },
        { type: "heading", content: "Memories of Murder vs. the CSI Procedural" },
        {
          type: "paragraph",
          content:
            "American crime procedurals (CSI, Law and Order) promise resolution: the crime will be solved, the criminal identified, the social order restored. Memories of Murder (2003) is a serial killer investigation that deliberately refuses this promise. Based on South Korea's first serial murder case, it ends without resolution — the killer was never found. The film is about the incompetence of the investigation and the brutality of a society that cannot protect its own.",
        },
        { type: "heading", content: "Oldboy vs. the Conventional Revenge Film" },
        {
          type: "paragraph",
          content:
            "The conventional revenge film rewards its protagonist's violence with catharsis and justice. Oldboy's revenge structure is designed to make the pursuit of revenge actively produce catastrophe: the revenge is achieved, but achieving it destroys the protagonist utterly. Park Chan-wook's trilogy is an extended argument against the logic of revenge cinema — using the genre to refute the pleasures it offers.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Canon" },
        {
          type: "paragraph",
          content:
            "Korean cinema produced an extraordinary concentration of essential films in the two decades following democratisation. The following are not merely the best known but the films that most reward close attention and represent the range and ambition of the national cinema.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Korean War's Continuing Shadow" },
        {
          type: "paragraph",
          content:
            "The Korean War (1950–53) did not end in a peace treaty but in an armistice: the peninsula remains formally divided, with mandatory military service for South Korean men and the DMZ as a physical wound across the country. This unresolved history — the families separated across the border, the official silence about wartime atrocities — generates a particular quality of historical grief that runs through Korean cinema.",
        },
        { type: "heading", content: "Confucian Hierarchy vs. Modern Individualism" },
        {
          type: "paragraph",
          content:
            "Korean society maintains strong Confucian hierarchies — the obligations of children to parents, students to teachers, employees to employers — that generate constant tension with the individualism promoted by capitalist modernity. This tension between inherited obligation and individual desire appears throughout the cinema: in Park Chan-wook's family dynamics, in Lee Chang-dong's characters trapped by social position.",
        },
        { type: "heading", content: "The Chaebol Economy and Class Inequality" },
        {
          type: "paragraph",
          content:
            "South Korea's economy is dominated by chaebol — family-controlled conglomerates like Samsung, Hyundai, and LG — that concentrate enormous wealth at the top of the social hierarchy. Parasite's sub-basement family and its penthouse employers are not metaphors: they describe a real economic structure. Korean cinema returns obsessively to the physical and psychological reality of class division.",
        },
        { type: "heading", content: "Gender Inequality and Its Representation" },
        {
          type: "paragraph",
          content:
            "Korean cinema has historically reflected and critiqued the severe gender inequality of Korean society. The Handmaiden and A Tale of Two Sisters both centre women's experience of confinement, exploitation, and resistance. Lady Vengeance (2005) is explicitly about the gendered experience of imprisonment and justice. Recent Korean films — particularly by women directors — address gender inequality with increasing directness.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Gateway Films by Taste" },
        {
          type: "paragraph",
          content:
            "Korean cinema's range is wide enough that the right entry point depends on what you already love. Starting with the film that matches your existing interests gives you the best chance of falling in love with the cinema before you tackle its more demanding works.",
        },
        { type: "heading", content: "For Genre Newcomers: Parasite (2019)" },
        {
          type: "paragraph",
          content:
            "Parasite is the ideal entry point for audiences new to Korean cinema: it is globally accessible, has the broadest tonal range (comedy, thriller, tragedy), and its social critique is immediately comprehensible. It also contains a structural turn that resets the entire film — a useful demonstration of how Korean cinema handles genre expectations.",
        },
        { type: "heading", content: "For Thriller Lovers: Memories of Murder (2003)" },
        {
          type: "paragraph",
          content:
            "Memories of Murder is the ideal entry for audiences who already love crime procedurals and want to understand what Korean cinema does differently. The film will systematically dismantle the procedural conventions you know while remaining entirely gripping. Its ending is unlike anything in the American genre.",
        },
        { type: "heading", content: "For Art Cinema Audiences: Burning (2018) or Poetry (2010)" },
        {
          type: "paragraph",
          content:
            "Burning is the ideal entry for audiences who love slow-burn literary cinema — Antonioni, Murakami, films of sustained ambiguity. Poetry, Lee Chang-dong's masterwork, is for audiences who love humanist cinema of the finest European tradition. Both films reward patience with something close to irreversible.",
        },
        { type: "heading", content: "For Horror Audiences: The Wailing (2016)" },
        {
          type: "paragraph",
          content:
            "The Wailing is Korean horror at its most cosmically extreme — a film about the arrival of evil in a small village that offers no rational explanation and no reassuring resolution. It is not the easiest entry point but is among the most overwhelming cinematic experiences of the past decade.",
        },
        { type: "heading", content: "Building Toward the Demanding Films" },
        {
          type: "paragraph",
          content:
            "After your gateway film: Oldboy, A Tale of Two Sisters, and The Handmaiden reward viewing in any order. After those, Mother, Burning, and Poetry. The Wailing last — it is best approached with a full understanding of how Korean cinema manipulates tone, because its tonal shifts are extreme.",
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
