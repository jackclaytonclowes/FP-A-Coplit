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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Chanel: Philosophy as Foundation" },
        {
          type: "paragraph",
          content:
            "Chanel's founding philosophy was anti-ornament. Gabrielle Chanel borrowed masculine fabrics — jersey, tweed — and used them to make clothes that allowed women to move. The Chanel suit (braid-trimmed collarless jacket, straight skirt) proposed elegance as practicality. The 2.55 bag, launched in February 1955, gave women a hands-free bag on a chain — a design solution that was also a statement of independence. Chanel No. 5, built around synthetic aldehydes, was a modernity manifesto in fragrance.",
        },
        {
          type: "paragraph",
          content:
            "Karl Lagerfeld's thirty-six-year tenure (1983–2019) was the longest continuous creative directorship in modern luxury fashion. His insight was that the Chanel codes were not constraints but a vocabulary: the quilted leather, the camellia, the braid, the two-tone shoe could be endlessly redeployed, quoted, subverted, and scaled without losing their essential meaning. He also understood that the Chanel show had to be an event — the Grand Palais transformed into a supermarket, a rocket launch, a Chanel-branded world.",
        },
        { type: "heading", content: "Dior: The Succession" },
        {
          type: "paragraph",
          content:
            "Christian Dior's death in 1957 set in motion one of fashion's most complex successions. Yves Saint Laurent was appointed creative director aged twenty-one, dismissed two years later. Marc Bohan followed for three decades of steady, unspectacular quality. Gianfranco Ferré brought Italian technical rigor. John Galliano arrived in 1996 and produced fourteen years of the most spectacular — and ultimately self-destructive — creative direction in fashion history: theatrical references to historical costume, to circus, to Edwardian grandeur.",
        },
        {
          type: "paragraph",
          content:
            "Raf Simons succeeded Galliano in 2012 with quiet minimalism: pared-back collections that referenced Dior's original architecture while stripping away historical pastiche. Maria Grazia Chiuri, the first woman to lead Dior, arrived in 2016 and introduced explicit feminist messaging — beginning with the 'We Should All Be Feminists' T-shirt — alongside embroidered references to female archetypes.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Yves Saint Laurent: Luxury Prêt-à-Porter" },
        {
          type: "paragraph",
          content:
            "Yves Saint Laurent founded his house in 1961 after his dismissal from Dior, and proceeded to invent, or perfect, a series of garments that became permanent wardrobe fixtures: the tuxedo for women (le smoking, 1966), the safari jacket, the mondrian dress (squares of primary colour in jersey, 1965), the peasant blouse, the trouser suit. YSL's genius was transforming couture concepts into ready-to-wear — his Rive Gauche boutiques (from 1966) brought designer fashion to a wider market without compromise. He made prêt-à-porter legitimate as luxury.",
        },
        {
          type: "paragraph",
          content:
            "Tom Ford's arrival at Gucci in 1994 was followed by his takeover of YSL in 1999. Ford's YSL was overtly sexual, commercial, and American in its confidence — a deliberate contrast to Saint Laurent's European restraint. The debate about whether Ford's approach honoured or contradicted the house's heritage continues.",
        },
        { type: "heading", content: "Cristóbal Balenciaga: The Master's Master" },
        {
          type: "paragraph",
          content:
            "Cristóbal Balenciaga closed his house in 1968, declaring that 'couture is finished.' His contemporaries — Dior, Chanel, Givenchy — considered him the supreme technician: the only couturier who could cut, sew, and construct a garment entirely alone. His shapes were architectural: the sack dress (1957), the cocoon coat, the balloon skirt — forms that created new silhouettes without depending on the body beneath. He was indifferent to fashion's social rituals and rarely showed his own face.",
        },
        { type: "heading", content: "Demna Gvasalia's Reinvention" },
        {
          type: "paragraph",
          content:
            "When Demna Gvasalia (who had founded Vetements) took over as creative director of Balenciaga in 2015, the reinvention was conceptual rather than reverential. The chunky trainer as luxury object, the destroyed cardigan at four thousand dollars, the IKEA bag rendered in leather — Gvasalia's Balenciaga used the tools of fashion to comment on fashion, on capitalism, on the absurdity of luxury. His approach owed as much to Martin Margiela as to Cristóbal Balenciaga, but under the historic name, it reached a far larger audience.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Prada: Fashion That Thinks" },
        {
          type: "paragraph",
          content:
            "Miuccia Prada took over the Milanese leather goods company founded by her grandfather in 1978 and spent the following decades making it one of fashion's most consistently interesting houses. Her approach was intellectual: she described herself as interested in the ugly, the unflattering, the unconventional. The Prada nylon backpack (1984) took industrial materials and made them luxury objects. Her collaborations with architect Rem Koolhaas's firm OMA — for Prada's retail architecture and exhibition design — formalised the idea that fashion could operate as cultural inquiry rather than simple commerce.",
        },
        {
          type: "paragraph",
          content:
            "Miu Miu, Prada's second line, gave her a space for more personal, eccentric work — younger, more playful, less mediated. The two brands together demonstrate a strategic intelligence about brand architecture: the mother brand austere and rigorous, the sister brand loose and intimate.",
        },
        { type: "heading", content: "Gucci: Multiple Reinventions" },
        {
          type: "paragraph",
          content:
            "Tom Ford rescued Gucci from near-bankruptcy in the mid-1990s with collections that were overtly sexual and powerfully commercial: velvet hipsters, satin shirts, a return of the GG logo as status object. His tenure redefined what a rescued luxury brand could look like — not heritage revival but total reinvention.",
        },
        { type: "heading", content: "Alessandro Michele's Maximalist Turn" },
        {
          type: "paragraph",
          content:
            "Alessandro Michele became Gucci's creative director in 2015 after Tom Ford's departure (and Frida Giannini's intervening tenure) and produced one of fashion's most dramatic reinventions: maximalism as philosophy. His Gucci layered embroidery over suiting, mixed historical costume with contemporary irony, embraced gender fluidity and camp aesthetics. The logo — which Tom Ford had made aspirational and sexual — became something different under Michele: a prop in a larger theatrical world of fantasy and nostalgia.",
        },
        {
          type: "paragraph",
          content:
            "Alongside Prada and Gucci, Versace (Gianni's excess, continued by Donatella after his murder in 1997), Armani (the suit deconstructed and made soft), and Valentino (romantic femininity, the couture red) form an Italian fashion landscape of remarkable diversity within the luxury sector.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "From Saddlery to Supreme Luxury" },
        {
          type: "paragraph",
          content:
            "Hermès was founded in 1837 as a saddler — maker of harnesses and bridles for the horses of European nobility. The horse-and-carriage logo is not affectation: it is a direct line to the founding craft. As the automobile displaced the horse, Hermès transferred its leather-working expertise to bags, belts, and luggage. The founding value — the highest possible quality of material worked by the most skilled possible hands — migrated intact.",
        },
        { type: "heading", content: "The Birkin and the Kelly" },
        {
          type: "paragraph",
          content:
            "The Kelly bag existed under various names from the 1930s before becoming the Kelly in 1956, when Grace Kelly used one to shield her pregnant stomach from photographers. The Birkin was designed in 1984 after a chance encounter between Jane Birkin and Hermès CEO Jean-Louis Dumas on a flight. Both bags are made by a single artisan from start to finish — the maroquinière spends 18 to 24 hours on each Birkin. The waiting list is, in part, a manufacturing reality and, in part, a deliberate strategy.",
        },
        { type: "heading", content: "Hermès Orange and the Brand Language" },
        {
          type: "paragraph",
          content:
            "'Hermès orange' began as a wartime contingency — the brand's signature cream boxes were unavailable, so orange (the only available colour) was used. It became so associated with the brand that it is now a legally protected identity element. The silk carré (square scarf), introduced in 1937, uses the same logic: a luxury material worked by craftspeople and printed with narratives of equestrian heritage and exotic geography.",
        },
        { type: "heading", content: "Craft as the Ultimate Luxury Signal" },
        {
          type: "paragraph",
          content:
            "In a fashion landscape where most luxury goods are produced industrially — however expensively — Hermès's commitment to genuine artisanal manufacture is its most powerful brand statement. The artisan's hours are verifiable; the quality of the leather and stitching are physically present in the object. Jean-Louis Dumas (who led the house from 1978 to 2006) and his nephew Axel Dumas (current CEO) have maintained this as a non-negotiable. Against the mass production of luxury, Hermès insists on the reality of craft.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Antwerp Six" },
        {
          type: "paragraph",
          content:
            "In 1986, six graduates of the Royal Academy of Fine Arts in Antwerp hired a van, drove to London Fashion Week, and showed their collections without invitation. The 'Antwerp Six' — Dries Van Noten, Ann Demeulemeester, Walter Van Beirendonck, Marina Yee, Dirk Van Saene, and Dirk Bikkembergs — introduced a different approach to fashion: intellectual, dark, rigorous, rooted in fine arts education rather than couture tradition. They came from a city without a fashion industry, taught by a school that had no commercial agenda, and it showed in their work.",
        },
        {
          type: "paragraph",
          content:
            "Dries Van Noten built one of fashion's most beloved independent houses on the principle of never selling: the house remains unacquired by any luxury group, dependent on its own commercial success. His mixing of pattern, print, and cultural reference — Indian textiles alongside Flemish painting, military uniform alongside fragile florals — produces a consistent visual identity from entirely eclectic sources.",
        },
        { type: "heading", content: "Martin Margiela" },
        {
          type: "paragraph",
          content:
            "Martin Margiela, also from Antwerp (though not one of the Six), founded Maison Martin Margiela in 1988 after working for Jean Paul Gaultier. His approach was institutional critique from inside the institution: garments with exposed construction, clothes made from recycled materials or found objects, the white label sewn over the brand label as a refusal of branding. Margiela himself maintained total anonymity — never photographed, never interviewed — for the duration of his tenure. He left the house in 2009; OTB Group (Diesel's parent) subsequently acquired it.",
        },
        { type: "heading", content: "Rei Kawakubo and Comme des Garçons" },
        {
          type: "paragraph",
          content:
            "Rei Kawakubo founded Comme des Garçons in Tokyo in 1969 and brought the brand to Paris in 1981 with a collection that ignored every convention of Western fashion. Critics called it 'Hiroshima chic.' The clothes were dark, asymmetric, apparently unfinished, oversized, indifferent to flattery. Over the following four decades, Kawakubo produced a body of work that is fashion's most consistently radical — each collection asking what clothing can be rather than what it should look like. The Met's 2017 retrospective 'Art of the In-Between' argued that her work exceeds fashion's usual categories.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "What Makes an Identity Coherent Across Decades?" },
        {
          type: "paragraph",
          content:
            "The great fashion houses — Chanel, Dior, Hermès, Balenciaga, Prada — have maintained recognisable identities across decades and multiple creative directors. This coherence does not come from doing the same thing repeatedly. It comes from having a clear founding philosophy that can be reinterpreted without being betrayed: Chanel's anti-ornament, Hermès's commitment to craft, Prada's intellectual restlessness, Balenciaga's architectural relationship with the body.",
        },
        { type: "heading", content: "Heritage and Innovation: The Tension" },
        {
          type: "paragraph",
          content:
            "Every creative director appointed to a heritage house faces the same tension: honour the founding vision or betray it in the name of relevance. Raf Simons's Dior chose honour — minimal, architectural, deeply respectful of Dior's original lines. John Galliano's Dior chose maximalist theatrical invention that used Dior's archive as a costume box rather than a source of values. Both approaches produced brilliant work. Both were, in different ways, responses to the same founding document.",
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
        { type: "heading", content: "How Creative Directors Inherit and Reinvent" },
        {
          type: "paragraph",
          content:
            "The most successful creative director appointments involve not just talent but fit: the right sensibility for the house's founding values at this particular moment. Demna Gvasalia's Balenciaga works because his interest in fashion as cultural commentary connects to Cristóbal Balenciaga's fundamental indifference to fashion's social rituals. Maria Grazia Chiuri's Dior works because her interest in the female gaze connects to Dior's founding engagement with the female body. The best appointments are arguments about what the house has always been about.",
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
