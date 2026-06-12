import type { Course } from "@/types"

const course: Course = {
  id: "fashion-houses",
  title: "Fashion Houses",
  slug: "fashion-houses",
  description:
    "Deep dives into the great fashion houses — Chanel, Dior, YSL, Balenciaga, Prada, Hermès — their founding visions, evolution, and the designers who shaped them.",
  category: "fashion",
  accentColor: "#d4a8c0",
  estimatedHours: 3,
  tags: ["fashion-houses", "luxury", "couture", "brand", "heritage"],
  lessons: [
    {
      id: "fhs-01-french",
      title: "The French Houses: Chanel and Dior",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Chanel: Anti-Ornament as Philosophy" },
        {
          type: "paragraph",
          content:
            "Chanel borrowed jersey from men's sportswear and built an empire. The suit, the chain bag, the No. 5 — all built on one idea: elegance through subtraction. Practicality as a radical act.",
        },
        {
          type: "paragraph",
          content:
            "Lagerfeld's 36-year run proved the codes were a vocabulary, not a cage. He made the Grand Palais into a supermarket, a rocket launch, a Chanel-branded world. The house became a spectacle — and the clothes still worked.",
        },
        { type: "heading", content: "Dior: Fashion's Most Complex Succession" },
        {
          type: "paragraph",
          content:
            "Dior died in 1957. YSL was 21 when he took over — and was fired two years later. Galliano ran the house for 14 spectacular, self-destructive years. Then Raf Simons stripped it back. Then Maria Grazia Chiuri made it explicitly feminist.",
        },
        {
          type: "paragraph",
          content:
            "Every creative director at Dior answered the same question differently: what does this house actually stand for? The succession is fashion's richest argument about identity, heritage, and reinvention.",
        },
      ],
      quiz: {
        question: "What was Karl Lagerfeld's core insight about the Chanel brand codes that enabled his thirty-six-year tenure?",
        options: [
          {
            id: "a",
            text: "That the codes needed to be retired each decade and replaced with entirely new visual language",
            isCorrect: false,
          },
          {
            id: "b",
            text: "That the codes were a vocabulary — endlessly redeployable, quotable and subvertable without losing essential meaning",
            isCorrect: true,
          },
          {
            id: "c",
            text: "That spectacular show productions in the Grand Palais could compensate for conservative design",
            isCorrect: false,
          },
          {
            id: "d",
            text: "That the brand's commercial success depended on perfume rather than ready-to-wear",
            isCorrect: false,
          },
        ],
        explanation:
          "Lagerfeld understood that Chanel's visual codes — the quilted leather, the braid, the camellia, the two-tone shoe — were not limitations but assets: a vocabulary that could be spoken in an infinite number of ways across seasons. He could make them modern or historical, ironic or sincere, minimal or maximalist. This insight — that a codified identity is a strength rather than a constraint — is the foundation of sustainable luxury brand management.",
      },
    },
    {
      id: "fhs-02-avantgarde",
      title: "YSL, Balenciaga and the Avant-Garde",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "YSL: Couture Ideas, Ready-to-Wear Prices" },
        {
          type: "paragraph",
          content:
            "YSL invented le smoking, the safari jacket, the Mondrian dress, the trouser suit — then brought them all to Rive Gauche boutiques. He made designer fashion accessible without compromising. Prêt-à-porter became legitimate luxury.",
        },
        {
          type: "paragraph",
          content:
            "Tom Ford's YSL was the opposite: overtly sexual, American in its confidence, a deliberate contrast to Saint Laurent's European restraint. The debate about whether Ford honoured or contradicted the house is still going.",
        },
        { type: "heading", content: "Cristóbal Balenciaga: The Master's Master" },
        {
          type: "paragraph",
          content:
            "Balenciaga closed his house in 1968, declaring couture finished. He could cut, sew, and construct a garment alone — something rare even among couturiers. His shapes were architectural: forms that needed no body beneath them.",
        },
        { type: "heading", content: "Demna: Balenciaga as Cultural Commentary" },
        {
          type: "paragraph",
          content:
            "Demna Gvasalia took over in 2015 and went conceptual. The chunky trainer as luxury. The destroyed cardigan at £4,000. The IKEA bag in leather. Fashion commenting on fashion, capitalism, and the absurdity of luxury.",
        },
      ],
      quiz: {
        question: "What made Yves Saint Laurent's Rive Gauche boutiques (from 1966) a significant innovation in luxury fashion?",
        options: [
          {
            id: "a",
            text: "They were the first fashion boutiques to open outside Paris, establishing fashion as a global industry",
            isCorrect: false,
          },
          {
            id: "b",
            text: "They made designer fashion accessible in ready-to-wear form, legitimising prêt-à-porter as luxury",
            isCorrect: true,
          },
          {
            id: "c",
            text: "They were the first stores to sell clothing and perfume under the same brand roof",
            isCorrect: false,
          },
          {
            id: "d",
            text: "They introduced the concept of seasonal collections to the ready-to-wear market",
            isCorrect: false,
          },
        ],
        explanation:
          "YSL's Rive Gauche boutiques were revolutionary because they brought genuine designer fashion — not licensed copies or diffusion compromises — to a ready-to-wear market at accessible (if not cheap) prices. Before this, luxury fashion meant couture: expensive, exclusive, and custom-made. YSL demonstrated that prêt-à-porter could carry designer authorship with full integrity. This changed the economics and reach of luxury fashion permanently.",
      },
    },
    {
      id: "fhs-03-italian",
      title: "Italian Fashion: Prada and Gucci",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Prada: Fashion That Asks Questions" },
        {
          type: "paragraph",
          content:
            "Miuccia Prada took a Milanese leather goods company and turned it into fashion's most consistently interesting house. She was drawn to the ugly, the unflattering, the unconventional. The nylon backpack: industrial material, luxury object.",
        },
        {
          type: "paragraph",
          content:
            "Miu Miu gave her room to be eccentric. Two brands, one strategic brain: Prada austere and rigorous, Miu Miu loose and intimate. That's not an accident — it's brand architecture.",
        },
        { type: "heading", content: "Gucci: Tom Ford's Total Reinvention" },
        {
          type: "paragraph",
          content:
            "Ford rescued Gucci from near-bankruptcy in the 90s with overtly sexual, powerfully commercial collections. Velvet hipsters. Satin shirts. The GG logo as desire object. Not heritage revival — total reinvention.",
        },
        { type: "heading", content: "Alessandro Michele: Maximalism as Philosophy" },
        {
          type: "paragraph",
          content:
            "Michele arrived in 2015 and turned Gucci into a fever dream — embroidery, historical costume, camp, gender fluidity, layered nostalgia. The logo became a prop in a larger theatrical world. Then Sabato De Sarno stripped it back.",
        },
        {
          type: "paragraph",
          content:
            "Alongside Prada and Gucci: Versace's excess, Armani's deconstructed softness, Valentino's couture red. Italian fashion is a landscape of remarkable diversity within one word: luxury.",
        },
      ],
      quiz: {
        question: "What distinguished Miuccia Prada's design philosophy from most of her luxury fashion contemporaries?",
        options: [
          {
            id: "a",
            text: "She focused exclusively on leather goods rather than clothing to maintain quality standards",
            isCorrect: false,
          },
          {
            id: "b",
            text: "She was interested in the ugly, the unflattering, and the unconventional — treating fashion as cultural inquiry",
            isCorrect: true,
          },
          {
            id: "c",
            text: "She refused to show at Milan Fashion Week and presented only in unconventional art spaces",
            isCorrect: false,
          },
          {
            id: "d",
            text: "She collaborated with architects to design clothing with structural rather than draped construction",
            isCorrect: false,
          },
        ],
        explanation:
          "Miuccia Prada's distinction was her intellectual approach to fashion — her stated interest in ugliness, the unflattering, and the unconventional. Where most luxury houses pursued universal beauty and desire, Prada pursued something more uncomfortable and more interesting. Her collaborations with Rem Koolhaas formalised this: fashion as cultural enquiry, architecture as brand statement, the retail space as exhibition. This has made Prada one of the most consistently intellectually interesting houses in fashion.",
      },
    },
    {
      id: "fhs-04-hermes",
      title: "Hermès and the Luxury of Craft",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "From Saddles to Supreme Luxury" },
        {
          type: "paragraph",
          content:
            "Hermès started making harnesses for horses in 1837. When the car replaced the horse, the craft transferred — same hands, same standards, different objects. The horse-and-carriage logo isn't nostalgia. It's a direct line.",
        },
        { type: "heading", content: "The Birkin and the Kelly: Objects of Desire" },
        {
          type: "paragraph",
          content:
            "The Kelly bag became the Kelly in 1956 when Grace Kelly used one to shield her bump from photographers. The Birkin was designed in 1984 after Jane Birkin and the CEO met on a flight. Each bag is made by one artisan, start to finish, 18–24 hours.",
        },
        { type: "heading", content: "Orange: The Accidental Identity" },
        {
          type: "paragraph",
          content:
            "Hermès orange started as a wartime workaround — cream boxes weren't available, so orange it was. It stuck so hard it's now legally protected. Contingency became heritage. That's a branding lesson right there.",
        },
        { type: "heading", content: "Craft Is the Flex" },
        {
          type: "paragraph",
          content:
            "Most luxury goods are produced industrially, however expensively. Hermès insists on genuine artisanal manufacture. You can verify the hours. You can feel the quality. In a world of mass luxury, that insistence is the most powerful brand statement possible.",
        },
      ],
      quiz: {
        question: "How did 'Hermès orange' originate — and what does its subsequent adoption as brand identity reveal about luxury branding?",
        options: [
          {
            id: "a",
            text: "It was chosen by the founder as a reference to the orange groves near the original Paris workshop",
            isCorrect: false,
          },
          {
            id: "b",
            text: "It began as a wartime contingency when cream boxes were unavailable — chance became identity, showing that origin stories can be found, not just invented",
            isCorrect: true,
          },
          {
            id: "c",
            text: "It was introduced by Jean-Louis Dumas as part of a comprehensive brand identity refresh in the 1980s",
            isCorrect: false,
          },
          {
            id: "d",
            text: "It was the colour of the original equestrian leather used in Hermès saddlery",
            isCorrect: false,
          },
        ],
        explanation:
          "Hermès orange began as a practical solution to a wartime shortage — cream boxes were unavailable, so orange was used. The colour became so associated with the brand that it was retained and is now legally protected as a brand identity element. This illustrates something important about luxury brand identity: origin stories do not need to be intentional. What matters is the authenticity of the story once it exists, and the consistency of its application. Contingency can become heritage.",
      },
    },
    {
      id: "fhs-05-belgian",
      title: "The Belgian School and Outsiders",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Antwerp Six: Arrived Uninvited, Stayed Forever" },
        {
          type: "paragraph",
          content:
            "In 1986, six Antwerp Academy graduates hired a van, drove to London Fashion Week, and showed without an invitation. Dark. Rigorous. Rooted in fine arts, not couture tradition. Fashion didn't see them coming.",
        },
        {
          type: "paragraph",
          content:
            "Dries Van Noten built one of fashion's most loved independent houses and never sold it. His mix — Indian textiles, Flemish painting, military uniform, fragile florals — produces a consistent identity from entirely eclectic sources.",
        },
        { type: "heading", content: "Margiela: Anonymous, Radical, Permanent" },
        {
          type: "paragraph",
          content:
            "Margiela founded his house in 1988, never showed his face, never gave an interview. He sewed white labels over brand labels and showed clothes made from found objects. Institutional critique from inside the institution.",
        },
        { type: "heading", content: "Kawakubo: Fashion's Most Radical Voice" },
        {
          type: "paragraph",
          content:
            "Rei Kawakubo brought Comme des Garçons to Paris in 1981. Critics called it 'Hiroshima chic.' Dark, asymmetric, oversized, indifferent to flattery — four decades of work that keeps asking what clothing can be.",
        },
      ],
      quiz: {
        question: "What distinguished the Antwerp Six's approach from the mainstream fashion education of the 1980s?",
        options: [
          {
            id: "a",
            text: "They specialised in couture technique, mastering the craft before challenging its conventions",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Their work was rooted in fine arts education from a school without commercial agenda, producing intellectual rigour over commercial polish",
            isCorrect: true,
          },
          {
            id: "c",
            text: "They were trained by Belgian couturiers who deliberately rejected the Paris fashion system",
            isCorrect: false,
          },
          {
            id: "d",
            text: "They were the first designers to show collections without formal invitations to fashion week",
            isCorrect: false,
          },
        ],
        explanation:
          "The Antwerp Six's distinctiveness came directly from their context: the Royal Academy of Fine Arts in Antwerp had no commercial agenda and no fashion industry to feed. Its graduates emerged with fine arts rigour and intellectual ambition unconstrained by the need to please a market. This produced work that was darker, stranger, more conceptual than anything emerging from the Paris or Milan fashion education systems. Their 1986 London appearance was not a calculated disruption — it was simply what their education had produced.",
      },
    },
    {
      id: "fhs-06-learn",
      title: "Understanding Fashion Brand Identity",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "What Makes an Identity Last?" },
        {
          type: "paragraph",
          content:
            "The great houses — Chanel, Dior, Hermès, Prada — stay recognisable across decades and multiple creative directors. Not by doing the same thing. By having a founding philosophy that can be reinterpreted without being betrayed.",
        },
        { type: "heading", content: "Heritage vs. Irrelevance: The Eternal Tension" },
        {
          type: "paragraph",
          content:
            "Every creative director at a heritage house faces the same choice: honour the founding vision or ditch it for relevance. Raf Simons's Dior chose honour. Galliano's Dior chose theatrical invention. Both produced brilliant work — from the same founding document.",
        },
        { type: "heading", content: "The Three Coordinates of Brand Identity" },
        {
          type: "list",
          items: [
            "The silhouette: the relationship between the garment and the body — what shape does this house propose?",
            "The fabric: the material philosophy — what does this house believe about texture, weight, drape?",
            "The customer: who is this for, and what does it say about them — what identity does wearing this brand perform?",
          ],
        },
        { type: "heading", content: "The Right Fit for the Right Moment" },
        {
          type: "paragraph",
          content:
            "The best creative director appointments aren't just about talent — they're about fit. Demna's Balenciaga works because his interest in fashion as cultural commentary connects to Cristóbal's indifference to fashion's social rituals. The best appointments are arguments about what the house has always been.",
        },
      ],
      reflection: {
        prompt:
          "Choose one fashion house from this course that interests you most. What is its founding philosophy? Who is the creative director whose work you find most compelling, and why — what did they understand about the house that others missed? If you were appointed creative director tomorrow, what would you do in your first collection, and how would it connect to the founding vision?",
      },
    },
  ],
}

export default course
